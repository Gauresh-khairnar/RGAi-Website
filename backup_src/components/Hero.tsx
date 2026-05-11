"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls, Environment, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import MagneticButton from "./MagneticButton";

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={sphereRef} args={[1, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#00f0ff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </Sphere>
      {/* Inner solid sphere */}
      <Sphere args={[0.8, 32, 32]} scale={1.4}>
        <meshStandardMaterial color="#001a33" roughness={0.1} metalness={0.8} />
      </Sphere>
    </Float>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[#030303]" />
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-electric/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full h-full">
        <div className="flex flex-col items-start gap-8 mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
            <span className="text-electric text-sm font-medium tracking-wide">Next-Gen AI Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight"
          >
            Transforming <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-electric to-blue-500 glow-text">
              Businesses
            </span>{" "}
            With AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed"
          >
            Websites, Applications, AI Agents & Smart Automation Systems built for high-ticket clients and modern startups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <MagneticButton aria-label="Book Free Consultation" className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-electric hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300">
              Book Free Consultation
            </MagneticButton>
            <MagneticButton aria-label="Explore Services" className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-300 glass">
              Explore Services
            </MagneticButton>
          </motion.div>
        </div>

        <div className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="w-full h-full">
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#00f0ff" />
            <pointLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
            <AnimatedSphere />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
          
          {/* Floating UI Elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute top-1/4 right-10 lg:right-0 glass-panel p-4 rounded-2xl flex items-center gap-4 animate-[bounce_4s_infinite]"
          >
            <div className="w-10 h-10 rounded-full bg-electric/20 flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-electric rounded-full border-t-transparent animate-spin" />
            </div>
            <div>
              <p className="text-xs text-white/50">System Status</p>
              <p className="text-sm font-semibold text-white">AI Active</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
