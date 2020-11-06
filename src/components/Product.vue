<template>
    <div class="product">
        <div class="product-image">
            <img :src="image">
        </div>

        <div class="product-content">
            <div class="product-text">
                <p class="product-title">{{ title }}</p>
                <p class="product-description">Starting at <span class="important">${{ price }}</span></p>
            </div>

            <router-link :to="toObject">
                <IconButton icon="arrow_forward" variant="light" />
            </router-link>
        </div>
    </div>
</template>

<script>
import IconButton from "@/components/IconButton";

export default {
    name: "Product",

    components: {
        IconButton
    },

    props: [
        "title",
        "image",
        "price",
        "identifier"
    ],

    computed: {
        toObject( ) {
            return {
                name: "Product",
                params: { identifier: this.identifier }
            };
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
        &.color-#{$name} .product {
            box-shadow: -4px -4px $color;
        }
    }
}

/*
 *  Product
 *
 */
.product {
    box-shadow: -4px -4px #FFC02E;
    background-color: black;

    padding: 2px 2px 0 2px;

    .product-image {
        position: relative;

        // Padding-top relative to width
        width: 100%;

        padding-top: calc(100% / 6 * 8);

       img {
           position: absolute;

           height: 100%;
           width: 100%;

           left: 0;
           top: 0;

           object-fit: cover;
       }
    }

    .product-content {
        display: flex;
        align-items: center;

        height: 64px;

        padding-left: 24px;
        padding-right: 24px;

        .product-text {
            flex-grow: 1;

            margin-right: 24px;

            overflow: hidden;

            p.product-title {
                font-size: 14px;
                font-weight: 500;
                color: white;
                line-height: 18px;

                overflow: hidden;

                white-space: nowrap;

                text-overflow: ellipsis;
            }

            p.product-description {
                font-size: 14px;
                font-weight: 300;
                line-height: 18px;
                color: rgba(white, 0.5);

                .important {
                    color: white;
                    font-weight: 500;
                }
            }
        }
    }
}
</style>
