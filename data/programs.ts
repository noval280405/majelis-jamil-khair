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
export const programs: Program[] = [
  {
    id: 1,
    slug: 'iqra',
    name: 'Belajar Iqra',
    category: 'Iqra',
    level: ['Iqra 1', 'Iqra 2', 'Iqra 3', 'Iqra 4', 'Iqra 5', 'Iqra 6'],
    ageGroup: ['Anak', 'Remaja', 'Dewasa'],
    description:
      'Langkah kecil untuk awal yang berarti. Kenali huruf hijaiyah dan belajar membaca secara bertahap dengan pendampingan yang sabar.',
    shortDescription: 'Mulai dari huruf hijaiyah, satu langkah kecil setiap hari.',
    features: [
      'Huruf Hijaiyah',
      'Harakat',
      'Huruf Sambung',
      'Latihan Membaca',
      'Dasar panjang pendek',
    ],
    image: '/images/programs/iqra.svg',
    accentColor: 'yellow',
    popular: true,
  },
  {
    id: 2,
    slug: 'baca-al-quran',
    name: 'Baca Al-Qur’an',
    category: 'Al-Quran',
    level: ['Dasar', 'Menengah'],
    ageGroup: ['Anak', 'Remaja', 'Dewasa'],
    description:
      'Bangun kebiasaan membaca dengan latihan terarah sesuai kemampuan. Pengajar membantu mengenali bagian bacaan yang perlu dilatih.',
    shortDescription: 'Baca lebih lancar dan percaya diri bersama pendamping.',
    features: [
      'Kelancaran membaca',
      'Makharijul huruf',
      'Panjang pendek',
      'Pengenalan tajwid dasar',
      'Latihan membaca',
    ],
    image: '/images/programs/quran.svg',
    accentColor: 'mint',
  },
  {
    id: 3,
    slug: 'tahsin',
    name: 'Tahsin Al-Qur’an',
    category: 'Tahsin',
    level: ['Pemula', 'Menengah'],
    ageGroup: ['Remaja', 'Dewasa'],
    description:
      'Perbaiki bacaan Al-Qur’an melalui latihan dan evaluasi bersama pengajar. Belajar dengan nyaman, tanpa takut salah.',
    shortDescription: 'Perbaiki pelafalan dan indahkan setiap bacaan.',
    features: [
      'Makharijul Huruf',
      'Sifat Huruf',
      'Kelancaran Membaca',
      'Panjang Pendek',
      'Evaluasi Bacaan',
    ],
    image: '/images/programs/tahsin.svg',
    accentColor: 'mint',
    popular: true,
  },
  {
    id: 4,
    slug: 'tajwid',
    name: 'Belajar Tajwid',
    category: 'Tajwid',
    level: ['Dasar', 'Menengah'],
    ageGroup: ['Remaja', 'Dewasa'],
    description:
      'Pelajari kategori materi tajwid secara bertahap bersama pengajar. Penjelasan dan bahan ajar akan diverifikasi sebelum digunakan.',
    shortDescription: 'Kenali dasar tajwid dengan cara yang mudah diikuti.',
    features: ['Nun mati dan tanwin', 'Mim mati', 'Mad', 'Qalqalah', 'Ikhfa', 'Idgham', 'Iqlab'],
    image: '/images/programs/tajwid.svg',
    accentColor: 'blue',
  },
  {
    id: 5,
    slug: 'tahfidz',
    name: 'Tahfidz Al-Qur’an',
    category: 'Tahfidz',
    level: ['Dasar', 'Menengah', 'Lanjutan'],
    ageGroup: ['Anak', 'Remaja', 'Dewasa'],
    description:
      'Mulai hafalan dengan target yang realistis dan waktu murajaah yang teratur. Target di website merupakan contoh, disesuaikan bersama pengajar.',
    shortDescription: 'Hafalan bertahap, murajaah teratur, hati lebih dekat.',
    features: ['Surat Pendek', 'Juz 30', 'Murajaah', 'Target Hafalan'],
    image: '/images/programs/tahfidz.svg',
    accentColor: 'purple',
  },
  {
    id: 6,
    slug: 'ngaji-anak',
    name: 'Ngaji Anak',
    category: 'Anak',
    level: ['Pemula', 'Dasar'],
    ageGroup: ['Anak'],
    description:
      'Suasana ceria untuk usia 5–7, 8–12, dan remaja awal. Aktivitas interaktif membantu anak menikmati proses belajar.',
    shortDescription: 'Berteman, bermain, dan tumbuh bersama Al-Qur’an.',
    features: ['Pengenalan huruf', 'Latihan membaca', 'Pembiasaan belajar', 'Aktivitas interaktif'],
    image: '/images/programs/anak.svg',
    accentColor: 'pink',
  },
  {
    id: 7,
    slug: 'ngaji-remaja',
    name: 'Ngaji Remaja',
    category: 'Remaja',
    level: ['Pemula', 'Menengah'],
    ageGroup: ['Remaja'],
    description:
      'Ruang belajar yang nyaman untuk remaja, dengan latihan membaca dan kebiasaan belajar yang terarah.',
    shortDescription: 'Ruang bertumbuh dan belajar untuk generasi muda.',
    features: ['Latihan membaca', 'Pendampingan bacaan', 'Jadwal teratur', 'Belajar bersama'],
    image: '/images/programs/remaja.svg',
    accentColor: 'blue',
  },
  {
    id: 8,
    slug: 'ngaji-dewasa',
    name: 'Ngaji Dewasa',
    category: 'Dewasa',
    level: ['Pemula', 'Dasar', 'Menengah'],
    ageGroup: ['Dewasa'],
    description:
      'Tidak Ada Kata Terlambat untuk Belajar. Mulai dari dasar atau perbaiki bacaan di lingkungan yang mendukung, sesuai ritme Anda.',
    shortDescription: 'Tak ada kata terlambat untuk memulai langkah baik.',
    features: ['Belajar dari dasar', 'Memperbaiki bacaan', 'Tahsin', 'Tajwid dasar'],
    image: '/images/programs/dewasa.svg',
    accentColor: 'mint',
  },
]
