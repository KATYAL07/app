import { motion } from 'framer-motion';
import { CareerConLogoCompact } from '@/components/CareerConLogo';
import { Instagram, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:gdg@bennett.edu.in', label: 'Email' },
];

const quickLinks = [
  { label: 'About', href: '#' },
  { label: 'Schedule', href: '#' },
  { label: 'Sponsors', href: '#' },
  { label: 'Contact', href: '#' },
];

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-google-blue/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-google-red/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <CareerConLogoCompact className="text-white" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Career Con is GDG On Campus Bennett University&apos;s premier career development event. 
              Join us to launch your career, build amazing projects, and expand your network.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Bennett University</li>
              <li>Greater Noida, India</li>
              <li>
                <a 
                  href="mailto:gdg@bennett.edu.in"
                  className="hover:text-white transition-colors"
                >
                  gdg@bennett.edu.in
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-500 text-sm">
            © 2024 Career Con. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">Made with</span>
            <div className="flex -space-x-1">
              <div className="w-2 h-2 bg-google-blue rounded-full" />
              <div className="w-2 h-2 bg-google-red rounded-full" />
              <div className="w-2 h-2 bg-google-yellow rounded-full" />
              <div className="w-2 h-2 bg-google-green rounded-full" />
            </div>
            <span className="text-gray-500 text-sm">by GDG Bennett</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
