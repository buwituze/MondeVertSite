"use client";
import { useEffect } from "react";
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
  useEffect(() => {
    // Handle hash-based scrolling when page loads
    const scrollToHashElement = () => {
      if (window.location.hash) {
        const sectionId = window.location.hash.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }, 500); // Increased delay to ensure all components are rendered
        }
      }
    };

    // Run immediately
    scrollToHashElement();

    // Also run after a short delay to catch any late renders
    const timer = setTimeout(scrollToHashElement, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full">
      <ServicesHero />
      <ServiceCategories />
      <ServicesGrid />
      <div id="storytelling">
        <Storytelling />
      </div>
      <div id="immersive-experiences">
        <ImmersiveExperiences />
      </div>
      <div id="corporate-trainings">
        <CorporateTraining />
      </div>
      <div id="nature-photography">
        <NaturePhotographySection />
      </div>
      <div id="community-initiatives">
        <CommunityInitiatives />
      </div>
      <div id="art-exhibitions">
        <EnvironmentalArtExhibitions />
      </div>
    </main>
  );
}
