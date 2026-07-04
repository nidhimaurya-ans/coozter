import AnimatedSection from "@/components/AnimatedSection";
import { trackingMetrics } from "../_data/affiliateContent";

export default function AffiliateTrackingSection() {
  return (
    <AnimatedSection className="container-pad py-12 sm:py-16 lg:py-20">
      <div className="grid gap-10 rounded-[2rem] bg-[linear-gradient(135deg,#071b33,#1d5edb_62%,#2bbcff)] p-6 text-white md:p-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-100">
            Tracking and reporting
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight md:text-6xl">
            Tracking that respects the relationship and the revenue.
          </h2>
        </div>
        <div className="rounded-[1.5rem] bg-white/12 p-5 ring-1 ring-white/16">
          {trackingMetrics.map(([metric, value]) => (
            <div
              key={metric}
              className="flex items-center justify-between border-b border-white/14 py-5 last:border-b-0"
            >
              <span className="text-white/76">{metric}</span>
              <span className="font-serif text-3xl font-medium text-white">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
