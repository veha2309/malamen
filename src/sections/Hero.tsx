import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowDown } from 'lucide-react'
import { useRef } from 'react'
import { contact } from '../data/site'
import { ActionLink } from '../components/ActionLink'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  useGSAP(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from('.hero-image', { scale: 1.08, duration: 1.8 })
      .from('.hero-word span', { yPercent: 110, stagger: 0.07, duration: 1.1 }, 0.2)
      .from('.hero-copy > *', { y: 25, opacity: 0, stagger: 0.12, duration: 0.8 }, 0.65)
    const mm = gsap.matchMedia()
    mm.add('(min-width: 768px)', () => {
      gsap.to('.hero-image', { yPercent: 10, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true } })
    })
    return () => mm.revert()
  }, { scope: ref })

  return (
    <section id="top" className="hero" ref={ref} aria-labelledby="hero-title">
      <img className="hero-image" src="/assets/hero.webp" alt="Atmospheric restaurant dining room overlooking New Delhi at dusk" />
      <div className="hero-shade" />
      <div className="hero-content shell">
        <p className="hero-kicker">Kitchen &amp; Bar · New Delhi</p>
        <h1 id="hero-title" className="hero-word" aria-label="Malamen">{'MALAMEN'.split('').map((letter, i) => <span key={i}>{letter}</span>)}</h1>
        <div className="hero-copy">
          <h2>Come for dinner.<br /><em>Stay for the night.</em></h2>
          <p>A contemporary dining and bar experience in South Delhi—made for slow lunches, cocktails and nights worth staying for.</p>
          <div className="button-row">
            <ActionLink href="/reserve" tone="light">Reserve a table</ActionLink>
            <ActionLink href="/menu" tone="outline">Explore the menu</ActionLink>
          </div>
        </div>
        <div className="hero-meta"><span>{contact.shortAddress}</span><span>{contact.hours}</span></div>
        <a href="#discover" className="scroll-cue" aria-label="Discover Malamen"><ArrowDown size={15} /><span>Discover</span></a>
      </div>
    </section>
  )
}
