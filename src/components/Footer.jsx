import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid rgba(255,59,59,0.08)',
      background: 'rgba(10,10,10,0.8)',
      backdropFilter: 'blur(10px)',
    }}>
      {/* Top glow line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(255,59,59,0.3), transparent)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 1.5rem 32px' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
          marginBottom: '40px',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: '24px',
              fontWeight: 800,
              letterSpacing: '3px',
              background: 'linear-gradient(135deg, #ffffff, #ff3b3b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '8px',
            }}>
              &lt;ASSIS.P /&gt;
            </div>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              color: '#8c8c8c',
              letterSpacing: '0.5px',
              lineHeight: 1.7,
              maxWidth: '280px',
            }}>
              Cybersecurity Enthusiast & MERN Stack Developer.<br />
              Building secure digital experiences.
            </p>
          </div>

          {/* Nav Links */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              color: '#ff3b3b',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '4px',
            }}>
              Navigation
            </span>
            {['Home', 'Skills', 'Projects', 'Achievements', 'Terminal', 'Contact'].map(link => (
              <a
                key={link}
                href={link === 'Home' ? '#hero' : `#${link.toLowerCase()}`}
                style={{
                  textDecoration: 'none',
                  color: '#8c8c8c',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  letterSpacing: '0.5px',
                  transition: 'color 0.25s',
                }}
                onMouseEnter={e => { e.target.style.color = '#ff3b3b'; }}
                onMouseLeave={e => { e.target.style.color = '#8c8c8c'; }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              color: '#ff3b3b',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '14px',
            }}>
              Connect
            </span>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: FiGithub, href: 'https://github.com/pandaassis27', color: '#ff3b3b', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://linkedin.com/in/assis-panda-54b720295', color: '#ff3b3b', label: 'LinkedIn' },
                { icon: SiDiscord, href: '#', color: '#ff3b3b', label: 'Discord' },
                { icon: FiMail, href: 'mailto:assispanda87@gmail.com?subject=Portfolio Inquiry', color: '#ff3b3b', label: 'Email' },
              ].map(({ icon: Icon, href, color, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith('mailto:') || href === '#' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  onClick={e => {
                    if (label === 'Discord') {
                      e.preventDefault();
                      e.stopPropagation();
                      navigator.clipboard.writeText('assispanda87');
                      alert('Discord username "assispanda87" copied to clipboard!');
                      return;
                    }
                    if (href.startsWith('mailto:')) {
                      e.preventDefault();
                      e.stopPropagation();
                      window.location.href = href;
                      return;
                    }
                    if (href.startsWith('http')) {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(href, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#8c8c8c',
                    fontSize: '15px',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = color;
                    e.currentTarget.style.borderColor = 'rgba(255,59,59,0.3)';
                    e.currentTarget.style.background = 'rgba(255,59,59,0.04)';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(255,59,59,0.15)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#8c8c8c';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.04)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            color: '#475569',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexWrap: 'wrap',
          }}>
            <span>© 2026 Assis Panda. Made with</span>
            <FiHeart size={11} style={{ color: '#ff3b3b' }} />
            <span>using React + Framer Motion + Tailwind</span>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              background: 'rgba(255,59,59,0.04)',
              border: '1px solid rgba(255,59,59,0.25)',
              borderRadius: '6px',
              color: '#ff3b3b',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 10px rgba(255,59,59,0.15)';
              e.currentTarget.style.background = 'rgba(255,59,59,0.08)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = 'rgba(255,59,59,0.04)';
            }}
          >
            <FiArrowUp size={12} />
            Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
