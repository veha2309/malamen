import { X } from 'lucide-react'
import { type ReactNode, useRef } from 'react'
import { useFocusTrap } from '../hooks/useFocusTrap'

interface Props { open: boolean; onClose: () => void; title: string; eyebrow?: string; children: ReactNode; className?: string }

export function Dialog({ open, onClose, title, eyebrow, children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useFocusTrap(ref, open, onClose)
  if (!open) return null
  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className={`dialog ${className}`} role="dialog" aria-modal="true" aria-labelledby="dialog-title" ref={ref}>
        <button className="dialog-close" onClick={onClose} aria-label="Close dialog"><X /></button>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id="dialog-title">{title}</h2>
        {children}
      </div>
    </div>
  )
}
