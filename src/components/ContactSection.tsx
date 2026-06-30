"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contacts" className="bg-[#121212] text-white pt-24 pb-12 border-t border-white/10">
      
      {/* Contact Header */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 py-12 md:py-16 items-end gap-6">
        <div className="md:col-span-3 flex items-baseline gap-2">
          <h2 className="font-condensed text-7xl md:text-[140px] font-bold leading-none tracking-tight">
            CONTACT
          </h2>
          <span className="font-condensed text-xl md:text-3xl text-accent font-bold">.04</span>
        </div>
        
        <div className="md:col-span-2 text-right hidden md:block">
          <span className="font-condensed text-7xl md:text-[140px] font-bold leading-none text-white/95">
            US
          </span>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="border-y border-white/10">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Ways to Contact Column */}
          <div className="p-8 md:p-12 flex flex-col justify-between h-[360px]">
            <div>
              <span className="text-xs font-bold text-white/40 tracking-widest uppercase block mb-6">
                WAYS TO CONTACT
              </span>
              <a 
                href="mailto:hello@karta.agency" 
                className="font-condensed text-4xl md:text-6xl font-bold tracking-wider hover:text-accent transition-colors block mb-4"
              >
                HELLO@KARTA.AGENCY
              </a>
              <a 
                href="tel:+14155702791" 
                className="font-condensed text-2xl md:text-4xl font-semibold text-white/60 hover:text-white transition-colors block"
              >
                1 (415) 570-2791
              </a>
            </div>

            {/* Social media connections */}
            <div className="flex items-center gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white font-bold text-xs tracking-wider transition-all duration-300">
                Bē
              </a>
            </div>
          </div>


          {/* Subscribe Form Column */}
          <div className="p-8 md:p-12 flex flex-col justify-between h-[360px]">
            <div>
              <span className="text-xs font-bold text-white/40 tracking-widest uppercase block mb-6">
                SUBSCRIBE FOR UPDATES
              </span>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
                <span className="text-xs font-bold text-white/50 tracking-wider">EMAIL</span>
                <div className="relative flex items-center border-b border-white/20 hover:border-white transition-colors pb-2">
                  <input
                    type="email"
                    required
                    placeholder="Your Email (Required)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-lg text-white placeholder-white/30 focus:outline-hidden py-1 pr-12"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 shadow-lg"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>

              {submitted && (
                <span className="text-xs text-accent font-semibold block mt-4 animate-fadeIn">
                  Thank you! You have successfully subscribed.
                </span>
              )}
            </div>

            <div>
              <span className="text-[11px] text-white/40 leading-relaxed max-w-sm block">
                By submitting, you agree to our Terms and Privacy Policy
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Details Grid */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
          
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-white/30 uppercase tracking-widest">Karta © 2026</span>
            <span className="text-xs text-white/40 font-medium">All right reserved</span>
            <a href="#" className="text-xs font-bold hover:text-accent text-white/60 transition-colors mt-2">404 Page</a>
          </div>

          <div className="flex justify-center md:justify-start">
            <div className="bg-white text-black font-condensed font-bold text-4xl w-14 h-14 flex items-center justify-center rounded-sm">
              K.
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm text-white/60 font-semibold md:col-span-1">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>

          <div className="flex flex-col gap-1 items-end justify-end text-xs text-white/40 font-medium col-span-2 md:col-span-1">
            <span>Created by Timofey Bak in Framer</span>
            <span>Refactored into React & Next.js by Antigravity AI</span>
          </div>

        </div>
      </div>

    </section>
  );
}
