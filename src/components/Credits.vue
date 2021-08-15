<template>
    <div class="credits-viewport">
        <div class="credits-wrapper" id="credits-boundary">
            <div class="credits">
                <div class="credits-spacer"> </div>
                <p class="credits-item" v-for="item in this.credits" :key="item">{{ item }}</p>
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
    ]
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

        &::before {
            content: "";

            position: absolute;

            height: 70px;
            width: 100%;

            top: 0;
            left: 0;

            z-index: 100;

            background: linear-gradient(to bottom, rgb(240, 240, 240), transparent);
        }
        &::after {
            content: "";

            position: absolute;

            height: 70px;
            width: 100%;

            bottom: 0;
            left: 0;

            z-index: 100;

            background: linear-gradient(to bottom, transparent, rgb(240, 240, 240));
        }
    }
    .credits {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;

        text-align: center;

        position: relative;

        .credits-item {
            margin-top: 12px;
            margin-bottom: 12px;

            font-size: 36px;
            font-weight: 700;

            text-shadow: 3px 3px var(--accent-color);
            
        }
    }
</style>
