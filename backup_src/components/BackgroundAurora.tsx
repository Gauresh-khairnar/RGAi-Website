"use client";

import { motion } from "framer-motion";

export default function BackgroundAurora() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#030303]">
      <motion.div
        animate={{
          x: ["0%", "20%", "-10%", "0%"],
          y: ["0%", "-20%", "10%", "0%"],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 mix-blend-screen blur-[120px] opacity-60"
      />
      <motion.div
        animate={{
          x: ["0%", "-20%", "20%", "0%"],
          y: ["0%", "20%", "-20%", "0%"],
          scale: [1, 1.5, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-electric/10 mix-blend-screen blur-[120px] opacity-60"
      />
      <motion.div
        animate={{
          x: ["0%", "30%", "-20%", "0%"],
          y: ["0%", "10%", "-30%", "0%"],
          scale: [1, 0.9, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-purple-600/10 mix-blend-screen blur-[150px] opacity-50"
      />
      
      {/* Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      />
    </div>
  );
}
