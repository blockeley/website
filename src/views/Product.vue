<template>
    <div id="item">

        <template v-if="product">

            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="preview-wrapper">
                            <div class="card card-image card-6x8">

                                <img :src="product.variants[currentVariant].image.src">

                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="heading">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#FFC02E" d="M28.3,-25.1C35,-14.1,37.8,-2.4,39.5,16.7C41.3,35.7,42,62.2,32.7,66C23.4,69.7,4,50.8,-18.3,39.5C-40.6,28.2,-65.8,24.5,-68.4,15.1C-70.9,5.7,-50.8,-9.4,-35.6,-22.3C-20.4,-35.3,-10.2,-46.2,0.3,-46.4C10.7,-46.6,21.5,-36.2,28.3,-25.1Z" transform="translate(100 100)" />
                            </svg>

                            <h1 class="heading-text">{{ product.title }}</h1>
                        </div>

                        <p class="price">Starting at <span class="important">${{ product.variants[0].price }}</span></p>

                        <p class="description"
                           v-html="product.descriptionHtml" />

                        <div v-for="option in product.options"
                             :key="option.id">

                            <h2 class="variant">{{ option.name }}</h2>

                            <ul class="options">

                                <li class="option"
                                     v-for="value in option.values"
                                     :class="{ active: value.value === selectedOptions[option.name] }"
                                     :key="value.value"
                                     @click="setSelectedOption(option.name, value.value)">{{ value.value }}</li>

                            </ul>

                        </div>

                        <a class="button"
                           :class="{ 'button-progress': pending }"
                           @click="addToCart( )">Add to cart for ${{ this.product.variants[currentVariant].price }}</a>

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
#item {
    @media (min-width: 992px) {
        height: calc(100vh - 58px);

        display: flex;
        align-items: center;
    }

    @media (max-width: 992px) {
        padding-top: 64px;
    }

    .options {
        margin-bottom: 24px;
    }

    .preview-wrapper {
        max-width: 75%;

        @media (max-width: 992px) {
            margin-left: 12.5%;
            margin-bottom: 64px;
        }
    }

    h2.variant {
        font-size: 14px;
        font-weight: 500;
        line-height: 1;
        color: black;

        margin-bottom: 8px;
    }

    p.price, p.description {
        font-size: 16px;
        font-weight: 300;
        line-height: 1.2;
        color: rgba(black, 0.5);

        margin-bottom: 24px;
    }

    p.price .important {
        font-weight: 500;
        color: black;
    }
}
</style>

<script>
export default {
    name: "Item",

    props: [ "identifier" ],

    data( ) {
        return {
            product: null,

            selectedOptions: null,
            currentVariant: null,

            pending: false
        };
    },

    methods: {
        setSelectedOption(name, value) {
            this.selectedOptions[name] = value;

            this.updateCurrentVariant( );
        },

        async addToCart( ) {
            if(this.loading) return;

            this.pending = true;

            let identifier = this.$store.state.identifier;

            if( ! identifier ) {
                const checkout = await this.$client.checkout.create( );

                identifier = checkout.id;
                this.$store.commit("setIdentifier", checkout.id);
            }

            const product = {
                variantId: this.product.variants[this.currentVariant].id,
                quantity: 1
            };

            await this.$client.checkout.addLineItems(identifier, product);
            this.$store.commit("incrementCart");

            this.pending = false;
        },

        updateCurrentVariant( ) {
            let title;

            for(const option of this.product.options) {
                if(title) title += " / " + this.selectedOptions[option.name];
                else title = this.selectedOptions[option.name];
            }

            this.currentVariant = this.product.variants.findIndex(variant => variant.title === title);
        },

        async render( ) {
            const product = await this.$client.product.fetchByHandle(this.identifier);

            let selectedOptions = { };

            for(const option of product.options) {
                selectedOptions[option.name] = option.values[0].value;
            }

            this.product = product;
            this.selectedOptions = selectedOptions;

            this.updateCurrentVariant( );
        }
    },

    mounted( ) {
        this.render( );
    },

    watch: {
        // Product -> product navigation
        $route( ) {
            this.product = null;
            this.selectedOptions = null;
            this.selectedVariation = null;
            this.pending = false;

            this.render( );
        }
    }
}
</script>
