import { ArrowUpRight, MapPin, MessageCircle, Phone } from 'lucide-react'
import { contact, whatsappLink } from '../data/site'

export function ReserveLocation() {
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = `Hello Malamen, I would like to reserve a table.\n\nDate: ${form.get('date')}\nTime: ${form.get('time')}\nGuests: ${form.get('guests')}\nName: ${form.get('name')}\nPhone: ${form.get('phone')}`
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }
  const today = new Date().toISOString().split('T')[0]
  return <>
    <section id="reserve" className="reserve-section" aria-labelledby="reserve-title"><div className="shell reserve-layout">
      <div className="reserve-heading reveal"><p className="eyebrow light">Reservations</p><h2 id="reserve-title">Your table<br /><em>is waiting.</em></h2><p>Choose the details below. We’ll prepare a WhatsApp message for you to review before sending.</p><div className="direct-actions"><a href={whatsappLink('Hello Malamen, I would like to reserve a table.')} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp us</a><a href={`tel:${contact.phone}`}><Phone /> Call</a></div></div>
      <form className="reservation-form reveal" onSubmit={submit}>
        <label><span>Date</span><input type="date" name="date" min={today} required /></label>
        <label><span>Time</span><select name="time" required defaultValue=""><option value="" disabled>Select a time</option>{['11:30 AM','12:30 PM','1:30 PM','7:00 PM','8:00 PM','9:00 PM','10:00 PM','11:00 PM'].map((time) => <option key={time}>{time}</option>)}</select></label>
        <label><span>Guests</span><select name="guests" required defaultValue="2"><option value="1">1 guest</option>{[2,3,4,5,6,7,8,9,10].map((n) => <option value={n} key={n}>{n} guests</option>)}</select></label>
        <label><span>Name</span><input name="name" required autoComplete="name" placeholder="Your name" /></label>
        <label><span>Phone</span><input name="phone" type="tel" required autoComplete="tel" pattern="[0-9+ ()-]{8,}" placeholder="Your phone number" /></label>
        <button type="submit" className="submit-button">Continue to WhatsApp <ArrowUpRight /></button>
        <small>No reservation is submitted on this website. You’ll confirm and send the request in WhatsApp.</small>
      </form>
    </div></section>
    <section id="about" className="location-section section-light" aria-labelledby="location-title"><div className="shell location-layout">
      <div className="location-copy reveal"><p className="eyebrow">Find us in Delhi</p><h2 id="location-title">Dinner starts<br /><em>in Okhla.</em></h2><address>{contact.address}</address><p>{contact.hours}</p><p><a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a><br /><a href={`tel:${contact.secondaryPhone}`}>{contact.secondaryPhoneDisplay}</a></p><a className="text-button" href={contact.directionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight /></a></div>
      <a className="location-visual reveal-image" href={contact.directionsUrl} target="_blank" rel="noreferrer" aria-label="Open directions to Malamen"><img src="/assets/hero.webp" alt="Evening view from a refined New Delhi restaurant" loading="lazy" /><span><MapPin /> Malamen<br /><small>Old Ishwar Nagar · Okhla</small></span><b>Open in maps <ArrowUpRight /></b></a>
    </div></section>
  </>
}
