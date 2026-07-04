import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import { sectionSpace } from "../_data/servicesContent";
import MotionItem from "./MotionItem";

const trustPoints = [
  "No confusing jargon",
  "No random campaigns",
  "Clear strategy and execution",
  "Measurable growth",
];

export default function FinalCTASection() {
  return (
    <AnimatedSection className={sectionSpace}>
      <div className="grid gap-10 py-10 lg:grid-cols-[1fr_0.72fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700 anim-slide-right">
            Next step
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-[2.35rem] font-medium leading-tight text-ink sm:text-6xl anim-blur-in anim-delay-1">
            Ready to Grow Your Business Online?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-ink/68 sm:text-lg anim-fade-up anim-delay-2">
            Let’s build a digital marketing strategy that attracts the right
            audience, improves conversions, and helps your business grow with
            confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href="/contact" variant="light">
              Get Free Consultation
            </MagneticButton>
            <MagneticButton href="/contact" variant="dark">
              Request Marketing Audit
            </MagneticButton>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
            >
              Talk to Our Team <FiArrowUpRight size={16} />
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {trustPoints.map((point) => (
              <MotionItem
                key={point}
                as="span"
                direction="scale"
                delay={0.08}
                className="inline-flex items-center gap-2 rounded-full border border-blue-200 px-3 py-1.5 text-xs font-semibold text-blue-800"
              >
                <FiCheckCircle size={14} /> {point}
              </MotionItem>
            ))}
          </div>
        </div>

        <MotionItem
          direction="left"
          className="relative min-h-[18rem] p-5"
        >
          <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-blue-100/70 motion-drift" />
          <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full bg-sky-100/80 motion-drift" />
          <div className="relative mx-auto mt-8 max-w-xs py-5 text-ink anim-float-soft">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
              Growth launch
            </p>
            <p className="mt-4 font-serif text-4xl font-medium">Ready</p>
            <div className="mt-5 grid gap-2">
              {[78, 88, 64].map((width) => (
                <div key={width} className="h-2 overflow-hidden rounded-full bg-slate-200">
                  <span
                    className="motion-flow-fill block h-full rounded-full bg-[linear-gradient(90deg,#1d5edb,#2bbcff,#1d5edb)]"
                    style={{ width: `${width}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </MotionItem>
      </div>
    </AnimatedSection>
  );
}
