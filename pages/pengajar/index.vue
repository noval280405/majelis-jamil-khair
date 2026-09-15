<script setup lang="ts">
import { teachers } from '~/data/teachers'
usePageSeo('Pengajar & Pendamping Belajar')
const filter = ref('Semua')
const filtered = computed(() =>
  teachers.filter(
    (t) =>
      filter.value === 'Semua' ||
      t.programs.includes(filter.value) ||
      t.ageGroups.includes(filter.value),
  ),
)
</script>
<template>
  <div>
    <UiPageHero
      title="Belajar Bersama Pengajar yang Membimbing dengan Sabar."
      description="Kenali pendamping untuk setiap langkah perjalanan belajarmu."
      eyebrow="Pengajar"
    />
    <section class="container section">
      <UiDemoNotice
        >Seluruh profil dan ilustrasi pengajar berikut adalah contoh. Identitas serta pengalaman
        pengajar asli akan ditambahkan oleh pengelola.</UiDemoNotice
      ><TeacherFilter v-model="filter" />
      <p class="results-count" aria-live="polite">{{ filtered.length }} profil contoh</p>
      <TeacherGrid :items="filtered" />
    </section>
  </div>
</template>
