"use client";

import MagneticButton from "@/components/MagneticButton";
import useAboutPageContent from "@/src/hooks/useAboutPageContent";

export default function AboutHero() {
  const { hero } = useAboutPageContent();

  return (
    <section className="relative isolate min-h-[680px] overflow-hidden text-white sm:min-h-[720px] lg:min-h-screen">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center anim-hero-zoom-out"
        role="img"
        aria-label={hero.backgroundImageAlt}
        style={{ backgroundImage: `url('${hero.backgroundImageUrl}')` }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,27,51,0.08)_0%,rgba(7,27,51,0.18)_42%,rgba(7,27,51,0.62)_100%),linear-gradient(90deg,rgba(7,27,51,0.42)_0%,rgba(7,27,51,0.2)_48%,rgba(7,27,51,0.08)_100%)]" />

      <div className="container-pad flex min-h-[680px] flex-col justify-end pb-10 sm:min-h-[720px] sm:pb-12 lg:min-h-screen lg:pb-14">
        <div className="max-w-5xl anim-fade-up">
          <p className="mb-6 inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-sky-100">
            <span className="h-px w-10 bg-coral anim-reveal-line" />
            {hero.eyebrow}
          </p>

          <h1 className="max-w-4xl font-serif text-[2.18rem] leading-[0.98] text-white sm:text-6xl md:text-7xl lg:text-[4.8rem]">
            {hero.title}
          </h1>
        </div>

        <div className="mt-8 grid gap-7 border-t border-white/24 pt-7 text-white/76 sm:mt-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-12">
          <div className="grid max-w-4xl gap-6 sm:grid-cols-2 sm:gap-10 lg:gap-12">
            <p className="max-w-md text-sm leading-7 sm:text-base anim-fade-up anim-delay-1">
              {hero.descriptionOne}
            </p>

            <p className="max-w-md text-sm leading-7 sm:text-base anim-fade-up anim-delay-2">
              {hero.descriptionTwo}
            </p>
          </div>

          <MagneticButton
            href={hero.buttonUrl}
            variant="light"
            className="mt-16 shrink-0 cursor-pointer justify-self-start anim-fade-up anim-delay-3 lg:justify-self-end"
          >
            {hero.buttonLabel}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
