import { test, expect } from '@playwright/test'
import { programs } from '../data/programs'
import { classes } from '../data/classes'
import { teachers } from '../data/teachers'
import { recommendProgram } from '../data/placement'

const routes = [
  '/',
  '/program',
  '/kelas',
  '/pengajar',
  '/jadwal',
  '/online',
  '/tatap-muka',
  '/cek-level',
  '/harga',
  '/galeri',
  '/tentang',
  '/faq',
  '/daftar',
  '/kontak',
  ...programs.map((p) => `/program/${p.slug}`),
  ...classes.map((c) => `/kelas/${c.slug}`),
  ...teachers.map((t) => `/pengajar/${t.slug}`),
]

test.beforeEach(async ({ page }) => {
  // Tests must also work offline; fonts have local system fallbacks.
  await page.route('https://fonts.googleapis.com/**', (route) => route.abort())
  await page.route('https://fonts.gstatic.com/**', (route) => route.abort())
})

test('all 31 routes render, include SEO and valid images, without Vue errors', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (
      (message.type() === 'warning' && /Vue|hydration|component/i.test(message.text())) ||
      (message.type() === 'error' && !/net::ERR_FAILED/.test(message.text()))
    )
      errors.push(message.text())
  })
  for (const route of routes) {
    const response = await page.goto(route)
    expect(response?.status(), route).toBe(200)
    await expect(page.locator('main h1'), route).toHaveCount(1)
    await expect(page).toHaveTitle(/Majelis Jamil Khair/)
    expect(await page.locator('meta[name="description"]').getAttribute('content')).toBeTruthy()
    const images = await page
      .locator('main img')
      .evaluateAll((imgs) => imgs.map((img) => (img as HTMLImageElement).src))
    for (const src of [...new Set(images)])
      expect((await page.request.get(src)).status(), src).toBe(200)
    await expect(page.locator('body')).not.toContainText('Sahabat Ngaji')
  }
  expect(errors).toEqual([])
})

test('all routes fit six requested viewport widths', async ({ page }) => {
  test.setTimeout(180000)
  for (const width of [360, 390, 768, 1024, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    for (const route of routes) {
      await page.goto(route)
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      )
      expect(overflow, `${route} at ${width}px`).toBe(false)
    }
  }
})

test('program search, category filters, empty state and client-side details', async ({ page }) => {
  await page.goto('/program')
  await expect(page.locator('.program-card')).toHaveCount(8)
  await page.getByRole('button', { name: 'Anak', exact: true }).click()
  await expect(page.locator('.program-card')).toHaveCount(4)
  await page.getByRole('button', { name: 'Tahsin', exact: true }).click()
  await expect(page.locator('.program-card')).toHaveCount(1)
  await page.getByRole('searchbox', { name: 'Cari program' }).fill('tidak-ditemukan')
  await expect(page.getByText('Belum ada yang cocok')).toBeVisible()
  await page.getByRole('searchbox', { name: 'Cari program' }).fill('tahsin')
  await page.locator('.program-card h3 a').click()
  await expect(page).toHaveURL(/\/program\/tahsin$/)
  await expect(page.locator('h1')).toHaveText('Tahsin Al-Qur’an')
})

test('class and schedule filters combine and reset', async ({ page }) => {
  await page.goto('/kelas')
  await page.getByLabel('Metode', { exact: true }).selectOption('Online')
  await expect(page.locator('.class-card')).toHaveCount(3)
  await page.getByLabel('Usia', { exact: true }).selectOption('Dewasa')
  await expect(page.locator('.class-card')).toHaveCount(2)
  await page.getByLabel('Hari', { exact: true }).selectOption('Selasa')
  await expect(page.locator('.class-card')).toHaveCount(1)
  await page.getByLabel('Program', { exact: true }).selectOption('iqra')
  await expect(page.getByText('Belum ada yang cocok')).toBeVisible()
  await page.getByRole('button', { name: 'Reset filter' }).click()
  await expect(page.locator('.class-card')).toHaveCount(6)
  await page.goto('/jadwal')
  await page.getByLabel('Hari', { exact: true }).selectOption('Rabu')
  await expect(page.locator('tbody tr')).toHaveCount(2)
  await page.getByLabel('Metode', { exact: true }).selectOption('Online')
  await expect(page.getByText('Belum ada yang cocok')).toBeVisible()
})

