<template>
    <div id="application"
         :class="colorClass">

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
                                 id="mobile-cart-link"
                                 class="icon-button ml-auto"
                                 :class="{ 'has-notification': $store.state.quantity > 0 }"
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

				<!--
                <li class="menu-item">
                    <router-link to="/schedule" class="item-link">Schedule</router-link>
                </li>

                <li class="menu-item">
                    <router-link to="/media" class="item-link">Media</router-link>
                </li>
				-->

                <li class="menu-item">
                    <router-link to="/merchandise" class="item-link">Merchandise</router-link>
                </li>

                <li class="menu-item">
                    <a class="item-link" href="https://patreon.blockeley.com" target="_blank">Donate</a>
                </li>
            </ul>

            <div class="mobile-navigation-buttons">
                <a href="https://www.instagram.com/blockeleyofficial" target="_blank" class="icon-button icon-button-alt">
                    <i class="fab fa-instagram"><!-- icon --></i>
                </a>

                <a href="https://twitter.com/UBlockeley" target="_blank" class="icon-button icon-button-alt">
                    <i class="fab fa-twitter"><!-- icon --></i>
                </a>

                <a href="https://www.facebook.com/pg/Blockeley" target="_blank" class="icon-button icon-button-alt">
                    <i class="fab fa-facebook-f"><!-- icon --></i>
                </a>
            </div>

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

					<!--
                    <li class="menu-item">
                        <router-link to="/schedule" class="item-link">Schedule</router-link>
                    </li>

                    <li class="menu-item">
                        <router-link to="/media" class="item-link">Media</router-link>
                    </li>
					-->

                    <li class="menu-item">
                        <router-link to="/merchandise" class="item-link">Merchandise</router-link>
                    </li>

					<li class="menu-item">
						<a class="item-link" href="https://patreon.blockeley.com" target="_blank">Donate</a>
					</li>
                </ul>

                <a href="https://www.instagram.com/blockeleyofficial" target="_blank" class="icon-button ml-auto d-none d-lg-flex">
                    <i class="fab fa-instagram"><!-- icon --></i>
                </a>

                <a href="https://twitter.com/UBlockeley" target="_blank" class="icon-button d-none d-lg-flex">
                    <i class="fab fa-twitter"><!-- icon --></i>
                </a>

                <a href="https://www.facebook.com/pg/Blockeley" target="_blank" class="icon-button d-none d-lg-flex">
                    <i class="fab fa-facebook-f"><!-- icon --></i>
                </a>

                <router-link to="/cart"
                             id="cart-link"
                             class="icon-button ml-auto"
                             :class="{ 'has-notification': $store.state.quantity > 0 }">

                    <i class="material-icons">shopping_cart</i>

                </router-link>

            </div>
        </div>

        <router-view />

        <div v-if="notRoot"
            class="container">
 
            <div class="footer">
                <p class="footer-text">Copyright 2020 <a>Blockeley</a>. Website design by <a href="https://mathhulk.com">Matthew Rowland</a>.</p>
            </div>

        </div>

    </div>
</template>

<style lang="scss">
#cart-link, #mobile-cart-link {
    margin-left: 24px;

    &.has-notification {
        position: relative;

        &::after {
            // Required for pseudo-element
            content: "";

            position: absolute;

            top: 2px;
            right: 2px;

            height: 8px;
            width: 8px;

            border-radius: 50%;

            background-color: white;
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
			
            colorClass: "color-explore"
        };
    },
	
	computed: {
		notRoot( ) {
			return this.$route.name !== "Explore"
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
        }
    },

    watch: {
        $route(to) {
            this.colorClass = "color-" + to.name.toLowerCase( );

            this.closeMobileNavigation( );
        }
    }
}
</script>
