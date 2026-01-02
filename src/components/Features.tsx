import { motion } from 'framer-motion';
import { Chrome, ClipboardCheck, BarChart3, Bot, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'InterpreBot',
    description: 'Practice with an AI conversation partner that adapts to your skill level and provides instant feedback.',
    badge: 'AI-Powered',
  },
  {
    icon: Chrome,
    title: 'InterpreCoach',
    description: 'Browser extension that provides real-time performance analysis and coaching during your sessions.',
    badge: 'Extension',
  },
  {
    icon: ClipboardCheck,
    title: 'InterpreTest',
    description: 'Comprehensive certification assessment platform with detailed scoring and performance insights.',
    badge: 'Certified',
  },
  {
    icon: BarChart3,
    title: 'InterpreTrack',
    description: 'Advanced analytics dashboard to monitor your progress and identify areas for improvement.',
    badge: 'Analytics',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Enterprise-grade security ensuring all your practice sessions remain private and compliant.',
    badge: 'Secure',
  },
  {
    icon: Zap,
    title: 'Instant Feedback',
    description: 'Get real-time corrections and suggestions powered by advanced natural language processing.',
    badge: 'Real-Time',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Complete Training <span style={{ color: '#D4AF37' }}>Ecosystem</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Everything you need to master medical interpretation and achieve certification excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="group relative p-8 rounded-2xl backdrop-blur-xl transition-all duration-300 cursor-pointer"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '1px solid #D4AF37';
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(37, 99, 235, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(212, 175, 55, 0.2))',
                      border: '1px solid rgba(37, 99, 235, 0.3)',
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: '#2563EB' }} />
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: 'rgba(212, 175, 55, 0.2)',
                      color: '#D4AF37',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                    }}
                  >
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
