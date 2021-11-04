<template>
    <div class="container">
        <div class="footer">
            <!-- To-do: Expand footer and include non-affiliation notice -->
            <p class="footer-text">Copyright 2021 <a>Blockeley</a>.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss">
.footer {
    padding-bottom: 24px;

    @media (max-width: 992px) {
        padding-top: 128px;
    }

    @media (min-width: 992px) {
        padding-top: 256px;
    }

    p.footer-text {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.2;
        color: rgba(black, 0.25);

        text-align: center;

        a {
            color: rgba(black, 0.5);
            font-weight: 500;

            transition: 100ms;

            &:hover {
                color: rgba(black, 0.75);

                cursor: pointer;
            }
        }
    }
}
</style>
