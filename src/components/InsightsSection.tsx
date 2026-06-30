"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface InsightPost {
  id: string;
  title: string;
  date: string;
  image: string;
  isNew?: boolean;
}

const smallInsights: InsightPost[] = [
  {
    id: "behind-project",
    title: "BEHIND EVERY PROJECT: THE THINKING THAT FUELS KARTA'S CREATIVE PROCESS.",
    date: "July 17, 2025",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&auto=format&fit=crop",
  },
  {
    id: "creative-perspectives",
    title: "CREATIVE PERSPECTIVES THAT POWER BRANDS, PRODUCTS, AND DIGITAL EXPERIENCES.",
    date: "March 5, 2025",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop",
  },
  {
    id: "beyond-surface",
    title: "GO BEYOND THE SURFACE - DISCOVER THE IDEAS THAT DRIVE OUR STUDIO FORWARD.",
    date: "April 21, 2024",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop",
  },
  {
    id: "rebranding-audience",
    title: "REBRANDING? HERE'S HOW TO DO IT WITHOUT LOSING YOUR AUDIENCE",
    date: "October 9, 2023",
    image: "https://images.unsplash.com/photo-1517502884422-41eaaced0168?w=400&auto=format&fit=crop",
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="bg-[#fcfcfc] border-b border-black/10 pt-24 pb-0">
      
      {/* Insights Header */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 py-12 md:py-16 items-end gap-6">
        <div className="md:col-span-3 flex items-baseline gap-2">
          <h2 className="font-condensed text-7xl md:text-[140px] font-bold leading-none tracking-tight text-black">
            INSIGHTS
          </h2>
          <span className="font-condensed text-xl md:text-3xl text-accent font-bold">.03</span>
        </div>
        
        <div className="md:col-span-1 text-sm font-medium text-black/60 md:pb-4 leading-relaxed">
          What We Know:
        </div>

        <div className="md:col-span-1 text-right hidden md:block">
          <span className="font-condensed text-7xl md:text-[140px] font-bold leading-none text-black/90">
            7
          </span>
        </div>
      </div>

      {/* Featured Insight Card */}
      <div className="border-t border-black/10">
        <div className="max-w-[1600px] mx-auto relative overflow-hidden group aspect-[2/1] min-h-[350px] flex flex-col justify-between p-8 md:p-12">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-103"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop')` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-300" />

          {/* Header Info */}
          <div className="relative z-10 flex justify-between items-center text-white">
            <span className="text-xs font-bold tracking-wider uppercase opacity-90">October 25, 2025</span>
            <span className="bg-accent text-white text-[10px] tracking-widest font-bold px-2 py-0.5 rounded-sm">NEW</span>
          </div>

          {/* Hover Arrow circle */}
          <div className="absolute right-12 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl">
              <ArrowUpRight className="w-6 h-6 text-accent" />
            </div>
          </div>

          {/* Footer Title */}
          <div className="relative z-10 max-w-2xl text-white">
            <h3 className="font-condensed text-3xl md:text-6xl font-bold tracking-wide leading-tight group-hover:text-accent transition-colors">
              HOW SMART DESIGN CAN BOOST CONVERSION RATES
            </h3>
          </div>
        </div>
      </div>

      {/* Grid List of Smaller Insights */}
      <div className="border-t border-black/10 bg-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
          {smallInsights.map((insight) => (
            <div 
              key={insight.id}
              className="p-6 md:p-8 flex flex-col justify-between group cursor-pointer hover:bg-black/[0.005] transition-all h-[360px]"
            >
              <div>
                <span className="text-xs font-bold text-black/40 tracking-wider block mb-4">
                  {insight.date}
                </span>
                
                {/* Square image placeholder */}
                <div className="aspect-video sm:aspect-square overflow-hidden bg-black/5 rounded-sm mb-6 relative">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                </div>
              </div>

              <div>
                <h4 className="font-condensed text-lg md:text-xl font-bold tracking-wider leading-relaxed text-black group-hover:text-accent transition-colors">
                  {insight.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
