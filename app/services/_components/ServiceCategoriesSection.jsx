import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import MotionItem from "./MotionItem";

const serviceGroups = [
  {
    title: "Affiliate Branding",
    items: [
      "Partner messaging",
      "Referral landing pages",
      "Offer positioning",
      "Campaign tracking",
      "Partner visibility",
    ],
    href: "#affiliate-branding",
    cta: "More Affiliate Branding",
  },
  {
    title: "Paid Performance",
    items: [
      "Google Ads",
      "Social ad testing",
      "Retargeting",
      "Landing pages",
      "Budget guidance",
    ],
    href: "#paid-advertising",
    cta: "More Paid Campaigns",
  },
  {
    title: "Search Engine Optimization",
    items: [
      "Search intent research",
      "Technical SEO audit",
      "Comparison pages",
      "Content briefs",
      "Conversion updates",
    ],
    href: "#seo-growth",
    cta: "More Organic SEO",
  },
  {
    title: "Content & Lead Systems",
    items: [
      "Content strategy",
      "Lead magnets",
      "Email journeys",
      "Nurture flows",
      "Reporting cadence",
    ],
    href: "#content-marketing",
    cta: "More Content Systems",
  },
  {
    title: "Social Media Growth",
    items: [
      "Founder-led content",
      "LinkedIn positioning",
      "Community response",
      "Video direction",
      "Channel voice",
    ],
    href: "#social-media-growth",
    cta: "More Social Growth",
  },
];

export default function ServiceCategoriesSection() {
  return (
    <section className="relative isolate overflow-hidden py-16 text-ink sm:py-20 lg:py-24">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/coozter-hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(226,245,255,0.88),rgba(207,236,255,0.76)),linear-gradient(180deg,rgba(247,251,255,0.74),rgba(188,225,250,0.86))]" />

      <div className="container-pad">
        <div className="mx-auto mb-14 max-w-5xl text-center anim-left-to-right">
          <h2 className="font-serif text-[2.8rem] font-medium leading-tight text-ink sm:text-6xl md:text-7xl">
            Our Services
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-5">
          {serviceGroups.map(
            ({ title, items, href, cta }, index) => (
              <MotionItem
                as="article"
                key={title}
                direction="right"
                delay={index * 0.11}
                className="group relative flex min-h-[27rem] overflow-hidden rounded-[0.45rem] border border-white/70 bg-white/42 shadow-[0_22px_70px_rgba(14,62,128,0.08)] backdrop-blur-[3px] transition-[border-color,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-coral/70 hover:shadow-[0_28px_90px_rgba(14,62,128,0.16)]"
              >
                <span className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-[linear-gradient(0deg,var(--theme-footer)_0%,var(--theme-primary)_62%,var(--theme-accent)_100%)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-y-100" />

                <div className="relative z-10 flex min-h-[27rem] w-full flex-col">
                  <div className="grid min-h-[7rem] items-center border-b border-white/70 px-6 py-5 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-white/22">
                    <h3 className="font-serif text-[1.45rem] font-semibold leading-tight text-ink transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-white">
                      {title}
                    </h3>
                  </div>

                  <div className="flex flex-1 flex-col px-6 py-7">
                    <ul className="grid gap-3.5">
                      {items.map((item) => (
                        <li
                          key={item}
                          className="text-[0.96rem] font-medium leading-6 text-ink/64 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-white/82"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={href}
                      className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-moss transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-white"
                    >
                      {cta}
                      <FiArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </MotionItem>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
