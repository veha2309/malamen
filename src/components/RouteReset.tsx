import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { scrollToTopImmediately } from '../hooks/useSmoothScroll'

export function RouteReset() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    ScrollTrigger.clearScrollMemory('manual')
    scrollToTopImmediately()
    document.title = pathname === '/' ? 'Malamen | Kitchen & Bar, New Delhi' : `${pathname.slice(1).replace(/(^|-)\w/g, (m) => m.toUpperCase())} | Malamen New Delhi`
    const frame = window.requestAnimationFrame(() => {
      scrollToTopImmediately()
      ScrollTrigger.refresh()
    })
    return () => window.cancelAnimationFrame(frame)
  }, [pathname])
  return null
}
