<script setup lang="ts">
import { navigation, siteConfig } from '~/data/site'
import { programs } from '~/data/programs'
</script>
<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <NuxtLink to="/" class="brand"
          ><span class="brand-symbol"><UiIcon name="book" /></span
          ><span
            ><strong>{{ siteConfig.name }}</strong
            ><small>ISLAMIC LEARNING CENTER</small></span
          ></NuxtLink
        >
        <p>{{ siteConfig.tagline }}</p>
        <span class="footer-note">Langkah kecil hari ini,<br />kebaikan untuk masa depan.</span>
      </div>
      <div>
        <h3>Jelajahi</h3>
        <NuxtLink v-for="item in navigation.slice(1)" :key="item[1]" :to="item[1]!">{{
          item[0]
        }}</NuxtLink>
      </div>
      <div>
        <h3>Program Belajar</h3>
        <NuxtLink v-for="program in programs" :key="program.id" :to="`/program/${program.slug}`">{{
          program.name
        }}</NuxtLink>
      </div>
      <div>
        <h3>Mari Terhubung</h3>
        <NuxtLink to="/kontak">WhatsApp & Kontak <UiIcon name="arrow" :size="16" /></NuxtLink
        ><NuxtLink to="/galeri">Galeri kegiatan</NuxtLink>
        <p>{{ siteConfig.address }}</p>
        <small>Kontak dan lokasi masih contoh.</small>
        <div class="footer-mode">
          <UiIcon name="laptop" :size="17" /> Online <span>·</span
          ><UiIcon name="place" :size="17" /> Tatap Muka
        </div>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© {{ new Date().getFullYear() }} {{ siteConfig.name }}. All rights reserved.</span
      ><span>Dibuat dengan niat baik <UiIcon name="heart" :size="14" /></span>
    </div>
  </footer>
</template>
