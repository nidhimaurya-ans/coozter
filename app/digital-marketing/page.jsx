import AuditProcessSection from "./_components/AuditProcessSection";
import CampaignExamplesSection from "./_components/CampaignExamplesSection";
import ChannelStrategySection from "./_components/ChannelStrategySection";
import DigitalMarketingFAQSection from "./_components/DigitalMarketingFAQSection";
import DigitalMarketingHero from "./_components/DigitalMarketingHero";
import PackagesSection from "./_components/PackagesSection";
import ReportingPreviewSection from "./_components/ReportingPreviewSection";

export const metadata = { title: "Digital Marketing | Coozter" };

export default function DigitalMarketingPage() {
  return (
    <>
      <DigitalMarketingHero />
      <ChannelStrategySection />
      <AuditProcessSection />
      <CampaignExamplesSection />
      <PackagesSection />
      <ReportingPreviewSection />
      <DigitalMarketingFAQSection />
    </>
  );
}
