<script setup lang="ts">
import type { Program } from '~/data/programs'
defineProps<{ program: Program }>()
</script>
<template>
  <article class="program-card">
    <NuxtLink
      :to="`/program/${program.slug}`"
      class="program-image"
      tabindex="-1"
      aria-hidden="true"
      ><img :src="program.image" alt="" loading="lazy" width="480" height="300" /><span
        v-if="program.popular"
        class="popular-tag"
        ><UiIcon name="spark" :size="12" /> Favorit belajar</span
      ></NuxtLink
    >
    <div class="card-body">
      <div class="card-meta">
        <UiColorBadge :color="program.accentColor">{{ program.category }}</UiColorBadge
        ><span>{{
          program.ageGroup.length === 3 ? 'Semua usia' : program.ageGroup.join(' · ')
        }}</span>
      </div>
      <h3>
        <NuxtLink :to="`/program/${program.slug}`">{{ program.name }}</NuxtLink>
      </h3>
      <p>{{ program.shortDescription }}</p>
      <div class="card-foot">
        <span
          ><UiIcon name="book" :size="15" /> {{ program.level[0]
          }}{{ program.level.length > 1 ? ' – ' + program.level.at(-1) : '' }}</span
        ><NuxtLink
          :to="`/program/${program.slug}`"
          class="round-link"
          :aria-label="`Pelajari program ${program.name}`"
          ><UiIcon name="arrow" :size="18"
        /></NuxtLink>
      </div>
    </div>
  </article>
</template>
