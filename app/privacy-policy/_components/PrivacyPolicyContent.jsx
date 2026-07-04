import AnimatedSection from "@/components/AnimatedSection";
import { policySections } from "../_data/privacyContent";

export default function PrivacyPolicyContent() {
  return (
    <AnimatedSection className="container-pad py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-slate-300/80 bg-slate-300/80">
          {policySections.map(([title, text], index) => (
            <article
              key={title}
              className={`grid gap-5 bg-white p-6 anim-fade-up md:grid-cols-[0.38fr_1fr] md:p-8 anim-delay-${Math.min(index + 1, 5)}`}
            >
              <h2 className="font-serif text-2xl font-medium leading-tight text-ink md:text-3xl">
                {title}
              </h2>
              <p className="text-sm leading-7 text-ink/64 md:text-base md:leading-8">
                {text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[1.5rem] bg-[linear-gradient(135deg,#071b33,#1d5edb_62%,#2bbcff)] p-6 text-white md:p-8 anim-fade-up">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-100">
            Contact
          </p>
          <p className="mt-4 max-w-3xl font-serif text-3xl font-medium leading-tight md:text-4xl">
            Questions about privacy can be sent to hello@coozter.com.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
