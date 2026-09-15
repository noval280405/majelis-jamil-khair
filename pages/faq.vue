<script setup lang="ts">
import { faqs } from '~/data/faq'
usePageSeo('Pertanyaan yang Sering Ditanyakan')
const search = ref('')
const filtered = computed(() =>
  faqs.filter((f) =>
    `${f.question} ${f.answer}`.toLowerCase().includes(search.value.trim().toLowerCase()),
  ),
)
</script>
<template>
  <div>
    <UiPageHero
      title="Ada yang Ingin Ditanyakan?"
      description="Kenali program dan cara belajar sebelum memulai langkah pertamamu."
      eyebrow="Pertanyaan Umum"
    />
    <section class="container section narrow">
      <label class="search-field"
        ><UiIcon name="search" /><span class="sr-only">Cari pertanyaan</span
        ><input v-model="search" type="search" placeholder="Cari pertanyaan..."
      /></label>
      <div class="faq-list">
        <details v-for="item in filtered" :key="item.question">
          <summary>{{ item.question }}<span aria-hidden="true">+</span></summary>
          <p>{{ item.answer }}</p>
        </details>
      </div>
      <UiEmptyState v-if="!filtered.length" />
      <div class="centered section">
        <h2>Masih punya pertanyaan?</h2>
        <UiPrimaryButton to="/kontak">Mari ngobrol</UiPrimaryButton>
      </div>
    </section>
  </div>
</template>
