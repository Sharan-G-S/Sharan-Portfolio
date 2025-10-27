import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, Group } from 'three'
import * as THREE from 'three'

interface RobotModelProps {
  position?: [number, number, number]
  scale?: number
  animationSpeed?: number
  simple?: boolean
}

export const RobotModel: React.FC<RobotModelProps> = ({
  position = [0, 0, 0],
  scale = 1,
  animationSpeed = 1
  , simple = false
}) => {
  const robotRef = useRef<Group>(null)
  const headRef = useRef<Mesh>(null)
  const leftArmRef = useRef<Group>(null)
  const rightArmRef = useRef<Group>(null)
  const leftLegRef = useRef<Group>(null)
  const rightLegRef = useRef<Group>(null)
  const eyesRef = useRef<Group>(null)

  // Materials
  const materials = useMemo(() => ({
    body: new THREE.MeshStandardMaterial({ 
      color: '#2563eb',
      metalness: 0.8,
      roughness: 0.2,
      emissive: '#1e40af',
      emissiveIntensity: 0.1
    }),
    joints: new THREE.MeshStandardMaterial({ 
      color: '#64748b',
      metalness: 0.9,
      roughness: 0.1 
    }),
    eyes: new THREE.MeshStandardMaterial({ 
      color: '#00ff88',
      emissive: '#00ff88',
      emissiveIntensity: 0.5
    }),
    accent: new THREE.MeshStandardMaterial({ 
      color: '#f59e0b',
      metalness: 0.7,
      roughness: 0.3 
    })
  }), [])

  useFrame((state) => {
    const t = state.clock.elapsedTime * animationSpeed

    if (robotRef.current) {
      // Gentle floating motion
      robotRef.current.position.y = position[1] + Math.sin(t * 0.5) * 0.1
      robotRef.current.rotation.y = Math.sin(t * 0.3) * 0.1
    }

    if (headRef.current) {
      // Head nodding
      headRef.current.rotation.x = Math.sin(t * 0.8) * 0.1
      headRef.current.rotation.y = Math.sin(t * 0.6) * 0.15
    }

    if (leftArmRef.current && rightArmRef.current) {
      // Arms swaying
      leftArmRef.current.rotation.z = Math.sin(t * 0.7) * 0.3
      rightArmRef.current.rotation.z = -Math.sin(t * 0.7) * 0.3
    }

    if (leftLegRef.current && rightLegRef.current) {
      // Legs moving slightly
      leftLegRef.current.rotation.x = Math.sin(t * 0.4) * 0.1
      rightLegRef.current.rotation.x = -Math.sin(t * 0.4) * 0.1
    }

    if (eyesRef.current) {
      // Eyes blinking effect
      const blinkCycle = Math.sin(t * 2) * 0.5 + 0.5
      eyesRef.current.children.forEach((eye) => {
        const mesh = eye as Mesh
        const material = mesh.material as THREE.MeshStandardMaterial
        material.emissiveIntensity = 0.3 + blinkCycle * 0.3
      })
    }
  })

  return (
    <group ref={robotRef} position={position} scale={scale}>
      {simple && (
        <group>
          {/* Body */}
          <mesh position={[0, 0, 0]} material={materials.body}>
            <boxGeometry args={[0.9, 1.3, 0.6]} />
          </mesh>

          {/* Head */}
          <mesh position={[0, 0.95, 0]} material={materials.body}>
            <sphereGeometry args={[0.38, 16, 16]} />
          </mesh>

          {/* Eyes as emissive dots */}
          <mesh position={[-0.12, 0.98, 0.31]} material={materials.eyes}>
            <sphereGeometry args={[0.06, 8, 8]} />
          </mesh>
          <mesh position={[0.12, 0.98, 0.31]} material={materials.eyes}>
            <sphereGeometry args={[0.06, 8, 8]} />
          </mesh>

          {/* Arms */}
          <mesh position={[-0.9, 0.15, 0]} material={materials.body}>
            <cylinderGeometry args={[0.09, 0.09, 0.7]} />
          </mesh>
          <mesh position={[0.9, 0.15, 0]} material={materials.body}>
            <cylinderGeometry args={[0.09, 0.09, 0.7]} />
          </mesh>

          {/* Legs */}
          <mesh position={[-0.25, -1.0, 0]} material={materials.body}>
            <cylinderGeometry args={[0.11, 0.11, 0.7]} />
          </mesh>
          <mesh position={[0.25, -1.0, 0]} material={materials.body}>
            <cylinderGeometry args={[0.11, 0.11, 0.7]} />
          </mesh>
        </group>
      )}

      {!simple && (
        <>
          {/* Main Body */}
          <mesh position={[0, 0, 0]} material={materials.body}>
            <boxGeometry args={[0.8, 1.2, 0.6]} />
          </mesh>

          {/* Chest Panel */}
          <mesh position={[0, 0.2, 0.31]} material={materials.accent}>
            <boxGeometry args={[0.4, 0.6, 0.02]} />
          </mesh>

          {/* Head */}
          <group ref={headRef} position={[0, 0.9, 0]}>
            <mesh material={materials.body}>
              <boxGeometry args={[0.6, 0.6, 0.6]} />
            </mesh>
            
            {/* Eyes */}
            <group ref={eyesRef} position={[0, 0.1, 0.31]}>
              <mesh position={[-0.15, 0, 0]} material={materials.eyes}>
                <sphereGeometry args={[0.08, 16, 16]} />
              </mesh>
              <mesh position={[0.15, 0, 0]} material={materials.eyes}>
                <sphereGeometry args={[0.08, 16, 16]} />
              </mesh>
            </group>

            {/* Antenna */}
            <mesh position={[0, 0.4, 0]} material={materials.accent}>
              <cylinderGeometry args={[0.02, 0.02, 0.3]} />
            </mesh>
            <mesh position={[0, 0.55, 0]} material={materials.eyes}>
              <sphereGeometry args={[0.05, 8, 8]} />
            </mesh>
          </group>

          {/* Left Arm */}
          <group ref={leftArmRef} position={[-0.5, 0.3, 0]}>
            {/* Shoulder */}
            <mesh material={materials.joints}>
              <sphereGeometry args={[0.15, 16, 16]} />
            </mesh>
            {/* Upper Arm */}
            <mesh position={[-0.25, -0.1, 0]} material={materials.body}>
              <cylinderGeometry args={[0.1, 0.1, 0.4]} />
            </mesh>
            {/* Elbow */}
            <mesh position={[-0.25, -0.3, 0]} material={materials.joints}>
              <sphereGeometry args={[0.08, 16, 16]} />
            </mesh>
            {/* Forearm */}
            <mesh position={[-0.25, -0.55, 0]} material={materials.body}>
              <cylinderGeometry args={[0.08, 0.08, 0.3]} />
            </mesh>
            {/* Hand */}
            <mesh position={[-0.25, -0.75, 0]} material={materials.accent}>
              <sphereGeometry args={[0.1, 16, 16]} />
            </mesh>
          </group>

          {/* Right Arm */}
          <group ref={rightArmRef} position={[0.5, 0.3, 0]}>
            {/* Shoulder */}
            <mesh material={materials.joints}>
              <sphereGeometry args={[0.15, 16, 16]} />
            </mesh>
            {/* Upper Arm */}
            <mesh position={[0.25, -0.1, 0]} material={materials.body}>
              <cylinderGeometry args={[0.1, 0.1, 0.4]} />
            </mesh>
            {/* Elbow */}
            <mesh position={[0.25, -0.3, 0]} material={materials.joints}>
              <sphereGeometry args={[0.08, 16, 16]} />
            </mesh>
            {/* Forearm */}
            <mesh position={[0.25, -0.55, 0]} material={materials.body}>
              <cylinderGeometry args={[0.08, 0.08, 0.3]} />
            </mesh>
            {/* Hand */}
            <mesh position={[0.25, -0.75, 0]} material={materials.accent}>
              <sphereGeometry args={[0.1, 16, 16]} />
            </mesh>
          </group>

          {/* Left Leg */}
          <group ref={leftLegRef} position={[-0.2, -0.8, 0]}>
            {/* Hip */}
            <mesh material={materials.joints}>
              <sphereGeometry args={[0.12, 16, 16]} />
            </mesh>
            {/* Thigh */}
            <mesh position={[0, -0.3, 0]} material={materials.body}>
              <cylinderGeometry args={[0.12, 0.12, 0.5]} />
            </mesh>
            {/* Knee */}
            <mesh position={[0, -0.55, 0]} material={materials.joints}>
              <sphereGeometry args={[0.1, 16, 16]} />
            </mesh>
            {/* Shin */}
            <mesh position={[0, -0.8, 0]} material={materials.body}>
              <cylinderGeometry args={[0.1, 0.1, 0.4]} />
            </mesh>
            {/* Foot */}
            <mesh position={[0, -1.05, 0.1]} material={materials.accent}>
              <boxGeometry args={[0.2, 0.1, 0.4]} />
            </mesh>
          </group>

          {/* Right Leg */}
          <group ref={rightLegRef} position={[0.2, -0.8, 0]}>
            {/* Hip */}
            <mesh material={materials.joints}>
              <sphereGeometry args={[0.12, 16, 16]} />
            </mesh>
            {/* Thigh */}
            <mesh position={[0, -0.3, 0]} material={materials.body}>
              <cylinderGeometry args={[0.12, 0.12, 0.5]} />
            </mesh>
            {/* Knee */}
            <mesh position={[0, -0.55, 0]} material={materials.joints}>
              <sphereGeometry args={[0.1, 16, 16]} />
            </mesh>
            {/* Shin */}
            <mesh position={[0, -0.8, 0]} material={materials.body}>
              <cylinderGeometry args={[0.1, 0.1, 0.4]} />
            </mesh>
            {/* Foot */}
            <mesh position={[0, -1.05, 0.1]} material={materials.accent}>
              <boxGeometry args={[0.2, 0.1, 0.4]} />
            </mesh>
          </group>

          {/* Backpack/Jetpack */}
          <mesh position={[0, 0.2, -0.4]} material={materials.accent}>
            <boxGeometry args={[0.4, 0.8, 0.2]} />
          </mesh>
          
          {/* Jetpack Flames */}
          <mesh position={[0, -0.2, -0.6]} material={materials.eyes}>
            <coneGeometry args={[0.1, 0.3, 8]} />
          </mesh>
        </>
      )}
    </group>
  )
}

export default RobotModel