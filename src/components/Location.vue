<template>
    <div class="location" :class="classObject">
        <div class="location-header">
            <p class="location-heading">{{ title }}</p>

            <IconButton :icon="icon" @click.native="toggleFullScreen" variant="light" />
        </div>

        <div class="location-image">
            <img :src="image">
        </div>
    </div>
</template>

<script>
import IconButton from "@/components/IconButton";

export default {
    name: "Location",

    components: {
        IconButton
    },

    props: [
        "title",
        "image"
    ],

    data( ) {
        return {
            fullScreen: false
        };
    },

    computed: {
        classObject( ) {
            return {
                "location-full-screen": this.fullScreen
            };
        },

        icon( ) {
            return this.fullScreen ? "close_fullscreen" : "open_in_full";
        }
    },

    methods: {
        toggleFullScreen( ) {
            const body = document.getElementsByTagName("body")[0];

            if(this.fullScreen) {
                body.classList.remove("disabled");
                this.fullScreen = false;

                return undefined;
            }

            body.classList.add("disabled");
            this.fullScreen = true;

            return undefined;
        }
    }
}
</script>

<style lang="scss">
@import "@/scss/colors";

/*
 *    Application color
 *
 */
#application {
    @each $name, $color in $colors {
        &.color-#{$name} .location {
            box-shadow: -4px -4px $color;
        }
    }
}

/*
 *    Location
 *
 */
.location {
    border: 2px solid black;
    box-shadow: -4px -4px #FFC02E;
    background-color: white;

    &.location-full-screen {
        // Override
        border: unset;
        box-shadow: unset;

        display: flex;
        flex-direction: column;

        position: fixed;

        left: 0;
        top: 0;

        z-index: 999;

        height: 100vh;
        width: 100vw;

        .location-header {
            flex-shrink: 0;

            // Override
            margin-top: unset;
        }

        .location-image {
            // Override
            width: unset;
            padding-top: unset;

            flex-grow: 1;
        }
    }

    .location-header {
        display: flex;
        align-items: center;

        height: 56px;

        background-color: black;

        padding-right: 24px;
        padding-left: 24px;

        margin-top: -2px;

        p.location-heading {
            flex-grow: 1;

            font-size: 14px;
            font-weight: 500;
            line-height: 1;
            color: white;
        }
    }

    .location-image {
        position: relative;

         // Padding relative to width
         width: 100%;

         padding-top: calc(100% / 16 * 9);

        img {
            position: absolute;

            height: 100%;
            width: 100%;

            left: 0;
            top: 0;

            object-fit: cover;
        }
    }
}
</style>
