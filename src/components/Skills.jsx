import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb,
  SiLinux, SiWireshark, SiPython, SiJavascript, SiHtml5, SiCss
} from 'react-icons/si';
import { FiShield, FiSearch, FiTerminal, FiDatabase, FiLock, FiGlobe, FiCpu, FiZap, FiTarget } from 'react-icons/fi';

const skillCategories = [
  {
    label: 'Cybersecurity',
    tag: 'Infosec',
    color: '#ff3b3b',
    skills: [
      { name: 'Vulnerability Assessment', icon: FiShield, desc: 'Identifying security weaknesses in target environments' },
      { name: 'Threat Analysis', icon: FiSearch, desc: 'Analyzing potential threat logs and vector attacks' },
      { name: 'Basic Penetration Testing', icon: FiTerminal, desc: 'Controlled vulnerability verification testing' },
      { name: 'Cryptography Fundamentals', icon: FiLock, desc: 'Payload encryption and secure hashing patterns' }
    ]
  },
  {
    label: 'Web Security',
    tag: 'AppSec',
    color: '#ff3b3b',
    skills: [
      { name: 'OWASP Top 10', icon: FiShield, desc: 'Mitigating standard web application risks' },
      { name: 'SQL Injection Audits', icon: FiDatabase, desc: 'Testing database inputs for SQLi injection vulnerabilities' },
      { name: 'XSS Mitigations', icon: FiShield, desc: 'Validating scripts to prevent cross-site execution' },
      { name: 'Authentication Security', icon: FiLock, desc: 'Verifying session auth rules and token validation' }
    ]
  },
  {
    label: 'MERN Stack',
    tag: 'Dev',
    color: '#ff3b3b',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, desc: 'NoSQL data store configuration and schema design' },
      { name: 'Express.js', icon: SiExpress, desc: 'REST API routing design and secure middlewares' },
      { name: 'React.js', icon: SiReact, desc: 'Interactive client rendering user interfaces' },
      { name: 'Node.js', icon: SiNodedotjs, desc: 'Asynchronous server runtimes and backend logic' }
    ]
  },
  {
    label: 'Networking',
    tag: 'NetSec',
    color: '#ff3b3b',
    skills: [
      { name: 'Network Security Essentials', icon: FiGlobe, desc: 'Mapping OSI layers and packet protocol setups' },
      { name: 'Firewall Configurations', icon: FiShield, desc: 'Designing network firewall filters and rules' },
      { name: 'Topology Design', icon: FiCpu, desc: 'Setting up secure virtual subnets and routing maps' }
    ]
  },
  {
    label: 'Tools & Platforms',
    tag: 'Toolkit',
    color: '#ff3b3b',
    skills: [
      { name: 'Wireshark', icon: SiWireshark, desc: 'Live packet intercepting and capture analysis' },
      { name: 'Kali Linux', icon: SiLinux, desc: 'Security auditing OS and Kali terminal suite' },
      { name: 'Nmap & Burp Suite', icon: FiSearch, desc: 'Active scanning and HTTP intercepting proxy' },
      { name: 'Metasploit & Nikto', icon: FiTerminal, desc: 'Exploit frameworks and web servers scanner' }
    ]
  },
  {
    label: 'Programming',
    tag: 'Code',
    color: '#ff3b3b',
    skills: [
      { name: 'Python Scripting', icon: SiPython, desc: 'Writing automated scripts for scanning and logs parsing' },
      { name: 'JavaScript (ES6+)', icon: SiJavascript, desc: 'Modern web scripting engine operations' },
      { name: 'HTML5 & CSS3', icon: SiHtml5, desc: 'Standard markup structures and visual design layouts' }
    ]
  },
  {
    label: 'AI & Emerging Tech',
    tag: 'Future',
    color: '#ff3b3b',
    skills: [
      { name: 'Generative AI Concepts', icon: FiZap, desc: 'Understanding model weights and generation patterns' },
      { name: 'Prompt Engineering', icon: FiTarget, desc: 'Structuring instructions for automated prompt testing' },
      { name: 'AI Driven Automations', icon: FiCpu, desc: 'Deploying model endpoints into automation workflows' }
    ]
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 59, 59, 0.03) 0%, transparent 70%)',
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
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="section-tag">02. Technical Arsenal</div>
            <h2 className="section-title">
              Skills & Expertise
            </h2>
            <div className="section-divider" style={{ margin: '0 auto 20px' }} />
            <p style={{ color: '#8c8c8c', maxWidth: '500px', margin: '0 auto', fontSize: '15px' }}>
              A structured overview of core technologies in web application development and offensive security.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {skillCategories.map((category, catI) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catI * 0.1, duration: 0.55 }}
                style={{
                  background: 'rgba(17, 17, 17, 0.8)',
                  backdropFilter: 'blur(16px)',
                  border: `1px solid rgba(255, 59, 59, 0.12)`,
                  borderRadius: '16px',
                  padding: '24px 20px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
                }}
              >
                {/* Visual header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid rgba(255, 59, 59, 0.08)', paddingBottom: '10px' }}>
                  <h3 style={{
                    fontFamily: 'Orbitron, monospace',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '1px',
                  }}>
                    {category.label}
                  </h3>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '9px',
                    color: '#ff3b3b',
                    background: 'rgba(255, 59, 59, 0.08)',
                    border: '1px solid rgba(255, 59, 59, 0.2)',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    letterSpacing: '1px',
                  }}>
                    {category.tag}
                  </span>
                </div>

                {/* Skill items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '8px 10px',
                        background: 'rgba(255, 255, 255, 0.01)',
                        border: '1px solid rgba(255, 255, 255, 0.03)',
                        borderRadius: '8px',
                        transition: 'all 0.2s ease-out',
                      }}
                      className="clickable"
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'rgba(255, 59, 59, 0.25)';
                        e.currentTarget.style.background = 'rgba(255, 59, 59, 0.02)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.03)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.01)';
                      }}
                    >
                      <div style={{
                        fontSize: '16px',
                        color: '#ff3b3b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        background: 'rgba(255, 59, 59, 0.06)',
                        border: '1px solid rgba(255, 59, 59, 0.15)',
                      }}>
                        <skill.icon />
                      </div>
                      <div>
                        <div style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '11px',
                          fontWeight: 600,
                          color: '#e5e5e5',
                        }}>
                          {skill.name}
                        </div>
                        <div style={{
                          fontSize: '9.5px',
                          color: '#8c8c8c',
                          marginTop: '1px',
                        }}>
                          {skill.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
