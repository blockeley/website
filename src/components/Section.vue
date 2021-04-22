<template>
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

                    <div v-if="hasLinkButtons" class="section-link-buttons">
                        <slot name="linkButtons" />
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

    // To-do: Proper style proponent
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

        hasLinkButtons( ) {
            return !! this.$slots.linkButtons;
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

    // To-do: Properly remove line breaks on mobile devices
    @media (max-width: 1200px) {
        p.section-description br {
            display: none;
        }
    }

    p.section-description {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.2;
        color: rgba(black, 0.5);

        .important {
            color: rgba(black, 0.75);
            font-weight: 500;
        }

        &:not(:last-child) {
            margin-bottom: 24px;
        }
    }

    .section-buttons {
        margin: -8px;

        .button {
            margin: 8px;
        }

        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }

    .section-link-buttons {
        margin: -8px;

        .link-button {
            margin: 8px;
        }
    }

    &.section-inline {
        @media (min-width: 992px) {
            margin-top: 256px;
            margin-bottom: 128px;
        }

        @media (max-width: 992px) {
            margin-top: 128px;
            margin-bottom: 64px;
        }
    }

    &.section-light {
        .section-header {
            flex-direction: column-reverse;

            p.section-sub-heading {
                color: rgba(white, 0.25);
                line-height: 1.5;

                margin-bottom: 32px;

                .important {
                    color: rgba(white, 0.75);

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
                color: rgba(white, 0.75);
            }
        }
    }

    &.section-background {
        .section-header p.section-heading {
            font-size: 36px;
            font-weight: 700;
        }

        // To-do: Properly display background on mobile devices
        @media (min-width: 512px) {
            &::before {
                // Required for pseudo-elements
                content: "";

                z-index: -1;

                position: absolute;

                height: 512px;
                width: 512px;

                max-width: 100%;

                top: 50%;
                left: 50%;

                transform: translate(-50%, -50%);

                background-image: var(--accent-color-image);
                background-repeat: no-repeat;
            }
        }
    }
}

</style>
