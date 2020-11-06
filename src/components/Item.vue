<template>
    <div class="item">
        <div class="item-image">
            <img :src="item.variant.image.src">
        </div>

        <div class="item-text">
            <p class="item-title">{{ item.title }}</p>
            <p class="item-variant" v-html="variant" />
            <p class="item-price">Priced at <span class="important">${{ item.variant.price }}</span></p>
        </div>

        <p class="item-quantity">x{{ item.quantity }}</p>

        <div class="item-buttons">
            <IconButton @click.native="updateQuantity" icon="add" variant="color" />

            <IconButton @click.native="updateQuantity(false)" icon="remove" variant="color" />

            <IconButton @click.native="remove" icon="delete" variant="color" />
        </div>
    </div>
</template>

<script>
import IconButton from "@/components/IconButton";

export default {
    name: "Item",

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
@import "@/scss/colors";

/*
 *    Application color
 *
 */
#application {
    @each $name, $color in $colors {
        &.color-#{$name} .item .item-image {
            box-shadow: -4px -4px $color;
        }
    }
}

/*
 *    Item
 *
 */
.item {
    @media (min-width: 992px) {
        display: flex;
        align-items: center;

        .item-image {
            width: 128px;
            height: 176px;

            margin-right: 24px;
        }

        .item-text {
            flex-grow: 1;

            margin-right: 24px;
        }

        .item-quantity {
            margin-right: 8px;
        }
    }

    @media (max-width: 992px) {
        text-align: center;

        .item-image {
            // Padding relative to width
            width: 100%;

            padding-top: calc(100% / 6 * 8);

            margin-bottom: 16px;
        }

        .item-text {
            margin-bottom: 16px;
        }

        .item-quantity {
            margin-bottom: 8px;
        }
    }

    .item-text {
        flex-grow: 1;

        p.item-title {
            font-size: 24px;
            font-weight: 700;
            line-height: 1;
            color: black;
        }

        p.item-title, p.item-variant {
            margin-bottom: 8px;
        }

        p.item-price, p.item-variant {
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

    .item-buttons .icon-button:not(:last-child) {
        margin-right: 8px;
    }

    .item-image {
        position: relative;

        border: 2px solid black;
        box-shadow: -4px -4px #FFC02E;
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

    p.item-quantity {
        font-size: 24px;
        font-weight: 700;
        line-height: 1;
        color: rgba(black, 0.5);
    }
}
</style>
