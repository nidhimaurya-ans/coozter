import AnimatedSection from "@/components/AnimatedSection";
import {
  FiBarChart2,
  FiTarget,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

const benefits = [
  [FiTrendingUp, "Connected Strategy", "All channels aligned to one goal."],
  [FiTarget, "Better Performance", "Data-backed decisions for more ROI."],
  [FiBarChart2, "Full Transparency", "Real-time reporting across channels."],
];

const growthPoints = [
  ["01", "Demand", "Qualified traffic"],
  ["02", "Trust", "Proof-led content"],
  ["03", "Convert", "Sharper journeys"],
  ["04", "Report", "Clear next moves"],
];

export default function HomeChannelsSection() {
  return (
    <AnimatedSection className="overflow-hidden bg-[linear-gradient(135deg,#061a2f_0%,#071b33_46%,#0d55b0_100%)] py-5 text-white ">
      <div className="container-pad relative">
        <div className="grid gap-14 lg:grid-cols-[0.6fr_0.4fr] lg:items-center">
          <div className="relative">
          
            <h2 className="font-serif text-[3.1rem] font-medium leading-[1.02] sm:text-[4.2rem] mt-5">
              <span className="block text-white anim-left-to-right">
                Every Marketing Channel
              </span>
              <span className="block text-blue-400 anim-left-to-right [animation-delay:1s]">
                Works Together.
              </span>
            </h2>
            <p className="mt-8 max-w-md text-lg leading-9 text-white/72 sm:text-xl">
              We build a connected growth system where every channel supports
              the next, driving consistent pipeline and revenue.
            </p>

            <div className="mt-12 grid gap-7 mb-8">
              {benefits.map(([Icon, title, text], index) => (
                <div
                  key={title}
                  className={`flex items-center gap-5 anim-fade-up anim-delay-${index + 1}`}
                >
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-blue-500/14 text-3xl text-blue-400 shadow-[0_0_34px_rgba(37,99,235,0.18)]">
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

          <div className="relative min-h-[560px] anim-hero-zoom-out lg:min-h-[620px]">
            <div className="absolute left-[58%] top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/18" />
            <div className="absolute left-[58%] top-1/2 h-[15rem] w-[15rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-sky-400/34 anim-rotate-slow" />

            <div className="absolute left-[58%] top-1/2 z-10 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-sky-300/60 bg-[#08224c]/80 text-center shadow-[0_0_60px_rgba(56,189,248,0.45)] ring-[18px] ring-blue-500/12 anim-pulse-soft">
              <span className="grid gap-3">
                <FiZap className="mx-auto text-5xl text-blue-400" />
                <span className="text-lg font-black uppercase leading-tight tracking-[0.05em] text-white">
                  Growth
                  <br />
                  Engine
                </span>
              </span>
            </div>

            {growthPoints.map(([number, title, text], index) => {
              const positions = [
                "left-0 top-[13%]",
                "left-0 top-[34%]",
                "left-0 top-[54%]",
                "left-0 top-[74%]",
              ];
              return (
                <div key={title}>
                  <div
                    className={`absolute z-20 w-36 rounded-2xl border border-sky-400/18  p-4   anim-fade-up anim-delay-${index + 1} ${positions[index]}`}
                  >
                 
                    <strong className="mt-1 block text-lg font-semibold text-white">
                      {title}
                    </strong>
                    <span className="mt-1 block text-sm leading-5 text-white/64">
                      {text}
                    </span>
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
