<script setup lang="ts">
import { navigation, siteConfig } from '~/data/site'
import { programs } from '~/data/programs'
</script>

<template>
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-top">
        <div class="footer-intro">
          <NuxtLink to="/" class="brand">
            <span class="brand-symbol"><UiIcon name="book" /></span>
            <span>
              <strong>{{ siteConfig.name }}</strong>
              <small>ISLAMIC LEARNING CENTER</small>
            </span>
          </NuxtLink>
          <p>{{ siteConfig.tagline }}</p>
          <span class="footer-note">Langkah kecil hari ini, kebaikan untuk masa depan.</span>
        </div>
        <div class="footer-contact">
          <NuxtLink to="/kontak" class="footer-contact-link">
            Mari Terhubung <UiIcon name="arrow" :size="17" />
          </NuxtLink>
          <p>{{ siteConfig.address }}</p>
          <small>Kontak dan lokasi masih contoh.</small>
          <div class="footer-mode">
            <span><UiIcon name="laptop" :size="15" /> Online</span>
            <span><UiIcon name="place" :size="15" /> Tatap Muka</span>
          </div>
        </div>
      </div>
      <nav class="footer-link-row" aria-label="Jelajahi situs">
        <h3>Jelajahi</h3>
        <div class="footer-links">
          <NuxtLink v-for="item in navigation.slice(1)" :key="item[1]" :to="item[1]!">
            {{ item[0] }}
          </NuxtLink>
          <NuxtLink to="/galeri">Galeri</NuxtLink>
        </div>
      </nav>
      <nav class="footer-link-row" aria-label="Program belajar">
        <h3>Program Belajar</h3>
        <div class="footer-links footer-programs">
          <NuxtLink v-for="program in programs" :key="program.id" :to="`/program/${program.slug}`">
            {{ program.name }}
          </NuxtLink>
        </div>
      </nav>
    </div>
    <div class="container footer-bottom">
      <span>© {{ new Date().getFullYear() }} {{ siteConfig.name }}. All rights reserved.</span>
      <span>Dibuat dengan niat baik <UiIcon name="heart" :size="14" /></span>
    </div>
  </footer>
</template>
