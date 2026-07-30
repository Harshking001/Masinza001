import { useState } from 'react'
import AnimateOnScroll from './AnimateOnScroll.jsx'

const PROGRAM_OPTIONS = [
  'Grassroots (Ages 6-10)',
  'Youth Development (Ages 11-15)',
  'Elite Pro Pathway (Ages 16+)',
  'General Inquiry',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', program: '', message: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    alert('Message sent successfully!')
    setForm({ name: '', email: '', program: '', message: '' })
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <AnimateOnScroll as="h2">Get In Touch</AnimateOnScroll>
        <div className="contact-wrapper">
          <AnimateOnScroll as="div" className="contact-info">
            <h3>Contact Stars Academy</h3>
            <p>
              Have questions about trial sessions, schedules, or academy locations in
              Nairobi? Send us a message!
            </p>
            <div className="info-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Nairobi Sports Grounds, Nairobi, Kenya</span>
            </div>
            <div className="info-item">
              <i className="fa-solid fa-envelope"></i>
              <span>info@starsfootballacademy.com</span>
            </div>
            <div className="info-item">
              <i className="fa-solid fa-phone"></i>
              <span>+254 700 000 000</span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll as="form" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <select name="program" value={form.program} onChange={handleChange} required>
                <option value="" disabled>
                  Select Program Category
                </option>
                {PROGRAM_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message..."
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
