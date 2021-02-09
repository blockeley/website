<template>
    <div class="location" :class="classObject">
        <div class="location-image">
            <img :src="image">
        </div>

        <div class="location-header">
            <div class="header-text">
                <p class="location-heading">{{ title }}</p>

                <p class="location-description">/warp {{ warp }}</p>
            </div>

            <IconButton :icon="icon" @click="toggleFullScreen" variant="light" />
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
        "image",
        "warp"
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
            return this.fullScreen ? "fullscreen_exit" : "fullscreen";
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
.location {
    background-color: black;

    &:not(.location-full-screen) {
        border: 2px solid black;
        box-shadow: 4px 4px var(--accent-color);

        .location-image {
            width: 100%;

            // 16x9 width to height ratio
            padding-top: calc(100% / 16 * 9);
        }

        .location-header {
            display: flex;
            align-items: center;

            position: relative;

            height: 64px;

            padding-right: 24px;
            padding-left: 24px;

            .header-text {
                flex-grow: 1;

                margin-right: 24px;

                overflow: hidden;

                p.location-heading {
                    text-overflow: ellipsis;

                    overflow: hidden;

                    white-space: nowrap;
                }
            }

            &::before {
                // Required for pseudo-elements
                content: "";

                position: absolute;

                height: 96px;
                width: 100%;

                top: -96px;
                left: 0;

                background: linear-gradient(to bottom, transparent, black);
            }
        }
    }

    // To-do: Optimize full screen for mobile visitors
    &.location-full-screen {
        position: fixed;

        left: 0;
        top: 0;

        height: 100vh;
        width: 100vw;

        z-index: 999;

        .location-image {
            width: 100%;
            height: 100%;

            &::after {
                border-width: 4px;
                border-color: rgba(black, 0.25);
            }
        }

        .location-header {
            .header-text {
                position: absolute;

                display: inline-flex;
                flex-direction: column;
                align-items: center;

                top: 24px;
                left: 24px;

                p.location-heading {
                    padding-right: 24px;
                    padding-left: 24px;

                    background-color: rgba(black, 0.25);

                    border-radius: 20px;

                    display: flex;
                    align-items: center;

                    height: 40px;

                    margin-bottom: 4px;
                }
            }

            // To-do: Dark transparent IconButton
            .icon-button {
                position: absolute;

                top: 24px;
                right: 24px;

                background-color: rgba(black, 0.25);
            }
        }
    }

    .location-header .header-text {
        p.location-heading {
            font-size: 14px;
            font-weight: 500;
            line-height: 1.25;
            color: white;
        }

        p.location-description {
            font-size: 12px;
            font-weight: 300;
            line-height: 1.25;
            color: rgba(white, 0.5);
        }
    }

    .location-image {
        position: relative;

        img, &::after {
            position: absolute;

            height: 100%;
            width: 100%;

            left: 0;
            top: 0;
        }

        img {
            object-fit: cover;
        }

        &::after {
            // Required for pseudo-elements
            content: "";

            border-style: solid;
            border-width: 4px 4px 0 4px;
            border-color: rgba(white, 0.25);
        }
    }
}
</style>
