import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection';
import SectionHeading from '../components/SectionHeading';

const philosophyPillars = [
  {
    num: '01',
    title: 'Pure Regional & Exotic Botanicals',
    description: 'We believe genuine fragrance begins with honest natural extracts. We source botanical essences, rich resins, and aromatic absolutes directly, ensuring unfiltered depth and longevity.',
  },
  {
    num: '02',
    title: 'Small-Batch Handcrafted Blending',
    description: 'Each formula is developed and blended in small batches at our Pernambut workshop. Every ratio is tested meticulously to achieve an effortless balance between top, heart, and base notes.',
  },
  {
    num: '03',
    title: 'Minimalist & Recyclable Flacons',
    description: 'Our heavy dark flacons shield delicate aromatic compounds from UV light and heat, designed as durable, refillable bottles that celebrate minimalist startup elegance.',
  },
];

export default function About() {
  return (
    <div className="bg-elvara-black min-h-screen pt-28 sm:pt-36 lg:pt-40 pb-24 sm:pb-32 overflow-x-hidden w-full">
      {/* Header Container */}
      <div className="container-luxury mb-8 sm:mb-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-body text-elvara-muted/50 mb-8 sm:mb-12 tracking-wider">
          <Link to="/" className="hover:text-elvara-gold transition-colors py-1">Home</Link>
          <span className="text-elvara-border">/</span>
          <span className="text-elvara-gold">About Our Startup</span>
        </div>

        <SectionHeading
          number="IV"
          subtitle="Our Startup Journey"
          title={
            <>
              Crafting Scents Born in <span className="italic text-elvara-gold">Pernambut</span>
            </>
          }
          description="Founded in 2026 in Pernambut, Tamil Nadu, Perfume Showcase Website was launched by Raiyan S A as a college startup dedicated to the honest craft of artisanal perfumery."
        />
      </div>

      {/* Main About Component */}
      <AboutSection />

      {/* Philosophy Pillars Section */}
      <section className="section-spacing-standard bg-elvara-dark relative border-t border-elvara-border/30 overflow-hidden">
        <div className="container-luxury">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18 lg:mb-20 px-2">
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-elvara-gold/80 font-body block mb-3 font-medium">
              Startup Principles
            </span>
            <h2 className="font-heading font-light text-elvara-ivory tracking-wide text-fluid-section">
              The Three <span className="italic text-elvara-gold">Pillars</span>
            </h2>
            <div className="w-10 sm:w-12 h-px bg-elvara-gold/40 mx-auto my-5 sm:my-6" />
            <p className="text-elvara-muted/70 text-xs sm:text-sm md:text-[15px] font-body font-light leading-relaxed">
              Every blend created in our workshop follows three core principles of independent fragrance formulation.
            </p>
          </div>

          {/* 1 Col Mobile -> 3 Col Tablet/Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-md md:max-w-none mx-auto w-full">
            {philosophyPillars.map((pillar) => (
              <div
                key={pillar.num}
                className="bg-elvara-surface/40 border border-elvara-border/40 p-6 sm:p-8 lg:p-9 relative group hover:border-elvara-gold/40 transition-all duration-500 shadow-xl"
              >
                <span className="text-elvara-gold/30 font-heading text-4xl sm:text-5xl block mb-3.5">
                  {pillar.num}
                </span>
                <h3 className="font-heading font-light text-xl sm:text-2xl text-elvara-ivory mb-3">
                  {pillar.title}
                </h3>
                <p className="text-elvara-muted/75 text-xs sm:text-sm font-body font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfumer Journal Quote */}
      <section className="section-spacing-standard bg-elvara-black border-y border-elvara-border/30 text-center relative overflow-hidden">
        <div className="container-reading">
          <span className="text-elvara-gold/40 text-3xl sm:text-5xl font-heading block mb-2 sm:mb-4">“</span>
          <p className="font-heading font-light text-elvara-ivory leading-relaxed italic text-fluid-quote">
            A fragrance must tell a story before you ever introduce yourself. It is your invisible biography, lingering like memory in an empty room.
          </p>
          <div className="w-10 sm:w-12 h-px bg-elvara-gold/40 mx-auto my-5 sm:my-7" />
          <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-elvara-gold/80 font-body font-medium">
            Raiyan S A · Founder & Formulator · Pernambut (2026)
          </p>
        </div>
      </section>
    </div>
  );
}
