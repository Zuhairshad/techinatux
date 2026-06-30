"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else if (window.scrollY < 100) {
        setIsScrolled(false);
      }
      // Dead zone 100–300px prevents the spacer-height change (~196px)
      // from triggering a scroll-anchor adjustment that flips the state back.
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: "HOME", href: "/", id: "home" },
    { label: "ABOUT US", href: "/about", id: "about" },
    { label: "IT SERVICES", href: "/it-services", id: "it-services" },
    { label: "DIGITAL SOLUTIONS", href: "/digital-solutions", id: "digital-solutions" },
    { label: "FAQS", href: "/faqs", id: "faqs" },
    { label: "CONTACT US", href: "/contact", id: "contact" },
  ];

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10 transition-all duration-500 ease-in-out ${
        isScrolled ? "h-16" : "h-[260px] md:h-[280px]"
      }`}
    >
      <div className="h-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-black/10">
        
        {/* Column 1: Logo / Home */}
        <Link href="/" className="relative flex flex-col justify-between p-4 md:p-6 h-full min-h-[64px] md:min-h-0 group hover:bg-black/[0.02] transition-all duration-500">
          <div className={`transition-opacity duration-300 ${isScrolled ? "hidden md:block opacity-0 h-0" : "opacity-100"}`}>
            <span className="text-xs tracking-widest text-black/40 font-medium">Digital Agency</span>
          </div>
          
          {!isScrolled && (
            <div className={`flex items-center transition-all duration-500 my-auto opacity-100`}>
              <div className={`bg-black text-white flex items-center justify-center font-condensed font-bold transition-all duration-500 rounded-sm w-16 h-16 text-3xl md:w-20 md:h-20 md:text-5xl`}>
                K.
              </div>
            </div>
          )}

          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "h-full justify-center"
              : ""
          }`}>
            <span className={`font-condensed font-medium tracking-normal text-black group-hover:text-accent transition-all duration-300 ${
              isScrolled ? "text-lg" : "text-xl md:text-3xl"
            }`}>
              HOME
            </span>
          </div>
        </Link>

        {/* Column 2: About Us */}
        <Link
          href="/about"
          className={`group relative cursor-pointer hidden md:flex flex-col justify-between p-6 h-full transition-all duration-500 hover:bg-black/[0.02] ${
            isScrolled ? "items-center justify-center py-2" : ""
          }`}
        >
          {!isScrolled && (
            <>
              <div>
                <span className="text-xs tracking-widest text-black/40 font-medium">Who We Are:</span>
              </div>
              <div className="flex items-center gap-2 my-auto">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop"
                    alt="team"
                    className="w-10 h-10 object-cover rounded-full border border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop"
                    alt="team"
                    className="w-10 h-10 object-cover rounded-full border border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&fit=crop"
                    alt="team"
                    className="w-10 h-10 object-cover rounded-full border border-white"
                  />
                </div>
                <span className="text-sm font-semibold text-black/50 ml-1">+35</span>
              </div>
            </>
          )}
          <div className="w-full flex items-center justify-between md:justify-center">
            <span className={`font-condensed font-medium tracking-normal text-black/90 transition-all ${
              isScrolled ? "text-lg" : "text-2xl"
            }`}>
              ABOUT US
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </Link>

        {/* Column 3: IT Services */}
        <Link
          href="/it-services"
          className={`group relative cursor-pointer hidden md:flex flex-col justify-between p-6 h-full transition-all duration-500 hover:bg-black/[0.02] ${
            isScrolled ? "items-center justify-center py-2" : ""
          }`}
        >
          {!isScrolled && (
            <>
              <div>
                <span className="text-xs tracking-widest text-black/40 font-medium">What We Do:</span>
              </div>
              <div className="flex items-center gap-2 my-auto">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&fit=crop"
                    alt="service"
                    className="w-10 h-10 object-cover rounded-md border border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&fit=crop"
                    alt="service"
                    className="w-10 h-10 object-cover rounded-md border border-white"
                  />
                </div>
                <span className="text-sm font-semibold text-black/50 ml-1">+12</span>
              </div>
            </>
          )}
          <div className="w-full flex items-center justify-between md:justify-center">
            <span className={`font-condensed font-medium tracking-normal text-black/90 transition-all ${
              isScrolled ? "text-lg" : "text-2xl"
            }`}>
              IT SERVICES
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </Link>

        {/* Column 4: Digital Solutions */}
        <Link
          href="/digital-solutions"
          className={`group relative cursor-pointer hidden md:flex flex-col justify-between p-6 h-full transition-all duration-500 hover:bg-black/[0.02] ${
            isScrolled ? "items-center justify-center py-2" : ""
          }`}
        >
          {!isScrolled && (
            <>
              <div>
                <span className="text-xs tracking-widest text-black/40 font-medium">What We Build:</span>
              </div>
              <div className="flex items-center gap-2 my-auto">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&fit=crop"
                    alt="solution"
                    className="w-10 h-10 object-cover rounded-md border border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=80&fit=crop"
                    alt="solution"
                    className="w-10 h-10 object-cover rounded-md border border-white"
                  />
                </div>
                <span className="text-sm font-semibold text-black/50 ml-1">+8</span>
              </div>
            </>
          )}
          <div className="w-full flex items-center justify-between md:justify-center">
            <span className={`font-condensed font-medium tracking-normal text-black/90 transition-all ${
              isScrolled ? "text-lg" : "text-2xl"
            }`}>
              DIGITAL SOLUTIONS
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </Link>

        {/* Column 5: FAQs + Contact Us */}
        <div className="relative hidden md:flex flex-col divide-y divide-black/10 h-full">
          {/* FAQs */}
          <Link
            href="/faqs"
            className={`group relative cursor-pointer flex items-center justify-center p-3 h-1/2 transition-all duration-500 hover:bg-black/[0.02] ${
              isScrolled ? "hidden" : ""
            }`}
          >
            <span className="font-condensed font-medium tracking-normal text-black/90 text-lg group-hover:text-accent transition-colors">
              FAQs
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>

          {/* Contact Us */}
          <Link
            href="/contact"
            className={`group relative cursor-pointer flex items-center justify-center p-3 h-1/2 transition-all duration-500 hover:bg-black/[0.02] ${
              isScrolled ? "h-full" : ""
            }`}
          >
            <span className={`font-condensed font-medium tracking-normal text-black/90 transition-all ${
              isScrolled ? "text-lg" : "text-xl"
            } group-hover:text-accent`}>
              CONTACT US
            </span>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>
        </div>

        {/* Mobile hamburger area */}
        <div className="flex md:hidden items-center justify-between p-4 border-t border-black/10">
          <span className="font-condensed font-medium tracking-normal text-black/90 text-lg">
            MENU
          </span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-black hover:text-accent transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Sidebar Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 md:top-0 bg-white z-40 flex flex-col justify-between p-8 animate-fadeIn md:right-0 md:left-auto md:w-96 md:h-screen border-l border-black/10 shadow-2xl">
          <div className="flex flex-col gap-6 mt-8 md:mt-16">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="font-condensed text-4xl md:text-5xl font-medium text-black hover:text-accent transition-colors tracking-normal"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-black/10 pt-8">
            <span className="text-xs tracking-wider text-black/40 font-bold uppercase">Get In Touch</span>
            <a href="mailto:hello@techinatux.com" className="text-lg font-medium text-black hover:text-accent transition-colors">
              hello@techinatux.com
            </a>
            <a href="tel:+16045054487" className="text-sm text-black/60 font-semibold">
              +1 (604) 505-4487
            </a>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com/techinatux" target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-widest text-black/40 hover:text-black transition-colors">FACEBOOK</a>
              <a href="https://ca.linkedin.com/company/tech-in-a-tux" target="_blank" rel="noopener noreferrer" className="text-xs font-bold tracking-widest text-black/40 hover:text-black transition-colors">LINKEDIN</a>
            </div>
          </div>
        </div>
      )}
    </header>
      <div
        className={`transition-all duration-500 ease-in-out ${
          isScrolled ? "h-16" : "h-[260px] md:h-[280px]"
        }`}
      />
    </>
  );
}
