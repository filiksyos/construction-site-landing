"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin } from 'lucide-react';

interface CTAProps {
  setActiveSection: (section: string) => void;
}

export default function CTA({ setActiveSection }: CTAProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    onChange: (inView) => {
      if (inView) setActiveSection('contact');
    }
  });

  return (
    <div ref={ref} className="py-20 bg-slate-50 dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="bg-gradient-to-br from-primary to-primary-dark dark:from-primary-dark dark:to-primary rounded-2xl shadow-2xl p-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your construction needs. 
            Our team is ready to bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-primary hover:bg-slate-100 rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold"
            >
              Get Free Quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg shadow-lg hover:shadow-xl transition-all font-semibold"
            >
              Schedule Consultation
            </motion.button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-white">
              <Phone className="h-5 w-5" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <Mail className="h-5 w-5" />
              <span>info@buildright.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <MapPin className="h-5 w-5" />
              <span>123 Builder St, City</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
