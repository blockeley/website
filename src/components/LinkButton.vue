<template>
    <component :is="component" :href="href" :to="to" :target="target" class="link-button" :class="classObject" @click="click">
        <slot />
    </component>
</template>

<script>
export default {
    name: "LinkButton",

    props: [
        "alternate",
        "size",
        "to",
        "target",
        "href"
    ],

    computed: {
        classObject( ) {
            return {
                "link-button-alternate": this.alternate,
                "link-button-small": this.size === "small"
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
.link-button {
    display: inline-flex;
    align-items: flex-start;

    height: 20px;

    font-size: 14px;
    font-weight: 500;
    line-height: 1;

    // color: rgba(black, 0.75);
    color: rgba(black, 0.5);

    // border-bottom: 2px solid rgba(black, 0.75);
    border-bottom: 2px solid rgba(black, 0.5);

    transition: 100ms;

    &.link-button-small {
        height: 18px;

        font-size: 12px;
    }

    &.link-button-alternate {
        color: rgba(white, 0.75);

        border-bottom-color: rgba(white, 0.75);

        &:hover {
            color: white;

            border-bottom-color: white;
        }
    }

    &:hover {
        color: black;

        cursor: pointer;

        border-bottom-color: black;
    }
}
</style>
