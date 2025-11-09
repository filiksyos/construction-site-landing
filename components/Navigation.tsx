"use client";

import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { HardHat } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'features', label: 'Why Us' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-neutral-darker/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <HardHat className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              BuildRight
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onSetActive={() => setActiveSection(item.id)}
                className={`cursor-pointer transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-primary dark:text-primary-light font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-light'
                }`}
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-slate-900 dark:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
