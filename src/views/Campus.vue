<template>
    <div id="campus">
        <div class="splash splash-center splash-continue">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <h2 class="sub-heading">University of California, Berkeley</h2>

                        <h1 class="heading">in Minecraft</h1>

                        <p class="description"><span class="important">Blockeley aims to recreate the entire University of California, Berkeley campus in Minecraft.</span> Volunteer builders have put hours into replicating buildings, parks, and other various locations around campus to create a genuine virtual experience for our visitors.</p>

                        <div class="splash-buttons">

                            <a class="button"
                               @click="explore( )">Explore in Minecraft</a>

                            <a class="button" href="https://map.blockeley.com" target="_blank">Launch our online map</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="explore" class="container">
            <h2 class="heading heading-section heading-background">Explore in Minecraft</h2>

            <ul class="options">

                <li class="option"
                    @click="setSelectedEdition('java')"
                    :class="{ active: selectedEdition === 'java' }">Minecraft Java Edition</li>

                <li class="option"
                    @click="setSelectedEdition('bedrock')"
                    :class="{ active: selectedEdition === 'bedrock' }">Minecraft Bedrock Edition</li>

            </ul>

            <ul class="steps">

                <template v-if="selectedEdition === 'java'">

                    <li class="step">
                        <div class="card card-image card-16x9">
                            <img src="/images/steps/java/one.png">
                        </div>

                        <div class="step-content">
                            <p class="step-identifier">Step one</p>

                            <p class="description"><span class="important">Register for a Minecraft account</span> if you do not already have one. <span class="important">Download Minecraft Java Edition</span> on Windows, macOS, or Linux.</p>

                            <a class="button" href="https://www.minecraft.net/en-us/download/">Download Minecraft</a>
                        </div>
                    </li>

                    <li class="step">
                        <div class="card card-image card-16x9">
                            <img src="/images/steps/java/two.png">
                        </div>

                        <div class="step-content">
                            <p class="step-identifier">Step two</p>

                            <p class="description"><span class="important">Open the Minecraft Java Edition launcher</span> and <span class="important">sign in with your Minecraft account</span>. Once signed in, <span class="important">click play</span> to launch Minecraft Java Edition.</p>
                        </div>
                    </li>

                    <li class="step">
                        <div class="card card-image card-16x9">
                            <img src="/images/steps/java/three.png">
                        </div>

                        <div class="step-content">
                            <p class="step-identifier">Step three</p>

                            <p class="description"><span class="important">Select the Multiplayer option</span> from the menu and <span class="important">click Add Server</span>. In the <span class="important">Server Address</span> field, type <span class="important">mc.blockeley.com</span>. Then, click <span class="important">Done</span>, <span class="important">select the Blockeley Minecraft server</span> from the multiplayer menu, and <span class="important">click Join Server</span>.</p>
                        </div>
                    </li>

                </template>

                <template v-if="selectedEdition === 'bedrock'">

                    <li class="step">
                        <div class="card card-image card-16x9">
                            <img src="/images/steps/bedrock/one.png">
                        </div>

                        <div class="step-content">
                            <p class="step-identifier">Step one</p>

                            <p class="description"><span class="important">Register for an Xbox Live account</span> through Microsoft if you do not already have one. <span class="important">Download Minecraft Bedrock Edition</span> on Android, iOS, or Windows 10.</p>

                            <a class="button" href="https://www.xbox.com/en-US/live/minecraft/sign-up">Minecraft sign up</a>
                        </div>
                    </li>

                    <li class="step">
                        <div class="card card-image card-16x9">
                            <img src="/images/steps/bedrock/two.png">
                        </div>

                        <div class="step-content">
                            <p class="step-identifier">Step two</p>

                            <p class="description"><span class="important">Open Minecraft Bedrock Edition</span> and <span class="important">sign in with your Xbox Live account</span> through Microsoft. Once signed in, <span class="important">click play</span> and <span class="important">select Servers</span>.</p>
                        </div>
                    </li>

                    <li class="step">
                        <div class="card card-image card-16x9">
                            <img src="/images/steps/bedrock/three.png">
                        </div>

                        <div class="step-content">
                            <p class="step-identifier">Step three</p>

                            <p class="description"><span class="important">Scroll to the bottom of the list of Featured Servers</span> and <span class="important">click Add Server</span>. In the <span class="important">Server Address</span> field, type <span class="important">mc.blockeley.com</span>. Then, <span class="important">click Save</span>, <span class="important">select the Blockeley Minecraft server</span> from the list of Additional Servers, and <span class="important">click Join Server</span>.</p>
                        </div>
                    </li>

                </template>

            </ul>

            <h2 class="heading heading-section heading-background">Featured locations</h2>

            <div id="locations" class="row justify-content-center">
                <div class="col-lg-4">
                    <div class="card card-image card-16x9">
                        <img src="images/locations/one.png">
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card card-image card-16x9">
                        <img src="images/locations/two.png">
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card card-image card-16x9">
                        <img src="images/locations/three.JPG">
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card card-image card-16x9">
                        <img src="images/locations/four.png">
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card card-image card-16x9">
                        <img src="images/locations/five.JPG">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
#campus {
    // Specific .options
    .options {
        justify-content: center;

        margin-bottom: 48px;
    }

    #locations {
        margin-bottom: -24px;

        // Specific .card.card-image
        .card.card-image {
            margin-bottom: 24px;
        }
    }

    /*
     *  Page color
     *
     */
    .button {
        box-shadow: 4px 4px #21bf73;
    }

    .heading {
        text-shadow: 4px 4px #21bf73;

        &.heading-section {
            text-shadow: 2px 2px #21bf73;
        }

        &.heading-background::before {
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%2321bf73' fill-opacity='0.1' transform='translate(100 100)' d='M28.3,-25.1C35,-14.1,37.8,-2.4,39.5,16.7C41.3,35.7,42,62.2,32.7,66C23.4,69.7,4,50.8,-18.3,39.5C-40.6,28.2,-65.8,24.5,-68.4,15.1C-70.9,5.7,-50.8,-9.4,-35.6,-22.3C-20.4,-35.3,-10.2,-46.2,0.3,-46.4C10.7,-46.6,21.5,-36.2,28.3,-25.1Z' /%3E%3C/svg%3E")
        }
    }

    .option.active {
        color: #21bf73;

        border-color: #21bf73;

        background-color: rgba(#21bf73, 0.1);
    }

    .card {
        box-shadow: -4px -4px #21bf73;
    }

    @media (min-width: 992px) {
        .steps .step:nth-child(odd) {
            .step-identifier, .step-identifier::before {
                background-color: #21bf73;
            }
        }
    }
}
</style>

<script>
export default {
    name: "Campus",

    data( ) {
        return {
            selectedEdition: "java"
        };
    },

    methods: {
        setSelectedEdition(edition) {
            this.selectedEdition = edition;
        },

        explore( ) {
            window.scroll({
                behavior: "smooth",
                left: 0,
                top: document.getElementById("explore").offsetTop
            });
        }
    }
}
</script>
