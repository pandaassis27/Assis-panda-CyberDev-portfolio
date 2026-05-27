import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiZoomIn, FiZoomOut, FiDownload, FiTerminal, FiShield, FiCpu, FiCheck, FiMail, FiGithub, FiLinkedin, FiPhone, FiBookOpen, FiAward, FiStar, FiHeart, FiSliders } from 'react-icons/fi';

const ResumeViewer = ({ isOpen, onClose }) => {
  const [decryptStage, setDecryptStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [diagnosticLogs, setDiagnosticLogs] = useState([
    'SYS: Loading kernel modules...',
    'NET: Established secure tunnel on port 8443',
    'SEC: PAM verification success (level_4)',
  ]);

  const decryptionLogs = [
    'initializing secure profile...',
    'decrypting candidate records...',
    'verifying access token...',
    'access granted',
  ];

  // Decryption loading sequence on open
  useEffect(() => {
    if (!isOpen) {
      setDecryptStage(0);
      setProgress(0);
      setIsDecrypted(false);
      return;
    }

    const logInterval = setInterval(() => {
      setDecryptStage(prev => {
        if (prev < decryptionLogs.length - 1) {
          return prev + 1;
        } else {
          clearInterval(logInterval);
          return prev;
        }
      });
    }, 380);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsDecrypted(true), 150);
          return 100;
        }
        return prev + Math.floor(Math.random() * 18) + 8;
      });
    }, 80);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, [isOpen]);

  // Live system diagnostic logs
  useEffect(() => {
    if (!isDecrypted || !isOpen) return;

    const interval = setInterval(() => {
      const messages = [
        'SEC: Port scan on host 10.0.8.2 blocked',
        'IDS: Active auditing on local packet buffer',
        'SYS: Kernel telemetry aggregation: NOMINAL',
        'NET: Decrypting secure payload handshake',
        'SEC: TLS 1.3 verify check: 256-BIT OK',
        'DB: MongoDB audit record logged successfully',
      ];
      setDiagnosticLogs(prev => [...prev.slice(1), messages[Math.floor(Math.random() * messages.length)]]);
    }, 2800);

    return () => clearInterval(interval);
  }, [isDecrypted, isOpen]);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 1.2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.85));

  // Resume Download Handler
  const handleDownload = () => {
    const resumeText = `# ASSIS PANDA
Cybersecurity Specialist & Full-Stack Developer
Email: assispanda87@gmail.com
Phone: +91 9860596829
LinkedIn: https://linkedin.com/in/assis-panda-54b720295 (Assis panda)
GitHub: https://github.com/pandaassis27 (pandaassis27)
Location: Gujarat, India

=========================================
PROFESSIONAL SUMMARY
=========================================
Motivated and cybersecurity-focused Computer Science Engineering student with practical exposure to network security, ethical hacking, and vulnerability assessment. Completed multiple internships including a 6-month virtual Cybersecurity Internship at UptoSkills, gaining hands-on experience with industry-standard security tools and attack analysis techniques. Possesses strong knowledge of OWASP Top 10 vulnerabilities, penetration testing fundamentals, and security best practices. Passionate about identifying, analyzing, and mitigating security risks while continuously expanding technical expertise.

=========================================
TECHNICAL SKILLS
=========================================
* Programming Languages: Python, HTML, CSS, JavaScript (ES6+)
* Cybersecurity: Network Security, Vulnerability Assessment, Threat Analysis, Web Application Security, OWASP Top 10, Basic Penetration Testing, Cryptography Fundamentals
* Security & Analysis Tools: Wireshark, Kali Linux, Nmap, Burp Suite, Metasploit, Nikto, Gobuster, Canva
* Soft Skills: Problem Solving, Communication, Critical Thinking, Research, Ethical Mindset, Team Collaboration, Time Management, Critical Thinking, Research & Investigation Mindset, Ethical & Responsible Approach

=========================================
EDUCATION
=========================================
* B.Tech in Computer Science Engineering (2023 - 2027)
  ITM Vocational University, Gujarat
  Current Status: Enrolled, Semester V

* HSC (Class XII) (Completed 2023 - 60%)
  Motilal Kanjilal Junior College

=========================================
INTERNSHIPS & PROFESSIONAL EXPERIENCE
=========================================
* Cybersecurity Intern | UptoSkills
  Duration: 6 Months (Virtual)
  - Conducted vulnerability assessments and port scanning utilizing Nmap & Kali Linux.
  - Performed packet capture parsing and network audits via Wireshark.
  - Analyzed and mitigated OWASP Top 10 web vulnerabilities:
    * SQL Injection (SQLi)
    * Cross-Site Scripting (XSS)
    * Broken Authentication
    * Security Misconfigurations
    * Cryptographic Failures
    * Identification & Authentication Failures
    * Vulnerable & Outdated Components
    * Broken Access Control
  - Acquired hands-on ethical hacking exposure, risk analysis, and defensive concepts.
  - Runner-up in the league of Red VS Blue game.

* Network Security Intern | Cisco x NIIT Foundation
  - Completed Cybersecurity Essentials track by Cisco Networking Academy in collaboration with NIIT Foundation.
  - Gained hands-on knowledge in network layers, protocol security, cryptography, and secure coding practices.

* Web Development Intern | CodSoft
  - Developed responsive website structures from Canva layout design blueprints.
  - Programmed frontend elements with HTML5, CSS3, and JavaScript.
  - Collaborated with mentors to deliver functional layouts meeting client needs.

* Generative AI Intern | Suretrust Pro Education
  - Explored core concepts of Generative AI, prompt engineering, and AI-based tools.
  - Evaluated automation integrations and AI-driven workflows per AICTE approval guidelines.

=========================================
KEY PROJECTS
=========================================
1. E-commerce Website
   - Online shopping platform constructed with HTML, CSS, and JavaScript. Focused on responsive layout, user experience, and scalable design.
2. Steganography in Action
   - Image-based steganography script implementing the LSB (Least Significant Bit) technique to securely hide and decode encrypted text payloads inside image pixels.
3. DoS Attack Simulation
   - Simulated denial of service attack vectors inside a controlled local lab environment to analyze traffic behavior and study defensive packet filtering rules.

=========================================
CERTIFICATIONS
=========================================
* Cisco Cybersecurity Internship (Cisco x NIIT Foundation)
* NISM Stock Market Certification
* Cryptography & Cryptocurrencies
* Introduction to Linux (LFS101)
* Certified Associated Penetration Tester (CAPT) | Hackviser
* Advent of Cyber 2025 | TryHackMe
* Python Programming | Vaultofcodes
* Junior Cybersecurity Analyst Career Path | CISCO
* Certified Artificial Intelligence Security & Risk (CAISR) | Red Team Leaders
* Certified Cybersecurity educator Professional (CCEP) | Red Team Leaders

=========================================
ACHIEVEMENTS & LAB PARTICIPATION
=========================================
- Runner-up in the UptoSkills league of Red VS Blue game.
- Certified in stock market operations by NISM.
- Completed 4 distinct professional internships.
- Built multiple custom coding projects.
- Active ethical hacking lab participation and continuous cybersecurity learning.

=========================================
HOBBIES & STRENGTHS
=========================================
* Hobbies: Coding & Web Development, Hacking Labs, sports & fitness, technical podcasts, technical blogs, YouTube learning.
* Strengths: Analytical Thinking, Problem-Solving Skills, Attention to Detail, Quick Learner, Hands-on Learning Mindset, Ethical & Responsible Approach.
`;

    const blob = new Blob([resumeText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'assis_panda_resume.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Helper to render console skill bar meter
  const SkillBar = ({ label, percentage }) => {
    const barsCount = 10;
    const filledCount = Math.round((percentage / 100) * barsCount);
    const emptyCount = barsCount - filledCount;
    const filledChars = '█'.repeat(filledCount);
    const emptyChars = '░'.repeat(emptyCount);
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#8c8c8c', margin: '4px 0' }}>
        <span>{label}</span>
        <span style={{ color: '#ffffff' }}>
          [{filledChars}
          <span style={{ opacity: 0.25 }}>{emptyChars}</span>] {percentage}%
        </span>
      </div>
    );
  };

  return (
    <AnimatePresence>
      <div style={{
        position: 'fixed',
        inset: 0,
        background: '#040404',
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}>
        {/* Holographic scanning laser line overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(180deg, rgba(255, 59, 59, 0.4), transparent)',
          animation: 'scanline 8s linear infinite',
          zIndex: 2005,
          pointerEvents: 'none',
        }} />

        {/* Loading Boot Decryption Console Overlay */}
        <AnimatePresence>
          {!isDecrypted && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                inset: 0,
                background: '#060606',
                zIndex: 2010,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'JetBrains Mono, monospace',
                padding: '20px',
              }}
            >
              <div style={{ width: '100%', maxWidth: '440px' }}>
                {/* Console Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ff3b3b', marginBottom: '14px', fontSize: '12px', fontWeight: 'bold' }}>
                  <FiTerminal className="terminal-blink" />
                  <span>INITIALIZING PROFILE DECRYPTION...</span>
                </div>

                {/* Console logs */}
                <div style={{
                  background: '#0a0a0a',
                  border: '1px solid rgba(255, 59, 59, 0.1)',
                  borderRadius: '6px',
                  padding: '16px 20px',
                  height: '135px',
                  color: '#8c8c8c',
                  fontSize: '11px',
                  lineHeight: '1.9',
                  marginBottom: '18px',
                  overflow: 'hidden',
                }}>
                  {decryptionLogs.map((log, idx) => (
                    <div
                      key={idx}
                      style={{
                        opacity: decryptStage >= idx ? 1 : 0,
                        transform: decryptStage >= idx ? 'translateX(0)' : 'translateX(-6px)',
                        transition: 'all 0.15s ease',
                        color: idx === decryptStage ? '#ffffff' : '#8c8c8c',
                      }}
                    >
                      <span style={{ color: '#ff3b3b', marginRight: '6px' }}>&gt;</span>
                      {log}
                      {idx === decryptStage && <span className="terminal-blink" style={{ color: '#ff3b3b' }}>█</span>}
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#8c8c8c', marginBottom: '5px' }}>
                    <span>DECOMPRESSING DOSSIER</span>
                    <span style={{ color: '#ff3b3b', fontWeight: 'bold' }}>{Math.min(progress, 100)}%</span>
                  </div>
                  <div style={{ width: '100%', height: '3px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '2px', overflow: 'hidden' }}>
                    <motion.div
                      style={{ width: `${Math.min(progress, 100)}%`, height: '100%', background: '#ff3b3b', boxShadow: '0 0 10px #ff3b3b' }}
                      transition={{ ease: 'linear' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Operating System Workspace Header */}
        <div style={{
          background: '#080808',
          padding: '12px 24px',
          borderBottom: '1px solid rgba(255, 59, 59, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          color: '#8c8c8c',
          userSelect: 'none',
          zIndex: 2002,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FiShield style={{ color: '#ff3b3b' }} />
            <span style={{ color: '#ffffff', fontWeight: 'bold', letterSpacing: '1px' }}>
              ASSIS_PANDA_DOSSIER // ACCESS_LEVEL: LEVEL_4 // SYSTEM_ACTIVE
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff3b3b', display: 'inline-block', animation: 'pulse-glow 1.5s infinite' }} />
              <span>SYS_ENCRYPT: AES-256-GCM</span>
            </div>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 59, 59, 0.08)',
                border: '1px solid rgba(255, 59, 59, 0.25)',
                color: '#ff3b3b',
                borderRadius: '4px',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#ff3b3b';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255, 59, 59, 0.08)';
                e.currentTarget.style.color = '#ff3b3b';
              }}
              title="Exit Dashboard"
            >
              <FiX size={13} />
            </button>
          </div>
        </div>

        {/* Split Screen Workspace Body */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          height: 'calc(100vh - 43px)',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 2001,
        }}>
          
          {/* LEFT SIDE PANEL (35% Width): Identity, Contact, Skill Loaders, Status */}
          <div style={{
            width: '35%',
            minWidth: '320px',
            background: 'rgba(10, 10, 10, 0.96)',
            borderRight: '1px solid rgba(255, 59, 59, 0.12)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            overflowY: 'auto',
          }}>
            
            {/* 1. Identity Badge (avatar silhouette) */}
            <div style={{
              background: 'rgba(255, 59, 59, 0.015)',
              border: '1px solid rgba(255, 59, 59, 0.12)',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)',
              position: 'relative',
            }}>
              {/* Graphic futuristic reticle shield */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(255, 59, 59, 0.03)',
                border: '1px solid rgba(255, 59, 59, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ff3b3b',
                marginBottom: '10px',
                boxShadow: '0 0 15px rgba(255, 59, 59, 0.12)',
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5zM9 7a3 3 0 0 1 6 0v3H9V7z" />
                </svg>
              </div>

              <h2 style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: '15px',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '1px',
                marginBottom: '2px',
              }}>
                Assis Panda
              </h2>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '9px',
                color: '#ff3b3b',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                marginBottom: '8px',
              }}>
                // Sec-Ops & MERN stack developer
              </div>

              {/* Security clearance classification */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 59, 59, 0.08)',
                border: '1px solid rgba(255, 59, 59, 0.25)',
                borderRadius: '4px',
                padding: '3px 8px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '8.5px',
                color: '#ff3b3b',
                fontWeight: 'bold',
              }}>
                <FiCheck size={10} /> CLEARANCE: L4_SECURE
              </div>
            </div>

            {/* 2. Contact details console block */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#8c8c8c', letterSpacing: '0.5px' }}>
                CANDIDATE_COMMS_LINK:
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10.5px',
              }}>
                <a
                  href="mailto:assispanda87@gmail.com?subject=Portfolio Inquiry"
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.location.href = "mailto:assispanda87@gmail.com?subject=Portfolio Inquiry";
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#8c8c8c',
                    textDecoration: 'none',
                    background: 'rgba(255,255,255,0.01)',
                    border: '1px solid rgba(255,255,255,0.03)',
                    borderRadius: '6px',
                    padding: '8px 10px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#ff3b3b';
                    e.currentTarget.style.borderColor = 'rgba(255,59,59,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#8c8c8c';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)';
                  }}
                >
                  <FiMail size={12} style={{ color: '#ff3b3b' }} />
                  <span>assispanda87@gmail.com</span>
                </a>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#8c8c8c',
                    background: 'rgba(255,255,255,0.01)',
                    border: '1px solid rgba(255,255,255,0.03)',
                    borderRadius: '6px',
                    padding: '8px 10px',
                  }}
                >
                  <FiPhone size={12} style={{ color: '#ff3b3b' }} />
                  <span>+91 9860596829</span>
                </div>
                
                <a
                  href="https://linkedin.com/in/assis-panda-54b720295"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open("https://linkedin.com/in/assis-panda-54b720295", "_blank", "noopener,noreferrer");
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#8c8c8c',
                    textDecoration: 'none',
                    background: 'rgba(255,255,255,0.01)',
                    border: '1px solid rgba(255,255,255,0.03)',
                    borderRadius: '6px',
                    padding: '8px 10px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#ff3b3b';
                    e.currentTarget.style.borderColor = 'rgba(255,59,59,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#8c8c8c';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)';
                  }}
                >
                  <FiLinkedin size={12} style={{ color: '#ff3b3b' }} />
                  <span>Assis panda (LinkedIn)</span>
                </a>

                <a
                  href="https://github.com/pandaassis27"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open("https://github.com/pandaassis27", "_blank", "noopener,noreferrer");
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#8c8c8c',
                    textDecoration: 'none',
                    background: 'rgba(255,255,255,0.01)',
                    border: '1px solid rgba(255,255,255,0.03)',
                    borderRadius: '6px',
                    padding: '8px 10px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#ff3b3b';
                    e.currentTarget.style.borderColor = 'rgba(255,59,59,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#8c8c8c';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)';
                  }}
                >
                  <FiGithub size={12} style={{ color: '#ff3b3b' }} />
                  <span>pandaassis27 (GitHub)</span>
                </a>
              </div>
            </div>

            {/* 3. Skill Level meters */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#8c8c8c', letterSpacing: '0.5px' }}>
                PROFICIENCY_LEVEL_METERS:
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.01)',
                border: '1px solid rgba(255,255,255,0.03)',
                borderRadius: '8px',
                padding: '12px 14px',
              }}>
                <SkillBar label="PYTHON" percentage={60} />
                <SkillBar label="HTML / CSS" percentage={80} />
                <SkillBar label="JAVASCRIPT" percentage={70} />
                <SkillBar label="NET_SECURITY" percentage={80} />
                <SkillBar label="VULN_AUDITING" percentage={80} />
                <SkillBar label="OWASP_10_DRILLS" percentage={85} />
                <SkillBar label="PENTEST_BASICS" percentage={60} />
              </div>
            </div>

            {/* 4. Availability Status indicator */}
            <div style={{
              background: 'rgba(255, 59, 59, 0.015)',
              border: '1px solid rgba(255, 59, 59, 0.1)',
              borderRadius: '8px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              color: '#8c8c8c',
              marginTop: 'auto',
            }}>
              <span>AVAILABILITY_STATE:</span>
              <span style={{ color: '#22c55e', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse-glow 1.5s infinite' }} />
                ACTIVE_LOOKING
              </span>
            </div>

            {/* 5. Live diagnostic logs console */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#8c8c8c', letterSpacing: '0.5px' }}>
                SYS_AUDIT_STREAM:
              </div>
              <div style={{
                background: '#070707',
                border: '1px solid rgba(255, 255, 255, 0.02)',
                borderRadius: '6px',
                padding: '8px 10px',
                minHeight: '65px',
                color: '#8c8c8c',
                fontSize: '9px',
                fontFamily: 'JetBrains Mono, monospace',
                lineHeight: '1.5',
              }}>
                {diagnosticLogs.map((log, idx) => (
                  <div key={idx} style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    <span style={{ color: '#ff3b3b', marginRight: '4px' }}>&gt;</span>
                    {log}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE PANEL (65% Width): Document reader, zoom controls, download */}
          <div style={{
            width: '65%',
            background: '#080808',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}>
            
            {/* Toolbar Panel */}
            <div style={{
              background: '#0a0a0a',
              padding: '12px 24px',
              borderBottom: '1px solid rgba(255, 59, 59, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              color: '#8c8c8c',
              userSelect: 'none',
              zIndex: 2003,
            }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={handleZoomOut}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    color: '#e5e5e5',
                    borderRadius: '4px',
                    padding: '4px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,59,59,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
                >
                  <FiZoomOut size={12} /> OUT
                </button>
                <button
                  onClick={handleZoomIn}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    color: '#e5e5e5',
                    borderRadius: '4px',
                    padding: '4px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,59,59,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
                >
                  <FiZoomIn size={12} /> IN
                </button>
                <span style={{ display: 'inline-flex', alignItems: 'center', paddingLeft: '8px', color: '#ff3b3b' }}>
                  SCALE: {Math.round(zoom * 100)}%
                </span>
              </div>

              <button
                onClick={handleDownload}
                style={{
                  background: 'rgba(255,59,59,0.04)',
                  border: '1px solid rgba(255,59,59,0.25)',
                  color: '#ff3b3b',
                  borderRadius: '4px',
                  padding: '6px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  letterSpacing: '0.5px',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,59,59,0.12)';
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 59, 59, 0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,59,59,0.04)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <FiDownload size={13} /> DOWNLOAD (.MD)
              </button>
            </div>

            {/* Scrollable Document Container */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '30px 24px',
              display: 'flex',
              justifyContent: 'center',
              scrollBehavior: 'smooth',
            }}>
              
              {/* Document Dossier Sheet */}
              <div style={{
                width: '100%',
                maxWidth: '610px',
                background: '#101010',
                border: '1px solid rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                padding: '36px 28px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                transform: `scale(${zoom})`,
                transformOrigin: 'top center',
                transition: 'transform 0.15s ease-out',
                color: '#e5e5e5',
                lineHeight: '1.6',
                fontFamily: 'Inter, sans-serif',
              }}>
                
                {/* Profile Brief header */}
                <div style={{
                  borderBottom: '1.5px solid rgba(255, 59, 59, 0.15)',
                  paddingBottom: '14px',
                  marginBottom: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}>
                  <div>
                    <h1 style={{
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '20px',
                      fontWeight: 800,
                      letterSpacing: '1px',
                      color: '#ffffff',
                      textTransform: 'uppercase',
                      marginBottom: '2px',
                    }}>
                      Assis Panda
                    </h1>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#8c8c8c' }}>
                      SYS_DOSSIER: candidate_record.txt
                    </div>
                  </div>
                  
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '8.5px',
                    color: '#8c8c8c',
                    textAlign: 'right',
                    lineHeight: '1.4',
                  }}>
                    <div>CLASS: SEC-OPS // DEV</div>
                    <div>EXPORTS: GZ_VERIFIED</div>
                    <div>LOC: GUJARAT, INDIA</div>
                  </div>
                </div>

                {/* Profile Contact Details row */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.01)',
                  border: '1px solid rgba(255, 255, 255, 0.03)',
                  borderRadius: '6px',
                  padding: '10px 14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '11px',
                  fontFamily: 'JetBrains Mono, monospace',
                  marginBottom: '24px',
                  color: '#8c8c8c',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}>
                  <div>
                    <span style={{ color: '#ff3b3b' }}>EMAIL:</span> assispanda87@gmail.com
                  </div>
                  <div>
                    <span style={{ color: '#ff3b3b' }}>PHONE:</span> +91 9860596829
                  </div>
                  <div>
                    <span style={{ color: '#ff3b3b' }}>LINKEDIN:</span>{' '}
                    <a
                      href="https://linkedin.com/in/assis-panda-54b720295"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open("https://linkedin.com/in/assis-panda-54b720295", "_blank", "noopener,noreferrer");
                      }}
                      style={{ color: '#8c8c8c', textDecoration: 'none', transition: 'color 0.15s ease-out' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#ff3b3b'}
                      onMouseLeave={e => e.currentTarget.style.color = '#8c8c8c'}
                    >
                      Assis panda
                    </a>
                  </div>
                  <div>
                    <span style={{ color: '#ff3b3b' }}>GITHUB:</span>{' '}
                    <a
                      href="https://github.com/pandaassis27"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open("https://github.com/pandaassis27", "_blank", "noopener,noreferrer");
                      }}
                      style={{ color: '#8c8c8c', textDecoration: 'none', transition: 'color 0.15s ease-out' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#ff3b3b'}
                      onMouseLeave={e => e.currentTarget.style.color = '#8c8c8c'}
                    >
                      pandaassis27
                    </a>
                  </div>
                </div>

                {/* Resume Sections */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  
                  {/* Summary */}
                  <div>
                    <h3 style={{
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '10.5px',
                      fontWeight: 800,
                      color: '#ffffff',
                      borderBottom: '1px solid rgba(255, 59, 59, 0.1)',
                      paddingBottom: '3px',
                      marginBottom: '8px',
                      letterSpacing: '1px',
                    }}>
                      01. CLASSIFIED OPERATIONAL BRIEF
                    </h3>
                    <p style={{ fontSize: '11.5px', color: '#8c8c8c', textAlign: 'justify', lineHeight: '1.6' }}>
                      Motivated and cybersecurity-focused Computer Science Engineering student with practical exposure to network security, ethical hacking, and vulnerability assessment. Completed multiple internships including a 6-month virtual Cybersecurity Internship at UptoSkills, gaining hands-on experience with industry-standard security tools and attack analysis techniques. Possesses strong knowledge of OWASP Top 10 vulnerabilities, penetration testing fundamentals, and security best practices. Passionate about identifying, analyzing, and mitigating security risks while continuously expanding technical expertise.
                    </p>
                  </div>

                  {/* Education */}
                  <div>
                    <h3 style={{
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '10.5px',
                      fontWeight: 800,
                      color: '#ffffff',
                      borderBottom: '1px solid rgba(255, 59, 59, 0.1)',
                      paddingBottom: '3px',
                      marginBottom: '8px',
                      letterSpacing: '1px',
                    }}>
                      02. ACADEMIC DOSSIER
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', fontSize: '11.5px' }}>
                        <div>
                          <strong style={{ color: '#ffffff' }}>B.Tech in Computer Science Engineering</strong>
                          <div style={{ color: '#8c8c8c', fontSize: '10px', marginTop: '1px' }}>
                            ITM Vocational University, Gujarat // Semester V
                          </div>
                        </div>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#ff3b3b' }}>
                          2023 - 2027
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', fontSize: '11.5px', borderTop: '1px solid rgba(255,255,255,0.02)', paddingTop: '6px' }}>
                        <div>
                          <strong style={{ color: '#ffffff' }}>HSC (Class XII) // 60%</strong>
                          <div style={{ color: '#8c8c8c', fontSize: '10px', marginTop: '1px' }}>
                            Motilal Kanjilal Junior College
                          </div>
                        </div>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#ff3b3b' }}>
                          Completed 2023
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Internships Timeline */}
                  <div>
                    <h3 style={{
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '10.5px',
                      fontWeight: 800,
                      color: '#ffffff',
                      borderBottom: '1px solid rgba(255, 59, 59, 0.1)',
                      paddingBottom: '3px',
                      marginBottom: '12px',
                      letterSpacing: '1px',
                    }}>
                      03. PROFESSIONAL INTERNSHIP TIMELINE
                    </h3>
                    
                    <div style={{
                      position: 'relative',
                      borderLeft: '1px solid rgba(255, 59, 59, 0.15)',
                      paddingLeft: '16px',
                      marginLeft: '6px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                    }}>
                      {/* Node 1: UptoSkills */}
                      <div style={{ position: 'relative' }}>
                        {/* Timeline point */}
                        <div style={{ position: 'absolute', left: '-20.5px', top: '4px', width: '8px', height: '8px', borderRadius: '50%', background: '#ff3b3b', border: '2px solid #101010' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px' }}>
                          <strong style={{ color: '#ffffff' }}>Cybersecurity Intern // UptoSkills</strong>
                          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9.5px', color: '#ff3b3b' }}>6 Months (Virtual)</span>
                        </div>
                        <ul style={{ paddingLeft: '12px', color: '#8c8c8c', fontSize: '10.5px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <li>Acquired hands-on vulnerability assessments and scanning procedures with Nmap and Kali Linux.</li>
                          <li>Parsed networks and mapped capture profiles using Wireshark.</li>
                          <li>Evaluated risk mitigation for OWASP Top 10 vulnerabilities (SQLi, XSS, broken authentication, cryptographic failures, security misconfigurations, vulnerable components, and broken access controls).</li>
                          <li>Achieved Runner-up position in the UptoSkills league of Red VS Blue cyber game.</li>
                        </ul>
                      </div>

                      {/* Node 2: Cisco NIIT */}
                      <div style={{ position: 'relative' }}>
                        {/* Timeline point */}
                        <div style={{ position: 'absolute', left: '-20.5px', top: '4px', width: '8px', height: '8px', borderRadius: '50%', background: '#ff3b3b', border: '2px solid #101010' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px' }}>
                          <strong style={{ color: '#ffffff' }}>Cybersecurity Essentials Intern // Cisco x NIIT</strong>
                          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9.5px', color: '#ff3b3b' }}>Completed</span>
                        </div>
                        <ul style={{ paddingLeft: '12px', color: '#8c8c8c', fontSize: '10.5px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <li>Gained core credentials in network security layers, packet encryption, cryptographic fundamentals, and secure coding patterns.</li>
                        </ul>
                      </div>

                      {/* Node 3: CodSoft */}
                      <div style={{ position: 'relative' }}>
                        {/* Timeline point */}
                        <div style={{ position: 'absolute', left: '-20.5px', top: '4px', width: '8px', height: '8px', borderRadius: '50%', background: '#ff3b3b', border: '2px solid #101010' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px' }}>
                          <strong style={{ color: '#ffffff' }}>Web Development Intern // CodSoft</strong>
                          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9.5px', color: '#ff3b3b' }}>Completed</span>
                        </div>
                        <ul style={{ paddingLeft: '12px', color: '#8c8c8c', fontSize: '10.5px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <li>Developed fully responsive user layouts, converting Canva layout blueprints to clean HTML, CSS, and JS.</li>
                        </ul>
                      </div>

                      {/* Node 4: Suretrust */}
                      <div style={{ position: 'relative' }}>
                        {/* Timeline point */}
                        <div style={{ position: 'absolute', left: '-20.5px', top: '4px', width: '8px', height: '8px', borderRadius: '50%', background: '#ff3b3b', border: '2px solid #101010' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px' }}>
                          <strong style={{ color: '#ffffff' }}>Generative AI Intern // Suretrust Education</strong>
                          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '9.5px', color: '#ff3b3b' }}>Completed</span>
                        </div>
                        <ul style={{ paddingLeft: '12px', color: '#8c8c8c', fontSize: '10.5px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <li>Studied prompt designs, automation triggers, and AI-driven model workflows.</li>
                        </ul>
                      </div>
                    </div>

                  </div>

                  {/* Skills Grid */}
                  <div>
                    <h3 style={{
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '10.5px',
                      fontWeight: 800,
                      color: '#ffffff',
                      borderBottom: '1px solid rgba(255, 59, 59, 0.1)',
                      paddingBottom: '3px',
                      marginBottom: '8px',
                      letterSpacing: '1px',
                    }}>
                      04. SYSTEM SKILLS INDEX
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px' }}>
                      <div>
                        <strong style={{ color: '#ffffff', display: 'inline-block', width: '130px', fontFamily: 'JetBrains Mono, monospace' }}>PROGRAMMING:</strong>
                        <span style={{ color: '#8c8c8c' }}>Python, HTML, CSS, JavaScript (ES6+)</span>
                      </div>
                      <div>
                        <strong style={{ color: '#ffffff', display: 'inline-block', width: '130px', fontFamily: 'JetBrains Mono, monospace' }}>CYBERSECURITY:</strong>
                        <span style={{ color: '#8c8c8c' }}>Network Security, Threat Analysis, Vulnerability Assessment, Web Security (OWASP 10), Basic Pen Testing, Cryptography</span>
                      </div>
                      <div>
                        <strong style={{ color: '#ffffff', display: 'inline-block', width: '130px', fontFamily: 'JetBrains Mono, monospace' }}>TOOLS & SYSTEM:</strong>
                        <span style={{ color: '#8c8c8c' }}>Wireshark, Kali Linux, Nmap, Burp Suite, Metasploit, Nikto, Gobuster, Canva</span>
                      </div>
                      <div>
                        <strong style={{ color: '#ffffff', display: 'inline-block', width: '130px', fontFamily: 'JetBrains Mono, monospace' }}>SOFT_SKILLS:</strong>
                        <span style={{ color: '#8c8c8c' }}>Problem Solving, Communication, Critical Thinking, Research, Ethical Mindset</span>
                      </div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h3 style={{
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '10.5px',
                      fontWeight: 800,
                      color: '#ffffff',
                      borderBottom: '1px solid rgba(255, 59, 59, 0.1)',
                      paddingBottom: '3px',
                      marginBottom: '10px',
                      letterSpacing: '1px',
                    }}>
                      05. COMPLETED PROJECT REGISTRIES
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11px', color: '#8c8c8c' }}>
                      <div>
                        <strong style={{ color: '#ffffff' }}>1. E-commerce Website:</strong> Online shopping platform developed with HTML, CSS, and JS focusing on responsive design, clean UI layouts, and user accessibility.
                      </div>
                      <div>
                        <strong style={{ color: '#ffffff' }}>2. Steganography in Action:</strong> Security module hiding encrypted textual payloads inside image pixels using the LSB (Least Significant Bit) technique.
                      </div>
                      <div>
                        <strong style={{ color: '#ffffff' }}>3. DoS Attack Simulation:</strong> Lab simulation mapping denial of service flooding metrics inside controlled networks to evaluate packet filters and mitigation plans.
                      </div>
                    </div>
                  </div>

                  {/* Certifications list */}
                  <div>
                    <h3 style={{
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '10.5px',
                      fontWeight: 800,
                      color: '#ffffff',
                      borderBottom: '1px solid rgba(255, 59, 59, 0.1)',
                      paddingBottom: '3px',
                      marginBottom: '8px',
                      letterSpacing: '1px',
                    }}>
                      06. SYSTEM CREDENTIALS & CERTIFICATIONS
                    </h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '4px 16px',
                      fontSize: '10.5px',
                      color: '#8c8c8c',
                    }}>
                      <div>• Cisco Cybersecurity Internship</div>
                      <div>• NISM Stock Market Certification</div>
                      <div>• Cryptography & Cryptocurrencies</div>
                      <div>• Introduction to Linux (LFS101)</div>
                      <div>• CAPT | Hackviser accreditation</div>
                      <div>• TryHackMe Advent of Cyber 2025</div>
                      <div>• Python Programming | Vaultofcodes</div>
                      <div>• Junior Cybersecurity Analyst | CISCO</div>
                      <div>• CAISR AI Security | Red Team Leaders</div>
                      <div>• CCEP Cyber Educator | Red Team Leaders</div>
                    </div>
                  </div>

                  {/* Achievements Terminal Box */}
                  <div>
                    <h3 style={{
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '10.5px',
                      fontWeight: 800,
                      color: '#ffffff',
                      borderBottom: '1px solid rgba(255, 59, 59, 0.1)',
                      paddingBottom: '3px',
                      marginBottom: '8px',
                      letterSpacing: '1px',
                    }}>
                      07. SYSTEM_ACHIEVEMENTS_SHELL
                    </h3>
                    <div style={{
                      background: '#070707',
                      border: '1px solid rgba(255, 255, 255, 0.02)',
                      borderRadius: '6px',
                      padding: '12px 16px',
                      fontSize: '10.5px',
                      fontFamily: 'JetBrains Mono, monospace',
                      color: '#8c8c8c',
                      lineHeight: '1.7',
                    }}>
                      <div>&gt; echo $ACHIEVEMENTS</div>
                      <div style={{ color: '#e5e5e5', paddingLeft: '8px' }}>
                        - Certified in stock market operations by NISM.<br />
                        - Runner-up in the league of Red VS Blue game from Uptoskills.<br />
                        - Deployed multiple custom web application repositories.<br />
                        - Completed 4 distinct professional technology internships.<br />
                        - Active ethical hacking lab participation and continuous learning.
                      </div>
                      <div style={{ marginTop: '8px' }}>&gt; echo $STRENGTHS</div>
                      <div style={{ color: '#ff3b3b', paddingLeft: '8px' }}>
                        - Analytical Thinking, Problem Solving, Attention to Detail, Quick Learner, Hands-on Mindset, Ethical & Responsible Approach.
                      </div>
                    </div>
                  </div>

                  {/* Hobbies & Interests */}
                  <div>
                    <h3 style={{
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '10.5px',
                      fontWeight: 800,
                      color: '#ffffff',
                      borderBottom: '1px solid rgba(255, 59, 59, 0.1)',
                      paddingBottom: '3px',
                      marginBottom: '10px',
                      letterSpacing: '1px',
                    }}>
                      08. INTERESTS & HOBBIES
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {['Coding & Web Dev', 'Hacking Labs', 'Technical Podcasts', 'Ethical Hacking Practice', 'Technical Blogs', 'YouTube Learning', 'Sports & Fitness'].map(h => (
                        <span key={h} style={{ fontSize: '9.5px', fontFamily: 'JetBrains Mono, monospace', padding: '3px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', color: '#8c8c8c' }}>{h}</span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Digital Stamp verification footer */}
                <div style={{
                  marginTop: '28px',
                  borderTop: '1px dashed rgba(255,255,255,0.04)',
                  paddingTop: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '9px',
                  color: '#8c8c8c',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <FiCpu />
                    <span>ENCRYPTED PROFILE EXPORT V2.5 // INTEGRITY_CHECK: PASS</span>
                  </div>
                  <div style={{
                    border: '1.5px solid #ff3b3b',
                    borderRadius: '4px',
                    padding: '3px 7px',
                    color: '#ff3b3b',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px',
                    textTransform: 'uppercase',
                    userSelect: 'none',
                    transform: 'rotate(-3deg)',
                    boxShadow: '0 0 6px rgba(255,59,59,0.08)'
                  }}>
                    <FiCheck size={8} /> Panda Signed
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeViewer;
