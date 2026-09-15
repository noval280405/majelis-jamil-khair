<script setup lang="ts">
withDefaults(defineProps<{ color?: string }>(), { color: 'mint' })
</script>
<template>
  <span class="badge" :class="`tone-${color}`"><slot /></span>
</template>
