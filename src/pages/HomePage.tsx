import { ArrowUpRight } from 'lucide-react'
import { Hero } from '../sections/Hero'
import { Footer } from '../sections/Footer'

const journeys = [
  { number: '01', title: 'Come for the food.', copy: 'A multi-cuisine table shaped by fire, freshness and plates made to share.', href: '/menu', image: '/assets/food.webp', label: 'Explore the menu' },
  { number: '02', title: 'Stay for the night.', copy: 'The lights soften, cocktails arrive and the tempo changes.', href: '/experience', image: '/assets/night.webp', label: 'Feel the experience' },
  { number: '03', title: 'Make it yours.', copy: 'Private tables, milestone dinners and celebrations with room to grow.', href: '/events', image: '/assets/day.webp', label: 'Plan an event' },
]

export function HomePage() {
  return <><Hero />
    <section id="discover" className="home-intro section-light"><div className="shell">
      <p className="eyebrow">Malamen · New Delhi</p>
      <div className="home-intro-grid"><h2>A restaurant by day.<br /><em>A different energy<br />after dark.</em></h2><div><p>Malamen moves with the hour—from generous lunches and long conversations to cocktails, music and a room that comes alive at night.</p><a className="text-button" href="/experience">Discover our story <ArrowUpRight /></a></div></div>
    </div></section>
    <section className="journey-grid">{journeys.map((item) => <a href={item.href} className="journey-card" key={item.title}><img src={item.image} alt="" /><span className="journey-shade" /><div><small>{item.number}</small><h2>{item.title}</h2><p>{item.copy}</p><b>{item.label}<ArrowUpRight /></b></div></a>)}</section>
    <section className="home-reserve"><div className="shell"><p className="eyebrow light">Tonight at Malamen</p><h2>Your table.<br /><em>Your night.</em></h2><a className="action-link action-light" href="/reserve"><span>Reserve a table</span><ArrowUpRight size={16} /></a></div></section>
    <Footer />
  </>
}
