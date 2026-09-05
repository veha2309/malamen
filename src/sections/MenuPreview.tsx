import { useState } from 'react'
import { Leaf } from 'lucide-react'
import { ActionLink } from '../components/ActionLink'
import { links, menu } from '../data/site'

export function MenuPreview() {
  const [active, setActive] = useState(menu[0].id)
  const category = menu.find((item) => item.id === active) ?? menu[0]
  return (
    <section id="menu" className="menu-section" aria-labelledby="menu-title">
      <div className="shell">
        <div className="menu-header reveal">
          <div><p className="eyebrow light">A taste of Malamen</p><h2 id="menu-title">Choose your<br /><em>temptation.</em></h2></div>
          <p>Move from the first plate to the final pour. This curated concept preview is ready to be replaced with the restaurant’s confirmed menu.</p>
        </div>
        <div className="menu-tabs" role="tablist" aria-label="Menu categories">
          {menu.map((item) => <button key={item.id} role="tab" aria-selected={active === item.id} aria-controls="menu-panel" id={`tab-${item.id}`} onClick={() => setActive(item.id)}>{item.label}</button>)}
        </div>
        <div id="menu-panel" className="menu-list" role="tabpanel" aria-labelledby={`tab-${active}`} key={active}>
          {category.items.map((item, i) => <article key={item.name} className="menu-item"><span>0{i + 1}</span><div><h3>{item.name}{item.dietary === 'veg' && <Leaf aria-label="Vegetarian demo item" />}</h3><p>{item.description}</p></div><small>Concept selection</small></article>)}
        </div>
        <div className="menu-actions reveal"><ActionLink href={links.officialMenu} target="_blank" rel="noreferrer" tone="light">View official menu</ActionLink><ActionLink href={links.orderOnline} target="_blank" rel="noreferrer" tone="outline">Order online</ActionLink></div>
      </div>
    </section>
  )
}
