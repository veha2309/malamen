import gsap from 'gsap'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const destinationNames: Record<string, string> = {
  '/': 'Home',
  '/experience': 'Experience',
  '/menu': 'The Menu',
  '/events': 'Events',
  '/gallery': 'Gallery',
  '/about': 'About',
  '/reserve': 'Reservations',
}

export function PageTransition() {
  const overlay = useRef<HTMLDivElement>(null)
  const label = useRef<HTMLSpanElement>(null)
  const transitioning = useRef(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const target = event.target
      if (!(target instanceof Element)) return
      const link = target.closest<HTMLAnchorElement>('a[href]')
      if (!link || link.target === '_blank' || link.hasAttribute('download')) return

      const url = new URL(link.href, window.location.href)
      if (url.origin !== window.location.origin || !destinationNames[url.pathname]) return
      if (url.pathname === location.pathname) return

      event.preventDefault()
      if (transitioning.current) return

      const destination = `${url.pathname}${url.search}${url.hash}`
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        navigate(destination)
        return
      }

      transitioning.current = true
      const progress = overlay.current?.querySelector('.transition-progress')
      if (!overlay.current || !progress || !label.current) {
        transitioning.current = false
        navigate(destination)
        return
      }

      label.current.textContent = destinationNames[url.pathname]
      gsap.killTweensOf([overlay.current, progress, label.current, '.route-stage > *'])
      gsap.set(overlay.current, { display: 'grid', pointerEvents: 'auto', autoAlpha: 0 })
      gsap.set(progress, { scaleX: 0 })
      gsap.set(label.current, { autoAlpha: 0, y: 8 })
      gsap.timeline({ onComplete: () => navigate(destination) })
        .to('.route-stage > *', { autoAlpha: .3, scale: .996, filter: 'blur(3px)', duration: .24, ease: 'power2.in' }, 0)
        .to(overlay.current, { autoAlpha: 1, duration: .3, ease: 'power2.out' }, 0)
        .to(label.current, { autoAlpha: 1, y: 0, duration: .22, ease: 'power2.out' }, .08)
        .to(progress, { scaleX: 1, duration: .42, ease: 'power2.inOut' }, .04)
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [location.pathname, navigate])

  useLayoutEffect(() => {
    const progress = overlay.current?.querySelector('.transition-progress')
    if (transitioning.current && overlay.current && progress && label.current) {
      gsap.set('.route-stage > *', { autoAlpha: .15, scale: 1.004, filter: 'blur(2px)' })
      gsap.timeline({
        onComplete: () => {
          transitioning.current = false
          if (overlay.current) gsap.set(overlay.current, { display: 'none', pointerEvents: 'none' })
          gsap.set(progress, { scaleX: 0 })
          gsap.set('.route-stage > *', { clearProps: 'opacity,visibility,transform,filter' })
        },
      })
        .to(label.current, { autoAlpha: 0, y: -5, duration: .16, ease: 'power2.in' }, 0)
        .to(overlay.current, { autoAlpha: 0, duration: .42, ease: 'power2.inOut' }, .08)
        .to('.route-stage > *', { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: .48, ease: 'power3.out' }, .06)
      return
    }

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.fromTo('.route-stage > *', { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: .55, ease: 'power3.out', clearProps: 'opacity,visibility,transform' })
    }
  }, [location.key])

  return <div className="page-transition" ref={overlay} aria-hidden="true">
    <div className="transition-brand"><b aria-hidden="true">M</b><small ref={label}>Experience</small></div>
    <i className="transition-progress" />
  </div>
}
