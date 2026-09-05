import { ArrowUpRight, MapPin } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { Footer } from '../sections/Footer'
import { contact } from '../data/site'

export function AboutPage() { return <>
  <PageHero eyebrow="About Malamen" title={<>A place that<br /><em>changes with you.</em></>} copy="Relaxed in the afternoon. Magnetic after dark. Always unmistakably Malamen." image="/assets/day.webp" imageAlt="Refined restaurant in the afternoon" />
  <section className="about-story section-light"><div className="shell about-story-grid"><p className="eyebrow">The idea</p><h2>Good food brings<br />people to the table.<br /><em>The feeling keeps<br />them there.</em></h2><div><p>Malamen brings Indian, Pan-Asian and European cooking together in a space built for both ease and energy. By day, the room is open, warm and unhurried. By night, cocktails, music and softer light change its pulse.</p><p>This redesign translates that transformation online: fewer distractions, stronger atmosphere and a clear invitation to visit.</p></div></div></section>
  <section className="about-location"><div className="about-location-image"><img src="/assets/hero.webp" alt="Malamen concept view after dark" /></div><div className="about-location-copy"><p className="eyebrow light">Find us</p><MapPin /><h2>In the heart<br /><em>of South Delhi.</em></h2><address>{contact.address}</address><p>{contact.hours}</p><a className="text-button" href={contact.directionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight /></a></div></section>
  <Footer />
</> }
