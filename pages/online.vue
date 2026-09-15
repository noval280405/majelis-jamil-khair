<script setup lang="ts">
import { classes } from '~/data/classes'
import { teachers } from '~/data/teachers'
import { programs } from '~/data/programs'
import { schedules } from '~/data/schedules'
usePageSeo('Belajar Mengaji Online')
const items = classes.filter((c) => c.mode === 'Online')
const related = programs.filter((p) => items.some((c) => c.programSlug === p.slug))
const team = teachers.filter((t) => items.some((c) => c.teacherId === t.id))
</script>
<template>
  <div>
    <UiPageHero
      title="Ngaji Online dari Mana Saja."
      description="Belajar bersama pengajar secara online dengan jadwal terstruktur. Jarak bukan penghalang untuk memulai."
      eyebrow="Kelas Online"
    />
    <section class="container section">
      <div class="split-feature">
        <div>
          <span class="icon-tile tone-blue"><UiIcon name="laptop" :size="36" /></span>
          <h2>Dekat dengan ilmu,<br />di mana pun kamu berada.</h2>
          <p>
            Belajar dari smartphone atau laptop melalui kelas online yang interaktif. Pengajar
            mendampingi latihan sesuai program dan kemampuanmu.
          </p>
          <UiPrimaryButton to="/daftar?mode=Online">Pilih kelas online</UiPrimaryButton>
        </div>
        <img
          src="/images/hero/study-together.svg"
          alt="Ilustrasi suasana belajar yang ceria"
          width="640"
          height="520"
        />
      </div>
      <div class="notice">Link kelas diberikan setelah pendaftaran dikonfirmasi.</div>
      <UiSectionTitle title="Yang Perlu Disiapkan" />
      <div class="grid-four">
        <article
          v-for="(item, i) in [
            'Smartphone / Laptop',
            'Koneksi Internet',
            'Earphone (opsional)',
            'Iqra / Al-Qur’an sesuai program',
          ]"
          :key="item"
          class="simple-card"
        >
          <span class="step-number">0{{ i + 1 }}</span>
          <h3>{{ item }}</h3>
        </article>
      </div>
    </section>
    <section class="container section">
      <UiSectionTitle title="Pilihan Kelas Online" /><UiDemoNotice /><ClassGrid :items="items" />
    </section>
    <section class="container section">
      <UiSectionTitle title="Program Belajar Online" /><ProgramGrid :items="related" />
    </section>
    <section class="container section">
      <UiSectionTitle title="Contoh Jadwal Online" /><ScheduleTable
        :items="schedules.filter((s) => s.mode === 'Online')"
      />
    </section>
    <section class="container section">
      <UiSectionTitle
        title="Pendamping Kelas Online"
        description="Profil dan ilustrasi contoh."
      /><TeacherGrid :items="team" />
    </section>
    <HomeHowItWorks /><HomeCTASection />
  </div>
</template>
