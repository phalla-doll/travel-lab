"use client";

import { ChevronRight, Menu } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Flip);
}

const links = [
  "Tours", "Services", "Blog", "About Us",
  "Destinations", "Gallery", "FAQ", "Reviews"
];

export const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: document.body,
      start: "top -50",
      end: "bottom top",
      onToggle: (self) => {
        if (!navRef.current || !containerRef.current) return;
        
        const state = Flip.getState(".nav-link, .nav-container");
        
        if (self.isActive) {
          navRef.current.classList.add("scrolled");
          containerRef.current.classList.add("scrolled-layout");
        } else {
          navRef.current.classList.remove("scrolled");
          containerRef.current.classList.remove("scrolled-layout");
        }
        
        Flip.from(state, {
          duration: 0.5,
          ease: "power2.inOut",
          absolute: true,
          nested: true,
        });
      }
    });
  }, { scope: navRef });

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 flex items-center justify-between py-6 px-4 md:px-8 w-full z-50 transition-all duration-500 bg-transparent [&.scrolled]:bg-white/95 [&.scrolled]:backdrop-blur-md [&.scrolled]:py-3 [&.scrolled]:shadow-sm group">
      <div className="text-xl md:text-2xl font-heading font-bold tracking-widest uppercase shrink-0 transition-all duration-500 group-[.scrolled]:text-lg md:group-[.scrolled]:text-xl">Travel Lab &reg;</div>
      
      <div ref={containerRef} className="nav-container hidden md:grid grid-cols-2 grid-rows-4 grid-flow-col gap-x-16 gap-y-2 text-[12px] font-bold uppercase tracking-widest [&.scrolled-layout]:flex [&.scrolled-layout]:gap-x-6 [&.scrolled-layout]:items-center">
        {links.map((link, i) => (
          <a key={i} href="#" className="nav-link hover:opacity-70 whitespace-nowrap">
            {link}
          </a>
        ))}
      </div>
      
      <div className="flex items-center space-x-4 shrink-0">
        <div className="hidden md:flex items-center border border-black/20 rounded-full px-3 py-1 text-xs font-bold cursor-pointer hover:bg-black hover:text-white transition-colors">
          Eng <ChevronRight className="w-3 h-3 ml-1 rotate-90" />
        </div>
        <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};
