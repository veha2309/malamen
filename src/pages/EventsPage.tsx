import { PageHero } from '../components/PageHero'
import { Events } from '../sections/Events'
import { Footer } from '../sections/Footer'

export function EventsPage() { return <>
  <PageHero eyebrow="Events & celebrations" title={<>Bring the people.<br /><em>We’ll set the scene.</em></>} copy="From the first toast to the final song—celebrations feel different at Malamen." image="/assets/day.webp" imageAlt="Long table set for a private event" />
  <Events />
  <section className="event-promise"><div className="shell"><p>Birthdays</p><p>Private dining</p><p>Corporate evenings</p><p>Celebrations</p></div></section>
  <Footer />
</> }
