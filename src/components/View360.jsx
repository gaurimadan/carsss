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
        className="absolute bottom-4 right-4 sm:right-20 z-20 
    bg-purple-500 hover:bg-purple-600 
    text-white 
    px-4 sm:px-6
    py-2 sm:py-3
    rounded-full 
    flex items-center gap-1.5 sm:gap-1.5 
    transition-all duration-300 
    backdrop-blur-sm 
    hover:scale-105 
    shadow-lg
    text-sm sm:text-base
    touch-manipulation"
      >
        <Rotate3D className="w-4 h-4 sm:w-4 sm:h-4" />
        <span className="whitespace-nowrap">View in 3D</span>
      </button>

      {(error || contextLost) && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/75 backdrop-blur-sm z-50 p-4">
          <div className="bg-gray-800 rounded-lg p-4 sm:p-6 max-w-md mx-auto text-center">
            <p className="text-red-500 text-sm sm:text-base">
              {contextLost
                ? "WebGL context lost. Please refresh the page."
                : error?.message}
            </p>
          </div>
        </div>
      )}
    </>
  );
}