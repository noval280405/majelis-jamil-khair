export const siteConfig = {
  name: 'Majelis Jamil Khair',
  subtitle: 'Islamic Learning Center',
  tagline: "Belajar Al-Qur'an dengan Ceria, Nyaman, dan Terarah.",
  whatsapp: '6281234567890',
  email: 'hello@example.com',
  instagram: '@username',
  address: 'Alamat tempat belajar akan diinformasikan oleh pengelola.',
  mapsUrl: '',
  isDemo: true,
  learningModes: ['Online', 'Tatap Muka di Tempat Belajar'],
}
export const navigation = [
  ['Beranda', '/'],
  ['Program', '/program'],
  ['Kelas', '/kelas'],
  ['Pengajar', '/pengajar'],
  ['Jadwal', '/jadwal'],
  ['Online', '/online'],
  ['Tatap Muka', '/tatap-muka'],
  ['Cek Level', '/cek-level'],
  ['Harga', '/harga'],
  ['Tentang', '/tentang'],
  ['FAQ', '/faq'],
]
export const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']
export const rupiah = (value: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value)
export const whatsappUrl = (message: string) =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
