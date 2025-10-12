'use client';

import { motion } from 'framer-motion';

function USDCCoin({ className, delay }: { className?: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotateY: [0, 360]
      }}
      transition={{ 
        delay,
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        rotateY: { duration: 4, repeat: Infinity, ease: "linear" } 
      }}
      className={`w-20 h-20 rounded-full flex items-center justify-center ${className}`}
      style={{
        background: 'linear-gradient(135deg, #2775CA 0%, #1E5CA8 100%)',
        boxShadow: '0 10px 40px rgba(39, 117, 202, 0.4), inset 0 0 20px rgba(255,255,255,0.2)',
        border: '3px solid rgba(255,255,255,0.3)',
      }}
    >
      <div className="text-white font-bold text-sm">USDC</div>
    </motion.div>
  );
}

export default function CoinStackGraphic() {
  return (
    <div className="absolute right-8 bottom-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none hidden lg:block">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="relative">
          <USDCCoin className="relative z-30" delay={0} />
          <USDCCoin className="relative z-20 -mt-8 ml-4" delay={0.1} />
          <USDCCoin className="relative z-10 -mt-8 ml-8" delay={0.2} />
        </div>
      </motion.div>
    </div>
  );
}

