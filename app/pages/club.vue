<template>
    <div id="club">
        <Splash image="/images/logo-transparent.webp" continue>
            <Section heading="Our mission">
                <template #subHeading>Blockeley</template>

                <template #description
                    ><span class="important"
                        >We serve as a living monument of the University of California, Berkeley
                        campus.</span
                    >
                    <br />As we continue to expand our one-to-one recreation of the campus in
                    Minecraft, we exist as a virtual representation of the culture and history which
                    drive Berkeley's students, faculty, staff, and alumni.</template
                >
            </Section>
        </Splash>
        <div class="story-wrapper">
            <Section heading="Our story" />
            <Timeline :events="events" />
        </div>
        <div v-for="board in boards" :key="board.heading" class="admin-wrapper">
            <Section :heading="board.heading">
                <template #subHeading>{{ board.subHeading }}</template>
            </Section>
            <div class="container-fluid">
                <div class="avatars-wrapper">
                    <AvatarCard v-for="member in board.members" :key="member.ign" v-bind="member" />
                </div>
            </div>
        </div>
        <div class="thanks-wrapper">
            <div class="thanks">
                <Section heading="Builders of Blockeley">
                    <template #subHeading>Thank You</template>
                    <template #buttons>
                        <Button :href="BUILDER_APPLICATION_URL" target="_blank"
                            >Apply as a builder</Button
                        >
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

definePageMeta({ title: "Club", accent: "#9155ff" });

// Fisher-Yates shuffle, run once per visit rather than on every render
function shuffle<T>(items: readonly T[]): T[] {
    const array = [...items];

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j]!, array[i]!];
    }

    return array;
}

const members: Member[] = [
    {
        ign: "X1_Dragon",
        uuid: "4d9da3a63a9b47e2a45f37d0e37c91d4",
        role: "Executive",
        icon: "shield-person",
    },
    {
        ign: "SimpleDF",
        uuid: "53f63bcb9f22445bb8021e1b46def662",
        role: "Executive",
        icon: "shield-person",
    },
    { ign: "Mistri", uuid: "347a17b6585146c287475576443a311a", role: "Tech", icon: "dns" },
    { ign: "RojoM", uuid: "79049f1cf2034f13940d9a3b634e2988", role: "Tech", icon: "dns" },
    { ign: "BGHDDevelopment", uuid: "92451b29e64c4734963eb5dcaaec5df5", role: "Tech", icon: "dns" },
    { ign: "mathhulk", uuid: "e7ec6c61f69f437f89f888c4d1536395", role: "Tech", icon: "dns" },
    { ign: "Rimpo__", uuid: "7f20c4d56c6147b19f8412b4df37003e", role: "PR", icon: "campaign" },
    { ign: "JingleTheLeo", uuid: "4b24812314a7423e9cb2e468d84ac2a1", role: "PR", icon: "campaign" },
    { ign: "ZophiaXP", uuid: "406405573a074cdbbbd3c173c7fe1e6b", role: "PR", icon: "campaign" },
    { ign: "Swannnie", uuid: "14a82a9f2346458681ec81068a540e3c", role: "HR", icon: "forum" },
    { ign: "zCat2", uuid: "ef292e7c8df0425db7e91c5f49f6cb81", role: "Build Lead", icon: "forum" },
    { ign: "SkyTechBytes", uuid: "280c3309f3244169b9e07e88f965d68c", role: "Flex", icon: "forum" },
    {
        ign: "Pikiwikibulbie",
        uuid: "b36d3bbdbf8c4c49ac915a2b5d32f971",
        role: "Events/Production",
        icon: "event",
    },
    {
        ign: "GetNuanced",
        uuid: "f836ece923e545178c5759dc41f501e6",
        role: "Events/Production",
        icon: "event",
    },
];

const alumni: Member[] = [
    {
        ign: "Agentbjorn",
        uuid: "6ad104c9f8d646938823a7fc163b483b",
        role: "Advisory Board",
        icon: "badge",
    },
    {
        ign: "Zetrox42",
        uuid: "a9a0305137eb40dc89f9d0cb061c1ea3",
        role: "Advisory Board",
        icon: "badge",
    },
    {
        ign: "Zebraturkey96",
        uuid: "2ecf1e5a938743d89b49726a79542e2b",
        role: "Advisory Board",
        icon: "badge",
    },
    {
        ign: "Whale_Watch",
        uuid: "a4248f9fea6e4668928fa868d5a30639",
        role: "Advisory Board",
        icon: "badge",
    },
    {
        ign: "Onnowhere",
        uuid: "4f35f9ed57e7417f97ef3e4e90b75094",
        role: "Advisory Board",
        icon: "badge",
    },
    {
        ign: "Mathematician",
        uuid: "be1a52a4a3d64786b05205d850c4cc81",
        role: "Advisory Board",
        icon: "badge",
    },
    {
        ign: "falcon_heavy",
        uuid: "a1636c84cd664fb9b65f3fef365cd2ff",
        role: "Advisory Board",
        icon: "badge",
    },
];

const boards = [
    { heading: "Executive Board", subHeading: "Meet our Team", members },
    { heading: "Alumni Board", subHeading: "Alumni", members: alumni },
];

const events: TimelineEvent[] = [
    {
        date: "March 13th, 2020",
        title: "National Lockdown",
        description: "The Covid-19 pandemic forces classes to be taught remotely",
    },
    {
        date: "March 15th, 2020",
        title: "Construction of Blockeley Begins",
        description: "",
        image: "/images/history/image6.webp",
    },
    {
        date: "April 16th, 2020",
        title: 'The "Big Post" is sent out',
        description: "",
        image: "/images/history/image5.webp",
    },
    {
        date: "May 16th, 2020",
        title: "Blockeley Commencement",
        description: "Blockeley hosts a virtual graduation in Minecraft for the class of 2020",
        image: "/images/history/image7.webp",
    },
    {
        date: "May 17th, 2020",
        title: "Blockeley Music Festival",
        description: "",
        image: "/images/history/image1.webp",
    },
    {
        date: "June 11th, 2020",
        title: "MineMarch",
        description: "A virtual protest for Black Lives Matter is held in Blockeley",
        image: "/images/history/image3.webp",
    },
    {
        date: "July 4th, 2020",
        title: "July 4th Celebration",
        description: "",
        image: "/images/history/image2.webp",
    },
];

const builders = shallowRef(builderNames);

onMounted(() => {
    // Shuffled in the browser so the pre-rendered HTML hydrates without a mismatch
    builders.value = shuffle(builders.value);
});
</script>

<style lang="scss">
@use "@/scss/mixins";

.story-wrapper,
.admin-wrapper {
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

    @media (min-width: 768px) {
        width: mixins.columns(11);
        margin-inline: auto;
    }

    @media (min-width: 992px) {
        width: mixins.columns(10);
    }
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
