"use client";

import AnimatedSection from "@/components/AnimatedSection";
import useHomePageContent from "@/src/hooks/useHomePageContent";

export default function HomeProcessSection() {
  const { process } = useHomePageContent();
  const planningImages = process.images;

  return (
    <AnimatedSection className="container-pad py-5">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1fr)] lg:items-center lg:gap-12 xl:gap-48">
        <div
          className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[640px]"
          role="img"
          aria-label={process.imageAlt}
        >
          {/* Layered glass version:
          <div
            className="absolute left-[10%] top-[8%] h-[74%] w-[72%] overflow-hidden rounded-sm border border-moss/10 bg-cover bg-center opacity-30 blur-[2px] shadow-soft anim-scale-in anim-delay-2"
            style={{ backgroundImage: planningImages[0] }}
          />
          <div
            className="absolute left-[5%] top-[15%] h-[74%] w-[72%] overflow-hidden rounded-sm border border-coral/20 bg-cover bg-center opacity-45 shadow-soft anim-scale-in anim-delay-1"
            style={{ backgroundImage: planningImages[1] }}
          />
          <div
            className="absolute left-0 top-0 h-[82%] w-[82%] overflow-hidden rounded-sm border border-white/70 bg-cover bg-center shadow-soft anim-image-zoom"
            style={{ backgroundImage: planningImages[2] }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,51,0.04)_0%,rgba(7,27,51,0.2)_44%,rgba(7,27,51,0.82)_100%)]" />
          </div>
          <div className="absolute bottom-8 left-6 right-8 z-10 text-white anim-fade-up anim-delay-4 lg:left-9">
            <p className="max-w-[28rem] font-serif text-[2.1rem] leading-[1.02] sm:text-5xl">
              Partners, search, content, and paid traffic planned as one
              measurable path.
            </p>
          </div>
          */}

          <div className="absolute left-0 top-0 h-[72%] w-[68%] rotate-[-1.5deg]">
            <div
              className="h-full w-full overflow-hidden rounded-sm bg-cover bg-center shadow-soft anim-left-to-right anim-duration-slow"
              style={{ backgroundImage: planningImages[0] }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,51,0.04)_0%,rgba(7,27,51,0.2)_44%,rgba(7,27,51,0.82)_100%)]" />
            </div>
          </div>
          <div className="absolute right-0 top-[10%] h-[42%] w-[44%] rotate-[2.5deg]">
            <div
              className="h-full w-full overflow-hidden rounded-sm border border-white/70 bg-cover bg-right shadow-soft anim-blur-in anim-delay-2 anim-duration-slow"
              style={{ backgroundImage: planningImages[1] }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,51,0.04)_0%,rgba(7,27,51,0.68)_100%)]" />
            </div>
          </div>
          <div className="absolute bottom-0 right-[7%] h-[40%] w-[58%] rotate-[-2deg]">
            <div
              className="h-full w-full overflow-hidden rounded-sm border border-white/70 bg-cover bg-left shadow-soft anim-slide-left anim-delay-3 anim-duration-slow"
              style={{ backgroundImage: planningImages[2] }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,51,0.08)_0%,rgba(7,27,51,0.78)_100%)]" />
            </div>
          </div>
        </div>

        <div className="anim-slide-left">
            <h2 className=" font-serif text-[2.18rem] font-medium leading-[0.98] text-ink sm:text-5xl">
            {process.headline}
          </h2>
          <div className="mt-9  ">
            {process.steps.map(({ title, text }, index) => (
              <div
                key={title}
                className={`grid gap-4 py-3  sm:grid-cols-[1.5rem_0.45fr_1fr] anim-fade-down anim-delay-${Math.min(index + 1, 5)}`}
              >
                <span className="font-serif text-3xl " />
                <h3 className="font-serif text-2xl font-medium text-ink">
                  {title}
                </h3>
                <p className="text-md leading-7 font-[8px] text-ink/64">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
