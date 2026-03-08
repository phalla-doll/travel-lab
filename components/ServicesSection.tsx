"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const services = [
  {
    id: "airport",
    title: "AIRPORT\nPICKUP",
    description: "We provide pickup and transfer from the airport to your hotel. Our professional drivers will be waiting for you at the arrivals hall with a sign bearing your name, ensuring a smooth and stress-free start to your journey.",
    image: "https://picsum.photos/seed/airport-transfer/800/400"
  },
  {
    id: "tuktuk",
    title: "TUK-TUK &\nSCOOTER",
    description: "Explore the city at your own pace with our reliable tuk-tuk and scooter rentals. Whether you're navigating the bustling streets of Phnom Penh or cruising around the temples of Angkor, we have the perfect ride for you.",
    image: "https://picsum.photos/seed/tuktuk-ride/800/400"
  },
  {
    id: "guides",
    title: "LOCAL\nGUIDES",
    description: "Discover the hidden gems and rich history of Cambodia with our knowledgeable local guides. Fluent in multiple languages, they will provide you with an authentic and insightful experience that you won't find in any guidebook.",
    image: "https://picsum.photos/seed/local-guide/800/400"
  }
];

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState<string | null>("tuktuk");

  return (
    <section className="bg-[#f9d1d9] min-h-screen flex flex-col p-4 md:p-8">
      
      <div className="flex-1 flex flex-col lg:flex-row px-4 md:px-8 pt-12 gap-8 lg:gap-16">
        <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col shrink-0">
          <h2 className="section-title text-[12vw] sm:text-[10vw] lg:text-[7vw] xl:text-[8vw] leading-[0.85] font-heading font-black uppercase mb-8">
            OUR SERVICES
          </h2>
          <p className="text-sm font-medium mb-12 max-w-md opacity-80 leading-relaxed">
            From the moment you arrive in Phnom Penh or Siem Reap, we offer reliable services designed to make your Cambodian journey smooth, safe, and unforgettable.
          </p>
          <button className="bg-[#1a1a1a] text-white rounded-full px-8 py-4 flex items-center justify-center gap-4 w-fit hover:bg-black transition-colors">
            <span className="text-sm font-medium">View all services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="w-full lg:w-[55%] xl:w-[60%] flex flex-col">
          {services.map((service) => {
            const isActive = activeService === service.id;
            
            return (
              <div 
                key={service.id}
                className="border-t border-black/20 py-8 flex justify-between items-start group cursor-pointer"
                onClick={() => setActiveService(isActive ? null : service.id)}
              >
                <div className="w-3/4">
                  <h3 className={`text-4xl md:text-5xl font-heading font-bold uppercase mb-4 transition-colors ${isActive ? 'text-[#e11d48]' : 'group-hover:text-[#e11d48]'}`}>
                    {service.title.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i === 0 && <br/>}
                      </span>
                    ))}
                  </h3>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs font-medium opacity-80 max-w-md leading-relaxed mt-2 mb-6">
                          {service.description}
                        </p>
                        <div className="card-image-container relative w-full h-[200px] md:h-[250px] rounded-2xl overflow-hidden mb-4">
                          <Image 
                            src={service.image} 
                            alt={service.title.replace('\n', ' ')} 
                            fill 
                            className="object-cover scale-110 group-hover:scale-125 transition-transform duration-700" 
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <ArrowUpRight className={`w-8 h-8 transition-all duration-300 ${isActive ? 'text-[#e11d48] rotate-45' : 'opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
