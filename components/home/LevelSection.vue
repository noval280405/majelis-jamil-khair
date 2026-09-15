<template>
  <section class="container section">
    <UiSectionTitle
      eyebrow="SETIAP PROSES ITU BERARTI"
      title="Belajar Sesuai Levelmu."
      description="Tak perlu terburu-buru. Kita mulai dari kemampuanmu hari ini."
      centered
    />
    <div class="level-grid">
      <NuxtLink
        v-for="(item, i) in [
          { title: 'Pemula', text: 'Kenalan dengan huruf hijaiyah', to: 'iqra', color: 'yellow' },
          {
            title: 'Dasar',
            text: 'Merangkai huruf, mulai membaca',
            to: 'baca-al-quran',
            color: 'mint',
          },
          {
            title: 'Menengah',
            text: 'Melancarkan & memperbaiki bacaan',
            to: 'tahsin',
            color: 'blue',
          },
          { title: 'Lanjutan', text: 'Menjaga bacaan dan hafalan', to: 'tahfidz', color: 'purple' },
        ]"
        :key="item.title"
        :to="`/program/${item.to}`"
        class="level-card"
        ><span class="level-number" :class="`tone-${item.color}`">0{{ i + 1 }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
        <UiIcon name="arrow" :size="18"
      /></NuxtLink>
    </div>
  </section>
</template>
