import { useState } from 'react'
import Reveal from './Reveal'
import { services, site, whatsappLink } from '../data/content'
import { InstagramIcon, MailIcon, PhoneIcon, PinIcon } from './Icons'

const initial = { name: '', phone: '', email: '', service: '', location: '', message: '' }

function validate(v) {
  const errors = {}
  if (v.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!/^[+\d][\d\s-]{7,15}$/.test(v.phone.trim())) errors.phone = 'Please enter a valid phone number.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) errors.email = 'Please enter a valid email address.'
  if (!v.service) errors.service = 'Please choose a service.'
  if (!v.location.trim()) errors.location = 'Please enter your project location.'
  return errors
}

function Field({ id, label, error, children }) {
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <span className="field-error" id={`${id}-error`}>{error}</span>}
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  // No backend yet: the enquiry is handed to WhatsApp with the details prefilled.
  // To use a form service (Formspree, EmailJS, your API), replace the body of this function.
  const submit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) return

    const lines = [
      `Hello ${site.name}, I'd like to book a consultation.`,
      '',
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      `Service: ${values.service}`,
      `Location: ${values.location}`,
    ]
    if (values.message.trim()) lines.push(`Message: ${values.message.trim()}`)

    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener')
    setSent(true)
    setValues(initial)
  }

  const aria = (name) => ({
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <Reveal className="contact-info">
          <span className="eyebrow light">Get In Touch</span>
          <h2>Let&apos;s Create Your Dream Home.</h2>
          <p>Share a few details about your project and we&apos;ll get back to you to schedule a free, no-obligation consultation.</p>

          <ul className="contact-details">
            <li>
              <span className="ci-icon"><PhoneIcon /></span>
              <span className="ci-text">
                <span className="ci-label">Call / WhatsApp</span>
                <a href={site.phoneHref}>{site.phoneDisplay}</a>
                <a href={site.altPhoneHref} className="ci-alt">{site.altPhoneDisplay}</a>
              </span>
            </li>
            <li>
              <span className="ci-icon"><MailIcon /></span>
              <span className="ci-text">
                <span className="ci-label">Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </span>
            </li>
            <li>
              <span className="ci-icon"><PinIcon /></span>
              <span className="ci-text">
                <span className="ci-label">Studio</span>
                <a href={site.mapUrl} target="_blank" rel="noopener noreferrer">{site.address}</a>
              </span>
            </li>
            <li>
              <span className="ci-icon"><InstagramIcon /></span>
              <span className="ci-text">
                <span className="ci-label">Instagram</span>
                <a href={site.instagram.href} target="_blank" rel="noopener noreferrer">{site.instagram.handle}</a>
              </span>
            </li>
          </ul>

          <a href={whatsappLink()} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp
          </a>
        </Reveal>

        <Reveal delay={120}>
          {sent ? (
            <div className="contact-form form-success" role="status">
              <span className="success-icon" aria-hidden="true">✓</span>
              <h3>Thank you!</h3>
              <p>Your enquiry has been prepared in WhatsApp — just press send. We&apos;ll be in touch shortly to schedule your consultation.</p>
              <button type="button" className="btn btn-primary" onClick={() => setSent(false)}>Send another enquiry</button>
            </div>
          ) : (
            <form className="contact-form" aria-label="Request a consultation" onSubmit={submit} noValidate>
              <h3 className="form-title">Request a Free Consultation</h3>
              <Field id="name" label="Full Name" error={errors.name}>
                <input type="text" id="name" name="name" placeholder="Your full name" autoComplete="name" value={values.name} onChange={update} {...aria('name')} />
              </Field>
              <div className="two-col">
                <Field id="phone" label="Phone Number" error={errors.phone}>
                  <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" autoComplete="tel" value={values.phone} onChange={update} {...aria('phone')} />
                </Field>
                <Field id="email" label="Email Address" error={errors.email}>
                  <input type="email" id="email" name="email" placeholder="you@example.com" autoComplete="email" value={values.email} onChange={update} {...aria('email')} />
                </Field>
              </div>
              <div className="two-col">
                <Field id="service" label="Service Required" error={errors.service}>
                  <select id="service" name="service" value={values.service} onChange={update} {...aria('service')}>
                    <option value="" disabled>Select a service</option>
                    {services.map((s) => <option key={s.title}>{s.title}</option>)}
                  </select>
                </Field>
                <Field id="location" label="Project Location" error={errors.location}>
                  <input type="text" id="location" name="location" placeholder="City / Area" value={values.location} onChange={update} {...aria('location')} />
                </Field>
              </div>
              <Field id="message" label="Message (optional)">
                <textarea id="message" name="message" rows="4" placeholder="Tell us about your project — size, timeline, style…" value={values.message} onChange={update} />
              </Field>
              <button type="submit" className="btn btn-primary form-submit">Request a Consultation</button>
              <p className="form-note">We respect your privacy. Your details are only used to contact you about your project.</p>
            </form>
          )}
        </Reveal>
      </div>

      <Reveal className="container contact-map">
        <iframe
          title={`Map showing ${site.name} studio in ${site.address}`}
          src={site.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="map-chip">
          <PinIcon size={18} />
          <span><strong>{site.address}</strong>Get directions →</span>
        </a>
      </Reveal>
    </section>
  )
}
