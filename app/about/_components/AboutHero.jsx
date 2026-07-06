import MagneticButton from "@/components/MagneticButton";

export default function AboutHero() {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden text-white sm:min-h-[720px] lg:min-h-screen">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center anim-hero-zoom-out"
        style={{ backgroundImage: "url('/assets/about-hero.jpg')" }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,27,51,0.08)_0%,rgba(7,27,51,0.18)_42%,rgba(7,27,51,0.62)_100%),linear-gradient(90deg,rgba(7,27,51,0.42)_0%,rgba(7,27,51,0.2)_48%,rgba(7,27,51,0.08)_100%)]" />

      <div className="container-pad flex min-h-[680px] flex-col justify-end pb-10 sm:min-h-[720px] sm:pb-12 lg:min-h-screen lg:pb-14">
        <div className="max-w-5xl anim-fade-up">
          <p className="mb-6 inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-sky-100">
            <span className="h-px w-10 bg-coral anim-reveal-line" />
            About Coozter
          </p>

          <h1 className="max-w-4xl font-serif text-[2.18rem] leading-[0.98] text-white sm:text-6xl md:text-7xl lg:text-[4.8rem]">
            We help brands build, launch, and scale digital products
          </h1>
        </div>

        <div className="mt-8 grid gap-7 border-t border-white/24 pt-7 text-white/76 sm:mt-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-12">
          <div className="grid max-w-4xl gap-6 sm:grid-cols-2 sm:gap-10 lg:gap-12">
            <p className="max-w-md text-sm leading-7 sm:text-base anim-fade-up anim-delay-1">
              Coozter is an affiliate branding and performance marketing partner
              for companies that sell through credibility: expert content,
              search visibility, partner recommendations, and paid acquisition.
            </p>

            <p className="max-w-md text-sm leading-7 sm:text-base anim-fade-up anim-delay-2">
              We help leadership teams see where trust is already forming, then
              build the campaigns, pages, content, and reporting needed to
              convert that trust into revenue.
            </p>
          </div>

          <MagneticButton
            href="/services"
            variant="light"
            className="mt-16 shrink-0 cursor-pointer justify-self-start anim-fade-up anim-delay-3 lg:justify-self-end"
          >
            Explore Our Services
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
