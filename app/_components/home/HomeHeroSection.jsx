import RevealText from "@/components/RevealText";
import MagneticButton from "@/components/MagneticButton";

export default function HomeHeroSection() {
  return (
    <section className="relative  flex  items-center overflow-hidden  pt-20 md:pt-24 lg:min-h-screen ">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center anim-image-zoom"
        style={{ backgroundImage: "url('/assets/mainhero.jpg')" }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,26,47,0.94)_0%,rgba(7,27,51,0.82)_42%,rgba(13,85,176,0.42)_100%)]" />

      <div className="container-pad w-full">
        <div className=" anim-fade-up">
          <p className="mb-6 inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-moss">
            <span className="h-px w-10 bg-coral anim-reveal-line anim-slide-right" />
            Affiliate branding and performance marketing
          </p>
          <RevealText
            as="h1"
            text="Growth systems for brands that need clearer demand"
            className="max-w-[16ch] font-serif text-[2.15rem] font-medium leading-[0.98] text-ink sm:text-[3.6rem] lg:text-[4.45rem] anim-slide-right"
          />
          <div className=" mt-4 grid gap-6 lg:grid-cols-[minmax(0,0.66fr)_minmax(320px,0.34fr)] lg:items-end">
            <p className="max-w-[48rem] text-[1.05rem] leading-8 text-ink/68 sm:text-xl">
              Coozter connects affiliate partnerships, SEO, paid campaigns,
              content, and reporting into one practical operating system for
              measurable growth.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col anim-fade-up anim-delay-3">
              <MagneticButton href="/contact">Start a Strategy Call</MagneticButton>
              <MagneticButton href="/services" variant="light">
                Explore Services
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
