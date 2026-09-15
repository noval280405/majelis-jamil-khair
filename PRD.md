# PRODUCT REQUIREMENTS DOCUMENT
# SAHABAT NGAJI
## Platform Belajar Al-Qur'an Online & Tatap Muka

---

# 1. INSTRUKSI UTAMA UNTUK CODEX

Bangun website bernama:

# SAHABAT NGAJI

Tagline:

**Belajar Al-Qur'an dengan Ceria, Nyaman, dan Terarah.**

Konsep website:

**Modern Islamic Learning Platform**

Website menyediakan program belajar mengaji dengan dua metode:

1. ONLINE
2. DATANG LANGSUNG KE TEMPAT BELAJAR / TEMPAT PENGAJIAN

PENTING:

Website TIDAK menyediakan layanan guru/ustadz/ustadzah datang ke rumah siswa.

Jangan membuat opsi:

- Home Visit
- Guru Datang ke Rumah
- Ustadz Datang ke Rumah
- Private di rumah siswa

Gunakan wording:

**Belajar Online atau Datang Langsung ke Tempat Belajar.**

---

# 2. TEKNOLOGI

Gunakan:

- Nuxt 3
- Vue 3
- TypeScript
- Tailwind CSS
- Composition API
- `<script setup lang="ts">`
- NuxtLink
- Local TypeScript Data
- Responsive Design
- Mobile First

Gunakan animasi frontend yang ringan.

Prioritaskan:

- CSS animation
- CSS transition
- IntersectionObserver
- Vue transition

Jangan menambahkan library animasi berat jika tidak diperlukan.

Jika project sudah memiliki library animation yang relevan, boleh digunakan.

---

# 3. BATASAN MVP

Jangan membuat:

- Backend
- Firebase
- Supabase
- Database
- Login
- Register Account
- Dashboard Siswa
- Dashboard Pengajar
- Admin Dashboard
- Payment Gateway
- Midtrans
- QRIS
- Live Video Call
- Zoom API
- Google Meet API
- Attendance Database
- Progress Database

Untuk MVP:

- data menggunakan local TypeScript
- pendaftaran melalui WhatsApp
- jadwal merupakan data lokal
- link kelas online merupakan placeholder
- lokasi belajar menggunakan informasi lokal
- placement test hanya frontend

---

# 4. TARGET USER

Target website:

- Anak usia dini
- Anak SD
- Anak SMP
- Remaja
- Dewasa
- Orang tua yang mencari tempat mengaji untuk anak
- Pemula yang baru belajar membaca Al-Qur'an

Website harus ramah anak tetapi tetap terlihat profesional untuk orang tua.

---

# 5. BRAND POSITIONING

Brand:

# SAHABAT NGAJI

Subtitle:

**Islamic Learning Center**

Tagline:

**Belajar Al-Qur'an dengan Ceria, Nyaman, dan Terarah.**

Supporting copy:

**Program belajar membaca Al-Qur'an untuk anak hingga dewasa dengan pilihan kelas online dan tatap muka di tempat belajar.**

---

# 6. VISUAL DIRECTION

Gunakan konsep:

# MODERN COLORFUL ISLAMIC LEARNING

Website harus:

- cerah
- berwarna
- hidup
- modern
- islami
- ramah anak
- profesional
- menyenangkan
- tidak terlihat seperti website pesantren lama

Hindari:

- dominasi warna hijau gelap
- background terlalu gelap
- ornamen terlalu berat
- terlalu banyak gold
- layout kuno
- tulisan Arab terlalu banyak
- animasi yang membuat website lambat

---

# 7. COLOR PALETTE

Gunakan kombinasi warna cerah.

Primary Emerald:

#20A878

Sky Blue:

#4DA8FF

Bright Yellow:

#FFD85A

Coral:

#FF7B72

Purple:

#8B78E6

Soft Mint:

#DDF7EC

Soft Blue:

#E4F3FF

Soft Yellow:

#FFF4C7

Soft Pink:

#FFE4E1

Warm Cream:

#FFFDF5

Dark Text:

#23312D

White:

#FFFFFF

Gunakan warna berbeda untuk kategori program agar website terlihat hidup.

Contoh:

Iqra → Yellow

Tahsin → Emerald

Tajwid → Blue

Tahfidz → Purple

Anak → Coral

Dewasa → Emerald

Jangan menggunakan semua warna dalam satu komponen.

Pertahankan visual hierarchy.

---

# 8. TYPOGRAPHY

Gunakan:

Heading:

**Plus Jakarta Sans**

Body:

**Nunito Sans**

