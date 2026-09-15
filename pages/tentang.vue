<script setup lang="ts">
usePageSeo('Tentang Majelis Jamil Khair')
</script>
<template>
  <div>
    <UiPageHero
      title="Belajar Al-Qur’an dalam Suasana yang Menyenangkan."
      description="Sahabat untuk memulai, tempat untuk bertumbuh."
      eyebrow="Tentang Kami"
    />
    <section class="container section">
      <div class="split-feature">
        <img
          src="/images/hero/study-together.svg"
          alt="Ilustrasi anak-anak belajar bersama"
          width="640"
          height="520"
        />
        <div>
          <span class="eyebrow">MENGENAL MAJELIS JAMIL KHAIR</span>
          <h2>Langkah kecil hari ini.<br />Kebaikan untuk masa depan.</h2>
          <p>
            Majelis Jamil Khair hadir sebagai tempat belajar Al-Qur’an untuk membantu anak, remaja,
            dan dewasa belajar secara bertahap melalui kelas online maupun tatap muka.
          </p>
          <p>
            Kami ingin setiap siswa merasa diterima, nyaman bertanya, dan berani memulai dari
            kemampuannya hari ini.
          </p>
        </div>
      </div>
      <UiSectionTitle title="Niat Baik yang Menuntun Kami" centered />
      <div class="grid-three">
        <article
          v-for="(mission, i) in [
            'Memberikan pengalaman belajar yang menyenangkan',
            'Membantu siswa belajar sesuai level',
            'Menyediakan program untuk berbagai usia',
            'Mempermudah akses belajar melalui online',
            'Menyediakan lingkungan tatap muka yang nyaman',
          ]"
          :key="mission"
          class="simple-card"
        >
          <span class="step-number">0{{ i + 1 }}</span>
          <h3>{{ mission }}</h3>
        </article>
      </div>
    </section>
    <HomeLearningModeSection /><HomeCTASection />
  </div>
</template>
