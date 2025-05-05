import TrustBanner from "./trust-banner";
import AboutTitle from "./about-title";
import PurposeSection from "./purpose-section";
import MissionSection from "./mission-section";
import FounderSection from "./founder-section";
import Services from "../servicesHomePage";
import ProductsSection from "./products-section";
export default function AboutSection() {
  return (
    <section id="about">
      <TrustBanner />
      <AboutTitle />
      <PurposeSection />
      <MissionSection />
      <FounderSection />
      <Services />
      <ProductsSection />
    </section>
  );
}
