import { useCallback, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Dialog } from '../components/Dialog'
import { gallery } from '../data/site'

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)
  const close = useCallback(() => setSelected(null), [])
  const move = (direction: number) => setSelected((current) => current === null ? null : (current + direction + gallery.length) % gallery.length)
  return <>
    <section id="gallery" className="gallery-section" aria-labelledby="gallery-title"><div className="shell">
      <div className="gallery-heading reveal"><div><p className="eyebrow light">Scenes from Malamen</p><h2 id="gallery-title">A night,<br /><em>in frames.</em></h2></div><p>Food, light, conversation and the hour when dinner slips quietly into something later.</p></div>
      <div className="gallery-grid">{gallery.map((image, i) => <button className={`gallery-item gallery-${i + 1} reveal-image`} key={image.src + i} onClick={() => setSelected(i)} aria-label={`Open ${image.category} image`}><img src={image.src} alt={image.alt} loading="lazy" style={{ objectPosition: image.position }} /><span>{image.category}<ArrowUpRight /></span></button>)}</div>
    </div></section>
    <Dialog open={selected !== null} onClose={close} title={selected !== null ? gallery[selected].category : 'Gallery'} className="lightbox-dialog">
      {selected !== null && <><img src={gallery[selected].src} alt={gallery[selected].alt} /><div className="lightbox-controls"><button onClick={() => move(-1)} aria-label="Previous image"><ChevronLeft /></button><span>{String(selected + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}</span><button onClick={() => move(1)} aria-label="Next image"><ChevronRight /></button></div></>}
    </Dialog>
  </>
}
