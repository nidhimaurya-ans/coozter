import { FiBarChart2, FiSearch, FiShield, FiTrendingUp } from "react-icons/fi";
import { FaRegHandshake } from "react-icons/fa6";
import AnimatedSection from "@/components/AnimatedSection";
import { divider, operatingModel, sectionSpace } from "../_data/aboutContent";

export default function WorkModelSection() {
  return (
    <AnimatedSection className={sectionSpace}>
      <p className="eyebrow inline-flex items-center gap-3 text-moss">
        <span className="h-px w-9 bg-coral anim-reveal-line" />
        How we work
      </p>

      <div className="grid gap-12 xl:grid-cols-[minmax(0,1.02fr)_minmax(440px,0.98fr)] xl:items-center xl:gap-20">
        <div className="relative min-h-[380px] overflow-hidden anim-scale-in xl:min-h-[580px]">
          <div
            className="absolute inset-0 about-3d-scene"
            aria-label="Animated 3D workflow showing partner, search, campaign, and reporting signals"
            role="img"
          >
            <div className="about-3d-orbit about-3d-orbit-one" />
            <div className="about-3d-orbit about-3d-orbit-two" />
            <div className="about-3d-core">
              <span className="about-3d-core-ring" />
              <span className="about-3d-core-dot" />
              <FiBarChart2 size={34} />
            </div>
            <div className="about-3d-path about-3d-path-one" />
            <div className="about-3d-path about-3d-path-two" />
            <div className="about-3d-node about-3d-node-one">
              <FaRegHandshake size={22} />
              <span>Partners</span>
            </div>
            <div className="about-3d-node about-3d-node-two">
              <FiSearch size={22} />
              <span>Intent</span>
            </div>
            <div className="about-3d-node about-3d-node-three">
              <FiTrendingUp size={22} />
              <span>Testing</span>
            </div>
            <div className="about-3d-node about-3d-node-four">
              <FiShield size={22} />
              <span>Reports</span>
            </div>
          </div>
        </div>

        <div className="anim-slide-left items-start">
          <div className={`divide-y ${divider} `}>
            {operatingModel.map(([Icon, title, text], index) => (
              <div
                key={title}
                className={`group grid gap-5 py-6 transition duration-300 anim-fade-up sm:grid-cols-[52px_1fr] anim-delay-${Math.min(
                  index + 1,
                  5,
                )}`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-coral text-white transition duration-300 anim-pop group-hover:bg-moss group-hover:text-white">
                  <Icon size={18} />
                </div>

                <div>
                  <h3 className="font-serif text-[1.75rem] leading-tight text-ink transition duration-300 group-hover:text-moss">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-[32rem] text-[0.98rem] leading-7 text-ink/64">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
