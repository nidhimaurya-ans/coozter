import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/data/faqs";

export default function AffiliateFAQSection() {
  return (
    <AnimatedSection className="container-pad py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center text-moss">Questions</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-ink md:text-6xl">
            Before we build your partner channel.
          </h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs.slice(0, 4)} />
        </div>
      </div>
    </AnimatedSection>
  );
}
