import AffiliateBenefitsSection from "./_components/AffiliateBenefitsSection";
import AffiliateContactSection from "./_components/AffiliateContactSection";
import AffiliateFAQSection from "./_components/AffiliateFAQSection";
import AffiliateFitSection from "./_components/AffiliateFitSection";
import AffiliateHero from "./_components/AffiliateHero";
import AffiliateJourneySection from "./_components/AffiliateJourneySection";
import AffiliateTrackingSection from "./_components/AffiliateTrackingSection";

export const metadata = { title: "Affiliate Branding | Coozter" };

export default function AffiliateBrandingPage() {
  return (
    <>
      <AffiliateHero />
      <AffiliateBenefitsSection />
      <AffiliateFitSection />
      <AffiliateJourneySection />
      <AffiliateTrackingSection />
      <AffiliateFAQSection />
      <AffiliateContactSection />
    </>
  );
}
