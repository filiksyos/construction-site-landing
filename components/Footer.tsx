"use client";

import { HardHat } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-darker border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <HardHat className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                BuildRight
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Building excellence since 2000. Your trusted construction partner.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><a href="#" className="hover:text-primary">Residential</a></li>
              <li><a href="#" className="hover:text-primary">Commercial</a></li>
              <li><a href="#" className="hover:text-primary">Renovations</a></li>
              <li><a href="#" className="hover:text-primary">Consulting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Our Team</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 text-center text-sm text-slate-600 dark:text-slate-300">
          <p>&copy; {new Date().getFullYear()} BuildRight Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
