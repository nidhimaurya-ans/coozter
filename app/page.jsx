import HomeChannelsSection from "./_components/home/HomeChannelsSection";
import HomeCTASection from "./_components/home/HomeCTASection";
import HomeHeroSection from "./_components/home/HomeHeroSection";
import HomeProcessSection from "./_components/home/HomeProcessSection";
import HomeTestimonialsSection from "./_components/home/HomeTestimonialsSection";
import HomeTrustSection from "./_components/home/HomeTrustSection";

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <HomeTrustSection />
      <HomeChannelsSection />
      <HomeProcessSection />
      {/* <HomeTestimonialsSection /> */}
      <HomeCTASection />
    </>
  );
}
