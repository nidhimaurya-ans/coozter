import { FiBarChart2 } from "react-icons/fi";
import MagneticButton from "@/components/MagneticButton";
import { channelTabs } from "@/data/services";

export default function DigitalMarketingHero() {
  return (
    <section className="container-pad pt-32 sm:pt-36 lg:pt-40">
      <div className="grid gap-12 border-y border-slate-300/80 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center xl:gap-20">
        <div className="anim-fade-up">
          <p className="eyebrow inline-flex items-center gap-3 text-moss">
            <span className="h-px w-9 bg-coral anim-reveal-line" />
            Digital marketing
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-[2.55rem] font-medium leading-[1.02] text-ink sm:text-6xl md:text-7xl">
            Strategy and performance work built around buying signals.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/68">
            We connect SEO, paid ads, social, content, email, and analytics
            into a plan your team can execute and leadership can understand.
          </p>
          <div className="mt-8">
            <MagneticButton href="/contact">Plan My Growth</MagneticButton>
          </div>
        </div>

        <div className="rounded-[2rem] bg-[linear-gradient(135deg,#071b33,#1d5edb_62%,#2bbcff)] p-5 text-white shadow-[0_28px_90px_rgba(14,62,128,0.14)] anim-blur-in anim-delay-1">
          <div className="rounded-[1.5rem] bg-white/10 p-5 ring-1 ring-white/14">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-100">
                Campaign plan
              </p>
              <FiBarChart2 size={20} className="text-sky-100" />
            </div>
            {channelTabs.map((tab) => (
              <div
                key={tab.label}
                className="flex items-center justify-between gap-5 border-b border-white/14 py-5 last:border-b-0"
              >
                <div>
                  <span className="font-serif text-2xl font-medium">
                    {tab.label}
                  </span>
                  <p className="mt-1 max-w-sm text-sm leading-6 text-white/64">
                    {tab.note}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-bold text-moss">
                  {tab.metric}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
