"use client";

import useServicesPageContent from "@/src/hooks/useServicesPageContent";

export default function ServicesHero() {
  const { hero } = useServicesPageContent();

  return (
    <section className="services-hero-gradient relative isolate min-h-[700px] overflow-hidden pt-32 text-white sm:min-h-[760px] sm:pt-36 lg:pt-40">
      <div className="container-pad relative">
        <div className="grid min-h-[560px] gap-8 sm:gap-14 lg:min-h-[600px] xl:grid-cols-[minmax(0,0.6fr)_minmax(430px,0.4fr)] xl:items-center xl:gap-20">
          <div className="relative z-10 max-w-5xl anim-left-to-right">
            <p className="mb-5 text-[1rem] font-bold leading-6 text-coral sm:text-xl">
              {hero.eyebrow}
            </p>

            <h1 className="max-w-5xl font-serif text-[2.55rem] font-semibold leading-[1.1] text-white sm:text-6xl md:text-[3.9rem]">
              {hero.title}
            </h1>

            <p className="mt-7 max-w-4xl text-lg font-medium leading-8 text-white/86 sm:text-xl sm:leading-10">
              {hero.description}
            </p>
            {/* 
            <div className="mt-9 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
              {partnerBadges.map(([name, label], index) => (
                <div
                  key={name}
                  className={`grid min-h-[4.1rem] content-center border border-white/75 bg-ink/20 px-3 py-2 text-white backdrop-blur-sm anim-scale-in anim-delay-${Math.min(index + 1, 5)}`}
                >
                  <strong className="block text-[clamp(0.95rem,1.7vw,1.55rem)] font-extrabold leading-[1.05]">
                    {name}
                  </strong>
                  <span className="mt-1 block text-[0.64rem] font-extrabold uppercase leading-[1.05] tracking-[0.08em] text-white/75">
                    {label}
                  </span>
                </div>
              ))}
            </div> */}
          </div>

          <div className="relative min-h-[300px] sm:min-h-[440px] lg:min-h-[560px]">
            <div
              aria-label="Digital marketing analytics laptop with growth idea"
              role="img"
              className="absolute left-1/2 top-1/2 h-[22rem] w-[min(112vw,34rem)] -translate-x-1/2 -translate-y-1/2 sm:left-[calc(50%+16px)] sm:h-[28rem] sm:w-[min(94vw,38rem)] lg:h-[34rem] lg:w-[min(50vw,47rem)] lg:min-w-[35rem]"
            >
              <img
                src={hero.heroImageUrl}
                alt={hero.heroImageAlt}
                className="h-full w-full object-contain object-bottom anim-inside-out anim-delay-2"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
