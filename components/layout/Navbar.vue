<script setup lang="ts">
import { navigation, siteConfig } from '~/data/site'
const open = ref(false)
const route = useRoute()
const toggle = ref<HTMLButtonElement | null>(null)
watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)
function closeMenu() {
  open.value = false
  toggle.value?.focus()
}
</script>
<template>
  <header class="navbar" @keydown.esc="closeMenu">
    <div class="container nav-inner">
      <NuxtLink to="/" class="brand" aria-label="Majelis Jamil Khair — Beranda"
        ><span class="brand-symbol"><UiIcon name="book" :size="27" /><span>✦</span></span
        ><span
          ><strong>{{ siteConfig.name }}</strong
          ><small>ISLAMIC LEARNING CENTER</small></span
        ></NuxtLink
      >
      <nav class="desktop-nav" aria-label="Navigasi utama">
        <NuxtLink v-for="item in navigation.slice(0, 5)" :key="item[1]" :to="item[1]!">{{
          item[0]
        }}</NuxtLink>
        <details class="more-nav">
          <summary>Lainnya <UiIcon name="chevron" :size="13" /></summary>
          <div>
            <NuxtLink
              v-for="item in navigation.slice(5)"
              :key="item[1]"
              :to="item[1]!"
              @click="
                ($event.currentTarget as HTMLElement).closest('details')?.removeAttribute('open')
              "
              >{{ item[0] }}</NuxtLink
            ><NuxtLink to="/galeri">Galeri</NuxtLink><NuxtLink to="/kontak">Kontak</NuxtLink>
          </div>
        </details>
      </nav>
      <NuxtLink class="btn nav-cta" to="/daftar"
        >Mulai Belajar <UiIcon name="arrow" :size="17" /></NuxtLink
      ><button
        ref="toggle"
        class="mobile-toggle"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        :aria-label="open ? 'Tutup menu' : 'Buka menu'"
        @click="open = !open"
      >
        <UiIcon :name="open ? 'close' : 'menu'" />
      </button>
    </div>
    <nav v-if="open" id="mobile-menu" class="mobile-menu" aria-label="Navigasi seluler">
      <NuxtLink v-for="item in navigation" :key="item[1]" :to="item[1]!">{{ item[0] }}</NuxtLink
      ><NuxtLink to="/galeri">Galeri</NuxtLink><NuxtLink to="/kontak">Kontak</NuxtLink
      ><NuxtLink to="/daftar" class="btn">Mulai Belajar →</NuxtLink>
    </nav>
  </header>
</template>
