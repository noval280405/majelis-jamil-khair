<script setup lang="ts">
import { programs } from '~/data/programs'
const props = defineProps<{ slug: string }>()
defineEmits<{ restart: [] }>()
const program = computed(() => programs.find((p) => p.slug === props.slug)!)
</script>
<template>
  <div class="placement-result" aria-live="polite">
    <img
      src="/images/hero/study-together.svg"
      alt="Ilustrasi pelajar menyambut langkah baru"
      width="640"
      height="520"
    /><span class="eyebrow">REKOMENDASI PROGRAMMU</span>
    <h2>{{ program.name }}</h2>
    <p>{{ program.description }}</p>
    <ul class="check-list">
      <li v-for="feature in program.features" :key="feature">
        <UiIcon name="check" :size="18" />{{ feature }}
      </li>
    </ul>
    <div class="button-row">
      <UiPrimaryButton :to="`/daftar?program=${program.slug}`">Daftar sekarang</UiPrimaryButton
      ><UiPrimaryButton :to="`/program/${program.slug}`" secondary>Lihat program</UiPrimaryButton>
    </div>
    <p class="small-text">
      Rekomendasi awal berdasarkan jawabanmu. Level akhir dikonfirmasi bersama pengajar, bukan hasil
      ujian atau sertifikasi.
    </p>
    <button class="text-link" @click="$emit('restart')">Ulangi cek level ↻</button>
  </div>
</template>
