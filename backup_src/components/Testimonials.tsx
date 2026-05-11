"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO at TechFlow",
    content: "RGAi completely transformed our sales pipeline. Their custom AI agents now handle 80% of our lead qualification automatically.",
    rating: 5,
  },
  {
    name: "Marcus Thorne",
    role: "Founder, Elevate App",
    content: "The web and mobile app they built for us feels world-class. It's fast, beautifully designed, and the AI integration is flawless.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Marketing Director",
    content: "Their WhatsApp automation system is a game changer. We've seen a 300% increase in customer engagement within the first month.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Operations Manager",
    content: "From the initial consultation to final delivery, RGAi operates like a true Silicon Valley startup. Premium quality across the board.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold text-center"
        >
          Loved by <span className="text-electric glow-text">Founders</span>
        </motion.h2>
      </div>

      <div className="relative flex overflow-hidden w-full py-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] will-change-transform [transform:translateZ(0)]">
          {/* First Set */}
          <div className="flex items-center gap-8 px-4">
            {testimonials.map((t, index) => (
              <div key={`set1-${index}`} className="w-[400px] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] p-8 rounded-3xl flex-shrink-0">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-electric fill-electric" />
                  ))}
                </div>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric/50 to-blue-600/50 flex items-center justify-center font-bold text-lg border border-white/20">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-sm text-white/50">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second Set (Duplicate) */}
          <div className="flex items-center gap-8 px-4">
            {testimonials.map((t, index) => (
              <div key={`set2-${index}`} className="w-[400px] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] p-8 rounded-3xl flex-shrink-0">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-electric fill-electric" />
                  ))}
                </div>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric/50 to-blue-600/50 flex items-center justify-center font-bold text-lg border border-white/20">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-sm text-white/50">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
