import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ScrollExpansionMedia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Media expands from small to full width
  const mediaWidth = useTransform(scrollYProgress, [0, 0.3, 0.5], ['60%', '85%', '100%']);
  const mediaHeight = useTransform(scrollYProgress, [0, 0.3, 0.5], ['50vh', '65vh', '80vh']);
  const mediaBorderRadius = useTransform(scrollYProgress, [0, 0.3, 0.5], ['24px', '16px', '0px']);
  const mediaScale = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.9, 0.95, 1]);
  
  // Content fades in
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.2, 0.4], [30, 0]);

  return (
    <section ref={containerRef} className="relative py-16">
      <div className="flex flex-col items-center">
        {/* Expanding Media Container */}
        <motion.div 
          className="relative overflow-hidden shadow-2xl"
          style={{
            width: mediaWidth,
            height: mediaHeight,
            borderRadius: mediaBorderRadius,
            scale: mediaScale,
          }}
        >
          {/* Video/Image Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }} />
            </div>
            
            {/* Animated gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-google-blue/20 rounded-full blur-3xl animate-pulse-soft" />
            <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-google-red/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-google-yellow/15 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
            
            {/* Event preview content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
              {/* Play button */}
              <motion.div 
                className="mb-8"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                </div>
              </motion.div>
              
              {/* Event info */}
              <motion.div 
                className="text-center"
                style={{ opacity: contentOpacity, y: contentY }}
              >
                <h3 className="text-2xl md:text-4xl font-bold mb-4">
                  Career Con 2024
                </h3>
                <p className="text-white/70 text-lg mb-6 max-w-xl">
                  Watch highlights from our previous events and get a glimpse of what&apos;s coming
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-base text-white/60">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Coming Soon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Bennett University</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <Button 
            size="lg" 
            className="bg-google-blue hover:bg-google-blue/90 text-white rounded-full px-8"
          >
            Register Now
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="rounded-full px-8 border-gray-300 hover:bg-gray-50"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
