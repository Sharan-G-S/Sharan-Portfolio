import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import RobotModel from './RobotModel'
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
              autoRotateSpeed={0.5}
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

          {/* Robot Model */}
          <RobotModel
            position={[0, -4, -2]}
            scale={3.2}
            animationSpeed={1}
          />

          {/* Particle Systems - Further Reduced for Readability */}
          <FloatingParticles count={196} radius={30} speed={0.3} />
          <FloatingParticles count={147} radius={25} speed={0.2} />
          <FireParticles count={122} radius={10} speed={0.5} />
          <FireParticles count={98} radius={15} speed={0.4} />
          <FireParticles count={73} radius={20} speed={0.3} />
          <FireParticles count={49} radius={25} speed={0.2} />
          <SparklingGoldParticles count={245} speed={0.3} />
          <SparklingGoldParticles count={196} speed={0.4} />
          <SparklingGoldParticles count={147} speed={0.2} />

          {/* Rocket Animation */}
          {showRocket && (
            <RocketAnimation
              isActive={showRocket}
              onComplete={onRocketComplete}
              duration={6}
            />
          )}

          {/* Background Grid */}
          <gridHelper
            args={[30, 30, '#1e293b', '#334155']}
            position={[0, -3, 0]}
            rotation={[0, 0, 0]}
          />

          {/* Fog for depth */}
          <fog attach="fog" args={['#0a0a0a', 20, 60]} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene3D