<script setup lang="ts">
import { testimonials } from '~/data/testimonials'
</script>
<template>
  <section class="testimonial-section">
    <div class="container section">
      <UiSectionTitle
        eyebrow="CERITA SAHABAT BELAJAR"
        title="Berawal dari Belajar, Berbuah Senyuman."
        description="Contoh tampilan testimoni — bukan pengalaman peserta nyata."
        centered
      />
      <div class="grid-three">
        <article v-for="(item, i) in testimonials" :key="item.name" class="quote-card">
          <span class="quote-mark" aria-hidden="true">“</span>
          <blockquote>{{ item.quote }}</blockquote>
          <div class="quote-person">
            <span :class="`tone-${['mint', 'pink', 'blue'][i]}`"
              ><UiIcon name="people" :size="20"
            /></span>
            <div>
              <strong>{{ item.name }}</strong
              ><small>{{ item.detail }}</small>
            </div>
          </div>
          <span class="demo-label">TESTIMONI CONTOH</span>
        </article>
      </div>
    </div>
  </section>
</template>
