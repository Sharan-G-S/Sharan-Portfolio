import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import * as THREE from 'three'

interface RocketAnimationProps {
  isActive?: boolean
  onComplete?: () => void
  duration?: number
}

export const RocketAnimation: React.FC<RocketAnimationProps> = ({
  isActive = false,
  onComplete,
  duration = 8
}) => {
  const rocketRef = useRef<Group>(null)
  const trailRef = useRef<Group>(null)
  const startTime = useRef<number>(0)

  const rocketMaterial = new THREE.MeshStandardMaterial({
    color: '#ff6b35',
    metalness: 0.8,
    roughness: 0.2,
    emissive: '#ff4500',
    emissiveIntensity: 0.3
  })

  const flameMaterial = new THREE.MeshStandardMaterial({
    color: '#ff4500',
    emissive: '#ff4500',
    emissiveIntensity: 0.8,
    transparent: true,
    opacity: 0.8
  })

  useFrame((state) => {
    if (!isActive || !rocketRef.current) return

    if (startTime.current === 0) {
      startTime.current = state.clock.elapsedTime
    }

    const elapsed = state.clock.elapsedTime - startTime.current
    const progress = Math.min(elapsed / duration, 1)

    // Trajectory from bottom-left to top-right (more visible path)
    const startX = -15
    const startY = -10
    const endX = 15
    const endY = 10

    // Smooth easing function
    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const easedProgress = easeInOutCubic(progress)

    // Position
    const x = startX + (endX - startX) * easedProgress
    const y = startY + (endY - startY) * easedProgress + Math.sin(progress * Math.PI * 3) * 0.5
    const z = Math.sin(progress * Math.PI * 2) * 0.3

    rocketRef.current.position.set(x, y, z)

    // Rotation for dynamic movement
    const angle = Math.atan2(endY - startY, endX - startX)
    rocketRef.current.rotation.z = angle + Math.sin(elapsed * 5) * 0.1
    rocketRef.current.rotation.x = Math.sin(elapsed * 3) * 0.2

    // Scale for dramatic effect (make rocket bigger and more visible)
    const scale = 1.0 + progress * 0.8
    rocketRef.current.scale.setScalar(scale)

    // Trail effect
    if (trailRef.current) {
      trailRef.current.children.forEach((child, index) => {
        const mesh = child as THREE.Mesh
        const trailProgress = (progress - index * 0.05)
        if (trailProgress > 0) {
          const trailX = startX + (endX - startX) * trailProgress
          const trailY = startY + (endY - startY) * trailProgress
          mesh.position.set(trailX, trailY, z)
          mesh.scale.setScalar(0.3 * (1 - index * 0.1))
          
          const material = mesh.material as THREE.MeshStandardMaterial
          material.opacity = Math.max(0, 0.6 - index * 0.1)
        }
      })
    }

    // Complete animation
    if (progress >= 1 && onComplete) {
      onComplete()
      startTime.current = 0
    }
  })

  if (!isActive) return null

  return (
    <group>
      {/* Main Rocket */}
      <group ref={rocketRef} position={[-12, -8, 0]}>
        {/* Rocket Body */}
        <mesh material={rocketMaterial}>
          <cylinderGeometry args={[0.15, 0.25, 1.5, 8]} />
        </mesh>
        
        {/* Rocket Nose */}
        <mesh position={[0, 0.9, 0]} material={rocketMaterial}>
          <coneGeometry args={[0.15, 0.6, 8]} />
        </mesh>
        
        {/* Fins */}
        <group position={[0, -0.6, 0]}>
          <mesh position={[0.2, 0, 0]} rotation={[0, 0, Math.PI / 4]} material={rocketMaterial}>
            <boxGeometry args={[0.1, 0.4, 0.02]} />
          </mesh>
          <mesh position={[-0.2, 0, 0]} rotation={[0, 0, -Math.PI / 4]} material={rocketMaterial}>
            <boxGeometry args={[0.1, 0.4, 0.02]} />
          </mesh>
          <mesh position={[0, 0, 0.2]} rotation={[Math.PI / 4, 0, 0]} material={rocketMaterial}>
            <boxGeometry args={[0.02, 0.4, 0.1]} />
          </mesh>
          <mesh position={[0, 0, -0.2]} rotation={[-Math.PI / 4, 0, 0]} material={rocketMaterial}>
            <boxGeometry args={[0.02, 0.4, 0.1]} />
          </mesh>
        </group>
        
        {/* Engine Flame */}
        <mesh position={[0, -1.2, 0]} material={flameMaterial}>
          <coneGeometry args={[0.2, 0.8, 8]} />
        </mesh>
        
        {/* Exhaust Particles */}
        <mesh position={[0, -1.8, 0]} material={flameMaterial}>
          <coneGeometry args={[0.3, 0.4, 6]} />
        </mesh>
      </group>

      {/* Trail Effect */}
      <group ref={trailRef}>
        {Array.from({ length: 10 }, (_, i) => (
          <mesh key={i} material={flameMaterial}>
            <sphereGeometry args={[0.1, 8, 8]} />
          </mesh>
        ))}
      </group>
    </group>
  )
}

export default RocketAnimation