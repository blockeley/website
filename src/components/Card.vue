<template>
    <!-- To-do: Remove component -->
    <div class="card">
        <p class="card-heading">{{ heading }}</p>

        <p class="card-body">
            <slot />
        </p>
    </div>
</template>

<script>
export default {
    name: "Card",

    props: [
        "heading"
    ]
}
</script>

<style lang="scss">
.card {
    border: 2px solid black;
    box-shadow: -4px -4px var(--accent-color);
    background-color: white;

    p.card-heading {
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

    p.card-body {
        padding: 24px;

        font-size: 16px;
        font-weight: 400;
        color: rgba(black, 0.5);
        line-height: 1.25;

        .important {
            color: black;
            font-weight: 500;
        }
    }
}
</style>
