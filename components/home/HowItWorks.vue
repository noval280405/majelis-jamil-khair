<template>
  <section class="container section">
    <UiSectionTitle
      eyebrow="MULAI ITU MUDAH"
      title="Tiga Langkah Menuju Kebiasaan Baik."
      centered
    />
    <div class="grid-three steps">
      <article
        v-for="(step, i) in [
          {
            title: 'Temukan programmu',
            text: 'Jelajahi program atau cek level untuk mengenali titik awalmu.',
            to: '/program',
          },
          {
            title: 'Pilih cara & waktu belajar',
            text: 'Online atau datang ke tempat belajar, sesuaikan dengan harimu.',
            to: '/jadwal',
          },
          {
            title: 'Daftar & mulai belajar',
            text: 'Isi formulir dan konfirmasikan pilihan kelas melalui WhatsApp.',
            to: '/daftar',
          },
        ]"
        :key="step.title"
      >
        <span class="step-number">0{{ i + 1 }}</span>
        <h3>{{ step.title }}</h3>
        <p>{{ step.text }}</p>
        <NuxtLink :to="step.to" class="text-link">Mulai langkah ini →</NuxtLink>
      </article>
    </div>
  </section>
</template>
