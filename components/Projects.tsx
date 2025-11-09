"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2 } from 'lucide-react';

interface ProjectsProps {
  setActiveSection: (section: string) => void;
}

const projects = [
  {
    title: "Modern Office Complex",
    location: "Downtown District",
    year: "2024",
    stats: ["50,000 sq ft", "6 months", "LEED Certified"]
  },
  {
    title: "Luxury Residential",
    location: "Suburban Area",
    year: "2023",
    stats: ["8,500 sq ft", "12 months", "Custom Design"]
  },
  {
    title: "Retail Center Renovation",
    location: "City Center",
    year: "2023",
    stats: ["35,000 sq ft", "4 months", "Eco-Friendly"]
  }
];

export default function Projects({ setActiveSection }: ProjectsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    onChange: (inView) => {
      if (inView) setActiveSection('projects');
    }
  });

  return (
    <div ref={ref} className="py-20 bg-slate-50 dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Showcasing our recent construction achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-neutral-dark rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 dark:from-primary/10 dark:to-accent/10" />
              <div className="p-6">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.location} • {project.year}
                </p>
                <div className="space-y-2">
                  {project.stats.map((stat) => (
                    <div key={stat} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm text-slate-600 dark:text-slate-300">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
