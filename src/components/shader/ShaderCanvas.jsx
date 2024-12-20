import { Canvas } from '@react-three/fiber';
import BgShader from './BgShader';
import { useState } from 'react';

const ShaderCanvas = () => {
  return (
    <div className="h-full w-full fixed -z-50 opacity-45">
      <Canvas>
        <BgShader />
      </Canvas>
    </div>
  );
};

export default ShaderCanvas;
