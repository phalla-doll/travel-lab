import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Menu } from "lucide-react";

const Navbar = () => (
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

const HeroSection = () => {
  return (
    <section className="bg-[#d4e5f4] min-h-screen flex flex-col p-4 md:p-8">
      <Navbar />
      
      <div className="flex-1 flex flex-col mt-4">
        {/* Image Card */}
        <div className="relative w-full h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden">
          <Image src="https://picsum.photos/seed/mountain/1920/1080" alt="Landscape" fill className="object-cover" />
          
          {/* Overlay to make text readable */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
            <h1 className="text-[14vw] leading-[0.8] font-heading font-black text-white text-center uppercase w-full mt-8">
              Discover the world
            </h1>
            
            <div className="w-full flex flex-col md:flex-row justify-between items-end gap-8 mb-12 md:mb-0">
              <div className="w-full md:w-[30%] text-xs font-medium leading-relaxed text-white">
                Travel with confidence with TRAVEL LAB - your trusted guide to breathtaking destinations, thrilling adventures, and unforgettable memories.
                <br/><br/>
                From snow-capped mountains to sun-kissed beaches, we help you explore the world like never before.
              </div>
              
              <div className="w-full md:w-[30%] text-xs font-medium leading-relaxed text-white text-right md:text-left">
                 Choose your destination, preferred travel style, and dates - we&apos;ll take care of the rest.
                 <br/><br/>
                 Our dedicated team of travel experts and local guides ensures every detail is tailored to your needs, whether you&apos;re planning a solo getaway or a family vacation.
              </div>
            </div>
          </div>
          
          {/* Black Button */}
          <div className="absolute bottom-0 right-0 md:right-[10%] bg-[#1a1a1a] text-white rounded-tl-3xl md:rounded-t-3xl md:rounded-b-none px-8 py-5 flex items-center gap-4 cursor-pointer hover:bg-black transition-colors z-20">
            <span className="text-sm font-medium">Select a tour</span>
            <ArrowRight className="w-4 h-4" />
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
  return (
    <section className="bg-[#fbf3d0] min-h-screen flex flex-col p-4 md:p-8">
      <Navbar />
      
      <div className="flex-1 flex flex-col px-4 md:px-8 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-[10vw] md:text-[8vw] leading-[0.8] font-heading font-black uppercase">
            OUR TOURS FOR
          </h2>
          <div className="flex gap-8 text-xl font-heading font-bold uppercase pb-2">
            <span className="border-b-2 border-black pb-1 cursor-pointer">Mountains</span>
            <span className="opacity-50 hover:opacity-100 cursor-pointer transition-opacity">Hiking tour</span>
          </div>
        </div>
        
        <div className="flex gap-8 overflow-x-auto pb-8 snap-x scrollbar-hide">
          {/* Card 1 */}
          <div className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer">
            <div className="text-4xl font-heading font-bold mb-4">01</div>
            <div className="relative h-[300px] w-full rounded-2xl overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
              <Image src="https://picsum.photos/seed/hiker/600/800" alt="Individuals" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-3xl font-heading font-bold uppercase">Individuals</h3>
          </div>
          
          {/* Card 2 (Active) */}
          <div className="min-w-[300px] md:min-w-[400px] snap-start bg-[#fcd34d] p-6 rounded-2xl flex flex-col cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="text-4xl font-heading font-bold mb-4">02</div>
            <div className="relative h-[250px] w-full rounded-2xl overflow-hidden mb-4">
              <Image src="https://picsum.photos/seed/friends/600/800" alt="Friends" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold rotate-[-10deg] shadow-sm group-hover:scale-110 group-hover:rotate-[-5deg] transition-all duration-300">LIKE</div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-3xl font-heading font-bold uppercase">Friends</h3>
              <ArrowUpRight className="w-6 h-6 transform group-hover:scale-125 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </div>
            <p className="text-xs font-medium leading-relaxed opacity-90">
              Create unforgettable memories with your best friends. Whether it&apos;s a hiking adventure, beach getaway, or cultural escape - our group-friendly tours are designed for fun, bonding, and shared experiences.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer">
            <div className="text-4xl font-heading font-bold mb-4">03</div>
            <div className="relative h-[300px] w-full rounded-2xl overflow-hidden mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
              <Image src="https://picsum.photos/seed/family/600/800" alt="Families" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-3xl font-heading font-bold uppercase">Families</h3>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mt-8">
          <button className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-bold">1 / 3</span>
          <button className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

const DestinationsSection = () => {
  return (
    <section className="bg-[#fbc7a1] min-h-screen flex flex-col p-4 md:p-8">
      <Navbar />
      
      <div className="flex-1 flex flex-col md:flex-row px-4 md:px-8 pt-12 gap-16">
        <div className="w-full md:w-1/3 flex flex-col">
          <h2 className="text-[10vw] md:text-[6vw] leading-[0.85] font-heading font-black uppercase mb-8">
            POPULAR<br/>DESTINATIONS
          </h2>
          <p className="text-lg font-bold mb-4">Find your perfect adventure today.</p>
          <p className="text-xs font-medium mb-12 opacity-80 leading-relaxed">
            From breathtaking deserts to lush valleys and vibrant cities - discover the world one destination at a time.
          </p>
          <button className="bg-[#1a1a1a] text-white rounded-full px-8 py-4 flex items-center justify-center gap-4 w-fit hover:bg-black transition-colors">
            <span className="text-sm font-medium">View all tours</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="w-full md:w-2/3 flex gap-8 overflow-x-auto pb-8 snap-x scrollbar-hide">
          {/* Destination Card 1 */}
          <div className="min-w-[300px] md:min-w-[350px] h-[500px] relative rounded-3xl overflow-hidden snap-start group cursor-pointer">
            <Image src="https://picsum.photos/seed/kyoto/600/1000" alt="Kyoto" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute inset-0 p-6 flex flex-col text-white">
              <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-[10px] font-bold w-fit mb-auto border border-white/30">
                KYOTO, JAPAN
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between items-end mb-3">
                  <h3 className="text-3xl font-heading font-bold uppercase leading-none">Kiyomizudera<br/>Temple</h3>
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md rounded-full px-2 py-1 text-xs border border-white/30">
                    <span>★</span> 4.9
                  </div>
                </div>
                <p className="text-[11px] font-medium mb-5 line-clamp-3 opacity-90 leading-relaxed">
                  Step into the serene beauty of the Kyoto Bamboo Forest, where towering bamboo stalks sway gently in the breeze. This iconic location offers a peaceful escape and a unique glimpse into Japan&apos;s natural elegance and cultural heritage.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                  View tour <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Destination Card 2 */}
          <div className="min-w-[300px] md:min-w-[350px] h-[500px] relative rounded-3xl overflow-hidden snap-start group cursor-pointer">
            <Image src="https://picsum.photos/seed/glacier/600/1000" alt="Glacier National Park" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent"></div>
            
            <div className="absolute inset-0 p-6 flex flex-col text-black">
              <div className="bg-white rounded-full px-3 py-1 text-[10px] font-bold w-fit mb-auto border border-black/10">
                MONTANA, USA
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between items-end mb-3">
                  <h3 className="text-3xl font-heading font-bold uppercase leading-none">Glacier<br/>National Park</h3>
                </div>
                <p className="text-[11px] font-medium mb-5 line-clamp-3 opacity-90 leading-relaxed">
                  Located in Montana&apos;s Rocky Mountains, Glacier National Park is a stunning landscape of alpine meadows, deep forests, rugged peaks, and glaciers. Called the &quot;Crown of the Continent,&quot; it offers 700+ miles of trails.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                  View tour <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ServicesSection = () => {
  return (
    <section className="bg-[#f9d1d9] min-h-screen flex flex-col p-4 md:p-8">
      <Navbar />
      
      <div className="flex-1 flex flex-col md:flex-row px-4 md:px-8 pt-12 gap-16">
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="text-[10vw] md:text-[7vw] leading-[0.85] font-heading font-black uppercase mb-8">
            OUR SERVICES
          </h2>
          <p className="text-sm font-medium mb-12 max-w-md opacity-80 leading-relaxed">
            From the moment you book to the end of your journey, we offer reliable services designed to make your travel smooth, safe, and unforgettable.
          </p>
          <button className="bg-[#1a1a1a] text-white rounded-full px-8 py-4 flex items-center justify-center gap-4 w-fit hover:bg-black transition-colors">
            <span className="text-sm font-medium">View all services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col">
          {/* Service 1 */}
          <div className="border-t border-black/20 py-8 flex justify-between items-start group cursor-pointer">
            <div className="w-3/4">
              <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4 group-hover:text-[#e11d48] transition-colors">AIRPORT<br/>PICKUP</h3>
              <p className="text-xs font-medium opacity-80 max-w-xs">We provide pickup and transfer from the airport to the hotel</p>
            </div>
            <ArrowUpRight className="w-8 h-8 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
          
          {/* Service 2 */}
          <div className="border-t border-black/20 py-8 flex justify-between items-start group cursor-pointer">
            <div className="w-3/4">
              <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4 text-[#e11d48]">CAR & BIKE<br/>RENTAL</h3>
              <div className="relative w-full h-[200px] rounded-2xl overflow-hidden mt-6">
                <Image src="https://picsum.photos/seed/car/800/400" alt="Car rental" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <ArrowUpRight className="w-8 h-8 text-[#e11d48] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
          
          {/* Service 3 (partial) */}
          <div className="border-t border-black/20 py-8 flex justify-between items-start group cursor-pointer">
            <div className="w-3/4">
              <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4 group-hover:text-[#e11d48] transition-colors">TOUR<br/>GUIDES</h3>
            </div>
            <ArrowUpRight className="w-8 h-8 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <ToursSection />
      <DestinationsSection />
      <ServicesSection />
    </main>
  );
}
