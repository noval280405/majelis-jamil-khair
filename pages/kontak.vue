<script setup lang="ts">
import { siteConfig, whatsappUrl } from '~/data/site'
usePageSeo('Kontak & Lokasi Belajar')
const form = reactive({ name: '', phone: '', question: '' })
const ready = ref(false)
watch(form, () => {
  ready.value = false
})
const url = computed(() =>
  whatsappUrl(
    `Halo Majelis Jamil Khair,\n\nNama: ${form.name.trim()}\nWhatsApp: ${form.phone}\nPertanyaan: ${form.question.trim()}`,
  ),
)
</script>
<template>
  <div>
    <UiPageHero
      title="Mari Mulai dengan Percakapan."
      description="Tanyakan program, jadwal, atau hal kecil yang ingin kamu ketahui. Kami senang membantu."
      eyebrow="Kontak"
    />
    <section class="container section">
      <UiDemoNotice
        >Nomor WhatsApp, email, Instagram, jam belajar, dan alamat masih placeholder. Ganti dengan
        data pengelola sebelum peluncuran.</UiDemoNotice
      >
      <div class="registration-layout">
        <form class="form-card" @submit.prevent="ready = true">
          <h2>Kirim pertanyaanmu</h2>
          <div class="form-grid">
            <label class="span-two"
              >Nama <span>*</span
              ><input
                v-model="form.name"
                required
                pattern=".*\S.*"
                maxlength="100"
                autocomplete="name"
                placeholder="Nama lengkap" /></label
            ><label class="span-two"
              >Nomor WhatsApp <span>*</span
              ><input
                v-model="form.phone"
                required
                type="tel"
                pattern="(?:\+62|62|0)[0-9]{8,13}"
                autocomplete="tel"
                placeholder="081234567890"
                title="Awalan 0, 62, atau +62 dan 8–13 digit tanpa spasi" /></label
            ><label class="span-two"
              >Pertanyaan <span>*</span
              ><textarea
                v-model="form.question"
                required
                minlength="5"
                maxlength="2000"
                rows="5"
                placeholder="Apa yang ingin ditanyakan?"
              />
            </label>
          </div>
          <p class="small-text">Data tidak disimpan di website. Pesan dikirim melalui WhatsApp.</p>
          <button class="btn" type="submit">
            Siapkan pesan <UiIcon name="arrow" :size="18" />
          </button>
          <div v-if="ready" role="status" class="confirm-box">
            <p>Pesan siap. Nomor tujuan adalah nomor contoh.</p>
            <a :href="url" target="_blank" rel="noopener noreferrer" class="btn"
              >Lanjut ke WhatsApp <UiIcon name="chat" :size="18"
            /></a>
          </div>
        </form>
        <aside class="contact-card">
          <h2>Mari Terhubung</h2>
          <div>
            <UiIcon name="chat" />
            <h3>WhatsApp</h3>
            <a
              :href="whatsappUrl('Halo Majelis Jamil Khair, saya ingin bertanya.')"
              target="_blank"
              rel="noopener noreferrer"
              >+{{ siteConfig.whatsapp }}</a
            ><small>Nomor contoh</small>
          </div>
          <div>
            <UiIcon name="mail" />
            <h3>Email</h3>
            <a :href="`mailto:${siteConfig.email}`">{{ siteConfig.email }}</a
            ><small>Email contoh</small>
          </div>
          <div>
            <UiIcon name="heart" />
            <h3>Instagram</h3>
            <p>{{ siteConfig.instagram }} · akun belum tersedia</p>
          </div>
          <div>
            <UiIcon name="clock" />
            <h3>Jam Belajar</h3>
            <p>Mengikuti pilihan jadwal kelas (contoh).</p>
            <NuxtLink to="/jadwal" class="text-link">Lihat jadwal →</NuxtLink>
          </div>
        </aside>
      </div>
      <div class="map-placeholder">
        <UiIcon name="pin" :size="38" />
        <h2>Tempat Belajar Majelis Jamil Khair</h2>
        <p>{{ siteConfig.address }}</p>
        <a
          v-if="siteConfig.mapsUrl"
          :href="siteConfig.mapsUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-link"
          >Lihat peta →</a
        ><small v-else>Peta akan ditampilkan setelah alamat asli dikonfirmasi.</small>
      </div>
    </section>
  </div>
</template>
