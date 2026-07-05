import AboutHero from "./_components/AboutHero";
import BeliefsSection from "./_components/BeliefsSection";
import TeamShowcaseSection from "./_components/TeamShowcaseSection";
import WhyChooseUsSection from "./_components/WhyChooseUsSection";
import WorkModelSection from "./_components/WorkModelSection";

export const metadata = { title: "About Coozter" };

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-5">
      <AboutHero />
      <WhyChooseUsSection />
      <BeliefsSection />
      <WorkModelSection />
      <TeamShowcaseSection />
    </div>
  );
}
