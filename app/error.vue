<template>
    <NuxtLayout accent="#bbbbbb">
        <div id="page-not-found">
            <Splash>
                <Section heading="Uh oh!" variant="background">
                    <template #description><span class="important">The page you have navigated to does not exist.</span>
                                                 <br>Consider exploring the virtual Minecraft campus or meeting the Blockeley club.</template>

                    <template #buttons>
                        <Button to="/campus">Minecraft campus</Button>

                        <Button to="/club">Blockeley club</Button>
                    </template>
                </Section>
            </Splash>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
// Nuxt renders this for unknown URLs; `nuxt generate` also writes it out as 404.html for GitHub Pages
import Splash from "@/components/Splash.vue";
import Button from "@/components/Button.vue";
import Section from "@/components/Section.vue";

useHead({ title: "Page not found" });
</script>
