import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { contact, whatsappLink } from '../data/site'

export function MobileBar() {
  return <nav className="mobile-conversion" aria-label="Quick actions">
    <a href={whatsappLink('Hello Malamen, I would like to reserve a table.')} target="_blank" rel="noreferrer"><MessageCircle /><span>Reserve</span></a>
    <a href={`tel:${contact.phone}`}><Phone /><span>Call</span></a>
    <a href={contact.directionsUrl} target="_blank" rel="noreferrer"><MapPin /><span>Directions</span></a>
  </nav>
}
