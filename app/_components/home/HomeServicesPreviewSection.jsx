"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { services } from "@/data/services";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const previewServices = services.slice(0, 5);
const signals = ["Partner trust", "Search intent", "Campaign testing", "Content proof", "Clean reporting"];

export default function HomeServicesPreviewSection() {
  return (
    <AnimatedSection className="container-pad py-5">
      <section className="relative overflow-hidden ">
        <div className="pointer-events-none absolute right-[-7rem] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-moss/12 anim-rotate-slow" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
          <div className="anim-left-to-right">
            {/* <p className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-moss">
              Services preview
            </p> */}
            <h2 className=" max-w-[18ch] font-serif text-[2.35rem] font-medium leading-[0.98] text-ink sm:text-5xl">
              One growth system, many connected moves.
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-ink/64">
              Services are not presented as separate boxes. They move as a
              connected path from trust and demand to campaigns and reporting.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {signals.map((signal, index) => (
                <span
                  key={signal}
                  className={`rounded-full border border-moss/14 bg-white/70 px-3 py-1.5 text-xs font-bold text-moss anim-fade-down anim-delay-${Math.min(index + 1, 5)}`}
                >
                  {signal}
                </span>
              ))}
            </div>

            <Link
              href="/services"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-moss px-5 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(29,94,219,0.22)] transition hover:-translate-y-1"
            >
              Explore all services
              <FiArrowRight />
            </Link>
          </div>

          <div className="relative">
            {/* <div className="absolute left-[1.15rem] top-8 bottom-8 hidden w-px bg-[linear-gradient(180deg,transparent,var(--theme-primary),var(--theme-accent),var(--theme-primary),transparent)] opacity-35 md:block" /> */}
            {/* Moving pointer concept paused:
            <motion.span
              className="absolute left-[0.72rem] top-8 z-20 hidden h-8 w-3 rounded-full border border-white/70 bg-[linear-gradient(180deg,var(--theme-accent),var(--theme-primary))] shadow-[0_10px_28px_rgba(37,99,235,0.34),0_0_18px_rgba(56,189,248,0.52)] md:block"
              animate={{ top: ["2rem", "24%", "45%", "66%", "calc(100% - 2.5rem)"] }}
              transition={{ duration: 11, ease: [0.22, 1, 0.36, 1], repeat: Infinity, repeatDelay: 0.45 }}
            >
              <span className="absolute left-1/2 top-1 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/95" />
              <span className="absolute left-1/2 top-full h-8 w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(56,189,248,0.55),transparent)]" />
            </motion.span>
            */}
            <div className="grid gap-3">
              {previewServices.map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/services#${service.slug}`}
                  className={`group grid gap-4 rounded-[0.9rem] px-0 py-3 transition duration-500 hover:translate-x-1 md:grid-cols-[3rem_1fr_auto] md:items-center anim-${index % 2 === 0 ? "fade-down" : "blur-in"} anim-delay-${Math.min(index + 1, 5)}`}
                >
                    <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full border border-moss/20 bg-[var(--theme-card)] text-moss shadow-[var(--shadow-sm)] transition duration-500 group-hover:border-coral group-hover:text-coral">
                      <span className="relative h-2 w-2 rounded-full bg-current" />
                    </span>
                    <span>
                      <span className="block font-serif text-2xl leading-tight text-ink transition duration-500 group-hover:text-moss">
                        {service.name}
                      </span>
                      <span className="mt-1 block max-w-2xl text-sm leading-6 text-ink/62">
                        {service.short}
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-moss opacity-70 transition duration-500 group-hover:opacity-100">
                      <FiCheckCircle />
                      {service.cta}
                    </span>
                  </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
