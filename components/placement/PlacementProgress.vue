<script setup lang="ts">
defineProps<{ current: number; total: number }>()
</script>
<template>
  <div class="placement-progress">
    <div>
      <span>Pertanyaan {{ current }} dari {{ total }}</span
      ><span>{{ Math.round((current / total) * 100) }}%</span>
    </div>
    <progress :value="current" :max="total" :aria-label="`Pertanyaan ${current} dari ${total}`" />
  </div>
</template>
