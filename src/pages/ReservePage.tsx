import { PageHero } from '../components/PageHero'
import { ReserveLocation } from '../sections/ReserveLocation'
import { Footer } from '../sections/Footer'

export function ReservePage() { return <>
  <PageHero eyebrow="Reservations" title={<>Tonight starts<br /><em>with a table.</em></>} copy="Tell us when. We’ll prepare the message; you stay in control." image="/assets/hero.webp" imageAlt="Atmospheric evening dining room" />
  <ReserveLocation /><Footer />
</> }
