const partnerBadges = [
  ["Google", "Growth Partner"],
  ["Microsoft", "Ads Partner"],
  ["Meta", "Business Partner"],
  ["Amazon Ads", "Verified Partner"],
  ["HubSpot", "Certified Partner"],
  ["Inc. 5000", "Growth List"],
  ["BBB", "A+ Rating"],
  ["Klaviyo", "Champion"],
];

export default function ServicesHero() {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-warm pt-32 text-white sm:pt-36 lg:pt-40">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/coozter-hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 -z-10 bg-moss/70" />

      <div className="container-pad relative">
        <div className="grid min-h-[600px] gap-14 lg:grid-cols-[minmax(0,0.6fr)_minmax(430px,0.4fr)] lg:items-center xl:gap-20">
          <div className="relative z-10 max-w-5xl anim-left-to-right">
            <p className="mb-5 text-[1rem] font-bold leading-6 text-coral sm:text-xl">
              Grow Your Business With Scalable Digital Marketing
            </p>

            <h1 className="max-w-5xl font-serif text-[2.55rem] font-semibold leading-[1.1] text-white sm:text-6xl md:text-[4.9rem]">
              Outsmart the competition with best-in-class digital marketing
              services
            </h1>

            <p className="mt-7 max-w-4xl text-lg font-medium leading-8 text-white/86 sm:text-2xl sm:leading-10">
              Get more traffic. Acquire more customers. Sell more stuff.
              Coozter offers proven strategies and reliable execution to exceed
              your marketing goals.
            </p>
{/* 
            <div className="mt-9 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
              {partnerBadges.map(([name, label], index) => (
                <div
                  key={name}
                  className={`grid min-h-[4.1rem] content-center border border-white/75 bg-ink/20 px-3 py-2 text-white backdrop-blur-sm anim-scale-in anim-delay-${Math.min(index + 1, 5)}`}
                >
                  <strong className="block text-[clamp(0.95rem,1.7vw,1.55rem)] font-extrabold leading-[1.05]">
                    {name}
                  </strong>
                  <span className="mt-1 block text-[0.64rem] font-extrabold uppercase leading-[1.05] tracking-[0.08em] text-white/75">
                    {label}
                  </span>
                </div>
              ))}
            </div> */}
          </div>

          <div className="relative min-h-[440px] lg:min-h-[560px]">
            <div
              aria-label="Digital marketing analytics laptop with growth idea"
              role="img"
              className="absolute left-[calc(50%+16px)] top-1/2 h-[34rem] w-[min(50vw,47rem)] min-w-[35rem] -translate-x-1/2 -translate-y-1/2 max-lg:w-[min(94vw,38rem)] max-lg:min-w-0 max-md:h-[28rem] max-md:w-[34rem] max-md:scale-[0.78]"
            >
              <img
                src="https://www.smartsites.com/media/digital-marketing-services-banner-hero.png"
                alt=""
                className="h-full w-full object-contain object-bottom anim-inside-out anim-delay-2"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
