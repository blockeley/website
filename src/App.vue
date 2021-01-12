<template>
    <div id="application" :class="colorClass">
        <div v-if="mobileNavigation" class="mobile-navigation">
            <div class="navigation-bar">
                <div class="container-fluid">
                    <IconButton @click.native="closeMobileNavigation" class="mr-auto" icon="close" />

                    <img class="navigation-bar-brand" src="/images/logo-transparent.png">

                    <router-link to="/cart" class="ml-auto" >
                        <IconButton :active="atCart" icon="shopping_cart" :notification="$store.state.quantity > 0" />
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
                    <router-link to="/merchandise" class="item-link">Merchandise</router-link>
                </li>

                <li class="menu-item">
                    <a class="item-link" href="https://patreon.blockeley.com" target="_blank">Donate</a>
                </li>
            </ul>
        </div>

        <div class="navigation-bar">
            <div class="container">
                <IconButton @click.native="openMobileNavigation" class="d-lg-none mr-auto" icon="menu" />

                <img class="navigation-bar-brand" src="/images/logo-transparent.png">

                <ul class="navigation-bar-menu ml-auto d-none d-lg-flex">
                    <li class="menu-item">
                        <router-link to="/" class="item-link" exact>Explore</router-link>
                    </li>

                    <li class="menu-item">
                        <router-link to="/campus" class="item-link">Campus</router-link>
                    </li>

                    <li class="menu-item">
                        <router-link to="/merchandise" class="item-link">Merchandise</router-link>
                    </li>

                    <li class="menu-item">
                        <a class="item-link" href="https://patreon.blockeley.com" target="_blank">Donate</a>
                    </li>
                </ul>

                <router-link to="/cart" class="ml-auto" >
                    <IconButton :active="atCart" icon="shopping_cart" :notification="$store.state.quantity > 0" />
                </router-link>
            </div>
        </div>

        <router-view />

        <div v-if="notAtExplore" class="container">
            <div class="footer">
                <!-- To-do: Non-affiliation notice -->
                <p class="footer-text">Copyright 2020 <a>Blockeley</a>. Website design by <a href="https://mathhulk.com">Matthew Rowland</a>.</p>
            </div>
        </div>

    </div>
</template>

<script>
import IconButton from "@/components/IconButton";

export default {
    name: "App",

    components: {
        IconButton
    },

    data( ) {
        return {
            mobileNavigation: false,

            colorClass: "color-explore"
        };
    },

    computed: {
        notAtExplore( ) {
            return this.$route.name !== "Explore";
        },

        atCart( ) {
            return this.$route.name === "Cart";
        }
    },

    methods: {
        openMobileNavigation( ) {
            const body = document.getElementsByTagName("body")[0];
            body.classList.add("disabled");

            this.mobileNavigation = true;
        },

        closeMobileNavigation( ) {
            const body = document.getElementsByTagName("body")[0];
            body.classList.remove("disabled");

            this.mobileNavigation = false;
        },

        // To-do: Cart pop-up component
        async updateCheckout( ) {
            try {
                await this.$client.checkout.fetch(this.$store.state.identifier);
            } catch(error) {
                // console.log(error)

                this.$store.commit("setIdentifier", null);
                this.$store.commit("decreaseQuantity", this.$store.state.quantity);
            }
        }
    },

    watch: {
        $route(to) {
            this.colorClass = "color-" + to.name.toLowerCase( );

            this.closeMobileNavigation( );
        }
    },

    mounted( ) {
        this.updateCheckout( );
    }
}
</script>

<style lang="scss">
@import "@/scss/components/navigation-bar";
@import "@/scss/components/mobile-navigation";
@import "@/scss/components/footer";

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

    background-color: #F5F7F9;

    &.disabled {
        height: 100%;

        overflow: hidden;
    }

    &::before {
        // Required for pseudo-element
        content: "";

        position: absolute;

        left: 0;
        top: 0;

        height: 100%;
        width: 100%;

        z-index: -1;

        background-color: rgba(#FFC02E, 0.1);
        background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
}
</style>
