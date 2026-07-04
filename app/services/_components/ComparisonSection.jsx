import AnimatedSection from "@/components/AnimatedSection";
import { comparisonRows, sectionSpace } from "../_data/servicesContent";
import MotionItem from "./MotionItem";
import SectionHeader from "./SectionHeader";

export default function ComparisonSection() {
  return (
    <AnimatedSection className={sectionSpace}>
      <SectionHeader
        align="center"
        eyebrow="Service fit"
        title="Which Service Is Right for You?"
      />

      <div className="mx-auto mt-10 max-w-5xl overflow-hidden border-y border-slate-300/80">
        <div className="hidden grid-cols-[1fr_0.8fr] border-b border-slate-300/80 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-blue-800 sm:grid">
          <span>Goal</span>
          <span>Best Service</span>
        </div>
        <div className="divide-y divide-slate-200">
          {comparisonRows.map(([goal, service], index) => (
            <MotionItem
              key={goal}
              direction="right"
              delay={index * 0.045}
              className="service-motion-line grid gap-2 px-5 py-4 transition hover:bg-blue-50/40 sm:grid-cols-[1fr_0.8fr] sm:px-6"
            >
              <span className="text-sm font-semibold text-ink">{goal}</span>
              <span className="text-sm font-bold text-blue-700">{service}</span>
            </MotionItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
