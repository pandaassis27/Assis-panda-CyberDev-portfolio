import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

import projectDos from '../assets/project_dos.png';
import projectEcommerce from '../assets/project_ecommerce.png';
import projectStego from '../assets/project_stego.png';
import projectChat from '../assets/project_chat.png';
import projectThreat from '../assets/project_threat.png';

const projects = [
  {
    id: 1,
    title: 'DoS Attack Simulation',
    description: 'Simulated Denial of Service (DoS) attacks in a controlled lab to analyze network impact, verify packet drop rate metrics, and evaluate firewall mitigation techniques.',
    tags: ['Network Security', 'DoS Simulation', 'Wireshark', 'Firewall Mitigation'],
    image: projectDos,
    github: 'https://github.com/pandaassis27',
    demo: '#',
    badge: 'Network Sec',
  },
  {
    id: 2,
    title: 'E-commerce Website',
    description: 'Developed a feature-rich, responsive e-commerce storefront. Features optimized product queries, structured layouts, and modern security checkout overlays.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Secure Checkout'],
    image: projectEcommerce,
    github: 'https://github.com/pandaassis27',
    demo: '#',
    badge: 'Web Dev',
  },
  {
    id: 3,
    title: 'Steganography in Action',
    description: 'An image-based steganography utility implementing the LSB (Least Significant Bit) technique to securely hide, encrypt, and extract confidential text payload inside cover images.',
    tags: ['Python', 'Cryptography', 'LSB Steganography', 'Image Steg'],
    image: projectStego,
    github: 'https://github.com/pandaassis27',
    demo: '#',
    badge: 'Cryptography',
  },
  {
    id: 4,
    title: 'SecureChat',
    description: 'Real-time encrypted MERN chat application featuring JWT user authentication, secure end-to-end encrypted messaging, and live online user detection via WebSocket channels.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
    image: projectChat,
    github: 'https://github.com/pandaassis27',
    demo: '#',
    badge: 'MERN Chat',
  },
  {
    id: 5,
    title: 'ThreatWatch Dashboard',
    description: 'A modern cybersecurity monitoring dashboard built using the MERN stack for tracking suspicious activities, security alerts and real-time system analytics.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js', 'Tailwind CSS'],
    image: projectThreat,
    github: 'https://github.com/pandaassis27',
    demo: '#',
    badge: 'MERN + Security',
  },
];

