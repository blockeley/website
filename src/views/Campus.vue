<template>
    <div id="campus">
        <Splash image="/images/logo-transparent.png" continue="true">
            <Section heading="in Minecraft">
                <template v-slot:subHeading>University of California, Berkeley</template>

                <template v-slot:description><span class="important">Blockeley aims to recreate the entire University of California, Berkeley campus in Minecraft.</span>
                                             <br>Volunteer builders have put hours into replicating buildings, parks, and other various locations around campus to create
                                             a genuine virtual experience for our visitors.</template>

                <template v-slot:buttons>
                    <Button @click.native="scrollTo(Identifiers.Explore)">Explore in Minecraft</Button>

                    <Button @click.native="scrollTo(Identifiers.Locations)">Browse featured locations</Button>
                </template>

                <alert :icon="statusIcon" :message="statusMessage" />
            </Section>
        </Splash>

        <div id="explore">
            <Section heading="Explore in Minecraft" variant="inline">
                <template v-slot:subHeading>Campus</template>

                <template v-slot:description><span class="important">The Blockeley Minecraft server welcomes visitors from anywhere.</span>
                                             However, access to the virtual campus requires either Minecraft Java Edition or Minecraft Bedrock Edition.
                                             Access will not be limited for users on Minecraft Bedrock Edition when possible.
                                             <span class="important">Learn how to access the Blockeley server on either platform below.</span></template>
            </Section>
        </div>

        <div class="container">
            <Options :options="Object.keys(Editions)" centered="true" @change="setSelectedEdition" />

            <div id="steps-wrapper">
                <template v-if="selectedEdition === Editions.Java">
                    <Step title="Step one" image="/images/steps/java/one.png">
                        <template v-slot:description><span class="important">Register for a Minecraft account</span> if you do not already have one.
                                                     <br><span class="important">Download Minecraft Java Edition</span> on Windows, macOS, or Linux.</template>

                        <a href="https://www.minecraft.net/en-us/download/" target="_blank">
                            <Button>Download Minecraft</Button>
                        </a>
                    </Step>

                    <Step title="Step two" image="/images/steps/java/two.png" alternate="true">
                        <template v-slot:description><span class="important">Open the Minecraft Java Edition launcher.</span>
                                                     <br><span class="important">Sign in with your Minecraft account</span> (or your Microsoft account).
                                                     <br><span class="important">Click play</span> to launch Minecraft Java Edition.</template>

                        <alert icon="priority_high" message="Remember to use the latest release" />
                    </Step>

                    <Step title="Step three" image="/images/steps/java/three.png">
                        <template v-slot:description><span class="important">Select the Multiplayer option</span> from the menu.
                                                     <br><span class="important">Click Add Server</span> and type <span class="important">mc.blockeley.com</span> in the <span class="important">Server Address</span> field.
                                                     <br><span class="important">Click done</span> and <span class="important">select the Blockeley Minecraft server</span> from the multiplayer menu.
                                                     <br><span class="important">Click Join Server.</span></template>
                    </Step>
                </template>

                <template v-else>
                    <Step title="Step one" image="/images/steps/bedrock/one.png">
                        <template v-slot:description><span class="important">Register for an Xbox Live account</span> through Microsoft if you do not already have one.
                                                     <br><span class="important">Download Minecraft Bedrock Edition</span> on Android, iOS, or Windows 10.</template>

                        <a href="https://www.xbox.com/en-US/live/minecraft/sign-up" target="_blank">
                            <Button>Minecraft sign up</Button>
                        </a>
                    </Step>

                    <Step title="Step two" image="/images/steps/bedrock/two.png" alternate="true">
                        <template v-slot:description><span class="important">Open Minecraft Bedrock Edition.</span>
                                                     <br><span class="important">Sign in with your Xbox Live account</span> through Microsoft.
                                                     <br><span class="important">Click play</span> and <span class="important">select Servers</span>.</template>
                    </Step>

                    <Step title="Step three" image="/images/steps/bedrock/three.png">
                        <template v-slot:description><span class="important">Scroll to the bottom of the Featured Servers list.</span>
                                                     <br><span class="important">Click Add Server</span>and type <span class="important">mc.blockeley.com</span> in the <span class="important">Server Address</span> field.
                                                     <br><span class="important">Click Save</span> and <span class="important">select the Blockeley Minecraft server</span> from the list of Additional Servers.
                                                     <br><span class="important">click Join Server</span>.</template>
                    </Step>
                </template>
            </div>
        </div>

        <div id="locations">
            <Section heading="Featured locations" variant="inline">
                <template v-slot:subHeading>Campus</template>

                <template v-slot:description><span class="important">With the help of volunteer builders, Blockeley has recreated much of the University of
                                             California, Berkeley campus in Minecraft.</span> Interested in contributing to the virtual campus? Fill out an
                                             application below and become a Blockeley builder. For visitors without Minecraft, a live three-dimensional render
                                             of the virtual Minecraft campus as well as a gallery containing images of prominent campus locations can be
                                             found below.</template>

                <template v-slot:buttons>
                    <a href="https://map.blockeley.com" target="_blank">
                        <Button>Launch our online map</Button>
                    </a>

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSebaih8bBY5wOGvmInL2Xi5Y691UlvVrg0thSPz8LfR_Vfb6w/viewform" target="_blank">
                        <Button>Builder application</Button>
                    </a>
                </template>
            </Section>
        </div>

        <div class="container">
            <div id="locations-wrapper" class="row justify-content-center">
                <div class="col-lg-4 col-md-6" v-for="location in locations" :key="location.title">
                    <Location :title="location.title" :image="location.image" :warp="location.warp" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Location from "@/components/Location";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Options from "@/components/Options";
