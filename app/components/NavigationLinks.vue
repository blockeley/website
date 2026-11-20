<template>
    <li v-for="link in navigationLinks" :key="link.label" class="menu-item">
        <NuxtLink :to="link.to" :target="link.external ? '_blank' : undefined" class="item-link">{{ link.label }}</NuxtLink>
    </li>
</template>

<script setup lang="ts">
import { navigationLinks } from "@/site";
</script>
