<script setup lang="ts">
import { programs } from '~/data/programs'
import { classes } from '~/data/classes'
import { days } from '~/data/site'
defineProps<{ modelValue: Record<string, string> }>()
const emit = defineEmits<{ 'update:modelValue': [value: Record<string, string>] }>()
const fields = [
  {
    key: 'programSlug',
    label: 'Program',
    options: programs.map((p) => ({ value: p.slug, label: p.name })),
  },
  {
    key: 'level',
    label: 'Level',
    options: [...new Set(classes.map((c) => c.level))].map((v) => ({ value: v, label: v })),
  },
  {
    key: 'ageGroup',
    label: 'Usia',
    options: ['Anak', 'Remaja', 'Dewasa'].map((v) => ({ value: v, label: v })),
  },
  {
    key: 'mode',
    label: 'Metode',
    options: ['Online', 'Tatap Muka'].map((v) => ({ value: v, label: v })),
  },
  { key: 'day', label: 'Hari', options: days.map((v) => ({ value: v, label: v })) },
]
</script>
<template>
  <div class="filter-selects">
    <label v-for="field in fields" :key="field.key"
      >{{ field.label
      }}<select
        :aria-label="field.label"
        :value="modelValue[field.key] || ''"
        @change="
          emit('update:modelValue', {
            ...modelValue,
            [field.key]: ($event.target as HTMLSelectElement).value,
          })
        "
      >
        <option value="">Semua {{ field.label.toLowerCase() }}</option>
        <option v-for="option in field.options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select></label
    ><button class="reset-filter" @click="emit('update:modelValue', {})">Reset filter</button>
  </div>
</template>
