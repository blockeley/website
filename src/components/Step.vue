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

            <slot name="button" />

            <!-- To-do: Alert component -->
            <div v-if="hasAlert" class="step-alert">
                <slot name="alert" />
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
        &.color-#{$name} .step {
            .step-image {
                box-shadow: 4px 4px $color;
            }

            .step-alert {
                background-color: $color;
            }
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
            // Prevent growing content from shrinking image
            flex-shrink: 0;

            width: 512px;
            height: 288px;
        }

        .step-content {
            flex-grow: 1;

            margin-left: 24px;

            p.step-title::before {
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

        &:not(.step-alternate) .step-content p.step-title {
            padding-right: 24px;
        }

        &.step-alternate {
            flex-direction: row-reverse;

            .step-content {
                // To-do: Place in :not()
                margin-left: unset;

                text-align: right;

                margin-right: 24px;

                p.step-title {
                    padding-left: 24px;

                    &::before {
                        // To-do: Place in :not()
                        left: unset;

                        right: -24px;
                    }
                }
            }
        }
    }

    @media (max-width: 992px) {
        .step-image {
             width: 100%;

             // 16x9 width to height ratio
             padding-top: calc(100% / 16 * 9);
        }

        .step-content {
            text-align: center;

            p.step-title {
                padding-right: 24px;
                padding-left: 24px;
            }
        }
    }

    // Remove line breaks for mobile devices
    @media (max-width: 1200px) {
        .step-content p.step-description br {
            display: none;
        }
    }

    .step-image {
        position: relative;

        border: 2px solid black;
        box-shadow: 4px 4px #FFC02E;
        background-color: white;

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
            // Required for pseudo-element
            content: "";

            border: 4px solid rgba(white, 0.25);
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

        // To-do: Alert component
        .step-alert {
            background-color: #FFC02E;

            height: 40px;

            display: inline-flex;
            align-items: center;

            padding-right: 16px;
            padding-left: 12px;

            border-radius: 20px;

            font-size: 14px;
            font-weight: 500;
            color: rgba(white, 0.75);
            line-height: 1.25;

            i.material-icons {
                margin-right: 8px;
            }
        }
    }
}
</style>
