import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSend, FiGithub, FiLinkedin, FiMail, FiCheck, FiLoader } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';

const socialLinks = [
  {
    icon: FiGithub,
    label: 'GitHub',
    handle: '@pandaassis27',
    href: 'https://github.com/pandaassis27',
    color: '#ff3b3b',
    hoverColor: '#ffffff',
    bg: 'rgba(255, 59, 59, 0.02)',
    border: 'rgba(255, 59, 59, 0.12)',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    handle: 'Assis Panda',
    href: 'https://linkedin.com/in/assis-panda-54b720295',
    color: '#ff3b3b',
    hoverColor: '#ffffff',
    bg: 'rgba(255, 59, 59, 0.02)',
    border: 'rgba(255, 59, 59, 0.12)',
  },
  {
    icon: SiDiscord,
    label: 'Discord',
    handle: 'assispanda87',
    href: '#',
    color: '#ff3b3b',
    hoverColor: '#ffffff',
    bg: 'rgba(255, 59, 59, 0.02)',
    border: 'rgba(255, 59, 59, 0.12)',
  },
  {
    icon: FiMail,
    label: 'Email',
    handle: 'assispanda87@gmail.com',
    href: 'mailto:assispanda87@gmail.com?subject=Portfolio Inquiry',
    color: '#ff3b3b',
    hoverColor: '#ffffff',
    bg: 'rgba(255, 59, 59, 0.02)',
    border: 'rgba(255, 59, 59, 0.12)',
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setForm({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 1800);
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,59,59,0.02) 0%, transparent 70%)',
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
            <div className="section-tag">05. Let's Connect</div>
            <h2 className="section-title">
              Get In Touch
            </h2>
            <div className="section-divider" style={{ margin: '0 auto 20px' }} />
            <p style={{ color: '#8c8c8c', maxWidth: '500px', margin: '0 auto', fontSize: '15px' }}>
              Have a project in mind, a security inquiry, or want to collaborate? Contact me directly.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'start',
          }}>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 }}
            >
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                color: '#ff3b3b',
                letterSpacing: '2px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <span style={{
                  width: '24px',
                  height: '1px',
                  background: '#ff3b3b',
                  display: 'inline-block',
                }} />
                SEND A MESSAGE
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '10px',
                      color: '#8c8c8c',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                      display: 'block',
                    }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '10px',
                      color: '#8c8c8c',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                      display: 'block',
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    color: '#8c8c8c',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                    display: 'block',
                  }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Collaboration"
                    className="form-input"
                  />
                </div>

                <div>
                  <label style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    color: '#8c8c8c',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                    display: 'block',
                    alignItems: 'center'
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project or security audit requirements..."
                    className="form-input"
                    rows={5}
                    required
                    style={{ resize: 'vertical', minHeight: '120px' }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: status === 'idle' ? 1.01 : 1 }}
                  whileTap={{ scale: status === 'idle' ? 0.99 : 1 }}
                  disabled={status !== 'idle'}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    padding: '12px 28px',
                    background: status === 'success' ? 'rgba(255, 59, 59, 0.12)' : 'rgba(255, 59, 59, 0.05)',
                    border: `1px solid ${status === 'success' ? 'rgba(255, 59, 59, 0.6)' : 'rgba(255, 59, 59, 0.25)'}`,
                    borderRadius: '6px',
                    color: '#ff3b3b',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    cursor: status === 'idle' ? 'pointer' : 'default',
                    transition: 'all 0.3s ease',
                    boxShadow: status === 'success' ? '0 0 15px rgba(255, 59, 59, 0.2)' : 'none',
                  }}
                >
                  {status === 'idle' && <><FiSend size={13} /> Send Message</>}
                  {status === 'loading' && (
                    <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                      <FiLoader size={13} />
                    </motion.span>
                  )}
                  {status === 'success' && <><FiCheck size={13} /> Message Sent!</>}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.25 }}
            >
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                color: '#ff3b3b',
                letterSpacing: '2px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}>
                <span style={{
                  width: '24px',
                  height: '1px',
                  background: '#ff3b3b',
                  display: 'inline-block',
                }} />
                FIND ME ON
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') || social.href === '#' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    onClick={e => {
                      if (social.label === 'Discord') {
                        e.preventDefault();
                        e.stopPropagation();
                        navigator.clipboard.writeText('assispanda87');
                        alert('Discord username "assispanda87" copied to clipboard!');
                        return;
                      }
                      if (social.href.startsWith('mailto:')) {
                        e.preventDefault();
                        e.stopPropagation();
                        window.location.href = social.href;
                        return;
                      }
                      if (social.href.startsWith('http')) {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(social.href, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    whileHover={{ x: 4, scale: 1.01 }}
                    title={social.label === 'LinkedIn' ? 'Connect with Assis Panda' : undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '14px 18px',
                      background: 'rgba(255, 59, 59, 0.015)',
                      border: '1px solid rgba(255, 59, 59, 0.08)',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 59, 59, 0.08)';
                      e.currentTarget.style.borderColor = 'rgba(255, 59, 59, 0.3)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'rgba(255, 59, 59, 0.08)';
                    }}
                  >
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(255, 59, 59, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ff3b3b',
                      fontSize: '16px',
                      flexShrink: 0,
                    }}>
                      <social.icon />
                    </div>
                    <div>
                      <div style={{
                        fontFamily: 'Orbitron, monospace',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#ffffff',
                        letterSpacing: '0.5px',
                      }}>
                        {social.label}
                      </div>
                      <div style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '11px',
                        color: '#8c8c8c',
                      }}>
                        {social.handle}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability card */}
              <div style={{
                background: 'rgba(255, 59, 59, 0.02)',
                border: '1px solid rgba(255, 59, 59, 0.15)',
                borderRadius: '10px',
                padding: '18px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#ff3b3b',
                    boxShadow: '0 0 8px #ff3b3b',
                    animation: 'pulse-glow 1.5s ease-in-out infinite',
                  }} />
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px',
                    color: '#ff3b3b',
                    letterSpacing: '1px',
                  }}>
                    STATUS: AVAILABLE FOR OPPORTUNITIES
                  </span>
                </div>
                <p style={{ fontSize: '12.5px', color: '#8c8c8c', lineHeight: 1.6 }}>
                  Open to internships, junior developer roles, and projects in cybersecurity & full-stack development.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
