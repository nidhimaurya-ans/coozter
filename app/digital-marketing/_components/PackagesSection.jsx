import AnimatedSection from "@/components/AnimatedSection";
import { packages } from "../_data/digitalMarketingContent";

export default function PackagesSection() {
  return (
    <AnimatedSection className="container-pad py-12 sm:py-16 lg:py-20">
      <div className="mb-10 max-w-3xl">
        <p className="eyebrow text-moss">Packages</p>
        <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-ink md:text-6xl">
          Choose the working rhythm.
        </h2>
      </div>
      <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-slate-300/80 bg-slate-300/80">
        {packages.map(([name, text, price], index) => (
          <article
            key={name}
            className={`grid gap-5 bg-white p-6 md:grid-cols-[0.45fr_1fr_0.32fr] md:items-center md:p-7 ${
              index === 1 ? "bg-[linear-gradient(135deg,#071b33,#1d5edb)] text-white" : ""
            }`}
          >
            <h3 className={`font-serif text-3xl font-medium ${index === 1 ? "text-white" : "text-ink"}`}>
              {name}
            </h3>
            <p className={index === 1 ? "text-white/72" : "text-ink/64"}>
              {text}
            </p>
            <span className="font-bold">{price}</span>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
