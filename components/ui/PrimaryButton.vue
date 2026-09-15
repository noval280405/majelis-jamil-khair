<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
withDefaults(defineProps<{ to: RouteLocationRaw; secondary?: boolean; external?: boolean }>(), {
  secondary: false,
  external: false,
})
</script>
<template>
  <a
    v-if="external"
    :href="String(to)"
    class="btn"
    :class="{ 'btn-secondary': secondary }"
    target="_blank"
    rel="noopener noreferrer"
    ><slot /><UiIcon name="arrow" :size="18" /></a
  ><NuxtLink v-else :to="to" class="btn" :class="{ 'btn-secondary': secondary }"
    ><slot /><UiIcon name="arrow" :size="18"
  /></NuxtLink>
</template>
