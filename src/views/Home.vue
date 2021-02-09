<template>
    <div id="explore">
        <Splash video="/videos/background.mp4" poster="/images/poster.jpg">
            <Section heading="Blockeley" variant="light">
                <template v-slot:subHeading>the <span class="important">#1 Minecraft university</span> in the world</template>

                <template v-slot:description><span class="important">Giving students and the Berkeley community an opportunity to explore Berkeley
                                             from the safety of their own home, the Blockeley Minecraft server features an almost exact replica of
                                             the Berkeley campus in Minecraft.</span> During the COVID-19 pandemic, we have also hosted a multitude of
                                             virtual events to celebrate the accomplishments of Berkeley students during this difficult time.</template>

                <template v-slot:buttons>
                    <Button alternate="true" to="/campus">Minecraft campus</Button>

                    <Button alternate="true" to="/merchandise">Blockeley merchandise</Button>

                    <!--
                    <Button alternate="true" to="/donate">Support Blockeley</Button>
                    -->
                </template>

                <!--
                <template v-slot:linkButtons>
                    <LinkButton alternate="true">Meet our team</LinkButton>
                    <LinkButton alternate="true">Upcoming events</LinkButton>
                </template>
                -->
            </Section>
        </Splash>
    </div>
</template>

<script>
import Button from "@/components/Button";
// import LinkButton from "@/components/LinkButton";
import Section from "@/components/Section";
import Splash from "@/components/Splash";

export default {
    name: "Home",

    components: {
        Section,
        Button,
        Splash,
        // LinkButton
    }
}
</script>
