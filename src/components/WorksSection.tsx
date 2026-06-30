"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  year: string;
  categories: string[];
  image: string;
  isNew?: boolean;
}

const projects: Project[] = [
  {
    id: "summa",
    title: "SUMMA DESIGN",
    year: "2025",
    categories: ["Branding", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
    isNew: true,
  },
  {
    id: "rifes",
    title: "RIFES",
    year: "2023",
    categories: ["UI/UX Design", "Other"],
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&auto=format&fit=crop&q=80",
  },
  {
    id: "dune",
    title: "DUNE",
    year: "2024",
    categories: ["SMM & SEO", "Other"],
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&auto=format&fit=crop&q=80",
  },
  {
    id: "zumer",
    title: "ZUMER CLOTHING",
    year: "2025",
    categories: ["UI/UX Design"],
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&auto=format&fit=crop&q=80",
  },
  {
    id: "aba",
    title: "ABA UNITED",
    year: "2024",
    categories: ["Branding", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80",
  },
];

const filterCategories = [
  { label: "ALL WORKS", value: "all", number: "" },
  { label: "BRANDING", value: "Branding", number: ".01" },
  { label: "UI/UX DESIGN", value: "UI/UX Design", number: ".02" },
  { label: "SMM & SEO", value: "SMM & SEO", number: ".03" },
  { label: "OTHER", value: "Other", number: ".04" },
];

export default function WorksSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.categories.includes(activeFilter));

  return (
    <section id="works" className="pt-24 pb-16 bg-white border-b border-black/10">
      
      {/* Works Header */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 py-12 md:py-16 items-end gap-6">
        <div className="md:col-span-3 flex items-baseline gap-2">
          <h2 className="font-condensed text-7xl md:text-[140px] font-bold leading-none tracking-tight text-black">
            WORKS
          </h2>
          <span className="font-condensed text-xl md:text-3xl text-accent font-bold">.01</span>
        </div>
        
        <div className="md:col-span-1 text-sm font-medium text-black/60 md:pb-4 leading-relaxed">
          Branding,<br />
          UI/UX Design,<br />
          SMM, SEO<br />
          and other:
        </div>

        <div className="md:col-span-1 text-right hidden md:block">
          <span className="font-condensed text-7xl md:text-[140px] font-bold leading-none text-black/90">
            59
          </span>
        </div>
      </div>

      {/* Category Submenu Filter */}
      <div className="border-y border-black/10 bg-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-black/10">
          {filterCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveFilter(category.value)}
              className="relative p-6 text-left group flex flex-col justify-between h-[120px] transition-all hover:bg-black/[0.01]"
            >
              <span className="text-xs font-bold text-black/40">{category.number}</span>
              <span className="font-condensed text-lg md:text-xl font-bold tracking-wider text-black">
                {category.label}
              </span>
              
              {/* Highlight line on active/hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-accent transition-transform duration-300 origin-left ${
                activeFilter === category.value ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`} />
            </button>
          ))}
        </div>
      </div>

      {/* Works Grid */}
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/10 border-b border-black/10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`relative overflow-hidden group aspect-[4/3] md:aspect-square flex flex-col justify-between p-8 md:p-12 transition-all duration-700`}
            >
              {/* Background Image with Zoom Zoom */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Card Header Info */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-xs font-bold tracking-widest text-white/80 uppercase">
                  {project.categories.join(" & ")}
                </span>
                
                {project.isNew && (
                  <span className="bg-accent text-white text-[10px] tracking-widest font-bold px-2 py-0.5 rounded-sm">
                    NEW
                  </span>
                )}
              </div>

              {/* Hover Button Indicator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                  <ArrowRight className="w-6 h-6 text-accent group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="relative z-10 flex justify-between items-end">
                <div className="flex flex-col gap-1">
                  <h3 className="font-condensed text-3xl md:text-5xl font-bold tracking-wider text-white">
                    {project.title}
                  </h3>
                </div>
                <span className="font-condensed text-lg md:text-xl font-bold text-white/50">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Under Grid Giant Typography List */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16">
        <span className="text-xs font-bold text-black/40 tracking-widest uppercase block mb-8">OTHER</span>
        <div className="divide-y divide-black/10">
          {projects.map((p) => (
            <div key={p.id} className="group py-6 md:py-8 flex flex-col md:flex-row md:justify-between md:items-center transition-all duration-300 hover:opacity-85">
              <div className="flex items-start gap-2">
                <h4 className="font-condensed text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-black group-hover:text-accent transition-colors leading-none">
                  {p.title}
                </h4>
                <span className="font-condensed text-sm sm:text-base font-bold text-black/40 relative top-1 md:top-2">
                  {p.year}
                </span>
              </div>
              <div className="mt-2 md:mt-0 text-left md:text-right">
                <span className="text-xs sm:text-sm font-semibold tracking-widest text-black/50 uppercase">
                  {p.categories.join(", ")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
