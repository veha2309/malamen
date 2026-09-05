import { ActionLink } from '../components/ActionLink'

export function Nightlife() {
  return (
    <section className="nightlife" aria-labelledby="nightlife-title">
      <img src="/assets/night.webp" alt="An amber cocktail served at the bar after dark" loading="lazy" />
      <div className="nightlife-shade" />
      <div className="nightlife-copy shell reveal">
        <p className="eyebrow light">Malamen after dark</p>
        <h2 id="nightlife-title">Stay for<br /><em>one more.</em></h2>
        <p>Cocktails, music and late-night conversations. Dinner was only the beginning.</p>
        <ActionLink href="#reserve" tone="light">Experience after dark</ActionLink>
      </div>
      <div className="nightlife-marquee" aria-hidden="true"><span>COCKTAILS · MUSIC · LATE NIGHTS · </span><span>COCKTAILS · MUSIC · LATE NIGHTS · </span></div>
    </section>
  )
}
