<template>
    <div id="item">

        <template v-if="product">

            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div id="preview">
                            <div class="card card-image card-6x8">

                                <img :src="product.variants[currentVariant].image.src">

                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <h1 class="heading heading-background">{{ product.title }}</h1>

                        <p id="price" class="description">Starting at <span class="important">${{ product.variants[0].price }}</span></p>

                        <p id="description" class="description"
                           v-html="product.descriptionHtml" />

                        <div v-for="option in product.options"
                             :key="option.id">

                            <h2 class="description">
                                <span class="important">{{ option.name }}</span>
                            </h2>

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

    #preview {
        max-width: 75%;

        @media (max-width: 992px) {
            margin-left: 12.5%;
            margin-bottom: 64px;
        }
    }

    // Specific .heading
    h1.heading.heading-background {
        margin-bottom: 8px;

        &::before {
            top: -176px;
            left: -144px;

            transform: rotate(90deg);
        }
    }

    // Specific .description
    h2.description {
        margin-bottom: 8px;
    }

    // Specific .description, .options
    p#price.description, p#description.description, .options {
        margin-bottom: 24px;
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
            this.$store.commit("increaseQuantity");

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
