<template>
    <div id="explore">
        <Splash video="/videos/background.mp4" poster="/images/poster.webp">
            <Section heading="Blockeley" variant="light">
                <template #subHeading
                    >the <span class="important">#1 Minecraft university</span> in the
                    world</template
                >

                <template #description
                    ><span class="important"
                        >Giving students and the Berkeley community an opportunity to explore
                        Berkeley from the safety of their own home, the Blockeley Minecraft server
                        features an almost exact replica of the Berkeley campus in Minecraft.</span
                    >
                    During the COVID-19 pandemic, we have also hosted a multitude of virtual events
                    to celebrate the accomplishments of Berkeley students during this difficult
                    time.</template
                >

                <template #buttons>
                    <Button
                        alternate
                        href="https://www.youtube.com/watch?v=x8Kfdpakz_k"
                        target="_blank"
                        >Watch the trailer</Button
                    >

                    <Button alternate to="/campus">Learn more</Button>
                </template>
            </Section>
        </Splash>
    </div>
</template>

<script setup lang="ts">
import Button from "@/components/Button.vue";
import Section from "@/components/Section.vue";
import Splash from "@/components/Splash.vue";

// The poster is the first thing painted on the home page, so fetch it before the scripts
useHead({
    link: [{ rel: "preload", as: "image", href: "/images/poster.webp", fetchpriority: "high" }],
});
</script>
