<script setup lang="ts">
import { teachers } from '~/data/teachers'
</script>
<template>
  <section class="container section">
    <UiSectionTitle
      eyebrow="TEMAN BELAJAR YANG MEMBIMBING"
      title="Kenalan dengan Pendampingmu."
      description="Belajar dengan sabar, bertumbuh bersama. Profil berikut adalah contoh."
      to="/pengajar"
      link-label="Semua pengajar"
    /><TeacherGrid :items="teachers" />
  </section>
</template>
