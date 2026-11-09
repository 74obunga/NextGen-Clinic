import { useState } from 'react';

const bookingUrl =
  "https://wa.me/254796580630?text=Hello%20NextStep%2C%20I'd%20like%20to%20book%20an%20appointment.";

const services = [
  {
    title: 'Prosthetics & Orthotics',
    description:
      'Artificial limbs, braces, supports and custom insoles, measured and fitted to your body so you can walk, work and move comfortably.',
    href: '/orthotics-prosthetics'
  },
  {
    title: 'Physiotherapy',
    description:
      'Hands-on treatment, guided exercises and pain relief to help you recover from injury, surgery or long-term mobility problems.',
    href: '/physiotherapy'
  }
];

const careSteps = [
  {
    number: '1.',
    title: 'Meet & Assess',
    description:
      'We listen to your story, examine how you move, and take measurements so we understand your condition, goals and daily routine.'
  },
  {
    number: '2.',
    title: 'Plan Together',
    description:
      'We agree a clear plan with you, which may include a prosthesis or brace, therapy sessions, and exercises.'
  },
  {
    number: '3.',
    title: 'Fit & Train',
    description:
      'Your device is made and fitted, and we teach you how to use and care for it while you build strength and balance.'
  },
  {
    number: '4.',
    title: 'Follow Up',
    description:
      'We check your progress, adjust your device or programme when needed, and stay with you as your needs change.'
  }
];

const conditions = [
  'Amputation and limb loss',
  'Scoliosis and other spinal conditions',
  'Flat feet, heel pain and other foot problems',
  'Sports injuries and sprains',
  'Recovery after surgery or a fracture',
  'Stroke and nerve-related weakness',
  'Back, knee and joint pain',
  'Walking and posture difficulties in children and adults'
];

const faqs = [
  {
    question: 'What is the difference between a prosthesis and an orthosis?',
    answer:
      'A prosthesis replaces a missing body part, such as a leg or arm. An orthosis, such as a brace, splint or insole, supports or corrects a body part you still have.'
  },
  {
    question: 'How do I know if I need an orthosis or insoles?',
    answer:
      'Ongoing foot, knee or back pain, uneven shoe wear, or difficulty walking can be signs that support would help. An assessment will show what suits you.'
  },
  {
    question: 'Can children be treated?',
    answer:
      "Yes. Children's bodies change quickly, so devices and exercises are reviewed regularly as they grow."
  },
  {
    question: 'How do I book an appointment?',
    answer:
      'Tap the Book on WhatsApp button, or use the Contact page to reach the clinic and agree on a time.'
  }
];

function BrandMark() {
  return (
    <svg className="clinic-brand-mark" viewBox="0 0 42 48" aria-hidden="true">
      <path d="M17 45c3-8 3-14 1-19-2-4-7-7-9-11 0-3 3-4 5-2l8 7c2 2 4 2 5 0l6-9c2-3 6-1 4 2l-5 12c-2 4-6 7-11 8l-1 12" />
      <circle cx="23" cy="5" r="3.5" />
      <circle className="clinic-brand-dot" cx="34" cy="23" r="2" />
      <circle className="clinic-brand-dot" cx="37" cy="29" r="2" />
      <circle className="clinic-brand-dot" cx="35" cy="35" r="2" />
      <circle className="clinic-brand-dot" cx="30" cy="40" r="2" />
    </svg>
  );
}

