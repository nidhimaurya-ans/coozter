import AnimatedSection from "@/components/AnimatedSection";
import { metrics } from "../_data/servicesContent";

export default function MetricsStrip() {
  return (
    <AnimatedSection className="container-pad py-12 lg:py-20">
      <div className="grid gap-5 rounded-[2rem] border border-slate-300/80 bg-white/84 p-5 shadow-[0_22px_70px_rgba(14,62,128,0.07)] md:grid-cols-4 md:p-7">
        {metrics.map(([value, label], index) => (
          <div
            key={label}
            className={`border-b border-slate-300/80 pb-5 last:border-b-0 md:border-b-0 md:border-r md:pb-0 md:pr-5 md:last:border-r-0 anim-fade-up anim-delay-${Math.min(index + 1, 5)}`}
          >
            <p className="font-serif text-5xl leading-none text-moss">
              {value}
            </p>
            <p className="mt-3 text-sm font-semibold text-ink/58">{label}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
