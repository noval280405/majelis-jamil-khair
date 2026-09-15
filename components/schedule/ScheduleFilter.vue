<script setup lang="ts">
defineProps<{ modelValue: Record<string, string> }>()
defineEmits<{ 'update:modelValue': [value: Record<string, string>] }>()
</script>
<template>
  <ClassFilter :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)" />
</template>
