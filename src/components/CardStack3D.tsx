import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, LineChart, Award } from 'lucide-react';

const cards = [
  {
    id: 1,
    title: 'InterpreBot',
    subtitle: 'AI Conversation Partner',
    icon: Bot,
    gradient: 'from-blue-600/20 to-blue-800/20',
  },
  {
    id: 2,
    title: 'InterpreCoach',
    subtitle: 'Real-Time Performance Feedback',
    icon: LineChart,
    gradient: 'from-blue-700/20 to-purple-700/20',
  },
  {
    id: 3,
    title: 'InterpreTest',
    subtitle: 'Certification Assessment',
    icon: Award,
    gradient: 'from-purple-600/20 to-blue-600/20',
  },
];

export default function CardStack3D() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative w-full h-[500px] flex items-center justify-center perspective-1000"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="popLayout">
        {cards.map((card, index) => {
          const position = (index - currentIndex + cards.length) % cards.length;
          const Icon = card.icon;

          return (
            <motion.div
              key={card.id}
              className="absolute w-[400px] h-[500px] rounded-2xl overflow-hidden cursor-pointer"
              style={{
                border: '2px solid #D4AF37',
                boxShadow: '0 0 40px rgba(37, 99, 235, 0.3), 0 0 80px rgba(212, 175, 55, 0.2)',
              }}
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={{
                opacity: position === 0 ? 1 : 0.4,
                scale: position === 0 ? 1 : 0.85 - position * 0.1,
                rotateY: position * 15,
                x: position * 120,
                z: -position * 100,
                zIndex: cards.length - position,
              }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} backdrop-blur-xl`} />
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

              <div className="relative h-full p-8 flex flex-col items-center justify-center text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.3), rgba(212, 175, 55, 0.3))',
                    border: '2px solid #D4AF37',
                  }}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-lg text-white/70 mb-8">{card.subtitle}</p>

                <div className="w-full space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-16 rounded-lg backdrop-blur-md"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                      }}
                    />
                  ))}
                </div>

                <div className="mt-8 flex gap-2">
                  {cards.map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: (index - currentIndex + cards.length) % cards.length === 0
                          ? '#D4AF37'
                          : 'rgba(255, 255, 255, 0.3)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
