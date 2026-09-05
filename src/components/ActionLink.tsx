import { ArrowUpRight } from 'lucide-react'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  tone?: 'light' | 'dark' | 'outline'
  arrow?: boolean
}

export function ActionLink({ children, tone = 'dark', arrow = true, className = '', ...props }: Props) {
  return <a className={`action-link action-${tone} ${className}`} {...props}><span>{children}</span>{arrow && <ArrowUpRight size={16} strokeWidth={1.7} />}</a>
}
