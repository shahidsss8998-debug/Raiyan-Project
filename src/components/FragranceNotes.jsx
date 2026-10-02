import { useScrollReveal } from '../hooks/useScrollReveal';

const notes = [
  {
    type: 'Top Notes',
    timeline: 'First 15 Minutes',
    description: 'The immediate sensory greeting — luminous, delicate, and inviting.',
    ingredients: ['Calabrian Bergamot', 'Kashmiri Saffron', 'Pink Peppercorn', 'Tunisian Neroli', 'Cardamom Pods'],
  },
  {
    type: 'Heart Notes',
    timeline: '2 to 6 Hours',
    description: 'The poetic essence and character of the formulation — opulent, rich, and intricate.',
    ingredients: ['Grasse Rose de Mai', 'Sambac Jasmine Absolute', 'Tuscan Iris Butter', 'Smoky Incense', 'Violet Leaf'],
  },
  {
    type: 'Base Notes',
    timeline: 'Up to 24+ Hours',
    description: 'The lingering architectural memory — ancient woods, warm resins, and velvet sillage.',
    ingredients: ['Aged Laotian Oud', 'Amber Royale', 'Madagascar Vanilla Absolute', 'Mysore Sandalwood', 'Skin Musk'],
  },
];

export default function FragranceNotes() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section className="section-spacing-standard bg-elvara-dark relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-80 bg-elvara-gold/2 rounded-full blur-3xl pointer-events-none" />

      <div className="container-luxury relative">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-18 lg:mb-20 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-3.5">
            <div className="w-6 sm:w-8 h-px bg-elvara-gold/50" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-elvara-gold/80 font-body font-medium">
              Olfactory Architecture
            </span>
            <div className="w-6 sm:w-8 h-px bg-elvara-gold/50" />
          </div>
          <h2 className="font-heading font-light text-elvara-ivory tracking-[0.02em] text-fluid-section">
            Anatomy of a <span className="italic text-elvara-gold">Fragrance</span>
          </h2>
          <p className="text-elvara-muted/70 text-xs sm:text-sm md:text-[15px] font-body font-light mt-3.5 leading-relaxed max-w-140 mx-auto px-2">
            A high perfume unfolds through time like a classical musical movement. Each tier reveals nuanced facets as it warms against skin.
          </p>
        </div>

        {/* 1 Column on Mobile, 3 Columns on Tablet/Desktop with generous card padding */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-95 md:max-w-none mx-auto w-full">
          {notes.map((note, index) => (
            <div
              key={note.type}
              className={`bg-elvara-surface/50 border border-elvara-border/40 hover:border-elvara-gold/40 p-7 sm:p-8 lg:p-9 transition-all duration-700 shadow-xl flex flex-col justify-between ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 120}ms` : '0ms',
              }}
            >
              <div>
                {/* Header info */}
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-elvara-gold/30 font-heading text-4xl sm:text-5xl font-light">
                    0{index + 1}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-elvara-gold/80 font-body font-medium">
                    {note.timeline}
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl text-elvara-ivory tracking-wide font-light mb-2.5">
                  {note.type}
                </h3>

                <p className="text-elvara-muted/70 text-xs sm:text-[13px] font-body font-light leading-relaxed mb-6">
                  {note.description}
                </p>

                <div className="w-8 sm:w-10 h-px bg-elvara-gold/30 mb-6" />

                {/* Key Ingredients */}
                <ul className="space-y-3">
                  {note.ingredients.map((ingredient) => (
                    <li key={ingredient} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-elvara-gold/60 rounded-full shrink-0" />
                      <span className="text-elvara-ivory/85 text-xs sm:text-sm font-body font-light tracking-wide">
                        {ingredient}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom tier indicator */}
              <div className="mt-8 pt-4 border-t border-elvara-border/25 text-[10px] tracking-[0.2em] uppercase text-elvara-muted/50 font-body">
                Movement {index + 1} of 3
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
