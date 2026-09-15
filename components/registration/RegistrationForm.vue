<script setup lang="ts">
import { programs } from '~/data/programs'
import { days, whatsappUrl } from '~/data/site'
const route = useRoute()
const query = (key: string) =>
  typeof route.query[key] === 'string' ? (route.query[key] as string) : ''
const form = reactive({
  student: '',
  age: '',
  phone: '',
  program: programs.some((p) => p.slug === query('program')) ? query('program') : '',
  level: '',
  mode: ['Online', 'Tatap Muka'].includes(query('mode')) ? query('mode') : '',
  day: days.includes(query('day')) ? query('day') : '',
  notes: query('kelas') ? `Pilihan kelas: ${query('kelas')}` : '',
})
const selected = computed(() => programs.find((p) => p.slug === form.program))
const levels = computed(() => selected.value?.level || [])
form.level = levels.value.includes(query('level')) ? query('level') : ''
watch(
  () => form.program,
  () => {
    form.level = ''
  },
)
const ready = ref(false)
watch(form, () => {
  ready.value = false
})
const message = computed(
  () =>
    `Halo Majelis Jamil Khair,\n\nSaya ingin mendaftar program belajar mengaji.\n\nNama: ${form.student.trim()}\nUsia: ${form.age} tahun\nWhatsApp: ${form.phone}\nProgram: ${selected.value?.name || ''}\nLevel: ${form.level || 'Belum tahu'}\nMetode: ${form.mode}\nHari Pilihan: ${form.day}\nCatatan: ${form.notes.trim() || '-'}\n\nMohon informasi kelas yang tersedia.`,
)
const link = computed(() => whatsappUrl(message.value))
function submit() {
  ready.value = true
  nextTick(() => document.getElementById('registration-confirm')?.focus())
}
</script>
<template>
  <div class="registration-layout">
    <form class="form-card" @submit.prevent="submit">
      <h2>Kenalan dulu, yuk!</h2>
      <p>Isi data calon siswa. Setelah diperiksa, kirim melalui WhatsApp.</p>
      <div class="form-grid">
        <label
          >Nama siswa <span>*</span
          ><input
            v-model="form.student"
            required
            maxlength="100"
            autocomplete="name"
            placeholder="Nama lengkap siswa"
            pattern=".*\S.*" /></label
        ><label
          >Usia <span>*</span
          ><input
            v-model="form.age"
            required
            type="number"
            min="5"
            max="100"
            placeholder="Usia dalam tahun" /></label
        ><label class="span-two"
          >Nomor WhatsApp <span>*</span
          ><input
            v-model="form.phone"
            required
            type="tel"
            pattern="(?:\+62|62|0)[0-9]{8,13}"
            autocomplete="tel"
            placeholder="Contoh: 081234567890"
            title="Gunakan awalan 0, 62, atau +62, diikuti 8–13 digit tanpa spasi." /></label
        ><label
          >Program <span>*</span
          ><select aria-label="Program" v-model="form.program" required>
            <option value="" disabled>Pilih program</option>
            <option v-for="p in programs" :key="p.id" :value="p.slug">{{ p.name }}</option>
          </select></label
        ><label
          >Level<select aria-label="Level" v-model="form.level">
            <option value="">Belum tahu / konsultasi</option>
            <option v-for="level in levels" :key="level" :value="level">{{ level }}</option>
          </select></label
        ><label
          >Metode belajar <span>*</span
          ><select aria-label="Metode belajar" v-model="form.mode" required>
            <option value="" disabled>Pilih metode</option>
            <option>Online</option>
            <option>Tatap Muka</option>
          </select></label
        ><label
          >Hari pilihan <span>*</span
          ><select aria-label="Hari pilihan" v-model="form.day" required>
            <option value="" disabled>Pilih hari</option>
            <option v-for="day in days" :key="day">{{ day }}</option>
          </select></label
        ><label class="span-two"
          >Catatan <span class="optional">(opsional)</span
          ><textarea
            v-model="form.notes"
            rows="4"
            maxlength="1000"
            placeholder="Ceritakan kebutuhan atau waktu belajar yang diinginkan..."
          />
        </label>
      </div>
      <p v-if="form.mode === 'Tatap Muka'" class="notice">
        Siswa datang langsung ke tempat belajar Majelis Jamil Khair.
      </p>
      <p class="small-text">
        Data tidak disimpan di website. Data akan diteruskan ke WhatsApp hanya ketika Anda membuka
        tautan dan mengirim pesan.
      </p>
      <button class="btn" type="submit">
        Periksa pendaftaran <UiIcon name="arrow" :size="18" />
      </button>
      <div v-if="ready" id="registration-confirm" class="confirm-box" tabindex="-1" role="status">
        <h3>Pesan siap dikirim</h3>
        <p>
          Periksa data di ringkasan. Nomor tujuan masih nomor contoh; belum tersedia pendaftaran
          operasional.
        </p>
        <a :href="link" class="btn" target="_blank" rel="noopener noreferrer"
          >Lanjut ke WhatsApp <UiIcon name="chat" :size="19"
        /></a>
      </div>
    </form>
    <RegistrationSummary v-bind="form" :program="selected?.name || ''" />
  </div>
</template>
