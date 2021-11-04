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
    //{
    //    path: "/club",
    //    name: "Club",
    //    component: ( ) => import(/* webpackChunkName: "club" */ "@/views/Club.vue")
    //},
    {
        path: "/campus",
        name: "Campus",
        component: ( ) => import(/* webpackChunkName: "campus" */ "@/views/Campus.vue")
    },
    //{
    //    path: "/century",
    //    name: "Century",
    //    component: ( ) => import(/* webpackChunkName: "century" */ "@/views/Century.vue")
    //},
    {
        path: "*",
        name: "PageNotFound",
        component: ( ) => import(/* webpackChunkName: "404" */ "@/views/PageNotFound.vue")
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
