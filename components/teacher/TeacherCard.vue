<script setup lang="ts">
import type { Teacher } from '~/data/teachers'
defineProps<{ teacher: Teacher }>()
</script>
<template>
  <article class="teacher-card">
    <NuxtLink :to="`/pengajar/${teacher.slug}`" tabindex="-1" aria-hidden="true"
      ><img :src="teacher.image" alt="" loading="lazy" width="400" height="320"
    /></NuxtLink>
    <div class="card-body">
      <small v-if="teacher.isDemo" class="demo-label">ILUSTRASI · PROFIL CONTOH</small>
      <h3>
        <NuxtLink :to="`/pengajar/${teacher.slug}`">{{ teacher.name }}</NuxtLink>
      </h3>
      <p>{{ teacher.role }}</p>
      <div class="chips">
        <UiColorBadge v-for="age in teacher.ageGroups" :key="age">{{ age }}</UiColorBadge>
      </div>
    </div>
  </article>
</template>
