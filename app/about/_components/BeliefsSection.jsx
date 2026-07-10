"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { divider, sectionSpace } from "../_data/aboutContent";
import useAboutPageContent from "@/src/hooks/useAboutPageContent";

const valueAnimations = [
  "anim-slide-right",
  "anim-slide-left",
  "anim-fade-up",
  "anim-slide-left-up",
];

export default function BeliefsSection() {
  const { beliefs } = useAboutPageContent();

  return (
    <AnimatedSection className={`${sectionSpace} `}>
      <div className="grid gap-12 xl:grid-cols-[0.78fr_1.22fr] xl:items-start xl:gap-20">
        <div className="xl:sticky xl:top-28">
          {/* <p className="eyebrow inline-flex items-center text-moss gap-3">
            <span className="h-px w-9 bg-coral anim-reveal-line" />
            What we believe
          </p> */}

          <h2 className="mt-5 max-w-[16ch] font-serif text-[2.4rem] leading-[0.98] text-ink sm:text-5xl md:text-6xl anim-left-to-right">
            {beliefs.headline}
          </h2>

          <p
            className="mt-6 max-w-sm text-base leading-7 text-ink/62 anim-left-to-right"
            style={{ animationDelay: "1s" }}
          >
            {beliefs.description}
          </p>
        </div>

        <div className={`grid  md:grid-cols-2`}>
          {beliefs.values.map(({ title, text }, index) => (
            <div
              key={title}
              className={`group border-b ${divider} py-8  transition duration-300 ${valueAnimations[index] ?? "anim-fade-up"} last:border-b-0  md:px-8 md:[&:nth-child(odd)]:border-r md:[&:nth-last-child(-n+2)]:border-b-0 anim-delay-${Math.min(
                index + 1,
                5,
              )}`}
            >
              <h3 className="mt-5 font-serif text-3xl leading-tight text-ink transition group-hover:text-moss">
                {title}
              </h3>

              <p className="mt-4 text-md leading-7 text-ink/64">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
