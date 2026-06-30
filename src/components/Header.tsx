"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  activeSection?: string;
  onNavigate?: (section: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "WORKS", href: "#works", id: "works" },
    { label: "AGENCY", href: "#agency", id: "agency" },
    { label: "INSIGHTS", href: "#insights", id: "insights" },
    { label: "CONTACTS", href: "#contacts", id: "contacts" },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = isScrolled ? 70 : 250;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
    if (onNavigate) onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10 transition-all duration-500 ease-in-out ${
        isScrolled ? "h-16" : "h-[260px] md:h-[280px]"
      }`}
    >
      <div className="h-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-black/10">
        
        {/* Column 1: Logo */}
        <div className="relative flex flex-col justify-between p-4 md:p-6 h-full min-h-[64px] md:min-h-0">
          <div className={`transition-opacity duration-300 ${isScrolled ? "hidden md:block opacity-0 h-0" : "opacity-100"}`}>
            <span className="text-xs tracking-widest text-black/40 font-medium">Digital Agency</span>
          </div>
          
          <div className={`flex items-center transition-all duration-500 ${isScrolled ? "h-full" : "my-auto"}`}>
            <div className={`bg-black text-white flex items-center justify-center font-condensed font-bold transition-all duration-500 rounded-sm ${
              isScrolled ? "w-8 h-8 text-base" : "w-16 h-16 text-3xl md:w-20 md:h-20 md:text-5xl"
            }`}>
              K.
            </div>
          </div>

          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "absolute right-4 top-1/2 -translate-y-1/2 md:relative md:right-0 md:top-0 md:translate-y-0" : ""}`}>
            <Link href="/" className="font-condensed text-xl md:text-3xl font-bold tracking-wider text-black">
              KARTA
            </Link>
          </div>
        </div>

        {/* Column 2: Works */}
        <div 
          onClick={(e) => handleNavClick(e, "works")}
          className={`group relative cursor-pointer hidden md:flex flex-col justify-between p-6 h-full transition-all duration-500 hover:bg-black/[0.02] ${
            isScrolled ? "items-center justify-center py-2" : ""
          }`}
        >
          {!isScrolled && (
            <>
              <div>
                <span className="text-xs tracking-widest text-black/40 font-medium">We Proud Of:</span>
              </div>
              <div className="flex items-center gap-2 my-auto">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&fit=crop"
                    alt="work preview"
                    className="w-10 h-10 object-cover rounded-md border border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=80&fit=crop"
                    alt="work preview"
                    className="w-10 h-10 object-cover rounded-md border border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=80&fit=crop"
                    alt="work preview"
                    className="w-10 h-10 object-cover rounded-md border border-white"
                  />
                </div>
                <span className="text-sm font-semibold text-black/50 ml-1">+56</span>
              </div>
            </>
          )}
          <div className="w-full flex items-center justify-between md:justify-center">
            <span className={`font-condensed font-bold tracking-widest text-black/90 transition-all ${
              isScrolled ? "text-lg" : "text-2xl"
            }`}>
              WORKS
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </div>

        {/* Column 3: Agency */}
        <div 
          onClick={(e) => handleNavClick(e, "agency")}
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
                <div className="flex -space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop"
                    alt="team"
                    className="w-10 h-10 object-cover rounded-full border-2 border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop"
                    alt="team"
                    className="w-10 h-10 object-cover rounded-full border-2 border-white"
                  />
                </div>
                <span className="text-sm font-semibold text-black/50 ml-1">+35</span>
              </div>
            </>
          )}
          <div className="w-full flex items-center justify-between md:justify-center">
            <span className={`font-condensed font-bold tracking-widest text-black/90 transition-all ${
              isScrolled ? "text-lg" : "text-2xl"
            }`}>
              AGENCY
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </div>

        {/* Column 4: Insights */}
        <div 
          onClick={(e) => handleNavClick(e, "insights")}
          className={`group relative cursor-pointer hidden md:flex flex-col justify-between p-6 h-full transition-all duration-500 hover:bg-black/[0.02] ${
            isScrolled ? "items-center justify-center py-2" : ""
          }`}
        >
          {!isScrolled && (
            <>
              <div>
                <span className="text-xs tracking-widest text-black/40 font-medium">What We Know:</span>
              </div>
              <div className="flex items-center gap-2 my-auto">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=80&fit=crop"
                    alt="insight"
                    className="w-10 h-10 object-cover rounded-md border border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=80&fit=crop"
                    alt="insight"
                    className="w-10 h-10 object-cover rounded-md border border-white"
                  />
                </div>
                <span className="text-sm font-semibold text-black/50 ml-1">+5</span>
              </div>
            </>
          )}
          <div className="w-full flex items-center justify-between md:justify-center">
            <span className={`font-condensed font-bold tracking-widest text-black/90 transition-all ${
              isScrolled ? "text-lg" : "text-2xl"
            }`}>
              INSIGHTS
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </div>

        {/* Column 5: Contacts */}
        <div 
          onClick={(e) => handleNavClick(e, "contacts")}
          className={`group relative cursor-pointer flex flex-row md:flex-col justify-between items-center md:items-stretch p-4 md:p-6 h-full transition-all duration-500 hover:bg-black/[0.02] ${
            isScrolled ? "md:items-center md:justify-center py-2" : ""
          }`}
        >
          {!isScrolled && (
            <div className="hidden md:block">
              <span className="text-xs tracking-widest text-black/40 font-medium">Reach Out Us:</span>
            </div>
          )}
          
          {!isScrolled && (
            <div className="hidden md:flex flex-col gap-1 my-auto text-sm text-black/60 font-medium">
              <a href="mailto:hithere@karta.agency" className="hover:text-accent transition-colors flex items-center gap-1">
                hithere@karta.agency <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a href="tel:+14155702791" className="hover:text-accent transition-colors">
                1 (415) 570-2791
              </a>
            </div>
          )}

          {/* Right Hamburger / Menu Area */}
          <div className="flex items-center justify-between w-full md:justify-center">
            <span className={`font-condensed font-bold tracking-widest text-black/95 transition-all hidden md:inline ${
              isScrolled ? "text-lg" : "text-2xl"
            }`}>
              CONTACTS
            </span>

            {/* Mobile Hamburger menu toggle button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:absolute md:right-6 md:top-1/2 md:-translate-y-1/2 text-black hover:text-accent transition-colors p-2 z-55"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </div>

      </div>

      {/* Mobile & Sidebar Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 md:top-0 bg-white z-40 flex flex-col justify-between p-8 animate-fadeIn md:right-0 md:left-auto md:w-96 md:h-screen border-l border-black/10 shadow-2xl">
          <div className="flex flex-col gap-6 mt-8 md:mt-16">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className="font-condensed text-4xl md:text-5xl font-bold text-black hover:text-accent transition-colors tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-black/10 pt-8">
            <span className="text-xs tracking-wider text-black/40 font-bold uppercase">Get In Touch</span>
            <a href="mailto:hello@karta.agency" className="text-lg font-medium text-black hover:text-accent transition-colors">
              hello@karta.agency
            </a>
            <a href="tel:+14155702791" className="text-sm text-black/60 font-semibold">
              1 (415) 570-2791
            </a>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-xs font-bold tracking-widest text-black/40 hover:text-black transition-colors">X</a>
              <a href="#" className="text-xs font-bold tracking-widest text-black/40 hover:text-black transition-colors">LINKEDIN</a>
              <a href="#" className="text-xs font-bold tracking-widest text-black/40 hover:text-black transition-colors">BEHANCE</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
