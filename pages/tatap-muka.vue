<script setup lang="ts">
import { classes } from '~/data/classes'
import { programs } from '~/data/programs'
import { schedules } from '~/data/schedules'
import { siteConfig } from '~/data/site'
usePageSeo('Tempat Belajar Mengaji')
const items = classes.filter((c) => c.mode === 'Tatap Muka')
const related = programs.filter((p) => items.some((c) => c.programSlug === p.slug))
</script>
<template>
  <div>
    <UiPageHero
      title="Belajar Langsung di Tempat Ngaji."
      description="Nikmati suasana belajar bersama dengan pendampingan pengajar secara langsung."
      eyebrow="Kelas Tatap Muka"
    />
    <section class="container section">
      <div class="notice">
        <UiIcon name="place" :size="24" />
        <div>
          <strong>Tatap muka dilakukan di tempat belajar.</strong>
          <p>Tidak tersedia layanan guru datang ke rumah.</p>
        </div>
      </div>
      <div class="split-feature">
        <img
          src="/images/place/learning-center.svg"
          alt="Ilustrasi contoh tempat belajar, bukan foto lokasi nyata"
          width="800"
          height="450"
        />
        <div>
          <span class="eyebrow">RUANG UNTUK BERTUMBUH</span>
          <h2>Saling menyapa,<br />belajar bersama.</h2>
          <p>
            Kelas tatap muka dilaksanakan di lokasi belajar Majelis Jamil Khair. Kami belum
            menyediakan layanan pengajar datang ke rumah.
          </p>
          <UiPrimaryButton to="/daftar?mode=Tatap%20Muka">Pilih kelas tatap muka</UiPrimaryButton>
        </div>
      </div>
      <UiDemoNotice
        >Ilustrasi lokasi dan daftar fasilitas adalah contoh. Fasilitas nyata harus dikonfirmasi
        oleh pengelola sebelum digunakan.</UiDemoNotice
      ><UiSectionTitle title="Gambaran Fasilitas Belajar" />
      <div class="grid-three">
        <article
          v-for="item in [
            'Ruang belajar',
            'Area tunggu orang tua',
            'Mushaf / media belajar',
            'Tempat wudhu',
            'Ruang nyaman',
          ]"
          :key="item"
          class="simple-card"
        >
          <UiIcon name="place" />
          <h3>{{ item }}</h3>
          <small>Fasilitas contoh · belum dikonfirmasi</small>
        </article>
      </div>
    </section>
    <section class="container section">
      <UiSectionTitle title="Lokasi Belajar" />
      <div class="map-placeholder">
        <UiIcon name="pin" :size="40" />
        <h3>Alamat & peta segera dilengkapi</h3>
        <p>{{ siteConfig.address }}</p>
        <a
          v-if="siteConfig.mapsUrl"
          :href="siteConfig.mapsUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
          >Buka peta</a
        ><NuxtLink v-else to="/kontak" class="text-link">Hubungi pengelola →</NuxtLink>
      </div>
    </section>
    <section class="container section">
      <UiSectionTitle title="Contoh Kelas Tatap Muka" /><UiDemoNotice /><ClassGrid :items="items" />
    </section>
    <section class="container section">
      <UiSectionTitle title="Program di Tempat Belajar" /><ProgramGrid :items="related" />
    </section>
    <section class="container section">
      <UiSectionTitle title="Contoh Jadwal Tatap Muka" /><ScheduleTable
        :items="schedules.filter((s) => s.mode === 'Tatap Muka')"
      />
    </section>
    <HomeCTASection />
  </div>
</template>
