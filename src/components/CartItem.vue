<template>
    <div class="cart-item">
        <div class="cart-item-image">
            <img :src="item.variant.image.src">
        </div>

        <div class="cart-item-text">
            <p class="cart-item-title">{{ item.title }}</p>
            <p class="cart-item-variant" v-html="variant" />
            <p class="cart-item-price">Priced at <span class="important">${{ item.variant.price }}</span></p>
        </div>

        <p class="cart-item-quantity">x{{ item.quantity }}</p>

        <div class="cart-item-buttons">
            <IconButton @click.native="updateQuantity" icon="add" variant="color" />

            <IconButton @click.native="updateQuantity(false)" icon="remove" variant="color" />

            <IconButton @click.native="remove" icon="delete" variant="color" />
        </div>
    </div>
</template>

<script>
import IconButton from "@/components/IconButton";

export default {
    name: "CartItem",

    components: {
        IconButton
    },

    props: [
        "item"
    ],

    computed: {
        variant( ) {
            const options = this.item.variant.title.split(" / ");

            for(const index in options) {
                options[index] = `<span class="important">` + options[index] + `</span>`;
            }

            return options.join(" / ");
        }
    },

    methods: {
        updateQuantity(increment = true) {
            this.$emit("updateQuantity", this.item.id, increment);
        },

        remove( ) {
            this.$emit("remove", this.item.id);
        }
    }
}
</script>

<style lang="scss">
.cart-item {
    @media (min-width: 992px) {
        display: flex;
        align-items: center;

        .cart-item-image {
            width: 128px;
            height: 176px;

            margin-right: 24px;
        }

        .cart-item-text {
            flex-grow: 1;

            margin-right: 24px;
        }

        .cart-item-quantity {
            margin-right: 8px;
        }
    }

    @media (max-width: 992px) {
        text-align: center;

        .cart-item-image {
            // Padding relative to width
            width: 100%;

            padding-top: calc(100% / 6 * 8);

            margin-bottom: 16px;
        }

        .cart-item-text {
            margin-bottom: 16px;
        }

        .cart-item-quantity {
            margin-bottom: 8px;
        }
    }

    .cart-item-text {
        flex-grow: 1;

        p.cart-item-title {
            font-size: 24px;
            font-weight: 700;
            line-height: 1;
            color: black;
        }

        p.cart-item-title, p.cart-item-variant {
            margin-bottom: 8px;
        }

        p.cart-item-price, p.cart-item-variant {
            font-size: 16px;
            font-weight: 300;
            line-height: 1;
            color: rgba(black, 0.5);

            .important {
                font-weight: 500;
                color: black;
            }
        }
    }

    .cart-item-buttons .icon-button:not(:last-child) {
        margin-right: 8px;
    }

    .cart-item-image {
        position: relative;

        border: 2px solid black;
        box-shadow: -4px -4px var(--accent-color);
        background-color: white;

       img {
           position: absolute;

           height: 100%;
           width: 100%;

           left: 0;
           top: 0;

           object-fit: cover;
       }
    }

    p.cart-item-quantity {
        font-size: 24px;
        font-weight: 700;
        line-height: 1;
        color: rgba(black, 0.5);
    }
}
</style>
