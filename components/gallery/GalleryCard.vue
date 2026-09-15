<script setup lang="ts">
import type { GalleryItem } from '~/data/gallery'
defineProps<{ item: GalleryItem }>()
defineEmits<{ open: [item: GalleryItem] }>()
</script>
<template>
  <button
    class="gallery-card"
    :aria-label="`Perbesar ilustrasi ${item.title}`"
    @click="$emit('open', item)"
  >
    <img
      :src="item.image"
      :alt="`Ilustrasi ${item.category}`"
      width="640"
      height="520"
      loading="lazy"
    /><span class="gallery-caption"
      ><strong>{{ item.title }}</strong
      ><small>{{ item.category }} · Ilustrasi contoh</small
      ><span class="gallery-plus" aria-hidden="true">+</span></span
    >
  </button>
</template>
