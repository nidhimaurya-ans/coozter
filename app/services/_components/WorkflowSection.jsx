import AnimatedSection from "@/components/AnimatedSection";
import { sectionSpace, workflow } from "../_data/servicesContent";

export default function WorkflowSection() {
  return (
    <AnimatedSection className={sectionSpace}>
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <p className="eyebrow">Workflow</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-6xl">
            A clear process from diagnosis to scale.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-8 text-ink/64">
            The work stays practical: fewer meetings about vague growth, more
            decisions about pages, campaigns, partners, reporting, and next
            moves.
          </p>
        </div>

        <div className="relative grid gap-4 lg:grid-cols-5 lg:gap-0">
          <span className="absolute left-6 top-0 hidden h-full w-px bg-slate-300/80 md:block lg:left-0 lg:right-0 lg:top-7 lg:h-px lg:w-full" />
          {workflow.map(([title, text], index) => (
            <div
              key={title}
              className={`relative grid gap-4 rounded-[1.35rem] border border-slate-300/80 bg-white p-5 transition hover:-translate-y-1 hover:border-coral/40 md:grid-cols-[3rem_1fr] lg:mx-2 lg:block anim-fade-up anim-delay-${Math.min(index + 1, 5)}`}
            >
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-[linear-gradient(135deg,#071b33,#1d5edb)] text-sm font-semibold text-white">
                {index + 1}
              </span>
              <div className="lg:mt-5">
                <h3 className="font-serif text-2xl text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/62">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
