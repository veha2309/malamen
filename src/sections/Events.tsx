import { useCallback, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Dialog } from '../components/Dialog'
import { whatsappLink } from '../data/site'

const eventTypes = ['Birthday', 'Private dining', 'Corporate event', 'Celebration']

export function Events() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = `Hello Malamen, I would like to plan an event.\n\nName: ${form.get('name')}\nPhone: ${form.get('phone')}\nEvent: ${form.get('eventType')}\nDate: ${form.get('date')}\nGuests: ${form.get('guests')}\nMessage: ${form.get('message') || '—'}`
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  return <>
    <section id="events" className="events-section" aria-labelledby="events-title">
      <div className="events-image"><img src="/assets/day.webp" alt="A long table prepared for a private celebration" loading="lazy" /></div>
      <div className="events-copy reveal"><p className="eyebrow">Gather at Malamen</p><h2 id="events-title">Your night.<br /><em>Our table.</em></h2><p>From intimate dinners to celebrations that take over the night. Tell us what you have in mind.</p><div className="event-types">{eventTypes.map((type) => <span key={type}>{type}</span>)}</div><button className="text-button" onClick={() => setOpen(true)}>Plan an event <ArrowUpRight /></button></div>
    </section>
    <Dialog open={open} onClose={close} eyebrow="Celebrations" title="Let’s plan your night.">
      <p className="dialog-intro">Share the essentials. We’ll prepare a WhatsApp message for you to review and send.</p>
      <form className="enquiry-form" onSubmit={submit}>
        <label><span>Name</span><input name="name" autoComplete="name" required placeholder="Your name" /></label>
        <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" required pattern="[0-9+ ()-]{8,}" placeholder="Your number" /></label>
        <label><span>Event type</span><select name="eventType" required defaultValue=""><option value="" disabled>Select an occasion</option>{eventTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
        <label><span>Date</span><input name="date" type="date" required min={new Date().toISOString().split('T')[0]} /></label>
        <label><span>Guests</span><input name="guests" type="number" min="2" max="300" required placeholder="Number of guests" /></label>
        <label className="full"><span>Message</span><textarea name="message" rows={3} placeholder="Anything we should know?" /></label>
        <button type="submit" className="submit-button">Continue to WhatsApp <ArrowUpRight /></button>
      </form>
    </Dialog>
  </>
}
