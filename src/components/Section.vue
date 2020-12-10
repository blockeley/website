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
@import "@/scss/colors";

/*
 *    Application color
 *
 */
#application {
    @each $name, $color in $colors {
        $string: str-slice(inspect($color), 2);

        &.color-#{$name} .section {
            .section-header p.section-heading {
                text-shadow: 4px 4px $color;
            }

            @media (min-width: 512px) {
                &.section-background::before {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23#{$string}' fill-opacity='0.075' transform='translate(100 100)' d='M28.3,-25.1C35,-14.1,37.8,-2.4,39.5,16.7C41.3,35.7,42,62.2,32.7,66C23.4,69.7,4,50.8,-18.3,39.5C-40.6,28.2,-65.8,24.5,-68.4,15.1C-70.9,5.7,-50.8,-9.4,-35.6,-22.3C-20.4,-35.3,-10.2,-46.2,0.3,-46.4C10.7,-46.6,21.5,-36.2,28.3,-25.1Z' /%3E%3C/svg%3E");
                }
            }
        }
    }
}

/*
 *    Section
 *
 */
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

            text-shadow: 4px 4px #FFC02E;

            margin-bottom: 24px;
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
                // Required for pseudo-element
                content: "";

                z-index: -1;

                position: absolute;

                height: 512px;
                width: 512px;

                top: 50%;
                left: 50%;

                transform: translate(-50%, -50%);

                background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23FFC02E' fill-opacity='0.075' transform='translate(100 100)' d='M28.3,-25.1C35,-14.1,37.8,-2.4,39.5,16.7C41.3,35.7,42,62.2,32.7,66C23.4,69.7,4,50.8,-18.3,39.5C-40.6,28.2,-65.8,24.5,-68.4,15.1C-70.9,5.7,-50.8,-9.4,-35.6,-22.3C-20.4,-35.3,-10.2,-46.2,0.3,-46.4C10.7,-46.6,21.5,-36.2,28.3,-25.1Z' /%3E%3C/svg%3E");
                background-repeat: no-repeat;
            }
        }
    }
}

</style>
