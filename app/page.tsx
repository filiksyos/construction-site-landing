"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] relative">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services setActiveSection={setActiveSection} />
      </section>

      <section id="projects">
        <Projects setActiveSection={setActiveSection} />
      </section>

      <section id="features">
        <Features setActiveSection={setActiveSection} />
      </section>

      <section id="contact">
        <CTA setActiveSection={setActiveSection} />
      </section>

      <Footer />
    </div>
  );
}