test('teacher filters, gallery modal focus and FAQ', async ({ page }) => {
  await page.goto('/pengajar')
  await page.getByRole('button', { name: 'Tahsin', exact: true }).click()
  await expect(page.locator('.teacher-card')).toHaveCount(1)
  await page.goto('/galeri')
  await page.getByRole('button', { name: 'Kelas Online', exact: true }).click()
  await expect(page.locator('.gallery-card')).toHaveCount(1)
  await page.locator('.gallery-card').click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.keyboard.press('Tab')
  await expect(page.getByRole('button', { name: 'Tutup ilustrasi' })).toBeFocused()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(page.locator('.gallery-card')).toBeFocused()
  await page.goto('/faq')
  await page.getByRole('searchbox', { name: 'Cari pertanyaan' }).fill('guru bisa')
  await expect(page.locator('.faq-list details')).toHaveCount(1)
  await page.locator('.faq-list summary').click()
  await expect(page.locator('.faq-list p')).toContainText('Tidak.')
})

test('placement gates progress, remembers back navigation, gives results and restarts', async ({
  page,
}) => {
  await page.goto('/cek-level')
  await page.getByRole('button', { name: 'Mulai cek level' }).click()
  await expect(page.getByRole('button', { name: 'Selanjutnya' })).toBeDisabled()
  await page.getByRole('radio', { name: 'Sudah', exact: true }).check()
  await page.getByRole('button', { name: 'Selanjutnya' }).click()
  await page.getByRole('radio', { name: 'Ya', exact: true }).check()
  await page.getByRole('button', { name: 'Sebelumnya' }).click()
  await expect(page.getByRole('radio', { name: 'Sudah', exact: true })).toBeChecked()
  await page.getByRole('button', { name: 'Selanjutnya' }).click()
  await expect(page.getByRole('radio', { name: 'Ya', exact: true })).toBeChecked()
  await page.getByRole('button', { name: 'Selanjutnya' }).click()
  await page.getByRole('radio', { name: 'Lancar', exact: true }).check()
  await page.getByRole('button', { name: 'Selanjutnya' }).click()
  await page.getByRole('radio', { name: 'Sedikit', exact: true }).check()
  await page.getByRole('button', { name: 'Selanjutnya' }).click()
  await page.getByRole('radio', { name: 'Memperbaiki bacaan', exact: true }).check()
  await page.getByRole('button', { name: 'Lihat rekomendasi' }).click()
  await expect(page.locator('.placement-result h2')).toHaveText('Tahsin Al-Qur’an')
  await expect(page.getByRole('link', { name: 'Daftar sekarang' })).toHaveAttribute(
    'href',
    '/daftar?program=tahsin',
  )
  await page.getByRole('button', { name: 'Ulangi cek level' }).click()
  await expect(page.getByRole('button', { name: 'Mulai cek level' })).toBeVisible()
  expect(recommendProgram([2, 2, 2, 2, 4])).toBe('iqra')
  expect(recommendProgram([0, 0, 1, 1, 4])).toBe('baca-al-quran')
  expect(recommendProgram([0, 0, 0, 0, 4])).toBe('tahfidz')
  expect(recommendProgram([0, 0, 0, 0, 3])).toBe('tajwid')
})

