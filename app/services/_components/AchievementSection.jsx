import AnimatedSection from "@/components/AnimatedSection";
import { achievementBlocks, sectionSpace } from "../_data/servicesContent";
import MotionItem from "./MotionItem";
import SectionHeader from "./SectionHeader";

export default function AchievementSection() {
  return (
    <AnimatedSection className={sectionSpace}>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeader
          eyebrow="Business outcomes"
          title="Marketing That Moves Real Business Metrics"
          text="We focus on outcomes that matter, not vanity metrics."
        />

        <div className="relative border-y border-slate-300/80">
          <div>
            {achievementBlocks.map(([Icon, title, text], index) => (
              <MotionItem
                key={title}
                direction="left"
                delay={index * 0.08}
                className="group service-motion-line grid gap-4 border-b border-slate-300/80 py-5 transition-colors duration-300 last:border-b-0 hover:bg-blue-50/40 sm:grid-cols-[3rem_1fr] sm:px-4"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full text-blue-700 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-medium text-ink">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-ink/64">{text}</p>
                </div>
              </MotionItem>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
