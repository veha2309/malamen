import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export function MobileMotion() {
  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(max-width: 767px) and (prefers-reduced-motion: no-preference)', () => {
      gsap.utils.toArray<HTMLElement>('.page-hero, .menu-page-hero, .nightlife').forEach((hero) => {
        const image = hero.querySelector('img')
        if (!image) return
        gsap.fromTo(image, { scale: 1.06 }, {
          scale: 1,
          duration: 1.4,
          ease: 'power2.out',
          clearProps: 'transform',
        })
      })

      gsap.utils.toArray<HTMLElement>('.menu-category-items article, .proof-card, .event-types span').forEach((item, index) => {
        gsap.from(item, {
          y: 26,
          opacity: 0,
          duration: 0.75,
          delay: (index % 2) * 0.06,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 92%', once: true },
        })
      })

      gsap.utils.toArray<HTMLElement>('.food-primary, .food-secondary, .gallery-item, .about-location-image').forEach((frame) => {
        const image = frame.querySelector('img')
        if (!image) return
        gsap.fromTo(image, { scale: 1.1 }, {
          scale: 1,
          duration: 1.05,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: { trigger: frame, start: 'top 90%', once: true },
        })
      })
    })

    return () => mm.revert()
  })

  return null
}
