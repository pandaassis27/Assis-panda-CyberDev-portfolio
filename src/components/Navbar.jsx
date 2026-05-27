import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Resume', href: '#resume', isAction: true },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 1.5rem',
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(10, 10, 10, 0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 59, 59, 0.08)' : 'none',
        boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.6)' : 'none',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: 'none' }}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: '18px',
              fontWeight: 800,
              letterSpacing: '2px',
              background: 'linear-gradient(135deg, #ffffff, #ff3b3b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              cursor: 'pointer',
            }}
          >
            &lt;ASSIS.P /&gt;
          </motion.div>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} id="nav-desktop">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={e => {
                if (link.isAction) {
                  e.preventDefault();
                  onOpenResume();
                }
              }}
              style={{
                textDecoration: 'none',
                color: '#8c8c8c',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                transition: 'all 0.25s ease',
                position: 'relative',
              }}
              onMouseEnter={e => {
                e.target.style.color = '#ff3b3b';
                e.target.style.textShadow = '0 0 6px rgba(255, 59, 59, 0.4)';
              }}
              onMouseLeave={e => {
                e.target.style.color = '#8c8c8c';
                e.target.style.textShadow = 'none';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#ff3b3b',
            fontSize: '22px',
            cursor: 'pointer',
            display: 'block',
          }}
          id="nav-hamburger"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'rgba(10, 10, 10, 0.98)',
              borderTop: '1px solid rgba(255, 59, 59, 0.08)',
              padding: '1.2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              overflow: 'hidden'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={e => {
                  setMenuOpen(false);
                  if (link.isAction) {
                    e.preventDefault();
                    onOpenResume();
                  }
                }}
                style={{
                  textDecoration: 'none',
                  color: '#8c8c8c',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '12px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                  padding: '6px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.02)',
                }}
                onMouseEnter={e => {
                  e.target.style.color = '#ff3b3b';
                }}
                onMouseLeave={e => {
                  e.target.style.color = '#8c8c8c';
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
