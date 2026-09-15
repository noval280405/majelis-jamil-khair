<script setup lang="ts">
import { classes } from '~/data/classes'
const route = useRoute()
const item = computed(() => classes.find((c) => c.slug === route.params.slug))
if (!item.value) throw createError({ statusCode: 404, statusMessage: 'Kelas tidak ditemukan' })
usePageSeo(item.value.name, item.value.description)
</script>
<template><ClassDetail v-if="item" :item="item" /></template>
