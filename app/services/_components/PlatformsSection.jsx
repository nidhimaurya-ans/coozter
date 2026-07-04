import AnimatedSection from "@/components/AnimatedSection";
import { platforms, sectionSpace } from "../_data/servicesContent";
import MotionItem from "./MotionItem";
import SectionHeader from "./SectionHeader";

export default function PlatformsSection() {
  return (
    <AnimatedSection className={sectionSpace}>
      <SectionHeader
        align="center"
        eyebrow="Tools and platforms"
        title="Platforms We Work With"
        text="We use modern marketing, analytics, design, and automation platforms to plan, launch, track, and improve campaigns."
      />

      <div className="mt-12 grid border-y border-slate-300/80 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {platforms.map((platform, index) => (
          <MotionItem
            key={platform}
            direction="scale"
            delay={index * 0.035}
            className="service-motion-line border-b border-slate-300/80 px-5 py-5 text-center text-sm font-bold text-ink transition-colors duration-300 hover:bg-blue-50/40 hover:text-blue-700 sm:[&:nth-child(odd)]:border-r md:border-r md:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-last-child(-n+4)]:border-b-0"
          >
            {platform}
          </MotionItem>
        ))}
      </div>
    </AnimatedSection>
  );
}
