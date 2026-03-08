"use client";

import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "ESSENTIAL",
    price: "99",
    period: "/ day",
    description: "Perfect for solo travelers wanting the basics covered.",
    features: [
      "Airport pickup & drop-off",
      "Shared Tuk-Tuk transport",
      "Group temple tours",
      "Standard local guide",
      "24/7 phone support"
    ],
    isPopular: false,
    buttonText: "Start Basic"
  },
  {
    name: "PREMIUM",
    price: "199",
    period: "/ day",
    description: "Our most popular choice for couples and small families.",
    features: [
      "VIP Airport fast-track",
      "Private AC car transport",
      "Private temple tours",
      "Expert historian guide",
      "Daily breakfast included",
      "Priority booking"
    ],
    isPopular: true,
    buttonText: "Go Premium"
  },
  {
    name: "LUXURY",
    price: "399",
    period: "/ day",
    description: "The ultimate VIP experience with zero compromises.",
    features: [
      "Helicopter airport transfer",
      "Luxury SUV transport",
      "Exclusive sunrise access",
      "Renowned local expert guide",
      "All meals & drinks included",
      "Professional photographer"
    ],
    isPopular: false,
    buttonText: "Experience Luxury"
  }
];

export const PricingSection = () => {
  return (
    <section className="bg-[#e5d4f5] min-h-screen flex flex-col p-4 md:p-8">
      <div className="flex-1 flex flex-col px-4 md:px-8 pt-12 gap-8">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-8">
          <div className="w-full lg:w-[60%] shrink-0">
            <h2 className="section-title text-[12vw] sm:text-[10vw] lg:text-[8vw] leading-[0.85] font-heading font-black uppercase">
              CHOOSE<br/>YOUR PLAN
            </h2>
          </div>
          <p className="text-sm font-medium max-w-sm opacity-80 leading-relaxed pb-2">
            Transparent pricing with no hidden fees. Whether you&apos;re backpacking or seeking luxury, we have a package tailored for your Cambodian adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 items-center pb-12">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 md:p-10 flex flex-col h-full transition-transform duration-500 hover:-translate-y-2 ${
                plan.isPopular 
                  ? 'bg-[#1a1a1a] text-white lg:scale-105 z-10 shadow-2xl' 
                  : 'bg-white/60 backdrop-blur-sm border border-white text-black'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#fcd34d] text-black text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-b-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-heading font-bold uppercase tracking-widest mb-2 mt-4">{plan.name}</h3>
              <p className={`text-xs font-medium mb-8 ${plan.isPopular ? 'opacity-70' : 'opacity-60'}`}>
                {plan.description}
              </p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl md:text-6xl font-heading font-black">${plan.price}</span>
                <span className={`text-sm font-bold uppercase tracking-wider ${plan.isPopular ? 'opacity-70' : 'opacity-50'}`}>{plan.period}</span>
              </div>
              
              <div className="flex flex-col gap-4 mb-12 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.isPopular ? 'bg-white/20' : 'bg-black/10'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full py-4 rounded-full flex items-center justify-center gap-2 transition-colors group ${
                plan.isPopular 
                  ? 'bg-white text-black hover:bg-[#fcd34d]' 
                  : 'bg-[#1a1a1a] text-white hover:bg-black'
              }`}>
                <span className="text-sm font-bold uppercase tracking-wider">{plan.buttonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
