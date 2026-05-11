"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            The RGAi <span className="text-electric">Advantage</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            See how our AI-powered solutions transform traditional, slow business processes into hyper-efficient, automated workflows.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-ew-resize border border-white/10 shadow-2xl"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseUp={() => setIsDragging(false)}
          onTouchEnd={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
        >
          {/* After (Bottom Layer) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#001a33] p-8 md:p-16 flex flex-col justify-center select-none">
            <h3 className="text-4xl md:text-6xl font-display font-bold text-electric glow-text mb-4">RGAi Workflow</h3>
            <ul className="space-y-4 text-white/80 text-lg md:text-xl">
              <li className="flex items-center gap-3">✓ 24/7 AI Lead Qualification</li>
              <li className="flex items-center gap-3">✓ Automated WhatsApp Follow-ups</li>
              <li className="flex items-center gap-3">✓ Instant CRM Sync</li>
              <li className="flex items-center gap-3">✓ Zero Human Error</li>
            </ul>
          </div>

          {/* Before (Top Layer, Clipped) */}
          <div 
            className="absolute inset-0 bg-[#111] p-8 md:p-16 flex flex-col justify-center select-none border-r border-white/20"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <h3 className="text-4xl md:text-6xl font-display font-bold text-white/50 mb-4">Traditional</h3>
            <ul className="space-y-4 text-white/40 text-lg md:text-xl">
              <li className="flex items-center gap-3">✗ Manual Data Entry</li>
              <li className="flex items-center gap-3">✗ Delayed Response Times</li>
              <li className="flex items-center gap-3">✗ Disconnected Tools</li>
              <li className="flex items-center gap-3">✗ Lost Leads</li>
            </ul>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(255,255,255,0.5)] z-20"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-electric rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.6)]">
              <MoveHorizontal className="text-black w-6 h-6" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
