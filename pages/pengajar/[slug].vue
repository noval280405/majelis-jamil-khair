<script setup lang="ts">
import { teachers } from '~/data/teachers'
import { classes } from '~/data/classes'
const route = useRoute()
const teacher = computed(() => teachers.find((t) => t.slug === route.params.slug))
if (!teacher.value)
  throw createError({ statusCode: 404, statusMessage: 'Pengajar tidak ditemukan' })
const related = computed(() => classes.filter((c) => c.teacherId === teacher.value?.id))
usePageSeo(teacher.value.name)
</script>
<template>
  <div v-if="teacher">
    <UiPageHero :title="teacher.name" :description="teacher.role" eyebrow="Profil Pengajar" />
    <section class="container section">
      <UiDemoNotice
        >Profil contoh, bukan identitas pengajar nyata. Tidak ada klaim gelar, sertifikasi, atau
        jumlah siswa.</UiDemoNotice
      >
      <div class="teacher-profile">
        <img
          :src="teacher.image"
          :alt="`Ilustrasi profil contoh ${teacher.name}`"
          width="400"
          height="320"
        />
        <div>
          <span class="eyebrow">MENGENAL PENDAMPING</span>
          <h2>Sahabat dalam proses belajarmu.</h2>
          <p>{{ teacher.bio }}</p>
          <h3>Fokus pendampingan</h3>
          <div class="chips">
            <UiColorBadge v-for="program in teacher.programs" :key="program">{{
              program
            }}</UiColorBadge>
          </div>
          <p>Kelompok usia: {{ teacher.ageGroups.join(', ') }}</p>
        </div>
      </div>
      <UiSectionTitle title="Contoh Kelas yang Didampingi" /><ClassGrid :items="related" />
    </section>
  </div>
</template>
