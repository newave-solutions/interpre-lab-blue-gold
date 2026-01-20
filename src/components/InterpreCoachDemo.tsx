import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Moon, BookOpen, Search, Lightbulb, Volume2 } from 'lucide-react';

const transcriptLines = [
  { speaker: 'Doctor', text: 'Good morning, please have a seat. So, what seems to be the problem today?', lang: 'en' },
  { speaker: 'Patient', text: 'He estado sintiendo un dolor agudo en el pecho y me falta el aire.', lang: 'es' },
  { speaker: 'Interpreter', text: "I've been feeling a sharp pain in my chest and I'm short of breath.", lang: 'en' },
];

const terminology = [
  { term: 'Myocardial Infarction', definition: 'A blockage of blood flow to the heart muscle. (Heart Attack)', confidence: 95 },
  { term: 'Angina', definition: 'Chest pain caused by reduced blood flow to the heart.', confidence: 88 },
  { term: 'Dyspnea', definition: 'Shortness of breath or difficulty breathing.', confidence: 92 },
];

const qaTips = [
  'Reminder: Maintain transparency, interpret everything that is said.',
  'Tip: Use first person when interpreting.',
  'Note: Medical terminology detected - check dictionary if unsure.',
];

const dictionaryEntries = [
  { source: 'Angina', target: 'Angina de pecho' },
  { source: 'Rash', target: 'Sarpullido' },
  { source: 'Acute', target: 'Agudo' },
];

