// The club's boards, shown on the Club page. After changing who is listed here, run
// `bun run heads` to download their Minecraft heads into public/images/heads/.

// Relative (not "@/") so scripts/heads.ts can import this file outside Nuxt
import type { Member } from "../types";

export const members: Member[] = [
    {
        ign: "X1_Dragon",
        uuid: "4d9da3a63a9b47e2a45f37d0e37c91d4",
        role: "Executive",
        icon: "shield-person",
    },
    {
        ign: "SimpleDF",
        uuid: "53f63bcb9f22445bb8021e1b46def662",
        role: "Executive",
        icon: "shield-person",
    },
    { ign: "Mistri", uuid: "347a17b6585146c287475576443a311a", role: "Tech", icon: "dns" },
    { ign: "RojoM", uuid: "79049f1cf2034f13940d9a3b634e2988", role: "Tech", icon: "dns" },
    { ign: "BGHDDevelopment", uuid: "92451b29e64c4734963eb5dcaaec5df5", role: "Tech", icon: "dns" },
    { ign: "mathhulk", uuid: "e7ec6c61f69f437f89f888c4d1536395", role: "Tech", icon: "dns" },
    { ign: "Rimpo__", uuid: "7f20c4d56c6147b19f8412b4df37003e", role: "PR", icon: "campaign" },
    { ign: "JingleTheLeo", uuid: "4b24812314a7423e9cb2e468d84ac2a1", role: "PR", icon: "campaign" },
    { ign: "ZophiaXP", uuid: "406405573a074cdbbbd3c173c7fe1e6b", role: "PR", icon: "campaign" },
    { ign: "Swannnie", uuid: "14a82a9f2346458681ec81068a540e3c", role: "HR", icon: "forum" },
    { ign: "zCat2", uuid: "ef292e7c8df0425db7e91c5f49f6cb81", role: "Build Lead", icon: "forum" },
    { ign: "SkyTechBytes", uuid: "280c3309f3244169b9e07e88f965d68c", role: "Flex", icon: "forum" },
    {
        ign: "Pikiwikibulbie",
        uuid: "b36d3bbdbf8c4c49ac915a2b5d32f971",
        role: "Events/Production",
        icon: "event",
    },
    {
        ign: "GetNuanced",
        uuid: "f836ece923e545178c5759dc41f501e6",
        role: "Events/Production",
        icon: "event",
    },
];

export const alumni: Member[] = [
    {
        ign: "Agentbjorn",
        uuid: "6ad104c9f8d646938823a7fc163b483b",
        role: "Advisory Board",
        icon: "badge",
    },
    {
        ign: "Zetrox42",
        uuid: "a9a0305137eb40dc89f9d0cb061c1ea3",
        role: "Advisory Board",
        icon: "badge",
    },
    {
        ign: "Zebraturkey96",
        uuid: "2ecf1e5a938743d89b49726a79542e2b",
        role: "Advisory Board",
        icon: "badge",
    },
    {
        ign: "Whale_Watch",
        uuid: "a4248f9fea6e4668928fa868d5a30639",
        role: "Advisory Board",
        icon: "badge",
    },
    {
        ign: "Onnowhere",
        uuid: "4f35f9ed57e7417f97ef3e4e90b75094",
        role: "Advisory Board",
        icon: "badge",
    },
    {
        ign: "Mathematician",
        uuid: "be1a52a4a3d64786b05205d850c4cc81",
        role: "Advisory Board",
        icon: "badge",
    },
    {
        ign: "falcon_heavy",
        uuid: "a1636c84cd664fb9b65f3fef365cd2ff",
        role: "Advisory Board",
        icon: "badge",
    },
];
