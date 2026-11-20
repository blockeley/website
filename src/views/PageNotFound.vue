<template>
    <div id="page-not-found">
        <Splash>
            <Section heading="Uh oh!" variant="background">
                <template v-slot:description><span class="important">The page you have navigated to does not exist.</span>
                                             <br>Consider exploring the virtual Minecraft campus or meeting the Blockeley club.</template>

                <template v-slot:buttons>
                    <Button to="/campus">Minecraft campus</Button>

                    <Button to="/club">Blockeley club</Button>
                </template>
            </Section>
        </Splash>
    </div>
</template>

<script setup lang="ts">
import Splash from "@/components/Splash.vue";
import Button from "@/components/Button.vue";
import Section from "@/components/Section.vue";
</script>
