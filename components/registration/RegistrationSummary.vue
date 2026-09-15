<script setup lang="ts">
defineProps<{
  student: string
  age: string
  phone: string
  program: string
  level: string
  mode: string
  day: string
  notes: string
}>()
</script>
<template>
  <div class="registration-summary">
    <span class="eyebrow">RINGKASAN PENDAFTARAN</span>
    <h2>Langkah awal yang baik.</h2>
    <dl>
      <template
        v-for="(value, label) in {
          'Nama siswa': student,
          Usia: age,
          WhatsApp: phone,
          Program: program,
          Level: level,
          Metode: mode,
          Hari: day,
          Catatan: notes,
        }"
        :key="label"
        ><dt>{{ label }}</dt>
        <dd>{{ value || 'Belum diisi' }}</dd></template
      >
    </dl>
    <p>Pendaftaran dikonfirmasi setelah pesan dikirim dan pengelola menyetujui kelas.</p>
  </div>
</template>
