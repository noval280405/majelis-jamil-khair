<script setup lang="ts">
import type { NuxtError } from '#app'
defineProps<{ error: NuxtError }>()
</script>
<template>
  <div class="error-page">
    <img
      src="/images/hero/study-together.svg"
      alt="Ilustrasi sahabat belajar"
      width="320"
      height="260"
    /><span class="eyebrow">{{ error.statusCode }}</span>
    <h1>
      {{ error.statusCode === 404 ? 'Halaman belum ditemukan.' : 'Ada kendala memuat halaman.' }}
    </h1>
    <p>Mari kembali dan temukan langkah belajarmu.</p>
    <button class="btn" @click="clearError({ redirect: '/' })">Kembali ke beranda →</button>
  </div>
</template>
