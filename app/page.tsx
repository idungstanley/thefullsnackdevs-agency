'use client';

import CtaSection from './components/ctaSection';
import Hero from './components/Hero';
import ProjectsSection from './components/projectsSection';
import ServicesSection from './components/servicesSection';
import StatsSection from './components/statsSection';
import TestimonialsSection from './components/testimonialsSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Hero />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}
