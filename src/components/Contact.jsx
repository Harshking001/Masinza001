import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll.jsx";

const PROGRAM_OPTIONS = [
  "Grassroots (Ages 6-10)",
  "Youth Development (Ages 11-15)",
  "Elite Pro Pathway (Ages 16+)",
  "General Inquiry",
];

const RECEIVER_EMAIL = "Starsfootballacademy254@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    program: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `New Contact Form - ${form.program}`
    );

    const body = encodeURIComponent(
`Name: ${form.name}

Program: ${form.program}

Message:
${form.message}`
    );

    window.location.href = `mailto:${RECEIVER_EMAIL}?subject=${subject}&body=${body}`;

    setForm({
      name: "",
      program: "",
      message: "",
    });
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <AnimateOnScroll as="h2">
          Get In Touch
        </AnimateOnScroll>

        <div className="contact-wrapper">
          <AnimateOnScroll as="div" className="contact-info">
            <h3>Contact Stars Academy</h3>

            <p>
              Have questions about trial sessions, schedules, or academy
              locations in Nairobi? We'd love to hear from you.
            </p>

            <div className="info-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Wendani astro turf , Nairobi, Kenya</span>
            </div>

            <div className="info-item">
              <i className="fa-solid fa-envelope"></i>
              <span>{RECEIVER_EMAIL}</span>
            </div>

            <div className="info-item">
              <i className="fa-brands fa-whatsapp"></i>
              <a 
                href="https://wa.me/254714203533" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                +254 714 203 533
              </a>
            </div>

            <div className="info-item">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:0705472895">+254 705 472 895</a>
            </div>

          </AnimateOnScroll>

          <AnimateOnScroll
            as="form"
            className="contact-form"
            onSubmit={handleSubmit}
          >
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
              <select
                name="program"
                value={form.program}
                onChange={handleChange}
                required
              >
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
                rows="5"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}