Alternatif:

Gunakan Plus Jakarta Sans untuk seluruh website.

Untuk Arabic text:

gunakan font Arab yang mudah dibaca dan tersedia secara legal melalui web font.

Pastikan teks Arab:

- tidak terpotong
- tidak terlalu kecil
- tidak diberi efek yang mengganggu keterbacaan

---

# 9. ISLAMIC DECORATION

Gunakan elemen visual islami seperti:

- Islamic geometric pattern
- bintang
- bulan sabit secara dekoratif
- arch / mihrab inspired shape
- arabesque pattern
- motif geometris
- lampion islami
- bentuk awan
- sparkle
- book illustration
- Quran stand illustration

Gunakan secara modern dan sederhana.

Jangan membuat desain terlalu penuh.

---

# 10. KALIGRAFI AL-QUR'AN

Tambahkan area kaligrafi yang menarik pada homepage.

Gunakan ayat pendek yang relevan dengan belajar.

Contoh:

وَقُل رَّبِّ زِدْنِي عِلْمًا

Terjemahan:

**"Dan katakanlah: Ya Tuhanku, tambahkanlah kepadaku ilmu."**

QS. Taha: 114

Gunakan sebagai bagian visual yang elegan.

PENTING:

Jika menggunakan teks ayat Al-Qur'an:

- gunakan teks dari sumber terpercaya
- jangan mengubah huruf Arab
- jangan memotong ayat sembarangan
- jangan menggunakan ayat sebagai background yang sulit dibaca
- jangan menempatkan ayat pada bagian footer yang mudah tertutup
- jangan menggunakan ayat sebagai tombol
- jangan menggunakan ayat sebagai dekorasi acak
- pastikan teks diperiksa kembali sebelum production

Jika Codex tidak dapat memastikan teks Arab, gunakan placeholder:

[QURAN CALLIGRAPHY VERIFIED CONTENT]

dan beri komentar bahwa teks harus diverifikasi sebelum website production.

---

# 11. ILUSTRASI ANAK

Website harus memiliki banyak ilustrasi anak Muslim.

Gunakan visual berupa:

## Anak laki-laki

- memakai peci
- baju koko / pakaian mengaji
- membawa Iqra atau buku
- duduk belajar
- mengaji bersama guru

## Anak perempuan

- memakai kerudung / hijab
- pakaian sopan
- membawa Iqra atau buku
- belajar bersama teman

Gaya ilustrasi:

- modern vector
- cheerful
- rounded
- colorful
- friendly
- expressive
- child-safe

Jangan membuat karakter terlalu realistis.

Gunakan sebagai:

- hero illustration
- program cards
- banner
- decorative section
- empty state
- placement test result
- CTA

---

# 12. ANIMATION STYLE

Website harus memiliki banyak animasi tetapi tetap smooth.

Gunakan:

- floating illustration
- floating stars
- floating clouds
- moving Islamic geometric shapes
- book floating
- gentle bouncing
- fade up
- slide up
- scale in
- card hover
- button animation
- section reveal
- number animation
- parallax ringan
- marquee ringan
- character floating
- decorative sparkle

Contoh:

Hero:

anak laki-laki dan perempuan bergerak naik turun perlahan.

Bintang:

bergerak ringan.

Cloud:

bergerak horizontal sangat lambat.

Card:

naik sedikit saat hover.

CTA:

arrow bergerak sedikit saat hover.

Jangan membuat animasi:

- terlalu cepat
- berkedip
- mengganggu membaca
- menyebabkan layout shift

Support:

@media (prefers-reduced-motion: reduce)

Jika reduced motion aktif:

matikan animation non-essential.

---

# 13. ROUTE WEBSITE

Gunakan:

/
├── /program
├── /program/[slug]
├── /kelas
├── /kelas/[slug]
├── /pengajar
├── /pengajar/[slug]
├── /jadwal
├── /online
├── /tatap-muka
├── /cek-level
├── /harga
├── /galeri
├── /tentang
├── /faq
├── /daftar
└── /kontak

---

# 14. PAGE STRUCTURE

pages/
├── index.vue
├── program.vue
├── kelas.vue
├── pengajar.vue
├── jadwal.vue
├── online.vue
├── tatap-muka.vue
├── cek-level.vue
├── harga.vue
├── galeri.vue
├── tentang.vue
├── faq.vue
├── daftar.vue
├── kontak.vue
│
├── program/
│   └── [slug].vue
│
├── kelas/
│   └── [slug].vue
│
└── pengajar/
    └── [slug].vue

---

