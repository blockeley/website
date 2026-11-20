// https://nuxt.com/docs/api/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2026-11-01",

    modules: [ "@nuxt/eslint" ],

    css: [
        // Self-hosted, latin-only Poppins in the weights the site uses
        "@fontsource/poppins/latin-300.css",
        "@fontsource/poppins/latin-400.css",
        "@fontsource/poppins/latin-500.css",
        "@fontsource/poppins/latin-700.css",
        "@fontsource/poppins/latin-900.css",
        "~/styles/vendor.css"
    ],

    app: {
        head: {
            htmlAttrs: { lang: "en" },
            meta: [
                { name: "description", content: "Blockeley is a student-run recreation of the UC Berkeley campus in Minecraft. Explore the virtual campus on Java or Bedrock edition." },
                { name: "theme-color", content: "#ffc02e" }
            ],
            link: [
                { rel: "apple-touch-icon", sizes: "180x180", href: "/images/apple-touch-icon.png" },
                { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/favicon-32x32.png" },
                { rel: "icon", type: "image/png", sizes: "16x16", href: "/images/favicon-16x16.png" },
                { rel: "manifest", href: "/site.webmanifest" }
            ],
            noscript: [ { textContent: "Blockeley requires JavaScript." } ]
        }
    },

    experimental: {
        // Render error.vue into 404.html at build time (GitHub Pages serves it for unknown URLs),
        // instead of an empty shell that only fills in once JavaScript runs
        prerenderErrorPages: true
    },

    nitro: {
        prerender: {
            // club.html rather than club/index.html, so GitHub Pages serves /club without a redirect
            autoSubfolderIndex: false
        }
    },

    eslint: {
        config: { stylistic: false }
    }
});
