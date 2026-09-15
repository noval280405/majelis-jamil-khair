<script setup lang="ts">
import { gallery, galleryCategories } from '~/data/gallery'
usePageSeo('Galeri Belajar')
const category = ref('Semua')
const filtered = computed(() =>
  gallery.filter((g) => category.value === 'Semua' || g.category === category.value),
)
</script>
<template>
  <div>
    <UiPageHero
      title="Setiap Pertemuan, Cerita Baru."
      description="Warna-warni perjalanan belajar, pertemanan, dan langkah kecil yang berarti."
      eyebrow="Galeri"
    />
    <section class="container section">
      <UiDemoNotice
        >Seluruh gambar adalah ilustrasi contoh, bukan foto kegiatan atau lokasi
        nyata.</UiDemoNotice
      >
      <div class="filter-chips">
        <button
          v-for="item in ['Semua', ...galleryCategories]"
          :key="item"
          :class="{ selected: category === item }"
          :aria-pressed="category === item"
          @click="category = item"
        >
          {{ item }}
        </button>
      </div>
      <p class="results-count" aria-live="polite">{{ filtered.length }} ilustrasi</p>
      <GalleryGrid :items="filtered" />
    </section>
  </div>
</template>
