import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiShield, FiTrendingUp, FiBriefcase } from 'react-icons/fi';

const achievementsData = [
  {
    title: 'Red vs Blue League',
    subtitle: 'UptoSkills Cyber League',
    value: 'RUNNER-UP',
    subvalue: 'RANK #02 // ACTIVE LEAGUE',
    icon: FiShield,
    color: '#ff3b3b',
    desc: 'Led a tactical defense team in simulated active attack/defense cycles protecting infrastructure nodes.',
  },
  {
    title: 'NISM Certified',
    subtitle: 'Securities Market Series-VIII',
    value: 'PASSED',
    subvalue: 'CREDENTIAL: NISM-VIII',
    icon: FiTrendingUp,
    color: '#ff3b3b',
    desc: 'Certified in stock market operations, risk auditing, and compliance structures by NISM.',
  },
  {
    title: 'TryHackMe Active Labs',
    subtitle: 'Advent of Cyber 2025',
    value: '100% DONE',
    subvalue: 'VERIFIED SECURITY BADGE',
    icon: FiAward,
    color: '#ff3b3b',
    desc: 'Successfully mitigated daily cybersecurity threats, auditing logs, malware, and network protocols.',
  },
  {
    title: 'Professional Internships',
    subtitle: 'Tech & Cybersecurity Experience',
    value: '04 WEEKS/MONTHS',
    subvalue: 'Cisco, UptoSkills, CodSoft, Suretrust',
    icon: FiBriefcase,
    color: '#ff3b3b',
    desc: 'Completed 4 professional internships across full-stack development, GenAI, and network security.',
  }
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      {/* Background glow overlay */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 59, 59, 0.015) 0%, transparent 70%)',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-tag">06. Milestones</div>
            <h2 className="section-title">
              System Achievements
            </h2>
            <div className="section-divider" style={{ margin: '0 auto 20px' }} />
            <p style={{ color: '#8c8c8c', maxWidth: '500px', margin: '0 auto', fontSize: '15px' }}>
              Audited key operational milestones and security verification marks achieved.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
          }}>
            {achievementsData.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.15, duration: 0.5 }}
                whileHover={{ y: -6 }}
                style={{
                  background: 'rgba(17, 17, 17, 0.75)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 59, 59, 0.12)',
                  borderRadius: '12px',
                  padding: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                  cursor: 'default',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '260px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(255, 59, 59, 0.04), 0 20px 40px rgba(0, 0, 0, 0.7)';
                  e.currentTarget.style.borderColor = 'rgba(255, 59, 59, 0.35)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';
                  e.currentTarget.style.borderColor = 'rgba(255, 59, 59, 0.12)';
                }}
              >
                {/* Visual scan line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: 'linear-gradient(90deg, #ff3b3b, transparent)',
                  opacity: 0.3,
                }} />

                {/* Card Top */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(255, 59, 59, 0.06)',
                      border: '1px solid rgba(255, 59, 59, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ff3b3b',
                      fontSize: '18px',
                    }}>
                      <item.icon />
                    </div>
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '9px',
                      color: '#8c8c8c',
                    }}>
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: 'Orbitron, monospace',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '8px',
                    letterSpacing: '0.3px',
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '12px',
                    color: '#8c8c8c',
                    lineHeight: '1.5',
                    marginBottom: '16px',
                  }}>
                    {item.desc}
                  </p>
                </div>

                {/* Card Bottom: Glowing Telemetry value */}
                <div style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.03)',
                  paddingTop: '12px',
                  marginTop: 'auto'
                }}>
                  <div style={{
                    fontFamily: 'Orbitron, monospace',
                    fontSize: '16px',
                    fontWeight: '900',
                    color: '#ff3b3b',
                    textShadow: '0 0 10px rgba(255, 59, 59, 0.2)',
                    marginBottom: '2px',
                  }}>
                    {item.value}
                  </div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '8.5px',
                    color: '#8c8c8c',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    {item.subvalue}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
