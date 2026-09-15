<script setup lang="ts">
import { whatsappUrl } from '~/data/site'
</script>
<template>
  <section class="container cta-section">
    <div class="cta-card">
      <UiIslamicPattern class="cta-pattern" />
      <div>
        <span class="eyebrow">SATU LANGKAH BAIK, MULAI HARI INI</span>
        <h2>Yuk, Mulai Perjalanan<br />Belajar Al-Qur’an.</h2>
        <p>Pilih program yang sesuai. Belajar online atau datang langsung ke tempat belajar.</p>
        <div class="button-row">
          <UiPrimaryButton to="/daftar">Mulai Belajar</UiPrimaryButton
          ><UiPrimaryButton
            :to="
              whatsappUrl('Halo Majelis Jamil Khair, saya ingin bertanya tentang program belajar. ')
            "
            external
            secondary
            >Chat WhatsApp</UiPrimaryButton
          >
        </div>
      </div>
      <img
        src="/images/hero/study-together.svg"
        alt="Ilustrasi anak-anak belajar mengaji dengan ceria"
        width="640"
        height="520"
        loading="lazy"
      />
    </div>
  </section>
</template>
