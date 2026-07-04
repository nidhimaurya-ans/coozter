import { FiCheckCircle } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import { plans, sectionSpace } from "../_data/servicesContent";
import MotionItem from "./MotionItem";
import SectionHeader from "./SectionHeader";

export default function PackagesSection() {
  return (
    <AnimatedSection className={sectionSpace}>
      <SectionHeader
        align="center"
        eyebrow="Plans"
        title="Flexible Digital Marketing Plans"
        text="Choose a plan based on your current business stage and growth goals."
      />

      <div className="mt-12 grid border-y border-slate-300/80 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <MotionItem
            as="article"
            key={plan.name}
            direction="up"
            delay={index * 0.1}
            className="service-motion-line relative border-b border-slate-300/80 py-8 transition-colors duration-300 hover:bg-blue-50/40 lg:border-b-0 lg:border-r lg:px-7 lg:last:border-r-0"
          >
            {plan.badge ? (
              <span className="absolute right-5 top-5 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                {plan.badge}
              </span>
            ) : null}
            <h3 className="max-w-[14rem] font-serif text-4xl font-medium text-ink">
              {plan.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-ink/64">{plan.bestFor}</p>
            <p className="mt-7 font-serif text-5xl font-medium text-blue-700">
              {plan.price}
            </p>
            <ul className="mt-7 grid gap-3">
              {plan.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-ink/68">
                  <FiCheckCircle className="mt-1 shrink-0 text-blue-600" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <MagneticButton href="/contact" variant={plan.badge ? "dark" : "light"}>
                {plan.cta}
              </MagneticButton>
            </div>
          </MotionItem>
        ))}
      </div>
    </AnimatedSection>
  );
}
