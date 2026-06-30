import React from "react";
import Header from "@/components/Header";
import WorksSection from "@/components/WorksSection";
import AboutSection from "@/components/AboutSection";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-body antialiased">
      {/* Dynamic Header / Hero expanded navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 mt-[260px] md:mt-[280px]">
        {/* Works Section (.01) */}
        <WorksSection />

        {/* About Section (.02) */}
        <AboutSection />

        {/* Insights Section (.03) */}
        <InsightsSection />

        {/* Contact Section (.04) */}
        <ContactSection />
      </main>
    </div>
  );
}

