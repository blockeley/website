<template>
    <div id="cart">

        <template v-if="checkout && checkout.lineItems.length > 0">

            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="items">

                            <div v-for="item in checkout.lineItems"
                                 :key="item.id"
                                 class="item">

                                <p class="item-quantity">{{ item.quantity }}x</p>

                                <div class="item-preview-wrapper">
                                    <div class="card card-image card-6x8">

                                        <img :src="item.variant.image.src">

                                    </div>
                                </div>

                                <div class="item-content">
                                    <h2 class="item-title">{{ item.title }}</h2>

                                    <p class="item-options" v-html="getOptions(item.variant.title)" />

                                    <p class="item-price">Priced at <span class="important">${{ item.variant.price }}</span></p>
                                </div>

                                <div class="item-buttons">

                                    <a class="icon-button icon-button-alt"
                                       @click="updateItem(item.id)">

                                        <i class="material-icons">add</i>

                                    </a>

                                    <a class="icon-button icon-button-alt"
                                       @click="updateItem(item.id, false)">

                                        <i class="material-icons">remove</i>

                                    </a>

                                    <a class="icon-button icon-button-alt"
                                       @click="removeItem(item.id)">

                                        <i class="material-icons">delete</i>

                                    </a>

                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div id="order-summary" class="card">
                            <div class="card-header">
                                <h2 class="card-title">Order summary</h2>
                            </div>

                            <div class="card-row">
                                <p class="card-index">Sub-total</p>

                                <p class="card-value">${{ checkout.subtotalPrice }}</p>
                            </div>

                            <div class="card-row">
                                <p class="card-index">Tax estimate</p>

                                <p class="card-value">${{ checkout.totalTax }}</p>
                            </div>

                            <div class="card-row">
                                <p class="card-index">Total estimate</p>

                                <p class="card-value">${{ checkout.totalPrice }}</p>
                            </div>
                        </div>

                        <div id="shipping-address" class="card">
                            <div class="card-header">
                                <h2 class="card-title">Shipping address</h2>
                            </div>
                        </div>

                        <div id="order-button-wrapper">

                            <a class="button"
                               :href="checkout.webUrl">Check out</a>

                        </div>
                    </div>
                </div>
            </div>

        </template>

        <template v-else-if="checkout">

            <div class="splash splash-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <h1 class="splash-heading">Oops</h1>

                            <p class="splash-description"><span class="important">There are no items in your cart.</span>
                                                      <br>Support Blockeley by purchasing merchandise or donating.</p>

                            <div class="splash-buttons">

                                <router-link to="/merchandise"
                                             class="button">Browse merchandise</router-link>

                                <a class="button" href="https://streamlabs.com/offtheirplate1" target="_blank">Donate</a>

                            </div>
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
#cart {
    min-height: calc(100vh - 58px);

    padding-top: 64px;

    // Specific .card
    #shipping-address.card, #order-summary.card {
        margin-bottom: 24px;

        padding: 24px;

        .card-header {
            height: 54px;

            background-color: black;

            padding-right: 24px;
            padding-left: 24px;

            margin: -24px -24px 24px -24px;

            display: flex;
            align-items: center;

            h2.card-title {
                font-size: 16px;
                font-weight: 500;
                line-height: 1;
                color: white;
            }
        }
    }

    // Specific .card
    #shipping-address.card {

    }

    // Specific .card
    #order-summary.card {
        .card-row {
            display: flex;
            justify-content: space-between;

            &:not(:last-child) {
                margin-bottom: 8px;
            }

            p.card-index, p.card-value {
                font-size: 16px;
                line-height: 1;
            }

            p.card-index {
                font-weight: 300;
                color: rgba(black, 0.5);
            }

            p.card-value {
                font-weight: 500;
                color: black;
            }
        }
    }

    #order-button-wrapper {
        text-align: center;
    }

    .item {
        display: flex;
        align-items: center;

        &:not(:first-child) {
            margin-top: 48px;
        }

        &:not(:last-child) {
            padding-bottom: 48px;

            border-bottom: 2px dashed rgba(black, 0.1);
        }

        p.item-quantity {
            font-size: 24px;
            font-weight: 700;
            line-height: 1;
            color: rgba(black, 0.25);

            width: 64px;

            margin-right: 24px;
        }

        .item-buttons {
            display: flex;

            margin-left: 24px;

            a.icon-button:not(:last-child) {
                margin-right: 8px;
            }
        }

        .item-content {
            flex-grow: 1;

            h2.item-title {
                font-size: 24px;
                font-weight: 700;
                line-height: 1.2;
                color: black;

                margin-bottom: 4px;
            }

            p.item-price, p.item-options {
                font-size: 16px;
                font-weight: 300;
                line-height: 1.2;
                color: rgba(black, 0.5);

                .important {
                    font-weight: 500;
                    color: black;
                }
            }

            p.item-options {
                margin-bottom: 24px;
            }
        }

        .item-preview-wrapper {
            @media (min-width: 992px) {
                width: 128px;

                margin-right: 24px;
            }
        }
    }
}
</style>

<script>
export default {
    name: "Cart",

    data( ) {
        return {
            checkout: null
        };
    },

    methods: {
        getOptions(title) {
            const options = title.split(" / ");

            for(const index in options) {
                options[index] = `<span class="important">` + options[index] + `</span>`;
            }

            return options.join(", ");
        },

        async render( ) {
            if( ! this.$store.state.identifier ) return;

            const checkout = await this.$client.checkout.fetch(this.$store.state.identifier);

            console.log(checkout);

            this.checkout = checkout;
        },

        async updateItem(identifier, increment = true) {
            const index = this.checkout.lineItems.findIndex(item => item.id === identifier);
            const item = this.checkout.lineItems[index];

            if( item.quantity === 1 && ! increment ) {
                this.removeItem(identifier);

                return;
            }

            if(item.quantity === 999 && increment) {
                return;
            }

            const update = {
                id: identifier,
                quantity: increment ? item.quantity + 1 : item.quantity - 1
            };

            const checkout = await this.$client.checkout.updateLineItems(this.checkout.id, update);

            this.checkout = checkout;
        },

        async removeItem(identifier) {
            const remove = [ identifier ];

            const checkout = await this.$client.checkout.removeLineItems(this.checkout.id, remove);

            this.checkout = checkout;
        }
    },

    mounted( ) {
        this.render( );
    }
}
</script>
