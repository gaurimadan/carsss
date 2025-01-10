import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import { X } from "lucide-react";

function Model({ url }) {
  const modelRef = useRef();
  const { scene } = useGLTF(url);

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.02}
      position={[0, 0, 0]}
    />
  );
}

export default function ThreeDViewer({ show3DView, onClose }) {
  if (!show3DView) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
     
      <div className="relative bg-gray-900 rounded-lg w-[90vw] h-[80vh] max-w-6xl shadow-xl">
       
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-white hover:text-purple-400 transition-colors p-2 pointer-events-auto"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <div className="absolute top-0 left-0 right-0 p-6 z-20">
          <h1 className="text-3xl font-bold text-white text-center">
            3D Model Viewer
          </h1>
        </div>

        
        <div className="relative h-full w-full">
          <Canvas
            camera={{ position: [2, -20, -10], fov: 45 }}
            gl={{ preserveDrawingBuffer: true }}
          >
            <color attach="background" args={["#0a0a0a"]} />

            <Suspense fallback={null}>
              <Stage environment="city" intensity={0.6}>
                <PresentationControls
                  global
                  config={{ mass: 2, tension: 500 }}
                  snap={{ mass: 4, tension: 1500 }}
                  rotation={[0, 0.3, 0]}
                  polar={[-Math.PI / 3, Math.PI / 3]}
                  azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                >
                  <Model url="/thar.glb" />
                </PresentationControls>
              </Stage>
            </Suspense>
          </Canvas>
        </div>

        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <div className="bg-black/50 px-8 py-4 rounded-lg backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-white text-sm">Loading Model...</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="text-white text-sm">
              Drag to rotate • Scroll to zoom • Double-click to reset
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

useGLTF.preload("/thar.glb");