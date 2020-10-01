<template>
    <div id="store">

        <template v-if="products">

            <div class="splash splash-continue">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <h2 class="sub-heading">Blockeley</h2>

                            <h1 class="heading">Merchandise</h1>

                            <p class="description"><span class="important">Purchase Blockeley merchandise and support the Blockeley project.</span> Express school spirit on and off the virtual Minecraft campus with our unique Blockeley t-shirts.</p>

                            <div class="splash-buttons">

                                <a class="button"
                                   @click="browse( )">Browse products</a>

                                <a class="button" href="https://streamlabs.com/offtheirplate1">Donate</a>

                            </div>
                        </div>
                    </div>

                    <div id="preview">
                        <img src="images/shirt.png">

                        <img src="images/logo.png">
                    </div>
                </div>
            </div>

            <div class="container">
                <h2 id="browse" class="heading heading-section heading-background">Products</h2>

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

                            <h2 class="sub-heading sub-heading-alt">{{ product.title }}</h2>

                            <p class="description">Starting at <span class="important">${{ product.variants[0].price }}</span></p>

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

        // Specific .product
        .product {
            padding-bottom: 48px;
        }
    }

    // Specific .splash -> .container
    .splash .container {
        position: relative;

        #preview {
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

            img:first-child {
                opacity: 0.1;

                @media (max-width: 992px) {
                    max-width: 100%;

                    opacity: 0.05;
                }
            }

            img:last-child {
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

    /*
     *  Page color
     *
     */
    .button {
        box-shadow: 4px 4px #3fc5f0;
    }

    .heading {
        text-shadow: 4px 4px #3fc5f0;
    }

    .card {
        box-shadow: -4px -4px #3fc5f0;
    }

    .heading.heading-section {
        text-shadow: 2px 2px #3fc5f0;

        &.heading-background::before {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%233fc5f0' fill-opacity='0.1' transform='translate(100 100)' d='M28.3,-25.1C35,-14.1,37.8,-2.4,39.5,16.7C41.3,35.7,42,62.2,32.7,66C23.4,69.7,4,50.8,-18.3,39.5C-40.6,28.2,-65.8,24.5,-68.4,15.1C-70.9,5.7,-50.8,-9.4,-35.6,-22.3C-20.4,-35.3,-10.2,-46.2,0.3,-46.4C10.7,-46.6,21.5,-36.2,28.3,-25.1Z' /%3E%3C/svg%3E")
        }
    }

    .product .card::after {
        background-color: #3fc5f0;
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
