<template>
    <div id="campus">
        <Splash image="/images/logo-transparent.webp" continue>
            <Section heading="in Minecraft">
                <template #subHeading>University of California, Berkeley</template>

                <template #description><span class="important">We aim to recreate the entire Berkeley campus in Minecraft for you to explore.</span>
                                             <br>Student volunteers have spent thousands of hours replicating buildings, parks, historical landmarks, and other
                                             various locations around the Berkeley campus to create a genuine virtual experience for our guests.</template>

                <template #buttons>
                    <Button @click="scrollTo('explore')">Explore in Minecraft</Button>

                    <Button @click="scrollTo('locations')">View featured locations</Button>
                </template>

                <Alert :icon="statusIcon" :message="statusMessage" />
            </Section>
        </Splash>

        <div id="explore">
            <Section heading="Explore in Minecraft" variant="inline">
                <template #subHeading>Campus</template>

                <template #description><span class="important">We welcome visitors from around the world to explore the Berkeley campus virtually.</span>
                                             However, access to the virtual campus requires either Minecraft Java Edition or Minecraft Bedrock Edition. Despite
                                             the differences between the Java and Bedrock editions, we do we do everything we can to provide an amazing experience
                                             on both platforms! <span class="important">Learn how to access the Blockeley Minecraft server on either platform below.</span></template>
            </Section>
        </div>

        <div class="container">
            <Options v-model="edition" :options="editions" centered />

            <div id="steps-wrapper">
                <template v-if="edition === 'Java'">
                    <Step title="Step one" image="/images/steps/java/one.webp">
                        <template #description><span class="important">Register for a Minecraft account</span> if you do not already have one.
                                                     <br><span class="important">Download Minecraft Java Edition</span> on Windows, macOS, or Linux.</template>

                        <Button href="https://www.minecraft.net/en-us/download/" target="_blank">Download Minecraft</Button>
                    </Step>

                    <Step title="Step two" image="/images/steps/java/two.webp" alternate>
                        <template #description><span class="important">Open the Minecraft Java Edition launcher.</span>
                                                     <br><span class="important">Sign in with your Minecraft account</span> (or your Microsoft account).
                                                     <br><span class="important">Click play</span> to launch Minecraft Java Edition.</template>

                        <Alert icon="priority_high" message="Remember to use the latest release" />
                    </Step>

                    <Step title="Step three" image="/images/steps/java/three.webp">
                        <template #description><span class="important">Select the Multiplayer option</span> from the menu.
                                                     <br><span class="important">Click Add Server</span> and type <span class="important">mc.blockeley.com</span> in the <span class="important">Server Address</span> field.
                                                     <br><span class="important">Click done</span> and <span class="important">select the Blockeley Minecraft server</span> from the multiplayer menu.
                                                     <br><span class="important">Click Join Server.</span></template>
                    </Step>
                </template>

                <template v-else>
                    <Step title="Step one" image="/images/steps/bedrock/one.webp">
                        <template #description><span class="important">Register for an Xbox Live account</span> through Microsoft if you do not already have one.
                                                     <br><span class="important">Download Minecraft Bedrock Edition</span> on Android, iOS, or Windows 10.</template>

                        <Button href="https://www.xbox.com/en-US/live/minecraft/sign-up" target="_blank">Minecraft sign up</Button>
                    </Step>

                    <Step title="Step two" image="/images/steps/bedrock/two.webp" alternate>
                        <template #description><span class="important">Open Minecraft Bedrock Edition.</span>
                                                     <br><span class="important">Sign in with your Xbox Live account</span> through Microsoft.
                                                     <br><span class="important">Click play</span> and <span class="important">select Servers</span>.</template>
                    </Step>

                    <Step title="Step three" image="/images/steps/bedrock/three.webp">
                        <template #description><span class="important">Scroll to the bottom of the Featured Servers list.</span>
                                                     <br><span class="important">Click Add Server</span>and type <span class="important">mc.blockeley.com</span> in the <span class="important">Server Address</span> field.
                                                     <br><span class="important">Click Save</span> and <span class="important">select the Blockeley Minecraft server</span> from the list of Additional Servers.
                                                     <br><span class="important">click Join Server</span>.</template>
                    </Step>
                </template>
            </div>
        </div>

        <div id="locations">
            <Section heading="Featured locations" variant="inline">
                <template #subHeading>Campus</template>

                <template #description><span class="important">Such an amazing feat would not be possible without the help of student volunteers and we
                                             are always looking for new builders.</span> If you are interested in contributing and creating the next generation
                                             of our Minecraft campus, please fill out an application linked below. <span class="important">For guests without
                                             Minecraft, feel free to launch our online map and explore the Blockeley Minecraft server in your browser.</span></template>

                <template #buttons>
                    <!-- To-do: Pop-up..? -->
                    <Button href="https://map.blockeley.com" target="_blank">Explore in the browser</Button>

                    <Button :href="BUILDER_APPLICATION_URL" target="_blank">Apply as a builder</Button>
                </template>
            </Section>
        </div>

        <div class="container">
            <!-- To-do: Remove Bootstrap utilities -->
            <div id="locations-wrapper" class="row justify-content-center">
                <div v-for="location in locations" :key="location.title" class="col-lg-4 col-md-6">
                    <Location :title="location.title" :image="location.image" :warp="location.warp" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

