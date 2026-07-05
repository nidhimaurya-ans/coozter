import AnimatedSection from "@/components/AnimatedSection";
import { testimonials } from "@/data/testimonials";
import {
  FiArrowUpRight,
  FiBarChart2,
  FiChevronLeft,
  FiChevronRight,
  FiMessageCircle,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const stats = [
  [FiUsers, "200+", "Growth-focused clients"],
  [FiTrendingUp, "4.8x", "Average campaign ROI"],
  [FiTarget, "98%", "Client retention rate"],
  [FiBarChart2, "50+", "Industries served"],
];

const tabs = ["All Stories", "Demand Generation", "Performance Marketing", "Content & SEO", "Strategy"];
const cardOrder = [testimonials[1], testimonials[0], testimonials[2]];
const reviewGroups = [cardOrder, cardOrder];

export default function HomeTestimonialsSection() {
  return (
    <AnimatedSection className="section-space overflow-hidden bg-[linear-gradient(135deg,#061a2f_0%,#071b33_46%,#0d55b0_100%)] text-white">
      <div className="container-pad">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-blue-400/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-sky-100">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
            Customer Stories
          </div>

          <div className="flex max-w-full overflow-hidden rounded-lg border border-white/14 text-sm text-white/62">
            {tabs.map((tab, index) => (
              <span
                key={tab}
                className={`whitespace-nowrap border-r border-white/10 px-6 py-3 last:border-r-0 ${
                  index === 0
                    ? "bg-blue-600 text-white shadow-[0_0_34px_rgba(37,99,235,0.42)]"
                    : ""
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.3fr_0.7fr] lg:items-center">
          <div>
            <h2 className="max-w-[10ch] font-serif text-[3.1rem] font-medium leading-[1.03] text-white sm:text-[4.4rem]">
              Progress clients can{" "}
              <span className="block text-blue-400">explain.</span>
            </h2>
            <p className="mt-7 max-w-sm text-lg leading-8 text-white/66">
              Real teams. Real results. See how Coozter turns strategy into
              measurable growth across channels.
            </p>

            <div className="mt-9 h-px max-w-sm bg-white/16" />

            <div className="mt-8 grid gap-5">
              {stats.map(([Icon, value, label], index) => (
                <div
                  key={label}
                  className={`flex items-center gap-5 anim-fade-up anim-delay-${index + 1}`}
                >
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-blue-400/18 bg-blue-500/10 text-2xl text-blue-400">
                    <Icon />
                  </span>
                  <span>
                    <strong className="block text-3xl font-bold text-blue-400">
                      {value}
                    </strong>
                    <span className="text-base text-white/62">{label}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden py-6">
            <button
              type="button"
              aria-label="Previous story"
              className="absolute left-0 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-blue-500/70 bg-blue-950/40 text-2xl text-blue-400"
            >
              <FiChevronLeft />
            </button>
            <button
              type="button"
              aria-label="Next story"
              className="absolute right-0 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-blue-500/70 bg-blue-950/40 text-2xl text-blue-400"
            >
              <FiChevronRight />
            </button>

            <div className="flex w-max gap-5 pl-16 [animation:marquee-flow_42s_linear_infinite] hover:[animation-play-state:paused]">
              {reviewGroups.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="grid w-[57rem] shrink-0 grid-cols-[0.9fr_1.18fr_0.9fr] items-center gap-5"
                >
                  {group.map((item, index) => {
                    const featured = index === 1;

                    return (
                      <figure
                        key={`${item.name}-${groupIndex}-${index}`}
                        className={`flex flex-col justify-between rounded-2xl border backdrop-blur ${
                          featured
                            ? "min-h-[39rem] border-blue-400 bg-blue-950/34 p-9 shadow-[0_0_52px_rgba(37,99,235,0.5)]"
                            : "min-h-[32rem] border-white/14 bg-white/5 p-7 shadow-[0_0_40px_rgba(2,6,23,0.16)]"
                        }`}
                      >
                        <div>
                          <div className="font-serif text-7xl leading-none text-blue-500">
                            &ldquo;
                          </div>
                          <blockquote
                            className={`mt-4 leading-8 text-white ${
                              featured ? "text-[1.55rem] leading-10" : "text-lg"
                            }`}
                          >
                            {item.quote}
                          </blockquote>
                        </div>

                        <figcaption>
                          <div className="mb-7 h-px bg-white/12" />
                          <div className="flex items-center gap-4">
                            <div className="grid h-16 w-16 place-items-center rounded-full border border-blue-400/45 bg-[linear-gradient(135deg,#1d5edb,#38bdf8)] text-lg font-bold text-white shadow-[0_0_30px_rgba(37,99,235,0.34)]">
                              {item.name
                                .split(" ")
                                .map((part) => part[0])
                                .join("")}
                            </div>
                            <div>
                              <strong className="block text-lg font-bold text-white">
                                {item.name}
                              </strong>
                              <span className="block text-base leading-7 text-white/58">
                                {item.role},
                                <br />
                                {item.company}
                              </span>
                            </div>
                          </div>
                          <div className="mt-6 inline-flex rounded-full border border-blue-400/18 bg-blue-600/22 px-4 py-2 text-sm font-bold text-sky-100 shadow-[0_0_24px_rgba(37,99,235,0.22)]">
                            {item.result}
                          </div>
                        </figcaption>
                      </figure>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="mt-9 flex justify-center gap-4">
              {[0, 1, 2, 3, 4].map((item, index) => (
                <span
                  key={item}
                  className={`h-2.5 w-2.5 rounded-full ${
                    index === 0 ? "bg-blue-500 shadow-[0_0_18px_rgba(37,99,235,0.8)]" : "bg-blue-900"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-7 rounded-2xl border border-white/14 bg-white/5 p-7 backdrop-blur md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex items-center gap-6">
            <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full border border-blue-400/38 bg-blue-500/14 text-4xl text-blue-300">
              <FiMessageCircle />
            </span>
            <span>
              <h3 className="text-2xl font-bold text-white">
                Ready to write your own success story?
              </h3>
              <p className="mt-2 text-lg text-white/62">
                Let's build a growth strategy that delivers results.
              </p>
            </span>
          </div>
          <a
            href="/contact"
            className="inline-flex min-h-16 items-center justify-center gap-4 rounded-xl bg-blue-600 px-10 text-lg font-bold text-white shadow-[0_18px_54px_rgba(37,99,235,0.32)] transition hover:-translate-y-1 hover:bg-blue-500"
          >
            Plan My Growth
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
