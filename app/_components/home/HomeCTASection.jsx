import MagneticButton from "@/components/MagneticButton";

export default function HomeCTASection() {
  return (
    <section className="container-pad pb-24">
      <div className="border-y border-moss/14 py-12">
        <div className="grid gap-8 md:grid-cols-[1fr_0.45fr] md:items-end">
          <div>
            <h2 className="mt-5 max-w-4xl font-serif text-[2.55rem] font-medium leading-[0.98] text-ink sm:text-6xl">
              Bring your channels, partners, and reporting into one plan.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ink/64">
              Share what you are trying to grow. We will help identify the
              first clear moves across strategy, campaigns, content, and
              tracking.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-start">
            <MagneticButton href="/contact">Plan My Growth</MagneticButton>
            <MagneticButton href="/services" variant="light">
              View Services
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
