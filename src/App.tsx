import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { Header } from './components/Header'
import { MobileBar } from './components/MobileBar'
import { SHOW_DEMO_BADGE, contact } from './data/site'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { Hero } from './sections/Hero'
import { DayNight } from './sections/DayNight'
import { Food } from './sections/Food'
import { Nightlife } from './sections/Nightlife'
import { MenuPreview } from './sections/MenuPreview'
import { SocialProof } from './sections/SocialProof'
import { Events } from './sections/Events'
import { Gallery } from './sections/Gallery'
import { ReserveLocation } from './sections/ReserveLocation'
import { Footer } from './sections/Footer'

gsap.registerPlugin(ScrollTrigger)

const schema = {
  '@context': 'https://schema.org', '@type': 'Restaurant', name: 'Malamen – The Kitchen & Bar',
  url: 'https://malamendelhi.com/', telephone: contact.phone,
  address: { '@type': 'PostalAddress', streetAddress: 'No. 101, GF, NH-19, Old Ishwar Nagar, Okhla', addressLocality: 'New Delhi', postalCode: '110025', addressCountry: 'IN' },
  servesCuisine: ['Indian', 'Pan Asian', 'European'], priceRange: '$$',
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '11:00', closes: '01:00' }],
}

function App() {
  const app = useRef<HTMLDivElement>(null)
  useSmoothScroll()
  useGSAP(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => gsap.from(el, { y: 42, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 86%', once: true } }))
    gsap.utils.toArray<HTMLElement>('.reveal-image').forEach((el) => gsap.from(el, { clipPath: 'inset(12% 0 12% 0)', scale: 0.985, duration: 1.25, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }))
  }, { scope: app })

  return <div ref={app}>
    <a className="skip-link" href="#main">Skip to content</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <Header />
    {SHOW_DEMO_BADGE && <div className="demo-badge">Concept redesign</div>}
    <main id="main"><Hero /><DayNight /><Food /><Nightlife /><MenuPreview /><SocialProof /><Events /><Gallery /><ReserveLocation /></main>
    <Footer />
    <MobileBar />
  </div>
}

export default App
