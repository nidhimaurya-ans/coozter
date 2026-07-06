import MagneticButton from "@/components/MagneticButton";
import { partnerNodes } from "../_data/affiliateContent";

export default function AffiliateHero() {
  return (
    <section className="container-pad pt-32 sm:pt-36 lg:pt-40">
      <div className="grid gap-12 border-y border-slate-300/80 py-12 xl:grid-cols-[0.95fr_1.05fr] xl:items-center xl:gap-20">
        <div className="anim-fade-up">
          <p className="eyebrow inline-flex items-center gap-3 text-moss">
            <span className="h-px w-9 bg-coral anim-reveal-line" />
            Affiliate branding
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-[2.55rem] font-medium leading-[1.02] text-ink sm:text-6xl md:text-7xl">
            Make partner recommendations easier to trust, track, and scale.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/68">
            We help brands turn partner relationships into campaign systems
            with messaging, referral journeys, offer context, and reporting.
          </p>
          <div className="mt-8">
            <MagneticButton href="/contact">
              Build My Partner Channel
            </MagneticButton>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-[1.35rem] bg-[linear-gradient(135deg,#f8fcff,#dff3ff)] p-4 shadow-[0_28px_90px_rgba(14,62,128,0.12)] anim-blur-in anim-delay-1 sm:min-h-[420px] sm:rounded-[2rem] sm:p-6 md:min-h-[520px]">
          <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(29,94,219,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(29,94,219,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="relative grid h-full place-items-center">
            <div className="grid h-24 w-24 place-items-center rounded-full bg-[linear-gradient(135deg,#071b33,#1d5edb)] text-center font-serif text-base font-medium text-white shadow-[0_28px_80px_rgba(14,62,128,0.22)] sm:h-32 sm:w-32 sm:text-xl">
              Coozter
            </div>
            {partnerNodes.map((node, index) => (
              <div
                key={node}
                className={`absolute grid h-20 w-20 place-items-center rounded-full border border-white/80 bg-white/72 text-center text-[0.64rem] font-bold uppercase tracking-[0.08em] text-moss shadow-[0_18px_52px_rgba(14,62,128,0.12)] anim-fade-up anim-delay-${Math.min(index + 1, 5)} sm:h-24 sm:w-24 sm:text-xs ${[
                  "left-3 top-6 sm:left-6 sm:top-8",
                  "right-3 top-14 sm:right-8 sm:top-16",
                  "left-5 bottom-14 sm:left-10 sm:bottom-16",
                  "right-5 bottom-8 sm:right-12 sm:bottom-10",
                  "left-1/2 top-4 -translate-x-1/2",
                ][index]}`}
              >
                {node}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
