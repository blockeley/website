// https://nuxt.com/docs/api/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2026-11-01",

    modules: [ "@nuxt/eslint", "@nuxt/icon", "@nuxt/fonts" ],

    css: [ "~/styles/reset.css", "~/styles/base.css" ],

    // Icons from Iconify's Material Symbols set, inlined as <svg> at build time
    icon: {
        mode: "svg",
        class: "icon",
        size: "24px",
        serverBundle: { collections: [ "material-symbols" ] },
        // Names are built dynamically (e.g. `material-symbols:${ icon }`), so list them for the client bundle
        clientBundle: {
            icons: [
                "close", "fullscreen", "fullscreen-exit", "play-arrow", "menu", "priority-high",
                "shield-person", "dns", "campaign", "forum", "event", "badge"
            ].map(name => `material-symbols:${ name }`)
        }
    },

    // Self-hosted fonts from the installed @fontsource packages, with metric-matched fallbacks
    // so text doesn't shift when the web font arrives
    fonts: {
        families: [
            { name: "Poppins", provider: "npm", weights: [ 300, 400, 500, 700, 900 ], styles: [ "normal" ], subsets: [ "latin" ] },
            { name: "Merriweather", provider: "npm", weights: [ 400 ], styles: [ "normal" ], subsets: [ "latin" ] }
        ],
        providers: { google: false, googleicons: false, bunny: false, fontshare: false, fontsource: false, adobe: false }
    },

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
