import { motion } from 'framer-motion';
import { TrendingUp, Target, Award } from 'lucide-react';

export default function Metrics() {
  const dataPoints = [
    { x: 0, y: 20 },
    { x: 1, y: 35 },
    { x: 2, y: 45 },
    { x: 3, y: 55 },
    { x: 4, y: 70 },
    { x: 5, y: 85 },
    { x: 6, y: 95 },
  ];

  const pathData = dataPoints
    .map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x * 100} ${100 - point.y}`)
    .join(' ');

  return (
    <section id="metrics" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Track Your <span style={{ color: '#D4AF37' }}>Mastery</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Watch your skills grow with comprehensive performance analytics
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl backdrop-blur-xl"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(37, 99, 235, 0.2)' }}
                >
                  <TrendingUp className="w-6 h-6" style={{ color: '#2563EB' }} />
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: '#D4AF37' }}>+47%</div>
                  <div className="text-sm text-white/60">Accuracy Improvement</div>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Average improvement in interpretation accuracy within the first 30 days
              </p>
            </div>

            <div className="p-6 rounded-2xl backdrop-blur-xl"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(37, 99, 235, 0.2)' }}
                >
                  <Target className="w-6 h-6" style={{ color: '#2563EB' }} />
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: '#D4AF37' }}>2.5x</div>
                  <div className="text-sm text-white/60">Faster Learning</div>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Achieve certification readiness 2.5x faster than traditional methods
              </p>
            </div>

            <div className="p-6 rounded-2xl backdrop-blur-xl"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(37, 99, 235, 0.2)' }}
                >
                  <Award className="w-6 h-6" style={{ color: '#2563EB' }} />
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: '#D4AF37' }}>98%</div>
                  <div className="text-sm text-white/60">Certification Pass Rate</div>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Our users consistently achieve industry-leading certification success rates
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl backdrop-blur-xl"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Skill Acquisition Curve</h3>
            <p className="text-white/60 mb-8">Your progress over time with InterpreLab</p>

            <div className="relative h-64 w-full">
              <svg viewBox="0 0 600 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#2563EB', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#D4AF37', stopOpacity: 0.6 }} />
                  </linearGradient>
                </defs>

                <path
                  d={`${pathData} L 600 100 L 0 100 Z`}
                  fill="url(#goldGradient)"
                  opacity="0.3"
                />

                <motion.path
                  d={pathData}
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />

                {dataPoints.map((point, i) => (
                  <motion.circle
                    key={i}
                    cx={point.x * 100}
                    cy={100 - point.y}
                    r="4"
                    fill="#D4AF37"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  />
                ))}
              </svg>

              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-white/40 mt-2">
                <span>Week 1</span>
                <span>Week 4</span>
                <span>Week 8</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">Current Skill Level</span>
                <span className="text-2xl font-bold" style={{ color: '#D4AF37' }}>Expert</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
