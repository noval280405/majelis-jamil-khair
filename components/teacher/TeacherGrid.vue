<script setup lang="ts">
import type { Teacher } from '~/data/teachers'
defineProps<{ items: Teacher[] }>()
</script>
<template>
  <div v-if="items.length" class="grid-three">
    <TeacherCard v-for="teacher in items" :key="teacher.id" :teacher="teacher" />
  </div>
  <UiEmptyState v-else />
</template>
