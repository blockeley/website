declare module "#app" {
    interface PageMeta {
        // Page <title> prefix, see nuxt.config.ts titleTemplate
        title?: string;
        // Page accent colour (--accent-color), see layouts/default.vue
        accent?: string;
    }
}

export {};
