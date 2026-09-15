<script setup lang="ts">
import type { Program } from '~/data/programs'
defineProps<{ items: Program[] }>()
</script>
<template>
  <div v-if="items.length" class="program-grid">
    <ProgramCard v-for="item in items" :key="item.id" :program="item" />
  </div>
  <UiEmptyState v-else />
</template>
