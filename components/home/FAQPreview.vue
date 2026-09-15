<script setup lang="ts">
import { faqs } from '~/data/faq'
</script>
<template>
  <section class="container section faq-preview">
    <div>
      <UiSectionTitle
        eyebrow="ADA YANG INGIN DITANYAKAN?"
        title="Yuk, Kenali Lebih Dekat."
        description="Jawaban sederhana untuk langkah pertamamu."
      /><NuxtLink to="/faq" class="text-link"
        >Lihat semua pertanyaan <UiIcon name="arrow" :size="18"
      /></NuxtLink>
    </div>
    <div class="faq-list">
      <details v-for="item in faqs.slice(0, 4)" :key="item.question">
        <summary>{{ item.question }}<span aria-hidden="true">+</span></summary>
        <p>{{ item.answer }}</p>
      </details>
    </div>
  </section>
</template>
