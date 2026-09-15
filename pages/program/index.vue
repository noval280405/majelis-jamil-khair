<script setup lang="ts">
import { programs } from '~/data/programs'
usePageSeo('Program Belajar Mengaji')
const search = ref('')
const category = ref('Semua')
const filtered = computed(() =>
  programs.filter(
    (p) =>
      (category.value === 'Semua' ||
        p.category === category.value ||
        p.ageGroup.includes(category.value)) &&
      `${p.name} ${p.description}`
        .toLocaleLowerCase('id')
        .includes(search.value.trim().toLocaleLowerCase('id')),
  ),
)
</script>
<template>
  <div>
    <UiPageHero
      title="Temukan Program Belajar yang Tepat."
      description="Setiap perjalanan itu unik. Pilih program yang sesuai usia, kemampuan, dan tujuan belajarmu."
      eyebrow="Program Belajar"
    />
    <section class="container section">
      <ProgramFilter v-model:search="search" v-model:category="category" />
      <p class="results-count" aria-live="polite">
        {{ filtered.length }} program untuk langkah baikmu
      </p>
      <ProgramGrid :items="filtered" />
    </section>
    <HomePlacementTestPreview /><HomeCTASection />
  </div>
</template>
