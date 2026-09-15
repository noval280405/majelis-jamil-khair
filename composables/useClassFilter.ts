import type { QuranClass } from '~/data/classes'
export function matchesClass(item: QuranClass, filters: Record<string, string>) {
  return Object.entries(filters).every(
    ([key, value]) =>
      !value ||
      (key === 'day' ? item.days.includes(value) : item[key as keyof QuranClass] === value),
  )
}
