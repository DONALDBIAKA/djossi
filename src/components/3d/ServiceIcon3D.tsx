import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

interface ServiceIcon3DProps {
  color?: string;
  children: React.ReactNode;
}

export const ServiceIcon3D: React.FC<ServiceIcon3DProps> = ({ color = '#22c55e', children }) => {
  return (
    <div className="w-24 h-24">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <motion.group
          animate={{
            rotateY: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {children}
        </motion.group>
      </Canvas>
    </div>
  );
};