<template>
  <section class="why-section">
    <div class="container section">
      <UiSectionTitle
        eyebrow="SAHABAT DALAM SETIAP LANGKAH"
        title="Bukan Sekadar Belajar Membaca."
        description="Ruang belajar yang membuat setiap proses terasa bermakna."
        centered
      />
      <div class="grid-three">
        <article
          v-for="item in [
            {
              icon: 'book',
              title: 'Belajar Bertahap',
              text: 'Program sesuai kemampuan, dari huruf pertama hingga bacaan yang lebih lancar.',
            },
            {
              icon: 'heart',
              title: 'Ramah Anak',
              text: 'Suasana menyenangkan untuk menumbuhkan rasa senang belajar.',
            },
            {
              icon: 'people',
              title: 'Anak hingga Dewasa',
              text: 'Setiap usia punya kesempatan untuk memulai langkah baik.',
            },
            {
              icon: 'laptop',
              title: 'Online & Tatap Muka',
              text: 'Pilih belajar online atau datang langsung ke tempat belajar.',
            },
            {
              icon: 'leaf',
              title: 'Pengajar Pendamping',
              text: 'Belajar bersama pengajar dengan pendampingan yang sabar.',
            },
            {
              icon: 'calendar',
              title: 'Jadwal Terstruktur',
              text: 'Temukan waktu belajar yang bisa menjadi kebiasaan baik.',
            },
          ]"
          :key="item.title"
          class="benefit-card"
        >
          <span class="icon-tile"><UiIcon :name="item.icon" :size="25" /></span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
