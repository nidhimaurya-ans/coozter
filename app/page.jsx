import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import RevealText from "@/components/RevealText";
import MagneticButton from "@/components/MagneticButton";
import MarqueeLogos from "@/components/MarqueeLogos";
import ServiceStory from "@/components/ServiceStory";
import TestimonialStrip from "@/components/TestimonialStrip";
import BlogPreview from "@/app/blogs/_components/BlogPreview";
import { services, channelTabs } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { blogs } from "@/data/blogs";

const companyImages = {
  hero: "https://thumbs.dreamstime.com/b/business-people-above-meeting-planning-discussion-ideas-online-campaign-group-men-women-office-feedback-conversation-455916779.jpg",
  partnerRoom:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=82",
  analytics:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=82",
  team: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=82",
};

const process = [
  [
    "Diagnose",
    "We study current demand, channel data, partner activity, and where trust already exists.",
  ],
  [
    "Position",
    "We sharpen the offer, audience, proof, and language each channel needs.",
  ],
  [
    "Build",
    "We create campaign assets, landing pages, partner kits, content briefs, and tracking.",
  ],
  [
    "Launch",
    "We roll out focused tests with enough structure to learn from the response.",
  ],
  [
    "Optimize",
    "We improve the channel mix based on quality signals, conversion data, and sales feedback.",
  ],
  [
    "Report",
    "We explain what changed, why it matters, and what should happen next.",
  ],
];