test('class choice prefills registration; validation and WhatsApp encode all fields', async ({
  page,
}) => {
  await page.goto('/kelas/tahsin-dewasa-online')
  await page.getByRole('link', { name: 'Pilih kelas ini' }).click()
  await expect(page.getByLabel('Program', { exact: false }).first()).toHaveValue('tahsin')
  await expect(page.getByLabel('Metode belajar')).toHaveValue('Online')
  await expect(page.getByLabel('Level', { exact: true })).toHaveValue('Pemula')
  await expect(page.getByLabel('Hari pilihan')).toHaveValue('Selasa')
  await page.getByRole('button', { name: 'Periksa pendaftaran' }).click()
  await expect(page.locator('#registration-confirm')).toHaveCount(0)
  await page.getByLabel('Nama siswa').fill('Aisyah & Ali')
  await page.getByLabel('Usia', { exact: false }).fill('12')
  await page.getByLabel('Nomor WhatsApp').fill('081234567890')
  await page.getByLabel('Catatan').fill('Sabtu?\nWaktu: 09:00 & 10:00')
  await page.getByRole('button', { name: 'Periksa pendaftaran' }).click()
  const href = await page.getByRole('link', { name: 'Lanjut ke WhatsApp' }).getAttribute('href')
  const url = new URL(href!)
  expect(url.origin).toBe('https://wa.me')
  const message = url.searchParams.get('text')!
  for (const value of [
    'Aisyah & Ali',
    'Usia: 12 tahun',
    '081234567890',
    'Tahsin Al-Qur’an',
    'Level: Pemula',
    'Metode: Online',
    'Hari Pilihan: Selasa',
    'Sabtu?\nWaktu: 09:00 & 10:00',
  ])
    expect(message).toContain(value)
  expect(message).not.toContain('\\n')
  await page.getByLabel('Nama siswa').fill('Nama Baru')
  await expect(page.locator('#registration-confirm')).toHaveCount(0)
})

test('contact form produces a WhatsApp message without sending it', async ({ page }) => {
  await page.goto('/kontak')
  await page.getByLabel('Nama', { exact: false }).first().fill('Budi')
  await page.getByLabel('Nomor WhatsApp').fill('+6281234567890')
  await page.getByLabel('Pertanyaan').fill('Apakah tersedia kelas Sabtu & Minggu?')
  await page.getByRole('button', { name: 'Siapkan pesan' }).click()
  const href = await page.getByRole('link', { name: 'Lanjut ke WhatsApp' }).getAttribute('href')
  const message = new URL(href!).searchParams.get('text')!
  expect(message).toContain('Nama: Budi\n')
  expect(message).toContain('Sabtu & Minggu?')
})

test('mobile menu supports keyboard, closes on navigation and reduced motion works', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const toggle = page.getByRole('button', { name: 'Buka menu' })
  await toggle.click()
  await expect(page.getByRole('navigation', { name: 'Navigasi seluler' })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(toggle).toBeFocused()
  await toggle.click()
  await page
    .getByRole('navigation', { name: 'Navigasi seluler' })
    .getByRole('link', { name: 'Program', exact: true })
    .click()
  await expect(page).toHaveURL(/\/program$/)
  await expect(page.getByRole('navigation', { name: 'Navigasi seluler' })).toHaveCount(0)
  await page.goto('/')
  expect(await page.locator('.hero-art').evaluate((el) => getComputedStyle(el).animationName)).toBe(
    'none',
  )
})

test('unknown dynamic routes return a helpful 404', async ({ page }) => {
  for (const route of ['/program/tidak-ada', '/kelas/tidak-ada', '/pengajar/tidak-ada']) {
    expect((await page.goto(route))?.status()).toBe(404)
    await expect(page.getByRole('button', { name: 'Kembali ke beranda' })).toBeVisible()
  }
})

test('save desktop and mobile visual review screenshots', async ({ page }) => {
  await page.goto('/')
  // Decode offscreen lazy images for a complete visual artifact.
  await page.locator('img').evaluateAll(async (images) => {
    await Promise.all(
      images.map((element) => {
        const image = element as HTMLImageElement
        image.loading = 'eager'
        return image.decode()
      }),
    )
  })
  await page.screenshot({ path: 'test-results/home-desktop-top.png' })
  await page.screenshot({ path: 'test-results/home-desktop.png', fullPage: true })
  await page.setViewportSize({ width: 390, height: 844 })
  await page.screenshot({ path: 'test-results/home-mobile.png', fullPage: true })
  await page.goto('/daftar')
  await page.screenshot({ path: 'test-results/registration-mobile.png', fullPage: true })
})
