# Majelis Jamil Khair

Website belajar Al-Qur’an untuk anak, remaja, dan dewasa. Menggunakan **Nuxt 3, Vue 3, TypeScript, Tailwind CSS**, Composition API, dan data TypeScript lokal.

Nama final mengikuti instruksi terakhir dalam [PRD.md](./PRD.md): **Majelis Jamil Khair**. Pilihan belajar adalah **Online** dan **Tatap Muka di Tempat Belajar**.

## Menjalankan

```sh
npm install
npm run dev
```

## Build dan pemeriksaan

```sh
npm run typecheck
npm run build
npm run preview
```

TypeScript dipatok pada seri 5.9 agar kompatibel dengan `vue-tsc`. Gunakan versi Node yang didukung Nuxt; proyek telah dibangun di lingkungan Node 23.9.0 yang tersedia.

## Pengujian browser

```sh
npx playwright install chromium
npm run build
npm run test:e2e
```

Playwright menjalankan hasil build pada `http://127.0.0.1:43187`. Browser Chromium yang sudah ada dapat digunakan melalui variabel `PLAYWRIGHT_CHROMIUM_EXECUTABLE`. Pengujian tidak mengirim pesan atau membuka kontak eksternal.

Cakupan pengujian:

- 31 URL: halaman utama, katalog, seluruh detail program, kelas, dan pengajar.
- Lebar 360, 390, 768, 1024, 1280, dan 1440 piksel; pemeriksaan luapan horizontal.
- Error JavaScript, warning Vue/hydration, gambar, judul, dan deskripsi SEO.
- Filter program, kelas, jadwal, dan pengajar; pencarian FAQ.
- Navigasi mobile, Escape, fokus keyboard, dan preferensi reduced motion.
- Lightbox galeri, fokus modal, serta pengembalian fokus saat ditutup.
- Cek level, pilihan sebelumnya, rekomendasi, dan pengulangan.
- Formulir pendaftaran, pilihan dari detail kelas, validasi, dan encoding pesan WhatsApp.
- Form kontak, halaman 404, dan screenshot desktop/mobile.

## Halaman

| Route                           | Isi                                                             |
| ------------------------------- | --------------------------------------------------------------- |
| `/`                             | Homepage lengkap dengan seluruh bagian PRD                      |
| `/program`, `/program/[slug]`   | 8 program, pencarian, filter, detail, dan kelas terkait         |
| `/kelas`, `/kelas/[slug]`       | 6 kelas contoh, 5 filter, detail, dan prapengisian pendaftaran  |
| `/pengajar`, `/pengajar/[slug]` | 3 profil contoh, filter, dan kelas pendamping                   |
| `/jadwal`                       | Jadwal lokal, filter gabungan, tabel responsif, WIB             |
| `/online`                       | Kelas, program, jadwal, pengajar, perangkat, dan cara bergabung |
| `/tatap-muka`                   | Lokasi/fasilitas contoh, kelas, program, dan jadwal             |
| `/cek-level`                    | 5 pertanyaan penilaian diri dan rekomendasi awal                |
| `/harga`                        | 4 paket contoh; private hanya online                            |
| `/galeri`                       | Filter kategori dan lightbox ilustrasi                          |
| `/tentang`, `/faq`              | Tentang majelis dan pertanyaan umum                             |
| `/daftar`, `/kontak`            | Formulir dengan tautan pesan WhatsApp                           |

Katalog memakai `pages/program/index.vue`, `pages/kelas/index.vue`, dan `pages/pengajar/index.vue` agar tidak menjadi parent layout yang menyembunyikan halaman `[slug]`.

## Struktur

- `components/layout`: navbar responsif dan footer.
- `components/home`: hero, dekorasi, kaligrafi, metode belajar, program, level, manfaat, langkah pendaftaran, pengajar, jadwal, cek level, galeri, testimoni, FAQ, CTA.
- `components/program`, `class`, `teacher`, `schedule`: kartu, grid, filter, detail.
- `components/placement`: pengantar, pertanyaan, progres, hasil.
- `components/registration`: formulir dan ringkasan.
- `components/gallery`: kartu, grid, lightbox dengan native dialog.
- `components/ui`: tombol, judul, badge, ikon, pola geometris, pemberitahuan data contoh, WhatsApp, empty state.
- `data`: konfigurasi website dan seluruh konten lokal.
- `composables`: SEO halaman dan filter kelas bersama.
- `plugins/reveal.client.ts`: animasi bagian dengan IntersectionObserver.
- `assets/css/main.css`: desain responsif, animasi ringan, dan reduced motion.
- `public/images`: ilustrasi SVG asli lokal, dapat diganti aset resmi.
- `tests/site.spec.ts`: pemeriksaan browser dan alur pengguna.

