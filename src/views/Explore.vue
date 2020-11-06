<template>
    <div id="explore">
        <Splash video="/videos/background.mp4" poster="/images/poster.jpg">
            <Section heading="Blockeley" variant="light">
                <template v-slot:subHeading>the <span class="important">#1 Minecraft university</span> in the world</template>

                <template v-slot:description>The Blockeley Minecraft server contains a
                                             <span class="important">virtual replica of the University of California, Berkeley campus</span>
                                             in Minecraft. In May, 2020, Blockeley hosted a <span class="important">virtual graduation</span>
                                             for the class of 2020 and <span class="important">two-day virtual musical festival</span>
                                             with some of the world's most popular artists.</template>

                <template v-slot:buttons>
                    <router-link to="/campus">
                        <Button alternate="true">Minecraft campus</Button>
                    </router-link>

                    <router-link to="/merchandise">
                        <Button alternate="true">Support Blockeley</Button>
                    </router-link>

                    <a href="https://discord.gg/mmAK4D5" target="_blank">
                        <Button alternate="true">Discord community</Button>
                    </a>
                </template>
            </Section>
        </Splash>
    </div>
</template>

<script>
import Button from "@/components/Button";
import Section from "@/components/Section";
import Splash from "@/components/Splash";

export default {
    name: "Explore",

    components: {
        Section,
        Button,
        Splash
    }
}
</script>
