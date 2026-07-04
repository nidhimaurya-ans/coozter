import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import { caseStudies, sectionSpace } from "../_data/servicesContent";
import MotionItem from "./MotionItem";
import SectionHeader from "./SectionHeader";

export default function CaseStudySection() {
  return (
    <AnimatedSection className={sectionSpace}>
      <SectionHeader
        align="center"
        eyebrow="Growth stories"
        title="Growth Stories From Our Work"
        text="See how strategic marketing can improve visibility, traffic, and conversions."
      />

      <div className="mt-12 grid border-y border-slate-300/80 lg:grid-cols-2">
        {caseStudies.map((study, index) => (
          <MotionItem
            as="article"
            key={study.title}
            direction={index % 2 ? "left" : "right"}
            delay={index * 0.08}
            className="service-motion-line py-8 transition-colors duration-300 hover:bg-blue-50/40 lg:px-7 lg:first:border-r lg:first:border-slate-300/80"
          >
            <p className="eyebrow">Case 0{index + 1}</p>
            <h3 className="mt-4 font-serif text-4xl font-medium text-ink">
              {study.title}
            </h3>
            {[
              ["Challenge", study.challenge],
              ["Solution", study.solution],
              ["Result", study.result],
            ].map(([label, value]) => (
              <div key={label} className="mt-5 border-t border-slate-200 pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
                  {label}
                </p>
                <p className="mt-2 text-base leading-7 text-ink/66">{value}</p>
              </div>
            ))}
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
            >
              View Case Study <FiArrowRight size={16} />
            </Link>
          </MotionItem>
        ))}
      </div>
    </AnimatedSection>
  );
}
