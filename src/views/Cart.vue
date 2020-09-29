<template>
    <div id="cart">

    </div>
</template>

<script>
export default {
    name: "Cart",

    data( ) {
        return {
            checkout: null
        };
    },

    methods: {

    },

    mounted( ) {
        if( ! this.$store.state.identifier ) return;

        this.$client.checkout.fetch(this.$store.state.identifier).then(checkout => {
            this.checkout = checkout;

            console.log(checkout);
        });
    },

    watch: {

    }
}
</script>
