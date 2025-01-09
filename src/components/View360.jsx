import React from 'react';
import { Rotate3D, X } from 'lucide-react';

export default function View360({ show3DView, onToggle3D }) {
  return (
    <>
      {show3DView && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <Rotate3D className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <p className="text-xl text-gray-400">3D View Rendered Here</p>
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