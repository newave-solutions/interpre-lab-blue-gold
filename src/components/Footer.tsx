import { Stethoscope, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <Stethoscope className="w-6 h-6" style={{ color: '#D4AF37' }} />
              </div>
              <span className="text-2xl font-bold text-white">
                Interpre<span style={{ color: '#D4AF37' }}>Lab</span>
              </span>
            </div>
            <p className="text-white/60 mb-6 max-w-md">
              The gold standard of medical AI. Empowering interpreters worldwide with cutting-edge technology
              and comprehensive training solutions.
            </p>
            <div className="flex items-center gap-4 p-4 rounded-lg backdrop-blur-md"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <img
                src="https://www.gstatic.com/images/branding/product/2x/google_cloud_512dp.png"
                alt="Google Cloud"
                className="w-8 h-8"
              />
              <div>
                <div className="text-sm font-semibold text-white">Google Cloud Startup Program</div>
                <div className="text-xs text-white/60">Proud Member</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Certification
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Enterprise
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            2026 InterpreLab. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Twitter className="w-5 h-5 text-white/60" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Linkedin className="w-5 h-5 text-white/60" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Github className="w-5 h-5 text-white/60" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <Mail className="w-5 h-5 text-white/60" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
