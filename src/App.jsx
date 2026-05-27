import { useState, memo } from 'react';
import CustomCursor from './components/CustomCursor';
import MatrixRain from './components/MatrixRain';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CyberTerminal from './components/CyberTerminal';
import Journey from './components/Journey';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeViewer from './components/ResumeViewer';
import Achievements from './components/Achievements';

// Memoize heavy child sections to prevent re-renders when toggling the Resume overlay
const MainContent = memo(() => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CyberTerminal />
      <Journey />
      <Achievements />
      <Certifications />
      <Contact />
    </main>
  );
});

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', position: 'relative' }}>
        {/* Ambient background red blobs */}
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: '15%',
            left: '5%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,59,59,0.02) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }} />
          <div style={{
            position: 'absolute',
            top: '55%',
            right: '5%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,59,59,0.015) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '30%',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,59,59,0.015) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }} />
        </div>

        {/* Hexadecimal Matrix Rain Canvas */}
        <MatrixRain />

        {/* Danger Skull Cursor */}
        <CustomCursor />

        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Sticky Navigation */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Secure Resume Viewer Fullscreen OS Overlay */}
        <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

        {/* Main Layout Sections */}
        <MainContent />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
