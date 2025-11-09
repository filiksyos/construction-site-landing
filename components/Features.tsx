"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Clock, Award, Users } from 'lucide-react';

interface FeaturesProps {
  setActiveSection: (section: string) => void;
}

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Full liability coverage and bonded professionals for your peace of mind."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your schedule and deliver projects on time, every time."
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Award-winning craftsmanship backed by comprehensive warranties."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with decades of combined experience."
  }
];

export default function Features({ setActiveSection }: FeaturesProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    onChange: (inView) => {
      if (inView) setActiveSection('features');
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
            Why Choose BuildRight
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Your trusted partner in construction excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 rounded-xl border border-slate-200 dark:border-slate-700"
            >
              <feature.icon className="h-12 w-12 text-primary dark:text-primary-light mx-auto mb-4" />
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
