<template>
    <div id="application">
        <div class="navigation-bar">
            <div class="container">

                <img class="navigation-bar-brand" src="images/logo.png">

                <ul class="navigation-bar-menu ml-auto">
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
                             id="cart"
                             class="icon-button"
                             :class="{ 'has-notification': $store.state.cart > 0 }">

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
#cart {
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

            background-color: #FFC02E;
        }
    }
}
</style>

<script>
export default {
    name: "App",

    data( ) {
        return {

        };
    },

    methods: {

    },

    watch: {

    }
}
</script>
