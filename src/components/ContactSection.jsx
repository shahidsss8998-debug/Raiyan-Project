import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { brandInfo } from '../data/products';

export default function ContactSection() {
  const [ref, isVisible] = useScrollReveal(0.1);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="section-spacing-major bg-elvara-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-elvara-gold/30 to-transparent" />

      {/* Controlled narrow luxury container */}
      <div className="container-narrow relative">
        <div
          ref={ref}
          className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 xl:gap-16 items-start"
        >
          {/* Left Info Column */}
          <div
            className={`lg:col-span-5 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-6 sm:w-10 h-px bg-elvara-gold/60" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-elvara-gold/90 font-body font-medium">
                Startup Inquiries & Connect
              </span>
            </div>

            <h2 className="font-heading font-light text-elvara-ivory leading-tight tracking-[0.02em] text-fluid-section">
              Connect With{' '}
              <span className="italic text-elvara-gold">Our</span>{' '}
              Startup
            </h2>

            <div className="w-10 sm:w-12 h-px bg-elvara-gold/40 my-5 sm:my-6" />

            <p className="text-elvara-muted/80 text-[13px] sm:text-sm md:text-base leading-relaxed font-body font-light mb-8 sm:mb-10">
              Have questions about our college project, feedback on our fragrance formulations, or want to connect with the founder? We'd love to hear from you.
            </p>

            {/* Contact details list card with generous internal padding */}
            <div className="space-y-5 p-6 sm:p-8 bg-elvara-black/70 border border-elvara-border/40 shadow-xl">
              {[
                {
                  label: 'Founder & Creator',
                  value: brandInfo.founder,
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  ),
                },
                {
                  label: 'Direct Email',
                  value: brandInfo.email,
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  ),
                },
                {
                  label: 'Startup Location',
                  value: brandInfo.location,
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                },
                {
                  label: 'Project Rights',
                  value: brandInfo.rights,
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="text-elvara-gold/80 mt-1 shrink-0">{item.icon}</div>
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-elvara-muted/50 font-body block">
                      {item.label}
                    </span>
                    <span className="text-elvara-ivory/90 text-[13px] sm:text-sm font-body font-light mt-0.5 block">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form Column with internal padding and controlled width */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-150 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-elvara-black/75 border border-elvara-border/50 p-6 sm:p-9 lg:p-10 shadow-2xl">
              <h3 className="font-heading font-light text-xl sm:text-2xl text-elvara-ivory mb-2">
                Send a Message to the Atelier
              </h3>
              <p className="text-xs text-elvara-muted/60 font-body font-light mb-7">
                Our ambassadors respond within twenty-four hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-elvara-muted/60 font-body block mb-2"
                  >
                    Your Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, name: e.target.value }))
                    }
                    required
                    className="w-full bg-elvara-dark/70 border border-elvara-border/60 px-4 py-3 min-h-11.5 text-elvara-ivory text-sm font-body font-light focus:outline-none focus:border-elvara-gold/70 transition-colors placeholder:text-elvara-muted/30 rounded-none"
                    placeholder="e.g. Lady Vivienne Westwood"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-elvara-muted/60 font-body block mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, email: e.target.value }))
                    }
                    required
                    className="w-full bg-elvara-dark/70 border border-elvara-border/60 px-4 py-3 min-h-11.5 text-elvara-ivory text-sm font-body font-light focus:outline-none focus:border-elvara-gold/70 transition-colors placeholder:text-elvara-muted/30 rounded-none"
                    placeholder="e.g. vivienne@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-elvara-muted/60 font-body block mb-2"
                  >
                    Message or Consultation Request
                  </label>
                  <textarea
                    id="contact-message"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, message: e.target.value }))
                    }
                    required
                    rows={4}
                    className="w-full bg-elvara-dark/70 border border-elvara-border/60 p-4 min-h-30 text-elvara-ivory text-sm font-body font-light focus:outline-none focus:border-elvara-gold/70 transition-colors placeholder:text-elvara-muted/30 resize-none rounded-none"
                    placeholder="Describe your inquiry or preferred fragrance profile..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-elvara-gold text-elvara-black px-8 sm:px-10 py-3.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-elvara-gold-soft transition-all duration-300 shadow-md font-body min-h-11.5"
                >
                  <span>Transmit Inquiry</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Success feedback */}
                {submitted && (
                  <div className="p-4 bg-emerald-950/40 border border-emerald-700/50 text-emerald-300 text-xs sm:text-sm flex items-center gap-3 animate-fade-in font-body">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Thank you. Your message has reached our private concierge. We will respond promptly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
