// Downloads each board member's Minecraft head from Mojang into public/images/heads/<uuid>.png.
//
//     bun run heads
//
// Third-party head renderers (mc-heads.net, Crafatar) have proven unreliable, serving default
// skins for players who have custom ones, so the site serves heads itself. Each file is the
// 8×8 face with the hat layer on top, exactly as the skin defines it; the page scales it up
// with `image-rendering: pixelated`. Re-run after changing app/data/board.ts or when members
// change their skins.

import { mkdir, writeFile } from "node:fs/promises";
import { PNG } from "pngjs";

import { alumni, members } from "../app/data/board";

const OUTPUT = new URL("../public/images/heads/", import.meta.url);

interface Profile {
    name: string;
    properties: { name: string; value: string }[];
}

async function skinUrl(uuid: string): Promise<string> {
    const response = await fetch(
        `https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`,
    );
    if (!response.ok) throw new Error(`profile lookup failed (${response.status})`);

    const profile = (await response.json()) as Profile;
    const textures = profile.properties.find((property) => property.name === "textures");
    if (!textures) throw new Error("profile has no textures");

    const decoded = JSON.parse(Buffer.from(textures.value, "base64").toString("utf8"));
    const url: string | undefined = decoded.textures?.SKIN?.url;
    if (!url) throw new Error("player uses a default skin");

    return url.replace(/^http:/, "https:");
}

// The 8×8 square at (x, y) of the skin, as RGBA rows
function region(skin: PNG, x: number, y: number): Buffer {
    const out = Buffer.alloc(8 * 8 * 4);
    for (let row = 0; row < 8; row++) {
        const start = ((y + row) * skin.width + x) * 4;
        skin.data.copy(out, row * 8 * 4, start, start + 8 * 4);
    }
    return out;
}

// Old skins often fill the unused hat layer with a single opaque colour; the game (and
// Crafatar) ignore a hat layer like that rather than drawing a solid block over the face
function isUsableHat(hat: Buffer): boolean {
    let transparent = false;
    for (let i = 0; i < hat.length; i += 4) {
        if (hat[i + 3]! < 255) transparent = true;
        if (hat.readUInt32BE(i) !== hat.readUInt32BE(0)) return true;
    }
    return transparent;
}

async function head(uuid: string): Promise<Buffer> {
    const response = await fetch(await skinUrl(uuid));
    if (!response.ok) throw new Error(`skin download failed (${response.status})`);

    const skin = PNG.sync.read(Buffer.from(await response.arrayBuffer()));
    const face = region(skin, 8, 8);
    const hat = region(skin, 40, 8);

    if (isUsableHat(hat)) {
        // Alpha-composite the hat over the face
        for (let i = 0; i < face.length; i += 4) {
            const alpha = hat[i + 3]! / 255;
            for (let channel = 0; channel < 3; channel++) {
                face[i + channel] = Math.round(
                    hat[i + channel]! * alpha + face[i + channel]! * (1 - alpha),
                );
            }
            face[i + 3] = 255;
        }
    }

    const png = new PNG({ width: 8, height: 8 });
    face.copy(png.data);
    return PNG.sync.write(png);
}

await mkdir(OUTPUT, { recursive: true });

let failures = 0;
for (const member of [...members, ...alumni]) {
    try {
        await writeFile(new URL(`${member.uuid}.png`, OUTPUT), await head(member.uuid));
        console.log(`✓ ${member.ign}`);
    } catch (error) {
        failures++;
        console.error(`✗ ${member.ign} (${member.uuid}): ${(error as Error).message}`);
    }
}

if (failures) process.exit(1);
