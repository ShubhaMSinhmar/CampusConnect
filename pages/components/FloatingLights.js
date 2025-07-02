// FloatingLights.js
import React from 'react';

const FloatingLights = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-400/20 blur-3xl rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-40 h-40 bg-cyan-400/30 rounded-full animate-bounce"></div>
      <div className="absolute top-16 left-10 w-24 h-24 bg-white/20 rounded-full animate-bounce delay-200"></div>
    </div>
  );
};

export default FloatingLights;