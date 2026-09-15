<script setup lang="ts">
withDefaults(defineProps<{ name?: string; size?: number }>(), { name: 'book', size: 24 })
const paths: Record<string, string> = {
  book: 'M12 7C9 4 5 4 2 5v14c4-1 7 0 10 2m0-14c3-3 7-3 10-2v14c-4-1-7 0-10 2V7Z',
  arrow: 'M4 12h16m-6-6 6 6-6 6',
  check: 'm5 12 4 4L19 6',
  chevron: 'm6 9 6 6 6-6',
  star: 'm12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Z',
  laptop: 'M4 3h16v13H4V3ZM2 20h20M9 20l1-4m4 0 1 4',
  place: 'M4 21V10h16v11M2 21h20M7 10V7l5-5 5 5v3m-8 11v-7h6v7',
  clock: 'M12 8v5l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z',
  people:
    'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-4M13 3a4 4 0 0 1 0 8M12 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
  heart: 'M20 4c-3-2-6 0-8 2C10 4 7 2 4 4-5 4 1 10 8 16C19 14 25 8 20 4Z',
  chat: 'M21 11a9 9 0 0 1-9 9 11 11 0 0 1-4-1l-6 2 2-6a9 9 0 1 1 17-4ZM8 10h8m-8 4h5',
  search: 'm21 21-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z',
  menu: 'M3 6h18M3 12h18M3 18h18',
  close: 'm6 6 12 12M6 18 18 6',
  spark: 'm12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z',
  mail: 'M2 5h20v14H2V5Zm0 0 10 8L22 5',
  pin: 'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  leaf: 'M20 3C6 1 1 9 6 16s17 2 14-13ZM4 21 16 8',
  calendar: 'M3 5h18v16H3V5Zm4-3v6m10-6v6M3 11h18',
}
</script>
<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path :d="paths[name] || paths.book" />
  </svg>
</template>
