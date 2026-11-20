<template>
    <li v-for="link in navigationLinks" :key="link.label" class="menu-item">
        <router-link v-if="'to' in link" :to="link.to" class="item-link">{{ link.label }}</router-link>
        <a v-else class="item-link" :href="link.href" target="_blank">{{ link.label }}</a>
    </li>
</template>

<script setup lang="ts">
import { navigationLinks } from "@/site";
</script>
