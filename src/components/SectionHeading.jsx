import { useScrollReveal } from '../hooks/useScrollReveal';

export default function SectionHeading({
  number,
  subtitle,
  title,
  description,
  align = 'center',
}) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`mb-12 sm:mb-16 md:mb-20 ${
        align === 'center' ? 'text-center' : 'text-left'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} transition-all duration-700`}
    >
      {/* Number & subtitle */}
      <div
        className={`flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-4 ${
          align === 'center' ? 'justify-center' : 'justify-start'
        }`}
      >
        {number && (
          <span className="text-elvara-gold/50 text-[10px] sm:text-[11px] tracking-[0.2em] font-body font-medium">
            {number}
          </span>
        )}
        {number && subtitle && (
          <div className="w-5 sm:w-6 h-px bg-elvara-gold/40" />
        )}
        {subtitle && (
          <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-elvara-gold/80 font-body font-medium">
            {subtitle}
          </span>
        )}
      </div>

      {/* Title with fluid scaling and controlled max-width */}
      <h2 className={`font-heading font-light text-elvara-ivory leading-tight tracking-[0.02em] text-fluid-section ${
        align === 'center' ? 'max-w-190 mx-auto' : 'max-w-190'
      }`}>
        {title}
      </h2>

      {/* Description with comfortable reading line length */}
      {description && (
        <p className={`text-elvara-muted/75 text-xs sm:text-sm md:text-[15px] leading-relaxed mt-4 sm:mt-5 font-body font-light px-2 ${
          align === 'center' ? 'max-w-140 mx-auto' : 'max-w-140'
        }`}>
          {description}
        </p>
      )}

      {/* Gold decorative line */}
      <div
        className={`mt-6 sm:mt-8 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      >
        <div className="w-10 sm:w-12 h-px bg-elvara-gold/40 mx-auto" />
      </div>
    </div>
  );
}
