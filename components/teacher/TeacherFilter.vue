<script setup lang="ts">
defineProps<{ modelValue: string }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
<template>
  <div class="filter-chips">
    <button
      v-for="item in ['Semua', 'Anak', 'Remaja', 'Dewasa', 'Iqra', 'Tahsin', 'Tahfidz']"
      :key="item"
      :class="{ selected: modelValue === item }"
      :aria-pressed="modelValue === item"
      @click="$emit('update:modelValue', item)"
    >
      {{ item }}
    </button>
  </div>
</template>
