/// <reference types="vite/client" />

import "vue-router";

declare module "vue-router" {
    interface RouteMeta {
        // Page <title> prefix, see App.vue
        title?: string;
    }
}
