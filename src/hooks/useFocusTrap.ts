import { RefObject, useEffect } from 'react'

const SELECTOR = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function useFocusTrap(ref: RefObject<HTMLElement | null>, active: boolean, onClose: () => void) {
  useEffect(() => {
    if (!active || !ref.current) return
    const previous = document.activeElement as HTMLElement | null
    const node = ref.current
    const focusables = Array.from(node.querySelectorAll<HTMLElement>(SELECTOR))
    focusables[0]?.focus()
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab' || focusables.length < 2) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', keydown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', keydown)
      document.body.style.overflow = ''
      previous?.focus()
    }
  }, [active, onClose, ref])
}
