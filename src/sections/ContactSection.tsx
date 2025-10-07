import React from 'react'
import { motion } from 'framer-motion'

const ContactSection: React.FC = () => {
  const contactLinks = [
    {
      name: 'Email',
      url: 'mailto:sharangs08@gmail.com',
      icon: '📧',
      label: 'sharangs08@gmail.com',
      color: '#ff6b35'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sharan-g-s/',
      icon: '💼',
      label: 'linkedin.com/in/sharan-g-s',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Sharan-G-S',
      icon: '🐙',
      label: 'github.com/Sharan-G-S',
      color: '#00ff88'
    },
    {
      name: 'Kaggle',
      url: 'https://www.kaggle.com/sharan37',
      icon: '📊',
      label: 'kaggle.com/sharan37',
      color: '#20beff'
    },
    {
      name: 'GitLab',
      url: 'https://gitlab.com/sharangs08',
      icon: '🦊',
      label: 'gitlab.com/sharangs08',
      color: '#fc6d26'
    }
  ]

  const handleContactClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="contact-text">
              Ready to collaborate on building the next generation of{' '}
              <span style={{ color: '#00ff88' }}>Intelligent Autonomous Systems</span>? 
              Let's connect and explore opportunities in{' '}
              <span style={{ color: '#00ffff' }}>AI, Robotics, and Innovation</span>.
            </p>
          </motion.div>

          <motion.div
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              padding: '2rem',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              marginBottom: '2rem'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 style={{
              color: '#00ffff',
              textAlign: 'center',
              marginBottom: '1.5rem',
              fontSize: '1.3rem',
              fontFamily: 'Orbitron, monospace'
            }}>
              🌍 Get In Touch
            </h3>
            
            <div className="contact-links">
              {contactLinks.map((link, index) => (
                <motion.button
                  key={index}
                  className="contact-link"
                  onClick={() => handleContactClick(link.url)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: `${link.color}20`,
                    borderColor: link.color,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    border: 'none',
                    cursor: 'pointer',
                    background: 'transparent'
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{link.icon}</span>
                  <div>
                    <div style={{ fontWeight: '600', color: link.color }}>
                      {link.name}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                      {link.label}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{
              background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 255, 136, 0.1) 100%)',
              padding: '2rem',
              borderRadius: '20px',
              border: '1px solid rgba(0, 255, 255, 0.2)',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 style={{
              color: '#00ff88',
              marginBottom: '1rem',
              fontSize: '1.2rem',
              fontFamily: 'Orbitron, monospace'
            }}>
              💡 Let's Innovate Together
            </h3>
            
            <p style={{
              color: '#94a3b8',
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Whether it's discussing cutting-edge AI research, collaborative robotics projects, 
              or exploring new frontiers in autonomous systems, I'm always excited to connect 
              with fellow innovators and visionaries.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <motion.button
                onClick={() => handleContactClick('mailto:sharangs08@gmail.com')}
                style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f59e0b 100%)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Inter, sans-serif'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 25px rgba(255, 107, 53, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                📧 Send Email
              </motion.button>
              
              <motion.button
                onClick={() => handleContactClick('https://www.linkedin.com/in/sharan-g-s/')}
                style={{
                  background: 'transparent',
                  color: '#00ffff',
                  border: '2px solid #00ffff',
                  padding: '1rem 2rem',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Inter, sans-serif'
                }}
                whileHover={{ 
                  backgroundColor: 'rgba(0, 255, 255, 0.1)',
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
              >
                💼 Connect on LinkedIn
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            style={{
              marginTop: '2rem',
              textAlign: 'center',
              color: '#64748b',
              fontSize: '0.9rem'
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            <p>📍 <strong>Location:</strong> Coimbatore, India</p>
            <p style={{ marginTop: '0.5rem' }}>
              "Let's collaborate to build the next generation of Intelligent Autonomous Systems."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection