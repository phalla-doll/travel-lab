"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "What is the best time to visit Cambodia?",
    answer: "The best time to visit Cambodia is during the dry season, from November to April. The weather is cooler and less humid, making it perfect for exploring the temples of Angkor Wat and relaxing on the beaches."
  },
  {
    question: "Do I need a visa to enter Cambodia?",
    answer: "Yes, most nationalities require a visa to enter Cambodia. You can easily obtain a tourist visa on arrival at major airports and land borders, or apply for an e-Visa online before your trip."
  },
  {
    question: "Is it safe to travel around Cambodia?",
    answer: "Cambodia is generally a safe country for travelers. However, like any destination, it's important to take standard precautions, such as safeguarding your valuables and being aware of your surroundings, especially in crowded areas."
  },
  {
    question: "What currency is used in Cambodia?",
    answer: "The official currency is the Cambodian Riel (KHR), but US Dollars are widely accepted and often preferred for larger transactions. It's recommended to carry small denominations of both currencies."
  },
  {
    question: "Can you customize a tour for my family?",
    answer: "Absolutely! We specialize in creating tailor-made itineraries to suit your specific interests, budget, and travel style. Contact us to start planning your dream Cambodian adventure."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#d4e4f5] min-h-screen flex flex-col p-4 md:p-8">
      <div className="flex-1 flex flex-col lg:flex-row px-4 md:px-8 pt-12 gap-12 lg:gap-24">
        <div className="w-full lg:w-[40%] flex flex-col shrink-0">
          <h2 className="section-title text-[12vw] sm:text-[10vw] lg:text-[8vw] leading-[0.85] font-heading font-black uppercase mb-8">
            FAQS
          </h2>
          <p className="text-sm font-medium mb-12 max-w-md opacity-80 leading-relaxed">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, feel free to reach out to our team.
          </p>
        </div>
        
        <div className="w-full lg:w-[60%] flex flex-col justify-center">
          <div className="border-t border-black/20">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-black/20">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 md:py-8 flex justify-between items-center text-left group"
                >
                  <h3 className={`text-2xl md:text-3xl font-heading font-bold uppercase pr-8 transition-colors ${openIndex === index ? 'text-[#2563eb]' : 'group-hover:text-[#2563eb]'}`}>
                    {faq.question}
                  </h3>
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? 'border-[#2563eb] bg-[#2563eb] text-white' : 'border-black group-hover:border-[#2563eb] group-hover:text-[#2563eb]'}`}>
                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-sm font-medium opacity-80 leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
