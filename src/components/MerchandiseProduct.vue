<template>
    <div class="col-xl-3 col-lg-4 col-md-6">
        <router-link :to="toObject">
            <div class="merchandise-product">
                <div class="merchandise-product-image">
                    <img :src="product.images[0].src">
                </div>

                <div class="merchandise-product-header">
                    <div class="header-text">
                        <p class="merchandise-product-heading">{{ product.title }}</p>

                        <p class="merchandise-product-description">$ {{ product.variants[0].price }} USD</p>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "MerchandiseProduct",

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
.merchandise-product {
    border: 2px solid black;
    background-color: white;

    position: relative;

    &::after {
        // Required for pseudo-elements
        content: "";

        position: absolute;

        height: calc(100% - 4px);
        width: 100%;

        left: 0;
        top: 0;

        border-style: solid;
        border-width: 4px 4px 0 4px;
        border-color: rgba(black, 0.1);
    }

    &:hover .merchandise-product-image img {
        transform: scale(1.05);
    }

    .merchandise-product-image {
        position: relative;

        width: 100%;

        // 6x8 width to height ratio
        padding-top: calc(100% / 6 * 8);

        overflow: hidden;

        img {
            position: absolute;

            height: 100%;
            width: 100%;

            left: 0;
            top: 0;

            object-fit: cover;

            transition: 250ms;
        }
    }

    .merchandise-product-header {
        display: flex;
        align-items: center;

        height: 128px;

        border-bottom: 4px solid var(--accent-color);

        .header-text {
            text-align: center;

            padding-left: 24px;
            padding-right: 24px;

            width: 100%;

            p.merchandise-product-heading {
                font-size: 14px;
                font-weight: 500;
                color: black;
                line-height: 1.25;
            }

            p.merchandise-product-description {
                font-size: 14px;
                font-weight: 400;
                line-height: 1.25;
                color: rgba(black, 0.5);
            }
        }
    }
}
</style>