export default function InterpreCoachDemo() {
  const [currentLine, setCurrentLine] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const [activeTerm, setActiveTerm] = useState(0);
  const [activeQaTip, setActiveQaTip] = useState(0);
  const [audioLevel, setAudioLevel] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % transcriptLines.length);
    }, 5000);

    return () => clearInterval(lineInterval);
  }, [isPaused]);

  useEffect(() => {
    if (isPaused) return;

    const line = transcriptLines[currentLine];
    let charIndex = 0;
    setTypingText('');

    const typingInterval = setInterval(() => {
      if (charIndex <= line.text.length) {
        setTypingText(line.text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentLine, isPaused]);

  useEffect(() => {
    if (isPaused) return;

    const termInterval = setInterval(() => {
      setActiveTerm((prev) => (prev + 1) % terminology.length);
    }, 4000);

    return () => clearInterval(termInterval);
  }, [isPaused]);

  useEffect(() => {
    if (isPaused) return;

    const tipInterval = setInterval(() => {
      setActiveQaTip((prev) => (prev + 1) % qaTips.length);
    }, 6000);

    return () => clearInterval(tipInterval);
  }, [isPaused]);

  useEffect(() => {
    if (isPaused) return;

    const audioInterval = setInterval(() => {
      setAudioLevel(Math.random() * 100);
    }, 150);

    return () => clearInterval(audioInterval);
  }, [isPaused]);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            <span style={{ color: '#D4AF37' }}>InterpreCoach</span> in Action
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Real-time AI assistance during video interpretation sessions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <motion.div
              className="relative aspect-video rounded-xl overflow-hidden"
              style={{
                border: '3px solid #34D399',
                boxShadow: '0 0 30px rgba(52, 211, 153, 0.4)',
              }}
              animate={{
                boxShadow: ['0 0 30px rgba(52, 211, 153, 0.4)', '0 0 40px rgba(52, 211, 153, 0.6)', '0 0 30px rgba(52, 211, 153, 0.4)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800" />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded text-xs font-semibold"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#ffffff', border: '1px solid rgba(52, 211, 153, 0.3)' }}
              >
                Doctor
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-video rounded-xl overflow-hidden"
              style={{
                border: '3px solid #34D399',
                boxShadow: '0 0 30px rgba(52, 211, 153, 0.4)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700" />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded text-xs font-semibold"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#ffffff', border: '1px solid rgba(52, 211, 153, 0.3)' }}
              >
                Patient
              </div>
            </motion.div>

            <motion.div
              className="relative aspect-video rounded-xl overflow-hidden"
              style={{
                border: '3px solid #34D399',
                boxShadow: '0 0 30px rgba(52, 211, 153, 0.4)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded text-xs font-semibold"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', color: '#ffffff', border: '1px solid rgba(52, 211, 153, 0.3)' }}
              >
                Interpreter
              </div>
            </motion.div>
          </div>

          <div
            className="p-6 rounded-2xl backdrop-blur-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.98), rgba(15, 23, 42, 0.98))',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 0 60px rgba(212, 175, 55, 0.15)',
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.1))',
                    border: '2px solid rgba(212, 175, 55, 0.4)',
                  }}
                >
                  <Mic className="w-6 h-6" style={{ color: '#D4AF37' }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">InterpreCoach</h3>
                  <p className="text-xs text-white/50">Real-time AI Assistance</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <motion.div
                  className="flex items-center gap-2 px-3 py-1 rounded-full"
                  style={{ background: 'rgba(239, 68, 68, 0.2)' }}
                  animate={{ opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-xs font-semibold text-red-200">LIVE</span>
                </motion.div>
                <div className="px-4 py-2 rounded-lg"
                  style={{
                    background: 'rgba(212, 175, 55, 0.15)',
                    border: '1px solid rgba(212, 175, 55, 0.3)'
                  }}
                >
                  <span className="text-xl font-bold" style={{ color: '#D4AF37' }}>
                    99.9%
                  </span>
                  <span className="text-xs text-white/50 ml-2">Accuracy</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                className="p-4 rounded-xl min-h-[200px]"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Volume2 className="w-4 h-4" style={{ color: '#D4AF37' }} />
                  <h4 className="text-sm font-semibold text-white">Live Transcription</h4>
                </div>
                <div className="space-y-3">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentLine}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-2"
                    >
                      <div className="text-xs font-semibold" style={{ color: '#D4AF37' }}>
                        {transcriptLines[currentLine].speaker}:
                      </div>
                      <div className="text-sm text-white/90 leading-relaxed">
                        {typingText}
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        >
                          |
                        </motion.span>
                      </div>
                      {transcriptLines[currentLine].lang === 'es' && (
                        <div className="text-xs" style={{ color: '#34D399' }}>
                          Spanish detected
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div
                className="p-4 rounded-xl min-h-[200px]"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4" style={{ color: '#D4AF37' }} />
                  <h4 className="text-sm font-semibold text-white">Terminology</h4>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTerm}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-3 rounded-lg"
                    style={{
                      background: 'rgba(212, 175, 55, 0.1)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-bold text-white">{terminology[activeTerm].term}</div>
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{
                          background: 'rgba(212, 175, 55, 0.2)',
                          color: '#D4AF37',
                        }}
                      >
                        {terminology[activeTerm].confidence}%
                      </div>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {terminology[activeTerm].definition}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div
                className="p-4 rounded-xl min-h-[200px]"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Moon className="w-4 h-4" style={{ color: '#D4AF37' }} />
                  <h4 className="text-sm font-semibold text-white">Scratchpad</h4>
                </div>
                <textarea
                  className="w-full h-32 bg-transparent text-sm text-white/60 resize-none focus:outline-none"
                  placeholder="Type your notes here..."
                  style={{ fontFamily: 'monospace' }}
                />
              </div>

              <div
                className="p-4 rounded-xl min-h-[180px]"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Mic className="w-4 h-4" style={{ color: '#D4AF37' }} />
                  <h4 className="text-sm font-semibold text-white">Audio Input</h4>
                </div>
                <div className="flex items-end gap-1 h-24">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{
                        background: 'linear-gradient(to top, #D4AF37, #B8941F)',
                        height: `${Math.random() * audioLevel}%`,
                      }}
                      animate={{
                        height: [`${Math.random() * 30}%`, `${Math.random() * audioLevel}%`],
                      }}
                      transition={{ duration: 0.3, repeat: Infinity }}
                    />
                  ))}
                </div>
              </div>

              <div
                className="p-4 rounded-xl min-h-[180px]"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-4 h-4" style={{ color: '#D4AF37' }} />
                  <h4 className="text-sm font-semibold text-white">QA Tips</h4>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeQaTip}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 rounded-lg"
                    style={{
                      background: 'rgba(212, 175, 55, 0.1)',
                      border: '1px solid rgba(212, 175, 55, 0.3)',
                    }}
                  >
                    <p className="text-xs text-white/80 leading-relaxed">
                      {qaTips[activeQaTip]}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div
                className="p-4 rounded-xl min-h-[180px]"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Search className="w-4 h-4" style={{ color: '#D4AF37' }} />
                  <h4 className="text-sm font-semibold text-white">My Dictionary</h4>
                </div>
                <div className="space-y-2">
                  {dictionaryEntries.map((entry, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-xs p-2 rounded"
                      style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                    >
                      <span className="text-white/80">{entry.source}</span>
                      <span className="text-white/60">→</span>
                      <span className="text-white/80">{entry.target}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {isPaused && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl backdrop-blur-sm"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">⏸️</div>
                  <div className="text-white text-lg font-semibold">Demo Paused</div>
                  <div className="text-white/60 text-sm">Move cursor away to resume</div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
