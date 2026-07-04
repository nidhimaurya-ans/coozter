export default function PrivacyHero() {
  return (
    <section className="container-pad pt-32 sm:pt-36 lg:pt-40">
      <div className="grid gap-10 border-y border-slate-300/80 py-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <div className="anim-fade-up">
          <p className="eyebrow inline-flex items-center gap-3 text-moss">
            <span className="h-px w-9 bg-coral anim-reveal-line" />
            Privacy Policy
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-[2.55rem] font-medium leading-[1.02] text-ink sm:text-6xl md:text-7xl">
            How we handle your information.
          </h1>
        </div>

        <p className="max-w-2xl text-base leading-8 text-ink/64 anim-fade-up anim-delay-1">
          Coozter collects only the information needed to respond to inquiries,
          provide marketing services, improve our website, and run a reliable
          business relationship.
        </p>
      </div>
    </section>
  );
}
