<template>
    <div class="merchandise-product">
        <div class="merchandise-product-image">
            <img :src="product.images[0].src">
        </div>

        <div class="merchandise-product-content">
            <div class="merchandise-product-text">
                <p class="merchandise-product-title">{{ product.title }}</p>
                <p class="merchandise-product-description">Starting at <span class="important">${{ product.variants[0].price }}</span></p>
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
    name: "MerchandiseProduct",

    components: {
        IconButton
    },

    props: [
        "product"
    ],

    computed: {
        toObject( ) {
            return {
                name: "Product",
                params: { identifier: this.product.handle }
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
        &.color-#{$name} .merchandise-product {
            box-shadow: -4px -4px $color;
        }
    }
}

/*
 *  Product
 *
 */
.merchandise-product {
    box-shadow: -4px -4px #FFC02E;
    background-color: black;

    padding: 2px 2px 0 2px;

    .merchandise-product-image {
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

    .merchandise-product-content {
        display: flex;
        align-items: center;

        height: 64px;

        padding-left: 24px;
        padding-right: 24px;

        .merchandise-product-text {
            flex-grow: 1;

            margin-right: 24px;

            overflow: hidden;

            p.merchandise-product-title {
                font-size: 14px;
                font-weight: 500;
                color: white;
                line-height: 18px;

                overflow: hidden;

                white-space: nowrap;

                text-overflow: ellipsis;
            }

            p.merchandise-product-description {
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
