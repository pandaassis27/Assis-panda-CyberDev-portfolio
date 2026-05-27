import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiShield, FiCode, FiZap, FiTarget } from 'react-icons/fi';

const infoCards = [
  {
    icon: FiShield,
    title: 'Cybersecurity',
    desc: 'Focusing on network security, threat analysis, vulnerability assessment, and OWASP Top 10.',
    color: '#ff3b3b',
    border: 'rgba(255, 59, 59, 0.12)',
    bg: 'rgba(255, 59, 59, 0.02)',
  },
  {
    icon: FiCode,
    title: 'MERN Stack',
    desc: 'Developing secure, responsive full-stack applications with MongoDB, Express, React, and Node.js.',
    color: '#ff3b3b',
    border: 'rgba(255, 59, 59, 0.12)',
    bg: 'rgba(255, 59, 59, 0.02)',
  },
  {
    icon: FiTarget,
    title: 'Ethical Hacking',
    desc: 'Acquiring hands-on training in penetration testing, threat modeling, and defensive security.',
    color: '#ff3b3b',
    border: 'rgba(255, 59, 59, 0.12)',
    bg: 'rgba(255, 59, 59, 0.02)',
  },
  {
    icon: FiZap,
    title: 'Generative AI',
    desc: 'Exploring core concepts of Generative AI, AI-driven automation, and prompt engineering.',
    color: '#ff3b3b',
    border: 'rgba(255, 59, 59, 0.12)',
    bg: 'rgba(255, 59, 59, 0.02)',
  },
];

const StatCard = ({ value, label, color }) => (
  <div style={{
    textAlign: 'center',
    padding: '16px 20px',
    background: 'rgba(255, 59, 59, 0.02)',
    border: '1px solid rgba(255, 59, 59, 0.12)',
    borderRadius: '8px',
    minWidth: '110px',
  }}>
    <div style={{
      fontFamily: 'Orbitron, monospace',
      fontSize: '1.8rem',
      fontWeight: 800,
      color: color,
      textShadow: `0 0 10px rgba(255, 59, 59, 0.3)`,
    }}>{value}</div>
    <div style={{
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '10px',
      color: '#8c8c8c',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      marginTop: '4px',
    }}>{label}</div>
  </div>
);

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-tag">01. About Me</div>
            <h2 className="section-title">
              Who Am I?
            </h2>
            <div className="section-divider" style={{ margin: '0 auto 20px' }} />
            <p style={{ color: '#8c8c8c', maxWidth: '500px', margin: '0 auto', fontSize: '15px', lineHeight: 1.7 }}>
              A computer science student building at the intersection of application security and development.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}>
            {/* Bio */}
            <div>
              <div style={{
                background: 'rgba(255, 59, 59, 0.015)',
                border: '1px solid rgba(255, 59, 59, 0.08)',
                borderRadius: '12px',
                padding: '28px',
                marginBottom: '24px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Corner accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '40px',
                  height: '40px',
                  borderTop: '2px solid #ff3b3b',
                  borderLeft: '2px solid #ff3b3b',
                  borderRadius: '12px 0 0 0',
                  opacity: 0.4,
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '40px',
                  height: '40px',
                  borderBottom: '2px solid #ff3b3b',
                  borderRight: '2px solid #ff3b3b',
                  borderRadius: '0 0 12px 0',
                  opacity: 0.4,
                }} />

                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  color: '#ff3b3b',
                  letterSpacing: '2px',
                  marginBottom: '16px',
                }}>
                  // professional_bio.sh
                </div>

                <p style={{ color: '#8c8c8c', lineHeight: 1.8, fontSize: '14.5px', marginBottom: '14px', textAlign: 'justify' }}>
                  I am a Computer Science Engineering student (B.Tech, 2023-2027) at <span style={{ color: '#ffffff', fontWeight: '500' }}>ITM Vocational University</span>, specializing in offensive security auditing, ethical hacking, and vulnerability management. My practical foundation includes a 6-month <span style={{ color: '#ff3b3b' }}>Cybersecurity Internship at UptoSkills</span>, where I conducted vulnerability scanning and traffic capture auditing in local lab nodes.
                </p>
                <p style={{ color: '#8c8c8c', lineHeight: 1.8, fontSize: '14.5px', marginBottom: '14px', textAlign: 'justify' }}>
                  I have built strong expertise in mapping <span style={{ color: '#ff3b3b' }}>OWASP Top 10</span> vulnerabilities, performing network auditing, and securing modern web applications built on the <span style={{ color: '#ffffff', fontWeight: '500' }}>MERN Stack</span>. Active in technical learning, I participate in TryHackMe cyber labs (e.g., Advent of Cyber 2025) and pen-testing challenges on Hackviser (CAPT credential), bridging the gap between secure development and vulnerability assessment.
                </p>
                <p style={{ color: '#8c8c8c', lineHeight: 1.8, fontSize: '14.5px', textAlign: 'justify' }}>
                  🎯 <strong style={{ color: '#ff3b3b' }}>Career Focus:</strong> Dedicated to identifying, analyzing, and mitigating system threats as an industry-ready cybersecurity analyst while ensuring that application structures are secure by design from the ground up.
                </p>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <StatCard value="5" label="Projects" color="#ff3b3b" />
                <StatCard value="4" label="Internships" color="#ff3b3b" />
                <StatCard value="10+" label="Certs" color="#ff3b3b" />
                <StatCard value="∞" label="Curiosity" color="#ff3b3b" />
              </div>
            </div>

            {/* Info Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {infoCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  whileHover={{ y: -4 }}
                  style={{
                    background: card.bg,
                    border: `1px solid ${card.border}`,
                    borderRadius: '12px',
                    padding: '24px 20px',
                    cursor: 'default',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = `0 12px 24px rgba(255, 59, 59, 0.03), 0 0 10px rgba(255, 59, 59, 0.15)`;
                    e.currentTarget.style.borderColor = 'rgba(255, 59, 59, 0.3)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = card.border;
                  }}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(255, 59, 59, 0.06)',
                    border: `1px solid rgba(255, 59, 59, 0.15)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px',
                    color: '#ff3b3b',
                    fontSize: '16px',
                  }}>
                    <card.icon />
                  </div>
                  <h3 style={{
                    fontFamily: 'Orbitron, monospace',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '6px',
                    letterSpacing: '0.5px',
                  }}>{card.title}</h3>
                  <p style={{
                    fontSize: '11px',
                    color: '#8c8c8c',
                    lineHeight: 1.6,
                  }}>{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
