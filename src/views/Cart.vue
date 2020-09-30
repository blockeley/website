<template>
    <div id="cart">

        <template v-if="checkout && checkout.lineItems.length > 0">

            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <ul class="items">

                            <li v-for="item in checkout.lineItems"
                                 :key="item.id"
                                 class="item">

                                <div class="item-preview">
                                    <div class="card card-image card-6x8">

                                        <img :src="item.variant.image.src">

                                    </div>
                                </div>

                                <div class="item-content">
                                    <h2 class="sub-heading sub-heading-alt">{{ item.title }}</h2>

                                    <p class="description" v-html="getOptions(item.variant.title)" />

                                    <p class="description">Priced at <span class="important">${{ item.variant.price }}</span></p>
                                </div>

                                <h3 class="sub-heading">{{ item.quantity }}x</h3>

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

                            </li>

                        </ul>
                    </div>

                    <div class="col-lg-4">
                        <div id="order-summary">
                            <div class="card">
                                <h3 class="card-header">Order summary</h3>

                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <p class="description">Sub-total</p>

                                        <p class="description">
                                            <span class="important">${{ checkout.subtotalPrice }}</span>
                                        </p>
                                    </div>

                                        <div class="d-flex justify-content-between">
                                        <p class="description">Tax estimate</p>

                                        <p class="description">
                                            <span class="important">${{ checkout.totalTax }}</span>
                                        </p>
                                    </div>

                                    <div class="d-flex justify-content-between">
                                        <p class="description">Total estimate</p>

                                        <p class="description">
                                            <span class="important">${{ checkout.totalPrice }}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="text-center">

                                <a class="button"
                                   :href="checkout.webUrl">Check out</a>

                            </div>
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
                            <h1 class="heading">Oops</h1>

                            <p class="description"><span class="important">There are no items in your cart.</span>
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

    // Specific .items
    @media (max-width: 992px) {
        ul.items {
            margin-bottom: 48px;
        }
    }

    // Specific .items
    #order-summary, ul.items {
        margin-top: 64px;
    }

    #order-summary {
        @media (min-width: 992px) {
            position: sticky;

            top: 48px;
        }

        // Specific .card
        .card {
            margin-bottom: 24px;
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

            if(increment) this.$store.commit("increaseQuantity");
            else this.$store.commit("decreaseQuantity");

            this.checkout = checkout;
        },

        async removeItem(identifier) {
            const index = this.checkout.lineItems.findIndex(item => item.id === identifier);
            const { quantity } = this.checkout.lineItems[index];

            const remove = [ identifier ];

            const checkout = await this.$client.checkout.removeLineItems(this.checkout.id, remove);
            this.$store.commit("decreaseQuantity", quantity);

            this.checkout = checkout;
        }
    },

    mounted( ) {
        this.render( );
    }
}
</script>
