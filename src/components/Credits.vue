<template>
    <div class="credits">
        <i v-for="item in this.credits" :key="item">{{ item }}</i>
    </div>
</template>

<script>
export default {
    name: "Credits",

    created: function ( ) {

    },

    props: [
        "credits"
    ]
}
</script>

<style lang="scss">
    .credits {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        text-align: center;

        position: relative;

        max-height: 40vh;
        overflow: hidden;

        
        &::before {
            content: "";

            position: absolute;

            height: 10vh;
            width: 100%;

            top: 0;
            left: 0;

            z-index: 100;

            background: linear-gradient(to bottom, white, transparent);
        }
        &::after {
            content: "";

            position: absolute;

            height: 10vh;
            width: 100%;

            bottom: 0;
            left: 0;

            z-index: 100;

            background: linear-gradient(to bottom, transparent, white);
        }
    }
</style>
