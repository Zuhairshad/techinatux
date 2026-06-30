import React from "react";
import HeroSection from "@/components/HeroSection";
import TechSupportSection from "@/components/TechSupportSection";
import DigitalSolutionsSection from "@/components/DigitalSolutionsSection";
import WorksSection from "@/components/WorksSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import AboutSection from "@/components/AboutSection";
import HomeFAQSection from "@/components/HomeFAQSection";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechSupportSection />
      <DigitalSolutionsSection />
      <WorksSection />
      <WhyChooseSection />
      <AboutSection />
      <HomeFAQSection />
      <InsightsSection />
      <ContactSection />
    </>
  );
}

