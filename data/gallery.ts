export const galleryCategories = [
  'Kegiatan Belajar',
  'Kelas Anak',
  'Kelas Online',
  'Kelas Tatap Muka',
  'Aktivitas',
  'Tempat Belajar',
]
export const gallery = galleryCategories.map((category, index) => ({
  id: index + 1,
  title: [
    'Setiap huruf, sebuah langkah',
    'Belajar bersama sahabat',
    'Terhubung dari mana saja',
    'Hangatnya belajar bersama',
    'Waktu membaca yang ceria',
    'Ruang untuk bertumbuh',
  ][index]!,
  category,
  image: `/images/gallery/scene-${index + 1}.svg`,
  isDemo: true,
}))
export type GalleryItem = (typeof gallery)[number]
