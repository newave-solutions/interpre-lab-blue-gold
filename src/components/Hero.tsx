import { motion } from 'framer-motion';
import CardStack3D from './CardStack3D';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md"
              style={{
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
              }}
            >
              <Sparkles className="w-4 h-4" style={{ color: '#D4AF37' }} />
              <span className="text-sm" style={{ color: '#D4AF37' }}>
                The Gold Standard of Medical AI
              </span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
              Elevate Your
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #2563EB, #D4AF37)',
                }}
              >
                Interpreting Career
              </span>
            </h1>

            <p className="text-xl text-white/70 leading-relaxed max-w-xl">
              AI-driven mastery for the modern medical professional. Train with cutting-edge technology
              and achieve certification excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  backgroundColor: '#D4AF37',
                  color: '#050505',
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)',
                }}
              >
                Start Free Trial
              </button>
              <button
                className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(37, 99, 235, 0.1)',
                  border: '2px solid #2563EB',
                  color: '#ffffff',
                }}
              >
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold" style={{ color: '#D4AF37' }}>
                  10K+
                </div>
                <div className="text-sm text-white/60">Active Users</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="text-3xl font-bold" style={{ color: '#D4AF37' }}>
                  98%
                </div>
                <div className="text-sm text-white/60">Pass Rate</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="text-3xl font-bold" style={{ color: '#D4AF37' }}>
                  24/7
                </div>
                <div className="text-sm text-white/60">AI Support</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <CardStack3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
