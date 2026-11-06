import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Info, 
  Handshake, 
  Mail, 
  Calendar, 
  Trophy, 
  Users,
  X
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface OrbitNode {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  angle: number;
  description: string;
  details: string[];
}

const orbitNodes: OrbitNode[] = [
  {
    id: 'about',
    label: 'About',
    icon: Info,
    color: '#4285F4',
    angle: 0,
    description: 'Learn more about Career Con and our mission',
    details: [
      'Career Con is GDG On Campus Bennett University\'s flagship career development event',
      'Brings together industry experts, recruiters, and students',
      'Focuses on career growth, skill development, and networking',
      'Open to all students passionate about technology and career growth'
    ]
  },
  {
    id: 'sponsors',
    label: 'Sponsors',
    icon: Handshake,
    color: '#EA4335',
    angle: 60,
    description: 'Our amazing partners who make this event possible',
    details: [
      'Google Developers - Primary sponsor and technology partner',
      'Leading tech companies offering internships and jobs',
      'Startups looking for fresh talent',
      'Educational partners providing learning resources'
    ]
  },
  {
    id: 'schedule',
    label: 'Schedule',
    icon: Calendar,
    color: '#FBBC04',
    angle: 120,
    description: 'Event timeline and session details',
    details: [
      'Opening Keynote - Industry leader insights',
      'Workshop Sessions - Hands-on learning experiences',
      'Networking Hour - Connect with professionals',
      'Closing Ceremony - Prizes and announcements'
    ]
  },
  {
    id: 'prizes',
    label: 'Prizes',
    icon: Trophy,
    color: '#34A853',
    angle: 180,
    description: 'Exciting rewards and opportunities',
    details: [
      'Internship opportunities with top companies',
      'Google Cloud credits and swag',
      'Exclusive mentorship programs',
      'Certificates for all participants'
    ]
  },
  {
    id: 'team',
    label: 'Team',
    icon: Users,
    color: '#4285F4',
    angle: 240,
    description: 'Meet the organizers behind Career Con',
    details: [
      'GDG On Campus Bennett University Core Team',
      'Student volunteers and coordinators',
      'Faculty advisors and mentors',
      'Industry expert advisors'
    ]
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: Mail,
    color: '#EA4335',
    angle: 300,
    description: 'Get in touch with us',
    details: [
      'Email: gdg@bennett.edu.in',
      'Instagram: @gdg_bennett',
      'LinkedIn: GDG On Campus Bennett University',
      'Location: Bennett University, Greater Noida'
    ]
  }
];

const ORBIT_RADIUS = 180;
const ORBIT_RADIUS_MOBILE = 120;

