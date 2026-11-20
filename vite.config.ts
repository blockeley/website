import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// Loads vite-ssg's `ssgOptions` addition to Vite's config type
import type {} from "vite-ssg";

// vite-ssg appends <link>s for every file a page's components use, but its "already there?"
// check never matches, so files the entry chunk already links get a second, non-CORS link that
// the browser downloads again. Keep only the first stylesheet/modulepreload link per URL.
function dedupeLinks(html: string): string {
    const seen = new Set<string>( );

    return html.replace(/<link\b[^>]*>/g, tag => {
        const rel = /\brel="([^"]+)"/.exec(tag)?.[1];
        const href = /\bhref="([^"]+)"/.exec(tag)?.[1];

        if( ! rel || ! href || ! [ "stylesheet", "modulepreload" ].includes(rel) ) return tag;

        const key = `${ rel } ${ href }`;
        if(seen.has(key)) return "";

        seen.add(key);
        return tag;
    });
}

export default defineConfig({
    plugins: [ vue( ) ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    },
    ssgOptions: {
        formatting: "minify",
        // club.html rather than club/index.html, so GitHub Pages serves /club without a redirect
        dirStyle: "flat",
        // Also render the catch-all route as 404.html, which GitHub Pages serves for unknown paths
        includedRoutes: paths => [ ...paths.filter(path => ! path.includes(":")), "/404" ],
        onPageRendered: (route, html) => dedupeLinks(html)
    }
});
