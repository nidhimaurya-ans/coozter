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
    <section className="relative isolate overflow-hidden py-5 text-ink">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url('/assets/coozter-hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(245,251,255,0.96),rgba(225,244,255,0.9)),linear-gradient(180deg,rgba(255,255,255,0.9),rgba(211,237,255,0.88))]" />

      <div className="container-pad">
        <div className="mx-auto mb-14 max-w-5xl text-center anim-left-to-right">
          <h2 className="font-serif text-[2.8rem] font-medium leading-tight text-ink sm:text-5xl md:text-6xl">
            Our Services
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {serviceGroups.map(({ title, items, href, cta }, index) => (
            <MotionItem
              as="article"
              key={title}
              direction="up"
              delay={index * 0.08}
              className="group relative flex min-h-[27rem] overflow-hidden rounded-[0.45rem] border border-white/80 bg-white/72 shadow-[0_22px_70px_rgba(14,62,128,0.07)] backdrop-blur-[5px] transition-[border-color,box-shadow,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-sky-300/80 hover:shadow-[0_28px_90px_rgba(14,62,128,0.14)]"
            >
              <span className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-[linear-gradient(0deg,#0b5fd3_0%,#1184f2_58%,#58d7ff_100%)] transition-transform duration-[1150ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-y-100" />
              <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[1150ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]" />

              <div className="relative z-10 flex min-h-[27rem] w-full flex-col">
                <div className="grid min-h-[7rem] items-center border-b border-white/80 px-6 py-5 transition-colors duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-white/24">
                  <h3 className="font-serif text-[1.45rem] font-semibold leading-tight text-ink transition-colors duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:!text-white">
                    {title}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col px-6 py-7">
                  <ul className="grid gap-3.5">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="text-[0.96rem] font-medium leading-6 text-ink/72 transition-colors duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:!text-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={href}
                    className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-blue-700 transition-colors duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:!text-white [&_*]:transition-colors [&_*]:duration-1000 group-hover:[&_*]:!text-white"
                  >
                    <span>{cta}</span>
                    <FiArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </MotionItem>
          ))}
        </div>
      </div>
    </section>
  );
}
