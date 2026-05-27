import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBook, FiShield, FiCpu, FiCode, FiTarget, FiActivity } from 'react-icons/fi';

const BentoCard = ({ title, subtitle, desc, icon: Icon, spanCols = 1, spanRows = 1, extraVisual = null, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      style={{
        gridColumn: `span ${spanCols}`,
        gridRow: `span ${spanRows}`,
        background: 'rgba(17, 17, 17, 0.75)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 59, 59, 0.12)',
        borderRadius: '16px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
      }}
      className="bento-card"
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(255, 59, 59, 0.35)';
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(255, 59, 59, 0.03), 0 20px 40px rgba(0, 0, 0, 0.8)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255, 59, 59, 0.12)';
        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.6)';
      }}
    >
      {/* Corner laser accents */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '6px', borderTop: '1.5px solid #ff3b3b', borderLeft: '1.5px solid #ff3b3b', opacity: 0.4 }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '6px', height: '6px', borderBottom: '1.5px solid #ff3b3b', borderRight: '1.5px solid #ff3b3b', opacity: 0.4 }} />

      <div>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div>
            <div style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: '14px',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '0.5px'
            }}>
              {title}
            </div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10.5px',
              color: '#ff3b3b',
              marginTop: '4px',
              letterSpacing: '0.5px'
            }}>
              {subtitle}
            </div>
          </div>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '6px',
            background: 'rgba(255,59,59,0.06)',
            border: '1px solid rgba(255,59,59,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ff3b3b'
          }}>
            <Icon size={15} />
          </div>
        </div>

        {/* Description */}
        <p style={{
          fontSize: '12.5px',
          color: '#8c8c8c',
          lineHeight: '1.65',
          marginBottom: '20px'
        }}>
          {desc}
        </p>
      </div>

      {/* Extra custom visual widget inside card */}
      {extraVisual && (
        <div style={{ marginTop: 'auto', width: '100%' }}>
          {extraVisual}
        </div>
      )}
    </motion.div>
  );
};

const Journey = () => {
  const containerRef = useRef(null);

  return (
    <section id="journey" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      {/* Background accents */}
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 59, 59, 0.02) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag">06. Experience & Education</div>
          <h2 className="section-title">
            Journey Timeline
          </h2>
          <div className="section-divider" style={{ margin: '0 auto 20px' }} />
          <p style={{ color: '#8c8c8c', maxWidth: '500px', margin: '0 auto', fontSize: '15px' }}>
            A premium bento dashboard tracking my professional steps, internships, and core training.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          ref={containerRef}
          className="bento-grid"
        >
          {/* Card 1: B.Tech CSE (2x1 grid card) */}
          <BentoCard
            title="B.Tech in Computer Science Engineering"
            subtitle="ITM Vocational University, Gujarat // 2023 - 2027"
            desc="Currently pursuing my Bachelor of Technology degree. Building a rigorous core foundation in software engineering, algorithmic design, databases, networks, and secure coding practices."
            icon={FiBook}
            spanCols={2}
            index={0}
            extraVisual={
              <div style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px'
              }}>
                <div>[STATUS: ENROLLED]</div>
                <div style={{ color: '#ff3b3b' }}>CURRICULUM: ACTIVE // SEM_V</div>
              </div>
            }
          />

          {/* Card 2: UptoSkills Cybersecurity Intern (1x2 grid card) */}
          <BentoCard
            title="Cybersecurity Intern"
            subtitle="UptoSkills // 6 Months (Virtual)"
            desc="Acquired practical exposure in threat analysis, vulnerability scanning, and defensive tactics. Gained working knowledge of Ethical Hacking, information security fundamentals, and scan audits."
            icon={FiShield}
            spanCols={1}
            spanRows={2}
            index={1}
            extraVisual={
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                <div style={{ fontSize: '9px', color: '#ff3b3b', letterSpacing: '0.5px' }}>THREAT DETECTION LAB LOGS:</div>
                <div style={{
                  background: '#0d0d0d',
                  borderRadius: '6px',
                  padding: '10px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '9.5px',
                  color: '#8c8c8c',
                  border: '1px solid rgba(255,255,255,0.02)'
                }}>
                  <div>&gt; Nmap scan target resolved</div>
                  <div>&gt; Packet capture analysis done</div>
                  <div>&gt; SQLi and XSS audits checked</div>
                  <div style={{ color: '#ff3b3b' }}>&gt; OWASP TOP 10 MITIGATION</div>
                </div>
              </div>
            }
          />

          {/* Card 3: Cisco Network Security (1x1 grid card) */}
          <BentoCard
            title="Network Security Intern"
            subtitle="Cisco x NIIT Foundation"
            desc="Completed the Cybersecurity Essentials track under Cisco Networking Academy, analyzing network layers, packet encryption, and structural firewall configurations."
            icon={FiCpu}
            spanCols={1}
            index={2}
            extraVisual={
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '9px', background: 'rgba(255,59,59,0.08)', border: '1px solid rgba(255,59,59,0.2)', padding: '2px 6px', borderRadius: '3px', color: '#ff3b3b' }}>Cisco NetAcad</span>
                <span style={{ fontSize: '9px', background: 'rgba(255,59,59,0.08)', border: '1px solid rgba(255,59,59,0.2)', padding: '2px 6px', borderRadius: '3px', color: '#ff3b3b' }}>Essentials</span>
              </div>
            }
          />

          {/* Card 4: CodSoft Web Dev (1x1 grid card) */}
          <BentoCard
            title="Web Development Intern"
            subtitle="CodSoft"
            desc="Constructed responsive web interfaces translating Canva layout blueprints into clean HTML, CSS, and JS structures while adhering to UI design layouts."
            icon={FiCode}
            spanCols={1}
            index={3}
            extraVisual={
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '9px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '3px', color: '#e5e5e5' }}>HTML5/CSS3</span>
                <span style={{ fontSize: '9px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '2px 6px', borderRadius: '3px', color: '#e5e5e5' }}>JS responsive</span>
              </div>
            }
          />

          {/* Card 5: Suretrust Generative AI (2x1 grid card) */}
          <BentoCard
            title="Generative AI Intern"
            subtitle="Suretrust Pro Education"
            desc="Explored prompt engineering techniques, model testing setups, AI automation triggers, and AI-driven automation workflows to enhance productivity."
            icon={FiTarget}
            spanCols={2}
            index={4}
            extraVisual={
              <div style={{
                background: 'rgba(255,59,59,0.02)',
                border: '1px solid rgba(255,59,59,0.1)',
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px'
              }}>
                <FiActivity className="pulse-glow-animation" style={{ color: '#ff3b3b' }} />
                <span>INTEGRATION STATUS: NOMINAL // AICT APPROVED</span>
              </div>
            }
          />
        </div>
      </div>

      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          max-width: 1000px;
          margin: 0 auto;
        }
        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .bento-card {
            grid-column: span 2 !important;
            grid-row: span 1 !important;
          }
        }
        @media (max-width: 600px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-card {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Journey;
