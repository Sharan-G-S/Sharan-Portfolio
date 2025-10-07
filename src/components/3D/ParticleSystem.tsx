import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points } from 'three'
import * as THREE from 'three'

interface ParticleSystemProps {
  count?: number
  radius?: number
  speed?: number
}

export const FloatingParticles: React.FC<ParticleSystemProps> = ({
  count = 200,
  radius = 15,
  speed = 1
}) => {
  const pointsRef = useRef<Points>(null)
  
  const particlesData = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      
      // Random positions in a sphere
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const r = Math.random() * radius
      
      positions[i3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta) - 5
      positions[i3 + 2] = r * Math.cos(phi)
      
      // Random velocities
      velocities[i3] = (Math.random() - 0.5) * 0.02
      velocities[i3 + 1] = Math.random() * 0.02 + 0.01
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02
      
      // AI-themed colors (cyan, orange, green)
      const colorChoice = Math.random()
      if (colorChoice < 0.4) {
        // Cyan
        colors[i3] = 0.0
        colors[i3 + 1] = 1.0
        colors[i3 + 2] = 1.0
      } else if (colorChoice < 0.7) {
        // Orange
        colors[i3] = 1.0
        colors[i3 + 1] = 0.4
        colors[i3 + 2] = 0.0
      } else {
        // Green
        colors[i3] = 0.0
        colors[i3 + 1] = 1.0
        colors[i3 + 2] = 0.3
      }
    }
    
    return { positions, colors, velocities }
  }, [count, radius])

  useFrame((state) => {
    if (!pointsRef.current) return
    
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
    const t = state.clock.elapsedTime * speed
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      
      // Update positions based on velocities and time
      positions[i3] += particlesData.velocities[i3] + Math.sin(t + i * 0.1) * 0.001
      positions[i3 + 1] += particlesData.velocities[i3 + 1] + Math.cos(t + i * 0.1) * 0.001
      positions[i3 + 2] += particlesData.velocities[i3 + 2]
      
      // Reset particle if it goes too far
      if (positions[i3 + 1] > radius) {
        positions[i3] = (Math.random() - 0.5) * radius
        positions[i3 + 1] = -radius
        positions[i3 + 2] = (Math.random() - 0.5) * radius
      }
      
      // Keep particles within bounds
      if (Math.abs(positions[i3]) > radius) {
        positions[i3] = (Math.random() - 0.5) * radius
      }
      if (Math.abs(positions[i3 + 2]) > radius) {
        positions[i3 + 2] = (Math.random() - 0.5) * radius
      }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesData.positions}
          itemSize={3}
          args={[particlesData.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particlesData.colors}
          itemSize={3}
          args={[particlesData.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        transparent
        opacity={0.8}
        vertexColors
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  )
}

// Fire particles component
export const FireParticles: React.FC<ParticleSystemProps> = ({
  count = 100
}) => {
  const pointsRef = useRef<Points>(null)
  
  const particlesData = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      
      // Start from bottom
      positions[i3] = (Math.random() - 0.5) * 2
      positions[i3 + 1] = -8 + Math.random() * 2
      positions[i3 + 2] = (Math.random() - 0.5) * 2
      
      // Fire colors (red to yellow)
      const heat = Math.random()
      colors[i3] = 1.0 // Red
      colors[i3 + 1] = heat * 0.8 // Green varies
      colors[i3 + 2] = heat * 0.2 // Blue low
      
      sizes[i] = Math.random() * 0.3 + 0.1
    }
    
    return { positions, colors, sizes }
  }, [count])

  useFrame(() => {
    if (!pointsRef.current) return
    
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
    const colors = pointsRef.current.geometry.attributes.color.array as Float32Array
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      
      // Move upward with some randomness
      positions[i3] += (Math.random() - 0.5) * 0.02
      positions[i3 + 1] += 0.05 + Math.random() * 0.03
      positions[i3 + 2] += (Math.random() - 0.5) * 0.02
      
      // Fade to yellow/white as it rises
      const height = (positions[i3 + 1] + 8) / 16
      colors[i3 + 1] = Math.min(1.0, height + 0.3)
      colors[i3 + 2] = Math.min(0.8, height)
      
      // Reset if too high
      if (positions[i3 + 1] > 8) {
        positions[i3] = (Math.random() - 0.5) * 2
        positions[i3 + 1] = -8
        positions[i3 + 2] = (Math.random() - 0.5) * 2
        colors[i3 + 1] = Math.random() * 0.3
        colors[i3 + 2] = Math.random() * 0.1
      }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true
    pointsRef.current.geometry.attributes.color.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlesData.positions}
          itemSize={3}
          args={[particlesData.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particlesData.colors}
          itemSize={3}
          args={[particlesData.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        transparent
        opacity={0.9}
        vertexColors
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  )
}

export default FloatingParticles