## Konten contoh yang harus diganti

### Kontak dan lokasi

Edit **`data/site.ts`**:

- WhatsApp `6281234567890` adalah nomor contoh.
- Email `hello@example.com` dan Instagram `@username` adalah placeholder.
- Alamat belum ditentukan; `mapsUrl` kosong. Peta ditampilkan setelah URL asli tersedia.
- `isDemo: true` menandai status data. Pemberitahuan contoh pada halaman harus diperbarui bersama data, bukan hanya mengubah flag.

Saat formulir valid, pengguna memeriksa ringkasan sebelum membuka WhatsApp. Tautan memakai `encodeURIComponent()`. Membuka tautan **tidak otomatis mengirim pesan**. Form tidak menggunakan database atau penyimpanan browser.

### Program, jadwal, biaya, profil

- Jadwal, kapasitas, biaya, fasilitas, dan jam belajar merupakan contoh, bukan penawaran aktual.
- Semua pengajar dan testimoni menggunakan `isDemo: true` dan penanda terlihat.
- Tidak ada klaim gelar, sertifikasi, jumlah siswa, atau keberhasilan hafalan.
- Link kelas online disampaikan setelah pendaftaran dikonfirmasi; tidak ada integrasi layanan video.

### Ilustrasi

Semua gambar adalah SVG lokal yang dibuat untuk proyek, tanpa gambar rusak atau ketergantungan gambar eksternal:

- `public/images/hero/study-together.svg`: ilustrasi anak laki-laki berpeci dan perempuan berhijab belajar bersama.
- `public/images/programs/*.svg`: delapan ilustrasi program.
- `public/images/teachers/*.svg`: tiga ilustrasi profil contoh.
- `public/images/gallery/*.svg`: enam variasi ilustrasi contoh.
- `public/images/place/learning-center.svg`: ilustrasi tempat belajar contoh.
- `public/favicon.svg`: tanda buku dan bintang.

Ilustrasi pengajar, galeri, serta tempat belajar bukan foto atau representasi identitas/lokasi nyata. Font Plus Jakarta Sans dan Nunito Sans dimuat dari Google Fonts dengan fallback sans-serif.

### Verifikasi konten agama

Bagian kaligrafi sengaja menampilkan **`[QURAN CALLIGRAPHY VERIFIED CONTENT]`**. Teks QS. Taha: 114 dan terjemahan belum dipublikasikan. Ganti hanya setelah diverifikasi oleh pengajar yang kompeten.

Kategori materi berasal dari PRD. Tidak ada penjelasan hukum tajwid, tafsir, hadis, atau ayat yang dikarang. Pengajar perlu memeriksa daftar topik dan menambahkan bahan ajar sebelum digunakan secara operasional. Cek level adalah rekomendasi awal berdasarkan jawaban pengguna, bukan ujian agama atau sertifikasi.

## Hasil verifikasi implementasi

- `npm run build`: berhasil.
- `npm run typecheck`: berhasil tanpa error TypeScript.
- Playwright Chromium: **11 pengujian lulus**.
- Semua **31 URL** dimuat dan dicek pada enam lebar layar: **186 kombinasi route/viewport**, tanpa luapan horizontal halaman. Tabel memiliki area gulir sendiri pada layar kecil.
- Tidak ditemukan error JavaScript atau warning Vue/hydration.
- Pesan WhatsApp diperiksa melalui URL dan teks hasil decoding; tidak ada pesan yang dikirim.
- Screenshot tersedia di `test-results/` setelah pengujian.
- Format Prettier dan `git diff --check`: berhasil.

Pengujian dilakukan pada Chromium lokal. Nomor kontak, data operasional, serta konten agama tetap memerlukan penggantian/verifikasi sebelum peluncuran.
