<template>
    <div id="cart" :class="classObject">
        <template v-if="checkout && checkout.lineItems.length > 0">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div id="items">
                            <CartItem @updateQuantity="updateItemQuantity" @remove="removeItem" v-for="item in checkout.lineItems" :key="item.id" :item="item" />
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div id="order-summary">
                            <div id="order-summary-card">
                                <!-- Mix and match..? -->
                                <p class="card-title">Order summary</p>

                                <div class="card-body">
                                    <div class="card-row">
                                        <p class="row-index">Sub-total</p>
                                        <p class="row-value">${{ checkout.subtotalPrice }}</p>
                                    </div>

                                    <div class="card-row">
                                        <p class="row-index">Tax estimate</p>
                                        <p class="row-value">${{ checkout.totalTax }}</p>
                                    </div>

                                    <div class="card-row">
                                        <p class="row-index">Total estimate</p>
                                        <p class="row-value">${{ checkout.totalPrice }}</p>
                                    </div>
                                </div>
                            </div>

                            <div id="order-summary-button">
                                <a target="_blank" :href="checkout.webUrl">
                                    <Button>Check out</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template v-else-if="loading">
            <Splash progress="true" />
        </template>

        <template v-else>
            <Splash>
                <Section heading="Uh oh!" variant="background">
                    <template v-slot:description><span class="important">You have not added anything to your cart.</span>
                                                 <br>Support Blockeley development by purchasing merchandise or donating through Patreon.</template>

                    <template v-slot:buttons>
                        <router-link to="/merchandise">
                            <Button>Blockeley merchandise</Button>
                        </router-link>

                        <a href="https://patreon.blockeley.com" target="_blank">
                            <Button>Donate using Patreon</Button>
                        </a>
                    </template>
                </Section>
            </Splash>
        </template>

    </div>
</template>

<script>
import Splash from "@/components/Splash";
import Button from "@/components/Button";
import Section from "@/components/Section";
import CartItem from "@/components/CartItem";

export default {
    name: "Cart",

    components: {
        Splash,
        Button,
        Section,
        CartItem
    },

    data( ) {
        return {
            checkout: null,

            loading: true,
            pending: false
        };
    },

    computed: {
        classObject( ) {
            return {
                "cart-pending": this.pending
            };
        }
    },

    methods: {
        async render( ) {
            if( ! this.$store.state.identifier ) {
                this.loading = false;

                return undefined;
            }

            this.checkout = await this.$client.checkout.fetch(this.$store.state.identifier);

            this.loading = false;

            return undefined;
        },

        async updateItemQuantity(identifier, increment = true) {
            this.pending = true;

            const itemIndex = this.checkout.lineItems.findIndex(item => item.id === identifier);
            const item = this.checkout.lineItems[itemIndex];

            // Maximum item quantity..?
            if( item.quantity === 1 && ! increment ) {
                await this.removeItem(identifier);

                return undefined;
            }

            const update = { id: identifier, quantity: increment ? item.quantity + 1 : item.quantity - 1 };
            this.checkout = await this.$client.checkout.updateLineItems(this.checkout.id, update);

            if(increment) this.$store.commit("increaseQuantity");
            else this.$store.commit("decreaseQuantity");

            this.pending = false;

            return undefined;
        },

        async removeItem(identifier) {
            this.pending = true;

            const itemIndex = this.checkout.lineItems.findIndex(item => item.id === identifier);
            const { quantity } = this.checkout.lineItems[itemIndex];

            this.checkout = await this.$client.checkout.removeLineItems(this.checkout.id, [ identifier ]);
            this.$store.commit("decreaseQuantity", quantity);

            this.pending = false;

            return undefined;
        }
    },

    mounted( ) {
        this.render( );
    }
}
</script>

<style lang="scss">
@import "@/scss/colors";

$color: map-get($colors, "cart");

#cart {
    min-height: calc(100vh - 56px);

    transition: opacity 100ms ease-in-out;

    &.cart-pending {
        opacity: 0.5;

        pointer-events: none;
    }

    // To-do: Section component option for background without margin
    .section.section-background {
        margin-top: unset;
        margin-bottom: unset;
    }

    // To-do: CartItems component
    #items {
        margin-top: 48px;

        @media (max-width: 992px) {
            margin-bottom: 48px;
        }

        .item:not(:first-child) {
            padding-top: 48px;
        }

        .item:not(:last-child) {
            padding-bottom: 48px;

            border-bottom: 2px dashed rgba(black, 0.1);
        }
    }

    #order-summary {
        @media (min-width: 992px) {
            position: sticky;

            top: 104px;

            margin-top: 48px;
        }

        // To-do: Card component
        #order-summary-card {
            border: 2px solid black;
            box-shadow: -4px -4px $color;
            background-color: white;

            margin-bottom: 24px;

            p.card-title {
                display: flex;
                align-items: center;

                height: 56px;

                background-color: black;

                padding-right: 24px;
                padding-left: 24px;

                margin-top: -2px;

                font-size: 14px;
                font-weight: 500;
                line-height: 1;
                color: white;
            }

            .card-body {
                padding: 24px;

                .card-row {
                    display: flex;
                    justify-content: space-between;

                    &:not(:last-child) {
                        margin-bottom: 4px;
                    }

                    p.row-index, p.row-value {
                        font-size: 16px;
                        line-height: 1;
                    }

                    p.row-index {
                        font-weight: 300;
                        color: rgba(black, 0.5);
                    }

                    p.row-value {
                        font-weight: 500;
                        color: black;
                    }
                }
            }
        }

        #order-summary-button {
            text-align: center;
        }
    }
}
</style>
