export const placementQuestions = [
  { question: 'Apakah sudah mengenal huruf hijaiyah?', options: ['Sudah', 'Sebagian', 'Belum'] },
  {
    question: 'Apakah sudah dapat membaca huruf hijaiyah yang bersambung?',
    options: ['Ya', 'Sedikit', 'Belum'],
  },
  {
    question: 'Apakah sudah dapat membaca Al-Qur’an?',
    options: ['Lancar', 'Masih terbata-bata', 'Belum'],
  },
  { question: 'Apakah sudah belajar tajwid?', options: ['Sudah', 'Sedikit', 'Belum'] },
  {
    question: 'Apa tujuan belajar?',
    options: [
      'Mulai dari dasar',
      'Memperlancar bacaan',
      'Memperbaiki bacaan',
      'Belajar tajwid',
      'Menghafal',
    ],
  },
]
export function recommendProgram(answers: number[]): string {
  if (answers.length !== 5 || answers.some((a) => a < 0)) return 'iqra'
  if (answers[0] !== 0 || answers[1] !== 0 || answers[2] === 2 || answers[4] === 0) return 'iqra'
  if (answers[2] === 1) return 'baca-al-quran'
  if (answers[4] === 4) return 'tahfidz'
  if (answers[4] === 3) return 'tajwid'
  if (answers[4] === 1) return 'baca-al-quran'
  return 'tahsin'
}
