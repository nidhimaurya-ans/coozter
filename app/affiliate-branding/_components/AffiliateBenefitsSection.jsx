import AnimatedSection from "@/components/AnimatedSection";
import { benefits } from "../_data/affiliateContent";

export default function AffiliateBenefitsSection() {
  return (
    <AnimatedSection className="container-pad py-12 sm:py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="eyebrow text-moss">Why it matters</p>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-ink md:text-6xl">
            Affiliate branding works when trust already exists, but the system
            does not.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map(([Icon, title, text], index) => (
            <article
              key={title}
              className={`border-t border-slate-300/80 pt-5 anim-fade-up anim-delay-${Math.min(index + 1, 5)}`}
            >
              <Icon className="text-moss" size={22} />
              <h3 className="mt-5 font-serif text-2xl font-medium text-ink">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink/64">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
