<script setup lang="ts">
import type { QuranClass } from '~/data/classes'
import { rupiah } from '~/data/site'
defineProps<{ item: QuranClass }>()
</script>
<template>
  <article class="class-card">
    <div class="card-meta">
      <UiColorBadge :color="item.mode === 'Online' ? 'blue' : 'mint'">{{ item.mode }}</UiColorBadge
      ><span>{{ item.ageGroup }}</span>
    </div>
    <h3>
      <NuxtLink :to="`/kelas/${item.slug}`">{{ item.name }}</NuxtLink>
    </h3>
    <p>{{ item.level }}</p>
    <ul class="class-info">
      <li><UiIcon name="calendar" :size="18" />{{ item.schedule }}</li>
      <li>
        <UiIcon name="clock" :size="18" />{{ item.time }} WIB · {{ item.durationMinutes }} menit
      </li>
      <li><UiIcon name="people" :size="18" />Maks. {{ item.capacity }} peserta</li>
    </ul>
    <div class="card-foot">
      <span
        ><strong>{{ rupiah(item.price) }}</strong
        ><small> / bulan · contoh</small></span
      ><NuxtLink
        :to="`/kelas/${item.slug}`"
        class="round-link"
        :aria-label="`Lihat kelas ${item.name}`"
        ><UiIcon name="arrow" :size="18"
      /></NuxtLink>
    </div>
  </article>
</template>
