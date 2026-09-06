import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { MobileBar } from './components/MobileBar'
import { SHOW_DEMO_BADGE, contact } from './data/site'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { RouteReset } from './components/RouteReset'
import { PageTransition } from './components/PageTransition'
import { HomePage } from './pages/HomePage'
import { ExperiencePage } from './pages/ExperiencePage'
import { MenuPage } from './pages/MenuPage'
import { EventsPage } from './pages/EventsPage'
import { GalleryPage } from './pages/GalleryPage'
import { AboutPage } from './pages/AboutPage'
import { ReservePage } from './pages/ReservePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { MobileMotion } from './components/MobileMotion'

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
    <RouteReset />
    <PageTransition />
    <MobileMotion />
    <main id="main" className="route-stage"><Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/reserve" element={<ReservePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes></main>
    <MobileBar />
  </div>
}

export default App
