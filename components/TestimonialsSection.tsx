"use client";

import Image from "next/image";
import { ArrowRight, ArrowLeft, Star } from "lucide-react";
import { useState, useRef } from "react";
import gsap from "gsap";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "London, UK",
    text: "Our trip to Angkor Wat was absolutely magical. The guide was incredibly knowledgeable and knew exactly when to visit each temple to avoid the crowds. A truly premium experience from start to finish.",
    rating: 5,
    image: "https://picsum.photos/seed/sarah/800/1000"
  },
  {
    id: 2,
    name: "Marcus Chen",
    location: "Singapore",
    text: "The attention to detail was impeccable. From the seamless airport pickup to the curated dining experiences in Phnom Penh, Travel Lab exceeded all our expectations. Highly recommended for luxury travelers.",
    rating: 5,
    image: "https://picsum.photos/seed/marcus/800/1000"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    text: "We spent three days in Koh Rong and it was paradise. The team arranged a private boat tour that was the highlight of our Cambodian adventure. Professional, friendly, and perfectly organized.",
    rating: 5,
    image: "https://picsum.photos/seed/elena/800/1000"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

  const next = () => {
    animateTransition(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    });
  };

  const prev = () => {
    animateTransition(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    });
  };

  const animateTransition = (updateState: () => void) => {
    gsap.to([textRef.current, imageRef.current, nameRef.current], {
      opacity: 0,
      y: 10,
      duration: 0.3,
      onComplete: () => {
        updateState();
        gsap.to([textRef.current, imageRef.current, nameRef.current], {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out"
        });
      }
    });
  };

  return (
    <section className="bg-[#dcf5d4] min-h-screen flex flex-col p-4 md:p-8">
      <div className="flex-1 flex flex-col px-4 md:px-8 pt-12 gap-12">
        <div className="w-full flex flex-col shrink-0">
          <h2 className="section-title text-[12vw] sm:text-[10vw] lg:text-[8vw] leading-[0.85] font-heading font-black uppercase mb-8">
            WHAT THEY<br/>SAY
          </h2>
        </div>
        
        <div className="flex-1 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-center mt-8 pb-12">
          {/* Left side: Image/Visual */}
          <div className="w-full lg:w-1/3 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden parallax-card group">
            <Image 
              ref={imageRef}
              src={testimonials[currentIndex].image} 
              alt={testimonials[currentIndex].name} 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full">
              <div className="flex gap-1 mb-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-black text-black" />
                ))}
              </div>
              <p className="text-xs font-bold uppercase tracking-wider">{testimonials[currentIndex].name}</p>
            </div>
          </div>

          {/* Right side: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="relative">
              <span className="text-[100px] md:text-[120px] leading-none font-heading font-black text-black/10 absolute -top-12 md:-top-16 left-0 md:-left-8">&quot;</span>
              <p ref={textRef} className="text-2xl md:text-4xl font-heading font-medium leading-relaxed relative z-10 min-h-[200px] md:min-h-[250px] flex items-center">
                {testimonials[currentIndex].text}
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-black/20">
              <div ref={nameRef}>
                <h4 className="text-xl font-heading font-bold uppercase">{testimonials[currentIndex].name}</h4>
                <p className="text-xs font-medium opacity-60 uppercase tracking-widest mt-1">{testimonials[currentIndex].location}</p>
              </div>
              
              <div className="flex gap-2 md:gap-4 shrink-0">
                <button 
                  onClick={prev}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button 
                  onClick={next}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                >
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
