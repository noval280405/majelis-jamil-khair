<script setup lang="ts">
defineProps<{ question: string; options: string[]; modelValue: number }>()
defineEmits<{ 'update:modelValue': [value: number] }>()
</script>
<template>
  <fieldset class="placement-question">
    <legend>{{ question }}</legend>
    <label
      v-for="(option, index) in options"
      :key="option"
      :class="{ chosen: modelValue === index }"
      ><input
        type="radio"
        name="placement-answer"
        :value="index"
        :checked="modelValue === index"
        @change="$emit('update:modelValue', index)" /><span>{{ option }}</span
      ><UiIcon v-if="modelValue === index" name="check" :size="20"
    /></label>
  </fieldset>
</template>
