<template>
    <!-- To-do: Pretty Section component -->
    <div class="section" :class="classObject">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-header">
                        <p v-if="hasSubHeading" class="section-sub-heading">
                            <slot name="subHeading" />
                        </p>

                        <p class="section-heading">{{ heading }}</p>
                    </div>

                    <p class="section-description">
                        <slot name="description" />
                    </p>

                    <div v-if="hasButtons" class="section-buttons">
                        <slot name="buttons" />
                    </div>

                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Section",

    props: [
        "heading",
        "variant"
    ],

    data( ) {
        return {
            Variants: { Light: "light", Background: "background", Inline: "inline" }
        }
    },

    computed: {
        classObject( ) {
            return {
                "section-light": this.variant === this.Variants.Light,
                "section-background": [ this.Variants.Background, this.Variants.Inline ].includes(this.variant),
                "section-inline": this.variant === this.Variants.Inline
            };
        },

        hasButtons( ) {
            return !! this.$slots.buttons;
        },

        hasSubHeading( ) {
            return !! this.$slots.subHeading;
        }
    }
}
</script>

<style lang="scss">
.section {
    position: relative;

    width: 100%;

    text-align: center;

    .section-header {
        display: flex;
        flex-direction: column;

        p.section-sub-heading {
            font-size: 24px;
            font-weight: 700;
            line-height: 1.2;
            color: rgba(black, 0.25);

            margin-bottom: 4px;
        }

        p.section-heading {
            font-size: 48px;
            font-weight: 900;
            line-height: 1.2;
            color: black;

            text-shadow: 4px 4px var(--accent-color);

            margin-bottom: 24px;
        }
    }

    // Remove line breaks for mobile devices
    @media (max-width: 1200px) {
        p.section-description br {
            display: none;
        }
    }

    p.section-description {
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

    .section-buttons {
        margin: -12px;

        .button {
            margin: 12px;
        }

        &:not(:last-child) {
            margin-bottom: 24px;
        }
    }

    // Component .alert
    .alert p.alert-message {
        text-align: left;
    }

    &.section-inline {
        margin-top: 256px;
        margin-bottom: 128px;
    }

    &.section-light {
        .section-header {
            flex-direction: column-reverse;

            p.section-sub-heading {
                color: rgba(white, 0.25);
                line-height: 1.5;

                margin-bottom: 32px;

                .important {
                    color: white;

                    border-bottom: 2px dashed rgba(white, 0.25);
                }
            }

            p.section-heading {
                font-size: 64px;
                font-weight: 900;
                color: white;

                margin-bottom: 16px;
            }
        }

        p.section-description {
            color: rgba(white, 0.5);

            &:not(:last-child) {
                margin-bottom: 32px;
            }

            .important {
                color: white;
            }
        }
    }

    // Included with .section-inline
    &.section-background {
        .section-header p.section-heading {
            font-size: 36px;
            font-weight: 700;
        }

        // Remove background on mobile
        @media (min-width: 512px) {
            &::before {
                // Required for pseudo-elements
                content: "";

                z-index: -1;

                position: absolute;

                height: 512px;
                width: 512px;

                // Problem with media query?
                max-width: 100%;

                top: 50%;
                left: 50%;

                transform: translate(-50%, -50%);

                // To-do: Accent color for background-image
                background-image: var(--accent-color-image);
                background-repeat: no-repeat;
            }
        }
    }
}

</style>
