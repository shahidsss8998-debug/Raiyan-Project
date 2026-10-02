import { useScrollReveal } from '../hooks/useScrollReveal';
import aboutImage from '../assets/images/atelier_still_life.jpg';

export default function AboutSection() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section className="section-spacing-major bg-elvara-black relative overflow-hidden">
      <div className="container-luxury relative">
        <div
          ref={ref}
          className="grid lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-center"
        >
          {/* Image Column: Framed gallery photograph feel */}
          <div
            className={`lg:col-span-6 relative transition-all duration-700 max-w-125 lg:max-w-none mx-auto w-full ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative p-4 sm:p-6 lg:p-7 bg-elvara-dark/80 border border-elvara-border/50 shadow-2xl">
              <div className="relative overflow-hidden aspect-4/3 sm:aspect-16/11 lg:aspect-4/3 w-full">
                <img
                  src={aboutImage}
                  alt="Perfume Showcase luxury flacon and botanical distillation still life"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Decorative gold corners */}
              <div className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-2 border-l-2 border-elvara-gold/80 pointer-events-none" />
              <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-2 border-r-2 border-elvara-gold/80 pointer-events-none" />
            </div>

            {/* Stat pill: In-flow on mobile, overlapping badge on md+ */}
            <div className="mt-4 md:mt-0 md:absolute md:-right-4 md:-bottom-5 bg-elvara-black/95 border border-elvara-gold/40 p-4 sm:p-5 shadow-2xl text-center md:text-left">
              <div className="text-elvara-gold text-xl sm:text-2xl lg:text-3xl font-heading font-light">Est. 2026</div>
              <div className="text-elvara-muted/60 text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mt-0.5 font-body">
                Pernambut · Tamil Nadu · India
              </div>
            </div>
          </div>

          {/* Text Content Column: Controlled max-width */}
          <div
            className={`lg:col-span-6 transition-all duration-700 delay-150 text-center lg:text-left max-w-125 mx-auto lg:mx-0 w-full ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-4 sm:mb-5">
              <div className="w-6 sm:w-10 h-px bg-elvara-gold/60" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-elvara-gold/90 font-body font-medium">
                Our Startup Journey · College Project
              </span>
              <div className="w-6 sm:w-10 h-px bg-elvara-gold/60 lg:hidden" />
            </div>

            <h2 className="font-heading font-light text-elvara-ivory leading-tight tracking-[0.02em] text-fluid-section">
              Handcrafted Fragrance,{' '}
              <span className="italic text-elvara-gold">Born in</span>{' '}
              Pernambut.
            </h2>

            <div className="w-10 sm:w-12 h-px bg-elvara-gold/40 my-5 sm:my-6 mx-auto lg:mx-0" />

            <div className="space-y-4 text-elvara-muted/80 text-[14px] sm:text-[15px] md:text-base leading-relaxed font-body font-light">
              <p>
                Started in 2026 in Pernambut, Tamil Nadu, India (635810) by Raiyan S A, this project began as an ambitious college startup initiative. We set out to explore the art of fragrance chemistry and modern scent formulation right from our local workshop.
              </p>
              <p>
                Instead of mass-produced synthetic commercial sprays, our startup experiments with handcrafted accords, rich natural woods, golden resins, and pure botanical extracts. We treat every trial blend as a canvas to discover unique olfactive signatures.
              </p>
              <p>
                As a young emerging startup, every bottle represents hours of testing, feedback, and passion. All project designs, blends, and conceptual rights are proudly developed by Raiyan S A.
              </p>
            </div>

            {/* Stats row with responsive columns */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-elvara-border/30 max-w-115 mx-auto lg:mx-0">
              {[
                { value: '2026', label: 'Founded Year' },
                { value: 'Pernambut', label: 'Tamil Nadu (635810)' },
                { value: 'Raiyan S A', label: 'Founder & Creator' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-elvara-gold text-lg sm:text-xl lg:text-2xl font-heading font-light leading-none mb-1 truncate">
                    {stat.value}
                  </div>
                  <div className="text-elvara-muted/60 text-[9px] sm:text-[10px] tracking-[0.08em] sm:tracking-[0.12em] uppercase font-body line-clamp-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
