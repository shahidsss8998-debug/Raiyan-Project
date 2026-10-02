import { Link } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import SectionHeading from '../components/SectionHeading';

const hubs = [
  {
    city: 'Pernambut Atelier & Studio',
    address: 'Pernambut, Tamil Nadu, India — 635810',
    phone: 'zakwanraiyan47@gmail.com',
    hours: 'Mon – Sat: 09:30 – 18:30 IST',
    badge: 'Headquarters & Studio',
  },
  {
    city: 'College Innovation Cell',
    address: 'Student Research & Fragrance Formulation Lab',
    phone: 'Founded & Led by Raiyan S A',
    hours: 'Academic Year 2026',
    badge: 'College Project',
  },
  {
    city: 'Direct Founder Concierge',
    address: 'Custom blends, feedback & sample queries',
    phone: '+91 94872 65295',
    hours: 'Email: zakwanraiyan47@gmail.com',
    badge: 'Direct Connect',
  },
];

export default function Contact() {
  return (
    <div className="bg-elvara-black min-h-screen pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-32 overflow-x-hidden w-full">
      {/* Header Container */}
      <div className="container-narrow mb-8 sm:mb-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-body text-elvara-muted/50 mb-8 sm:mb-12 tracking-wider">
          <Link to="/" className="hover:text-elvara-gold transition-colors py-1">Home</Link>
          <span className="text-elvara-border">/</span>
          <span className="text-elvara-gold">Contact & Inquiries</span>
        </div>

        <SectionHeading
          number="V"
          subtitle="Startup Connect"
          title={
            <>
              Connect With the <span className="italic text-elvara-gold">Founder</span>
            </>
          }
          description="Whether you have questions about our college project blends, formulation inquiries, or want to test early samples, our founder Raiyan S A is directly available."
        />
      </div>

      {/* Main Contact Section with interactive form */}
      <ContactSection />

      {/* Flagship Salons Grid */}
      <section className="section-spacing-standard bg-elvara-black relative border-t border-elvara-border/30 overflow-hidden">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18 lg:mb-20 px-2">
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-elvara-gold/80 font-body block mb-3 font-medium">
              Startup Hubs & Contacts
            </span>
            <h2 className="font-heading font-light text-elvara-ivory tracking-wide text-fluid-section">
              Our Workshop & <span className="italic text-elvara-gold">Locations</span>
            </h2>
            <div className="w-10 sm:w-12 h-px bg-elvara-gold/40 mx-auto my-5 sm:my-6" />
            <p className="text-elvara-muted/70 text-xs sm:text-sm md:text-[15px] font-body font-light leading-relaxed">
              Based out of Pernambut, Tamil Nadu. Reach out directly for sample testing, inquiries, and collaboration.
            </p>
          </div>

          {/* 1 Col Mobile -> 3 Col Tablet/Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-md md:max-w-none mx-auto w-full">
            {hubs.map((b) => (
              <div
                key={b.city}
                className="bg-elvara-dark/70 border border-elvara-border/40 p-6 sm:p-8 lg:p-9 hover:border-elvara-gold/40 transition-colors duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3.5">
                    <div className="w-2 h-2 rounded-full bg-elvara-gold" />
                    <span className="text-[10px] tracking-[0.2em] uppercase text-elvara-gold/80 font-body font-medium">
                      {b.badge}
                    </span>
                  </div>
                  <h3 className="font-heading font-light text-xl sm:text-2xl text-elvara-ivory mb-3.5">
                    {b.city}
                  </h3>
                  <div className="space-y-2 text-xs sm:text-[13px] text-elvara-muted/70 font-body font-light">
                    <p>{b.address}</p>
                    <p className="text-elvara-gold/90 font-medium">{b.phone}</p>
                  </div>
                </div>
                <p className="pt-3.5 mt-5 text-elvara-muted/50 border-t border-elvara-border/25 text-xs font-body">
                  {b.hours}
                </p>
              </div>
            ))}
          </div>

          {/* Press and Concierge Inquiries */}
          <div className="mt-14 sm:mt-20 text-center text-xs sm:text-sm font-body text-elvara-muted/60 space-y-2">
            <p>Founder & Project Lead: <span className="text-elvara-gold">Raiyan S A</span></p>
            <p>Direct Inquiries & Feedback: <a href="mailto:zakwanraiyan47@gmail.com" className="text-elvara-gold underline">zakwanraiyan47@gmail.com</a></p>
            <p className="text-[11px] text-elvara-muted/40">Location: Pernambut, Tamil Nadu, India — 635810 · Est. 2026 · All Rights Reserved</p>
          </div>
        </div>
      </section>
    </div>
  );
}
