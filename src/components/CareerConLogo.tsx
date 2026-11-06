import { motion } from 'framer-motion';

interface CareerConLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

const sizes = {
  sm: { container: 'scale-50', cSize: 'w-16 h-20', textSize: 'text-2xl', taglineSize: 'text-xs' },
  md: { container: 'scale-75', cSize: 'w-24 h-32', textSize: 'text-4xl', taglineSize: 'text-sm' },
  lg: { container: 'scale-100', cSize: 'w-36 h-48', textSize: 'text-6xl', taglineSize: 'text-base' },
  xl: { container: 'scale-125', cSize: 'w-48 h-64', textSize: 'text-8xl', taglineSize: 'text-lg' },
};

export function CareerConLogo({ className = '', size = 'lg', showTagline = true }: CareerConLogoProps) {
  const sizeClasses = sizes[size];
  
  return (
    <motion.div 
      className={`flex flex-col items-center justify-center ${sizeClasses.container} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Logo Container */}
      <div className="relative flex items-center">
        {/* The C with colored ticks */}
        <div className={`relative ${sizeClasses.cSize}`}>
          {/* Main C shape */}
          <svg 
            viewBox="0 0 80 100" 
            className="w-full h-full"
            fill="none"
          >
            <path 
              d="M70 20C60 8 45 0 30 0C13.4 0 0 13.4 0 30V70C0 86.6 13.4 100 30 100C45 100 60 92 70 80"
              stroke="#1a1a1a"
              strokeWidth="18"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          
          {/* Colored ticks around the C */}
          {/* Yellow tick - top right */}
          <motion.div 
            className="absolute -top-1 right-0 w-4 h-3 bg-google-yellow rounded-sm"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            style={{ transform: 'rotate(25deg)' }}
          />
          
          {/* Red tick - upper right */}
          <motion.div 
            className="absolute top-6 -right-1 w-4 h-3 bg-google-red rounded-sm"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            style={{ transform: 'rotate(45deg)' }}
          />
          
          {/* Green tick - lower right */}
          <motion.div 
            className="absolute bottom-6 -right-1 w-4 h-3 bg-google-green rounded-sm"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            style={{ transform: 'rotate(65deg)' }}
          />
          
          {/* Blue tick - bottom right */}
          <motion.div 
            className="absolute -bottom-1 right-2 w-4 h-3 bg-google-blue rounded-sm"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            style={{ transform: 'rotate(85deg)' }}
          />
        </div>
        
        {/* Text part - "areer on" */}
        <div className="flex flex-col -ml-1">
          <span className={`font-bold text-gray-900 tracking-tight ${sizeClasses.textSize}`}>
            areer
          </span>
          <span className={`font-bold text-gray-900 tracking-tight -mt-2 ${sizeClasses.textSize}`}>
            on
          </span>
        </div>
      </div>
      
      {/* Tagline */}
      {showTagline && (
        <motion.p 
          className={`mt-4 text-gray-600 font-medium italic ${sizeClasses.taglineSize}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          From dreams to direction...
        </motion.p>
      )}
    </motion.div>
  );
}

export function CareerConLogoCompact({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {/* Small C with ticks */}
      <div className="relative w-8 h-10">
        <svg viewBox="0 0 80 100" className="w-full h-full" fill="none">
          <path 
            d="M70 20C60 8 45 0 30 0C13.4 0 0 13.4 0 30V70C0 86.6 13.4 100 30 100C45 100 60 92 70 80"
            stroke="#1a1a1a"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        {/* Ticks */}
        <div className="absolute -top-0.5 right-0 w-2 h-1.5 bg-google-yellow rounded-sm" style={{ transform: 'rotate(25deg)' }} />
        <div className="absolute top-3 -right-0.5 w-2 h-1.5 bg-google-red rounded-sm" style={{ transform: 'rotate(45deg)' }} />
        <div className="absolute bottom-3 -right-0.5 w-2 h-1.5 bg-google-green rounded-sm" style={{ transform: 'rotate(65deg)' }} />
        <div className="absolute -bottom-0.5 right-1 w-2 h-1.5 bg-google-blue rounded-sm" style={{ transform: 'rotate(85deg)' }} />
      </div>
      <span className="font-bold text-gray-900 text-lg">areer Con</span>
    </div>
  );
}
