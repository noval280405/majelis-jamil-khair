<script setup lang="ts">
import { schedules } from '~/data/schedules'
import { days } from '~/data/site'
usePageSeo('Jadwal Kelas Mengaji')
const filters = ref<Record<string, string>>({})
const filtered = computed(() =>
  schedules
    .filter(
      (c) =>
        matchesClass(c, { ...filters.value, day: '' }) &&
        (!filters.value.day || c.day === filters.value.day),
    )
    .sort((a, b) => days.indexOf(a.day) - days.indexOf(b.day)),
)
</script>
<template>
  <div>
    <UiPageHero
      title="Luangkan Waktu untuk Bertumbuh."
      description="Temukan ritme belajar yang nyaman. Seluruh waktu menggunakan WIB."
      eyebrow="Jadwal Kelas"
    />
    <section class="container section">
      <UiDemoNotice
        >Jadwal berikut merupakan contoh, bukan ketersediaan aktual. Jadwal akhir dikonfirmasi
        melalui WhatsApp.</UiDemoNotice
      ><ScheduleFilter v-model="filters" />
      <p class="results-count" aria-live="polite">{{ filtered.length }} sesi ditemukan</p>
      <ScheduleTable :items="filtered" />
    </section>
  </div>
</template>
