import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Rotate3D, X } from "lucide-react";

function Model({ filePath }) {
  const { scene } = useGLTF(filePath);
  return <primitive object={scene} />;
}

export default function View360({ show3DView, onToggle3D }) {
  return (
    <>
      {show3DView && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="w-full h-full">
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 5, 2]} />
              <OrbitControls />
              <Model filePath="/thar.glb" />
            </Canvas>
          </div>
        </div>
      )}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle3D();
        }}
        className="absolute bottom-4 right-20 z-20 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 backdrop-blur-sm hover:scale-105 pointer-events-auto"
      >
        {show3DView ? (
          <>
            <X className="w-5 h-5" />
            <span>Close 3D</span>
          </>
        ) : (
          <>
            <Rotate3D className="w-5 h-5" />
            <span>View in 3D</span>
          </>
        )}
      </button>
    </>
  );
}
