import React from 'react'
import { motion } from 'framer-motion'

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "DD Robocon 2024 – Team QBotix",
      role: "AI & ROS Technical Member",
      tech: "ROS2, YOLOv8, OpenCV, Jetson Orin Nano",
      description: "Developed autonomous robot navigation using Visual SLAM and path planning. Integrated object detection & color recognition using YOLOv8. Enhanced AI-driven task handling and communication between bots.",
      achievements: "AIR — 17th",
      github: "https://github.com/Sharan-G-S",
      type: "Robotics & AI"
    },
    {
      title: "DD Robocon 2025 – Team QBotix",
      role: "AI & ROS Technical Member",
      tech: "ROS2, YOLOv8, OpenCV, Jetson Orin Nano",
      description: "Continued development on autonomous strategies and multi-agent coordination for competitive robotics challenges. Improved perception pipelines and task orchestration for real-time competition scenarios.",
      achievements: "Mathworks Modelling Award Final Round Qualifiers",
      github: "https://github.com/Sharan-G-S",
      type: "Robotics & AI"
    },
    {
      title: "Team QBotix Rover – IRC 2026",
      role: "AI Lead",
      tech: "ROS2, Jetson Orin Nano, OpenCV, PyTorch",
      description: "Leading AI system development for Mars Rover missions under Sproscape Challenge. Implemented AI terrain mapping, obstacle avoidance, and autonomous exploration. Designed multi-agent coordination for remote control and planetary data collection.",
      achievements: "🪐 Mars Rover AI Lead",
      github: "https://github.com/Sharan-G-S",
      type: "Space Robotics"
    },
    {
      title: "Agentic AI – Price Negotiation Agent",
      role: "AI Developer",
      tech: "Python, LLM, FastAPI, LangChain",
      description: "Built an AI agent that autonomously negotiates prices on platforms like OLX/Facebook Marketplace. Uses LLM-based negotiation logic: starts low, reasons, and counter-offers dynamically. Integrated a chat simulation interface between buyer agent and seller bot.",
      achievements: "🤖 Real-world Agentic AI in e-commerce",
      github: "https://github.com/Sharan-G-S",
      type: "Agentic AI"
    },
    {
      title: "AI-powered Conversational ARGO Explorer",
      role: "Full Stack AI Developer",
      tech: "PostgreSQL, FAISS, Python, LangChain, RAG",
      description: "Conversational AI system to query Indian Ocean ARGO float data using natural language. Combines Relational DB (PostGIS + Parquet) and Vector DB (FAISS/Chroma). Multi-Agent Framework: Ingestor, Cleaner, Vectorizer, RAG Manager, SQL Translator, Viz Agent.",
      achievements: "🌊 Uses MCP (Model Context Protocol)",
      github: "https://github.com/Sharan-G-S",
      type: "AI & Data Science"
    },
    {
      title: "Hand Gesture Volume & Screen Control (Mac)",
      role: "Computer Vision Developer",
      tech: "OpenCV, Mediapipe, Python",
      description: "Gesture-based system control for Mac devices (volume, brightness, window control). Achieved real-time landmark tracking using Mediapipe Hand Tracking API.",
      achievements: "✋ Real-time gesture recognition",
      github: "https://github.com/Sharan-G-S",
      type: "Computer Vision"
    },
    {
      title: "Traffic Racer Game",
      role: "Game Developer",
      tech: "Python, Pygame",
      description: "Designed an AI-based 2D racing simulation where player cars navigate adaptive traffic. Integrated collision prediction and score management systems.",
      achievements: "🏎️ AI-based traffic simulation",
      github: "https://github.com/Sharan-G-S",
      type: "Game Development"
    },
    {
      title: "AI-driven Job Recommendation Platform",
      role: "Full Stack Developer",
      tech: "React, FastAPI, MongoDB, OpenAI API",
      description: "Built a real-time job matching platform for freelancers using AI and NLP. Integrated chatbot support, employer dashboard, and intelligent job curation. Premium blue-gold UI and cloud-deployable architecture.",
      achievements: "💼 AI-powered job matching",
      github: "https://github.com/Sharan-G-S",
      type: "Web Development"
    },
    {
      title: "AI-based Resume Analyzer (ATS System)",
      role: "AI Developer",
      tech: "Python, FastAPI, React, NLP",
      description: "Analyzes resumes and provides AI-powered insights and ATS scores. Generates visualized analysis and feedback for job optimization.",
      achievements: "📄 ATS compliance analysis",
      github: "https://github.com/Sharan-G-S",
      type: "AI & NLP"
    },
    {
      title: "AI-driven IoT Soil Health Monitoring",
      role: "IoT & AI Developer",
      tech: "Intel oneAPI, IoT Sensors, Python",
      description: "Smart IoT system for real-time soil parameter analysis. Predicts crop diseases using ML models and suggests remedies.",
      achievements: "🌾 Agricultural AI solution",
      github: "https://github.com/Sharan-G-S",
      type: "IoT & Agriculture"
    },
    {
      title: "Government-issued PII Detection System",
      role: "Privacy & Security Developer",
      tech: "EasyOCR, Regex, Hashlib, OpenCV",
      description: "Developed a document privacy tool to detect & redact PII (Aadhaar, PAN, DL). Integrated hash-based masking for security compliance.",
      achievements: "🔍 Privacy compliance tool",
      github: "https://github.com/Sharan-G-S",
      type: "Security & Privacy"
    },
    {
      title: "Sherlock's AI Lab App – Swift Student Challenge",
      role: "iOS Developer",
      tech: "Swift, CoreML, ARKit",
      description: "iOS-based 2D interactive app combining AI-powered clues & cybersecurity puzzles. Integrated CoreML for clue analysis, ARKit for immersive exploration. Featured elegant luxury UI with fire-like particle animations.",
      achievements: "📱 Swift Student Challenge submission",
      github: "https://github.com/Sharan-G-S",
      type: "Mobile Development"
    },
    {
      title: "Dynamic Brake Health Monitoring (Research)",
      role: "Research Developer",
      tech: "IoT Sensors, ML, Embedded Systems",
      description: "Developed a sensor-based brake health prediction model and presented at KCT Project-Based Learning Conference (PBL Program).",
      achievements: "🧠 Published Research Paper",
      github: "https://github.com/Sharan-G-S",
      type: "Research & IoT"
    },
    {
      title: "AI-driven Home Energy Optimization",
      role: "AI & Systems Developer",
      tech: "FastAPI, ML, IoT",
      description: "AI predicts energy consumption patterns and optimizes home power usage. Designed full system architecture with UML and ER diagrams.",
      achievements: "🏡 Smart home optimization",
      github: "https://github.com/Sharan-G-S",
      type: "Smart Systems"
    },
    {
      title: "AI-driven Freelance Resume Builder",
      role: "AI Developer",
      tech: "FastAPI, React, OpenAI API",
      description: "Built an AI Resume Builder that crafts resumes dynamically and analyzes skills. Exports to single downloadable document format.",
      achievements: "🧩 Dynamic resume generation",
      github: "https://github.com/Sharan-G-S",
      type: "AI Tools"
    },
    {
      title: "AI-powered Ocean Data Visualization",
      role: "Data Scientist",
      tech: "Streamlit, Plotly, Python",
      description: "Designed an interactive dashboard visualizing ARGO and satellite data. Integrated RAG pipeline for contextual querying and real-time updates.",
      achievements: "🧭 Ocean data insights",
      github: "https://github.com/Sharan-G-S",
      type: "Data Visualization"
    }
  ]

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Robotics & AI': '#00ffff',
      'Space Robotics': '#ff6b35',
      'Agentic AI': '#00ff88',
      'AI & Data Science': '#8b5cf6',
      'Computer Vision': '#f59e0b',
      'Game Development': '#ef4444',
      'Web Development': '#06b6d4',
      'AI & NLP': '#10b981',
      'IoT & Agriculture': '#84cc16',
      'Security & Privacy': '#f97316',
      'Mobile Development': '#3b82f6',
      'Research & IoT': '#ec4899',
      'Smart Systems': '#14b8a6',
      'AI Tools': '#a855f7',
      'Data Visualization': '#6366f1'
    }
    return colors[type] || '#64748b'
  }

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects & Innovations
        </motion.h2>

        <motion.p
          style={{
            textAlign: 'center',
            color: '#94a3b8',
            fontSize: '1.1rem',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem auto'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          🚀 Exploring the intersection of AI, Robotics, and Real-world Applications
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: '1rem'
              }}>
                <h3 className="project-title">{project.title}</h3>
                <span style={{
                  background: getTypeColor(project.type),
                  color: '#0a0a0a',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '12px',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  whiteSpace: 'nowrap'
                }}>
                  {project.type}
                </span>
              </div>
              
              <p className="project-role">{project.role}</p>
              <p className="project-tech"><strong>Tech Stack:</strong> {project.tech}</p>
              
              <p className="project-description">{project.description}</p>
              
              <div style={{ 
                background: 'rgba(0, 255, 136, 0.1)', 
                padding: '0.75rem', 
                borderRadius: '8px',
                border: '1px solid rgba(0, 255, 136, 0.2)',
                marginBottom: '1rem'
              }}>
                <p style={{ 
                  color: '#00ff88', 
                  fontSize: '0.9rem',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  <strong>Achievements:</strong> {project.achievements}
                </p>
              </div>

              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <span>🐙</span> GitHub
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <span>🔗</span> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{
            marginTop: '3rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
            padding: '2rem',
            borderRadius: '15px',
            border: '1px solid rgba(37, 99, 235, 0.2)'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 style={{ 
            color: '#2563eb', 
            marginBottom: '1rem', 
            fontSize: '1.3rem',
            fontFamily: 'Orbitron, monospace'
          }}>
            🌟 Project Impact
          </h3>
          <p style={{ 
            color: '#94a3b8', 
            fontSize: '1rem',
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Each project represents a step towards building more intelligent, autonomous systems. 
            From competitive robotics to cutting-edge AI applications, these innovations showcase 
            the practical application of <span style={{ color: '#00ff88' }}>artificial intelligence</span> and 
            <span style={{ color: '#00ff88' }}> robotics</span> in solving real-world challenges.
          </p>
          
          <motion.div
            style={{ marginTop: '1.5rem' }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a 
              href="https://github.com/Sharan-G-S" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #00ffff 0%, #00ff88 100%)',
                color: '#0a0a0a',
                padding: '1rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.3s ease'
              }}
            >
              <span>🐙</span> View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection