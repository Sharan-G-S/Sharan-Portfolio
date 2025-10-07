import React from 'react'
import { motion } from 'framer-motion'

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "🤖 Artificial Intelligence & Machine Learning",
      icon: "🧠",
      skills: [
        "Supervised & Unsupervised Learning",
        "Deep Learning (CNNs, LSTMs, Transformers)",
        "Reinforcement Learning & Agentic AI",
        "LLM Fine-Tuning & Prompt Engineering",
        "NLP & Conversational Systems"
      ]
    },
    {
      title: "👁️ Computer Vision & Image Processing",
      icon: "👀",
      skills: [
        "Object Detection & Tracking (YOLOv8, OpenCV)",
        "Gesture Recognition & Motion Analysis",
        "Image Segmentation, Feature Extraction",
        "OCR, PII Detection, Image Redaction"
      ]
    },
    {
      title: "⚙️ Robotics & Automation (ROS2)",
      icon: "🦾",
      skills: [
        "ROS2 (SLAM, Navigation, Path Planning)",
        "Jetson Orin Nano Integration",
        "Autonomous Robot Control & Sensor Fusion",
        "Multi-robot Communication & ROS Nodes",
        "Mechatronic System Design"
      ]
    },
    {
      title: "🧩 Agentic AI & Multi-Agent Systems",
      icon: "🤝",
      skills: [
        "Conversational Agents with LLMs",
        "Multi-Agent Orchestration & Coordination",
        "RAG + Model Context Protocol (MCP)",
        "Autonomous Policy Management & Reasoning"
      ]
    },
    {
      title: "🌐 Full Stack & Application Development",
      icon: "💻",
      skills: [
        "FastAPI | Flask | React | Node.js",
        "PostgreSQL | MongoDB | Vector DB (FAISS, Chroma)",
        "REST API Integration | Realtime Applications",
        "Data Visualization (Matplotlib, Streamlit)"
      ]
    },
    {
      title: "🧰 Tools & Platforms",
      icon: "🛠️",
      skills: [
        "Python | Swift | ROS2 | Jetson Platform",
        "VS Code | GitHub | Docker | Ubuntu",
        "Zed 2i, Intel RealSense D435i/D455",
        "LiDAR-based Perception Systems"
      ]
    }
  ]

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '1rem',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
                <h3 style={{ 
                  color: '#ff6b35', 
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  margin: 0
                }}>
                  {category.title}
                </h3>
              </div>
              
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <motion.div
          style={{
            marginTop: '3rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 255, 136, 0.1) 100%)',
            padding: '2rem',
            borderRadius: '15px',
            border: '1px solid rgba(0, 255, 255, 0.2)'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 style={{ 
            color: '#00ffff', 
            marginBottom: '1rem', 
            fontSize: '1.3rem',
            fontFamily: 'Orbitron, monospace'
          }}>
            🎯 Core Expertise
          </h3>
          <p style={{ 
            color: '#94a3b8', 
            fontSize: '1.1rem',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Specializing in the convergence of <span style={{ color: '#00ff88' }}>AI-driven robotic intelligence</span>, 
            <span style={{ color: '#00ff88' }}> multi-agent systems</span>, and 
            <span style={{ color: '#00ff88' }}> real-time computer vision</span> — 
            transforming traditional robotics into adaptive, decision-making entities capable of autonomous operation 
            in complex environments.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection