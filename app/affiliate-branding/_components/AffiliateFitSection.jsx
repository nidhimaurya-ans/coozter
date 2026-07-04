import AnimatedSection from "@/components/AnimatedSection";
import { fitSignals } from "../_data/affiliateContent";

export default function AffiliateFitSection() {
  return (
    <AnimatedSection className="container-pad py-12 sm:py-16 lg:py-20">
      <p className="eyebrow text-moss">Best fit moments</p>
      <div className="mt-8 grid border-y border-slate-300/80 sm:grid-cols-2">
        {fitSignals.map((item, index) => (
          <p
            key={item}
            className={`border-b border-slate-300/80 py-7 font-serif text-2xl font-medium leading-tight text-ink last:border-b-0 sm:px-7 sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 md:text-3xl anim-fade-up anim-delay-${Math.min(index + 1, 5)}`}
          >
            {item}
          </p>
        ))}
      </div>
    </AnimatedSection>
  );
}
