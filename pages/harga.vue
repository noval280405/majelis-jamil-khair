<script setup lang="ts">
import { pricing } from '~/data/pricing'
import { rupiah } from '~/data/site'
usePageSeo('Pilihan Biaya Belajar')
</script>
<template>
  <div>
    <UiPageHero
      title="Investasi Kecil untuk Kebiasaan Baik."
      description="Pilihan belajar sesuai kebutuhan. Semua biaya berikut merupakan contoh untuk pratinjau."
      eyebrow="Biaya Belajar"
    />
    <section class="container section">
      <UiDemoNotice
        >Harga belum merupakan penawaran aktual. Konfirmasikan biaya, jumlah pertemuan, dan
        ketersediaan kepada pengelola.</UiDemoNotice
      >
      <div class="pricing-grid">
        <article
          v-for="plan in pricing"
          :key="plan.name"
          class="price-card"
          :class="{ featured: plan.popular }"
        >
          <span v-if="plan.popular" class="price-ribbon">FLEKSIBEL DARI MANA SAJA</span
          ><UiIcon :name="plan.mode === 'Tatap Muka' ? 'place' : 'book'" :size="29" />
          <h2>{{ plan.name }}</h2>
          <p>{{ plan.description }}</p>
          <small>Mulai dari · harga contoh</small>
          <div class="price">{{ rupiah(plan.price) }}</div>
          <p>/ {{ plan.unit }}</p>
          <ul class="check-list">
            <li v-for="feature in plan.features" :key="feature">
              <UiIcon name="check" :size="17" />{{ feature }}
            </li>
          </ul>
          <UiPrimaryButton
            :to="`/daftar${plan.mode ? '?mode=' + encodeURIComponent(plan.mode) : ''}`"
            :secondary="!plan.popular"
            >Pilih paket</UiPrimaryButton
          >
        </article>
      </div>
    </section>
    <HomeFAQPreview />
  </div>
</template>
