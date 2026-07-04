import AnimatedSection from "@/components/AnimatedSection";
import { sectionSpace, valueBlocks } from "../_data/servicesContent";

export default function ValueSection() {
  return (
    <AnimatedSection className={sectionSpace}>
      <div className="mb-10 max-w-3xl">
        <p className="eyebrow">Why it works</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-6xl">
          Built like a service team, operated like a growth system.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {valueBlocks.map(([Icon, title, text], index) => (
          <div
            key={title}
            className={`group rounded-[1.5rem] border border-slate-300/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-coral/40 hover:shadow-[0_22px_70px_rgba(14,62,128,0.08)] anim-fade-up anim-delay-${Math.min(index + 1, 5)}`}
          >
            <div className="grid h-11 w-11 place-items-center rounded-full bg-moss/8 text-moss transition group-hover:bg-moss group-hover:text-white">
              <Icon size={19} />
            </div>
            <h3 className="mt-6 font-serif text-3xl leading-tight text-ink">
              {title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-ink/62">{text}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
