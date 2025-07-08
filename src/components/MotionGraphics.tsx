import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Box, Torus } from "@react-three/drei";
import * as THREE from "three";

// Floating geometric shape component
function FloatingShape({ 
  position, 
  rotation = [0, 0, 0], 
  color = "#3b82f6",
  shape = "sphere" 
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
  shape?: "sphere" | "box" | "torus";
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.01;
    }
  });

  const shapeProps = {
    ref: meshRef,
    position,
    rotation
  };

  return (
    <mesh {...shapeProps}>
      {shape === "sphere" && <Sphere args={[0.5, 32, 32]} />}
      {shape === "box" && <Box args={[0.8, 0.8, 0.8]} />}
      {shape === "torus" && <Torus args={[0.6, 0.2, 16, 32]} />}
      <meshPhongMaterial 
        color={color} 
        transparent 
        opacity={0.3}
        wireframe={false}
      />
    </mesh>
  );
}

// Particle system component
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#6366f1"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export function MotionGraphics() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: "transparent" }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#8b5cf6" />

        {/* Floating shapes */}
        <FloatingShape 
          position={[-6, 2, -2]} 
          color="#3b82f6" 
          shape="sphere" 
        />
        <FloatingShape 
          position={[6, -1, -3]} 
          color="#8b5cf6" 
          shape="box" 
        />
        <FloatingShape 
          position={[2, 3, -4]} 
          color="#06b6d4" 
          shape="torus" 
        />
        <FloatingShape 
          position={[-3, -2, -1]} 
          color="#3b82f6" 
          shape="sphere" 
        />
        <FloatingShape 
          position={[4, 1, -5]} 
          color="#8b5cf6" 
          shape="box" 
        />

        {/* Particle field */}
        <ParticleField />
      </Canvas>
    </div>
  );
}