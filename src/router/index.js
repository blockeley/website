import Vue from "vue";

import VueRouter from "vue-router";

import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/campus",
        name: "Campus",
        component: ( ) => import(/* webpackChunkName: "members" */ "@/views/Campus.vue")
    },
    {
        path: "/maps",
        name: "Maps",
        component: ( ) => import(/* webpackChunkName: "maps" */ "@/views/Maps.vue")
    },
    {
        path: "/century",
        name: "Century",
        component: ( ) => import(/* webpackChunkName: "members" */ "@/views/Century.vue")
    },
    // 404
    {
        path: "*",
        name: "PageNotFound",
        component: ( ) => import(/* webpackChunkName: "member" */ "@/views/PageNotFound.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    linkActiveClass: "active",
    routes,
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) return savedPosition;
        else return { x: 0, y: 0 };
    }
});

export default router;