function BookingLink({ children }: { children: string }) {
  return (
    <a className="clinic-booking-link" href={bookingUrl} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export function ClinicSite() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="clinic-site">
      <a className="clinic-skip-link" href="#main-content">Skip to content</a>
      <header className="clinic-header">
        <div className="clinic-header-inner">
          <a className="clinic-brand" href="/" aria-label="NextStep home">
            <BrandMark />
            <span>NextStep Prosthetics &amp;<br />Orthotics</span>
          </a>

          <button
            className="clinic-menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="clinic-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(open => !open)}
          >
            <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
          </button>

          <nav
            className={`clinic-navigation${menuOpen ? ' is-open' : ''}`}
            id="clinic-navigation"
            aria-label="Mobile"
          >
            <a href="/" onClick={closeMenu}>Home</a>
            <a href="/about-us" onClick={closeMenu}>About Us</a>
            <details>
              <summary>Orthotics &amp; Prosthetics</summary>
              <a href="/orthotics-prosthetics" onClick={closeMenu}>Prosthetics</a>
              <a href="/orthotics-prosthetics" onClick={closeMenu}>Orthotics</a>
              <a href="/orthotics-prosthetics" onClick={closeMenu}>Custom Insoles</a>
              <a href="/orthotics-prosthetics" onClick={closeMenu}>Mobility Aids</a>
            </details>
            <a href="/physiotherapy" onClick={closeMenu}>Physiotherapy</a>
            <a href="/contact-us" onClick={closeMenu}>Contact Us</a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="clinic-hero" aria-labelledby="clinic-hero-title">
          <div className="clinic-hero-dots" aria-hidden="true" />
          <div className="clinic-hero-inner">
            <div className="clinic-hero-copy">
              <h1 id="clinic-hero-title">NextStep Prosthetics and Orthotics</h1>
              <h2>Kenya</h2>
              <p className="clinic-tagline">Moving beyond limits.</p>
              <p className="clinic-hero-description">
                Prosthetics, Orthotics &amp; Physiotherapy in Nairobi
              </p>
              <BookingLink>Book on WhatsApp</BookingLink>
            </div>
          </div>
        </section>

        <section className="clinic-intro" id="about">
          <div className="clinic-intro-inner">
            <p className="clinic-eyebrow">Rehabilitation clinic in Nairobi</p>
            <h2>Care that keeps you moving</h2>
            <p>
              NextStep Prosthetics &amp; Orthotics brings artificial limbs, braces, insoles and
              physiotherapy together in one clinic. Whether you are learning to walk with a new
              prosthesis, recovering from an injury, or living with pain that limits your day, we
              will work with you from the first assessment until you are moving with confidence
              again.
            </p>
            <a className="clinic-outline-link" href="/about-us">About Us</a>
          </div>
        </section>

        <section className="clinic-services" id="services">
          <div className="clinic-content-width">
            <div className="clinic-services-heading">
              <h2>Our Services</h2>
              <p>
                Every service works with the others. A device that fits well and a recovery plan
                that suits you give the best chance of getting back to the things you love.
              </p>
            </div>
            <div className="clinic-service-grid">
              {services.map(service => (
                <article className="clinic-service-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={service.href}>Learn More</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="clinic-care" id="care">
          <div className="clinic-care-inner">
            <h2>How Your Care Works</h2>
            <div className="clinic-care-grid">
              {careSteps.map(step => (
                <article className="clinic-care-card" key={step.number}>
                  <p className="clinic-care-number">{step.number}</p>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="clinic-who">
          <div className="clinic-who-inner">
            <div>
              <h2>Who We Help</h2>
              <ul>
                {conditions.map(condition => <li key={condition}>{condition}</li>)}
              </ul>
            </div>
            <img
              src="/images/mobilityaid.webp"
              alt="Mobility Aids you can get at NextStep clinic, Nairobi"
              loading="lazy"
            />
          </div>
        </section>

        <section className="clinic-faq" aria-labelledby="faq-heading">
          <div className="clinic-faq-inner">
            <h2 id="faq-heading">Frequently Asked Questions</h2>
            <div className="clinic-faq-list">
              {faqs.map(faq => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="clinic-next-step">
          <div className="clinic-next-step-inner">
            <div>
              <h2>Take your next step with us</h2>
              <BookingLink>Book on WhatsApp</BookingLink>
              <p className="clinic-fee-note">
                Fees may change, so we confirm the current consultation fee when you book.
              </p>
            </div>
            <div className="clinic-why">
              <h3>Why Choose NextStep</h3>
              <p><strong>Care in one place:</strong> Prosthetics, orthotics and physiotherapy are available at one clinic, so you don't have to travel between providers.</p>
              <p><strong>Made for your body:</strong> Devices and exercise plans are shaped around your measurements, your work and your lifestyle.</p>
              <p><strong>Clear explanations:</strong> We explain your options in plain language, so you can make decisions with confidence.</p>
              <p><strong>Support after the fitting:</strong> Reviews and adjustments are part of the journey, not an afterthought.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="clinic-footer" id="contact">
        <div className="clinic-footer-main">
          <div className="clinic-footer-brand">
            <a className="clinic-brand" href="/" aria-label="NextStep home">
              <BrandMark />
              <span>NextStep Prosthetics &amp;<br />Orthotics</span>
            </a>
            <p>Prosthetics, orthotics and physiotherapy in Nairobi, so you can keep moving forward.</p>
          </div>
          <nav aria-label="Explore">
            <h2>Explore</h2>
            <a href="/">Home</a>
            <a href="/about-us">About Us</a>
            <a href="/orthotics-prosthetics">Orthotics &amp; Prosthetics</a>
            <a href="/physiotherapy">Physiotherapy</a>
            <a href="/contact-us">Contact Us</a>
          </nav>
          <address>
            <h2>Visit or call us</h2>
            <a href="tel:+254796580630">+254 796 580 630</a>
            <a href="mailto:info@yourdomain.co.ke">info@yourdomain.co.ke</a>
            <a href="https://maps.google.com/?q=Nairobi%2C%20Kenya">Nairobi, Kenya</a>
            <span>Monday to Friday, 8:00 am – 5:00 pm</span>
          </address>
        </div>
        <p className="clinic-copyright">
          © {new Date().getFullYear()} NextStep Prosthetics &amp; Orthotics. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