export function OrbitalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [selectedNode, setSelectedNode] = useState<OrbitNode | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotation animation
  useEffect(() => {
    if (!isAutoRotating || selectedNode) return;

    let lastTime = performance.now();
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      
      setRotation(prev => (prev + deltaTime * 0.02) % 360);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAutoRotating, selectedNode]);

  const handleNodeClick = useCallback((node: OrbitNode) => {
    setIsAutoRotating(false);
    setSelectedNode(node);
  }, []);

  const handleCloseCard = useCallback(() => {
    setSelectedNode(null);
    setIsAutoRotating(true);
  }, []);

  const radius = isMobile ? ORBIT_RADIUS_MOBILE : ORBIT_RADIUS;

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Career Con
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click on any orbiting node to learn more about different aspects of the event
          </p>
        </motion.div>

        {/* Orbital Container */}
        <div 
          ref={containerRef}
          className="relative flex items-center justify-center"
          style={{ height: isMobile ? '400px' : '500px' }}
        >
          {/* Orbit rings */}
          <div 
            className="absolute rounded-full border border-gray-200/50"
            style={{ 
              width: radius * 2, 
              height: radius * 2 
            }}
          />
          <div 
            className="absolute rounded-full border border-gray-100/30"
            style={{ 
              width: radius * 1.5, 
              height: radius * 1.5 
            }}
          />
          <div 
            className="absolute rounded-full border border-dashed border-gray-200/40"
            style={{ 
              width: radius * 2.5, 
              height: radius * 2.5 
            }}
          />

          {/* Center Core */}
          <motion.div 
            className="absolute z-20 flex flex-col items-center justify-center"
            animate={{ 
              scale: selectedNode ? 0.9 : 1,
              opacity: selectedNode ? 0.5 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-google-blue/30 via-google-red/30 to-google-yellow/30 rounded-full blur-xl scale-150" />
              
              {/* Core circle */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-white shadow-glass-lg flex items-center justify-center border border-gray-100">
                <div className="text-center">
                  <div className="flex justify-center gap-1 mb-1">
                    <div className="w-2 h-2 bg-google-blue rounded-full" />
                    <div className="w-2 h-2 bg-google-red rounded-full" />
                  </div>
                  <div className="flex justify-center gap-1">
                    <div className="w-2 h-2 bg-google-yellow rounded-full" />
                    <div className="w-2 h-2 bg-google-green rounded-full" />
                  </div>
                </div>
              </div>
              
              {/* Rotating ring around core */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-transparent"
                style={{
                  borderTopColor: '#4285F4',
                  borderRightColor: '#EA4335',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            <p className="mt-4 text-sm text-gray-500 font-medium">
              {isAutoRotating ? 'Auto-rotating' : 'Paused'}
            </p>
          </motion.div>

          {/* Orbiting Nodes */}
          {orbitNodes.map((node, index) => {
            const Icon = node.icon;
            const angleRad = ((node.angle + rotation) * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;
            
            // Calculate z-index based on y position (nodes lower on screen should be in front)
            const zIndex = Math.round(y + radius) + 10;
            const isBehind = y < 0;
            
            return (
              <motion.button
                key={node.id}
                className="absolute"
                style={{
                  x,
                  y,
                  zIndex,
                }}
                onClick={() => handleNodeClick(node)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: isBehind ? 0.5 : 1,
                  scale: 1 
                }}
                transition={{ 
                  opacity: { duration: 0.2 },
                  scale: { delay: index * 0.1, duration: 0.4 }
                }}
              >
                <div 
                  className={`
                    relative flex flex-col items-center gap-2
                    transition-all duration-300
                    ${selectedNode?.id === node.id ? 'scale-110' : ''}
                  `}
                >
                  {/* Node circle */}
                  <div 
                    className={`
                      w-12 h-12 md:w-16 md:h-16 rounded-full 
                      flex items-center justify-center
                      shadow-lg transition-all duration-300
                      ${selectedNode?.id === node.id ? 'ring-4 ring-offset-2' : ''}
                    `}
                    style={{ 
                      backgroundColor: node.color,
                      boxShadow: `0 4px 20px ${node.color}40`,
                      '--tw-ring-color': selectedNode?.id === node.id ? node.color : 'transparent'
                    } as React.CSSProperties}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  
                  {/* Label */}
                  <span 
                    className={`
                      text-xs md:text-sm font-medium px-2 py-1 rounded-full
                      bg-white/80 backdrop-blur-sm shadow-sm
                      transition-opacity duration-300
                      ${isBehind ? 'opacity-50' : 'opacity-100'}
                    `}
                  >
                    {node.label}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Node Card */}
        <AnimatePresence>
          {selectedNode && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseCard}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Card className="w-full max-w-md shadow-2xl border-0">
                  <CardHeader 
                    className="rounded-t-lg"
                    style={{ backgroundColor: `${selectedNode.color}15` }}
                  >
                    <div className="flex items-center justify-between">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: selectedNode.color }}
                      >
                        <selectedNode.icon className="w-6 h-6 text-white" />
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={handleCloseCard}
                        className="rounded-full hover:bg-black/5"
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </div>
                    <CardTitle className="text-2xl mt-4">{selectedNode.label}</CardTitle>
                    <CardDescription className="text-base">
                      {selectedNode.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {selectedNode.details.map((detail, idx) => (
                        <motion.li 
                          key={idx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div 
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: selectedNode.color }}
                          />
                          <span className="text-gray-600">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
