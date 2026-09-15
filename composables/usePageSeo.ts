import { siteConfig } from '~/data/site'
export function usePageSeo(
  title: string,
  description = 'Program belajar membaca Al-Qur’an untuk anak, remaja dan dewasa dengan kelas online serta tatap muka di tempat belajar.',
) {
  useSeoMeta({
    title: `${title} | ${siteConfig.name}`,
    description,
    ogTitle: `${title} | ${siteConfig.name}`,
    ogDescription: description,
    ogType: 'website',
    ogImage: '/images/hero/study-together.svg',
    twitterCard: 'summary_large_image',
  })
}