import Step from "@/components/Step";
import Splash from "@/components/Splash";
import Alert from "@/components/Alert";

export default {
    name: "Campus",

    components: {
        Location,
        Button,
        Section,
        Options,
        Step,
        Splash,
        Alert
    },

    data( ) {
        return {
            Editions: { Java: "java", Bedrock: "bedrock" },
            Identifiers: { Explore: "explore", Locations: "locations" },

            locations: [
                { title: "Doe Memorial Library", image: "images/locations/one.png", warp: "Doe" },
                { title: "California Memorial Stadium", image: "images/locations/two.png", warp: "Stadium" },
                { title: "Sather Tower", image: "images/locations/three.png", warp: "Campanile" },
                { title: "Sather Gate", image: "images/locations/four.png", warp: "SatherGate" },
                { title: "Sproul Hall", image: "images/locations/five.png", warp: "Sproul" }
            ],

            selectedEdition: "java",

            status: null
        };
    },

    methods: {
        setSelectedEdition(edition) {
            this.selectedEdition = this.Editions[edition];

            return undefined;
        },

        scrollTo(identifier) {
            window.scroll({
                behavior: "smooth",
                left: 0,
                top: document.getElementById(identifier).offsetTop - 128
            });

            return undefined;
        },

        async updateStatus( ) {
            const response = await fetch("https://api.mcsrvstat.us/2/mc.blockeley.com");
            this.status = await response.json( );

            return undefined;
        }
    },

    computed: {
        statusIcon( ) {
            return this.status && this.status.online ? "play_arrow" : "close";
        },

        statusMessage( ) {
            return this.status && this.status.online ? this.status.players.online + " players on mc.blockeley.com" : "mc.blockeley.com is offline";
        }
    },

    mounted( ) {
        // To-do: Implement option to disable, or implement speed check for, auto-update
        this.updateStatus( );
        setInterval(this.updateStatus, 3000);
    }
}
</script>

<style lang="scss">
#steps-wrapper .step {
    margin-top: 48px;
}

#locations-wrapper {
    margin-bottom: -24px;

    .location {
        margin-bottom: 24px;
    }
}
</style>
