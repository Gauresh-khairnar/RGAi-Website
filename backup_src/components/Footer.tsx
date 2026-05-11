import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#030303] pt-24 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-electric/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-electric/20 flex items-center justify-center border border-electric/50">
                <div className="w-3 h-3 rounded-full bg-electric" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                RGAi<span className="text-electric">.</span>
              </span>
            </Link>
            <p className="text-white/60 max-w-sm mb-8 text-lg">
              Transforming businesses with AI-powered automation, premium web experiences, and scalable software.
            </p>
            <a href="mailto:rgai.tech@gmail.com" className="inline-flex items-center gap-2 text-white hover:text-electric transition-colors font-medium text-lg border-b border-white/20 hover:border-electric pb-1">
              rgai.tech@gmail.com
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {["AI Automation", "Web Development", "App Development", "SEO & Marketing", "UI/UX Design"].map((item) => (
                <li key={item}>
                  <Link href={`#services`} className="text-white/60 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {["About Us", "Work", "Pricing", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-sm">
          <p>&copy; {currentYear} RGAi Technology Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
