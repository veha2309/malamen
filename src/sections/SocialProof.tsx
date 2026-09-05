import { Clock3, MapPin, UtensilsCrossed } from 'lucide-react'
import { contact } from '../data/site'

const proof = [
  { icon: UtensilsCrossed, label: 'Across the table', title: 'Indian · Pan Asian · European', text: 'A multi-cuisine kitchen with cocktails and mocktails.' },
  { icon: Clock3, label: 'From day into night', title: 'Open daily until 1 AM', text: 'Casual dining by day. A higher-energy bar after dark.' },
  { icon: MapPin, label: 'In South Delhi', title: 'Okhla · New Delhi', text: 'A destination for dinner, drinks and celebrations.' },
]

export function SocialProof() {
  return <section className="proof-section section-light" aria-labelledby="proof-title"><div className="shell">
    <div className="proof-heading reveal"><p className="eyebrow">The Malamen rhythm</p><h2 id="proof-title">Built for the way<br /><em>Delhi goes out.</em></h2><p>Verified venue details from Malamen’s public website. Guest ratings and quotes remain intentionally omitted until approved.</p></div>
    <div className="proof-grid">{proof.map(({ icon: Icon, ...item }, i) => <article className="proof-card reveal" key={item.title}><span className="proof-number">0{i + 1}</span><Icon /><p>{item.label}</p><h3>{item.title}</h3><small>{item.text}</small></article>)}</div>
    <p className="proof-source">Official details · {contact.hours}</p>
  </div></section>
}
