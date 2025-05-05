import ServicesHero from "@/components/ServicesPage/services-hero";
import ServiceCategories from "@/components/ServicesPage/service-categories";
import ServicesGrid from "@/components/ServicesPage/services-grid";
import EnvironmentalArtExhibitions from "@/components/ServicesPage/ArtsExhibition-section";
import CommunityInitiatives from "@/components/ServicesPage/CommunityInitiative-section";
import NaturePhotographySection from "@/components/ServicesPage/Photography-section";
import CorporateTraining from "@/components/ServicesPage/CorporateTraining-section";
import ImmersiveExperiences from "@/components/ServicesPage/ImmersiveExperience-section";
import Storytelling from "@/components/ServicesPage/storytelling-section";

export default function ServicesPage() {
  return (
    <main className="w-full">
      <ServicesHero />
      <ServiceCategories />
      <ServicesGrid />
      <Storytelling />
      <ImmersiveExperiences />
      <CorporateTraining />
      <NaturePhotographySection />
      <CommunityInitiatives />
      <EnvironmentalArtExhibitions />
    </main>
  );
}
