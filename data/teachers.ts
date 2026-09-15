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
export const teachers: Teacher[] = [
  {
    id: 1,
    slug: 'ahmad',
    name: 'Kak Ahmad',
    role: 'Pendamping Iqra & Tahsin',
    programs: ['Iqra', 'Tahsin', 'Al-Quran'],
    ageGroups: ['Anak', 'Remaja', 'Dewasa'],
    image: '/images/teachers/ahmad.svg',
    bio: 'Contoh profil pendamping yang mendukung proses belajar bertahap dengan suasana yang tenang dan nyaman.',
    isDemo: true,
  },
  {
    id: 2,
    slug: 'aisyah',
    name: 'Kak Aisyah',
    role: 'Pendamping Ngaji Anak',
    programs: ['Iqra', 'Anak', 'Tahfidz'],
    ageGroups: ['Anak', 'Remaja'],
    image: '/images/teachers/aisyah.svg',
    bio: 'Contoh profil pendamping untuk kegiatan belajar anak yang menyenangkan dan interaktif.',
    isDemo: true,
  },
  {
    id: 3,
    slug: 'salman',
    name: 'Kak Salman',
    role: 'Pendamping Tajwid & Tahfidz',
    programs: ['Tajwid', 'Tahfidz', 'Dewasa', 'Remaja'],
    ageGroups: ['Remaja', 'Dewasa'],
    image: '/images/teachers/salman.svg',
    bio: 'Contoh profil pendamping untuk latihan bacaan dan murajaah dengan target yang disepakati bersama.',
    isDemo: true,
  },
]
