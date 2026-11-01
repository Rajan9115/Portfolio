import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ToolkitSection } from "@/components/sections/ToolkitSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
      {/* Editorial Sticky Navigation with Dark Mode Toggle */}
      <Navbar />

      {/* Main Content Stream */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. About Section & Engineering Philosophy */}
        <AboutSection />

        {/* 3. Technical Capabilities & Skills */}
        <SkillsSection />

        {/* 4. Featured Projects & Deep-Dive Case Studies */}
        <ProjectsSection />

        {/* 5. Professional Experience & Leadership */}
        <ExperienceSection />

        {/* 6. Verified Achievements & Certifications */}
        <AchievementsSection />

        {/* 7. Production Engineering Toolkit */}
        <ToolkitSection />

        {/* 8. Contact Section & Direct Communication */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
