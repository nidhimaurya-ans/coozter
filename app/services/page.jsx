import FinalCTASection from "./_components/FinalCTASection";
import ServiceCategoriesSection from "./_components/ServiceCategoriesSection";
import ServicesGrowthCanvas from "./_components/ServicesGrowthCanvas";
import ServicesFAQSection from "./_components/ServicesFAQSection";
import ServicesHero from "./_components/ServicesHero";

export const metadata = { title: "Services | Coozter" };

export default function ServicesPage() {
  return (
    <div className="services-page-static-text">
      <ServicesHero />
      <ServiceCategoriesSection />
      <ServicesGrowthCanvas />
      <ServicesFAQSection />
      {/* <FinalCTASection /> */}
    </div>
  );
}
