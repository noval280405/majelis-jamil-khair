<script setup lang="ts">
import { programs } from '~/data/programs'
const route = useRoute()
const program = computed(() => programs.find((p) => p.slug === route.params.slug))
if (!program.value) throw createError({ statusCode: 404, statusMessage: 'Program tidak ditemukan' })
const titles: Record<string, string> = {
  iqra: 'Belajar Iqra untuk Anak',
  tahsin: 'Kelas Tahsin Al-Qur’an',
  'ngaji-dewasa': 'Belajar Mengaji untuk Dewasa',
}
usePageSeo(titles[program.value.slug] || program.value.name, program.value.description)
</script>
<template><ProgramDetail v-if="program" :program="program" /></template>
