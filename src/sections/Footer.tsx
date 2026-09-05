import { ArrowUp } from 'lucide-react'
import { Brand } from '../components/Brand'
import { contact, links, navItems } from '../data/site'

export function Footer() {
  return <footer className="site-footer"><div className="shell">
    <div className="footer-statement reveal"><p className="eyebrow light">From slow lunches to late nights</p><h2>Dinner starts here.<br /><em>The night decides<br />when it ends.</em></h2></div>
    <div className="footer-main"><Brand /><div className="footer-column"><p>Explore</p>{navItems.slice(0, 4).map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div><div className="footer-column"><p>Visit</p><a href={links.officialMenu} target="_blank" rel="noreferrer">Official menu</a><a href="/reserve">Reservations</a><a href={links.orderOnline} target="_blank" rel="noreferrer">Order online</a><a href={`mailto:${contact.email}`}>Contact</a></div><a href="#top" className="back-top" aria-label="Back to top"><ArrowUp /></a></div>
    <div className="footer-base"><span>© {new Date().getFullYear()} Malamen · Concept redesign</span><span>Private proposal prototype · Business details sourced from the official website</span></div>
  </div></footer>
}