const items = [
  {
    title: "Partner messaging",
    text: "We give affiliates the language, proof, and angles they need to represent the brand clearly.",
  },
  {
    title: "Campaign landing paths",
    text: "Traffic from creators, newsletters, consultants, and search lands on pages built for the referral context.",
  },
  {
    title: "Revenue tracking",
    text: "The plan connects partner source, content touchpoint, lead quality, and assisted revenue without messy reports.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-[auto] items-center overflow-hidden pb-16 pt-28 md:pt-32 lg:min-h-screen lg:pt-28">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center anim-image-zoom"
          style={{ backgroundImage: "url('/assets/coozter-hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(247,251,255,0.97)_0%,rgba(247,251,255,0.88)_38%,rgba(247,251,255,0.44)_68%,rgba(247,251,255,0.18)_100%)]" />
        <div className="container-pad w-full anim-fade-up">
        <div className="max-w-[68rem]">
          <p className="mb-6 inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-moss">
            <span className="h-px w-10 bg-coral anim-reveal-line" />
            Affiliate branding and performance marketing
          </p>
          <RevealText
            as="h1"
            text="Empowering Your Success with Digital Expertise"
            className="font-medium font-serif text-[2.85rem] leading-[1.02] text-ink sm:text-[4.35rem] lg:text-[5.7rem]"
          />
          <p className="mt-7 max-w-[48rem] text-[1.04rem] leading-8 text-ink/68 sm:text-xl">
            Coozter helps ambitious companies turn affiliate partnerships,
            search visibility, paid campaigns, and content into measurable
            business growth.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center anim-fade-up anim-delay-3">
            <MagneticButton href="/contact">
              Start a Strategy Call
            </MagneticButton>
            <MagneticButton href="/services" variant="light">
              See How We Work
            </MagneticButton>
          </div>
        </div>
        </div>
      </section>

      <AnimatedSection className="pb-20 pt-2">
        <div className="container-pad">
          <div className="grid gap-8 border-y border-moss/12 py-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.65fr)] lg:items-end">
            <div>
              <p className="mb-4 inline-flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-moss anim-fade-up">
                <span className="h-px w-9 bg-coral anim-reveal-line" />
                Selected collaborators
              </p>
              <RevealText
                as="p"
                text="Trusted by growing teams, consultants, creators, SaaS brands, and service companies"
                className="max-w-3xl font-serif text-[2.05rem] leading-[1.08] text-ink md:text-[3rem]"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                "32 partner launches",
                "+148% qualified leads",
                "4.8x campaign ROI",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center justify-between gap-4 border-t border-moss/12 pt-3 text-sm anim-fade-up anim-delay-${index + 1}`}
                >
                  <span className="font-semibold text-ink">
                    {item.split(" ")[0]}
                  </span>
                  <span className="text-right text-ink/58">
                    {item.replace(item.split(" ")[0], "").trim()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <MarqueeLogos />
      </AnimatedSection>

      <AnimatedSection className="container-pad section-space ">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.98fr)_minmax(420px,1.02fr)] lg:items-start xl:gap-16">
          <div
            className="image-frame relative min-h-[430px] overflow-hidden rounded-[1.5rem] bg-cover bg-center shadow-soft anim-image-zoom sm:min-h-[500px] md:rounded-[2rem] lg:min-h-[590px]"
            role="img"
            aria-label="Marketing team planning affiliate campaign strategy in a modern office"
            style={{ backgroundImage: `url(${companyImages.partnerRoom})` }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,51,0.08)_0%,rgba(7,27,51,0.12)_36%,rgba(7,27,51,0.82)_100%),linear-gradient(90deg,rgba(7,27,51,0.5)_0%,rgba(7,27,51,0.08)_58%)]" />
            <div className="relative flex min-h-[430px] flex-col justify-between p-5 text-white sm:min-h-[500px] sm:p-7 lg:min-h-[590px] lg:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-white/18 pb-4">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-sky-100 sm:text-xs">
                  Affiliate campaign room
                </p>
                <span className="h-2 w-2 rounded-full bg-coral anim-pulse-soft" />
              </div>

              <div className="max-w-[25rem] anim-fade-up anim-delay-2">
                <p className="font-serif text-[2.25rem] leading-[1.02] sm:text-5xl lg:text-[3.25rem]">
                  Partners, creators, content, and paid traffic planned as one
                  revenue path.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-5 text-xs uppercase tracking-[0.1em] text-white/72 sm:max-w-md">
                <span>Partner kits</span>
                <span className="text-right">Tracked traffic</span>
              </div>
            </div>
          </div>
          <div className="anim-slide-left lg:pl-4 xl:pl-8">
            {/* <p className="eyebrow inline-flex items-center gap-3">
              <span className="h-px w-9 bg-coral anim-reveal-line" />
              Built for affiliate marketing
            </p> */}
            {/* <h2 className="mt-5 max-w-[11ch] font-serif text-[2.55rem] leading-[0.98] text-ink sm:text-5xl md:text-6xl lg:text-[4.4rem]">
              Not a template agency site. A growth system with real partner
              movement.
            </h2> */}
            {/* <div className="mt-8 h-px w-full bg-gradient-to-r from-moss/30 via-coral/35 to-transparent" /> */}
            {/* <div className="mt-8 divide-y divide-moss/12 border-y border-moss/12">
              {[
                [
                  "Partner messaging",
                  "We give affiliates the language, proof, and angles they need to represent the brand clearly.",
                ],
                [
                  "Campaign landing paths",
                  "Traffic from creators, newsletters, consultants, and search lands on pages built for the referral context.",
                ],
                [
                  "Revenue tracking",
                  "The plan connects partner source, content touchpoint, lead quality, and assisted revenue without messy reports.",
                ],
              ].map(([title, text], index) => (
                <div
                  key={title}
                  className={`grid gap-3 py-6 anim-fade-up sm:grid-cols-[0.38fr_1fr] sm:gap-7 lg:py-7 anim-delay-${index + 1}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                    <h3 className="font-serif text-[1.65rem] leading-tight text-ink sm:text-3xl">
                      {title}
                    </h3>
                  </div>
                  <p className="max-w-[31rem] text-[0.98rem] leading-7 text-ink/66 sm:text-base">
                    {text}
                  </p>
                </div>
              ))}
            </div> */}

            <div className="mt-8 divide-y divide-moss/12 border-y border-moss/12">
              {items.map((item, index) => (
                <div
                  key={item.title}
                  className={[
                    "grid items-start gap-5 py-6",
                    "sm:grid-cols-[minmax(220px,0.42fr)_1fr] sm:gap-10",
                    "lg:py-7",
                    "anim-fade-up",
                    index === 0 && "anim-delay-1",
                    index === 1 && "anim-delay-2",
                    index === 2 && "anim-delay-3",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />

                    <h3 className="font-serif text-[1.55rem] leading-[1.12] text-ink sm:text-3xl">
                      {item.title}
                    </h3>
                  </div>

                  <p className="max-w-[34rem] text-[0.98rem] leading-7 text-ink/66 sm:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

function PartnerMap() {
  return (
    <div className="relative min-h-[420px] rounded-[1.75rem] border border-white/16 bg-white/8 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] anim-scale-in sm:min-h-[480px] sm:rounded-[2.25rem] sm:p-8">
      <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-center font-serif text-xl text-ink shadow-[0_20px_60px_rgba(0,0,0,0.2)] anim-fade-in sm:h-28 sm:w-28 sm:text-2xl">
        Brand
      </div>
      {["Creator", "Consultant", "Podcast", "Newsletter", "SaaS"].map(
        (node, index) => (
          <div
            key={node}
            className={`absolute grid h-20 w-20 place-items-center rounded-full border border-white/20 bg-white/10 text-xs text-white shadow-soft backdrop-blur anim-fade-in sm:h-24 sm:w-24 sm:text-sm anim-delay-${Math.min(index + 1, 5)} ${["left-4 top-8 sm:left-8 sm:top-10", "right-4 top-16 sm:right-12", "bottom-16 left-5 sm:left-12", "bottom-8 right-5 sm:right-20", "left-1/2 top-4 -translate-x-1/2 sm:top-5"][index]}`}
          >
            {node}
          </div>
        ),
      )}
      <div className="absolute bottom-5 left-5 rounded-2xl bg-warm p-3 text-ink anim-fade-up anim-delay-3 sm:bottom-8 sm:left-8 sm:p-4">
        <p className="text-xs uppercase tracking-[0.18em] text-ink/45">
          Tracked path
        </p>
        <p className="mt-2 font-serif text-3xl">18.4% partner CVR</p>
      </div>
    </div>
  );
}
