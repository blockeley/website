<template>
    <div class="mobile-navigation">
        <div class="navigation-bar">
            <div class="container-fluid">
                <!-- To-do: Remove Bootstrap utilities -->
                <IconButton @click="close" class="mr-auto" icon="close" />

                <img class="navigation-bar-brand" src="/images/logo-transparent.png">
            </div>
        </div>

        <!-- To-do: Implement MobileNavigationMenu and MobileNavigationMenuItem components -->
        <ul class="mobile-navigation-menu">
            <li class="menu-item">
                <router-link to="/" class="item-link">Explore</router-link>
            </li>

            <!--
			<li class="menu-item">
                <router-link to="/club" class="item-link">Club</router-link>
            </li>
            -->

            <li class="menu-item">
                <router-link to="/campus" class="item-link">Campus</router-link>
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
</template>

<script>
import IconButton from "@/components/IconButton.vue";

export default {
    name: "MobileNavigation",

    emits: [ "close" ],

    components: {
        IconButton
    },

    methods: {
        close( ) {
            this.$emit("close");
        }
    }
}
</script>

<style lang="scss">
.mobile-navigation {
	display: flex;
	flex-direction: column;

	position: fixed;

	z-index: 999;

	height: 100vh;
	width: 100vw;

    top: 0;
    left: 0;

	background-color: white;

	ul.mobile-navigation-menu {
		display: flex;
		flex-direction: column;

		margin-top: 16px;

		list-style-type: none;

		li.menu-item a.item-link {
			display: flex;
			align-items: center;

			position: relative;

			font-size: 14px;
			font-weight: 500;
			color: rgba(black, 0.5);
			line-height: 1;

			height: 48px;

            // Match .container-fluid padding
			padding-right: 15px;
			padding-left: 15px;

			transition: background-color 100ms ease-in-out,
						color 100ms ease-in-out;

			&::after {
				// Required for pseudo-elements
				content: "";

				height: 100%;
				width: 2px;

				position: absolute;

				background-color: black;

				left: 0;
				bottom: 0;

				opacity: 0;

				transition: 100ms;
			}

			&:not(.active):hover {
				color: black;

				cursor: pointer;
			}

			&.active {
				background-color: rgba(black, 0.1);

				color: black;

				&::after {
					opacity: 1;
				}
			}
		}
	}
}

</style>
