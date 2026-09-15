<script setup lang="ts">
import type { Program } from '~/data/programs'
import { classes } from '~/data/classes'
const props = defineProps<{ program: Program }>()
const related = computed(() => classes.filter((c) => c.programSlug === props.program.slug))
</script>
<template>
  <UiPageHero :title="program.name" :description="program.description" eyebrow="Program Belajar" />
  <section class="section container">
    <div class="detail-layout">
      <div>
        <img
          class="detail-image"
          :src="program.image"
          :alt="`Ilustrasi program ${program.name}`"
          width="480"
          height="300"
        />
        <h2>Apa yang akan dipelajari?</h2>
        <ul class="check-list">
          <li v-for="feature in program.features" :key="feature">
            <UiIcon name="check" :size="18" />{{ feature }}
          </li>
        </ul>
        <UiDemoNotice
          >Daftar topik merupakan gambaran program. Materi agama dan bahan ajar perlu diverifikasi
          pengajar sebelum digunakan.</UiDemoNotice
        >
        <h2>Belajar sesuai tahapmu</h2>
        <div class="chips">
          <UiColorBadge v-for="level in program.level" :key="level" :color="program.accentColor">{{
            level
          }}</UiColorBadge>
        </div>
        <h2>Kelas untuk program ini</h2>
        <ClassGrid :items="related" />
      </div>
      <aside class="aside-card">
        <UiColorBadge :color="program.accentColor">{{ program.category }}</UiColorBadge>
        <h3>Langkah baik dimulai di sini.</h3>
        <p>
          Untuk {{ program.ageGroup.join(', ') }}. Belajar online atau datang langsung ke tempat
          belajar.
        </p>
        <UiPrimaryButton :to="`/daftar?program=${program.slug}`">Pilih program ini</UiPrimaryButton
        ><NuxtLink to="/cek-level" class="text-link">Belum tahu levelmu? →</NuxtLink>
      </aside>
    </div>
  </section>
</template>
