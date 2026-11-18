import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

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
        includedRoutes: paths => [ ...paths.filter(path => ! path.includes(":")), "/404" ]
    }
});
