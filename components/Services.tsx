"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home, Building, Wrench, PaintBucket } from 'lucide-react';

interface ServicesProps {
  setActiveSection: (section: string) => void;
}

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom homes, renovations, and additions built to your specifications."
  },
  {
    icon: Building,
    title: "Commercial Projects",
    description: "Office buildings, retail spaces, and industrial facilities."
  },
  {
    icon: Wrench,
    title: "Renovations & Remodeling",
    description: "Transform existing spaces with modern design and functionality."
  },
  {
    icon: PaintBucket,
    title: "Interior Finishing",
    description: "High-quality finishes that bring your vision to life."
  }
];

export default function Services({ setActiveSection }: ServicesProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    onChange: (inView) => {
      if (inView) setActiveSection('services');
    }
  });

  return (
    <div ref={ref} className="py-20 bg-white dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Comprehensive construction solutions for every need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-slate-50 dark:bg-neutral-dark rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary-light transition-all hover:shadow-lg"
            >
              <service.icon className="h-12 w-12 text-primary dark:text-primary-light mb-4" />
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
