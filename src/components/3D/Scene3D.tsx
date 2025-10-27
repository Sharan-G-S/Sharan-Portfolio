import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
// RobotModel removed from scene per request (center robot and its objects removed)
import { FloatingParticles, FireParticles } from './ParticleSystem'
import SparklingGoldParticles from './SparklingGoldParticles'
import RocketAnimation from './RocketAnimation'

interface Scene3DProps {
  showRocket?: boolean
  onRocketComplete?: () => void
  cameraPosition?: [number, number, number]
  enableControls?: boolean
}

export const Scene3D: React.FC<Scene3DProps> = ({
  showRocket = false,
  onRocketComplete,
  cameraPosition = [0, 0, 10],
  enableControls = true
}) => {
  // Responsive adjustments for mobile: slower auto-rotate and fewer/heavier particles
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768
  const orbitSpeed = isMobile ? 0.25 : 1.2
  const fireMultiplier = isMobile ? 0.5 : 1
  const sparkMultiplier = isMobile ? 0.35 : 1
  return (
    <div className="w-full h-full">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          {/* Camera */}
          <PerspectiveCamera
            makeDefault
            position={cameraPosition}
            fov={50}
            near={0.1}
            far={1000}
          />

          {/* Controls */}
          {enableControls && (
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={orbitSpeed}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          )}

          {/* Lighting */}
          <ambientLight intensity={0.8} color="#4fc3f7" />
          <directionalLight
            position={[3, 3, 3]}
            intensity={2}
            color="#ffffff"
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <pointLight
            position={[-3, -3, 3]}
            intensity={1.2}
            color="#ff6b35"
          />
          <spotLight
            position={[0, 8, 3]}
            angle={0.6}
            penumbra={1}
            intensity={1.8}
            color="#00ff88"
          />
          <pointLight
            position={[2, 2, 2]}
            intensity={1}
            color="#00ffff"
          />

          {/* Center robot removed to avoid overlap with hero content */}

          {/* Particle Systems - Further Reduced for Readability */}
          <FloatingParticles count={Math.round(196 * (isMobile ? 0.5 : 1))} radius={30} speed={isMobile ? 0.15 : 0.3} />
          <FloatingParticles count={Math.round(147 * (isMobile ? 0.45 : 1))} radius={25} speed={isMobile ? 0.12 : 0.2} />
          <FireParticles count={Math.round(159 * fireMultiplier)} radius={10} speed={isMobile ? 0.35 : 0.6} />
          <FireParticles count={Math.round(127 * fireMultiplier)} radius={15} speed={isMobile ? 0.32 : 0.5} />
          { !isMobile && (
            <>
              <FireParticles count={Math.round(95 * fireMultiplier)} radius={20} speed={0.4} />
              <FireParticles count={Math.round(64 * fireMultiplier)} radius={25} speed={0.3} />
            </>
          )}
          <SparklingGoldParticles count={Math.max(24, Math.round(245 * sparkMultiplier))} speed={isMobile ? 0.25 : 0.3} />
          { !isMobile && <SparklingGoldParticles count={196} speed={0.4} /> }
          { !isMobile && <SparklingGoldParticles count={147} speed={0.2} /> }

          {/* Rocket Animation */}
          {showRocket && (
            <RocketAnimation
              isActive={showRocket}
              onComplete={onRocketComplete}
              duration={4}
            />
          )}

          {/* Background grid removed to simplify center composition */}

          {/* Fog for depth */}
          <fog attach="fog" args={['#0a0a0a', 20, 60]} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene3D