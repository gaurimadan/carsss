import React from 'react';
import '@google/model-viewer';

export default function View360({ src, iosSrc, poster }) {
  return (
    <model-viewer
      src={src}
      ios-src={iosSrc}
      poster={poster}
      alt="3D model viewer"
      shadow-intensity="1"
      camera-controls
      auto-rotate
      ar
      style={{
        width: '100%',
        height: '400px',
        backgroundColor: '#f0fff4', // Light green background to match our theme
        '--poster-color': '#ffffff00'
      }}
    ></model-viewer>
  );
}

