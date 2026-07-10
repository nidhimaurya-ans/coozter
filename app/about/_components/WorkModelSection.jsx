"use client";

import { FiBarChart2, FiSearch, FiShield, FiTrendingUp } from "react-icons/fi";
import { FaRegHandshake } from "react-icons/fa6";
import AnimatedSection from "@/components/AnimatedSection";
import { divider, sectionSpace } from "../_data/aboutContent";
import useAboutPageContent from "@/src/hooks/useAboutPageContent";

const iconMap = {
  "bar-chart": FiBarChart2,
  handshake: FaRegHandshake,
  search: FiSearch,
  shield: FiShield,
  "trending-up": FiTrendingUp,
};

const nodeClasses = [
  "about-3d-node-one",
  "about-3d-node-two",
  "about-3d-node-three",
  "about-3d-node-four",
];

export default function WorkModelSection() {
  const { workModel } = useAboutPageContent();
  const CenterIcon = iconMap[workModel.centerIconKey] || FiBarChart2;

  return (
    <AnimatedSection className={sectionSpace}>
      <p className="eyebrow inline-flex items-center gap-3 text-moss">
        <span className="h-px w-9 bg-coral anim-reveal-line" />
        {workModel.eyebrow}
      </p>

      <div className="grid gap-12 xl:grid-cols-[minmax(0,1.02fr)_minmax(440px,0.98fr)] xl:items-center xl:gap-20">
        <div className="relative min-h-[380px] overflow-hidden anim-scale-in xl:min-h-[580px]">
          <div
            className="absolute inset-0 about-3d-scene"
            aria-label={workModel.visualAlt}
            role="img"
          >
            <div className="about-3d-orbit about-3d-orbit-one" />
            <div className="about-3d-orbit about-3d-orbit-two" />
            <div className="about-3d-core">
              <span className="about-3d-core-ring" />
              <span className="about-3d-core-dot" />
              <CenterIcon size={34} />
            </div>
            <div className="about-3d-path about-3d-path-one" />
            <div className="about-3d-path about-3d-path-two" />
            {workModel.visualNodes.slice(0, 4).map(({ iconKey, label }, index) => {
              const Icon = iconMap[iconKey] || FiBarChart2;

              return (
                <div
                  key={label}
                  className={`about-3d-node ${nodeClasses[index]}`}
                >
                  <Icon size={22} />
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="anim-slide-left items-start">
          <div className={`divide-y ${divider} `}>
            {workModel.items.map(({ iconKey, title, text }, index) => {
              const Icon = iconMap[iconKey] || FiBarChart2;

              return (
                <div
                  key={title}
                  className={`group grid gap-5 py-6 transition duration-300 anim-fade-up sm:grid-cols-[52px_1fr] anim-delay-${Math.min(
                    index + 1,
                    5,
                  )}`}
                >
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-coral text-white transition duration-300 anim-pop group-hover:bg-moss group-hover:text-white">
                    <Icon size={18} />
                  </div>

                  <div>
                    <h3 className="font-serif text-[1.75rem] leading-tight text-ink transition duration-300 group-hover:text-moss">
                      {title}
                    </h3>

                    <p className="mt-3 max-w-[32rem] text-[0.98rem] leading-7 text-ink/64">
                      {text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
