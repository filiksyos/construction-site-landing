"use client";

import { motion } from 'framer-motion';
import { HardHat, Hammer, Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-20 pb-16 sm:pb-24">
          {/* Header Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
              <span className="block">Building Your Vision</span>
              <span className="block text-primary dark:text-primary-light">Into Reality</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
              Professional construction services for residential and commercial projects. 
              Quality craftsmanship, on-time delivery, and exceptional results.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-10 flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get a Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white dark:bg-neutral-dark hover:bg-slate-50 dark:hover:bg-neutral-darker text-primary dark:text-primary-light border-2 border-primary dark:border-primary-light rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                View Projects
              </motion.button>
            </div>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: HardHat, title: "Safety First", desc: "OSHA compliant practices" },
              { icon: Hammer, title: "Expert Craftsmanship", desc: "20+ years experience" },
              { icon: Building2, title: "On-Time Delivery", desc: "98% completion rate" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-white/50 dark:bg-neutral-dark/50 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700"
              >
                <item.icon className="h-12 w-12 text-primary dark:text-primary-light mb-4" />
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
