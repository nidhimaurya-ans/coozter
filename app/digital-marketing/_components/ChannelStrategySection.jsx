import AnimatedSection from "@/components/AnimatedSection";
import { channelTabs } from "@/data/services";

export default function ChannelStrategySection() {
  return (
    <AnimatedSection className="container-pad py-12 sm:py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="eyebrow text-moss">Channel strategy</p>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-ink md:text-6xl">
            A job for every channel.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {channelTabs.map((tab, index) => (
            <article
              key={tab.label}
              className={`border-t border-slate-300/80 pt-5 anim-fade-up anim-delay-${Math.min(index + 1, 5)}`}
            >
              <h3 className="font-serif text-2xl font-medium text-ink">
                {tab.label}
              </h3>
              <p className="mt-3 text-sm leading-7 text-ink/64">
                {tab.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
