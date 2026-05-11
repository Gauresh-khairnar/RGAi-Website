"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Neo AI Assistant",
    category: "Desktop Application",
    image: "linear-gradient(145deg, #0f172a, #020617)",
  },
  {
    title: "Uday Luxury Salon",
    category: "Premium Website",
    image: "linear-gradient(145deg, #2e1022, #000000)",
  },
  {
    title: "CrickBazaar AI",
    category: "Mobile App & AI",
    image: "linear-gradient(145deg, #082f49, #020617)",
  },
];

const TiltCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[400px] w-full rounded-3xl cursor-pointer group"
    >
      <div 
        className="absolute inset-0 rounded-3xl border border-white/10 shadow-2xl transition-all duration-300 group-hover:border-electric/50"
        style={{ background: project.image, transform: "translateZ(0px)" }}
      />
      
      {/* Floating Content */}
      <div 
        className="absolute inset-0 p-8 flex flex-col justify-end"
        style={{ transform: "translateZ(50px)" }}
      >
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-auto ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <ArrowUpRight className="text-white" />
        </div>
        
        <div>
          <p className="text-electric text-sm font-medium mb-2 tracking-wide uppercase">{project.category}</p>
          <h3 className="text-3xl font-display font-bold text-white group-hover:glow-text transition-all duration-300">{project.title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default function Portfolio() {
  return (
    <section id="work" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Featured <span className="text-electric">Projects</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-lg max-w-lg"
            >
              A selection of our finest work, combining premium design with robust engineering.
            </motion.p>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 font-medium"
          >
            View All Work
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
          {projects.map((project, index) => (
            <TiltCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
