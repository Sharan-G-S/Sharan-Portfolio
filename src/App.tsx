import React, { Suspense, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import GlobalSparkles from './components/GlobalSparkles'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'
import './styles/index.css'

const LoadingScreen: React.FC = () => (
  <motion.div
    className="loading"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="loading-text"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      Initializing AI Systems...
    </motion.div>
  </motion.div>
)

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <motion.p
        className="footer-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Made with <span className="footer-heart">💚</span>, Passion & Precision by{' '}
        <span style={{ color: '#00ff88', fontWeight: '600' }}>Sharan G S</span>
      </motion.p>
      <motion.p
        style={{ 
          marginTop: '0.5rem', 
          fontSize: '0.8rem', 
          color: '#64748b' 
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        © 2025 All Rights Reserved. Built with React, Three.js & Framer Motion
      </motion.p>
    </div>
  </footer>
)

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Simulate loading time for dramatic effect
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    // Custom cursor effect
    const cursor = document.createElement('div')
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, rgba(0,255,255,0.3) 0%, rgba(0,255,136,0.1) 100%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease;
      mix-blend-mode: screen;
    `
    document.body.appendChild(cursor)

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 10 + 'px'
      cursor.style.top = e.clientY - 10 + 'px'
    }

    document.addEventListener('mousemove', moveCursor)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.body.removeChild(cursor)
    }
  }, [])

  if (isLoading) {
    return (
      <AnimatePresence>
        <LoadingScreen />
      </AnimatePresence>
    )
  }

  return (
    <div className="app">
      <Suspense fallback={<LoadingScreen />}>
        {/* Global Sparkling Background Effect */}
        <GlobalSparkles count={245} />
        
        {/* Robot Side Decorations */}
        <div className="robot-decoration robot-decoration-left">
          <div className="robot-body">
            <div className="robot-head">
              <div className="robot-antenna"></div>
              <div className="robot-eyes"></div>
            </div>
            <div className="robot-arms">
              <div className="robot-arm robot-arm-left"></div>
              <div className="robot-arm robot-arm-right"></div>
            </div>
          </div>
          <div className="robot-legs">
            <div className="robot-leg robot-leg-left"></div>
            <div className="robot-leg robot-leg-right"></div>
          </div>
        </div>
        
        <div className="robot-decoration robot-decoration-right">
          <div className="robot-body">
            <div className="robot-head">
              <div className="robot-antenna"></div>
              <div className="robot-eyes"></div>
            </div>
            <div className="robot-arms">
              <div className="robot-arm robot-arm-left"></div>
              <div className="robot-arm robot-arm-right"></div>
            </div>
          </div>
          <div className="robot-legs">
            <div className="robot-leg robot-leg-left"></div>
            <div className="robot-leg robot-leg-right"></div>
          </div>
        </div>
        
        {/* Global Background Effect */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `
              radial-gradient(
                ellipse at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, 
                rgba(37, 99, 235, 0.05) 0%, 
                rgba(10, 10, 10, 1) 70%
              )
            `,
            pointerEvents: 'none',
            zIndex: -1,
            transition: 'background 0.3s ease'
          }}
        />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </motion.div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            background: 'linear-gradient(135deg, #00ffff 0%, #00ff88 100%)',
            color: '#0a0a0a',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            fontSize: '1.2rem',
            zIndex: 1000,
            boxShadow: '0 4px 15px rgba(0, 255, 255, 0.3)'
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 6px 20px rgba(0, 255, 255, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          ↑
        </motion.button>
      </Suspense>
    </div>
  )
}

export default App