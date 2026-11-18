<template>
    <component :is="component" :href="href" :to="to" :target="target" class="icon-button" :class="classObject" @click="click">
        <i class="material-icons">{{ icon }}</i>
    </component>
</template>

<script>
export default {
    name: "IconButton",

    emits: [ "click" ],

    // To-do: Proper style proponent
    props: [
        "icon",
        "active",
        "variant",
        "notification",
        "to",
        "target",
        "href"
    ],

    data( ) {
        return {
            Variants: { Light: "light", Color: "color" }
        }
    },

    computed: {
        classObject( ) {
            return {
                "icon-button-light": this.variant === this.Variants.Light,
                "icon-button-color": this.variant === this.Variants.Color,
                "icon-button-notification": this.notification,
                "active": this.active
            };
        },

        component( ) {
            if(this.href) return "a";
            if(this.to) return "router-link";
            return "div";
        }
    },

    methods: {
        click( ) {
            this.$emit("click");
        }
    }
}
</script>

<style lang="scss">
.icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    height: 40px;
    width: 40px;

    border-radius: 50%;

    color: rgba(black, 0.5);

    transition: 100ms;

    &.icon-button-color {
        background-color: rgba(black, 0.05);

        color: black;

        &.active, &:hover {
            background-color: var(--accent-color-transparent);

            color: var(--accent-color);
        }
    }

    &.icon-button-light {
        color: rgba(white, 0.5);

        &.active, &:hover {
            background-color: rgba(white, 0.1);

            color: white;
        }
    }

    &.icon-button-notification {
        position: relative;

        &::after {
            // Required for pseudo-elements
            content: "";

            position: absolute;

            top: 2px;
            right: 2px;

            height: 8px;
            width: 8px;

            border-radius: 50%;

            background-color: black;
        }
    }

    &.active, &:hover {
        background-color: rgba(black, 0.1);

        color: black;
    }

    &:not(.active):hover {
        cursor: pointer;
    }
}
</style>
