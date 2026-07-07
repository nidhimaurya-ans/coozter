import Link from "next/link";
import {
  FiArrowRight,
  FiAward,
  FiBriefcase,
  FiDollarSign,
  FiTarget,
} from "react-icons/fi";

export default function HomeHeroSection() {
  /*
  return (
    <section className="relative flex min-h-[720px] items-center overflow-hidden pt-24 md:pt-28 lg:min-h-screen">
      <Image
        src="/assets/mainhero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-30 object-cover object-right anim-image-zoom"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(2,6,23,0.98)_0%,rgba(6,26,47,0.9)_40%,rgba(13,85,176,0.28)_63%,rgba(2,6,23,0.04)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_34%,rgba(56,189,248,0.18),transparent_24rem),linear-gradient(180deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.24)_100%)]" />
      <div className="pointer-events-none absolute right-[7%] top-[20%] z-0 hidden h-[26rem] w-[26rem] rounded-full border border-sky-300/18 lg:block anim-rotate-slow" />
      <div className="pointer-events-none absolute right-[12%] top-[28%] z-0 hidden h-[15rem] w-[15rem] rounded-full border border-dashed border-sky-200/20 lg:block anim-pulse-soft" />

      <div className="container-pad relative z-10 w-full">
        <div className="max-w-5xl anim-left-to-right">
          <p className="mb-6 inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-sky-100">
            Affiliate branding and performance marketing
          </p>
          <h1 className="max-w-[20ch] font-serif text-[2.65rem] font-medium leading-[0.94] text-white sm:text-[4.1rem] lg:text-[5.25rem] anim-left-to-right">
            Growth systems for brands that need clearer demand
          </h1>
          <div className="mt-4 grid max-w-5xl gap-7 lg:grid-cols-[minmax(0,0.68fr)_minmax(300px,0.32fr)] lg:items-end">
            <p className="max-w-[46rem] text-[1.05rem] leading-8 text-white/74 sm:text-xl">
              Coozter connects affiliate partnerships, SEO, paid campaigns,
              content, and reporting into one practical operating system for
              measurable growth.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row   anim-left-to-right anim-delay-3">
            <MagneticButton href="/contact">
              Start a Strategy Call
            </MagneticButton>
            <MagneticButton href="/services" variant="light" className="">
              Explore Services
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
  */

  const metrics = [
    { value: "15+", label: "Years of Combined Experience", icon: FiAward },
    { value: "250+", label: "Brands Scaled", icon: FiBriefcase },
    { value: "$450M+", label: "Revenue Driven", icon: FiDollarSign },
    { value: "80+", label: "Growth Experts", icon: FiTarget },
  ];

  return (
    <section className="relative isolate min-h-[620px] overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_46%,#e8f5ff_100%)] pt-28 text-ink sm:pt-32 xl:h-[670px] xl:min-h-[670px] xl:pt-0">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_48%,rgba(43,188,255,0.18),transparent_30rem),radial-gradient(circle_at_18%_18%,rgba(13,94,232,0.1),transparent_24rem)]" />
      <div className="pointer-events-none absolute right-[-10rem] bottom-[-1.25rem] z-0 hidden h-[520px] w-[630px] overflow-visible xl:block 2xl:right-[max(-3rem,calc((100vw-1280px)/2-4rem))] 2xl:h-[548px] 2xl:w-[700px]">
        <img
          className="anim-hero-zoom-out h-full w-full object-contain opacity-100"
          src="/assets/digital-marketing-services.svg"
          alt=""
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-blue-100" />

      <div className="mx-auto flex min-h-[492px] w-full max-w-[1280px] flex-col justify-between px-5 pb-8 sm:px-8 lg:px-10 xl:h-full xl:min-h-0 xl:px-[54px] xl:pb-[78px] xl:pt-[138px]">
        <div className="relative z-20 max-w-[540px]">
          <p className="mb-[14px] anim-left-to-right text-[0.68rem] font-extrabold uppercase tracking-[0.13em] text-[#0d5ee8] sm:text-[0.7rem] lg:text-[11px]">
            Affiliate Marketing & Performance Growth Agency
          </p>
          <h1 className="text-[2.78rem] anim-left-to-right font-extrabold leading-[1.02] tracking-normal text-ink sm:text-[3.65rem] lg:text-[54px] xl:text-[58px]">
            We build growth that compounds.
            <span className="block text-[#096cff]">
              Performance that lasts.
            </span>
          </h1>
          <p className="mt-[16px] max-w-[470px] anim-left-to-right text-sm font-medium leading-6 text-ink/68 sm:text-[0.98rem] sm:leading-7 lg:text-[15px] lg:leading-[22px]">
            Coozter combines affiliate marketing, SEO, paid media, content, and
            analytics to drive measurable growth, real customers, and
            predictable results.
          </p>

          <div className="mt-[24px] grid grid-cols-2 gap-3 sm:flex sm:flex-row lg:gap-[14px]">
            <Link
              href="/contact"
              className="group inline-flex h-[42px] min-w-0 items-center justify-center gap-1.5 rounded-[3px] bg-[#096cff] px-2 text-[0.68rem] font-extrabold text-white shadow-[0_12px_26px_rgba(9,108,255,0.24)] transition duration-300 hover:bg-[#005ce6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d5ee8] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:gap-2 sm:px-6 sm:text-xs lg:h-[42px] lg:w-[178px] lg:px-0 lg:text-[12px]"
            >
              Book a Strategy Call
              <FiArrowRight
                size={13}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:size-[14px]"
              />
            </Link>
            <Link
              href="/services"
              className="inline-flex h-[42px] min-w-0 items-center justify-center rounded-[3px] border border-blue-200 bg-white/86 px-2 text-[0.68rem] font-extrabold text-[#0d5ee8] shadow-[0_10px_24px_rgba(13,94,232,0.08)] transition duration-300 hover:border-[#0d5ee8] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d5ee8] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:px-6 sm:text-xs lg:h-[42px] lg:w-[176px] lg:px-0 lg:text-[12px]"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        <div className="relative z-10 h-[310px] overflow-visible sm:h-[350px] md:h-[400px] lg:h-[440px] xl:hidden">
          <img
            className="anim-hero-zoom-out mx-auto h-full w-full translate-y-4 object-contain opacity-100 sm:translate-y-5"
            src="/assets/digital-marketing-services.svg"
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="relative z-20 mb-6 mt-5 grid grid-cols-2 gap-4 lg:mb-8 lg:mt-8 lg:w-[760px] lg:grid-cols-4 lg:gap-0">
          {metrics.map(({ value, label, icon: Icon }, index) => (
            <div
              key={label}
              className={`flex min-h-[4.25rem] items-start gap-3 ${index > 0 ? "lg:border-l lg:border-blue-100 lg:pl-6" : ""}`}
            >
              <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-blue-200 bg-white text-[#0d5ee8]">
                <Icon size={17} />
              </span>
              <span className="block min-w-0 text-left">
                <span className="block text-[1.35rem] font-extrabold leading-none text-[#071b33] lg:text-[24px]">
                  {value}
                </span>
                <span className="mt-1.5 block max-w-[8.5rem] text-[0.72rem] font-semibold leading-[1.25rem] text-[#32465f] lg:max-w-[7.5rem] lg:text-[11px] lg:leading-[15px]">
                  {label}
                </span>
              </span>
            </div>
          ))}
        </div>

        {/*
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-20 max-w-[570px] pt-4">
            <p className="mb-5 text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-[#22b7ff] sm:text-[0.78rem]">
              Affiliate Marketing & Performance Growth Agency
            </p>
            <h1 className="text-[3rem] font-extrabold leading-[1.03] tracking-normal text-white sm:text-[4.1rem] lg:text-[4.65rem] xl:text-[5rem]">
              We build growth that compounds.
              <span className="block text-[#096cff]">Performance that lasts.</span>
            </h1>
            <p className="mt-5 max-w-[510px] text-base font-medium leading-7 text-white/74 sm:text-lg">
              Coozter combines affiliate marketing, SEO, paid media, content,
              and analytics to drive measurable growth, real customers, and
              predictable results.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-[4px] bg-[#096cff] px-7 text-sm font-extrabold text-white shadow-[0_14px_32px_rgba(9,108,255,0.32)] transition duration-300 hover:bg-[#005ce6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22b7ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020812]"
              >
                Book a Strategy Call
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-[4px] border border-white/28 bg-[#07111f]/80 px-7 text-sm font-extrabold text-white transition duration-300 hover:border-[#22b7ff] hover:bg-[#071a31] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22b7ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020812]"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className="relative min-h-[300px] lg:min-h-[520px]">
            <div className="absolute bottom-[12%] left-[2%] right-[4%] hidden h-[190px] lg:block">
              <div className="absolute inset-x-0 bottom-0 h-px bg-[#0b70ff]/35" />
              <div className="absolute inset-y-0 left-[14%] w-px bg-[#0b70ff]/15" />
              <div className="absolute inset-y-0 left-[34%] w-px bg-[#0b70ff]/15" />
              <div className="absolute inset-y-0 left-[54%] w-px bg-[#0b70ff]/15" />
              <div className="absolute inset-y-0 left-[74%] w-px bg-[#0b70ff]/15" />

              <div className="absolute bottom-0 left-[10%] h-[62px] w-4 rounded-t bg-[#0b70ff]/70 shadow-[0_0_22px_rgba(9,108,255,0.6)]" />
              <div className="absolute bottom-0 left-[17%] h-[92px] w-4 rounded-t bg-[#2fbfff]/70 shadow-[0_0_22px_rgba(47,191,255,0.55)]" />
              <div className="absolute bottom-0 left-[24%] h-[52px] w-4 rounded-t bg-[#0b70ff]/65" />
              <div className="absolute bottom-0 left-[31%] h-[128px] w-4 rounded-t bg-[#2fbfff]/75 shadow-[0_0_24px_rgba(47,191,255,0.48)]" />
              <div className="absolute bottom-0 left-[38%] h-[88px] w-4 rounded-t bg-[#0b70ff]/70" />
              <div className="absolute bottom-0 left-[45%] h-[146px] w-4 rounded-t bg-[#2fbfff]/70 shadow-[0_0_24px_rgba(47,191,255,0.42)]" />
              <div className="absolute bottom-0 left-[52%] h-[108px] w-4 rounded-t bg-[#0b70ff]/72" />
              <div className="absolute bottom-0 left-[59%] h-[138px] w-4 rounded-t bg-[#2fbfff]/76" />
              <div className="absolute bottom-0 left-[66%] h-[98px] w-4 rounded-t bg-[#0b70ff]/72" />
              <div className="absolute bottom-0 left-[73%] h-[160px] w-4 rounded-t bg-[#2fbfff]/78 shadow-[0_0_26px_rgba(47,191,255,0.48)]" />
              <div className="absolute bottom-0 left-[80%] h-[118px] w-4 rounded-t bg-[#0b70ff]/70" />
              <div className="absolute bottom-0 left-[87%] h-[174px] w-4 rounded-t bg-[#2fbfff]/78 shadow-[0_0_26px_rgba(47,191,255,0.5)]" />

              <svg
                className="absolute inset-0 h-full w-full overflow-visible"
                viewBox="0 0 760 190"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M56 148L128 112L194 132L262 74L330 98L392 58L456 84L528 52L588 78L658 36L724 66"
                  stroke="#21b8ff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-[0_0_12px_rgba(33,184,255,0.85)]"
                />
              </svg>
            </div>

            <div className="absolute left-[18%] top-[34%] hidden w-[118px] rounded-[6px] border border-[#2fbfff]/30 bg-[#071a31]/68 p-3 shadow-[0_0_32px_rgba(9,108,255,0.24)] backdrop-blur-md lg:block">
              <p className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-white/46">
                Revenue
              </p>
              <p className="mt-1 text-xl font-extrabold text-[#22b7ff]">+164%</p>
              <p className="mt-1 text-[0.58rem] font-semibold text-white/48">
                Revenue lift
              </p>
            </div>
            <div className="absolute left-[39%] top-[31%] hidden w-[112px] rounded-[6px] border border-[#2fbfff]/30 bg-[#071a31]/68 p-3 shadow-[0_0_32px_rgba(9,108,255,0.24)] backdrop-blur-md lg:block">
              <p className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-white/46">
                Leads
              </p>
              <p className="mt-1 text-xl font-extrabold text-[#22b7ff]">+210%</p>
              <p className="mt-1 text-[0.58rem] font-semibold text-white/48">
                Pipeline growth
              </p>
            </div>
            <div className="absolute left-[60%] top-[28%] hidden w-[110px] rounded-[6px] border border-[#2fbfff]/30 bg-[#071a31]/68 p-3 shadow-[0_0_32px_rgba(9,108,255,0.24)] backdrop-blur-md lg:block">
              <p className="text-[0.55rem] font-bold uppercase tracking-[0.16em] text-white/46">
                ROAS
              </p>
              <p className="mt-1 text-xl font-extrabold text-[#22b7ff]">4.7x</p>
              <p className="mt-1 text-[0.58rem] font-semibold text-white/48">
                Efficiency
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-20 mt-10 grid gap-5 border-t border-white/8 pt-6 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:border-t-0 lg:pt-0">
          {metrics.map(({ value, label, icon: Icon }, index) => (
            <div
              key={label}
              className={`flex items-center gap-4 ${index > 0 ? "lg:border-l lg:border-white/16 lg:pl-7" : ""}`}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#0b70ff]/55 bg-[#03162a]/85 text-[#22b7ff] shadow-[0_0_22px_rgba(9,108,255,0.26)]">
                <Icon size={18} />
              </span>
              <span>
                <span className="block text-2xl font-extrabold leading-none text-white">
                  {value}
                </span>
                <span className="mt-1 block max-w-[9rem] text-xs font-semibold leading-4 text-white/58">
                  {label}
                </span>
              </span>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}
