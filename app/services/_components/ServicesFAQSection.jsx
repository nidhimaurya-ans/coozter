"use client";

import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import { sectionSpace } from "../_data/servicesContent";
import useServicesPageContent from "@/src/hooks/useServicesPageContent";

export default function ServicesFAQSection() {
  const { faq } = useServicesPageContent();

  return (
    <AnimatedSection className={`${sectionSpace} mt-10`}>
      <div className="mx-auto max-w-4xl ">
        <div className="mx-auto max-w-3xl text-center">
          {/* <p className="eyebrow justify-center">Questions</p> */}
          <h2 className="mt-4 font-serif text-[2.5rem] leading-tight text-ink md:text-4xl">
            {faq.heading}
          </h2>
        </div>

        <div className="mt-10">
          <FAQAccordion items={faq.items} defaultOpenIndex={null} />
        </div>
      </div>
    </AnimatedSection>
  );
}
