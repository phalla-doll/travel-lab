"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroSection = () => {
  return (
    <section className="hero-section bg-[#d4e5f4] min-h-screen flex flex-col p-4 md:p-8 pt-32 md:pt-32">
      <Navbar />
      
      <div className="flex-1 flex flex-col mt-4">
        {/* Image Card */}
        <div className="relative w-full h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden">
          <Image src="/angkor-main-pexels-lkloeppel-2416576.jpg" alt="Angkor Wat" fill className="hero-image object-cover scale-110" />
          
          {/* Overlay to make text readable */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
            <h1 className="hero-text text-[14vw] leading-[0.8] font-heading font-black text-white text-center uppercase w-full mt-8">
              Discover Cambodia
            </h1>
            
            <div className="w-full flex flex-col md:flex-row justify-between items-end gap-8 mb-12 md:mb-0">
              <div className="w-full md:w-[30%] text-xs font-medium leading-relaxed text-white">
                Travel with confidence with TRAVEL LAB - your trusted guide to breathtaking destinations, thrilling adventures, and unforgettable memories in the Kingdom of Wonder.
                <br/><br/>
                From ancient temples to sun-kissed beaches, we help you explore Cambodia like never before.
              </div>
              
              <div className="w-full md:w-[30%] text-xs font-medium leading-relaxed text-white text-right md:text-left">
                 Explore ancient temples, pristine beaches, and vibrant culture - we&apos;ll take care of the rest.
                 <br/><br/>
                 Our dedicated team of travel experts and local guides ensures every detail is tailored to your needs, whether you&apos;re planning a solo getaway or a family vacation.
              </div>
            </div>
          </div>
          
          {/* Black Button */}
          <div className="absolute bottom-0 right-0 md:right-[10%] bg-[#1a1a1a] text-white rounded-tl-3xl md:rounded-t-3xl md:rounded-b-none px-8 py-5 flex items-center gap-4 cursor-pointer hover:bg-black hover:scale-105 origin-bottom transition-all duration-300 z-20 group">
            <span className="text-sm font-medium">Select a tour</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
          <div>
            <h3 className="text-3xl font-heading font-bold uppercase mb-2">1 OR MORE</h3>
            <p className="text-xs font-medium opacity-80">Travel with your family or alone,<br/>we will provide complete comfort</p>
          </div>
          <div className="md:border-l border-black/20 md:pl-8">
            <h3 className="text-3xl font-heading font-bold uppercase mb-2">70+ TOURS</h3>
            <p className="text-xs font-medium opacity-80">Destinations: lush tropical gardens,<br/>pristine beaches and more</p>
          </div>
          <div className="md:border-l border-black/20 md:pl-8">
            <h3 className="text-3xl font-heading font-bold uppercase mb-2">PRO TEAM</h3>
            <p className="text-xs font-medium opacity-80">A personalized guide is a unique<br/>chance to create the trip of your dreams</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const ToursSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#fbf3d0] min-h-screen flex flex-col p-4 md:p-8">
      
      <div className="flex-1 flex flex-col px-4 md:px-8 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="section-title text-[10vw] md:text-[8vw] leading-[0.8] font-heading font-black uppercase">
            OUR TOURS FOR
          </h2>
          <div className="flex gap-8 text-xl font-heading font-bold uppercase pb-2">
            <span className="border-b-2 border-black pb-1 cursor-pointer">Temples</span>
            <span className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity">Jungle Trek</span>
          </div>
        </div>
        
        <div ref={scrollRef} className="flex gap-8 overflow-x-auto pb-8 snap-x scrollbar-hide">
          {/* Card 1 */}
          <div className="parallax-card min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer">
            <div className="text-4xl font-heading font-bold mb-4">01</div>
            <div className="card-image-container relative h-[300px] w-full rounded-2xl overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
              <Image src="/solo-pexels-arina-krasnikova-7350872.jpg" alt="Solo Travelers" fill className="object-cover scale-110 group-hover:scale-125 transition-transform duration-700" />
            </div>
            <h3 className="text-3xl font-heading font-bold uppercase">Solo Travelers</h3>
          </div>
          
          {/* Card 2 (Active) */}
          <div className="parallax-card min-w-[300px] md:min-w-[400px] snap-start bg-[#fcd34d] p-6 rounded-2xl flex flex-col cursor-pointer hover:shadow-xl transition-all duration-300 group">
            <div className="text-4xl font-heading font-bold mb-4">02</div>
            <div className="card-image-container relative h-[250px] w-full rounded-2xl overflow-hidden mb-4">
              <Image src="/friend-group-pexels-kindelmedia-7149130.jpg" alt="Group Tours" fill className="object-cover scale-110 group-hover:scale-125 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold rotate-[-10deg] shadow-sm group-hover:scale-110 group-hover:rotate-[-5deg] transition-all duration-300">LIKE</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-3xl font-heading font-bold uppercase">Group Tours</h3>
              <ArrowUpRight className="w-6 h-6 transform group-hover:scale-125 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </div>
            <p className="text-xs font-medium leading-relaxed opacity-90">
              Create unforgettable memories with your best friends. Whether it&apos;s exploring ancient ruins, a beach getaway, or a cultural escape - our group-friendly tours are designed for fun, bonding, and shared experiences.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="parallax-card min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer">
            <div className="text-4xl font-heading font-bold mb-4">03</div>
            <div className="card-image-container relative h-[300px] w-full rounded-2xl overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
              <Image src="/family-pexels-vika-glitter-392079-1620653.jpg" alt="Family Escapes" fill className="object-cover scale-110 group-hover:scale-125 transition-transform duration-700" />
            </div>
            <h3 className="text-3xl font-heading font-bold uppercase">Family Escapes</h3>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mt-8">
          <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-bold">1 / 3</span>
          <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

const DestinationsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#fbc7a1] min-h-screen flex flex-col p-4 md:p-8">
      
      <div className="flex-1 flex flex-col px-4 md:px-8 pt-12 gap-12">
        <div className="w-full flex flex-col shrink-0">
          <h2 className="section-title text-[15vw] sm:text-[12vw] lg:text-[10vw] leading-[0.85] font-heading font-black uppercase mb-8">
            POPULAR<br/>DESTINATION
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <p className="text-lg font-bold mb-4">Experience the magic of the Kingdom of Wonder.</p>
              <p className="text-xs font-medium opacity-80 leading-relaxed max-w-md">
                From the majestic temples of Siem Reap to the tranquil islands of Koh Rong - discover Cambodia one destination at a time.
              </p>
            </div>
            <button className="bg-[#1a1a1a] text-white rounded-full px-8 py-4 flex items-center justify-center gap-4 w-fit hover:bg-black transition-colors mt-4 md:mt-0 shrink-0">
              <span className="text-sm font-medium">View all tours</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div ref={scrollRef} className="w-full flex gap-8 overflow-x-auto pb-8 snap-x scrollbar-hide">
          {/* Destination Card 1 */}
          <div className="parallax-card card-image-container min-w-[300px] md:min-w-[350px] h-[500px] relative rounded-3xl overflow-hidden snap-start group cursor-pointer">
            <Image src="https://picsum.photos/seed/angkor/600/1000" alt="Angkor Wat" fill className="object-cover scale-110 transition-transform duration-700 group-hover:scale-125" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute inset-0 p-6 flex flex-col text-white">
              <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-[10px] font-bold w-fit mb-auto border border-white/30">
                SIEM REAP, CAMBODIA
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between items-end mb-3">
                  <h3 className="text-3xl font-heading font-bold uppercase leading-none">Angkor<br/>Wat</h3>
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md rounded-full px-2 py-1 text-xs border border-white/30">
                    <span>★</span> 4.9
                  </div>
                </div>
                <p className="text-[11px] font-medium mb-5 line-clamp-3 opacity-90 leading-relaxed">
                  Witness the breathtaking sunrise over the world&apos;s largest religious monument. Explore the ancient ruins, intricate carvings, and the rich history of the Khmer Empire.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                  View tour <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Destination Card 2 */}
          <div className="min-w-[300px] md:min-w-[350px] h-[500px] relative rounded-3xl overflow-hidden snap-start group cursor-pointer">
            <Image src="https://picsum.photos/seed/kohrong/600/1000" alt="Koh Rong Islands" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent"></div>
            
            <div className="absolute inset-0 p-6 flex flex-col text-black">
              <div className="bg-white rounded-full px-3 py-1 text-[10px] font-bold w-fit mb-auto border border-black/10">
                KOH RONG, CAMBODIA
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between items-end mb-3">
                  <h3 className="text-3xl font-heading font-bold uppercase leading-none">Koh Rong<br/>Islands</h3>
                </div>
                <p className="text-[11px] font-medium mb-5 line-clamp-3 opacity-90 leading-relaxed">
                  Escape to pristine white-sand beaches and crystal-clear turquoise waters. Koh Rong offers a tropical paradise perfect for relaxation, snorkeling, and vibrant bioluminescent plankton.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                  View tour <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Destination Card 3 */}
          <div className="min-w-[300px] md:min-w-[350px] h-[500px] relative rounded-3xl overflow-hidden snap-start group cursor-pointer">
            <Image src="https://picsum.photos/seed/phnompenh/600/1000" alt="Royal Palace" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute inset-0 p-6 flex flex-col text-white">
              <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-[10px] font-bold w-fit mb-auto border border-white/30">
                PHNOM PENH, CAMBODIA
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between items-end mb-3">
                  <h3 className="text-3xl font-heading font-bold uppercase leading-none">Royal<br/>Palace</h3>
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md rounded-full px-2 py-1 text-xs border border-white/30">
                    <span>★</span> 4.8
                  </div>
                </div>
                <p className="text-[11px] font-medium mb-5 line-clamp-3 opacity-90 leading-relaxed">
                  Discover the stunning architecture of the Royal Palace and Silver Pagoda. Immerse yourself in the bustling capital city, rich in history, culture, and vibrant street life.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                  View tour <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Destination Card 4 */}
          <div className="min-w-[300px] md:min-w-[350px] h-[500px] relative rounded-3xl overflow-hidden snap-start group cursor-pointer">
            <Image src="https://picsum.photos/seed/kampot/600/1000" alt="Kampot" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent"></div>
            
            <div className="absolute inset-0 p-6 flex flex-col text-black">
              <div className="bg-white rounded-full px-3 py-1 text-[10px] font-bold w-fit mb-auto border border-black/10">
                KAMPOT, CAMBODIA
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between items-end mb-3">
                  <h3 className="text-3xl font-heading font-bold uppercase leading-none">Bokor<br/>Mountain</h3>
                </div>
                <p className="text-[11px] font-medium mb-5 line-clamp-3 opacity-90 leading-relaxed">
                  Experience the cool climate and French colonial ruins of Bokor Hill Station. Taste the world-famous Kampot pepper and enjoy a relaxing sunset cruise along the river.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                  View tour <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Destination Card 5 */}
          <div className="min-w-[300px] md:min-w-[350px] h-[500px] relative rounded-3xl overflow-hidden snap-start group cursor-pointer">
            <Image src="https://picsum.photos/seed/mondulkiri/600/1000" alt="Mondulkiri" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute inset-0 p-6 flex flex-col text-white">
              <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-[10px] font-bold w-fit mb-auto border border-white/30">
                MONDULKIRI, CAMBODIA
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between items-end mb-3">
                  <h3 className="text-3xl font-heading font-bold uppercase leading-none">Elephant<br/>Sanctuary</h3>
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md rounded-full px-2 py-1 text-xs border border-white/30">
                    <span>★</span> 5.0
                  </div>
                </div>
                <p className="text-[11px] font-medium mb-5 line-clamp-3 opacity-90 leading-relaxed">
                  Trek through the lush jungles of eastern Cambodia and interact ethically with rescued elephants in their natural habitat. Discover majestic waterfalls and indigenous culture.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                  View tour <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Destination Card 6 */}
          <div className="min-w-[300px] md:min-w-[350px] h-[500px] relative rounded-3xl overflow-hidden snap-start group cursor-pointer">
            <Image src="https://picsum.photos/seed/battambang/600/1000" alt="Battambang" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent"></div>
            
            <div className="absolute inset-0 p-6 flex flex-col text-black">
              <div className="bg-white rounded-full px-3 py-1 text-[10px] font-bold w-fit mb-auto border border-black/10">
                BATTAMBANG, CAMBODIA
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between items-end mb-3">
                  <h3 className="text-3xl font-heading font-bold uppercase leading-none">Bamboo<br/>Train</h3>
                </div>
                <p className="text-[11px] font-medium mb-5 line-clamp-3 opacity-90 leading-relaxed">
                  Ride the famous Bamboo Train through lush rice paddies, explore well-preserved French colonial architecture, and witness the spectacular bat caves at sunset.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                  View tour <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Destination Card 7 */}
          <div className="min-w-[300px] md:min-w-[350px] h-[500px] relative rounded-3xl overflow-hidden snap-start group cursor-pointer">
            <Image src="https://picsum.photos/seed/kep/600/1000" alt="Kep" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute inset-0 p-6 flex flex-col text-white">
              <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-[10px] font-bold w-fit mb-auto border border-white/30">
                KEP, CAMBODIA
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between items-end mb-3">
                  <h3 className="text-3xl font-heading font-bold uppercase leading-none">Crab<br/>Market</h3>
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md rounded-full px-2 py-1 text-xs border border-white/30">
                    <span>★</span> 4.7
                  </div>
                </div>
                <p className="text-[11px] font-medium mb-5 line-clamp-3 opacity-90 leading-relaxed">
                  Savor the world-renowned Kep crab with fresh Kampot pepper right by the sea. Hike through Kep National Park and relax on quiet, tranquil beaches.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                  View tour <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Destination Card 8 */}
          <div className="min-w-[300px] md:min-w-[350px] h-[500px] relative rounded-3xl overflow-hidden snap-start group cursor-pointer">
            <Image src="https://picsum.photos/seed/preahvihear/600/1000" alt="Preah Vihear" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent"></div>
            
            <div className="absolute inset-0 p-6 flex flex-col text-black">
              <div className="bg-white rounded-full px-3 py-1 text-[10px] font-bold w-fit mb-auto border border-black/10">
                PREAH VIHEAR, CAMBODIA
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between items-end mb-3">
                  <h3 className="text-3xl font-heading font-bold uppercase leading-none">Cliff-top<br/>Temple</h3>
                </div>
                <p className="text-[11px] font-medium mb-5 line-clamp-3 opacity-90 leading-relaxed">
                  Discover this spectacular ancient Hindu temple perched on the edge of a cliff in the Dângrêk Mountains, offering breathtaking panoramic views of the Cambodian plains.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                  View tour <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

