import { PageHero } from '../components/PageHero'
import { Gallery } from '../sections/Gallery'
import { Footer } from '../sections/Footer'

export function GalleryPage() { return <>
  <PageHero eyebrow="The gallery" title={<>Seen in<br /><em>a different light.</em></>} copy="A visual story of the table, the bar and everything that happens between." image="/assets/night.webp" imageAlt="Cocktail on the bar after dark" />
  <Gallery /><Footer />
</> }
