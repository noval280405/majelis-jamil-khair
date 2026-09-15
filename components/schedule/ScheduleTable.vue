<script setup lang="ts">
import type { schedules } from '~/data/schedules'
defineProps<{ items: typeof schedules }>()
</script>
<template>
  <div
    v-if="items.length"
    class="table-wrap"
    tabindex="0"
    role="region"
    aria-label="Jadwal kelas, geser untuk melihat seluruh kolom"
  >
    <table>
      <caption class="sr-only">
        Contoh jadwal kelas Majelis Jamil Khair, waktu Indonesia Barat
      </caption>
      <thead>
        <tr>
          <th>Hari</th>
          <th>Program / Kelas</th>
          <th>Waktu (WIB)</th>
          <th>Metode</th>
          <th>Usia</th>
          <th><span class="sr-only">Detail</span></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.key">
          <td>
            <strong>{{ item.day }}</strong>
          </td>
          <td>
            {{ item.name }}<small>{{ item.level }}</small>
          </td>
          <td>{{ item.time }}</td>
          <td>
            <UiColorBadge :color="item.mode === 'Online' ? 'blue' : 'mint'">{{
              item.mode
            }}</UiColorBadge>
          </td>
          <td>{{ item.ageGroup }}</td>
          <td>
            <NuxtLink
              :to="`/kelas/${item.slug}`"
              class="text-link"
              :aria-label="`Lihat kelas ${item.name}`"
              >Lihat <UiIcon name="arrow" :size="16"
            /></NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <UiEmptyState v-else />
</template>
