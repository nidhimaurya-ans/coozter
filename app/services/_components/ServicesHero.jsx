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
    <section className="services-hero-scene relative isolate min-h-[760px] overflow-hidden pt-32 text-white sm:pt-36 lg:pt-40">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/coozter-hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,55,94,0.86)_0%,rgba(13,87,139,0.72)_48%,rgba(116,198,255,0.34)_100%),linear-gradient(180deg,rgba(229,247,255,0.1)_0%,rgba(6,44,76,0.74)_100%)]" />

      <div className="container-pad relative">
        <div className="grid min-h-[600px] gap-10 lg:grid-cols-[minmax(0,0.63fr)_minmax(430px,0.47fr)] lg:items-center">
          <div className="relative z-10 max-w-5xl">
            <p className="mb-5 text-[1rem] font-bold leading-6 text-[#f8c51d] sm:text-xl anim-fade-up">
              Grow Your Business With Scalable Digital Marketing
            </p>

            <h1 className="max-w-5xl font-serif text-[2.55rem] font-semibold leading-[1.1] text-white sm:text-6xl md:text-[4.9rem] anim-blur-in anim-delay-1">
              Outsmart the competition with best-in-class digital marketing
              services
            </h1>

            <p className="mt-7 max-w-4xl text-lg font-medium leading-8 text-white/86 sm:text-2xl sm:leading-10 anim-fade-up anim-delay-2">
              Get more traffic. Acquire more customers. Sell more stuff.
              Coozter offers proven strategies and reliable execution to exceed
              your marketing goals.
            </p>

            <div className="mt-9 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 anim-fade-up anim-delay-3">
              {partnerBadges.map(([name, label], index) => (
                <div
                  key={name}
                  className={`services-hero-badge anim-scale-in anim-delay-${Math.min(index + 1, 5)}`}
                >
                  <strong>{name}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[440px] anim-fade-down anim-delay-2 lg:min-h-[560px]">
            <div
              aria-label="Digital marketing analytics laptop with growth idea"
              role="img"
              className="services-hero-png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
