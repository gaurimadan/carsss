import React, { useState, useEffect } from "react";
import { Rotate3D } from "lucide-react";
import ThreeDViewer from "./three";

export default function View360() {
  const [show3DView, setShow3DView] = useState(false);
  const [error, setError] = useState(null);
  const [contextLost, setContextLost] = useState(false);

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
      <ThreeDViewer 
        show3DView={show3DView} 
        onClose={() => {
          setShow3DView(false);
          setError(null);
          setContextLost(false);
        }} 
      />

      <button
        onClick={(e) => {
          e.stopPropagation();
          setShow3DView(true);
        }}
        className="absolute bottom-4 right-20 z-20 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 backdrop-blur-sm hover:scale-105 pointer-events-auto shadow-lg"
      >
        <Rotate3D className="w-5 h-5" />
        <span>View in 3D</span>
      </button>
    </>
  );
}