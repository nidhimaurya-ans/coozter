"use client";

import AnimatedSection from "@/components/AnimatedSection";
import MarqueeLogos from "@/components/MarqueeLogos";
import useHomePageContent from "@/src/hooks/useHomePageContent";

export default function HomeTrustSection() {
  const { trust } = useHomePageContent();

  return (
    <AnimatedSection className="py-5">
      <div className="container-pad">
        <div className="grid gap-8 border-moss/12 py-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(520px,0.64fr)] lg:items-center lg:gap-12">
          <p className="max-w-[20ch] font-serif text-[2.05rem] leading-[1.08] text-ink md:text-[2.25rem] anim-left-to-right">
            {trust.headline}
          </p>
          <div className="grid gap-5 sm:grid-cols-3 lg:w-full lg:grid-cols-3 lg:items-start anim-slide-left">
            {trust.stats.map((item, index) => (
              <div
                key={`${item.value}-${item.label}`}
                className={`grid min-h-[5.5rem] content-start justify-items-start gap-2 text-left text-sm sm:justify-items-center sm:text-center lg:justify-items-start lg:text-left anim-fade-up anim-delay-${index + 1}`}
              >
                <span className="block min-h-[2.25rem] text-[2rem] font-bold leading-none text-[#0d5ee8]">
                  {item.value}
                </span>
                <span className="block max-w-[8rem] text-sm font-medium leading-5 text-ink/62">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MarqueeLogos logos={trust.partnerLogos} />
    </AnimatedSection>
  );
}
