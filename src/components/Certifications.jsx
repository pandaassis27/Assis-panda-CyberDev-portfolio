import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiCheckCircle, FiCalendar, FiExternalLink } from 'react-icons/fi';

const certifications = [
  {
    title: 'Certified Associated Penetration Tester (CAPT)',
    issuer: 'Hackviser',
    date: '2024',
    status: 'Completed',
    color: '#ff3b3b',
    border: 'rgba(255, 59, 59, 0.12)',
    bg: 'rgba(255, 59, 59, 0.02)',
    skills: ['Pen Testing', 'Vulnerability Assessment', 'Ethical Hacking'],
    badge: '🛡️',
    hash: '0x8f3c91a0...9012',
  },
  {
    title: 'Junior Cybersecurity Analyst Career Path',
    issuer: 'CISCO',
    date: '2024',
    status: 'Completed',
    color: '#ff3b3b',
    border: 'rgba(255, 59, 59, 0.12)',
    bg: 'rgba(255, 59, 59, 0.02)',
    skills: ['Threat Analysis', 'Network Defense', 'Incident Response'],
    badge: '🔐',
    hash: '0x1a2b3c4d...3e4f',
  },
  {
    title: 'Cisco Cybersecurity Internship',
    issuer: 'Cisco x NIIT Foundation',
    date: '2024',
    status: 'Completed',
    color: '#ff3b3b',
    border: 'rgba(255, 59, 59, 0.12)',
    bg: 'rgba(255, 59, 59, 0.02)',
    skills: ['Network Security', 'Cryptography', 'Secure Coding'],
    badge: '🎓',
    hash: '0x7c8d9e0f...9a0b',
  },
  {
    title: 'Certified AI Security & Risk (CAISR)',
    issuer: 'Red Team Leaders',
    date: '2025',
    status: 'Completed',
    color: '#ff3b3b',
    border: 'rgba(255, 59, 59, 0.12)',
    bg: 'rgba(255, 59, 59, 0.02)',
    skills: ['AI Risk Management', 'LLM Vulnerabilities', 'Model Defenses'],
    badge: '🤖',
    hash: '0x9e8d7c6b...7a6f',
  },
  {
    title: 'Certified Cybersecurity Educator Professional (CCEP)',
    issuer: 'Red Team Leaders',
    date: '2025',
    status: 'Completed',
    color: '#ff3b3b',
    border: 'rgba(255, 59, 59, 0.12)',
    bg: 'rgba(255, 59, 59, 0.02)',
    skills: ['Security Awareness', 'Cyber Education', 'Incident Response'],
    badge: '📚',
    hash: '0x3a4b5c6d...5e6f',
  },
  {
    title: 'Advent of Cyber 2025',
    issuer: 'TryHackMe',
    date: '2025',
    status: 'Completed',
    color: '#ff3b3b',
    border: 'rgba(255, 59, 59, 0.12)',
    bg: 'rgba(255, 59, 59, 0.02)',
    skills: ['Log Analysis', 'Defensive Operations', 'Active Directory'],
    badge: '🎄',
    hash: '0x5f6e7d8c...01e2',
  },
  {
    title: 'NISM Stock Market Certification',
    issuer: 'National Institute of Securities Markets',
    date: '2023',
    status: 'Completed',
    color: '#ff3b3b',
    border: 'rgba(255, 59, 59, 0.12)',
    bg: 'rgba(255, 59, 59, 0.02)',
    skills: ['Market Operations', 'Risk Assessment', 'Financial Systems'],
    badge: '📈',
    hash: '0x7a8b9c0d...d5e6',
  },
  {
    title: 'Cryptography & Cryptocurrencies',
    issuer: 'University of Maryland / Coursera',
    date: '2024',
    status: 'Completed',
    color: '#ff3b3b',
    border: 'rgba(255, 59, 59, 0.12)',
    bg: 'rgba(255, 59, 59, 0.02)',
    skills: ['Symmetric Encryption', 'Hashing', 'Blockchain'],
    badge: '🔑',
    hash: '0x1f2e3d4c...7e8f',
  },
  {
    title: 'Introduction to Linux (LFS101)',
    issuer: 'The Linux Foundation',
    date: '2023',
    status: 'Completed',
    color: '#ff3b3b',
    border: 'rgba(255, 59, 59, 0.12)',
    bg: 'rgba(255, 59, 59, 0.02)',
    skills: ['Linux CLI', 'File Systems', 'Bash Scripting'],
    badge: '🐧',
    hash: '0x9a0b1c2d...1e2f',
  },
  {
    title: 'Python Programming',
    issuer: 'Vaultofcodes',
    date: '2023',
    status: 'Completed',
    color: '#ff3b3b',
    border: 'rgba(255, 59, 59, 0.12)',
    bg: 'rgba(255, 59, 59, 0.02)',
    skills: ['Core Python', 'Automation Scripts', 'Algorithms'],
    badge: '🐍',
    hash: '0x4b5c6d7e...f7a',
  },
];

