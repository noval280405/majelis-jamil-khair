<script setup lang="ts">
import { programs } from '~/data/programs'
const featured = [programs[0]!, programs[2]!, programs[4]!, programs[5]!]
</script>
<template>
  <section class="program-section">
    <div class="container section">
      <UiSectionTitle
        eyebrow="PROGRAM BELAJAR"
        title="Langkah Kecil, Manfaat Besar."
        description="Dari mengenal huruf pertama hingga menjaga hafalan."
        to="/program"
        link-label="Jelajahi semua program"
      /><ProgramGrid :items="featured" />
      <div class="section-bottom-note">
        <UiIcon name="spark" :size="17" /> Belum tahu harus mulai dari mana?
        <NuxtLink to="/cek-level">Cek level ngajimu →</NuxtLink>
      </div>
    </div>
  </section>
</template>
