<script setup lang="ts">
usePageSeo('Daftar Belajar Mengaji')
</script>
<template>
  <div>
    <UiPageHero
      title="Yuk, Mulai Belajar."
      description="Satu langkah kecil untuk perjalanan yang berarti. Ceritakan pilihan belajarmu kepada kami."
      eyebrow="Pendaftaran"
    />
    <section class="container section">
      <UiDemoNotice
        >Website pratinjau: nomor WhatsApp masih contoh. Pendaftaran belum dibuka secara
        operasional.</UiDemoNotice
      ><RegistrationForm />
    </section>
  </div>
</template>
