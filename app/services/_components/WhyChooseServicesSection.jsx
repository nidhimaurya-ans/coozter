import AnimatedSection from "@/components/AnimatedSection";
import { sectionSpace, whyChooseBlocks } from "../_data/servicesContent";
import MotionItem from "./MotionItem";
import SectionHeader from "./SectionHeader";

export default function WhyChooseServicesSection() {
  return (
    <AnimatedSection className={sectionSpace}>
      <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <SectionHeader
          eyebrow="Why choose Coozter"
          title="Why Businesses Choose Our Digital Marketing Agency"
          text="We combine strategy, creativity, technology, and data to help your business grow with confidence."
          className="lg:sticky lg:top-28"
        />

        <div className="grid border-y border-slate-300/80 sm:grid-cols-2">
          {whyChooseBlocks.map(([Icon, title, text], index) => (
            <MotionItem
              key={title}
              direction={index % 2 ? "left" : "right"}
              delay={index * 0.06}
              className="group service-motion-line border-b border-slate-300/80 py-6 transition-colors duration-300 hover:bg-blue-50/40 sm:px-6 sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full text-blue-700 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={18} />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-medium text-ink">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink/64">{text}</p>
            </MotionItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
