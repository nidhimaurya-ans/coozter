"use client";

import AnimatedSection from "@/components/AnimatedSection";
import {
  FiBarChart2,
  FiPieChart,
  FiSearch,
  FiSend,
  FiShare2,
  FiShield,
  FiSliders,
  FiStar,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import useHomePageContent from "@/src/hooks/useHomePageContent";

const benefits = [
  [FiTrendingUp, "Connected Strategy", "All channels aligned to one goal."],
  [FiTarget, "Better Performance", "Data-backed decisions for more ROI."],
  [FiBarChart2, "Full Transparency", "Real-time reporting across channels."],
];

const growthPoints = [
  [FiSearch, "Demand", "Attract the right audience."],
  [FiShield, "Trust", "Build credibility with proof-led content."],
  [FiTrendingUp, "Convert", "Optimize journeys that drive action."],
  [FiPieChart, "Report", "Real-time insights that guide growth."],
  [FiZap, "Scale", "Systemize what works and scale profitably."],
];

const iconMap = {
  "bar-chart-3": FiBarChart2,
  network: FiShare2,
  rocket: FiSend,
  "sliders-horizontal": FiSliders,
  sparkles: FiStar,
  users: FiUsers,
  zap: FiZap,
};

export default function HomeChannelsSection() {
  const { channels } = useHomePageContent();
  const channelBenefits =
    channels?.benefits?.length > 0
      ? channels.benefits.map(({ title, text, iconKey }, index) => [
          iconMap[iconKey] || benefits[index]?.[0] || FiTrendingUp,
          title,
          text,
        ])
      : benefits;
  const channelGrowthPoints =
    channels?.growthPoints?.length > 0
      ? channels.growthPoints.map(({ title, text, iconKey }, index) => [
          iconMap[iconKey] || growthPoints[index]?.[0] || FiZap,
          title,
          text,
        ])
      : growthPoints;
  const centerLabel = (channels?.centerLabel || "Growth\nEngine").split("\n");
  const CenterIcon = iconMap[channels?.centerIconKey] || FiZap;

  return (
    <AnimatedSection className="overflow-hidden bg-[linear-gradient(135deg,#061a2f_0%,#071b33_46%,#0d55b0_100%)] py-5 text-white ">
      <div className="container-pad relative">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-[0.48fr_0.52fr] md:items-center lg:grid-cols-[0.52fr_0.48fr] xl:gap-14">
          <div className="relative">
            <h2 className="mt-5 font-serif text-[2.35rem] font-medium leading-[1.08] sm:text-[3.2rem] sm:leading-[1.18]">
              <span className="block text-white anim-left-to-right">
                {channels?.title || "Every Marketing Channel"}
              </span>
              <span className="block mt-2 text-blue-400 anim-left-to-right [animation-delay:1s]">
                {channels?.highlight || "Works Together."}
              </span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-white/72 sm:mt-8 sm:text-xl sm:leading-9">
              {channels?.description ||
                "We build a connected growth system where every channel supports the next, driving consistent pipeline and revenue."}
            </p>

            <div className="mb-4 mt-7 grid gap-5 sm:mb-8 sm:mt-12 sm:gap-7">
              {channelBenefits.map(([Icon, title, text], index) => (
                <div
                  key={title}
                  className={`flex items-center gap-5 anim-fade-up anim-delay-${index + 1}`}
                >
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-blue-500/14 text-3xl text-white shadow-[0_0_34px_rgba(37,99,235,0.18)]">
                    <Icon />
                  </span>
                  <span>
                    <strong className="block text-xl font-semibold text-white">
                      {title}
                    </strong>
                    <span className="mt-1 block text-base text-white/66">
                      {text}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/*
          <div className="relative min-h-[460px] anim-hero-zoom-out sm:min-h-[520px] lg:min-h-[620px]">
            <div className="absolute left-[58%] top-1/2 h-[16rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/18 sm:h-[22rem] sm:w-[22rem]" />
            <div className="absolute left-[58%] top-1/2 h-[11rem] w-[11rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-sky-400/34 anim-rotate-slow sm:h-[15rem] sm:w-[15rem]" />

            <div className="absolute left-[58%] top-1/2 z-10 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-sky-300/60 bg-[#08224c]/80 text-center shadow-[0_0_60px_rgba(56,189,248,0.45)] ring-[12px] ring-blue-500/12 anim-pulse-soft sm:h-44 sm:w-44 sm:ring-[18px]">
              <span className="grid gap-3">
                <FiZap className="mx-auto text-4xl text-blue-400 sm:text-5xl" />
                <span className="text-base font-black uppercase leading-tight tracking-[0.05em] text-white sm:text-lg">
                  Growth
                  <br />
                  Engine
                </span>
              </span>
            </div>

            {growthPoints.map(([number, title, text], index) => {
              const positions = [
                "left-0 top-[9%] sm:top-[13%]",
                "left-0 top-[31%] sm:top-[34%]",
                "left-0 top-[53%] sm:top-[54%]",
                "left-0 top-[75%] sm:top-[74%]",
              ];
              return (
                <div key={title}>
                  <div
                    className={`absolute z-20 w-32 rounded-2xl border border-sky-400/18 p-3 anim-fade-up anim-delay-${index + 1} sm:w-36 sm:p-4 ${positions[index]}`}
                  >
                    <strong className="mt-1 block text-base font-semibold text-white sm:text-lg">
                      {title}
                    </strong>
                    <span className="mt-1 block text-xs leading-5 text-white/64 sm:text-sm">
                      {text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          */}

          <div className="relative min-h-[500px] anim-hero-zoom-out sm:min-h-[590px] md:min-h-[600px] lg:min-h-[640px]">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_52%_50%,rgba(13,108,255,0.22),transparent_19rem)]" />
            <div className="absolute left-1/2 top-[2.75rem] h-[19rem] w-[19rem] -translate-x-1/2 rounded-full border border-blue-400/14 sm:top-[3.5rem] sm:h-[24rem] sm:w-[24rem] md:top-1/2 md:h-[20rem] md:w-[20rem] md:-translate-y-1/2 lg:h-[28rem] lg:w-[28rem]" />
            <div className="absolute left-1/2 top-[4.75rem] h-[15rem] w-[15rem] -translate-x-1/2 rounded-full border border-blue-400/10 sm:top-[6rem] sm:h-[19rem] sm:w-[19rem] md:top-1/2 md:h-[16rem] md:w-[16rem] md:-translate-y-1/2 lg:h-[22rem] lg:w-[22rem]" />
            <div className="absolute left-1/2 top-[6rem] h-[12.5rem] w-[12.5rem] -translate-x-1/2 rounded-full border border-dashed border-sky-400/42 anim-rotate-slow sm:top-[7.75rem] sm:h-[16rem] sm:w-[16rem] md:top-1/2 md:h-[13rem] md:w-[13rem] md:-translate-y-1/2 lg:h-[18rem] lg:w-[18rem]" />
            <div className="absolute left-1/2 top-[7.5rem] h-[9.5rem] w-[9.5rem] -translate-x-1/2 rounded-full bg-[conic-gradient(from_120deg,rgba(43,188,255,0.9),rgba(21,92,255,0.95),rgba(43,188,255,0.9))] p-[3px] shadow-[0_0_64px_rgba(13,108,255,0.52)] sm:top-[9.75rem] sm:h-[13rem] sm:w-[13rem] md:top-1/2 md:h-[10rem] md:w-[10rem] md:-translate-y-1/2 lg:h-[14rem] lg:w-[14rem]">
              <div className="h-full w-full rounded-full bg-[#061b3d]" />
            </div>

            <div className="absolute left-1/2 top-[8.7rem] z-20 grid h-28 w-28 -translate-x-1/2 place-items-center rounded-full bg-[#061b3d] text-center sm:top-[11.05rem] sm:h-36 sm:w-36 md:top-1/2 md:h-28 md:w-28 md:-translate-y-1/2 lg:h-36 lg:w-36">
              <span className="grid gap-3">
                <CenterIcon className="mx-auto text-4xl text-white drop-shadow-[0_0_18px_rgba(43,188,255,0.75)] sm:text-5xl" />
                <span className="text-sm font-black uppercase leading-tight tracking-[0.05em] text-white sm:text-lg">
                  {centerLabel.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </span>
            </div>

            <div className="relative z-30 mx-auto grid max-w-[22rem] grid-cols-2 gap-3 pt-[23rem] sm:max-w-2xl sm:gap-4 sm:pt-[30rem] md:absolute md:inset-0 md:max-w-none md:grid-cols-none md:pt-0">
              {channelGrowthPoints.map(([Icon, title, text], index) => {
                const positions = [
                  "md:left-1/2 md:top-[5%] md:w-40 md:-translate-x-1/2 lg:top-[3%] lg:w-48",
                  "md:left-0 md:top-[31%] md:w-40 lg:left-[2%] lg:top-[30%] lg:w-56",
                  "md:right-0 md:top-[32%] md:w-40 lg:right-[1%] lg:top-[31%] lg:w-56",
                  "md:left-[3%] md:bottom-[12%] md:w-40 lg:left-[9%] lg:w-56",
                  "md:right-[3%] md:bottom-[12%] md:w-40 lg:right-[9%] lg:w-56",
                ];
                return (
                  <div
                    key={title}
                    className={`group relative rounded-2xl border border-sky-400/22 bg-[#071d3f]/84 p-3 text-left shadow-[0_20px_50px_rgba(2,12,32,0.22)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-300/55 hover:bg-[#082653]/92 hover:shadow-[0_24px_70px_rgba(37,99,235,0.28)] anim-pulse-soft sm:p-4 md:absolute md:p-3 lg:p-4 ${positions[index]}`}
                    style={{
                      animationDelay: `${index * 0.55}s`,
                      animationDuration: "5.6s",
                    }}
                  >
                    <div className="flex items-start gap-2.5 sm:items-center sm:gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#0d5ee8]/70 text-lg text-white shadow-[0_0_26px_rgba(13,94,232,0.42)] transition duration-300 group-hover:scale-105 group-hover:bg-[#176fff] sm:h-11 sm:w-11 sm:text-xl">
                        <Icon />
                      </span>
                      <span>
                        <strong className="block text-sm font-bold text-white sm:text-base">
                          {title}
                        </strong>
                        <span className="mt-1 block text-[0.68rem] leading-4 text-white/68 sm:text-xs sm:leading-5">
                          {text}
                        </span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
