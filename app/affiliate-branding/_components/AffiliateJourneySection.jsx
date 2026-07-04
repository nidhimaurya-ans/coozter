import AnimatedSection from "@/components/AnimatedSection";
import { journey } from "../_data/affiliateContent";

export default function AffiliateJourneySection() {
  return (
    <AnimatedSection className="container-pad py-12 sm:py-16 lg:py-20">
      <div className="mb-10 max-w-3xl">
        <p className="eyebrow text-moss">Partner journey</p>
        <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-ink md:text-6xl">
          From referral list to repeatable growth channel.
        </h2>
      </div>
      <div className="relative grid gap-4 lg:grid-cols-5">
        <span className="absolute left-6 top-0 hidden h-full w-px bg-slate-300/80 md:block lg:left-0 lg:top-7 lg:h-px lg:w-full" />
        {journey.map(([step, text], index) => (
          <article
            key={step}
            className={`relative rounded-[1.25rem] border border-slate-300/80 bg-white p-5 anim-fade-up anim-delay-${Math.min(index + 1, 5)}`}
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[linear-gradient(135deg,#071b33,#1d5edb)] text-sm font-bold text-white">
              {index + 1}
            </span>
            <h3 className="mt-5 font-serif text-2xl font-medium text-ink">
              {step}
            </h3>
            <p className="mt-3 text-sm leading-7 text-ink/64">{text}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
