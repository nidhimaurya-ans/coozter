import AnimatedSection from "@/components/AnimatedSection";
import { sectionSpace, whyChooseFeatures } from "../_data/aboutContent";

const cardDetails = [
  ["Discovery map", "Decision-led plan", "Clear next steps"],
  ["UI systems", "Clean development", "Growth alignment"],
  ["Flexible stack", "Modular sections", "Easy expansion"],
  ["Weekly rhythm", "Shared milestones", "No hidden process"],
  ["Fast loading", "SEO structure", "Conversion paths"],
  ["Maintenance", "Optimization", "Scale support"],
];

export default function WhyChooseUsSection() {
  return (
    <AnimatedSection className={`${sectionSpace} relative isolate overflow-hidden`}>
      <div className="mx-auto max-w-6xl text-center">
        <p className="eyebrow justify-center text-moss">Why choose us</p>
        <h2 className="mt-4 font-serif text-[2.45rem] font-semibold leading-tight text-ink sm:text-[3.25rem] md:text-[4rem]">
          Why choose us
        </h2>

        <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-5 text-left [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 [&::-webkit-scrollbar]:hidden">
          {whyChooseFeatures.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              className={`group relative flex min-h-[29rem] w-[18.5rem] shrink-0 snap-start overflow-hidden rounded-[0.65rem] border border-slate-200 bg-white transition-[transform,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-sky-300 sm:w-[20rem] lg:w-[21rem] anim-fade-up anim-delay-${Math.min(index + 1, 5)}`}
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--theme-accent),var(--theme-primary),var(--theme-footer))]" />
              <span className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-sky-100 transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.45] group-hover:bg-white/20" />
              <span className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-[linear-gradient(180deg,#ffffff_0%,#f2fbff_42%,#dff3ff_100%)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-y-100" />

              <div className="relative z-10 flex min-h-[29rem] w-full flex-col px-6 py-6">
                <div className="flex min-h-[4.75rem] items-start gap-4 border-b border-slate-200 pb-5 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-sky-200">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[0.55rem] border border-[#bfe8ff] bg-[#eff9ff] text-blue-700 transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-3 group-hover:scale-110 group-hover:border-[#8fd8ff] group-hover:bg-[#dff4ff] group-hover:text-blue-800">
                    <Icon size={20} />
                  </span>
                  <h3 className="pt-0.5 font-serif text-[1.35rem] font-semibold leading-tight text-ink transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-blue-950">
                    {title}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col pt-6">
                  <p className="text-[0.96rem] font-medium leading-7 text-ink/64 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-ink/78">
                    {text}
                  </p>

                  <div className="mt-7 space-y-3">
                    {(cardDetails[index] ?? []).map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center gap-3 rounded-[0.5rem] border border-slate-200/80 bg-white/72 px-3 py-2.5 text-sm font-semibold text-ink/70 transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:border-sky-200 group-hover:bg-white group-hover:text-blue-900"
                      >
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--theme-accent)]" />
                        {detail}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-7">
                    <span className="inline-flex h-10 items-center rounded-full border border-[#bfe8ff] bg-[#eff9ff] px-4 text-xs font-bold uppercase tracking-[0.12em] text-blue-800 transition duration-500 group-hover:border-[#8fd8ff] group-hover:bg-[#dff4ff] group-hover:text-blue-900">
                      Built for growth
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