# 15. COMPONENT STRUCTURE

components/
│
├── layout/
│   ├── Navbar.vue
│   └── Footer.vue
│
├── home/
│   ├── HeroSection.vue
│   ├── FloatingDecorations.vue
│   ├── QuranCalligraphySection.vue
│   ├── LearningModeSection.vue
│   ├── ProgramSection.vue
│   ├── LevelSection.vue
│   ├── WhyUsSection.vue
│   ├── HowItWorks.vue
│   ├── TeacherPreview.vue
│   ├── SchedulePreview.vue
│   ├── PlacementTestPreview.vue
│   ├── GalleryPreview.vue
│   ├── TestimonialSection.vue
│   ├── FAQPreview.vue
│   └── CTASection.vue
│
├── program/
│   ├── ProgramCard.vue
│   ├── ProgramGrid.vue
│   ├── ProgramFilter.vue
│   └── ProgramDetail.vue
│
├── class/
│   ├── ClassCard.vue
│   ├── ClassGrid.vue
│   ├── ClassFilter.vue
│   └── ClassDetail.vue
│
├── teacher/
│   ├── TeacherCard.vue
│   ├── TeacherGrid.vue
│   └── TeacherFilter.vue
│
├── schedule/
│   ├── ScheduleFilter.vue
│   └── ScheduleTable.vue
│
├── placement/
│   ├── PlacementIntro.vue
│   ├── PlacementQuestion.vue
│   ├── PlacementProgress.vue
│   └── PlacementResult.vue
│
├── registration/
│   ├── RegistrationForm.vue
│   └── RegistrationSummary.vue
│
├── gallery/
│   ├── GalleryCard.vue
│   ├── GalleryGrid.vue
│   └── GalleryLightbox.vue
│
└── ui/
    ├── SectionTitle.vue
    ├── PageHero.vue
    ├── PrimaryButton.vue
    ├── ColorBadge.vue
    ├── IslamicPattern.vue
    └── WhatsAppFloating.vue

---

# 16. LOCAL DATA

Gunakan:

data/
├── site.ts
├── programs.ts
├── classes.ts
├── teachers.ts
├── schedules.ts
├── pricing.ts
├── placement.ts
├── gallery.ts
├── testimonials.ts
└── faq.ts

---

# 17. SITE CONFIG

Buat:

