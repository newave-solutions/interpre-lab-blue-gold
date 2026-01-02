import { Stethoscope } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
            <Stethoscope className="w-6 h-6 text-gold" style={{ color: '#D4AF37' }} />
          </div>
          <span className="text-2xl font-bold text-white">
            Interpre<span style={{ color: '#D4AF37' }}>Lab</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">
            Features
          </a>
          <a href="#metrics" className="text-white/80 hover:text-white transition-colors">
            Performance
          </a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">
            About
          </a>
        </div>

        <button
          className="px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold/50"
          style={{ backgroundColor: '#D4AF37', color: '#050505' }}
        >
          Start Free Trial
        </button>
      </div>
    </nav>
  );
}
