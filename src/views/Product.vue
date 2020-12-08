<template>
    <div id="product">
        <template v-if="product">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <!-- To-do: Variant selection -->
                        <Preview class="product-preview" :front="product.images[0].src" :back="product.images[1] ? product.images[1].src : null" />
                    </div>

                    <div class="col-lg-6">
                        <p class="product-title">{{ product.title }}</p>
                        <!-- Starting at... (varying variant price) -->
                        <p class="product-price">Priced at <span class="important">${{ product.variants[0].price }}</span></p>
                        <p class="product-description" v-html="product.descriptionHtml" />

                        <div v-for="option in product.options" :key="option.id">
                            <p class="product-options-title">{{ option.name }}</p>

                            <Options :options="option.choices" @change="setSelectedOption(option.name, ...arguments)" />
                        </div>

                        <Button :progress="pending" @click.native="addToCart">Add to cart for ${{ this.product.variants[currentVariant].price }}</Button>
                    </div>
                </div>
            </div>

        </template>

        <template v-else>
            <Splash progress="true" />
        </template>
    </div>
</template>

<script>
import Preview from "@/components/Preview";
import Splash from "@/components/Splash";
import Options from "@/components/Options";
import Button from "@/components/Button";

export default {
    name: "Product",

    components: {
        Preview,
        Splash,
        Options,
        Button
    },

    props: [
        "identifier"
    ],

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
                this.$store.commit("setIdentifier", identifier);
            }

            const product = { variantId: this.product.variants[this.currentVariant].id, quantity: 1 };
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
                // Trim product options for Options component
                option.choices = option.values.map(value => value.value);

                selectedOptions[option.name] = option.choices[0];
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

<style lang="scss">
@import "@/scss/colors";

$color: map-get($colors, "product");
$string: str-slice(inspect($color), 2);

#product {
    min-height: calc(100vh - 56px);

    @media (max-width: 992px) {
        text-align: center;
    }

    p.product-options-title {
        font-size: 16px;
        font-weight: 500;
        line-height: 1;
        color: black;

        margin-bottom: 8px;
    }

    .options {
        padding-bottom: 24px;
    }

    // To-do: Variant selection
    .product-preview {
        @media (min-width: 992px) {
            max-width: 72%;

            margin-left: 14%;
        }

        margin-top: 48px;
    }

    .product-title {
        position: relative;

        margin-top: 48px;

        font-size: 36px;
        font-weight: 700;
        color: black;
        line-height: 1;

        text-shadow: 4px 4px $color;

        margin-bottom: 8px;

        @media (min-width: 512px) {
            &::before {
                // Required for pseudo-element
                content: "";

                z-index: -1;

                position: absolute;

                height: 512px;
                width: 512px;

                top: 50%;
                left: 0;

                transform: translate(-50%, -50%);

                background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23#{$string}' fill-opacity='0.075' transform='translate(100 100)' d='M28.3,-25.1C35,-14.1,37.8,-2.4,39.5,16.7C41.3,35.7,42,62.2,32.7,66C23.4,69.7,4,50.8,-18.3,39.5C-40.6,28.2,-65.8,24.5,-68.4,15.1C-70.9,5.7,-50.8,-9.4,-35.6,-22.3C-20.4,-35.3,-10.2,-46.2,0.3,-46.4C10.7,-46.6,21.5,-36.2,28.3,-25.1Z' /%3E%3C/svg%3E");
                background-repeat: no-repeat;
            }
        }
    }

    .product-description, .product-price {
        font-size: 16px;
        font-weight: 300;
        line-height: 1.2;
        color: rgba(black, 0.5);

        margin-bottom: 24px;
    }

    .product-price .important {
        color: black;
        font-weight: 500;
    }

    // To-do: Support more markdown
    .product-description {
        strong {
            font-weight: 500;
        }

        a {
            color: $color;
            font-weight: 500;
            line-height: 1.5;

            border-bottom: 2px dashed $color;

            &:hover {
                border-bottom-style: solid;
            }
        }
    }
}
</style>
