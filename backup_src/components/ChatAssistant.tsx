"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: "user" | "ai", text: string}[]>([
    { role: "ai", text: "Hi! I'm the RGAi Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", text: input }]);
    const currentInput = input;
    setInput("");

    // Simulate AI typing
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "ai", 
        text: `Thanks for asking about "${currentInput}". A human agent will be connected to assist you shortly with exact details.` 
      }]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-electric rounded-full flex items-center justify-center z-50 neon-glow hover:scale-110 transition-transform"
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare className="text-black" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 bg-[#111] border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#0a0a0a] border-b border-white/10 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-electric/20 flex items-center justify-center border border-electric/50 relative">
                  <div className="w-2 h-2 rounded-full bg-electric absolute top-0 right-0 animate-pulse" />
                  <span className="font-bold text-xs text-electric">AI</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">RGAi Assistant</h3>
                  <p className="text-xs text-white/50">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="p-4 flex-1 max-h-80 overflow-y-auto space-y-4 custom-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                    msg.role === "user" 
                      ? "bg-electric text-black rounded-tr-sm" 
                      : "bg-white/10 text-white rounded-tl-sm"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-[#0a0a0a]">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-electric transition-colors text-white"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-electric text-black flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
