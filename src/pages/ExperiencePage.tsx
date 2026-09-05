import { PageHero } from '../components/PageHero'
import { DayNight } from '../sections/DayNight'
import { Food } from '../sections/Food'
import { Nightlife } from '../sections/Nightlife'
import { SocialProof } from '../sections/SocialProof'
import { Footer } from '../sections/Footer'

export function ExperiencePage() { return <>
  <PageHero eyebrow="The Malamen experience" title={<>Two moods.<br /><em>One address.</em></>} copy="Lunch arrives softly. The night has other plans." image="/assets/hero.webp" imageAlt="Malamen concept interior after dark" />
  <DayNight /><Food /><Nightlife /><SocialProof /><Footer />
</> }
