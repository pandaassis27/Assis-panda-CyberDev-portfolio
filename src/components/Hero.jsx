import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/pandaassis27', label: 'GitHub', color: '#ff3b3b' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/assis-panda-54b720295', label: 'LinkedIn', color: '#ff3b3b' },
  { icon: FiMail, href: 'mailto:assispanda87@gmail.com?subject=Portfolio Inquiry', label: 'Email', color: '#ff3b3b' },
];

const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      size: Math.random() * 1.2 + 0.4,
      alpha: Math.random() * 0.15 + 0.05,
      color: '#ff3b3b',
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Subtle Cyber Grid lines
      ctx.strokeStyle = 'rgba(255, 59, 59, 0.012)';
      ctx.lineWidth = 1;
      const gridSize = 90;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw node connection links
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(q => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(255, 59, 59, ${(1 - dist / 150) * 0.05})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        });
      });

      // Draw node dots
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

// Animated Vector-based Threat Map (Country-to-Country attacks)
const LiveAttackMap = ({ activeAttacks }) => {
  const MAP_NODES = [
    { name: 'USA', x: 70, y: 70 },
    { name: 'UK', x: 175, y: 50 },
    { name: 'Germany', x: 195, y: 52 },
    { name: 'Russia', x: 250, y: 40 },
    { name: 'India', x: 285, y: 108 },
    { name: 'China', x: 335, y: 75 },
    { name: 'Brazil', x: 105, y: 145 },
    { name: 'South Africa', x: 215, y: 195 },
    { name: 'Australia', x: 410, y: 170 },
  ];

  const getCurvePath = (x1, y1, x2, y2) => {
    const cx = (x1 + x2) / 2;
    const cy = Math.min(y1, y2) - 25; // arc upwards
    return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
  };

  return (
    <div className="hero-map-wrapper">
      {/* Topology Background Matrix Grid */}
      <svg width="100%" height="100%" viewBox="0 0 480 220" style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <pattern id="map-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="rgba(255, 59, 59, 0.04)" />
          </pattern>
        </defs>
        
        {/* Subtle grid dots overlay */}
        <rect width="100%" height="100%" fill="url(#map-grid)" />

        {/* Continent Outlines (Polygonal vectors) */}
        {/* North America */}
        <polygon points="30,30 70,30 110,40 120,60 105,75 90,75 85,90 80,100 70,105 60,110 55,95 45,95 40,85 25,65 25,50" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.025)" strokeWidth="0.75" />
        {/* Greenland */}
        <polygon points="95,15 125,12 120,30 100,30" fill="rgba(255,255,255,0.008)" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
        {/* South America */}
        <polygon points="85,115 105,115 125,135 115,185 100,210 95,210 90,175 80,145" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.025)" strokeWidth="0.75" />
        {/* Eurasia */}
        <polygon points="175,35 210,25 245,20 290,20 350,22 410,25 440,35 450,55 440,95 415,110 385,120 350,115 340,95 315,90 295,95 285,120 275,125 265,110 255,95 240,95 230,120 205,100 195,95 175,95 175,70 165,55" fill="rgba(255,255,255,0.012)" stroke="rgba(255,255,255,0.028)" strokeWidth="0.75" />
        {/* Africa */}
        <polygon points="170,95 215,95 235,110 250,125 250,150 230,195 215,205 205,175 180,135 170,125" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.025)" strokeWidth="0.75" />
        {/* Australia */}
        <polygon points="390,155 430,155 440,175 435,190 395,190 380,170" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.02)" strokeWidth="0.75" />

        {/* Nodes and Labels */}
        {MAP_NODES.map((node) => {
          const isActiveTarget = activeAttacks.some(att => att.to === node.name);
          const isActiveSource = activeAttacks.some(att => att.from === node.name);
          const isNodeActive = isActiveTarget || isActiveSource;

          return (
            <g key={node.name}>
              {/* Pulsing ring for active nodes */}
              {isActiveTarget && (
                <circle cx={node.x} cy={node.y} r="8" fill="none" stroke="#ff3b3b" strokeWidth="0.75">
                  <animate attributeName="r" values="3;16;3" dur="1.4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0;1" dur="1.4s" repeatCount="indefinite" />
                </circle>
              )}
              {/* Base Node dot */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isNodeActive ? '3' : '2'}
                fill={isNodeActive ? '#ff3b3b' : 'rgba(255,255,255,0.2)'}
                style={{ transition: 'all 0.3s' }}
              />
              <text
                x={node.x - 10}
                y={node.y - 6}
                fill={isNodeActive ? '#ff3b3b' : '#666666'}
                fontSize="6"
                fontFamily="JetBrains Mono, monospace"
                fontWeight={isNodeActive ? 'bold' : 'normal'}
                style={{ transition: 'fill 0.3s' }}
              >
                {node.name}
              </text>
            </g>
          );
        })}

        {/* Attack Vector Curved Lines & animated packets */}
        {activeAttacks.map((attack) => {
          const pathD = getCurvePath(
            attack.fromCoords[0],
            attack.fromCoords[1],
            attack.toCoords[0],
            attack.toCoords[1]
          );

          return (
            <g key={attack.id}>
              {/* Attack trail line */}
              <path
                d={pathD}
                fill="none"
                stroke={attack.color}
                strokeWidth="1"
                strokeDasharray="3,3"
                opacity="0.5"
              />
              {/* Animated packet tracker */}
              <circle r="3" fill={attack.color}>
                <animateMotion dur="2s" repeatCount="1" fill="freeze" path={pathD} />
                <animate attributeName="opacity" values="1;0.4;1" dur="0.8s" repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
      </svg>
      <div style={{ position: 'absolute', top: '8px', left: '10px', fontSize: '7.5px', fontFamily: 'JetBrains Mono, monospace', color: '#ff3b3b', background: 'rgba(255,59,59,0.05)', border: '1px solid rgba(255,59,59,0.2)', padding: '2px 6px', borderRadius: '3px', letterSpacing: '0.5px' }}>
        LIVE_ATTACK_MAP // CYBER_GRID
      </div>
    </div>
  );
};

// Real-Time Threat Feed Component
const LiveThreatFeed = ({ logs }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      <AnimatePresence initial={false}>
        {logs.map((log) => (
          <motion.div
            key={log.id}
            initial={{ opacity: 0, x: -10, height: 0 }}
            animate={{ opacity: 1, x: 0, height: 'auto' }}
            exit={{ opacity: 0, x: 10, height: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            style={{
              background: 'rgba(255, 255, 255, 0.01)',
              border: '1px solid rgba(255,255,255,0.03)',
              borderRadius: '4px',
              padding: '4px 6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '8px',
              fontFamily: 'JetBrains Mono, monospace',
              color: '#8c8c8c',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', minWidth: 0 }}>
              <span style={{ color: log.color, border: `1px solid ${log.color}`, background: 'rgba(255,59,59,0.02)', padding: '1px 3px', borderRadius: '3px', fontSize: '6.5px', fontWeight: 'bold', flexShrink: 0 }}>
                {log.type}
              </span>
              <span style={{ color: '#e5e5e5', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{log.text}</span>
            </div>
            <span style={{ color: '#555555', marginLeft: '6px', flexShrink: 0 }}>{log.time}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// Bandwidth Sparkline Line Graph
const NetworkActivityGraph = () => {
  const [points, setPoints] = useState([30, 45, 35, 60, 50, 40, 55, 65, 50, 42, 60, 45, 55, 60, 68, 55, 50, 60]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(prev => [...prev.slice(1), Math.floor(Math.random() * 38) + 22]);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const width = 200;
  const height = 40;
  const maxVal = 80;

  const pathD = points.reduce((acc, p, idx) => {
    const x = (idx / (points.length - 1)) * width;
    const y = height - (p / maxVal) * height;
    return acc + `${idx === 0 ? 'M' : 'L'} ${x} ${y}`;
  }, '');

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" style={{ overflow: 'visible' }}>
        <path
          d={pathD}
          fill="none"
          stroke="#ff3b3b"
          strokeWidth="1.2"
          style={{ transition: 'all 0.6s ease-in-out' }}
        />
        {points.map((p, idx) => {
          if (idx % 5 !== 0) return null;
          const x = (idx / (points.length - 1)) * width;
          const y = height - (p / maxVal) * height;
          return <circle key={idx} cx={x} cy={y} r="1.5" fill="#ff3b3b" />;
        })}
      </svg>
    </div>
  );
};

// Dynamic Terminal log
const LiveTerminalFeed = ({ terminalLogs }) => {
  return (
    <div style={{ background: '#050505', border: '1px solid rgba(255,255,255,0.02)', borderRadius: '5px', padding: '5px 7px', height: '48px', color: '#777777', fontFamily: 'JetBrains Mono, monospace', fontSize: '8px', lineHeight: '1.4', overflow: 'hidden' }}>
      {terminalLogs.map((log, idx) => (
        <div key={idx} style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <span style={{ color: '#ff3b3b' }}>&gt;</span> {log}
          {idx === terminalLogs.length - 1 && <span className="terminal-blink" style={{ color: '#ff3b3b', marginLeft: '1px' }}>█</span>}
        </div>
      ))}
    </div>
  );
};

// Compact Right Side Security Command Center Component
const SecurityCommandCenter = () => {
  const [activeAttacks, setActiveAttacks] = useState([]);
  const [threatLogs, setThreatLogs] = useState([
    { id: 1, time: '18:30:12', type: 'CRIT', text: 'USA → Germany: SQLi Injection Attempt', color: '#ff3b3b' },
    { id: 2, time: '18:30:08', type: 'HIGH', text: 'Russia → India: Zero-Day Exploit Attempt', color: '#ff3b3b' },
    { id: 3, time: '18:30:01', type: 'MED', text: 'China → UK: DDoS Flood Vector', color: '#ff7700' },
  ]);
  const [terminalLogs, setTerminalLogs] = useState([
    'system core secured',
    'monitoring cyber grid nodes...',
    'firewall active [shield v4.12]'
  ]);
  const [packetCount, setPacketCount] = useState(1482930);

  useEffect(() => {
    const packetInterval = setInterval(() => {
      setPacketCount(prev => prev + Math.floor(Math.random() * 45) + 15);
    }, 250);

    const attackScenarios = [
      { from: 'USA', to: 'Germany', fromCoords: [70, 70], toCoords: [195, 52], text: 'SQLi Injection Attempt', type: 'CRIT', color: '#ff3b3b', ip: '45.143.203.12' },
      { from: 'Russia', to: 'India', fromCoords: [250, 40], toCoords: [285, 108], text: 'Zero-Day Exploit Attempt', type: 'CRIT', color: '#ff3b3b', ip: '91.24.18.204' },
      { from: 'China', to: 'UK', fromCoords: [335, 75], toCoords: [175, 50], text: 'DDoS Flood Vector', type: 'HIGH', color: '#ff7700', ip: '112.85.42.19' },
      { from: 'USA', to: 'India', fromCoords: [70, 70], toCoords: [285, 108], text: 'API Key Leakage Alert', type: 'MED', color: '#f59e0b', ip: '104.22.8.91' },
      { from: 'Germany', to: 'USA', fromCoords: [195, 52], toCoords: [70, 70], text: 'Phishing Campaign Host', type: 'LOW', color: '#22c55e', ip: '82.165.10.45' },
      { from: 'Brazil', to: 'South Africa', fromCoords: [105, 145], toCoords: [215, 195], text: 'SSH Brute Force Blocked', type: 'HIGH', color: '#ff7700', ip: '177.55.90.112' },
      { from: 'China', to: 'USA', fromCoords: [335, 75], toCoords: [70, 70], text: 'Malware Exfiltration Blocked', type: 'CRIT', color: '#ff3b3b', ip: '220.181.38.10' },
      { from: 'Australia', to: 'UK', fromCoords: [410, 170], toCoords: [175, 50], text: 'Ransomware Beaconing Drop', type: 'CRIT', color: '#ff3b3b', ip: '14.137.22.99' },
    ];

    const attackInterval = setInterval(() => {
      const scenario = attackScenarios[Math.floor(Math.random() * attackScenarios.length)];
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
      const id = Date.now();

      const newAttack = {
        id,
        from: scenario.from,
        to: scenario.to,
        fromCoords: scenario.fromCoords,
        toCoords: scenario.toCoords,
        color: scenario.color,
      };

      setActiveAttacks(prev => {
        const updated = [...prev, newAttack];
        if (updated.length > 3) updated.shift();
        return updated;
      });

      setTimeout(() => {
        setActiveAttacks(prev => prev.filter(att => att.id !== id));
      }, 3000);

      const newThreatLog = {
        id,
        time: timeStr,
        type: scenario.type,
        text: `${scenario.from} → ${scenario.to}: ${scenario.text}`,
        color: scenario.color,
      };
      setThreatLogs(prev => [newThreatLog, ...prev.slice(0, 2)]);

      const newTerminalLog = `BLOCKED ${scenario.type} FROM ${scenario.ip}: ${scenario.text}`;
      setTerminalLogs(prev => [...prev.slice(1), newTerminalLog]);

      setPacketCount(prev => prev + Math.floor(Math.random() * 850) + 150);
    }, 3800);

    return () => {
      clearInterval(packetInterval);
      clearInterval(attackInterval);
    };
  }, []);

  return (
    <div style={{
      width: '100%',
      maxWidth: '560px',
      background: 'rgba(11, 11, 11, 0.8)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 59, 59, 0.15)',
      borderRadius: '16px',
      padding: '14px',
      boxShadow: '0 25px 60px rgba(0,0,0,0.9), 0 0 35px rgba(255, 59, 59, 0.04)',
      position: 'relative',
      overflow: 'hidden',
    }} className="mobile-p-3">
      {/* Corner laser-brackets */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '10px', height: '10px', borderTop: '2px solid #ff3b3b', borderLeft: '2px solid #ff3b3b' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: '10px', height: '10px', borderTop: '2px solid #ff3b3b', borderRight: '2px solid #ff3b3b' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '10px', height: '10px', borderBottom: '2px solid #ff3b3b', borderLeft: '2px solid #ff3b3b' }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', borderBottom: '2px solid #ff3b3b', borderRight: '2px solid #ff3b3b' }} />

      {/* Grid Top header bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,59,59,0.1)', paddingBottom: '6px', marginBottom: '10px', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff3b3b', display: 'inline-block', animation: 'pulse-glow 1.5s infinite' }} />
          <span style={{ fontWeight: 'bold', letterSpacing: '1px', color: '#ff3b3b' }}>LIVE CYBER COMMAND CENTER</span>
        </div>
        <div style={{ color: '#8c8c8c', fontSize: '8px' }}>NODE_01 // SEC_GRID</div>
      </div>

      {/* 1. Live Attack Map */}
      <LiveAttackMap activeAttacks={activeAttacks} />

      {/* 2. Unified Responsive Dashboard widgets */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '10px' }} className="mobile-grid-cols-1">
        {/* Left Side: Real-time threats & logs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '8px', color: '#ff3b3b', marginBottom: '4px', letterSpacing: '0.5px', fontWeight: 'bold' }}>// REAL-TIME THREAT MONITOR:</div>
            <LiveThreatFeed logs={threatLogs} />
          </div>
          <div className="tablet-hide">
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '8px', color: '#ff3b3b', marginBottom: '4px', letterSpacing: '0.5px', fontWeight: 'bold' }}>// CLI RESPONSE FEED:</div>
            <LiveTerminalFeed terminalLogs={terminalLogs} />
          </div>
        </div>

        {/* Right Side: Network graph & Security statistics */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '8px', color: '#ff3b3b', marginBottom: '4px', letterSpacing: '0.5px', fontWeight: 'bold' }}>// NETWORK INGRESS LOAD:</div>
            <div style={{ background: '#070707', border: '1px solid rgba(255,59,59,0.06)', borderRadius: '6px', padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40px' }}>
              <NetworkActivityGraph />
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '8px', color: '#ff3b3b', marginBottom: '4px', letterSpacing: '0.5px', fontWeight: 'bold' }}>// SYSTEM TELEMETRY:</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontFamily: 'JetBrains Mono, monospace', fontSize: '8px' }}>
              <div style={{ background: 'rgba(255,59,59,0.02)', border: '1px solid rgba(255,59,59,0.08)', borderRadius: '4px', padding: '5px 7px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ color: '#8c8c8c', fontSize: '6.5px' }}>THREAT LEVEL</div>
                <div style={{ color: activeAttacks.length > 0 ? '#ff3b3b' : '#22c55e', fontWeight: 'bold' }}>
                  {activeAttacks.length > 0 ? 'ELEVATED' : 'SECURE'}
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '4px', padding: '5px 7px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ color: '#8c8c8c', fontSize: '6.5px' }}>AUDITED PKTS</div>
                <div style={{ color: '#ffffff', fontWeight: 'bold' }}>{packetCount.toLocaleString()}</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '4px', padding: '5px 7px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ color: '#8c8c8c', fontSize: '6.5px' }}>FIREWALL</div>
                <div style={{ color: '#22c55e', fontWeight: 'bold' }}>SHLD_ON</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '4px', padding: '5px 7px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ color: '#8c8c8c', fontSize: '6.5px' }}>SENSORS</div>
                <div style={{ color: '#22c55e', fontWeight: 'bold' }}>9/9 UP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '75vh', // Tighter cinematic overall height
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '64px',
        paddingBottom: '32px',
      }}
    >
      <ParticleCanvas />

      {/* Glowing radial backdrop */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 75% 35%, rgba(255,59,59,0.04) 0%, transparent 60%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-layout-grid">
          {/* Left Text Column */}
          <div className="hero-left-column">
            {/* Cybersecurity Clearance Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                color: '#ff3b3b',
                letterSpacing: '3px',
                marginBottom: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff3b3b', display: 'inline-block' }} />
              // SEC_CORE // AUDIT_ACTIVE // ASSIS PANDA
            </motion.div>

            {/* Subtitle */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: 'clamp(1.8rem, 4.5vw, 2.75rem)', // Tighter typography scale
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: '1.2',
                marginBottom: '16px',
                letterSpacing: '0.5px',
              }}
            >
              Cybersecurity Enthusiast & <br />
              <span style={{ color: '#ff3b3b', textShadow: '0 0 15px rgba(255, 59, 59, 0.25)' }}>MERN Stack Developer</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '14px',
                color: '#8c8c8c',
                lineHeight: '1.7',
                marginBottom: '24px',
                maxWidth: '520px',
              }}
            >
              Building secure, modern, and high-performance digital architectures. Focused on vulnerability assessments, network diagnostics, ethical hacking labs, and full-stack web defense.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-ctas"
            >
              <a href="#projects" className="btn-primary" style={{ textDecoration: 'none' }}>
                View Projects
              </a>
              <a href="#contact" className="btn-secondary" style={{ textDecoration: 'none' }}>
                Contact Me
              </a>
            </motion.div>

            {/* Social channels */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-socials"
            >
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  onClick={e => {
                    if (social.href.startsWith('mailto:')) {
                      e.preventDefault();
                      e.stopPropagation();
                      window.location.href = social.href;
                    } else if (social.href.startsWith('http')) {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(social.href, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  style={{
                    color: '#8c8c8c',
                    fontSize: '17px',
                    transition: 'all 0.25s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#ff3b3b';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#8c8c8c';
                    e.currentTarget.style.transform = 'translateY(0px)';
                  }}
                  title={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Dashboard Column: Compact Cyber Command Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center', zIndex: 2 }}
          >
            <SecurityCommandCenter />
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Hero;
