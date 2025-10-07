import React from 'react'
import { motion } from 'framer-motion'

const AboutSection: React.FC = () => {
  const achievements = [
    "🥇 AIR 17th – DD Robocon 2024",
    "🤖 AI Lead – Team QBotix Rover (IRC 2026)",
    "🧠 Research & Innovation Lead – Dept. of AI & DS, KCT",
    "📰 Published Research – Dynamic Brake Health Monitoring",
    "🎯 Top 100 Innovators – PBL Program",
    "🎮 Event Coordinator – Sherlock in Silicon Valley (Yugam 2025)"
  ]

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>
              Hi, I'm <span className="about-highlight">Sharan G S 💚</span>, an{' '}
              <span className="about-highlight">AI & Robotics Developer</span> passionate about designing and building{' '}
              <span className="about-highlight">autonomous intelligent systems</span> that merge{' '}
              <span className="about-highlight">Agentic AI, computer vision, and robotics</span> for real-world applications.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              I'm currently pursuing <span className="about-highlight">B.Tech in Artificial Intelligence and Data Science</span> at{' '}
              <span className="about-highlight">Kumaraguru College of Technology</span>, and I serve as the{' '}
              <span className="about-highlight">AI Lead for Team QBotix Rover (IRC 2026)</span> and{' '}
              <span className="about-highlight">AI & ROS Technical Member for DD Robocon 2024 & 2025</span>.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              My work focuses on developing <span className="about-highlight">AI-driven robotic intelligence</span>,{' '}
              <span className="about-highlight">Agentic systems</span>, and{' '}
              <span className="about-highlight">real-time computer vision modules</span> for applications across{' '}
              <span className="about-highlight">automation, exploration, and smart systems</span>.
            </p>

            <p>
              I specialize in developing AI-driven robotic intelligence, multi-agent systems, and real-time computer vision modules — 
              transforming robotics into adaptive, decision-making entities.
            </p>
          </motion.div>

          <motion.div
            style={{ 
              background: 'rgba(255, 255, 255, 0.02)', 
              padding: '2rem', 
              borderRadius: '15px',
              border: '1px solid rgba(255, 255, 255, 0.1)' 
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 style={{ 
              color: '#ff6b35', 
              marginBottom: '1.5rem', 
              fontSize: '1.4rem',
              fontFamily: 'Orbitron, monospace' 
            }}>
              🏆 Achievements & Recognitions
            </h3>
            
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  style={{
                    padding: '0.75rem 0',
                    color: '#94a3b8',
                    fontSize: '1rem',
                    borderBottom: index < achievements.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          style={{ 
            marginTop: '3rem', 
            textAlign: 'center',
            background: 'rgba(37, 99, 235, 0.1)',
            padding: '2rem',
            borderRadius: '15px',
            border: '1px solid rgba(37, 99, 235, 0.3)'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 style={{ 
            color: '#00ff88', 
            marginBottom: '1rem', 
            fontSize: '1.3rem',
            fontFamily: 'Orbitron, monospace' 
          }}>
            💫 Vision & Future Goals
          </h3>
          <blockquote style={{ 
            fontStyle: 'italic', 
            fontSize: '1.1rem', 
            color: '#64748b',
            marginBottom: '1rem',
            lineHeight: '1.6'
          }}>
            "To pioneer the fusion of Artificial Intelligence and Robotics, crafting systems that autonomously adapt, 
            evolve, and redefine the boundaries of exploration and automation."
          </blockquote>
          <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
            Let's collaborate to build the next generation of Intelligent Autonomous Systems.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection