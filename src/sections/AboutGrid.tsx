import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, Code2, Users } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Launch Career',
    description: 'Kickstart your professional journey with industry insights, resume workshops, and career guidance from experts.',
    color: 'google-blue',
    shadowColor: 'shadow-glow-blue',
  },
  {
    icon: Code2,
    title: 'Build Projects',
    description: 'Get hands-on experience by building real-world projects with mentorship from Google developers and industry professionals.',
    color: 'google-green',
    shadowColor: 'shadow-glow-green',
  },
  {
    icon: Users,
    title: 'Expand Network',
    description: 'Connect with like-minded developers, industry leaders, and potential employers to grow your professional network.',
    color: 'google-red',
    shadowColor: 'shadow-glow-red',
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  'google-blue': { bg: 'bg-google-blue/10', text: 'text-google-blue', border: 'border-google-blue/20' },
  'google-green': { bg: 'bg-google-green/10', text: 'text-google-green', border: 'border-google-green/20' },
  'google-red': { bg: 'bg-google-red/10', text: 'text-google-red', border: 'border-google-red/20' },
  'google-yellow': { bg: 'bg-google-yellow/10', text: 'text-google-yellow', border: 'border-google-yellow/20' },
};

export function AboutGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What You&apos;ll Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Career Con brings together the best opportunities for students to learn, build, and connect
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color];
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <div className={`
                  group relative h-full
                  glass rounded-2xl p-8
                  transition-all duration-500
                  hover:shadow-glass-lg hover:-translate-y-2
                  border border-white/40
                `}>
                  {/* Glow effect on hover */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-500 blur-xl -z-10
                    ${feature.shadowColor.replace('shadow-', 'bg-').replace('-glow', '')}/20
                  `} />
                  
                  {/* Icon */}
                  <div className={`
                    w-14 h-14 rounded-xl flex items-center justify-center mb-6
                    ${colors.bg} ${colors.text}
                    transition-transform duration-300 group-hover:scale-110
                  `}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Decorative corner */}
                  <div className={`
                    absolute top-0 right-0 w-20 h-20 opacity-10
                    bg-gradient-to-br from-${feature.color} to-transparent
                    rounded-tr-2xl rounded-bl-full
                  `} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
