<script setup lang="ts">
defineProps<{ title: string; description?: string; eyebrow?: string }>()
</script>
<template>
  <header class="page-hero">
    <div class="container">
      <div class="breadcrumb">
        <NuxtLink to="/">Beranda</NuxtLink><span>/</span><span>{{ eyebrow || title }}</span>
      </div>
      <span class="eyebrow">{{ eyebrow || 'MAJELIS JAMIL KHAIR' }}</span>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <span class="page-spark" aria-hidden="true">✳</span>
    </div>
  </header>
</template>
