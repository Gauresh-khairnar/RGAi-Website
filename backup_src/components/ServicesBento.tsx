"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Bot, MessageCircle, BarChart3, Globe } from "lucide-react";
import React, { useRef, useState } from "react";

const services = [
  {
    title: "Web Development",
    description: "Premium, high-performance websites built with modern frameworks.",
    icon: <Globe className="w-8 h-8 text-electric relative z-10" />,
    colSpan: "md:col-span-2",
  },
  {
    title: "AI Agents",
    description: "Custom AI agents to automate your complex business workflows.",
    icon: <Bot className="w-8 h-8 text-blue-500 relative z-10" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "App Development",
    description: "Cross-platform mobile applications that users love.",
    icon: <Smartphone className="w-8 h-8 text-purple-500 relative z-10" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "WhatsApp Automation",
    description: "Intelligent chatbots for 24/7 customer support and sales.",
    icon: <MessageCircle className="w-8 h-8 text-green-500 relative z-10" />,
    colSpan: "md:col-span-2",
  },
  {
    title: "Business Intelligence",
    description: "AI-driven analytics to make data-backed decisions.",
    icon: <BarChart3 className="w-8 h-8 text-orange-500 relative z-10" />,
    colSpan: "md:col-span-1",
  },
  {
    title: "CRM Development",
    description: "Scalable systems to manage your leads and clients effectively.",
    icon: <Code className="w-8 h-8 text-pink-500 relative z-10" />,
    colSpan: "md:col-span-2",
  },
];

const SpotlightCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`glass-panel p-8 rounded-3xl flex flex-col justify-between group relative overflow-hidden ${service.colSpan} border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 240, 255, 0.1), transparent 40%)`,
        }}
      />
      
      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {service.icon}
      </div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-electric transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-white/50 group-hover:text-white/70 transition-colors duration-300">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function ServicesBento() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#030303]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-blue-600">Innovation</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl"
          >
            We build scalable, high-performance digital products and intelligent automation systems to skyrocket your growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {services.map((service, index) => (
            <SpotlightCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
