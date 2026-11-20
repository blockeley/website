import type { RouteRecordRaw } from "vue-router";
import type { RouterOptions } from "vite-ssg";

import Home from "@/views/Home.vue";

export const routes: RouteRecordRaw[] = [
    { path: "/", name: "Home", component: Home },
    { path: "/club", name: "Club", component: ( ) => import("@/views/Club.vue"), meta: { title: "Club" } },
    { path: "/campus", name: "Campus", component: ( ) => import("@/views/Campus.vue"), meta: { title: "Campus" } },
    // { path: "/century", name: "Century", component: ( ) => import("@/views/Century.vue"), meta: { title: "19th Century" } },
    { path: "/:pathMatch(.*)*", name: "PageNotFound", component: ( ) => import("@/views/PageNotFound.vue"), meta: { title: "Page not found" } }
];

export const routerOptions: RouterOptions = {
    routes,
    base: import.meta.env.BASE_URL,
    linkActiveClass: "active",
    scrollBehavior(_to, _from, savedPosition) {
        return savedPosition || { top: 0 };
    }
};
