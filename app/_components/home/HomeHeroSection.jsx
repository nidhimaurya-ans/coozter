import Image from "next/image";
import MagneticButton from "@/components/MagneticButton";

export default function HomeHeroSection() {
  return (
    <section className="relative flex min-h-[720px] items-center overflow-hidden pt-24 md:pt-28 lg:min-h-screen">
      <Image
        src="/assets/mainhero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-30 object-cover object-right anim-image-zoom"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(2,6,23,0.98)_0%,rgba(6,26,47,0.9)_40%,rgba(13,85,176,0.28)_63%,rgba(2,6,23,0.04)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_34%,rgba(56,189,248,0.18),transparent_24rem),linear-gradient(180deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.24)_100%)]" />
      <div className="pointer-events-none absolute right-[7%] top-[20%] z-0 hidden h-[26rem] w-[26rem] rounded-full border border-sky-300/18 lg:block anim-rotate-slow" />
      <div className="pointer-events-none absolute right-[12%] top-[28%] z-0 hidden h-[15rem] w-[15rem] rounded-full border border-dashed border-sky-200/20 lg:block anim-pulse-soft" />

      <div className="container-pad relative z-10 w-full">
        <div className="max-w-5xl anim-left-to-right">
          <p className="mb-6 inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-sky-100">
            Affiliate branding and performance marketing
          </p>
          <h1 className="max-w-[20ch] font-serif text-[2.65rem] font-medium leading-[0.94] text-white sm:text-[4.1rem] lg:text-[5.25rem] anim-left-to-right">
            Growth systems for brands that need clearer demand
          </h1>
          <div className="mt-4 grid max-w-5xl gap-7 lg:grid-cols-[minmax(0,0.68fr)_minmax(300px,0.32fr)] lg:items-end">
            <p className="max-w-[46rem] text-[1.05rem] leading-8 text-white/74 sm:text-xl">
              Coozter connects affiliate partnerships, SEO, paid campaigns,
              content, and reporting into one practical operating system for
              measurable growth.
            </p>
           
          </div>
           <div className="mt-6 flex flex-col gap-4 sm:flex-row   anim-left-to-right anim-delay-3">
              <MagneticButton href="/contact">Start a Strategy Call</MagneticButton>
              <MagneticButton href="/services" variant="light" className="">
                Explore Services
              </MagneticButton>
            </div>
        </div>
      </div>
    </section>
  );
}
