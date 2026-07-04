import AnimatedSection from "@/components/AnimatedSection";
import { examples } from "../_data/digitalMarketingContent";

export default function CampaignExamplesSection() {
  return (
    <AnimatedSection className="container-pad py-12 sm:py-16 lg:py-20">
      <div className="grid gap-10 rounded-[2rem] border border-slate-300/80 bg-white p-6 shadow-[0_24px_80px_rgba(14,62,128,0.08)] lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
        <div>
          <p className="eyebrow text-moss">Campaign examples</p>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-ink md:text-6xl">
            Practical campaigns your team can understand.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-ink/64">
            We connect search, paid creative, content, email, and reporting so
            the campaign teaches your team what to scale next.
          </p>
        </div>
        <div className="grid content-center gap-5">
          {examples.map((item, index) => (
            <p
              key={item}
              className={`border-b border-slate-300/80 pb-5 text-lg leading-8 text-ink/68 last:border-b-0 anim-fade-up anim-delay-${Math.min(index + 1, 5)}`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
