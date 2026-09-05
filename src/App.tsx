/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#10131a] text-[#e1e2ec] min-h-screen relative selection:bg-[#4cd7f6] selection:text-[#003640]">
      {/* Background Ambient Glow & Grid Accents */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-[#4cd7f6]/10 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#4edea3]/10 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-10 left-1/3 w-[30rem] h-[30rem] bg-[#adc6ff]/5 rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 w-full pt-16 bg-transparent min-h-screen">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
