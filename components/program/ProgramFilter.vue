<script setup lang="ts">
defineProps<{ search: string; category: string }>()
const emit = defineEmits<{ 'update:search': [value: string]; 'update:category': [value: string] }>()
const categories = ['Semua', 'Anak', 'Remaja', 'Dewasa', 'Iqra', 'Tahsin', 'Tajwid', 'Tahfidz']
</script>
<template>
  <div class="filter-area">
    <label class="search-field"
      ><UiIcon name="search" :size="20" /><span class="sr-only">Cari program</span
      ><input
        :value="search"
        type="search"
        placeholder="Cari program..."
        @input="emit('update:search', ($event.target as HTMLInputElement).value)"
    /></label>
    <div class="filter-chips" aria-label="Kategori program">
      <button
        v-for="item in categories"
        :key="item"
        :class="{ selected: category === item }"
        :aria-pressed="category === item"
        @click="emit('update:category', item)"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>
