import { FiCheckCircle, FiLayers, FiSearch, FiTarget } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";
import { process } from "../_data/digitalMarketingContent";

export default function AuditProcessSection() {
  return (
    <AnimatedSection className="container-pad py-12 sm:py-16 lg:py-20">
      <div className="mb-10 max-w-3xl">
        <p className="eyebrow text-moss">Audit to growth</p>
        <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-ink md:text-6xl">
          Clear decisions before more spend.
        </h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-4">
        {process.map(([title, text], index) => (
          <article
            key={title}
            className={`rounded-[1.25rem] border border-slate-300/80 bg-white p-5 anim-fade-up anim-delay-${Math.min(index + 1, 5)}`}
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-moss/8 text-moss">
              {index === 0 && <FiSearch size={18} />}
              {index === 1 && <FiTarget size={18} />}
              {index === 2 && <FiLayers size={18} />}
              {index === 3 && <FiCheckCircle size={18} />}
            </span>
            <h3 className="mt-5 font-serif text-2xl font-medium text-ink">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-ink/64">{text}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
