"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold mb-6"
            >
              Let's Build The <span className="text-electric glow-text">Future</span> Together
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-lg max-w-lg mb-12"
            >
              Ready to automate your business and scale with AI? Drop us a message, and our team will get back to you within 24 hours.
            </motion.p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center border-white/10">
                  <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Email Us</p>
                  <p className="font-medium text-lg">rgai.tech@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-3xl"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-electric/20 flex items-center justify-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-electric animate-ping" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-white/60">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-white/70">Name</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-electric transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/70">Email</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-electric transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Service Required</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-electric transition-colors appearance-none text-white">
                    <option className="bg-[#111]">AI Automation</option>
                    <option className="bg-[#111]">Web Development</option>
                    <option className="bg-[#111]">App Development</option>
                    <option className="bg-[#111]">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/70">Message</label>
                  <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-electric transition-colors resize-none" />
                </div>
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl bg-electric text-black font-bold flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 neon-glow disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