```ts
export const siteConfig = {
  name: 'Sahabat Ngaji',

  tagline:
    'Belajar Al-Qur\'an dengan Ceria, Nyaman, dan Terarah.',

  whatsapp: '6281234567890',

  email: 'hello@sahabatngaji.id',

  instagram: '@sahabatngaji',

  address: 'Alamat tempat belajar',

  mapsUrl: '#',

  learningModes: [
    'Online',
    'Tatap Muka di Tempat Belajar',
  ],
}

Nomor, email dan alamat masih placeholder.

Gunakan config untuk seluruh website.

18. NAVBAR

Desktop:

SAHABAT NGAJI

Beranda

Program

Kelas

Pengajar

Jadwal

Online

Tatap Muka

Cek Level

Harga

Tentang

FAQ

[Mulai Belajar]

CTA:

/daftar

Navbar:

sticky
responsive
colorful but clean
active state
mobile hamburger
subtle animation

Logo boleh memiliki simbol:

book
crescent
star
Arabic inspired geometric mark
19. HOMEPAGE FLOW

NAVBAR

↓

HERO

↓

QURAN CALLIGRAPHY

↓

PILIH CARA BELAJAR

↓

PROGRAM NGAJI

↓

BELAJAR SESUAI LEVEL

↓

KENAPA SAHABAT NGAJI

↓

CARA BELAJAR

↓

PENGAJAR

↓

JADWAL

↓

CEK LEVEL NGAJI

↓

GALERI

↓

TESTIMONI

↓

FAQ

↓

FINAL CTA

↓

FOOTER

20. HERO SECTION

Gunakan background:

Warm Cream / Soft Mint.

Tambahkan:

cloud illustration
star
geometric Islamic pattern
decorative circle
floating books

Headline:

Belajar Al-Qur'an
Jadi Lebih Ceria.

Description:

Belajar membaca Al-Qur'an dari dasar hingga lebih lancar bersama pengajar dengan pilihan kelas online atau datang langsung ke tempat belajar.

CTA utama:

Mulai Belajar

→ /daftar

CTA kedua:

Lihat Program

→ /program

Tambahkan badge:

Untuk Anak • Remaja • Dewasa

Hero illustration:

Anak laki-laki memakai:

peci
baju koko

Anak perempuan memakai:

hijab
pakaian Muslim

Keduanya sedang belajar membaca Iqra / Al-Qur'an dengan suasana ceria.

Gunakan floating animation.

21. CALLIGRAPHY SECTION

Gunakan section visual islami.

Judul kecil:

Semangat Menuntut Ilmu

Calligraphy:

وَقُل رَّبِّ زِدْنِي عِلْمًا

QS. Taha: 114

Gunakan bentuk card dengan:

Islamic arch
soft gradient
stars
geometric pattern

Jangan berlebihan.

22. LEARNING MODES

Headline:

Belajar dengan Cara yang Nyaman.

Tampilkan 2 card besar.

ONLINE

Icon:

Laptop / Video

Description:

Belajar dari mana saja melalui kelas online bersama pengajar.

Fitur:

Live Online Class
Jadwal Teratur
Interaktif
Cocok untuk siswa luar daerah

CTA:

Lihat Kelas Online

→ /online

TATAP MUKA

Icon:

Mosque / Learning Center

Description:

Datang langsung ke tempat belajar dan mengaji bersama pengajar.

Fitur:

Belajar langsung
Suasana belajar bersama
Pendampingan pengajar
Jadwal tersedia

CTA:

Lihat Tempat Belajar

→ /tatap-muka

23. IMPORTANT HOME VISIT RULE

Tampilkan informasi di halaman:

/tatap-muka

Gunakan:

Kelas tatap muka dilaksanakan di lokasi belajar Sahabat Ngaji.

Tambahkan:

Kami belum menyediakan layanan pengajar datang ke rumah.

Jangan membuat:

Home Visit
Private Home
Teacher Visit
24. PROGRAMS

Program utama:

Belajar Iqra
Baca Al-Qur'an
Tahsin
Tajwid
Tahfidz
Ngaji Anak
Ngaji Remaja
Ngaji Dewasa
25. PROGRAM IQRA

Slug:

/program/iqra

Level:

Iqra 1
Iqra 2
Iqra 3
Iqra 4
Iqra 5
Iqra 6

Materi:

Huruf Hijaiyah
Harakat
Huruf Sambung
Latihan Membaca
Dasar panjang pendek
26. BACA AL-QUR'AN

Slug:

/program/baca-al-quran

Materi:

kelancaran membaca
makharijul huruf
panjang pendek
pengenalan tajwid dasar
latihan membaca
27. TAHSIN

Slug:

/program/tahsin

Materi:

Makharijul Huruf
Sifat Huruf
Kelancaran Membaca
Panjang Pendek
Evaluasi Bacaan
28. TAJWID

Slug:

/program/tajwid

Materi dapat menampilkan kategori:

Nun mati dan tanwin
Mim mati
Mad
Qalqalah
Ikhfa
Idgham
Iqlab

PENTING:

Materi agama harus diverifikasi sebelum production.

Jangan menambahkan penjelasan agama kompleks jika belum memiliki sumber terpercaya.

29. TAHFIDZ

Slug:

/program/tahfidz

Program:

Surat Pendek
Juz 30
Murajaah
Target Hafalan

Gunakan sistem target sebagai tampilan UI saja.

Tidak perlu database progress.

30. NGAJI ANAK

Slug:

/program/ngaji-anak

Segment:

Usia 5–7
Usia 8–12
Remaja awal

Fokus:

membaca
pengenalan huruf
latihan
pembiasaan belajar
aktivitas interaktif

Gunakan ilustrasi paling colorful pada program ini.

31. NGAJI DEWASA

Slug:

/program/ngaji-dewasa

Headline:

Tidak Ada Kata Terlambat untuk Belajar.

Fokus:

pemula
belajar dari dasar
memperbaiki bacaan
tahsin
tajwid dasar

Gunakan desain lebih dewasa tetapi tetap senada.

32. PROGRAM INTERFACE
export interface Program {
  id: number
  slug: string
  name: string
  category: string
  level: string[]
  ageGroup: string[]
  description: string
  shortDescription: string
  features: string[]
  image: string
  accentColor: string
  popular?: boolean
}
33. PROGRAM PAGE

Route:

/program

Headline:

Temukan Program Belajar yang Tepat.

Filter:

Semua
Anak
Remaja
Dewasa
Iqra
Tahsin
Tajwid
Tahfidz

Search:

Cari program...

Gunakan computed filtering.

34. PROGRAM CARD

Contoh:

TAHSIN

Perbaiki Bacaan Al-Qur'an

Belajar makharijul huruf, panjang pendek dan meningkatkan kelancaran membaca.

Level:

Pemula – Menengah

[Pelajari Program]

35. CLASS SYSTEM

Route:

/kelas

Tampilkan kelas tersedia.

Filter:

Program
Level
Usia
Metode
Hari

Learning mode:

Online
Tatap Muka

Tidak ada:

Home Visit
36. CLASS INTERFACE
export interface QuranClass {
  id: number
  slug: string
  name: string
  programSlug: string
  ageGroup: string
  level: string

  mode:
    | 'Online'
    | 'Tatap Muka'

  schedule: string

  durationMinutes: number

  capacity: number

  price: number

  teacherId: number

  description: string
}
37. CLASS CARD

Contoh:

TAHSIN DASAR

Dewasa

Online

Selasa & Kamis

19:30 – 20:30

8 peserta

Rp350.000 / bulan

[Lihat Kelas]

38. ONLINE PAGE

Route:

/online

Headline:

Ngaji Online dari Mana Saja.

Description:

Belajar bersama pengajar secara online dengan jadwal terstruktur.

Tampilkan:

kelas online
jadwal
program
pengajar
perangkat yang dibutuhkan
cara bergabung

Perangkat:

Smartphone / Laptop
Internet
Earphone opsional
Buku Iqra / Al-Qur'an sesuai program

Tidak perlu integrasi Zoom API.

Jika link belum tersedia:

gunakan placeholder:

Link kelas diberikan setelah pendaftaran dikonfirmasi.

39. TATAP MUKA PAGE

Route:

/tatap-muka

Headline:

Belajar Langsung di Tempat Ngaji.

Description:

Nikmati suasana belajar bersama dengan pendampingan pengajar secara langsung.

Tampilkan:

foto tempat
alamat
fasilitas
jadwal
map
program
kelas

Fasilitas contoh:

Ruang belajar
Area tunggu orang tua
Mushaf / media belajar
Tempat wudhu
Ruang nyaman

Hanya tampilkan fasilitas yang benar-benar tersedia saat website digunakan secara nyata.

Gunakan placeholder pada portfolio.

PENTING:

Tampilkan banner:

Tatap muka dilakukan di tempat belajar. Tidak tersedia layanan guru datang ke rumah.

40. TEACHER PAGE

Route:

/pengajar

Headline:

Belajar Bersama Pengajar yang Membimbing dengan Sabar.

Filter:

Anak
Remaja
Dewasa
Iqra
Tahsin
Tahfidz
41. TEACHER INTERFACE
export interface Teacher {
  id: number
  slug: string
  name: string
  role: string
  programs: string[]
  ageGroups: string[]
  image: string
  bio: string
  isDemo?: boolean
}

Jangan membuat:

gelar palsu
sertifikasi palsu
jumlah murid palsu
hafalan palsu

Jika data masih dummy:

isDemo: true

42. SCHEDULE PAGE

Route:

/jadwal

Filter:

Online
Tatap Muka
Program
Usia
Hari

Contoh:

Senin

Iqra Anak

16:00 – 17:00

Tatap Muka

Selasa

Tahsin Dewasa

19:30 – 20:30

Online

Rabu

Tahfidz Anak

16:00 – 17:00

Tatap Muka

43. PLACEMENT TEST

Route:

/cek-level

Headline:

Sudah Tahu Level Ngajimu?

Description:

Jawab beberapa pertanyaan sederhana untuk mendapatkan rekomendasi program belajar.

Ini bukan ujian agama.

Hanya self-assessment frontend.

44. PLACEMENT QUESTIONS

Contoh:

1

Apakah sudah mengenal huruf hijaiyah?

Sudah
Sebagian
Belum
2

Apakah sudah dapat membaca huruf hijaiyah yang bersambung?

Ya
Sedikit
Belum
3

Apakah sudah dapat membaca Al-Qur'an?

Lancar
Masih terbata-bata
Belum
4

Apakah sudah belajar tajwid?

Sudah
Sedikit
Belum
5

Apa tujuan belajar?

Mulai dari dasar
Memperlancar bacaan
Memperbaiki bacaan
Belajar tajwid
Menghafal
45. PLACEMENT RESULT

Contoh:

Rekomendasi Programmu

TAHSIN DASAR

Fokus:

Kelancaran membaca
Makharijul Huruf
Panjang Pendek
Tajwid Dasar

[LIHAT PROGRAM]

[DAFTAR SEKARANG]

Tambahkan ilustrasi anak / pelajar yang ceria.

46. PRICING PAGE

Route:

/harga

Gunakan data dummy.

Contoh:

KELAS KELOMPOK

Mulai:

Rp250.000 / bulan

Fitur:

Jadwal tetap
Kelompok kecil
Materi sesuai program
Online / Tatap Muka
KELAS ONLINE

Mulai:

Rp250.000 / bulan

KELAS TATAP MUKA

Mulai:

Rp300.000 / bulan

PRIVATE ONLINE

Mulai:

Rp100.000 / pertemuan

PENTING:

Private hanya ONLINE.

Jangan membuat:

Private di rumah.

47. REGISTRATION PAGE

Route:

/daftar

Headline:

Yuk Mulai Belajar.

Form:

Nama siswa
Usia
Nomor WhatsApp
Program
Level
Metode belajar
Hari pilihan
Catatan

Metode:

Online
Tatap Muka

Tidak ada:

Home Visit
48. WHATSAPP REGISTRATION

Saat form submit:

Generate WhatsApp message.

Contoh:

Halo Sahabat Ngaji,

Saya ingin mendaftar program belajar mengaji.

Nama:
...

Usia:
...

Program:
Tahsin

Metode:
Tatap Muka

Hari Pilihan:
Sabtu

Catatan:
...

Mohon informasi kelas yang tersedia.

Gunakan:

encodeURIComponent()

49. GALLERY PAGE

Route:

/galeri

Kategori:

Kegiatan Belajar
Kelas Anak
Kelas Online
Kelas Tatap Muka
Aktivitas
Tempat Belajar

Gunakan masonry/grid modern.

Tambahkan lightbox.

Jika foto asli belum tersedia:

gunakan placeholder ilustrasi.

50. WHY US

Tampilkan:

Belajar Bertahap

Program sesuai kemampuan.

Ramah Anak

Suasana belajar yang menyenangkan.

Anak hingga Dewasa

Program untuk berbagai usia.

Online & Tatap Muka

Pilih metode belajar.

Pengajar Pendamping

Belajar bersama pengajar.

Jadwal Terstruktur

Pilihan kelas berdasarkan jadwal.

51. ABOUT PAGE

Route:

/tentang

Headline:

Belajar Al-Qur'an dalam Suasana yang Menyenangkan.

Description:

Sahabat Ngaji hadir sebagai tempat belajar Al-Qur'an untuk membantu anak, remaja dan dewasa belajar secara bertahap melalui kelas online maupun tatap muka.

Mission:

memberikan pengalaman belajar menyenangkan
membantu siswa belajar sesuai level
menyediakan program untuk berbagai usia
mempermudah akses belajar melalui online
menyediakan lingkungan tatap muka yang nyaman
52. TESTIMONIALS

Gunakan placeholder demo.

Contoh:

"Anak saya jadi lebih semangat belajar Iqra karena kelasnya menyenangkan."

— Orang Tua Siswa

Tambahkan:

isDemo: true

Jangan tampilkan sebagai testimoni nyata jika belum memiliki customer.

53. FAQ

FAQ:

Apakah bisa belajar online?

Ya. Tersedia program online.

Apakah tersedia kelas tatap muka?

Ya. Siswa dapat datang langsung ke tempat belajar.

Apakah guru bisa datang ke rumah?

Tidak. Untuk saat ini pembelajaran tersedia secara online atau datang langsung ke tempat belajar.

Apakah ada kelas anak?

Ya.

Apakah orang dewasa dapat belajar dari nol?

Ya.

Bagaimana mengetahui level belajar?

Gunakan fitur Cek Level atau konsultasikan melalui WhatsApp.

Apakah tersedia private?

Private dapat tersedia secara online sesuai jadwal pengajar.

Bagaimana cara mendaftar?

Isi form pendaftaran kemudian konfirmasi melalui WhatsApp.

54. CONTACT PAGE

Route:

/kontak

Tampilkan:

WhatsApp
Email
Instagram
Alamat tempat belajar
Jam belajar
Map

Form:

Nama
WhatsApp
Pertanyaan

Submit ke WhatsApp.

55. FLOATING WHATSAPP

Tampilkan di seluruh halaman.

Message:

Assalamu'alaikum Sahabat Ngaji, saya ingin bertanya mengenai program belajar mengaji.

56. FINAL CTA

Gunakan section colorful.

Headline:

Yuk Mulai Perjalanan Belajar Al-Qur'an.

Description:

Pilih program yang sesuai dan mulai belajar secara online atau datang langsung ke tempat belajar.

Buttons:

[Mulai Belajar]

[Chat WhatsApp]

Tambahkan ilustrasi anak laki-laki memakai peci dan anak perempuan berhijab.

57. FOOTER

SAHABAT NGAJI

Belajar Al-Qur'an dengan Ceria, Nyaman, dan Terarah.

Menu:

Program
Kelas
Pengajar
Jadwal
Online
Tatap Muka
Harga
Tentang
FAQ
Kontak

Program:

Iqra
Tahsin
Tajwid
Tahfidz
Anak
Dewasa

Contact:

WhatsApp
Instagram
Email
Lokasi

Copyright:

© 2026 Sahabat Ngaji.
All rights reserved.

58. RESPONSIVE DESIGN

Test:

360px
390px
768px
1024px
1280px
1440px

Mobile:

navbar hamburger
hero 1 column
illustrations responsive
cards 1–2 columns
CTA besar
form 1 column
no horizontal scroll
animation tidak mengganggu

Tablet:

2 column cards

Desktop:

hero 2 columns
3–4 program cards
large illustrations
decorative background elements
59. SEO

Gunakan:

useSeoMeta()

Homepage title:

Sahabat Ngaji | Belajar Mengaji Online & Tatap Muka

Description:

Program belajar membaca Al-Qur'an untuk anak, remaja dan dewasa dengan kelas online serta tatap muka di tempat belajar.

Program:

Program Belajar Mengaji | Sahabat Ngaji

Online:

Belajar Mengaji Online | Sahabat Ngaji

Tatap Muka:

Tempat Belajar Mengaji | Sahabat Ngaji

Tahsin:

Kelas Tahsin Al-Qur'an | Sahabat Ngaji

Iqra:

Belajar Iqra untuk Anak | Sahabat Ngaji

Dewasa:

Belajar Mengaji untuk Dewasa | Sahabat Ngaji

60. SEO KEYWORDS

Gunakan secara natural:

belajar mengaji
belajar Al-Qur'an
belajar Iqra
ngaji online
kelas mengaji
tempat mengaji
mengaji anak
mengaji dewasa
kelas tahsin
belajar tajwid
tahfidz
belajar membaca Al-Qur'an

Keyword lokasi hanya ditambahkan jika lokasi asli sudah diketahui.

61. IMAGE STRUCTURE

public/images/
├── hero/
├── illustrations/
│ ├── children/
│ ├── teachers/
│ ├── books/
│ └── islamic/
│
├── programs/
├── teachers/
├── gallery/
├── place/
└── general/

62. PLACEHOLDER ILLUSTRATIONS

Jika illustration asset belum tersedia:

gunakan placeholder dengan nama yang jelas.

Contoh:

/images/illustrations/children/boy-quran.png

/images/illustrations/children/girl-quran.png

/images/illustrations/children/study-group.png

Jangan menampilkan broken image.

63. ACCESSIBILITY

Pastikan:

alt pada image
Arabic text readable
color contrast cukup
button memiliki focus state
form memiliki label
keyboard navigation
aria-label pada icon button
animation dapat dikurangi
64. PERFORMANCE

Walaupun animasi cukup banyak:

website harus tetap cepat.

Gunakan:

CSS animation
lazy load images
transform
opacity
IntersectionObserver

Hindari animasi:

width
height
top
left

jika dapat diganti dengan transform.

Jangan menggunakan terlalu banyak image resolusi besar.

65. REQUIRED FEATURES

Wajib dibuat:

Homepage
Responsive Navbar
Bright Islamic UI
Animated Hero
Child Muslim Illustrations
Quran Calligraphy Section
Online Learning Page
Tatap Muka Page
No Home Visit
Program Catalogue
Program Filtering
Program Dynamic Detail
Classes
Class Filtering
Teachers
Schedule
Placement Test
Placement Result
Pricing
Registration
WhatsApp Registration
Gallery
About
FAQ
Contact
Floating WhatsApp
SEO
Responsive Design
Animations
Reduced Motion Support
66. DO NOT BUILD

Jangan membuat:

home visit
teacher visit
backend
database
login
register account
admin dashboard
payment gateway
live video
realtime chat
attendance database
student progress database
67. CONTENT SAFETY & RELIGIOUS ACCURACY

Karena website berkaitan dengan Al-Qur'an:

Jangan membuat atau mengarang:

ayat
hadis
hukum tajwid
tafsir
materi agama

Jika konten belum terverifikasi:

gunakan placeholder.

Contoh:

[MATERI TAJWID - PERLU VERIFIKASI PENGAJAR]

Semua materi agama harus diperiksa oleh pengajar yang kompeten sebelum production.

68. HOMEPAGE FINAL FLOW

NAVBAR

↓

[ANIMATED CHILD ILLUSTRATION]

BELAJAR AL-QUR'AN
JADI LEBIH CERIA.

Belajar membaca Al-Qur'an dari dasar
hingga lebih lancar bersama pengajar.

[Mulai Belajar]
[Lihat Program]

↓

QURAN CALLIGRAPHY

وَقُل رَّبِّ زِدْنِي عِلْمًا

↓

PILIH CARA BELAJAR

ONLINE

TATAP MUKA

↓

PROGRAM NGAJI

IQRA
AL-QUR'AN
TAHSIN
TAJWID
TAHFIDZ
ANAK
DEWASA

↓

BELAJAR SESUAI LEVELMU

PEMULA
DASAR
MENENGAH
LANJUTAN

↓

KENAPA SAHABAT NGAJI

↓

CARA BELAJAR

↓

PENGAJAR

↓

JADWAL KELAS

↓

BELUM TAHU LEVELMU?

[CEK LEVEL NGAJI]

↓

GALERI

↓

TESTIMONI

↓

FAQ

↓

YUK MULAI
BELAJAR AL-QUR'AN

[DAFTAR SEKARANG]

↓

FOOTER

69. PRIORITY

P0:

Navbar
Homepage
Hero
Illustration
Animation
Program
Online
Tatap Muka
Registration
WhatsApp
Responsive

P1:

Classes
Teachers
Schedule
Pricing
Placement Test
Gallery

P2:

Calligraphy polishing
Advanced animations
SEO
FAQ
About
UI polishing
70. ACCEPTANCE CRITERIA

Website dianggap selesai jika:

seluruh route berjalan
homepage selesai
UI colorful dan modern
child illustrations tampil
animation smooth
calligraphy section tampil
program filter bekerja
program dynamic route bekerja
class filter bekerja
teacher pages bekerja
placement test bekerja
placement result bekerja
registration form bekerja
WhatsApp message benar
online page bekerja
tatap muka page bekerja
tidak ada home visit
responsive seluruh breakpoint
tidak ada horizontal scroll
tidak ada broken images
tidak ada TypeScript error
tidak ada Vue warning penting
npm run build berhasil
71. FINAL INSTRUCTION FOR CODEX

Baca seluruh PRD.md sampai selesai sebelum mulai implementasi.

Bangun seluruh website SAHABAT NGAJI sesuai requirement.

Kerjakan langsung pada source code project.

Jangan hanya memberikan contoh code.

Jangan hanya membuat homepage.

Gunakan:

Nuxt 3
Vue 3
TypeScript
Tailwind CSS

Implementasikan:

seluruh pages
seluruh components
local TypeScript data
animated homepage
bright colorful Islamic UI
child Muslim illustrations
Quran calligraphy section
program catalogue
program filter
dynamic routes
classes
teachers
schedules
online learning
tatap muka learning
placement test
placement result
pricing
gallery
registration
WhatsApp
FAQ
contact
SEO
responsive design

PENTING:

Pembelajaran hanya:

ONLINE
DATANG KE TEMPAT BELAJAR

JANGAN membuat layanan guru datang ke rumah.

Jika illustration belum tersedia:

buat layout dan placeholder asset yang profesional serta mudah diganti.

Jika konten agama belum terverifikasi:

gunakan placeholder dan jangan mengarang ayat, hadis atau hukum agama.

Pastikan website memiliki banyak animasi tetapi tetap cepat dan nyaman digunakan.

Gunakan reduced motion untuk accessibility.

Setelah selesai:

Jalankan project.
Periksa browser console.
Cek seluruh route.
Cek mobile navigation.
Cek program filter.
Cek dynamic routes.
Cek placement test.
Cek registration.
Cek WhatsApp.
Cek responsive.
Jalankan npm run build.
Perbaiki seluruh error sampai build berhasil.

Terakhir berikan ringkasan:

file yang dibuat
file yang diubah
pages yang selesai
components yang dibuat
fitur yang selesai
hasil build
placeholder image
placeholder contact
konten agama yang masih perlu diverifikasi

Setelah kamu simpan sebagai **`PRD.md`**, cukup kirim prompt pendek ini ke Codex:

```text
Baca file PRD.md sampai selesai lalu implementasikan seluruh website sesuai semua requirement di dalamnya.

Kerjakan langsung pada source code project ini dan jangan berhenti hanya di homepage.

Setelah seluruh implementasi selesai, jalankan npm run build dan perbaiki semua error sampai build

nama pengajianya dan projek nya adalaha "Majelis Jamil Khair"