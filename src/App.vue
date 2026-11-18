<template>
    <div id="application" :class="colorClass">
        <Notification desktopMessage="Learn more about Blockeley and chat with Blockeley team members as well as our community on Discord."
                      mobileMessage="Join us on Discord.">
            <LinkButton href="https://discord.gg/mmAK4D5" alternate="true" size="small">Launch Discord</LinkButton>
        </Notification>

        <MobileNavigation v-if="mobileNavigation" @close="closeMobileNavigation" />

        <!-- To-do: Implement NavigationBar, NavigationBarBrand, NavigationBarMenu, etc. components -->
        <div class="navigation-bar">
            <div class="container">
                <!-- To-do: Remove Bootstrap utilities -->
                <IconButton @click="openMobileNavigation" class="d-lg-none mr-auto" icon="menu" />

                <img class="navigation-bar-brand" src="/images/logo-transparent.webp" alt="Blockeley">

                <ul class="navigation-bar-menu ml-auto d-none d-lg-flex">
                    <li class="menu-item">
                        <router-link to="/" class="item-link">Home</router-link>
                    </li>

                    <li class="menu-item">
                        <router-link to="/campus" class="item-link">Campus</router-link>
                    </li>

                    <li class="menu-item">
                        <router-link to="/club" class="item-link">Club</router-link>
                    </li>

                    <!--
                    <li class="menu-item">
                        <router-link to="/century" class="item-link">19th Century</router-link>
                    </li>
                    -->

                    <li class="menu-item">
                        <a class="item-link" href="https://patreon.blockeley.com" target="_blank">Donate</a>
                    </li>
                </ul>
            </div>
        </div>

        <router-view />

        <Footer />
    </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "@unhead/vue";

import IconButton from "@/components/IconButton.vue";
import Notification from "@/components/Notification.vue";
import MobileNavigation from "@/components/MobileNavigation.vue";
import LinkButton from "@/components/LinkButton.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "App",

    components: {
        IconButton,
        Notification,
        MobileNavigation,
        Footer,
        LinkButton
    },

    setup( ) {
        const route = useRoute( );

        useHead({
            title: computed(( ) => route.meta.title ? `${ route.meta.title } | Blockeley` : "Blockeley | The #1 Minecraft university in the world")
        });
    },

    data( ) {
        return {
            mobileNavigation: false
        };
    },

    computed: {
        colorClass( ) {
            return "color-" + String(this.$route.name || "explore");
        }
    },

    methods: {
        openMobileNavigation( ) {
            document.body.classList.add("disabled");
            this.mobileNavigation = true;
        },

        closeMobileNavigation( ) {
            document.body.classList.remove("disabled");
            this.mobileNavigation = false;
        },
    },

    watch: {
        $route( ) {
            this.closeMobileNavigation( );
        }
    }
}
</script>

<style lang="scss">
@use "sass:meta";
@use "sass:string";
@use "@/scss/components/navigation-bar";
@use "@/scss/colors" as *;

#application {
    --accent-color: #ffc02e;
    --accent-color-transparent: rgba(#ffc02e, 0.1);
    --accent-color-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23ffc02e' fill-opacity='0.075' transform='translate(100 100)' d='M28.3,-25.1C35,-14.1,37.8,-2.4,39.5,16.7C41.3,35.7,42,62.2,32.7,66C23.4,69.7,4,50.8,-18.3,39.5C-40.6,28.2,-65.8,24.5,-68.4,15.1C-70.9,5.7,-50.8,-9.4,-35.6,-22.3C-20.4,-35.3,-10.2,-46.2,0.3,-46.4C10.7,-46.6,21.5,-36.2,28.3,-25.1Z' /%3E%3C/svg%3E");

    @each $identifier, $color in $colors {
        &.color-#{$identifier} {
            $string: string.slice(meta.inspect($color), 2);

            $color-transparent: rgba($color, 0.1);
            $color-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23#{$string}' fill-opacity='0.075' transform='translate(100 100)' d='M28.3,-25.1C35,-14.1,37.8,-2.4,39.5,16.7C41.3,35.7,42,62.2,32.7,66C23.4,69.7,4,50.8,-18.3,39.5C-40.6,28.2,-65.8,24.5,-68.4,15.1C-70.9,5.7,-50.8,-9.4,-35.6,-22.3C-20.4,-35.3,-10.2,-46.2,0.3,-46.4C10.7,-46.6,21.5,-36.2,28.3,-25.1Z' /%3E%3C/svg%3E");

            --accent-color: #{$color};
            --accent-color-transparent: #{$color-transparent};
            --accent-color-image: #{$color-image};
        }
    }
}

/*
 *  Global
 */
*, *::after, *::before {
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

body {
    position: relative;

    font-family: "Poppins", sans-serif;

    background-color: #F5F2E5;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");

    &.disabled {
        height: 100%;

        overflow: hidden;
    }
}
</style>
