import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points } from 'three'
import * as THREE from 'three'

interface SparklingGoldParticlesProps {
  count?: number
  speed?: number
}

export const SparklingGoldParticles: React.FC<SparklingGoldParticlesProps> = ({
  count = 300,
  speed = 1
}) => {
  const pointsRef = useRef<Points>(null)
  
  const particlesData = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const velocities = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      
      // Random positions across the screen
      positions[i3] = (Math.random() - 0.5) * 50
      positions[i3 + 1] = (Math.random() - 0.5) * 30
      positions[i3 + 2] = (Math.random() - 0.5) * 20
      
      // Random velocities for floating effect
      velocities[i3] = (Math.random() - 0.5) * 0.01
      velocities[i3 + 1] = Math.random() * 0.015 + 0.005
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01
      
      // Gold/fire color palette
      const colorChoice = Math.random()
      if (colorChoice < 0.3) {
        // Pure Gold
        colors[i3] = 1.0     // Red
        colors[i3 + 1] = 0.84 // Green
        colors[i3 + 2] = 0.0  // Blue
      } else if (colorChoice < 0.6) {
        // Orange Gold
        colors[i3] = 1.0     // Red
        colors[i3 + 1] = 0.6  // Green
        colors[i3 + 2] = 0.0  // Blue
      } else if (colorChoice < 0.8) {
        // Bright Yellow
        colors[i3] = 1.0     // Red
        colors[i3 + 1] = 1.0  // Green
        colors[i3 + 2] = 0.2  // Blue
      } else {
        // White sparkle
        colors[i3] = 1.0     // Red
        colors[i3 + 1] = 1.0  // Green
        colors[i3 + 2] = 1.0  // Blue
      }
      
      // Random sizes for twinkling effect
      sizes[i] = Math.random() * 0.3 + 0.1
    }
    
    return { positions, colors, sizes, velocities }
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current) return
    
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
    const colors = pointsRef.current.geometry.attributes.color.array as Float32Array
    const sizes = pointsRef.current.geometry.attributes.size.array as Float32Array
    const t = state.clock.elapsedTime * speed
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      
      // Update positions with floating motion
      positions[i3] += particlesData.velocities[i3] + Math.sin(t + i * 0.01) * 0.002
      positions[i3 + 1] += particlesData.velocities[i3 + 1] + Math.cos(t + i * 0.015) * 0.001
      positions[i3 + 2] += particlesData.velocities[i3 + 2] + Math.sin(t + i * 0.02) * 0.001
      
      // Twinkling effect - modify brightness
      const twinkle = Math.sin(t * 5 + i * 0.1) * 0.5 + 0.5
      const originalColor = {
        r: particlesData.colors[i3],
        g: particlesData.colors[i3 + 1],
        b: particlesData.colors[i3 + 2]
      }
      
      colors[i3] = originalColor.r * (0.3 + twinkle * 0.7)
      colors[i3 + 1] = originalColor.g * (0.3 + twinkle * 0.7)
      colors[i3 + 2] = originalColor.b * (0.3 + twinkle * 0.7)
      
      // Size variation for sparkling
      sizes[i] = particlesData.sizes[i] * (0.5 + twinkle * 1.5)
      
      // Reset particles that go too far
      if (positions[i3 + 1] > 15) {
        positions[i3] = (Math.random() - 0.5) * 50
        positions[i3 + 1] = -15
        positions[i3 + 2] = (Math.random() - 0.5) * 20
      }
      
      // Keep particles within bounds
      if (Math.abs(positions[i3]) > 25) {
        positions[i3] = (Math.random() - 0.5) * 50
      }
      if (Math.abs(positions[i3 + 2]) > 10) {
        positions[i3 + 2] = (Math.random() - 0.5) * 20
      }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true
    pointsRef.current.geometry.attributes.color.needsUpdate = true
    pointsRef.current.geometry.attributes.size.needsUpdate = true
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
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={particlesData.sizes}
          itemSize={1}
          args={[particlesData.sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        transparent
        opacity={0.8}
        vertexColors
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true}
      />
    </points>
  )
}

export default SparklingGoldParticles