"use client";

import { motion } from "framer-motion";

const companies = [
  "OpenAI",
  "Google Cloud",
  "Vercel",
  "Supabase",
  "Stripe",
  "Meta",
  "AWS",
  "NVIDIA",
];

const stats = [
  { label: "Clients Worldwide", value: "200+" },
  { label: "AI Models Deployed", value: "50+" },
  { label: "Uptime Guaranteed", value: "99.9%" },
  { label: "Lines of Code", value: "1M+" },
];

export default function TrustedBy() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#030303]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-center text-sm font-medium text-white/40 mb-10 uppercase tracking-widest">
          Trusted by innovative companies & startups
        </p>

        {/* Marquee */}
        <div className="relative flex overflow-hidden w-full group">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10" />
          
          <div className="flex w-max animate-marquee will-change-transform [transform:translateZ(0)]">
            <div className="flex items-center gap-16 md:gap-32 px-8 md:px-16">
              {companies.map((company, index) => (
                <span key={`set1-${index}`} className="text-2xl md:text-3xl font-display font-bold text-white/20 hover:text-white/80 transition-colors duration-300">
                  {company}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-16 md:gap-32 px-8 md:px-16">
              {companies.map((company, index) => (
                <span key={`set2-${index}`} className="text-2xl md:text-3xl font-display font-bold text-white/20 hover:text-white/80 transition-colors duration-300">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 glass rounded-2xl"
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 glow-text">
                {stat.value}
              </h3>
              <p className="text-sm text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
