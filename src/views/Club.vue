<template>
    <div id="club">
        <Splash image="/images/logo-transparent.webp" continue>
            <Section heading="Our mission">
                <template v-slot:subHeading>Blockeley</template>

                <template v-slot:description><span class="important">We serve as a living monument of the University of California, Berkeley campus.</span>
                                             <br>As we continue to expand our one-to-one recreation of the campus in Minecraft, we exist as a virtual representation
                                             of the culture and history which drive Berkeley's students, faculty, staff, and alumni.</template>
            </Section>
        </Splash>
        <div class="story-wrapper">
            <Section heading="Our story" />
            <Timeline :events="events" />
        </div>
        <div v-for="board in boards" :key="board.heading" class="admin-wrapper">
            <Section :heading="board.heading">
                <template v-slot:subHeading>{{ board.subHeading }}</template>
            </Section>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-lg-10 col-md-11">
                        <div class="avatars-wrapper">
                            <AvatarCard v-for="member in board.members" :key="member.ign" v-bind="member" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="thanks-wrapper">
            <div class="thanks">
                <Section heading="Builders of Blockeley">
                    <template v-slot:subHeading>Thank You</template>
                    <template v-slot:buttons>
                        <Button :href="BUILDER_APPLICATION_URL" target="_blank">Apply as a builder</Button>
                    </template>
                </Section>
            </div>
            <Credits :credits="builders" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, shallowRef } from "vue";

import Splash from "@/components/Splash.vue";
import Section from "@/components/Section.vue";
import Timeline from "@/components/Timeline.vue";
import AvatarCard from "@/components/AvatarCard.vue";
import Credits from "@/components/Credits.vue";
import Button from "@/components/Button.vue";

import builderNames from "@/data/builders";
import { BUILDER_APPLICATION_URL } from "@/site";
import type { Member, TimelineEvent } from "@/types";

// Fisher-Yates shuffle, run once per visit rather than on every render
function shuffle<T>(items: readonly T[]): T[] {
    const array = [ ...items ];

    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random( ) * (i + 1));
        [ array[i], array[j] ] = [ array[j]!, array[i]! ];
    }

    return array;
}

const members: Member[] = [
    { ign: "X1_Dragon", role: "Executive", img: "administrator-male" },
    { ign: "SimpleDF", role: "Executive", img: "administrator-male" },
    { ign: "Mistri", role: "Tech", img: "server" },
    { ign: "RojoM", role: "Tech", img: "server" },
    { ign: "BGHDDevelopment", role: "Tech", img: "server" },
    { ign: "mathhulk", role: "Tech", img: "server" },
    { ign: "Rimpo__", role: "PR", img: "megaphone" },
    { ign: "JingleTheLeo", role: "PR", img: "megaphone" },
    { ign: "ZophiaXP", role: "PR", img: "megaphone" },
    { ign: "Swannnie", role: "HR", img: "chat" },
    { ign: "zCat2", role: "Build Lead", img: "chat" },
    { ign: "SkyTechBytes", role: "Flex", img: "chat" },
    { ign: "Pikiwikibulbie", role: "Events/Production", img: "event" },
    { ign: "GetNuanced", role: "Events/Production", img: "event" }
];

const alumni: Member[] = [
    { ign: "Agentbjorn", role: "Advisory Board", img: "name-tag" },
    { ign: "Zetrox42", role: "Advisory Board", img: "name-tag" },
    { ign: "Zebraturkey96", role: "Advisory Board", img: "name-tag" },
    { ign: "Whale_Watch", role: "Advisory Board", img: "name-tag" },
    { ign: "Onnowhere", role: "Advisory Board", img: "name-tag" },
    { ign: "Mathematician", role: "Advisory Board", img: "name-tag" },
    { ign: "falcon_heavy", role: "Advisory Board", img: "name-tag" }
];

const boards = [
    { heading: "Executive Board", subHeading: "Meet our Team", members },
    { heading: "Alumni Board", subHeading: "Alumni", members: alumni }
];

const events: TimelineEvent[] = [
    { date: "March 13th, 2020", title: "National Lockdown", description: "The Covid-19 pandemic forces classes to be taught remotely" },
    { date: "March 15th, 2020", title: "Construction of Blockeley Begins", description: "", image: "/images/history/image6.webp" },
    { date: "April 16th, 2020", title: "The \"Big Post\" is sent out", description: "", image: "/images/history/image5.webp" },
    { date: "May 16th, 2020", title: "Blockeley Commencement", description: "Blockeley hosts a virtual graduation in Minecraft for the class of 2020", image: "/images/history/image7.webp" },
    { date: "May 17th, 2020", title: "Blockeley Music Festival", description: "", image: "/images/history/image1.webp" },
    { date: "June 11th, 2020", title: "MineMarch", description: "A virtual protest for Black Lives Matter is held in Blockeley", image: "/images/history/image3.webp" },
    { date: "July 4th, 2020", title: "July 4th Celebration", description: "", image: "/images/history/image2.webp" }
];

const builders = shallowRef(builderNames);

onMounted(( ) => {
    // Shuffled in the browser so the pre-rendered HTML hydrates without a mismatch
    builders.value = shuffle(builders.value);
});
</script>

<style lang="scss">
    .story-wrapper, .admin-wrapper {
        margin-top: 36px;
        margin-bottom: 36px;
        padding-top: 36px;
        padding-bottom: 36px;
    }
    .avatars-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-content: space-between;
    }
    .thanks-wrapper {
        margin-top: 48px;
        margin-bottom: 0;
        padding-top: 96px;
        padding-bottom: 96px;

        background: linear-gradient(to bottom, transparent, white 25%);
        height: 756px;
    }
    .thanks {
        margin-bottom: 96px;
    }
</style>