// Interactive Micro-Widgets inside Project Cards (Visible on Hover)
const ProjectPreviewWidget = ({ id }) => {
  // DoS Attack Simulation Widget
  if (id === 1) {
    const [packets, setPackets] = useState(140200);
    useEffect(() => {
      const interval = setInterval(() => {
        setPackets(prev => prev + Math.floor(Math.random() * 2500) - 1200);
      }, 500);
      return () => clearInterval(interval);
    }, []);

    return (
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: 'JetBrains Mono, monospace', fontSize: '9px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,59,59,0.15)', paddingBottom: '6px' }}>
          <span style={{ color: '#ff3b3b', fontWeight: 'bold' }}>DOS_SIMULATION</span>
          <span style={{ animation: 'pulse-glow 1s infinite', color: '#ff3b3b', fontWeight: 'bold' }}>● ATTACK_ACTIVE</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px 0' }}>
          <div>
            <div style={{ color: '#8c8c8c', fontSize: '8px' }}>TARGET_IP</div>
            <div style={{ color: '#ffffff', fontWeight: 'bold' }}>192.168.1.1</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: '#8c8c8c', fontSize: '8px' }}>PACKETS/SEC</div>
            <div style={{ color: '#ff3b3b', fontWeight: 'bold' }}>{packets.toLocaleString()}</div>
          </div>
        </div>
        {/* Animated red wave graph */}
        <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', height: '28px', marginTop: '4px' }}>
          {Array.from({ length: 28 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: [8, Math.floor(Math.random() * 22) + 4, 8] }}
              transition={{ repeat: Infinity, duration: 1 + Math.random(), ease: 'easeInOut' }}
              style={{ width: '3px', background: '#ff3b3b', opacity: 0.6 }}
            />
          ))}
        </div>
      </div>
    );
  }

  // E-commerce Website Checkout Panel Widget (CART_CHECKOUT)
  if (id === 2) {
    return (
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: '#8c8c8c' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '6px' }}>
          <span style={{ color: '#ffffff', fontWeight: 'bold' }}>CART_CHECKOUT</span>
          <span style={{ color: '#ff3b3b', fontWeight: 'bold' }}>TOTAL: $70.20</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', margin: '8px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>&gt; Subtotal:</span>
            <span style={{ color: '#e5e5e5' }}>$78.00</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>&gt; Coupon code (CYBER10):</span>
            <span style={{ color: '#ff3b3b' }}>-10%</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ff3b3b', border: '1px solid rgba(255,59,59,0.15)', background: 'rgba(255,59,59,0.03)', padding: '6px 8px', borderRadius: '4px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff3b3b' }} />
          <span style={{ fontSize: '8px', fontWeight: 'bold' }}>ORDER SECURED VIA TLS 1.3</span>
        </div>
      </div>
    );
  }

  // Steganography LSB Matrix Decoder Widget (LSB_DECODER)
  if (id === 3) {
    const [decoded, setDecoded] = useState(false);
    useEffect(() => {
      const interval = setInterval(() => {
        setDecoded(prev => !prev);
      }, 3000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: 'JetBrains Mono, monospace', fontSize: '9px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,59,59,0.15)', paddingBottom: '6px' }}>
          <span style={{ color: '#ff3b3b', fontWeight: 'bold' }}>LSB_DECODER</span>
          <span style={{ color: '#8c8c8c' }}>BIT_DEPTH: 8B</span>
        </div>
        <div style={{ fontSize: '8.5px', color: '#8c8c8c', margin: '6px 0', lineBreak: 'anywhere' }}>
          {decoded ? '10101100 01010111 11000100 01101011' : '00101101 11010011 00011100 11101010'}
        </div>
        <AnimatePresence mode="wait">
          {decoded ? (
            <motion.div
              key="decoded"
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{ color: '#ff3b3b', background: 'rgba(255,59,59,0.08)', border: '1px solid rgba(255,59,59,0.2)', padding: '5px', borderRadius: '4px', fontWeight: 'bold', textAlign: 'center', fontSize: '8px' }}
            >
              DECODED: "SECRET_PAYLOAD"
            </motion.div>
          ) : (
            <motion.div
              key="decoding"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              style={{ color: '#8c8c8c', padding: '5px', textAlign: 'center', fontSize: '8px' }}
            >
              Analyzing image bits...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // SecureChat Websocket Widget
  if (id === 4) {
    const [status, setStatus] = useState('CONNECTING');
    const [messages, setMessages] = useState([
      { sender: 'User', text: 'Initializing encrypted channel...' },
    ]);

    useEffect(() => {
      const statusTimeout = setTimeout(() => {
        setStatus('CONNECTED');
        setMessages(prev => [
          ...prev,
          { sender: 'Socket.io', text: 'Handshake complete.' },
          { sender: 'Alice', text: 'Hey Assis, is the MERN app E2E encrypted?' },
          { sender: 'Assis.P', text: 'Yes, AES-256 chat payload.' },
        ]);
      }, 1500);

      return () => clearTimeout(statusTimeout);
    }, []);

    return (
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: 'JetBrains Mono, monospace', fontSize: '8.5px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,59,59,0.15)', paddingBottom: '6px', color: '#ff3b3b', fontWeight: 'bold' }}>
          <span>SECURE_CHAT</span>
          <span style={{ color: status === 'CONNECTED' ? '#22c55e' : '#ff3b3b' }}>● {status}</span>
        </div>
        <div style={{ background: '#080808', border: '1px solid rgba(255,255,255,0.02)', borderRadius: '4px', padding: '8px', minHeight: '80px', color: '#8c8c8c', display: 'flex', flexDirection: 'column', gap: '3px', justifyContent: 'flex-end', overflow: 'hidden' }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
              <span style={{ color: msg.sender === 'Assis.P' ? '#ff3b3b' : msg.sender === 'Socket.io' ? '#22c55e' : '#ffffff' }}>[{msg.sender}]</span> {msg.text}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ThreatWatch Dashboard Widget
  if (id === 5) {
    const [alertLevel, setAlertLevel] = useState(0);
    const alerts = [
      'IDS: Listening on interface enp0s3...',
      'SEC: Blocked brute force from 185.220.101.5',
      'ALRT: Suspicious activity logged on sub-node :443',
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setAlertLevel(prev => (prev + 1) % alerts.length);
      }, 2000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', fontFamily: 'JetBrains Mono, monospace', fontSize: '8.5px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,59,59,0.15)', paddingBottom: '6px', color: '#ff3b3b', fontWeight: 'bold' }}>
          <span>THREAT_WATCH</span>
          <span>SENSORS: ACTIVE</span>
        </div>
        <div style={{ background: '#080808', border: '1px solid rgba(255,255,255,0.02)', borderRadius: '4px', padding: '8px', minHeight: '80px', color: '#8c8c8c', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ opacity: 0.5 }}>&gt; {alerts[(alertLevel + alerts.length - 2) % alerts.length]}</div>
          <div style={{ opacity: 0.7 }}>&gt; {alerts[(alertLevel + alerts.length - 1) % alerts.length]}</div>
          <div style={{ color: alerts[alertLevel].startsWith('ALRT') ? '#ff3b3b' : '#e5e5e5', fontWeight: alerts[alertLevel].startsWith('ALRT') ? 'bold' : 'normal' }}>
            &gt; {alerts[alertLevel]}
            <span className="terminal-blink" style={{ color: '#ff3b3b' }}>█</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // 3D Tilt States
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Smooth 3D rotation mapping
    setRotateX(-y / (box.height / 2) * 5);
    setRotateY(x / (box.width / 2) * 5);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 3) * 0.1 + 0.15, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      className="project-card"
    >
      {/* Top visual preview image wrapper */}
      <div className="project-card-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-card-image"
          loading="lazy"
        />

        {/* Theme color gradient overlay */}
        <div className="project-card-overlay" />

        {/* Live micro-widget terminal layer on hover */}
        <div className="project-card-widget-layer">
          <ProjectPreviewWidget id={project.id} />
        </div>

        {/* Badge */}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '9px',
          color: '#ff3b3b',
          background: 'rgba(255, 59, 59, 0.08)',
          border: '1px solid rgba(255, 59, 59, 0.25)',
          padding: '3px 8px',
          borderRadius: '4px',
          letterSpacing: '0.5px',
          zIndex: 3
        }}>
          {project.badge}
        </div>
      </div>

      {/* Content */}
      <div className="project-card-content" style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
        <h3 className="project-card-title">
          {project.title}
        </h3>

        <p className="project-card-description">
          {project.description}
        </p>

        {/* Tags */}
        <div className="project-card-tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-card-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="project-card-actions">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              window.open(project.github, '_blank', 'noopener,noreferrer');
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              flex: 1,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '9px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '6px',
              color: '#8c8c8c',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.color = '#8c8c8c';
            }}
          >
            <FiGithub size={12} /> GitHub
          </motion.a>

          <motion.a
            href={project.demo}
            onClick={e => {
              if (project.demo && project.demo !== '#') {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.demo, '_blank', 'noopener,noreferrer');
              }
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              flex: 1,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '9px',
              background: 'rgba(255,59,59,0.04)',
              border: '1px solid rgba(255,59,59,0.25)',
              borderRadius: '6px',
              color: '#ff3b3b',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,59,59,0.08)';
              e.currentTarget.style.boxShadow = '0 0 10px rgba(255,59,59,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,59,59,0.04)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <FiExternalLink size={12} /> Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,59,59,0.02) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <div className="section-tag">03. Portfolio</div>
            <h2 className="section-title">
              Featured Projects
            </h2>
            <div className="section-divider" style={{ margin: '0 auto 20px' }} />
            <p style={{ color: '#8c8c8c', maxWidth: '500px', margin: '0 auto', fontSize: '15px' }}>
              A selection of projects at the intersection of security and full-stack development.
            </p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
