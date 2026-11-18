import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/club", name: "Club", component: ( ) => import("@/views/Club.vue") },
    { path: "/campus", name: "Campus", component: ( ) => import("@/views/Campus.vue") },
    // { path: "/century", name: "Century", component: ( ) => import("@/views/Century.vue") },
    { path: "/:pathMatch(.*)*", name: "PageNotFound", component: ( ) => import("@/views/PageNotFound.vue") }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: "active",
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 };
    }
});

export default router;
