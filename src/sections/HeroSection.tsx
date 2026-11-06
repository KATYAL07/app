import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CareerConLogo, CareerConLogoCompact } from '@/components/CareerConLogo';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]77ui
  });

  // Transform values based on scroll
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.15], [0, -30]);

  const logoScale = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.6, 0.4]);
  const logoY = useTransform(scrollYProgress, [0, 0.3, 0.5], [0, -50, -100]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [1, 1, 0.9]);

  const cornerDecorationsOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const pinnedLogoOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Fixed Hero Content */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 dots-pattern opacity-50" />

        {/* Blurred accent circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-google-blue/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-google-red/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-google-yellow/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-google-green/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '3s' }} />

        {/* Corner Decorations */}
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48"
          style={{ opacity: cornerDecorationsOpacity }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Top left corner shapes */}
            <polygon points="0,0 60,0 30,40" fill="#EA4335" />
            <polygon points="0,0 0,60 40,30" fill="#34A853" />
            <polygon points="20,50 50,20 80,50 50,80" fill="#FBBC04" />
            <polygon points="60,60 90,30 120,60 90,90" fill="#4285F4" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48"
          style={{ opacity: cornerDecorationsOpacity }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Top right corner shapes */}
            <polygon points="200,0 140,0 170,40" fill="#4285F4" />
            <polygon points="200,0 200,60 160,30" fill="#EA4335" />
            <polygon points="180,50 150,20 120,50 150,80" fill="#34A853" />
            <polygon points="140,60 110,30 80,60 110,90" fill="#FBBC04" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48"
          style={{ opacity: cornerDecorationsOpacity }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Bottom left corner shapes */}
            <polygon points="0,200 60,200 30,160" fill="#FBBC04" />
            <polygon points="0,200 0,140 40,170" fill="#4285F4" />
            <polygon points="20,150 50,180 80,150 50,120" fill="#EA4335" />
            <polygon points="60,140 90,170 120,140 90,110" fill="#34A853" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48"
          style={{ opacity: cornerDecorationsOpacity }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Bottom right corner shapes */}
            <polygon points="200,200 140,200 170,160" fill="#34A853" />
            <polygon points="200,200 200,140 160,170" fill="#FBBC04" />
            <polygon points="180,150 150,180 120,150 150,120" fill="#4285F4" />
            <polygon points="140,140 110,170 80,140 110,110" fill="#EA4335" />
          </svg>
        </motion.div>

        {/* Line Art Illustrations */}
        <motion.div
          className="absolute top-1/4 right-8 md:right-16 w-20 h-20 md:w-32 md:h-32"
          style={{ opacity: cornerDecorationsOpacity }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
            {/* Lightbulb and laptop illustration */}
            <circle cx="70" cy="25" r="12" stroke="#333" strokeWidth="2" fill="none" />
            <path d="M70 37 L70 45 M62 42 L78 42" stroke="#333" strokeWidth="2" />
            <rect x="35" y="50" width="40" height="28" rx="3" stroke="#333" strokeWidth="2" fill="none" />
            <line x1="45" y1="58" x2="65" y2="58" stroke="#333" strokeWidth="1.5" />
            <line x1="40" y1="65" x2="70" y2="65" stroke="#333" strokeWidth="1.5" />
            <rect x="30" y="78" width="50" height="6" rx="2" stroke="#333" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-8 md:left-16 w-16 h-16 md:w-24 md:h-24"
          style={{ opacity: cornerDecorationsOpacity }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
            {/* Graduation cap */}
            <polygon points="50,20 10,40 50,60 90,40" stroke="#333" strokeWidth="2" fill="none" />
            <line x1="50" y1="60" x2="50" y2="80" stroke="#333" strokeWidth="2" />
            <path d="M30 50 Q30 70 50 80 Q70 70 70 50" stroke="#333" strokeWidth="2" fill="none" />
            <circle cx="50" cy="82" r="4" stroke="#333" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-24 h-24 md:w-40 md:h-40"
          style={{ opacity: cornerDecorationsOpacity }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
            {/* Person on couch with laptop */}
            <ellipse cx="50" cy="85" rx="35" ry="8" stroke="#333" strokeWidth="2" fill="none" />
            <path d="M25 85 Q25 60 35 55 Q45 50 55 55 Q65 60 65 85" stroke="#333" strokeWidth="2" fill="none" />
            <circle cx="45" cy="40" r="8" stroke="#333" strokeWidth="2" fill="none" />
            <path d="M45 48 L45 60 M35 55 L55 55" stroke="#333" strokeWidth="2" />
            <rect x="50" y="52" width="20" height="14" rx="2" stroke="#333" strokeWidth="1.5" fill="none" />
            <path d="M55 85 Q60 70 70 75" stroke="#333" strokeWidth="2" fill="none" />
            <circle cx="72" cy="73" r="3" stroke="#333" strokeWidth="1.5" fill="none" />
          </svg>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          {/* GDG Header - fades out on scroll */}
          <motion.div
            className="flex flex-col items-center mb-8"
            style={{ opacity: headerOpacity, y: headerY }}
          >
            {/* GDG Logo */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex -space-x-1">
                <div className="w-3 h-3 bg-google-blue rounded-full" />
                <div className="w-3 h-3 bg-google-red rounded-full" />
                <div className="w-3 h-3 bg-google-yellow rounded-full" />
                <div className="w-3 h-3 bg-google-green rounded-full" />
              </div>
              <span className="text-sm font-medium text-gray-600">Google Developer Groups</span>
            </div>
            <p className="text-gray-500 text-sm">
              <span className="text-google-blue">On Campus</span>
              <span className="mx-2">•</span>
              <span>Bennett University</span>
            </p>
          </motion.div>

          {/* Main Career Con Logo - scales and moves on scroll */}
          <motion.div
            style={{
              scale: logoScale,
              y: logoY,
              opacity: logoOpacity
            }}
          >
            <CareerConLogo size="lg" />
          </motion.div>
        </div>

        {/* Pinned Logo (appears when scrolled) */}
        <motion.div
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
          style={{ opacity: pinnedLogoOpacity }}
        >
          <div className="glass px-4 py-2 rounded-full">
            <CareerConLogoCompact />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
