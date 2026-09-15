export interface QuranClass {
  id: number
  slug: string
  name: string
  programSlug: string
  ageGroup: string
  level: string
  mode: 'Online' | 'Tatap Muka'
  schedule: string
  days: string[]
  time: string
  durationMinutes: number
  capacity: number
  price: number
  teacherId: number
  description: string
}
export const classes: QuranClass[] = [
  {
    id: 1,
    slug: 'iqra-anak-sore',
    name: 'Iqra Anak Ceria',
    programSlug: 'iqra',
    ageGroup: 'Anak',
    level: 'Iqra 1',
    mode: 'Tatap Muka',
    schedule: 'Senin & Rabu',
    days: ['Senin', 'Rabu'],
    time: '16:00–17:00',
    durationMinutes: 60,
    capacity: 8,
    price: 300000,
    teacherId: 2,
    description: 'Belajar mengenal huruf bersama teman-teman di tempat belajar.',
  },
  {
    id: 2,
    slug: 'tahsin-dewasa-online',
    name: 'Tahsin Dasar Dewasa',
    programSlug: 'tahsin',
    ageGroup: 'Dewasa',
    level: 'Pemula',
    mode: 'Online',
    schedule: 'Selasa & Kamis',
    days: ['Selasa', 'Kamis'],
    time: '19:30–20:30',
    durationMinutes: 60,
    capacity: 8,
    price: 350000,
    teacherId: 1,
    description: 'Latihan memperbaiki bacaan setelah aktivitas harian melalui kelas online.',
  },
  {
    id: 3,
    slug: 'tahfidz-anak',
    name: 'Tahfidz Anak',
    programSlug: 'tahfidz',
    ageGroup: 'Anak',
    level: 'Dasar',
    mode: 'Tatap Muka',
    schedule: 'Rabu & Jumat',
    days: ['Rabu', 'Jumat'],
    time: '16:00–17:00',
    durationMinutes: 60,
    capacity: 8,
    price: 300000,
    teacherId: 2,
    description: 'Mulai menghafal surat pendek secara bertahap dan murajaah bersama.',
  },
  {
    id: 4,
    slug: 'tajwid-remaja',
    name: 'Tajwid Remaja',
    programSlug: 'tajwid',
    ageGroup: 'Remaja',
    level: 'Dasar',
    mode: 'Online',
    schedule: 'Sabtu',
    days: ['Sabtu'],
    time: '09:00–10:00',
    durationMinutes: 60,
    capacity: 6,
    price: 250000,
    teacherId: 3,
    description: 'Kenali kategori tajwid melalui pendampingan pengajar.',
  },
  {
    id: 5,
    slug: 'iqra-dewasa-online',
    name: 'Iqra Dewasa Pemula',
    programSlug: 'ngaji-dewasa',
    ageGroup: 'Dewasa',
    level: 'Pemula',
    mode: 'Online',
    schedule: 'Senin & Jumat',
    days: ['Senin', 'Jumat'],
    time: '20:00–21:00',
    durationMinutes: 60,
    capacity: 6,
    price: 250000,
    teacherId: 1,
    description: 'Mulai belajar dari dasar dengan ritme yang nyaman.',
  },
  {
    id: 6,
    slug: 'quran-remaja',
    name: 'Baca Al-Qur’an Remaja',
    programSlug: 'baca-al-quran',
    ageGroup: 'Remaja',
    level: 'Menengah',
    mode: 'Tatap Muka',
    schedule: 'Minggu',
    days: ['Minggu'],
    time: '08:00–09:00',
    durationMinutes: 60,
    capacity: 8,
    price: 300000,
    teacherId: 1,
    description: 'Bangun kelancaran membaca dengan latihan rutin di tempat belajar.',
  },
]
