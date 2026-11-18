<template>
    <div class="alert">
        <Icon :name="icon" />

        <p class="alert-message">{{ message }}</p>
    </div>
</template>

<script>
import Icon from "@/components/Icon.vue";

export default {
    name: "Alert",

    components: {
        Icon
    },

    props: [
        "icon",
        "message"
    ]
}
</script>

<style lang="scss">
.alert {
    display: inline-flex;
    align-items: center;

    position: relative;

    padding-right: 16px;
    padding-left: 16px;

    background-color: var(--accent-color);

    p.alert-message {
        font-size: 14px;
        font-weight: 500;
        line-height: 1.25;
        color: rgba(white, 0.75);

        text-align: left;

        // 40px default height (14px + 13px * 2)
        margin-top: 13px;
        margin-bottom: 13px
    }

    svg.icon {
        color: rgba(white, 0.75);

        margin-right: 16px;
    }
}
</style>
