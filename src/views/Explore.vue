<template>
    <div id="explore">
        <div class="splash splash-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <img id="logo" src="images/logo.png">

                        <h1 class="splash-heading">Blockeley</h1>
                        <h2 class="splash-title">the <span class="important">#1 Minecraft university</span> in the world</h2>

                        <p class="splash-description">The Blockeley Minecraft server contains a <span class="important">virtual replica of the University of California, Berkeley campus</span> in Minecraft. In May, 2020, Blockeley hosted a <span class="important">virtual graduation</span> for the class of 2020 and <span class="important">two-day virtual musical festival</span> with some of the world's most popular artists.</p>

                        <div class="splash-buttons">

                            <router-link to="/campus"
                                         class="button">Minecraft campus</router-link>

                            <router-link to="/merchandise"
                                         class="button">Support Blockeley</router-link>

                            <a class="button" href="https://discord.gg/mmAK4D5" target="_blank">Discord community</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
#explore .splash {
    #logo {
        position: absolute;

        z-index: -1;

        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);

        opacity: 0.05;

        width: 512px;
        max-width: 100%;
    }

    h1.splash-heading {
        font-size: 64px;

        margin-bottom: 16px;
    }

    h2.splash-title {
        margin-bottom: 32px;

        line-height: 1.5;

        .important {
            color: black;

            border-bottom: 2px dashed rgba(black, 0.25);
        }
    }
}
</style>

<script>
export default {
    name: "Explore"
}
</script>
