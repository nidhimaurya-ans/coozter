import AnimatedSection from "@/components/AnimatedSection";
import { industries, sectionSpace } from "../_data/servicesContent";
import MotionItem from "./MotionItem";
import SectionHeader from "./SectionHeader";

export default function IndustriesSection() {
  return (
    <AnimatedSection className={sectionSpace}>
      <SectionHeader
        align="center"
        eyebrow="Industries"
        title="Digital Marketing for Every Growth-Focused Business"
        text="We work with businesses that want better visibility, stronger branding, and consistent lead generation."
      />

      <div className="mt-12 grid border-y border-slate-300/80 sm:grid-cols-2 lg:grid-cols-5">
        {industries.map(([Icon, title, text], index) => (
          <MotionItem
            key={title}
            direction={index % 2 ? "left" : "right"}
            delay={index * 0.04}
            className="service-motion-line border-b border-slate-300/80 py-6 transition-colors duration-300 hover:bg-blue-50/40 sm:px-5 sm:[&:nth-child(odd)]:border-r lg:border-r lg:[&:nth-child(5n)]:border-r-0 lg:[&:nth-last-child(-n+5)]:border-b-0"
          >
            <Icon className="text-blue-700" size={22} />
            <h3 className="mt-5 font-serif text-2xl font-medium text-ink">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-ink/62">{text}</p>
          </MotionItem>
        ))}
      </div>
    </AnimatedSection>
  );
}
