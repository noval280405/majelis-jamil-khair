<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  to?: string
  linkLabel?: string
}>()
</script>
<template>
  <div class="section-heading" :class="{ centered }">
    <div>
      <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
      <h2>{{ title }}</h2>
      <p v-if="description">{{ description }}</p>
    </div>
    <NuxtLink v-if="to" :to="to" class="text-link"
      >{{ linkLabel || 'Lihat semua' }} <UiIcon name="arrow" :size="19"
    /></NuxtLink>
  </div>
</template>
