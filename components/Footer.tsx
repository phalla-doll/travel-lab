"use client";

import { Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-8 px-4 md:px-8 flex flex-col rounded-t-[3rem] -mt-8 relative z-10">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 px-4 md:px-8">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl md:text-5xl font-heading font-bold uppercase mb-6">Ready for your<br/>next adventure?</h3>
          <p className="text-sm font-medium opacity-70 max-w-md mb-8 leading-relaxed">
            Join our newsletter to receive exclusive offers, travel tips, and inspiration for your Cambodian journey.
          </p>
          <div className="flex border-b border-white/30 pb-2 max-w-md focus-within:border-white transition-colors">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border-none outline-none w-full text-sm font-medium placeholder:text-white/30"
            />
            <button className="uppercase text-xs font-bold tracking-wider hover:text-[#fbc7a1] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-wrap gap-12 lg:justify-end">
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Company</h4>
            <a href="#" className="text-sm font-medium hover:text-[#fbc7a1] transition-colors">About Us</a>
            <a href="#" className="text-sm font-medium hover:text-[#fbc7a1] transition-colors">Our Team</a>
            <a href="#" className="text-sm font-medium hover:text-[#fbc7a1] transition-colors">Careers</a>
            <a href="#" className="text-sm font-medium hover:text-[#fbc7a1] transition-colors">Contact</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Destinations</h4>
            <a href="#" className="text-sm font-medium hover:text-[#fbc7a1] transition-colors">Siem Reap</a>
            <a href="#" className="text-sm font-medium hover:text-[#fbc7a1] transition-colors">Phnom Penh</a>
            <a href="#" className="text-sm font-medium hover:text-[#fbc7a1] transition-colors">Koh Rong</a>
            <a href="#" className="text-sm font-medium hover:text-[#fbc7a1] transition-colors">Kampot</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest opacity-50 mb-2">Social</h4>
            <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-[#fbc7a1] transition-colors">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-[#fbc7a1] transition-colors">
              <Facebook className="w-4 h-4" /> Facebook
            </a>
            <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-[#fbc7a1] transition-colors">
              <Twitter className="w-4 h-4" /> Twitter
            </a>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center mt-auto pt-12 border-t border-white/10 overflow-hidden">
        <h1 className="text-[18vw] leading-[0.75] font-heading font-black uppercase text-center w-full tracking-tighter">
          TRAVEL LAB
        </h1>
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 px-4 md:px-8 gap-4">
          <p className="text-xs font-medium opacity-50">© 2026 Travel Lab. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs font-medium opacity-50 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-xs font-medium opacity-50 hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
