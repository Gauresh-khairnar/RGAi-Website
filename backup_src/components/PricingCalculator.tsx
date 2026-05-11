"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

type ServiceOption = {
  id: string;
  name: string;
  price: number;
  category: string;
};

const options: ServiceOption[] = [
  { id: "web-starter", name: "Starter Website", price: 9999, category: "Website" },
  { id: "web-business", name: "Business Website", price: 14999, category: "Website" },
  { id: "web-premium", name: "Premium Website", price: 29999, category: "Website" },
  
  { id: "app-basic", name: "Basic App", price: 19999, category: "Application" },
  { id: "app-premium", name: "Premium App", price: 79999, category: "Application" },
  
  { id: "ai-chatbot", name: "AI Chatbot", price: 24999, category: "AI Services" },
  { id: "ai-agent", name: "AI Agent Automation", price: 49999, category: "AI Services" },
  
  { id: "marketing-meta", name: "Meta Ads Management", price: 7999, category: "Marketing" },
  { id: "marketing-google", name: "Google Ads Setup", price: 9999, category: "Marketing" },
  
  { id: "auto-whatsapp", name: "WhatsApp Automation", price: 14999, category: "Automation" },
  { id: "auto-crm", name: "CRM + Lead Management", price: 19999, category: "Automation" },
];

export default function PricingCalculator() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (id: string) => {
    setSelected((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalPrice = selected.reduce((sum, id) => {
    const item = options.find((opt) => opt.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const categories = Array.from(new Set(options.map(opt => opt.category)));

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-electric/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Transparent <span className="text-electric">Pricing</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Select the services you need and instantly get an estimated project cost. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Options */}
          <div className="lg:col-span-2 space-y-12">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="text-2xl font-display font-semibold mb-6 border-b border-white/10 pb-2">
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {options.filter(opt => opt.category === category).map((option) => (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleOption(option.id)}
                      className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                        selected.includes(option.id)
                          ? "bg-electric/20 border-electric shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                          : "glass border-white/10 hover:border-white/30"
                      }`}
                    >
                      <span className="font-medium">{option.name}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-white/60">₹{option.price.toLocaleString()}</span>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                          selected.includes(option.id) ? "bg-electric border-electric text-black" : "border-white/20"
                        }`}>
                          {selected.includes(option.id) && <Check size={14} strokeWidth={3} />}
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Total */}
          <div className="relative">
            <div className="sticky top-32 glass-panel p-8 rounded-3xl border-t border-white/20">
              <h3 className="text-xl font-display font-medium text-white/60 mb-2">Estimated Total</h3>
              <div className="text-5xl font-display font-bold text-white mb-8 glow-text">
                ₹{totalPrice.toLocaleString()}
              </div>

              <div className="space-y-4 mb-8 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {selected.length === 0 ? (
                  <p className="text-white/40 text-sm">Select services to see your estimate.</p>
                ) : (
                  selected.map(id => {
                    const item = options.find(opt => opt.id === id);
                    return item && (
                      <div key={id} className="flex justify-between text-sm">
                        <span className="text-white/80">{item.name}</span>
                        <span className="text-white/60">₹{item.price.toLocaleString()}</span>
                      </div>
                    );
                  })
                )}
              </div>

              <button 
                disabled={selected.length === 0}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                  selected.length > 0 
                    ? "bg-electric text-black hover:bg-white neon-glow cursor-pointer" 
                    : "bg-white/10 text-white/40 cursor-not-allowed"
                }`}
              >
                Proceed With Proposal <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
