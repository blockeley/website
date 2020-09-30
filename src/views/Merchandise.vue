<template>
    <div id="store">

        <template v-if="products">

            <div class="splash">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <h2 class="splash-title">Blockeley</h2>
                            <h1 class="splash-heading">Merchandise</h1>

                            <p class="splash-description"><span class="important">Purchase Blockeley merchandise and support the Blockeley project.</span> Express school spirit on and off the virtual Minecraft campus with our unique Blockeley t-shirts.</p>

                            <div class="splash-buttons">

                                <a class="button"
                                   @click="browse( )">Browse products</a>

                                <a class="button" href="https://streamlabs.com/offtheirplate1">Donate</a>

                            </div>
                        </div>
                    </div>

                    <div class="splash-preview">
                        <img class="preview-shirt" src="images/shirt.png">

                        <img class="preview-logo" src="images/logo.png">
                    </div>
                </div>

                <div class="splash-icon">
                    <i class="material-icons">arrow_downward</i>
                </div>
            </div>

            <div class="container">
                <div id="browse" class="heading heading-center">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFC02E" d="M28.3,-25.1C35,-14.1,37.8,-2.4,39.5,16.7C41.3,35.7,42,62.2,32.7,66C23.4,69.7,4,50.8,-18.3,39.5C-40.6,28.2,-65.8,24.5,-68.4,15.1C-70.9,5.7,-50.8,-9.4,-35.6,-22.3C-20.4,-35.3,-10.2,-46.2,0.3,-46.4C10.7,-46.6,21.5,-36.2,28.3,-25.1Z" transform="translate(100 100)" />
                    </svg>

                    <h2 class="heading-text">Products</h2>
                </div>

                <div id="products" class="row justify-content-center">

                    <div v-for="product in products"
                         class="col-lg-3"
                         :key="product.handle">

                        <div class="product">

                            <router-link :to="{ name: 'Product', params: { identifier: product.handle } }">

                                <div class="card card-image card-6x8">

                                    <img :src="product.variants[0].image.src">

                                </div>

                            </router-link>

                            <h2 class="product-name">{{ product.title }}</h2>

                            <p class="product-description">Starting at <span class="important">${{ product.variants[0].price }}</span></p>

                        </div>

                    </div>

                </div>

            </div>

        </template>

        <template v-else>

            <div class="progress"><!-- load --></div>

        </template>

    </div>
</template>

<style lang="scss">
#store {
    #products {
        margin-bottom: -48px;

        .product {
            padding-bottom: 48px;
        }
    }

    // Specific .splash
    .splash .container {
        position: relative;

        .splash-preview {
            z-index: -1;

            position: absolute;

            top: 50%;

            @media (max-width: 992px) {
                left: 50%;

                transform: translate(-50%, -50%);
            }

            @media (min-width: 992px) {
                // Mirror .container
                right: 1rem;

                transform: translateY(-50%);
            }

            img.preview-shirt {
                opacity: 0.1;

                @media (max-width: 992px) {
                    max-width: 100%;

                    opacity: 0.05;
                }
            }

            img.preview-logo {
                position: absolute;

                height: 192px;

                left: 50%;
                top: 25%;

                transform: translateX(-50%);

                @media (max-width: 992px) {
                    opacity: 0.05;
                }
            }
        }
    }
}
</style>

<script>
export default {
    name: "Store",

    data( ) {
        return {
            products: null
        };
    },

    methods: {
        browse( ) {
            window.scroll({
                behavior: "smooth",
                left: 0,
                top: document.getElementById("browse").offsetTop
            });
        }
    },

    mounted( ) {
        this.$client.product.fetchAll( )
        .then(products => {
            this.products = products;
        });
    }
}
</script>
