"use client";

import {
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiRefreshCcw,
  FiShield,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import { sectionSpace } from "../_data/servicesContent";
import MotionItem from "./MotionItem";
import SectionHeader from "./SectionHeader";
import useServicesPageContent from "@/src/hooks/useServicesPageContent";

const outcomeIconMap = {
  globe: FiGlobe,
  refresh: FiRefreshCcw,
  shield: FiShield,
  target: FiTarget,
  "trending-up": FiTrendingUp,
};

const growthCardClasses = [
  "growth-canvas-card-one",
  "growth-canvas-card-two",
  "growth-canvas-card-three",
  "growth-canvas-card-four",
];

export default function ServicesGrowthCanvas() {
  const { growthEngine, outcomes, process } = useServicesPageContent();

  return (
    <>
      <AnimatedSection className={`${sectionSpace} overflow-hidden mt-8`}>
        <div className="grid gap-12 xl:grid-cols-[0.82fr_1.18fr] xl:items-center">
          <SectionHeader
            title={growthEngine.title}
            text={growthEngine.text}
          />

          <MotionItem
            direction="left"
            className="growth-canvas-stage relative mt-10 min-h-[24rem] sm:min-h-[30rem] lg:min-h-[32rem]"
          >
            <div
              className="absolute inset-0"
              aria-label={growthEngine.visualAlt}
              role="img"
            >
              <span className="growth-canvas-ring growth-canvas-ring-one" />
              <span className="growth-canvas-ring growth-canvas-ring-two" />
              <div className="growth-canvas-core">
                <span>{growthEngine.centerLabelLineOne}</span>
                <strong>{growthEngine.centerLabelLineTwo}</strong>
              </div>
              {growthEngine.cards.slice(0, 4).map(({ title, text }, index) => (
                <div
                  key={title}
                  className={`growth-canvas-card ${growthCardClasses[index]}`}
                >
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              ))}
              <span className="growth-canvas-scan growth-canvas-scan-one" />
              <span className="growth-canvas-scan growth-canvas-scan-two" />
            </div>
          </MotionItem>
        </div>
      </AnimatedSection>

      <AnimatedSection className={`${sectionSpace} mt-10 overflow-hidden`}>
        <SectionHeader
          align="center"
          // eyebrow="Outcomes"
          title={outcomes.title}
          text={outcomes.text}
        />

        <div className="mt-14 grid gap-8 xl:grid-cols-[1fr_0.72fr] xl:items-start">
          <div className="space-y-7">
            {outcomes.achievementBlocks.map(({ iconKey, title, text }, index) => {
              const Icon = outcomeIconMap[iconKey] || FiTarget;

              return (
                <MotionItem
                  key={title}
                  direction={index % 2 ? "left" : "right"}
                  delay={index * 0.06}
                  className="group flex gap-5"
                >
                  <span className="mt-1 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-600 text-white transition duration-300 group-hover:scale-110">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block font-serif text-3xl font-medium text-ink">
                      {title}
                    </span>
                    <span className="mt-2 block max-w-2xl text-sm leading-7 text-ink/64">
                      {text}
                    </span>
                  </span>
                </MotionItem>
              );
            })}
          </div>

          <MotionItem direction="left" className="metric-sculpture">
            {outcomes.metrics.map(({ value, label }, index) => (
              <span
                key={label}
                className={`metric-bubble metric-bubble-pos-${index + 1}`}
              >
                <span className="metric-bubble-content">
                  <strong>{value}</strong>
                  <small>{label}</small>
                </span>
              </span>
            ))}
          </MotionItem>
        </div>
      </AnimatedSection>

      {/* <AnimatedSection className={sectionSpace}>
        <SectionHeader
          align="center"
          // eyebrow="Service depth"
          title="Detailed Digital Marketing Services"
          text="Each service is built around clearer visibility, better leads, stronger conversion paths, and reporting your team can actually use."
        />

        <div className="mt-16 space-y-16">
          {detailedServices.map((service, index) => (
            <ServiceFlowBlock
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </AnimatedSection> */}

      <AnimatedSection className={`${sectionSpace}  mt-15`}>
        <div className="grid gap-12 xl:grid-cols-[0.82fr_1.18fr]">
          <SectionHeader
            // eyebrow="How we work"
            title={process.title}
            text={process.text}
          />

          <div className="process-orbit">
            {process.steps.map(({ title, text }, index) => (
              <MotionItem
                key={title}
                direction="up"
                delay={index * 0.08}
                className={`process-orbit-step step-${index + 1}`}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <small>{text}</small>
              </MotionItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* <AnimatedSection className={sectionSpace}>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Why choose Coozter"
              title="Why Businesses Choose Our Digital Marketing Agency"
              text="We combine strategy, creativity, technology, and data to help your business grow with confidence."
            />
            <div className="mt-10 columns-1 gap-8 sm:columns-2">
              {whyChooseBlocks.map(([Icon, title, text], index) => (
                <MotionItem
                  key={title}
                  direction="up"
                  delay={index * 0.05}
                  className="mb-8 break-inside-avoid"
                >
                  <Icon className="text-blue-700" size={22} />
                  <h3 className="mt-4 font-serif text-3xl font-medium text-ink">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink/64">{text}</p>
                </MotionItem>
              ))}
            </div>
          </div>

          <MotionItem direction="left" className="proof-orbital">
            <span>Strategy</span>
            <span>Creative</span>
            <span>Tracking</span>
            <span>Revenue</span>
          </MotionItem>
        </div>
      </AnimatedSection> */}

      {/* <AnimatedSection className={sectionSpace}>
        <SectionHeader
          align="center"
          eyebrow="Industries and tools"
          title="Built for the platforms and markets your customers already use."
          text="We pair industry context with modern marketing, analytics, content, and automation tools."
        />

        <div className="mt-12 overflow-hidden">
          <div className="marquee-track">
            {[...platforms, ...platforms].map((platform, index) => (
              <span key={`${platform}-${index}`}>{platform}</span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map(([Icon, title, text], index) => (
            <MotionItem key={title} direction="up" delay={index * 0.035}>
              <Icon className="text-blue-700" size={22} />
              <h3 className="mt-4 font-serif text-2xl font-medium text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-ink/62">{text}</p>
            </MotionItem>
          ))}
        </div>
      </AnimatedSection> */}
      {/* 
      <AnimatedSection className={sectionSpace}>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Measurement"
            title="Marketing Built Around Measurable Results"
            text="These are example focus metrics, not guaranteed outcomes. The real work is tracking the right signals every month."
          />
          <MotionItem direction="left" className="chart-field">
            {[42, 64, 52, 78, 68, 88, 74, 92].map((height, index) => (
              <span
                key={height}
                className="motion-bar-pulse"
                style={{ height: `${height}%`, animationDelay: `${index * 0.12}s` }}
              />
            ))}
          </MotionItem>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {trackedMetrics.map((metric) => (
            <span key={metric} className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-800">
              {metric}
            </span>
          ))}
        </div>
      </AnimatedSection> */}

      {/* <AnimatedSection className={sectionSpace}>
        <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
          <SectionHeader
            eyebrow="Plans and fit"
            title="Choose the right growth motion before you buy more activity."
            text="The plan, case study, and service fit views are designed to help clients quickly understand what they need first."
          />
          <div className="space-y-12">
            {plans.map((plan, index) => (
              <MotionItem key={plan.name} direction="left" delay={index * 0.08}>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="eyebrow">{plan.badge || `Plan 0${index + 1}`}</p>
                    <h3 className="mt-3 font-serif text-4xl font-medium text-ink">
                      {plan.name}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-ink/64">
                      {plan.bestFor}
                    </p>
                  </div>
                  <MagneticButton href="/contact" variant={index === 1 ? "dark" : "light"}>
                    {plan.cta}
                  </MagneticButton>
                </div>
              </MotionItem>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <MotionItem key={study.title} direction={index ? "left" : "right"}>
              <p className="eyebrow">Case 0{index + 1}</p>
              <h3 className="mt-3 font-serif text-4xl font-medium text-ink">
                {study.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-ink/64">
                <strong className="text-ink">Challenge:</strong> {study.challenge}
              </p>
              <p className="mt-2 text-sm leading-7 text-ink/64">
                <strong className="text-ink">Solution:</strong> {study.solution}
              </p>
              <p className="mt-2 text-sm leading-7 text-ink/64">
                <strong className="text-ink">Result:</strong> {study.result}
              </p>
              <a
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
              >
                View Case Study <FiArrowRight size={15} />
              </a>
            </MotionItem>
          ))}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {comparisonRows.map(([goal, service], index) => (
            <MotionItem key={goal} direction="scale" delay={index * 0.035}>
              <p className="text-sm font-semibold leading-6 text-ink">{goal}</p>
              <p className="mt-2 text-sm font-bold text-blue-700">{service}</p>
            </MotionItem>
          ))}
        </div>
      </AnimatedSection> */}
    </>
  );
}

function ServiceFlowBlock({ service, index }) {
  const Icon = service.icon;

  return (
    <MotionItem
      as="article"
      id={service.slug}
      direction={index % 2 ? "left" : "right"}
      className={`grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center ${
        index % 2 ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <p className="eyebrow">{service.eyebrow}</p>
        <h3 className="mt-4 font-serif text-[2rem] font-medium leading-tight text-ink sm:text-5xl">
          {service.title}
        </h3>
        <p className="mt-5 text-base leading-8 text-ink/66">
          {service.description}
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {service.bestFor.map((chip, chipIndex) => (
            <span
              key={chip}
              className="motion-drift ui-pill"
              style={{ animationDelay: `${chipIndex * 0.14}s` }}
            >
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-7">
          <MagneticButton href="/contact">{service.cta}</MagneticButton>
        </div>
      </div>

      <div className="flow-ribbon">
        <div className={`flow-ribbon-head bg-gradient-to-br ${service.accent}`}>
          <Icon size={24} />
          <span>Live workstream 0{index + 1}</span>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {service.work.map((item, itemIndex) => (
            <span
              key={item}
              className="flex items-start gap-2 text-sm leading-6 text-ink/68"
              style={{ transform: `translateX(${itemIndex % 2 ? 14 : 0}px)` }}
            >
              <FiCheckCircle
                className="mt-1 shrink-0 text-blue-600"
                size={15}
              />
              {item}
            </span>
          ))}
        </div>
      </div>
    </MotionItem>
  );
}