import Location from "@/components/Location.vue";
import Button from "@/components/Button.vue";
import Section from "@/components/Section.vue";
import Options from "@/components/Options.vue";
import Step from "@/components/Step.vue";
import Splash from "@/components/Splash.vue";
import Alert from "@/components/Alert.vue";
import { BUILDER_APPLICATION_URL } from "@/site";

definePageMeta({ title: "Campus", accent: "#21bf73" });

const editions = [ "Java", "Bedrock" ] as const;
const edition = ref<string>("Java");

const locations = [
    { title: "Doe Memorial Library", image: "/images/locations/one.webp", warp: "Doe" },
    { title: "California Memorial Stadium", image: "/images/locations/two.webp", warp: "Stadium" },
    { title: "Sather Tower", image: "/images/locations/three.webp", warp: "Campanile" },
    { title: "Sather Gate", image: "/images/locations/four.webp", warp: "SatherGate" },
    { title: "Sproul Hall", image: "/images/locations/five.webp", warp: "Sproul" }
];

// The fields used from https://api.mcsrvstat.us/3/ (players is only present while online)
interface ServerStatus {
    online: boolean;
    players?: { online: number; max: number };
}

const status = ref<ServerStatus | null>(null);

// The targets' scroll-margin-top keeps them clear of the sticky navigation bar
function scrollTo(identifier: string) {
    document.getElementById(identifier)?.scrollIntoView({ behavior: "smooth" });
}

// mcsrvstat.us caches results for a minute, so polling faster only adds requests
const STATUS_INTERVAL = 60000;
let lastUpdate = 0;

async function updateStatus( ) {
    if(document.hidden) return;

    lastUpdate = Date.now( );

    try {
        const response = await fetch("https://api.mcsrvstat.us/3/mc.blockeley.com");
        status.value = await response.json( ) as ServerStatus;
    } catch {
        // Keep showing the last known status
    }
}

const statusIcon = computed(( ) => {
    if( ! status.value ) return "priority_high";

    return status.value.online ? "play_arrow" : "close";
});

const statusMessage = computed(( ) => {
    if( ! status.value ) return "Checking mc.blockeley.com";

    return status.value.online ? `${ status.value.players?.online ?? 0 } player(s) on mc.blockeley.com` : "mc.blockeley.com is offline";
});

let statusInterval: ReturnType<typeof setInterval> | undefined;

// Coming back to the tab: refresh unless the last check is still current
function onVisibilityChange( ) {
    if(Date.now( ) - lastUpdate >= STATUS_INTERVAL) updateStatus( );
}

onMounted(( ) => {
    updateStatus( );
    statusInterval = setInterval(updateStatus, STATUS_INTERVAL);

    document.addEventListener("visibilitychange", onVisibilityChange);
});

onBeforeUnmount(( ) => {
    clearInterval(statusInterval);

    document.removeEventListener("visibilitychange", onVisibilityChange);
});
</script>

<style lang="scss">
#campus {
    #explore, #locations {
        scroll-margin-top: 128px;
    }

    padding-bottom: 256px;

    @media (max-width: 992px) {
        padding-bottom: 128px;
    }

    #steps-wrapper .step {
        margin-top: 48px;
    }

    #locations-wrapper {
        margin-bottom: -24px;

        .location {
            margin-bottom: 24px;
        }
    }
}
</style>
