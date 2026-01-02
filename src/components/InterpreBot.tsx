import { motion } from 'framer-motion';
import { MessageSquare, Zap, Brain } from 'lucide-react';

export default function InterpreBot() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.div
                className="relative z-10 w-64 h-64 mx-auto rounded-3xl backdrop-blur-xl overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '2px solid #D4AF37',
                  boxShadow: '0 0 60px rgba(37, 99, 235, 0.4)',
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-48 h-48 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                    }}
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="relative">
                      <div className="w-24 h-32 rounded-2xl bg-white relative overflow-hidden">
                        <motion.div
                          className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-4"
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2563EB' }} />
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2563EB' }} />
                        </motion.div>

                        <motion.div
                          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-2 rounded-full"
                          style={{ backgroundColor: '#D4AF37' }}
                          animate={{
                            scaleX: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      </div>

                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full"
                        style={{ backgroundColor: '#D4AF37' }}
                        animate={{
                          y: [0, -5, 0],
                          rotate: [0, 10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      <motion.div
                        className="absolute -top-2 -left-2 w-6 h-6 rounded-full"
                        style={{ backgroundColor: '#D4AF37' }}
                        animate={{
                          y: [0, -5, 0],
                          rotate: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 0.3,
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(37, 99, 235, 0.2)',
                  border: '2px solid #2563EB',
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <Zap className="w-10 h-10" style={{ color: '#D4AF37' }} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md"
              style={{
                background: 'rgba(37, 99, 235, 0.1)',
                border: '1px solid rgba(37, 99, 235, 0.3)',
              }}
            >
              <Brain className="w-4 h-4" style={{ color: '#2563EB' }} />
              <span className="text-sm" style={{ color: '#2563EB' }}>
                AI Conversation Partner
              </span>
            </div>

            <h2 className="text-5xl font-bold text-white">
              Meet <span style={{ color: '#D4AF37' }}>InterpreBot</span>
            </h2>

            <p className="text-xl text-white/70 leading-relaxed">
              Your personal AI training partner that adapts to your skill level, provides instant feedback,
              and helps you master medical interpretation through realistic conversations.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl backdrop-blur-md"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(37, 99, 235, 0.2)' }}
                >
                  <MessageSquare className="w-5 h-5" style={{ color: '#2563EB' }} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Natural Conversations</h4>
                  <p className="text-white/60 text-sm">
                    Practice with AI that understands context, medical terminology, and cultural nuances
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl backdrop-blur-md"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(37, 99, 235, 0.2)' }}
                >
                  <Zap className="w-5 h-5" style={{ color: '#2563EB' }} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Instant Feedback</h4>
                  <p className="text-white/60 text-sm">
                    Get real-time corrections and suggestions to improve your interpretation skills
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl backdrop-blur-md"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(37, 99, 235, 0.2)' }}
                >
                  <Brain className="w-5 h-5" style={{ color: '#2563EB' }} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Adaptive Learning</h4>
                  <p className="text-white/60 text-sm">
                    AI adjusts difficulty and topics based on your progress and areas for improvement
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
