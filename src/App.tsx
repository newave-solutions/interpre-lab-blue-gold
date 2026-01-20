import NeuralConstellation from './components/NeuralConstellation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DataStream from './components/DataStream';
import Features from './components/Features';
import InterpreCoachDemo from './components/InterpreCoachDemo';
import InterpreBot from './components/InterpreBot';
import Metrics from './components/Metrics';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ backgroundColor: '#050505' }}>
      <NeuralConstellation />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <DataStream />
        <Features />
        <DataStream />
        <InterpreCoachDemo />
        <DataStream />
        <InterpreBot />
        <DataStream />
        <Metrics />
        <Footer />
      </div>
    </div>
  );
}

export default App;
