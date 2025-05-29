'use client';

import CtaSection from './components/ctaSection';
import Footer from './components/footer';
import Hero from './components/Hero';
import Navbar from './components/navBar';
import ProjectsSection from './components/projectsSection';
import ServicesSection from './components/servicesSection';
import StatsSection from './components/statsSection';
import TestimonialsSection from './components/testimonialsSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#111111] w-full">
      <div className="bg-cover bg-no-repeat">
        <div className="px-4 pt-6">
          <Navbar />
        </div>
        <Hero />
        <StatsSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <CtaSection />
      </div>
      <Footer />
    </div>
  );
}
