<script setup lang="ts">
defineEmits<{ start: [] }>()
</script>
<template>
  <div class="placement-intro">
    <img
      src="/images/hero/study-together.svg"
      alt="Ilustrasi sahabat belajar bersama"
      width="640"
      height="520"
    /><UiColorBadge color="yellow">5 pertanyaan · sekitar 2 menit</UiColorBadge>
    <h2>Setiap perjalanan punya titik mulai.</h2>
    <p>
      Kenali kemampuanmu dan temukan program yang sesuai. Ini bukan ujian agama, hanya penilaian
      diri sederhana. Tidak ada jawaban yang salah.
    </p>
    <button class="btn" @click="$emit('start')">
      Mulai cek level <UiIcon name="arrow" :size="18" /></button
    ><small>Jawaban hanya digunakan di halaman ini dan tidak disimpan.</small>
  </div>
</template>
