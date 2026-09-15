<script setup lang="ts">
import type { QuranClass } from '~/data/classes'
import { programs } from '~/data/programs'
import { teachers } from '~/data/teachers'
import { rupiah } from '~/data/site'
const props = defineProps<{ item: QuranClass }>()
const teacher = computed(() => teachers.find((t) => t.id === props.item.teacherId))
const program = computed(() => programs.find((p) => p.slug === props.item.programSlug))
</script>
<template>
  <UiPageHero :title="item.name" :description="item.description" eyebrow="Detail Kelas" />
  <section class="container section">
    <UiDemoNotice />
    <div class="detail-layout">
      <div>
        <h2>Ruang belajar untukmu</h2>
        <div class="info-grid">
          <div>
            <small>Metode</small><strong>{{ item.mode }}</strong>
          </div>
          <div>
            <small>Jadwal</small><strong>{{ item.schedule }}</strong>
          </div>
          <div>
            <small>Waktu (WIB)</small><strong>{{ item.time }}</strong>
          </div>
          <div>
            <small>Durasi</small><strong>{{ item.durationMinutes }} menit</strong>
          </div>
          <div>
            <small>Peserta</small><strong>{{ item.ageGroup }} · Maks. {{ item.capacity }}</strong>
          </div>
          <div>
            <small>Level</small><strong>{{ item.level }}</strong>
          </div>
        </div>
        <h2>Program & pendamping</h2>
        <NuxtLink v-if="program" :to="`/program/${program.slug}`" class="text-link"
          >{{ program.name }} →</NuxtLink
        ><TeacherCard v-if="teacher" :teacher="teacher" />
        <div class="notice" v-if="item.mode === 'Online'">
          Link kelas diberikan setelah pendaftaran dikonfirmasi. Siapkan smartphone atau laptop,
          internet, dan buku sesuai program.
        </div>
        <div class="notice" v-else>
          Tatap muka dilakukan di tempat belajar. Tidak tersedia layanan guru datang ke rumah.
          Alamat akan dikonfirmasi oleh pengelola.
        </div>
      </div>
      <aside class="aside-card">
        <span class="eyebrow">BIAYA CONTOH</span>
        <h2>{{ rupiah(item.price) }}<small> / bulan</small></h2>
        <p>Konfirmasikan jadwal, biaya, dan ketersediaan kepada pengelola.</p>
        <UiPrimaryButton
          :to="{
            path: '/daftar',
            query: {
              program: item.programSlug,
              mode: item.mode,
              level: item.level,
              day: item.days[0],
              kelas: item.name,
            },
          }"
          >Pilih kelas ini</UiPrimaryButton
        >
      </aside>
    </div>
  </section>
</template>
