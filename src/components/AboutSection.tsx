"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Award {
  title: string;
  year: string;
  category: string;
}

interface Testimonial {
  id: string;
  client: string;
  role: string;
  quote: string;
  image: string;
  isNew?: boolean;
}

const team: TeamMember[] = [
  {
    name: "ALEX MCCLAIN",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&fit=crop",
  },
  {
    name: "CATHERINE MONROE",
    role: "HEAD OF MARKETING",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&fit=crop",
  },
  {
    name: "MIA LENNOX",
    role: "HEAD OF DESIGN",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&fit=crop",
  },
  {
    name: "MICHAEL ROSENBERG",
    role: "FOUNDER",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&fit=crop",
  },
  {
    name: "JAMES WHITAKER",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&fit=crop",
  },
  {
    name: "CLARISSA WILDER",
    role: "HEAD OF HR",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&fit=crop",
  },
];

const awards: Award[] = [
  {
    title: "SITE OF THE YEAR",
    year: "'25",
    category: "Social Media Awards",
  },
  {
    title: "THE ESSENTIAL DESIGN",
    year: "'25",
    category: "Social Media Awards",
  },
  {
    title: "BEST WEB DESIGN AGENCY",
    year: "'24",
    category: "Small Business Superstar",
  },
  {
    title: "DIGITAL HONOR",
    year: "'23",
    category: "Best SaaS App",
  },
];

const testimonials: Testimonial[] = [
  {
    id: "summa-academy",
    client: "SUMMA ACADEMY",
    role: "Director of Digital",
    quote: "Karta transformed our learning portal. The user experience and visual aesthetic they crafted directly drove a 40% increase in student engagement. Absolutely world-class team.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&fit=crop",
    isNew: true,
  },
  {
    id: "aba",
    client: "ABA UNITED",
    role: "Founder",
    quote: "Working with Karta was seamless. They understood our brand identity instantly and built a custom digital solution that feels modern, fluid, and premium.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&fit=crop",
  },
  {
    id: "zumer-clothing",
    client: "ZUMER CLOTHING",
    role: "Marketing lead",
    quote: "The visual style and digital presence Karta created for our seasonal launch campaign exceeded all expectations. Traffic and online conversions doubled.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&fit=crop",
  },
  {
    id: "dune",
    client: "DUNE",
    role: "Co-Founder",
    quote: "Our search visibility and marketing reach scaled dramatically. The SEO architecture built by their development team is clean, fast, and extremely effective.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&fit=crop",
  },
  {
    id: "rifes",
    client: "RIFES",
    role: "Creative Director",
    quote: "Elegant digital experience. Their UI/UX design is clean, gorgeous, and delivers the exact premium feel our winery needed.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&fit=crop",
  },
];

export default function AboutSection() {
  const [activeTestimonial, setActiveTestimonial] = useState<string | null>("summa-academy");

  return (
    <section id="agency" className="bg-[#121212] text-white border-b border-white/10 pt-24 pb-16">
      
      {/* About Header */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 py-12 md:py-16 items-end gap-6">
        <div className="md:col-span-3 flex items-baseline gap-2">
          <h2 className="font-condensed text-7xl md:text-[140px] font-bold leading-none tracking-tight">
            ABOUT
          </h2>
          <span className="font-condensed text-xl md:text-3xl text-accent font-bold">.02</span>
        </div>
        
        <div className="md:col-span-1 text-sm font-medium text-white/50 md:pb-4 leading-relaxed">
          Team members:
        </div>

        <div className="md:col-span-1 text-right hidden md:block">
          <span className="font-condensed text-7xl md:text-[140px] font-bold leading-none text-white/90">
            35
          </span>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="border-y border-white/10 bg-[#121212]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
          <div className="p-6 md:p-8 flex flex-col justify-between h-[160px] md:h-[200px]">
            <span className="text-xs font-bold text-white/40 tracking-wider">YEAR OF ESTABLISHMENT</span>
            <span className="font-condensed text-5xl md:text-7xl font-bold tracking-wide">2015</span>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-between h-[160px] md:h-[200px]">
            <span className="text-xs font-bold text-white/40 tracking-wider">PROJECTS LAUNCHED</span>
            <span className="font-condensed text-5xl md:text-7xl font-bold tracking-wide">59</span>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-between h-[160px] md:h-[200px]">
            <span className="text-xs font-bold text-white/40 tracking-wider">INCOME OF LAST YEARS</span>
            <span className="font-condensed text-5xl md:text-7xl font-bold tracking-wide">37M</span>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-between h-[160px] md:h-[200px]">
            <span className="text-xs font-bold text-white/40 tracking-wider">FULLY SATISFIED CLIENTS</span>
            <span className="font-condensed text-5xl md:text-7xl font-bold tracking-wide">98%</span>
          </div>
        </div>
      </div>

      {/* Team & Awards Split */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 border-b border-white/10">
        
        {/* Team Grid */}
        <div className="p-6 md:p-12">
          <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase mb-8">TEAM</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group flex flex-col gap-3">
                <div className="relative aspect-square overflow-hidden rounded-full border border-white/10 bg-white/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold tracking-wide text-white group-hover:text-accent transition-colors">
                    {member.name}
                  </span>
                  <span className="text-[11px] font-bold text-white/40 tracking-widest uppercase">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards List */}
        <div className="p-6 md:p-12 flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase mb-8">AWARDS</h3>
            <div className="divide-y divide-white/10">
              {awards.map((award) => (
                <div key={award.title} className="py-5 flex justify-between items-center group">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-2">
                      <h4 className="font-condensed text-2xl md:text-3xl font-bold tracking-wider text-white group-hover:text-accent transition-colors">
                        {award.title}
                      </h4>
                      <span className="font-condensed text-sm font-bold text-accent">{award.year}</span>
                    </div>
                    <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">
                      {award.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Testimonials Interactive Section */}
      <div className="max-w-[1600px] mx-auto p-6 md:p-12">
        <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase mb-8">TESTIMONIALS</h3>
        <div className="divide-y divide-white/10">
          {testimonials.map((t) => {
            const isOpen = activeTestimonial === t.id;
            return (
              <div 
                key={t.id}
                onClick={() => setActiveTestimonial(isOpen ? null : t.id)}
                className="group py-6 cursor-pointer flex flex-col transition-colors duration-300"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-3">
                    <h4 className={`font-condensed text-2xl md:text-4xl font-bold tracking-wider transition-colors ${
                      isOpen ? "text-accent" : "text-white group-hover:text-accent"
                    }`}>
                      {t.client}
                    </h4>
                    {t.isNew && (
                      <span className="bg-accent text-white text-[9px] tracking-widest font-bold px-1.5 py-0.5 rounded-sm">
                        NEW
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.client}
                      className="w-10 h-10 object-cover rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <Plus className={`w-5 h-5 text-white/40 group-hover:text-white transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-accent!" : ""
                    }`} />
                  </div>
                </div>

                {/* Collapsible Quote Block */}
                <div className={`grid transition-all duration-500 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 overflow-hidden"
                }`}>
                  <div className="overflow-hidden">
                    <p className="text-base md:text-lg text-white/70 max-w-3xl leading-relaxed italic pr-8">
                      "{t.quote}"
                    </p>
                    <span className="block mt-2 text-xs font-bold tracking-widest text-white/40 uppercase">
                      — {t.role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
