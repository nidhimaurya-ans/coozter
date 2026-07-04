import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import { FiArrowUpRight } from "react-icons/fi";
import {
  divider,
  sectionSpace,
  whyChooseFeatures,
  whyChooseStats,
} from "../_data/aboutContent";

export default function WhyChooseUsSection() {
  return (
    <AnimatedSection
      className={`${sectionSpace} relative isolate overflow-hidden`}
    >
      {/* <div className="absolute left-[-8rem] top-16 -z-10 h-72 w-72 rounded-full bg-coral/10" />
      <div className="absolute bottom-8 right-[-10rem] -z-10 h-80 w-80 rounded-full bg-moss/8" /> */}

      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(540px,1.18fr)] lg:items-start xl:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start anim-fade-up">
          <p className="eyebrow inline-flex items-center gap-3 text-moss">
            <span className="h-px w-9 bg-coral anim-reveal-line" />
            Why choose us
          </p>

          <h2 className="mt-5 max-w-[15ch] font-serif text-[2.25rem] leading-[1.02] tracking-0 text-ink sm:text-[3.35rem] md:text-[4rem]">
            Why companies choose us to build smarter digital experiences
          </h2>

          <p className="mt-6 max-w-lg text-[1rem] leading-8 text-ink/64">
            We combine strategy, design, development, and growth thinking to
            create digital products that are clear, scalable, measurable, and
            built for long-term success.
          </p>

          <div
            className={`mt-8 grid max-w-xl grid-cols-2 gap-0 overflow-hidden rounded-[1.45rem] border ${divider} bg-white/72 shadow-[0_20px_70px_rgba(14,62,128,0.07)] sm:grid-cols-4`}
          >
            {whyChooseStats.map(([value, label], index) => (
              <div
                key={label}
                className={`border-b ${divider} p-4 last:border-b-0 odd:border-r sm:border-b-0 sm:border-r sm:last:border-r-0 anim-fade-up anim-delay-${Math.min(index + 1, 5)}`}
              >
                <p className="font-serif text-[2.1rem] leading-none text-moss">
                  {value}
                </p>
                <p className="mt-2 text-[0.62rem] font-semibold uppercase leading-4 tracking-[0.1em] text-ink/48">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <MagneticButton href="/contact">Start Your Project</MagneticButton>
            <a
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-moss transition hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-4"
            >
              See our process
              <FiArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {whyChooseFeatures.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              className={`group relative min-h-[14.25rem] overflow-hidden rounded-[1.35rem] border p-5 transition-all duration-300 hover:-translate-y-1 focus-within:-translate-y-1 sm:p-5 ${
                index === 0
                  ? "border-coral/45 bg-[linear-gradient(135deg,#ffffff_0%,#eef9ff_54%,#dff4ff_100%)] shadow-[0_26px_86px_rgba(14,62,128,0.13)] sm:col-span-2 md:min-h-[13.5rem]"
                  : "border-slate-300/80 bg-white shadow-[0_16px_50px_rgba(14,62,128,0.07)] hover:border-coral/45 hover:shadow-[0_24px_72px_rgba(14,62,128,0.11)]"
              } anim-fade-up anim-delay-${Math.min(index + 1, 5)}`}
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-10 -translate-y-10 rounded-full bg-coral/10 transition duration-300 group-hover:scale-125 group-hover:bg-coral/16" />
              <div className="absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,transparent,#2bbcff,transparent)] opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative grid h-11 w-11 place-items-center rounded-full bg-coral/14 text-moss transition duration-300 group-hover:scale-105 group-hover:bg-moss group-hover:text-white">
                <Icon size={19} />
              </div>

              <h3 className="relative mt-5 font-serif text-[1.65rem] leading-tight text-ink transition duration-300 group-hover:text-moss">
                {title}
              </h3>

              <p className="relative mt-3 text-sm leading-7 text-ink/62">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
