'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function CarModel() {
  const { scene } = useGLTF('initialie/public/thar.glb')
  return <primitive object={scene} scale={[1, 1, 1]} />
}

export default function View360() {
  return (
    <div className="w-full h-96">
      <Canvas camera={{ position: [5, 5, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <CarModel />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  )
}

