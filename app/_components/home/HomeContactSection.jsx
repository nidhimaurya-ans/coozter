import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function HomeContactSection() {
  return (
    <AnimatedSection className="container-pad py-8 sm:py-10">
      <section className="relative isolate overflow-hidden rounded-[1.5rem] border border-blue-100 bg-[linear-gradient(135deg,#ffffff_0%,#f6fbff_48%,#e2f3ff_100%)] px-5 py-12 text-ink shadow-[0_22px_70px_rgba(14,62,128,0.08)] sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(43,188,255,0.18),transparent_22rem),radial-gradient(circle_at_88%_78%,rgba(13,94,232,0.13),transparent_24rem)]" />
        <div className="pointer-events-none absolute inset-x-8 top-0 -z-10 h-px bg-white/90" />
        <div className="pointer-events-none absolute right-[-6rem] top-[-7rem] -z-10 h-64 w-64 rounded-full bg-[#0d5ee8]/10 blur-3xl" />

        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mx-auto mt-5  text-[2.8rem] font-bold leading-[1.02] tracking-normal text-ink sm:text-[4rem] lg:text-[3rem] anim-fade-up anim-delay-1">
            Ready to grow your website ?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-ink/68 sm:text-lg anim-fade-up anim-delay-2">
            Bring affiliate partnerships, search, campaigns, and reporting into
            one practical operating system for measurable growth.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-col justify-center gap-3 sm:flex-row anim-fade-up anim-delay-3">
            <Link
              href="/contact"
              className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-[0.65rem] bg-[#096cff] px-7 text-sm font-extrabold text-white shadow-[0_16px_42px_rgba(9,108,255,0.32)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#005ce6] sm:w-auto"
            >
              Book a Strategy Call
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex h-14 w-full items-center justify-center rounded-[0.65rem] border border-[#8bb7ff] bg-white/85 px-7 text-sm font-extrabold text-[#0d5ee8] shadow-[0_12px_30px_rgba(13,94,232,0.09)] transition duration-300 hover:-translate-y-0.5 hover:border-[#0d5ee8] hover:bg-white sm:w-auto"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
