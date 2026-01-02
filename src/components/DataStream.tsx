import { motion } from 'framer-motion';

export default function DataStream() {
  return (
    <div className="relative w-full h-32 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <motion.path
          d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{
            pathLength: { duration: 2, ease: 'easeInOut' },
            opacity: { duration: 1 },
          }}
        />
        <motion.path
          d="M0,50 Q150,80 300,50 T600,50 T900,50 T1200,50"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{
            pathLength: { duration: 2, ease: 'easeInOut', delay: 0.3 },
            opacity: { duration: 1, delay: 0.3 },
          }}
        />

        <motion.circle
          r="4"
          fill="#2563EB"
          animate={{
            offsetDistance: ['0%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <animateMotion dur="3s" repeatCount="indefinite">
            <mpath href="#bluePath" />
          </animateMotion>
        </motion.circle>

        <motion.circle
          r="4"
          fill="#D4AF37"
          animate={{
            offsetDistance: ['0%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
            delay: 0.5,
          }}
        >
          <animateMotion dur="3s" repeatCount="indefinite">
            <mpath href="#goldPath" />
          </animateMotion>
        </motion.circle>

        <defs>
          <path id="bluePath" d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50" />
          <path id="goldPath" d="M0,50 Q150,80 300,50 T600,50 T900,50 T1200,50" />
        </defs>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />
    </div>
  );
}
