<script setup lang="ts">
import { classes } from '~/data/classes'
usePageSeo('Pilihan Kelas Mengaji')
const filters = ref<Record<string, string>>({})
const filtered = computed(() => classes.filter((c) => matchesClass(c, filters.value)))
</script>
<template>
  <div>
    <UiPageHero
      title="Temukan Kelas untuk Langkah Baikmu."
      description="Pilih program, level, usia, metode, dan hari yang sesuai."
      eyebrow="Kelas Belajar"
    />
    <section class="container section">
      <UiDemoNotice /><ClassFilter v-model="filters" />
      <p class="results-count" aria-live="polite">{{ filtered.length }} kelas ditemukan</p>
      <ClassGrid :items="filtered" />
    </section>
    <HomeCTASection />
  </div>
</template>
