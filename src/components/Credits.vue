<template>
    <div class="credits-viewport">
        <!-- This element has its contents scrolling -->
        <div class="credits-wrapper" id="credits-boundary">
            <!-- This element actually moves -->
            <div class="credits" @mouseover="setHovering(true)" @mouseleave="setHovering(false)">
                <div class="credits-spacer"> </div>
                    <p class="credits-item" v-for="item in this.credits" :key="item">
                        {{ item }}
                    </p>
                <div class="credits-spacer"> </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Credits",

    mounted: function ( ) {
        const target = document.getElementById("credits-boundary");
        const height = target.clientHeight;
        let current = 0;
        //scrollHeight is a constant that represents the total height of the overflow content
        //scrollTop is a variable that changes, representing how far we have scrolled down
        //height is the client Height, which, means scrollHeight (total height) - scrollTop (current) will never equal zero because there will be some clientHeight visible.
        setInterval(() => {
            if (this.hovering) {
                //Do not scroll while hovering
                return; //Uncomment to allow the scrolling to stop when hovering over the hover container
            }

            //      CONSTANT               VARIABLE
            if (target.scrollHeight - target.scrollTop <= height) {
                //Restart credits
                current = 0;
            } else {
                current += 1;
            }
            target.scroll(0, current);
            //Update credits every 25 milliseconds
        }, 25);
    },

    props: [
        "credits"
    ],

    data( ) {
        return {
            hovering: false
        };
    },

    methods: {
        setHovering(isHovering) {
            this.hovering = isHovering;
        }
    }
}
</script>

<style lang="scss">
    .credits-viewport {
        position: relative;
        margin-top: 12px;
        margin-bottom: 12px;
    }
    .credits-spacer {
        height: 400px;
    }
    .credits-wrapper {
        max-height: 400px;
        overflow: hidden;

        display: flex;
        justify-content: center;

        &::before {
            content: "";

            position: absolute;

            height: 70px;
            width: 100%;

            top: 0;
            left: 0;

            z-index: 100;

            background: linear-gradient(to bottom, white, transparent);
        }
        &::after {
            content: "";

            position: absolute;

            height: 70px;
            width: 100%;

            bottom: 0;
            left: 0;

            z-index: 100;

            background: linear-gradient(to bottom, transparent, white);
        }
    }
    .credits {
        text-align: center;

        .credits-item {
            margin-top: 12px;
            margin-bottom: 12px;

            font-size: 36px;
            font-weight: 700;

            text-shadow: 3px 3px var(--accent-color);

        }
    }
</style>