const ServicesSection = () => {
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
          {/* Service 1 */}
          <div className="border-t border-black/20 py-8 flex justify-between items-start group cursor-pointer">
            <div className="w-3/4">
              <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4 group-hover:text-[#e11d48] transition-colors">AIRPORT<br/>PICKUP</h3>
              <p className="text-xs font-medium opacity-80 max-w-xs">We provide pickup and transfer from the airport to your hotel</p>
            </div>
            <ArrowUpRight className="w-8 h-8 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
          
          {/* Service 2 */}
          <div className="border-t border-black/20 py-8 flex justify-between items-start group cursor-pointer">
            <div className="w-3/4">
              <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4 text-[#e11d48]">TUK-TUK &<br/>SCOOTER</h3>
              <div className="card-image-container relative w-full h-[200px] rounded-2xl overflow-hidden mt-6">
                <Image src="https://picsum.photos/seed/tuktuk-ride/800/400" alt="Tuk-tuk rental" fill className="object-cover scale-110 group-hover:scale-125 transition-transform duration-700" />
              </div>
            </div>
            <ArrowUpRight className="w-8 h-8 text-[#e11d48] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
          
          {/* Service 3 (partial) */}
          <div className="border-t border-black/20 py-8 flex justify-between items-start group cursor-pointer">
            <div className="w-3/4">
              <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4 group-hover:text-[#e11d48] transition-colors">LOCAL<br/>GUIDES</h3>
            </div>
            <ArrowUpRight className="w-8 h-8 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax for Hero Section Image
    gsap.to(".hero-image", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Parallax for Hero Text
    gsap.to(".hero-text", {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Parallax for Section Titles
    gsap.utils.toArray<HTMLElement>(".section-title").forEach((title) => {
      gsap.fromTo(title, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    // Subtle parallax for cards
    gsap.utils.toArray<HTMLElement>(".parallax-card").forEach((card, i) => {
      gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });
    
    // Image parallax inside cards
    gsap.utils.toArray<HTMLElement>(".card-image-container").forEach((container) => {
      const img = container.querySelector("img");
      if (img) {
        gsap.to(img, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      }
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="flex flex-col w-full">
      <HeroSection />
      <ToursSection />
      <DestinationsSection />
      <ServicesSection />
      <TestimonialsSection />
    </main>
  );
}
