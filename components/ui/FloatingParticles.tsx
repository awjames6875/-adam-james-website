'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function FloatingParticles() {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
  
  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 md:w-2 md:h-2 bg-white/30 rounded-full"
          initial={{ 
            x: Math.random() * windowSize.width, 
            y: windowSize.height + 50,
            opacity: 0 
          }}
          animate={{ 
            y: -50,
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}