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
          <h2 className="font-condensed text-5xl md:text-[100px] font-bold leading-none tracking-tight">
            CONTACT
          </h2>
          <span className="font-condensed text-xl md:text-3xl text-accent font-bold">.04</span>
        </div>
        
        <div className="md:col-span-2 text-right hidden md:block">
          <span className="font-condensed text-5xl md:text-[100px] font-bold leading-none text-white/95">
            US
          </span>
        </div>
      </div>

      {/* Home-based note */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-8">
        <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl border-l-2 border-accent pl-4">
          We operate as a home-based business. To respect our privacy, please do not visit without an appointment. The best way to reach us is by email, phone, or by booking an appointment through this contact page. Looking forward to serve you.
        </p>
      </div>

      {/* Main Split Grid */}
      <div className="border-y border-white/10">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Ways to Contact Column */}
          <div className="p-8 md:p-12 flex flex-col justify-between min-h-[280px] md:h-[360px]">
            <div>
              <span className="text-xs font-bold text-white/40 tracking-widest uppercase block mb-6">
                WAYS TO CONTACT
              </span>
              <a
                href="mailto:alex@techinatux.com"
                className="font-condensed text-xl sm:text-3xl md:text-5xl font-bold tracking-wider hover:text-accent transition-colors block mb-4 break-words"
              >
                ALEX@TECHINATUX.COM
              </a>
              <a 
                href="tel:+16045054487" 
                className="font-condensed text-xl md:text-3xl font-semibold text-white/60 hover:text-white transition-colors block"
              >
                +1 (604) 505-4487
              </a>
              <span className="text-xs text-white/40 mt-3 block">
                2876 East 5th Ave, Vancouver, BC
              </span>
            </div>

            {/* Social media connections */}
            <div className="flex items-center gap-4 mt-8">
              <a href="https://www.facebook.com/techinatux" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://ca.linkedin.com/company/tech-in-a-tux" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>


          {/* Subscribe Form Column */}
          <div className="p-8 md:p-12 flex flex-col justify-between min-h-[280px] md:h-[360px]">
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

      {/* Full Contact Form */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed mb-10">
            Whether you&apos;re looking for affordable IT support in Vancouver or custom web solutions in Vancouver, Tech In A Tux is here to help you succeed. Get in touch today to learn how we can make technology work for you.
          </p>
          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest text-white/40 uppercase">Name</label>
                <input type="text" className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent/60 transition-colors" placeholder="Your Name" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest text-white/40 uppercase">Email Address</label>
                <input type="email" className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent/60 transition-colors" placeholder="Your Email" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest text-white/40 uppercase">Phone</label>
                <input type="tel" className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent/60 transition-colors" placeholder="Your Phone" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest text-white/40 uppercase">Subject</label>
                <input type="text" className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent/60 transition-colors" placeholder="Subject" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-widest text-white/40 uppercase">Message</label>
              <textarea rows={4} className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent/60 transition-colors resize-none" placeholder="How can we help you? Feel free to get in touch!" />
            </div>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" className="mt-0.5 w-4 h-4 border border-white/20 bg-transparent accent-accent" />
              <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors">I agree that my data is collected and stored.</span>
            </label>
            <button type="submit" className="self-start inline-flex items-center gap-2 bg-accent text-white font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-accent transition-all duration-300">
              Send Message
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Footer Details Grid */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
          
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-white/30 uppercase tracking-widest">Tech In A Tux © 2026</span>
            <span className="text-xs text-white/40 font-medium">All right reserved</span>
            <a href="#" className="text-xs font-bold hover:text-accent text-white/60 transition-colors mt-2">Privacy Policy</a>
          </div>

          <div className="flex justify-center md:justify-start">
            <div className="bg-white text-black font-condensed font-bold text-base w-14 h-14 flex items-center justify-center rounded-sm">
              T T
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm text-white/60 font-semibold md:col-span-1">
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
          </div>

          <div className="flex flex-col gap-1 items-end justify-end text-xs text-white/40 font-medium col-span-2 md:col-span-1">
            <span>Vancouver, BC - Canada</span>
            <span>Donation-Based IT Support</span>
          </div>

        </div>
      </div>

    </section>
  );
}