const CertCard = ({ cert, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ delay: (index % 3) * 0.1 + 0.1, duration: 0.5 }}
      whileHover={{ y: -6 }}
      style={{
        background: '#111111',
        border: `1px solid ${cert.border}`,
        borderRadius: '12px',
        padding: '24px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'default',
        boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 15px 30px rgba(255, 59, 59, 0.04), 0 20px 40px rgba(0, 0, 0, 0.7)`;
        e.currentTarget.style.borderColor = 'rgba(255, 59, 59, 0.35)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';
        e.currentTarget.style.borderColor = cert.border;
      }}
    >
      {/* Corner accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '2px',
        background: `linear-gradient(90deg, ${cert.color}, transparent)`,
        opacity: 0.5,
      }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
        <div style={{
          fontSize: '28px',
          lineHeight: 1,
          flexShrink: 0,
        }}>
          {cert.badge}
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: '13px',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '4px',
            letterSpacing: '0.3px',
            lineHeight: 1.4,
          }}>
            {cert.title}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              color: '#8c8c8c',
            }}>
              {cert.issuer}
            </span>
          </div>
          {/* SHA-256 Verifier */}
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '8.5px',
            color: '#ff3b3b',
            opacity: 0.8,
            marginTop: '4px',
            letterSpacing: '0.2px'
          }}>
            HASH_SHA256: {cert.hash}
          </div>
        </div>
      </div>

      {/* Status & Date */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <FiCheckCircle size={11} style={{ color: cert.color }} />
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10.5px',
            color: cert.color,
            letterSpacing: '0.5px',
          }}>
            {cert.status}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: 'auto' }}>
          <FiCalendar size={11} style={{ color: '#475569' }} />
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10.5px',
            color: '#475569',
          }}>
            {cert.date}
          </span>
        </div>
      </div>

      {/* Skills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
        {cert.skills.map(skill => (
          <span
            key={skill}
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '9px',
              color: '#e5e5e5',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              padding: '2px 6px',
              borderRadius: '3px',
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Verify button */}
      <motion.a
        href="#"
        whileTap={{ scale: 0.97 }}
        style={{
          marginTop: '16px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          padding: '8px',
          background: 'rgba(255, 59, 59, 0.04)',
          border: '1px solid rgba(255, 59, 59, 0.2)',
          borderRadius: '6px',
          color: cert.color,
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          letterSpacing: '1px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          textTransform: 'uppercase',
          textDecoration: 'none'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(255, 59, 59, 0.08)';
          e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 59, 59, 0.15)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(255, 59, 59, 0.04)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <FiExternalLink size={11} />
        Verify
      </motion.a>
    </motion.div>
  );
};

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-100px',
        transform: 'translateY(-50%)',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 59, 59, 0.015) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="section-tag">07. Credentials</div>
            <h2 className="section-title">
              Certifications
            </h2>
            <div className="section-divider" style={{ margin: '0 auto 20px' }} />
            <p style={{ color: '#8c8c8c', maxWidth: '500px', margin: '0 auto', fontSize: '15px' }}>
              Verified credentials from industry-leading platforms.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {certifications.map((cert, i) => (
              <CertCard key={cert.title} cert={cert} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
