import { ArrowDown, ArrowUpRight, Leaf } from 'lucide-react'
import { menu, links } from '../data/site'
import { Footer } from '../sections/Footer'
import { ActionLink } from '../components/ActionLink'

const categoryNotes: Record<string, string> = {
  small: 'A first pour. A few plates. The beginning of a very good idea.',
  indian: 'Familiar warmth, live fire and a point of view that feels entirely now.',
  asian: 'Bright aromatics, precise technique and textures made to wake the table.',
  mains: 'Generous, considered and made to anchor the evening.',
  cocktails: 'Built around the hour, the company and the decision to stay longer.',
  desserts: 'A final note—unless, of course, there is one more drink.',
}

export function MenuPage() {
  return <>
    <section id="top" className="menu-page-hero">
      <img src="/assets/food.webp" alt="A contemporary Indian plate at Malamen" />
      <div className="menu-page-shade" />
      <div className="shell menu-page-hero-content">
        <p className="eyebrow light">The Malamen menu</p>
        <h1>Made to share.<br /><em>Hard to forget.</em></h1>
        <div className="menu-hero-bottom"><p>Indian warmth. Pan-Asian precision. European technique. And cocktails that know when the night has only just begun.</p><a href="#menu-content" aria-label="Browse menu"><ArrowDown /></a></div>
      </div>
    </section>

    <section className="menu-preface section-light"><div className="shell menu-preface-grid">
      <p className="eyebrow">From kitchen to bar</p>
      <h2>A menu that moves<br /><em>with the night.</em></h2>
      <div><p>Begin lightly. Stay curious. Order for the table and let the evening find its own rhythm.</p><small>Concept preview · Dish names and descriptions below are illustrative until confirmed by Malamen. No unverified pricing is shown.</small></div>
    </div></section>

    <section id="menu-content" className="full-menu">
      <aside className="menu-index">
        <div><p>Menu index</p>{menu.map((category, i) => <a href={`#category-${category.id}`} key={category.id}><span>0{i + 1}</span>{category.label}</a>)}</div>
        <div className="menu-index-actions"><ActionLink href={links.officialMenu} target="_blank" rel="noreferrer" tone="light">Official menu</ActionLink><a href={links.orderOnline} target="_blank" rel="noreferrer">Order online <ArrowUpRight /></a></div>
      </aside>
      <div className="menu-categories">
        {menu.map((category, categoryIndex) => <section className="menu-category" id={`category-${category.id}`} key={category.id}>
          <header><div><span>0{categoryIndex + 1}</span><p>{category.label}</p></div><h2>{category.label}</h2><p>{categoryNotes[category.id]}</p></header>
          <div className="menu-category-items">{category.items.map((item) => <article key={item.name}><div className="dish-title"><h3>{item.name}</h3>{item.dietary === 'veg' && <Leaf aria-label="Vegetarian concept item" />}</div><p>{item.description}</p><span>Concept selection</span></article>)}</div>
          {categoryIndex === 1 && <figure className="menu-interlude"><img src="/assets/day.webp" alt="Malamen concept table setting" loading="lazy" /><figcaption>Plates for passing.<br /><em>Time for staying.</em></figcaption></figure>}
          {categoryIndex === 4 && <figure className="menu-interlude menu-interlude-dark"><img src="/assets/night.webp" alt="Cocktail served at the bar" loading="lazy" /><figcaption>After dinner,<br /><em>Malamen after dark.</em></figcaption></figure>}
        </section>)}
      </div>
    </section>

    <section className="menu-closing"><div className="shell"><p className="eyebrow light">Still deciding?</p><h2>The table is<br /><em>the best place to start.</em></h2><div><ActionLink href="/reserve" tone="light">Reserve a table</ActionLink><ActionLink href={links.officialMenu} target="_blank" rel="noreferrer" tone="outline">View official menu</ActionLink></div></div></section>
    <Footer />
  </>
}
