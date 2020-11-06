<template>
    <div class="step" :class="classObject">
        <div class="step-image">
            <img :src="image">
        </div>

        <div class="step-content">
            <p class="step-title">{{ title }}</p>

            <p class="step-description">
                <slot name="description" />
            </p>

            <div v-if="hasButtons" class="slot-buttons">
                <slot name="buttons" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Step",

    props: [
        "image",
        "title",
        "alternate"
    ],

    computed: {
        classObject( ) {
            return {
                "step-alternate": this.alternate
            };
        },

        hasButtons( ) {
            return !! this.$slots.buttons;
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
        &.color-#{$name} .step .step-image {
            box-shadow: -4px -4px $color;
        }
    }
}

/*
 *    Steps
 *
 */
.step {
    @media (min-width: 992px) {
        display: flex;
        align-items: center;

        .step-image {
            flex-shrink: 0;

            width: 512px;
            height: 288px;
        }

        .step-content {
            flex-grow: 1;

            margin-left: 24px;

            p.step-title {
                // Override
                padding-left: unset;

                &::before {
                    // Required for pseudo-element
                    content: "";

                    position: absolute;

                    height: 40px;
                    width: 24px;

                    top: 0;
                    left: -24px;

                    z-index: 1;

                    background-color: black;
                }
            }
        }

        &.step-alternate {
            flex-direction: row-reverse;

            .step-content {
                // Override
                margin-left: unset;

                text-align: right;

                margin-right: 24px;

                p.step-title {
                    // Override
                    padding-right: unset;

                    &::before {
                        // Override
                        left: unset;

                        right: -24px;
                    }
                }
            }
        }
    }

    @media (max-width: 992px) {
        .step-image {
             // Padding relative to width
             width: 100%;

             padding-top: calc(100% / 16 * 9);
        }

        .step-content {
            text-align: center;
        }
    }

    .step-image {
        position: relative;

        border: 2px solid black;
        box-shadow: -4px -4px #FFC02E;
        background-color: white;

        img {
            position: absolute;

            height: 100%;
            width: 100%;

            left: 0;
            top: 0;

            object-fit: cover;
        }
    }

    .step-content {
        p.step-title {
            display: inline-flex;
            align-items: center;

            position: relative;

            height: 40px;

            font-size: 14px;
            font-weight: 500;
            line-height: 1;
            color: white;

            padding-right: 24px;
            padding-left: 24px;

            background-color: black;

            margin-bottom: 24px;
        }

        p.step-description {
            font-size: 16px;
            font-weight: 300;
            line-height: 1.2;
            color: rgba(black, 0.5);

            .important {
                color: black;
                font-weight: 500;
            }

            &:not(:last-child) {
                margin-bottom: 24px;
            }
        }

        p.step-buttons {
            margin: -12px;

            .button {
                margin: 12px;
            }
        }
    }
}
</style>
