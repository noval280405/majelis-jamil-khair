export default defineNuxtPlugin((nuxtApp) => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  let observer: IntersectionObserver | undefined
  function revealSections() {
    observer?.disconnect()
    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-pending').forEach((el) => el.classList.add('is-visible'))
      return
    }
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.05 },
    )
    document
      .querySelectorAll('.section-heading, .mode-card, .benefit-card, .cta-card')
      .forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('is-visible')
          return
        }
        el.classList.add('reveal-pending')
        observer?.observe(el)
      })
  }
  nuxtApp.hook('app:mounted', revealSections)
  nuxtApp.hook('page:finish', () => {
    requestAnimationFrame(revealSections)
  })
  reducedMotion.addEventListener('change', revealSections)
})
