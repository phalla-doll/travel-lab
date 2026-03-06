import { ChevronRight, Menu } from "lucide-react";

export const Navbar = () => (
  <nav className="flex items-center justify-between py-6 px-4 md:px-8 w-full z-50">
    <div className="text-xl font-heading font-bold tracking-widest uppercase">Travel Lab &reg;</div>
    <div className="hidden md:flex space-x-16 text-[10px] font-bold uppercase tracking-widest">
      <div className="flex flex-col space-y-2">
        <a href="#" className="hover:opacity-70">Tours</a>
        <a href="#" className="hover:opacity-70">Services</a>
        <a href="#" className="hover:opacity-70">Blog</a>
        <a href="#" className="hover:opacity-70">About Us</a>
      </div>
      <div className="flex flex-col space-y-2">
        <a href="#" className="hover:opacity-70">Destinations</a>
        <a href="#" className="hover:opacity-70">Gallery</a>
        <a href="#" className="hover:opacity-70">FAQ</a>
        <a href="#" className="hover:opacity-70">Reviews</a>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <div className="hidden md:flex items-center border border-black/20 rounded-full px-3 py-1 text-xs font-bold cursor-pointer hover:bg-black hover:text-white transition-colors">
        Eng <ChevronRight className="w-3 h-3 ml-1 rotate-90" />
      </div>
      <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
        <Menu className="w-6 h-6" />
      </button>
    </div>
  </nav>
);
