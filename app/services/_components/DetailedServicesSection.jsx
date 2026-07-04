import { FiCheckCircle } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import { detailedServices, sectionSpace } from "../_data/servicesContent";
import MotionItem from "./MotionItem";
import SectionHeader from "./SectionHeader";

export default function DetailedServicesSection() {
  return (
    <AnimatedSection className={sectionSpace}>
      <span id="affiliate-branding" className="block scroll-mt-32" />
      <span id="content-marketing" className="block scroll-mt-32" />
      <SectionHeader
        align="center"
        eyebrow="Service depth"
        title="Detailed Digital Marketing Services"
        text="Each service is built around the same goal: clearer visibility, better leads, stronger conversion paths, and reporting your team can actually use."
      />

      <div className="mt-14 border-y border-slate-300/80">
        {detailedServices.map((service, index) => (
          <MotionItem
            as="article"
            key={service.title}
            id={service.slug}
            direction={index % 2 ? "left" : "right"}
            delay={0.04}
            className="service-motion-line grid gap-8 border-b border-slate-300/80 py-10 last:border-b-0 lg:grid-cols-[1.02fr_0.98fr] lg:py-14 xl:gap-12"
          >
            <div className={index % 2 ? "lg:order-2" : ""}>
              <p className="eyebrow">{service.eyebrow}</p>
              <h3 className="mt-4 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-5xl">
                {service.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-ink/66">
                {service.description}
              </p>

              <div className="mt-7">
                <MagneticButton href={service.href}>{service.cta}</MagneticButton>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {service.bestFor.map((chip) => (
                  <span
                    key={chip}
                    className="motion-drift rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-800"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-y border-slate-300/80 py-5 lg:border-l lg:border-y-0 lg:py-0 lg:pl-8">
              <ServiceVisual service={service} index={index} />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.work.map((item) => (
                  <div key={item} className="flex gap-2 text-sm leading-6 text-ink/68">
                    <FiCheckCircle className="mt-1 shrink-0 text-blue-600" size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </MotionItem>
        ))}
      </div>
    </AnimatedSection>
  );
}

function ServiceVisual({ service, index }) {
  const Icon = service.icon;
  return (
    <div className={`overflow-hidden bg-gradient-to-br ${service.accent} p-5 text-white`}>
      <div className="flex items-center justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-white/16">
          <Icon size={22} />
        </div>
        <span className="rounded-full bg-white/14 px-3 py-1 text-xs font-semibold">
          Live plan 0{index + 1}
        </span>
      </div>
      <div className="mt-8 grid gap-3">
        {[72, 56, 84, 68].map((width, itemIndex) => (
          <div key={width} className="bg-white/12 p-3">
            <div className="flex items-center justify-between text-xs font-semibold text-white/80">
              <span>Growth signal</span>
              <span>{width}%</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/18">
              <span
                className="motion-flow-fill block h-full rounded-full bg-[linear-gradient(90deg,#ffffff,#bfecff,#ffffff)]"
                style={{ width: `${width - itemIndex * 3}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
