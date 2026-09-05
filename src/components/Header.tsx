import { Menu, MessageCircle, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navItems, whatsappLink } from '../data/site'
import { ActionLink } from './ActionLink'
import { Brand } from './Brand'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey) }
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <Brand />
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => <NavLink key={href} to={href}>{label}</NavLink>)}
      </nav>
      <div className="header-actions">
        <a className="wa-icon" href={whatsappLink('Hello Malamen, I would like to make an enquiry.')} target="_blank" rel="noreferrer" aria-label="Enquire on WhatsApp"><MessageCircle size={18} /></a>
        <ActionLink href="/reserve" tone="light" arrow={false}>Reserve a table</ActionLink>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <p className="eyebrow">From lunch to late</p>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href], i) => <NavLink key={href} to={href} onClick={() => setOpen(false)}><span>0{i + 1}</span>{label}</NavLink>)}
        </nav>
        <ActionLink href="/reserve" tone="light" onClick={() => setOpen(false)}>Find your table</ActionLink>
      </div>
    </header>
  )
}
