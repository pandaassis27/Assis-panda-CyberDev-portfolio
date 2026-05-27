import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const WELCOME_MESSAGES = [
  "Assis Panda Secure Console [Version 2.5]",
  "(c) 2026 Assis Panda. Connection encrypted.",
  "",
  "Click terminal body to focus. Type 'help' for commands.",
  ""
];

const COMMANDS = {
  help: [
    "Available commands:",
    "  whoami          - Display profile summary and identity",
    "  skills          - View categorized technical skills",
    "  certifications  - View cybersecurity credentials",
    "  achievements    - View system milestones and CTFs",
    "  internships     - View professional internship records",
    "  projects        - View featured development and security projects",
    "  socials         - View developer channels and social handles",
    "  contact         - View availability state and comms info",
    "  clear           - Clear terminal logs"
  ],
  whoami: [
    "----------------------------------------------------------------",
    "IDENTITY: ASSIS PANDA",
    "ROLE:     Cybersecurity Specialist & MERN Stack Developer",
    "LOCATION: Gujarat, India",
    "CLASS:    SEC-OPS // FULL-STACK // CSE",
    "----------------------------------------------------------------",
    "Motivated Computer Science Engineering student focused on",
    "identifying vulnerabilities, network security, and building",
    "highly secure, high-performance web applications using the MERN stack."
  ],
  skills: [
    "----------------------------------------------------------------",
    "TECHNICAL CATEGORIES & SKILLSETS:",
    "----------------------------------------------------------------",
    "[+] CYBERSECURITY:   Network Security, Vulnerability Audits, OWASP Top 10,",
    "                     Basic Penetration Testing, Threat Analysis, Cryptography",
    "[+] MERN STACK:      MongoDB, Express.js, React.js, Node.js",
    "[+] SECURITY TOOLS:  Wireshark, Kali Linux, Nmap, Burp Suite, Metasploit, Nikto",
    "[+] PROGRAMMING:     Python, JavaScript (ES6+), HTML5, CSS3, Shell Scripting"
  ],
  certifications: [
    "----------------------------------------------------------------",
    "VERIFIED CREDENTIALS Index:",
    "----------------------------------------------------------------",
    "[*] Cisco Cybersecurity Essentials Certificate",
    "[*] CAPT TryHackMe & Hackviser Certifications:",
    "    - Certified Cybersecurity Entry Level Practitioner (CCEP)",
    "    - Certified Artificial Intelligence Security Specialist (CAISR)",
    "    - Junior Cybersecurity Analyst",
    "    - Introduction to Linux (LFS101)",
    "[*] TryHackMe Active Laboratories (Advent of Cyber 2025 Verification)",
    "[*] NISM Securities Market Certification (Series-VIII)"
  ],
  achievements: [
    "----------------------------------------------------------------",
    "SYSTEM MILESTONES & RECOGNITIONS:",
    "----------------------------------------------------------------",
    "[!] RUNNER-UP:    UptoSkills Red vs Blue Active League (Rank #02)",
    "[!] INTEGRATION:  Completed 4 professional web & security internships",
    "[!] PROJECTS:     Engineered 5 functional full-stack & security utilities",
    "[!] TRAINING:     100% completion in TryHackMe active security labs"
  ],
  internships: [
    "----------------------------------------------------------------",
    "PROFESSIONAL INTERNSHIPS:",
    "----------------------------------------------------------------",
    "[1] Cybersecurity Intern | UptoSkills (6 Months, Virtual)",
    "    - Learning: Vulnerability audits, Nmap network scanning, Wireshark,",
    "      OWASP Top 10 mitigation (SQLi, XSS, Cryptographic failures).",
    "    - Outcome: Developed tactical defensive models; league runner-up.",
    "[2] Network Security Intern | Cisco x NIIT (4 Weeks)",
    "    - Learning: Protocols security, cryptographic configurations.",
    "[3] Web Development Intern | CodSoft (4 Weeks)",
    "    - Learning: Conversions of Figma/Canva specs to responsive designs.",
    "[4] Generative AI Intern | Suretrust Pro Education (4 Weeks)",
    "    - Learning: Prompt architectures and automated AI workflows."
  ],
  projects: [
    "----------------------------------------------------------------",
    "FEATURED SHOWCASE PROJECTS:",
    "----------------------------------------------------------------",
    "[1] ThreatWatch Dashboard",
    "    - Desc: MERN + Security threat watch monitoring dashboard.",
    "    - Tech: React.js, Node.js, Express.js, MongoDB, Chart.js, Tailwind CSS",
    "    - Stat: Deployed [Active]",
    "[2] E-commerce Website",
    "    - Desc: Modern online storefront with responsive grids.",
    "    - Tech: HTML5, CSS3, JavaScript, Secure Checkout",
    "    - Stat: Deployed [Static]",
    "[3] Steganography in Action",
    "    - Desc: LSB image pixel text encoder & decoder.",
    "    - Tech: Python, Cryptography, Image Processing",
    "    - Stat: Completed",
    "[4] DoS Attack Simulation",
    "    - Desc: Security lab monitoring packet drop rate metrics.",
    "    - Tech: Network Security, Firewall Rules, Lab Tests",
    "    - Stat: Audited"
  ],
  socials: [
    "----------------------------------------------------------------",
    "SECURE COMMUNICATION CHANNELS:",
    "----------------------------------------------------------------",
    "[+] GITHUB:    https://github.com/pandaassis27",
    "[+] LINKEDIN:  https://linkedin.com/in/assis-panda-54b720295",
    "[+] EMAIL:     assispanda87@gmail.com",
    "[+] DISCORD:   assispanda87 (Click icon to copy handle)"
  ],
  contact: [
    "----------------------------------------------------------------",
    "AVAILABILITY & COMMS STATE:",
    "----------------------------------------------------------------",
    "[+] STATUS:    Available for opportunities (Internships, Entry level roles)",
    "[+] EMAIL:     assispanda87@gmail.com",
    "[+] ACTIONS:   You can compose an email to the address above or",
    "               use the Contact Form below to send a secure message."
  ]
};

