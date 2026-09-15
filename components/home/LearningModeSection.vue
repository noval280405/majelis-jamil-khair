<template>
  <section class="container section learning-section">
    <UiSectionTitle
      eyebrow="DUA CARA, SATU TUJUAN BAIK"
      title="Belajar dengan Cara yang Nyaman."
      description="Dekat maupun jauh, selalu ada ruang untuk belajar."
      centered
    />
    <div class="grid-two">
      <article class="mode-card tone-blue">
        <div class="mode-illustration">
          <UiIcon name="laptop" :size="60" /><span class="mode-star">✦</span>
        </div>
        <div>
          <span class="eyebrow">FLEKSIBEL & INTERAKTIF</span>
          <h3>Kelas Online</h3>
          <p>Belajar dari mana saja, tetap dekat dengan pengajar dan semangat belajar.</p>
          <ul class="check-list compact">
            <li><UiIcon name="check" :size="16" /> Kelas langsung yang interaktif</li>
            <li><UiIcon name="check" :size="16" /> Jadwal teratur, cocok untuk luar daerah</li>
          </ul>
          <NuxtLink to="/online" class="text-link"
            >Lihat Kelas Online <UiIcon name="arrow" :size="18"
          /></NuxtLink>
        </div>
      </article>
      <article class="mode-card tone-mint">
        <div class="mode-illustration">
          <UiIcon name="place" :size="60" /><span class="mode-star">✦</span>
        </div>
        <div>
          <span class="eyebrow">HANGAT & MENYENANGKAN</span>
          <h3>Kelas Tatap Muka</h3>
          <p>Datang ke tempat belajar, bertemu sahabat, dan mengaji bersama.</p>
          <ul class="check-list compact">
            <li><UiIcon name="check" :size="16" /> Pendampingan pengajar secara langsung</li>
            <li><UiIcon name="check" :size="16" /> Suasana belajar bersama, jadwal tersedia</li>
          </ul>
          <NuxtLink to="/tatap-muka" class="text-link"
            >Lihat Tempat Belajar <UiIcon name="arrow" :size="18"
          /></NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>
