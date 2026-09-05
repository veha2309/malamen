import type { ReactNode } from 'react'

interface Props { eyebrow: string; title: ReactNode; copy: string; image: string; imageAlt: string; align?: 'left' | 'center' }

export function PageHero({ eyebrow, title, copy, image, imageAlt, align = 'left' }: Props) {
  return <section id="top" className={`page-hero page-hero-${align}`}>
    <img src={image} alt={imageAlt} />
    <div className="page-hero-shade" />
    <div className="shell page-hero-content">
      <p className="eyebrow light">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{copy}</p>
    </div>
  </section>
}
