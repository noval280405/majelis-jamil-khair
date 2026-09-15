<script setup lang="ts">
import type { GalleryItem } from '~/data/gallery'
defineProps<{ items: GalleryItem[] }>()
const selected = ref<GalleryItem | null>(null)
let opener: HTMLElement | null = null
function open(item: GalleryItem) {
  opener = document.activeElement as HTMLElement
  selected.value = item
}
function close() {
  selected.value = null
  nextTick(() => opener?.focus())
}
</script>
<template>
  <div class="gallery-grid">
    <GalleryCard v-for="item in items" :key="item.id" :item="item" @open="open" />
  </div>
  <GalleryLightbox v-if="selected" :item="selected" @close="close" />
</template>
