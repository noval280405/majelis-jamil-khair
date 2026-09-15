<script setup lang="ts">
import { schedules } from '~/data/schedules'
</script>
<template>
  <section class="container section">
    <UiSectionTitle
      eyebrow="SISIHKAN WAKTU UNTUK KEBAIKAN"
      title="Ada Waktu untuk Belajar."
      description="Contoh pilihan jadwal. Ketersediaan akan dikonfirmasi pengelola."
      to="/jadwal"
      link-label="Jadwal lengkap"
    /><ScheduleTable :items="schedules.filter((_, i) => i % 2 === 0).slice(0, 4)" />
  </section>
</template>
