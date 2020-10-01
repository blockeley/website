<template>
    <div id="application"
         :class="currentClass">

        <div v-if="mobileNavigation"
             class="mobile-navigation">

            <div class="navigation-bar">
                <div class="container-fluid">

                    <a class="icon-button d-lg-none mr-auto"
                       @click="closeMobileNavigation( )">

                        <i class="material-icons">close</i>

                    </a>

                    <img class="navigation-bar-brand" src="/images/logo.png">

                    <router-link to="/cart"
                                 id="cart"
                                 class="icon-button ml-auto"
                                 :class="{ 'has-notification': $store.state.cart > 0 }"
                                 @click="closeMobileNavigation( )">

                        <i class="material-icons">shopping_cart</i>

                    </router-link>

                </div>
            </div>

            <ul class="mobile-navigation-menu">
                <li class="menu-item">
                    <router-link to="/" class="item-link" exact>Explore</router-link>
                </li>

                <li class="menu-item">
                    <router-link to="/campus" class="item-link">Campus</router-link>
                </li>

                <li class="menu-item">
                    <router-link to="/schedule" class="item-link">Schedule</router-link>
                </li>

                <li class="menu-item">
                    <router-link to="/media" class="item-link">Media</router-link>
                </li>

                <li class="menu-item">
                    <router-link to="/merchandise" class="item-link">Merchandise</router-link>
                </li>
            </ul>

        </div>

        <div class="navigation-bar">
            <div class="container">

                <a class="icon-button d-lg-none mr-auto"
                   @click="openMobileNavigation( )">

                    <i class="material-icons">menu</i>

                </a>

                <img class="navigation-bar-brand" src="/images/logo.png">

                <ul class="navigation-bar-menu ml-auto d-none d-lg-flex">
                    <li class="menu-item">
                        <router-link to="/" class="item-link" exact>Explore</router-link>
                    </li>

                    <li class="menu-item">
                        <router-link to="/campus" class="item-link">Campus</router-link>
                    </li>

                    <li class="menu-item">
                        <router-link to="/schedule" class="item-link">Schedule</router-link>
                    </li>

                    <li class="menu-item">
                        <router-link to="/media" class="item-link">Media</router-link>
                    </li>

                    <li class="menu-item">
                        <router-link to="/merchandise" class="item-link">Merchandise</router-link>
                    </li>
                </ul>

                <router-link to="/cart"
                             id="cart-link"
                             class="icon-button ml-auto"
                             :class="{ 'has-notification': $store.state.quantity > 0 }">

                    <i class="material-icons">shopping_cart</i>

                </router-link>

            </div>
        </div>

        <router-view />

        <div class="container">
            <div class="footer">
                <p class="footer-text">Copyright 2020 <a>Blockeley</a>. Website design by <a href="https://mathhulk.com">Matthew Rowland</a>.</p>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
#cart-link {
    margin-left: 24px;

    &.has-notification {
        position: relative;

        &::after {
            // Required for pseudo-element
            content: "";

            position: absolute;

            top: 3px;
            right: 3px;

            height: 8px;
            width: 8px;

            border-radius: 50%;

            background-color: white;
        }
    }
}

/*
 *  Page colors
 *
 */
$page-colors: (
    "campus": #21bf73,
    "merchandise": #3fc5f0,
    "cart": #835858,
    "product": #f09ae9
);

#application {
    .navigation-bar {
        transition: background-color 100ms ease-in-out;
    }

    @each $page, $color in $page-colors {
        &.page-#{$page} {
            .navigation-bar {
                background-color: $color;
            }

            .mobile-navigation-menu .menu-item .item-link {
                &.active {
                    background-color: rgba($color, 0.1);

                    color: $color;

                    &::after {
                        background-color: $color;
                    }
                }

                &:hover:not(.active) {
                    color: $color;
                }
            }
        }
    }
}
</style>

<script>
export default {
    name: "App",

    data( ) {
        return {
            mobileNavigation: false,

            currentClass: "page-explore"
        };
    },

    methods: {
        openMobileNavigation( ) {
            const body = document.getElementsByTagName("body")[0];
            body.classList.add("body-limit");

            this.mobileNavigation = true;
        },

        closeMobileNavigation( ) {
            const body = document.getElementsByTagName("body")[0];
            body.classList.remove("body-limit");

            this.mobileNavigation = false;
        }
    },

    watch: {
        $route(to) {
            this.currentClass = "page-" + to.name.toLowerCase( );

            this.closeMobileNavigation( );
        }
    }
}
</script>
