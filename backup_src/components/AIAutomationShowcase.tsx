"use client";

import { motion } from "framer-motion";
import { Bot, MessageSquare, Database, ArrowRight, Zap, PhoneCall } from "lucide-react";

export default function AIAutomationShowcase() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-sm mb-6"
          >
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-blue-500 text-sm font-medium tracking-wide">Workflow Automation</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Automate Your Entire Business
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Watch how our intelligent AI agents handle your customer support, sales pipelines, and daily operations 24/7 without breaking a sweat.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto h-auto min-h-[500px] rounded-3xl border border-white/10 bg-black/50 p-8 md:p-12 glass shadow-2xl">
          {/* Neural lines background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"2\" cy=\"2\" r=\"1\" fill=\"white\"/></svg>')", backgroundSize: "30px 30px" }} />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 relative z-10 h-full">
            
            {/* Step 1 */}
            <motion.div 
              className="flex flex-col items-center z-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] relative">
                <MessageSquare className="w-10 h-10 text-white" />
                <motion.div 
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold shadow-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  3
                </motion.div>
              </div>
              <p className="mt-4 font-display font-semibold text-center">Incoming<br/>Leads</p>
            </motion.div>

            {/* Connecting Line 1 */}
            <div className="hidden md:block flex-1 h-[2px] bg-white/10 relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-electric w-1/4 shadow-[0_0_10px_#00f0ff]"
                animate={{ left: ["0%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
            </div>
            <ArrowRight className="md:hidden text-white/20 w-8 h-8" />

            {/* Step 2 (Central AI) */}
            <motion.div 
              className="flex flex-col items-center z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-32 h-32 rounded-full border border-electric/50 flex items-center justify-center relative neon-glow bg-electric/10">
                <div className="absolute inset-0 rounded-full border border-electric border-dashed animate-[spin_10s_linear_infinite]" />
                <Bot className="w-16 h-16 text-electric" />
              </div>
              <p className="mt-6 font-display font-bold text-xl text-electric text-center glow-text">RGAi Agent<br/>Processing</p>
            </motion.div>

            {/* Connecting Line 2 */}
            <div className="hidden md:block flex-1 h-[2px] bg-white/10 relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-purple-500 w-1/4 shadow-[0_0_10px_#a855f7]"
                animate={{ left: ["0%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1, ease: "linear" }}
              />
            </div>
            <ArrowRight className="md:hidden text-white/20 w-8 h-8" />

            {/* Step 3 (Actions) */}
            <div className="flex flex-col gap-6 z-10 w-full md:w-auto">
              <motion.div 
                className="flex items-center gap-4 p-4 glass-panel rounded-xl border-l-2 border-l-blue-500"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Database className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">CRM Updated</h4>
                  <p className="text-xs text-white/50">Lead instantly added</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-4 p-4 glass-panel rounded-xl border-l-2 border-l-purple-500"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <PhoneCall className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">AI Calling</h4>
                  <p className="text-xs text-white/50">Follow-up call initiated</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
