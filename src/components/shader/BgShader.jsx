import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const BgShader = () => {
  const meshRef = useRef();
  const startTime = useRef(Date.now());

  useFrame(() => {
    const elapsedTime = (Date.now() - startTime.current) / 1000; // Time in seconds
    if (meshRef.current) {
      meshRef.current.material.uniforms.iTime.value = elapsedTime;
    }
  });

  const fragmentShader = `
        precision highp float;
  
          uniform vec2 iResolution;
          uniform float iTime;
  
          void main() {
              // Normalized pixel coordinates (from 0 to 1)
              vec2 fragCoord = gl_FragCoord.xy;
              vec2 uv = (2.0 * fragCoord - iResolution.xy) / min(iResolution.x, iResolution.y);
  
              for (float i = 1.0; i < 10.0; i++) {
                  uv.x += 0.6 / i * cos(i * 2.5 * uv.y + iTime / 6.);
                  uv.y += 0.6 / i * cos(i * 1.5 * uv.x + iTime / 6.);
              }
  
              // Output to screen
              gl_FragColor = vec4(vec3(0.05) / abs(sin(iTime / 6.0 - uv.y - uv.x)), 1.0);
          }
    `;

  const vertexShader = `
        void main() {
            gl_Position = vec4(position, 1.0);
        }
    `;

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        uniforms={{
          iResolution: { value: [window.innerWidth, window.innerHeight] },
          iTime: { value: 0 }
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

export default BgShader;