const CyberTerminal = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    setHistory(WELCOME_MESSAGES.map(msg => ({ type: 'output', text: msg })));
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history, inputVal]);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim();
    if (!trimmed) {
      setHistory(prev => [...prev, { type: 'prompt', text: trimmed }]);
      return;
    }

    const command = trimmed.toLowerCase();
    const newHistory = [...history, { type: 'prompt', text: trimmed }];
    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIdx(-1);

    if (command === 'clear') {
      setHistory([]);
      return;
    }

    let response = COMMANDS[command];
    if (!response) {
      response = [
        `shell: command not found: ${command}`,
        "Type 'help' to see available commands."
      ];
    }

    setHistory([...newHistory, ...response.map(text => ({ type: 'output', text }))]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIdx === -1 ? commandHistory.length - 1 : Math.max(0, historyIdx - 1);
        setHistoryIdx(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx !== -1) {
        const nextIdx = historyIdx + 1;
        if (nextIdx >= commandHistory.length) {
          setHistoryIdx(-1);
          setInputVal('');
        } else {
          setHistoryIdx(nextIdx);
          setInputVal(commandHistory[nextIdx]);
        }
      }
    }
  };

  return (
    <section id="terminal" className="section-padding" ref={sectionRef} style={{ position: 'relative', zIndex: 1 }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(255,59,59,0.02) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-tag">04. Terminal Console</div>
            <h2 className="section-title">
              Interactive Terminal
            </h2>
            <div className="section-divider" style={{ margin: '0 auto 20px' }} />
            <p style={{ color: '#8c8c8c', maxWidth: '500px', margin: '0 auto', fontSize: '15px' }}>
              Query my system profiles directly using standard console operations.
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div 
              className="terminal-window" 
              onClick={focusInput} 
              style={{ cursor: 'text' }}
            >
              <div className="terminal-header" style={{ background: '#111' }}>
                <div className="terminal-dot" style={{ background: '#ff3b3b', width: '10px', height: '10px', opacity: 0.8 }} />
                <div className="terminal-dot" style={{ background: '#222', width: '10px', height: '10px' }} />
                <div className="terminal-dot" style={{ background: '#222', width: '10px', height: '10px' }} />
                <div style={{
                  marginLeft: '12px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  color: '#ff3b3b',
                  opacity: 0.85,
                  letterSpacing: '0.5px',
                }}>
                  shell://guest@pandaassis27.sh
                </div>
                <div style={{
                  marginLeft: 'auto',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '9px',
                  color: '#8c8c8c',
                }}>
                  interactive-sh
                </div>
              </div>

              <div
                ref={bodyRef}
                className="terminal-body"
                style={{
                  maxHeight: '380px',
                  overflowY: 'auto',
                  padding: '24px',
                  minHeight: '300px',
                  background: '#0a0a0a',
                  color: '#c5c5c5'
                }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={e => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  style={{
                    position: 'absolute',
                    opacity: 0,
                    pointerEvents: 'none',
                    left: '-9999px',
                  }}
                />

                {history.map((line, idx) => {
                  if (line.type === 'prompt') {
                    return (
                      <div key={idx} style={{ marginBottom: '6px', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px' }}>
                        <span style={{ color: '#ff3b3b' }}>&gt;</span>
                        <span style={{ color: '#e5e5e5', marginLeft: '6px' }}>{line.text}</span>
                      </div>
                    );
                  }
                  
                  let color = '#c5c5c5';
                  if (line.text.includes('---')) {
                    color = 'rgba(255, 59, 59, 0.3)';
                  } else if (line.text.startsWith('[+]') || line.text.startsWith('[*]') || line.text.startsWith('[1]') || line.text.startsWith('[2]') || line.text.startsWith('[3]') || line.text.startsWith('[4]') || line.text.startsWith('[5]')) {
                    color = '#ffffff';
                  } else if (line.text.startsWith('[!]') || line.text.startsWith('shell: command not found')) {
                    color = '#ff3b3b';
                  } else if (
                    line.text.startsWith('  whoami') || 
                    line.text.startsWith('  skills') || 
                    line.text.startsWith('  certifications') || 
                    line.text.startsWith('  achievements') || 
                    line.text.startsWith('  internships') || 
                    line.text.startsWith('  projects') || 
                    line.text.startsWith('  socials') || 
                    line.text.startsWith('  contact') || 
                    line.text.startsWith('  clear')
                  ) {
                    color = '#ff3b3b';
                  } else if (line.text.includes('Available') || line.text.includes('CONNECTED') || line.text.includes('VALID') || line.text.includes('success')) {
                    color = '#22c55e';
                  }

                  return (
                    <div
                      key={idx}
                      style={{
                        color,
                        paddingLeft: line.text.startsWith(' ') ? '10px' : '0px',
                        whiteSpace: 'pre-wrap',
                        lineHeight: 1.6,
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '13px'
                      }}
                    >
                      {line.text || '\u00A0'}
                    </div>
                  );
                })}

                <div style={{ display: 'flex', alignItems: 'center', marginTop: '6px' }}>
                  <span style={{ color: '#ff3b3b', fontWeight: 'bold' }}>&gt;</span>
                  <span style={{ color: '#e5e5e5', marginLeft: '8px', whiteSpace: 'pre-wrap', wordBreak: 'break-all', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px' }}>
                    {inputVal}
                  </span>
                  <span className="terminal-blink" style={{ color: '#ff3b3b', marginLeft: '2px' }}>█</span>
                </div>
              </div>

              <div style={{
                padding: '8px 24px',
                borderTop: '1px solid rgba(255,59,59,0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                background: '#0c0c0c',
              }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#ff3b3b', opacity: 0.8 }}>
                    STATUS: ACTIVE
                  </span>
                </div>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '10px',
                  color: '#8c8c8c',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }} onClick={focusInput}>
                  [Click to focus console]
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CyberTerminal;
