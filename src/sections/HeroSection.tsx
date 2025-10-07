import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Scene3D from '../components/3D/Scene3D'

const HeroSection: React.FC = () => {
  const [showRocket, setShowRocket] = useState(false)

  useEffect(() => {
    // Trigger rocket animation after initial load
    const timer = setTimeout(() => {
      setShowRocket(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleRocketComplete = () => {
    setShowRocket(false)
    // Show rocket again after delay
    setTimeout(() => {
      setShowRocket(true)
    }, 10000)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="home">
      {/* 3D Background */}
      <div className="hero-3d">
        <Scene3D
          showRocket={showRocket}
          onRocketComplete={handleRocketComplete}
          cameraPosition={[0, 0, 10]}
          enableControls={true}
        />
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="hero-name">
            Sharan G S
          </h1>
          <p className="hero-subheading">AI & Robotics Developer</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 
            className="hero-title"
            data-text="AI/ML | Computer Vision | Robotics & Automation (ROS2) | Intelligent Systems | Jetson Platform | Agentic AI"
          >
            AI/ML | Computer Vision | Robotics & Automation (ROS2) | Intelligent Systems | Jetson Platform | Agentic AI
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <p className="hero-subtitle">
            "Engineering Intelligent Systems that See, Think, and Act Autonomously."
          </p>
        </motion.div>

        <motion.div
          className="hero-tags"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          {[
            'AI/ML', 'Computer Vision', 'Agentic AI', 'ROS2', 
            'Intelligent Systems', 'Jetson Platform'
          ].map((tag, index) => (
            <motion.span
              key={tag}
              className="tag"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="hero-roles"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          style={{ 
            marginTop: '2rem', 
            color: '#64748b', 
            fontSize: '1rem',
            lineHeight: '1.6'
          }}
        >
          <p>🤖 <strong style={{ color: '#00ff88' }}>AI Lead</strong> – Team QBotix Rover (IRC 2026)</p>
          <p>🧠 <strong style={{ color: '#00ff88' }}>AI & ROS Technical Member</strong> – Team QBotix (DD Robocon 2024 & 2025)</p>
          <p>🛰️ <strong style={{ color: '#00ff88' }}>Research & Innovation Lead</strong> – Dept. of AI & DS, KCT</p>
        </motion.div>

        <motion.div
          style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <button
            onClick={() => scrollToSection('projects')}
            style={{
              background: 'linear-gradient(135deg, #00ffff 0%, #00ff88 100%)',
              color: '#0a0a0a',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'Inter, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 255, 255, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Explore My Work
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
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
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 255, 255, 0.1)'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection