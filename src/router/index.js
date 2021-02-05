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
        path: "/merchandise",
        name: "Merchandise",
        component: ( ) => import(/* webpackChunkName: "member" */ "@/views/Merchandise.vue"),
    },
    {
        path: "/merchandise/:identifier",
        name: "Product",
        props: true,
        component: ( ) => import(/* webpackChunkName: "member" */ "@/views/Product.vue")
    },
    {
        path: "/cart",
        name: "Cart",
        component: ( ) => import(/* webpackChunkName: "member" */ "@/views/Cart.vue")
    },
    // 404
    {
        path: "*",
        name: "PageNotFound",
        component: ( ) => import(/* webpackChunkName: "member" */ "@/views/PageNotFound.vue")
    },
    // Allow previous product URLs
    {
        path: "/product/:identifier",
        redirect: "/merchandise/:identifier"
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
