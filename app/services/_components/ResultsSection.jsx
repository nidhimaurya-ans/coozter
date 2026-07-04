import AnimatedSection from "@/components/AnimatedSection";
import { metrics, sectionSpace, trackedMetrics } from "../_data/servicesContent";
import MotionItem from "./MotionItem";
import SectionHeader from "./SectionHeader";

export default function ResultsSection() {
  return (
    <AnimatedSection className={sectionSpace}>
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Measurement"
            title="Marketing Built Around Measurable Results"
            text="We track the numbers that show real business progress. These are example focus metrics, not guaranteed outcomes."
          />
          <div className="mt-8 grid border-y border-slate-300/80 sm:grid-cols-2">
            {metrics.map(([value, label], index) => (
              <MotionItem
                key={label}
                direction="up"
                delay={index * 0.08}
                className="service-motion-line border-b border-slate-300/80 py-5 sm:px-5 sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <p className="font-serif text-4xl font-medium text-blue-700">
                  {value}
                </p>
                <p className="mt-2 text-sm font-semibold text-ink/62">{label}</p>
              </MotionItem>
            ))}
          </div>
        </div>

        <div className="border-y border-slate-300/80 py-5 anim-slide-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">
              Reporting view
            </p>
            <div className="mt-8 flex h-48 items-end gap-3">
              {[42, 64, 52, 78, 68, 88, 74, 92].map((height) => (
                <span
                  key={height}
                  className="motion-bar-pulse flex-1 rounded-t-xl bg-[linear-gradient(180deg,#2bbcff,#1d5edb)]"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {trackedMetrics.map((metric) => (
              <MotionItem
                key={metric}
                as="span"
                direction="scale"
                delay={0.02}
                className="rounded-full border border-blue-200 px-3 py-1.5 text-xs font-semibold text-blue-800"
              >
                {metric}
              </MotionItem>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
