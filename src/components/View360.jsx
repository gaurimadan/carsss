import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Rotate3D, X } from "lucide-react";
import ThreeDViewer from "./three";

function Model({ filePath }) {
  const { scene } = useGLTF(filePath);

  useEffect(() => {
    console.log("Model Loading:", {
      filePath,
      sceneExists: !!scene,
      sceneChildren: scene?.children,
    });
  }, [scene, filePath]);

  return <primitive object={scene} scale={0.02} position={[0, -1, 0]} />;
}

export default function View360({ show3DView, onToggle3D }) {
  const [error, setError] = useState(null);
  const [contextLost, setContextLost] = useState(false);

  // Handle context loss
  useEffect(() => {
    const handleContextLost = (e) => {
      e.preventDefault();
      setContextLost(true);
      console.log("WebGL context lost");
    };

    const handleContextRestored = () => {
      setContextLost(false);
      console.log("WebGL context restored");
    };

    window.addEventListener("webglcontextlost", handleContextLost, false);
    window.addEventListener(
      "webglcontextrestored",
      handleContextRestored,
      false
    );

    return () => {
      window.removeEventListener("webglcontextlost", handleContextLost);
      window.removeEventListener("webglcontextrestored", handleContextRestored);
    };
  }, []);

  return (
    <>
      {show3DView && (
        <div className="absolute top-0 h-screen inset-0 bg-gray-900/95 backdrop-blur-sm flex items-center justify-center ">
          <div className="w-full h-full relative">
            {error || contextLost ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-red-500 mb-2">
                    {contextLost
                      ? "WebGL context lost. Please refresh the page."
                      : error?.message}
                  </p>
                </div>
              </div>
            ) : (
              <ThreeDViewer />
            )}
          </div>
        </div>
      )}

      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle3D();
          setError(null);
          setContextLost(false);
        }}
        className="absolute bottom-4 right-20 z-20 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 backdrop-blur-sm hover:scale-105 pointer-events-auto shadow-lg"
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
