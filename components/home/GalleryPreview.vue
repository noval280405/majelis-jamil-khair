<script setup lang="ts">
import { gallery } from '~/data/gallery'
</script>
<template>
  <section class="container section">
    <UiSectionTitle
      eyebrow="CERITA KECIL, SENYUM BESAR"
      title="Warna-warni Perjalanan Belajar."
      description="Gambaran suasana belajar melalui ilustrasi contoh."
      to="/galeri"
      link-label="Jelajahi galeri"
    /><GalleryGrid :items="gallery.slice(0, 3)" />
  </section>
</template>
