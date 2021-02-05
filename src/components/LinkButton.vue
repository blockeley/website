<template>
    <!-- To-do: Implement href and router-link attributes -->
    <div class="link-button" :class="classObject">
        <slot />
    </div>
</template>

<script>
export default {
    name: "LinkButton",

    props: [
        "alternate",
        "size"
    ],

    computed: {
        classObject( ) {
            return {
                "link-button-alternate": this.alternate,
                "link-button-small": this.size === "small"
            };
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
    color: rgba(black, 0.75);
    line-height: 1;

    border-bottom: 2px solid rgba(black, 0.75);

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
