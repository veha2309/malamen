import { Menu, MessageCircle, X } from 'lucide-react'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navItems, whatsappLink } from '../data/site'
import { ActionLink } from './ActionLink'
import { Brand } from './Brand'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const location = useLocation()

  const closeMenu = useCallback((restoreFocus = true) => {
    const activeElement = document.activeElement

    if (menuRef.current?.contains(activeElement)) {
      if (restoreFocus) toggleRef.current?.focus()
      else if (activeElement instanceof HTMLElement) activeElement.blur()
    }

    setOpen(false)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) closeMenu()
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeMenu, open])

  useEffect(() => closeMenu(false), [closeMenu, location.pathname])

  useLayoutEffect(() => {
    if (menuRef.current) menuRef.current.inert = !open
  }, [open])

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
        <button ref={toggleRef} className="menu-toggle" onClick={() => open ? closeMenu() : setOpen(true)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
      </div>
      <div ref={menuRef} id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <p className="eyebrow">From lunch to late</p>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href], i) => <NavLink key={href} to={href} onClick={() => closeMenu()}><span>0{i + 1}</span>{label}</NavLink>)}
        </nav>
        <ActionLink href="/reserve" tone="light" onClick={() => closeMenu()}>Find your table</ActionLink>
      </div>
    </header>
  )
}
