<template>
    <!-- To-do: New cart design -->
    <div id="cart" :class="classObject">
        <component :is="div">
            <h1>test</h1>
        </component>

        <template v-if="checkout && checkout.lineItems.length > 0">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div id="cart-items-wrapper">
                            <CartItem @updateQuantity="updateItemQuantity" @remove="removeItem" v-for="item in checkout.lineItems" :key="item.id" :item="item" />
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div id="order-summary">
                            <Card heading="Order summary">
                                Sub-total <span class="important float-right">${{ checkout.subtotalPrice }}</span>
                                <br>Tax estimate <span class="important float-right">${{ checkout.totalTax }}</span>
                                <br>Total estimate <span class="important float-right">${{ checkout.totalPrice }}</span>
                            </Card>

                            <div class="text-center">
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
import Card from "@/components/Card";

export default {
    name: "Cart",

    components: {
        Splash,
        Button,
        Section,
        CartItem,
        Card
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

        // To-do: Move cart functionality to store
        async updateItemQuantity(identifier, increment = true) {
            this.pending = true;

            const itemIndex = this.checkout.lineItems.findIndex(item => item.id === identifier);
            const item = this.checkout.lineItems[itemIndex];

            // To-do: Maximum item quantity..?
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
#cart {
    min-height: calc(100vh - 56px);

    transition: opacity 100ms ease-in-out;

    &.cart-pending {
        opacity: 0.5;

        pointer-events: none;
    }

    #cart-items-wrapper {
        margin-top: 48px;

        @media (max-width: 992px) {
            margin-bottom: 48px;
        }

        .cart-item:not(:first-child) {
            padding-top: 48px;
        }

        .cart-item:not(:last-child) {
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

        .card {
            margin-bottom: 24px;
        }
    }
}
</style>
