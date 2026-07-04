import AnimatedSection from "@/components/AnimatedSection";
import { sectionSpace, trustIndustries } from "../_data/servicesContent";
import MotionItem from "./MotionItem";
import SectionHeader from "./SectionHeader";

export default function TrustStripSection() {
  return (
    <AnimatedSection className={sectionSpace}>
      <SectionHeader
        align="center"
        eyebrow="Trusted growth categories"
        title="Trusted by Businesses Across Industries"
        text="From local service providers to growing eCommerce brands, we create digital marketing systems that improve visibility, generate qualified leads, and build long-term customer relationships."
      />

      <div className="mt-10 grid border-y border-slate-300/80 sm:grid-cols-2 lg:grid-cols-4">
        {trustIndustries.map(([Icon, title], index) => (
          <MotionItem
            key={title}
            direction={index % 2 ? "left" : "right"}
            delay={index * 0.05}
            className="group service-motion-line flex items-center gap-4 border-b border-slate-300/80 py-5 transition-colors duration-300 hover:bg-blue-50/40 sm:px-5 sm:[&:nth-child(odd)]:border-r lg:border-r lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-last-child(-n+4)]:border-b-0"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-blue-700 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
              <Icon size={18} />
            </span>
            <span className="text-sm font-semibold text-ink">{title}</span>
          </MotionItem>
        ))}
      </div>
    </AnimatedSection>
  );
}
