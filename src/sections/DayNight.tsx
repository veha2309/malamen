import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export function DayNight() {
  const section = useRef<HTMLElement>(null)
  useGSAP(() => {
    if (matchMedia('(prefers-reduced-motion: reduce), (max-width: 767px)').matches) return
    const tl = gsap.timeline({ scrollTrigger: { trigger: section.current, start: 'top top', end: '+=120%', scrub: 0.8, pin: '.day-night-sticky', anticipatePin: 1 } })
    tl.to('.day-layer', { opacity: 0, scale: 1.035, duration: 1 }, 0)
      .to('.night-layer', { opacity: 1, scale: 1, duration: 1 }, 0)
      .to('.day-copy', { opacity: 0, y: -35, duration: 0.45 }, 0.1)
      .fromTo('.night-copy', { opacity: 0, y: 35 }, { opacity: 1, y: 0, duration: 0.45 }, 0.52)
      .to('.mood-line', { scaleX: 1, duration: 0.9 }, 0.05)
  }, { scope: section })

  return (
    <section id="experience" className="day-night" ref={section} aria-labelledby="experience-title">
      <div className="day-night-sticky">
        <div className="mood-image day-layer"><img src="/assets/day.webp" alt="An unhurried table set for lunch in warm daylight" /></div>
        <div className="mood-image night-layer"><img src="/assets/hero.webp" alt="The restaurant transformed after dark" /></div>
        <div className="mood-overlay" />
        <div className="mood-heading shell">
          <p className="eyebrow light">Two moods · One Malamen</p>
          <h2 id="experience-title">Lunch fades.<br /><em>Malamen changes.</em></h2>
          <div className="mood-progress"><span>Day</span><i><b className="mood-line" /></i><span>Night</span></div>
        </div>
        <div className="mood-copy day-copy"><span>01 · Day</span><h3>Lunch without<br />the rush.</h3><p>Contemporary food, relaxed conversations and a room designed for long afternoons.</p></div>
        <div className="mood-copy night-copy"><span>02 · Night</span><h3>Then the lights<br />go down.</h3><p>Cocktails pour, music rises and Malamen becomes something entirely different.</p></div>
      </div>
    </section>
  )
}
