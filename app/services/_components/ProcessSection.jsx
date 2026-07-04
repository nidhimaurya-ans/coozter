import AnimatedSection from "@/components/AnimatedSection";
import { sectionSpace, workflow } from "../_data/servicesContent";
import MotionItem from "./MotionItem";
import SectionHeader from "./SectionHeader";

export default function ProcessSection() {
  return (
    <AnimatedSection className={sectionSpace}>
      <SectionHeader
        align="center"
        eyebrow="How we work"
        title="Our Simple Growth Process"
        text="We follow a clear step-by-step process so your marketing is strategic, measurable, and easy to understand."
      />

      <div className="relative mt-12 grid border-y border-slate-300/80 lg:grid-cols-5">
        {workflow.map(([title, text], index) => (
          <MotionItem
            key={title}
            direction="up"
            delay={index * 0.08}
            className="relative service-motion-line border-b border-slate-300/80 py-6 transition-colors duration-300 last:border-b-0 hover:bg-blue-50/40 lg:border-b-0 lg:border-r lg:px-5 lg:last:border-r-0"
          >
            <span className="font-serif text-5xl text-blue-600/22">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-6 font-serif text-3xl font-medium text-ink">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-ink/64">{text}</p>
          </MotionItem>
        ))}
      </div>
    </AnimatedSection>
  );
}
