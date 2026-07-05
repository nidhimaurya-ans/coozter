import HomeChannelsSection from "./_components/home/HomeChannelsSection";
import HomeCTASection from "./_components/home/HomeCTASection";
import HomeHeroSection from "./_components/home/HomeHeroSection";
import HomeBlogPreviewSection from "./_components/home/HomeBlogPreviewSection";
import HomeContactSection from "./_components/home/HomeContactSection";
import HomeProcessSection from "./_components/home/HomeProcessSection";
import HomeServicesPreviewSection from "./_components/home/HomeServicesPreviewSection";
import HomeTestimonialsSection from "./_components/home/HomeTestimonialsSection";
import HomeTrustSection from "./_components/home/HomeTrustSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5">
      <HomeHeroSection />
      <HomeTrustSection />
      <HomeChannelsSection />
      <HomeProcessSection />
      <HomeServicesPreviewSection />
      <HomeBlogPreviewSection />
      <HomeContactSection />
      {/* <HomeTestimonialsSection /> */}
      {/* <HomeCTASection /> */}
    </div>
  );
}
