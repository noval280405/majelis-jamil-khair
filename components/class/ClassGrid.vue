<script setup lang="ts">
import type { QuranClass } from '~/data/classes'
defineProps<{ items: QuranClass[] }>()
</script>
<template>
  <div v-if="items.length" class="grid-three">
    <ClassCard v-for="item in items" :key="item.id" :item="item" />
  </div>
  <UiEmptyState v-else />
</template>
