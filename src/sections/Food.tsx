import { ArrowDownRight } from 'lucide-react'
import { ActionLink } from '../components/ActionLink'
import { links } from '../data/site'

export function Food() {
  return (
    <section className="food-section section-light" aria-labelledby="food-title">
      <div className="shell">
        <div className="section-intro reveal">
          <p className="eyebrow">The kitchen</p>
          <h2 id="food-title">Made for<br /><em>the table.</em></h2>
          <p>Indian warmth, Pan-Asian precision and European technique—brought together with fire, texture and a little theatre.</p>
        </div>
        <div className="food-editorial">
          <figure className="food-primary reveal-image"><img src="/assets/food.webp" alt="A richly spiced contemporary dish served in handmade ceramic" loading="lazy" /><figcaption><span>Signature plates</span><ArrowDownRight /></figcaption></figure>
          <div className="food-note reveal"><span className="index">01</span><h3>The reason<br />you came hungry.</h3><p>Composed with care. Best passed around. Designed to make everyone reach across the table.</p><ActionLink href={links.officialMenu} target="_blank" rel="noreferrer" tone="dark">Discover the menu</ActionLink></div>
          <figure className="food-secondary reveal-image"><img src="/assets/day.webp" alt="An elegant dining table washed in afternoon light" loading="lazy" /></figure>
        </div>
      </div>
    </section>
  )
}
