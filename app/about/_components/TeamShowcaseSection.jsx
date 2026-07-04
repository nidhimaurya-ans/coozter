import AnimatedSection from "@/components/AnimatedSection";
import {
  divider,
  proofMetrics,
  sectionSpace,
  teamMembers,
} from "../_data/aboutContent";

export default function TeamShowcaseSection() {
  return (
    <AnimatedSection className={sectionSpace}>
      <div className="grid">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.7fr)] lg:items-start">
          <div className="anim-fade-up lg:max-w-4xl">
            <p className="eyebrow inline-flex items-center gap-3 text-moss">
              <span className="h-px w-9 bg-coral anim-reveal-line" />
              Meet our team
            </p>

            {/* <h2 className="mt-5 font-serif text-[2.4rem] leading-[1.3] text-ink sm:text-5xl md:text-6xl">
              The people shaping partner-led growth.
            </h2> */}
          </div>
          {/* 
          <p className="max-w-md text-base leading-7 text-ink/62 anim-fade-up anim-delay-1 lg:justify-self-end">
            Strategy, content, performance, and reporting sit close together so
            every campaign is planned with the full customer journey in view.
          </p> */}
        </div>

        <div
          className={`grid gap-9   lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.62fr)] lg:items-center`}
        >
          <div className="team-3d-stage ">
            <div className="team-3d-ring" />
            <div className="team-3d-path team-3d-path-one" />
            <div className="team-3d-path team-3d-path-two" />

            {teamMembers.map(([name, role, focus, image], index) => (
              <article
                key={name}
                className={`team-3d-person team-3d-person-${index + 1}`}
              >
                <div className="team-3d-frame">
                  <div
                    aria-label={`${name}, ${role} at Coozter`}
                    role="img"
                    className="team-3d-photo"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                  <div className="team-3d-shine" />
                  <div className="team-3d-caption">
                    <p>{role}</p>
                    <h3>{name}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-3">
            {teamMembers.map(([name, role, focus], index) => (
              <div
                key={name}
                className={`border-b ${divider} py-4 anim-fade-up last:border-b-0 anim-delay-${Math.min(
                  index + 1,
                  5,
                )}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-moss">
                      {role}
                    </p>
                    <h3 className="mt-2 font-serif text-3xl leading-tight text-ink">
                      {name}
                    </h3>
                  </div>
                  {/* <span className="font-serif text-4xl leading-none text-moss/24 transition duration-300 group-hover:text-moss/45">
                    0{index + 1}
                  </span> */}
                </div>

                <p className="mt-3 max-w-md text-sm leading-7 text-ink/62">
                  {focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className={`grid gap-5 border-b ${divider} pb-6 sm:grid-cols-3`}>
          {proofMetrics.map(([number, label], index) => (
            <div
              key={label}
              className={`flex items-baseline justify-between gap-5 anim-fade-up sm:block anim-delay-${Math.min(
                index + 1,
                5,
              )}`}
            >
              <p className="font-serif text-4xl leading-none text-moss sm:text-5xl">
                {number}
              </p>
              <p className="mt-2 text-right text-[0.68rem] font-semibold uppercase leading-4 tracking-[0.1em] text-ink/48 sm:text-left">
                {label}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </AnimatedSection>
  );
}
