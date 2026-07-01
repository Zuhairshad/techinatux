"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

interface Insight {
  title: string;
  category: string;
  image: string;
}

const insights: Insight[] = [
  {
    title: "How to choose the right line for a business strategy",
    category: "IT Support",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "What's the main challenge for a startup",
    category: "Business",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Simple solutions for complicated issues & projects",
    category: "IT Solutions",
    image: "https://images.unsplash.com/photo-1581089781785-603411fa81e5?w=600&auto=format&fit=crop&q=80",
  },
];

export default function InsightsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef  = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardsVisible,  setCardsVisible]  = useState(false);

  useEffect(() => {
    const observe = (el: Element | null, setter: (v: boolean) => void) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setter(true); observer.unobserve(entry.target); } },
        { threshold: 0.05 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    };
    const c1 = observe(headerRef.current, setHeaderVisible);
    const c2 = observe(cardsRef.current,  setCardsVisible);
    return () => { c1?.(); c2?.(); };
  }, []);

  return (
    <section id="insights" className="bg-white text-black pt-24 pb-16 border-b border-black/10">
      {/* Insights Header */}
      <div
        ref={headerRef}
        className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 py-12 md:py-16 items-end gap-6"
        style={{
          opacity:    headerVisible ? 1 : 0,
          transform:  headerVisible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="md:col-span-3 flex items-baseline gap-2">
          <h2 className="font-condensed text-5xl md:text-[100px] font-bold leading-none tracking-tight">
            INSIGHTS
          </h2>
          <span className="font-condensed text-xl md:text-3xl text-accent font-bold">.03</span>
        </div>

        <div className="md:col-span-1 text-sm font-medium text-black/60 md:pb-4 leading-relaxed">
          Insights from<br />
          Our Team:
        </div>

        <div className="md:col-span-1 text-right hidden md:block">
          <span className="font-condensed text-5xl md:text-[100px] font-bold leading-none text-black/90">
            03
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pb-8">
        <p className="text-base text-black/60 max-w-3xl leading-relaxed">
          Our blog offers expert tips, news, and insights on topics like affordable IT support in Vancouver, community-focused IT services, building a website, and finding the right web development company for your needs.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div ref={cardsRef} className="max-w-[1600px] mx-auto border-t border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
          {insights.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[500px] flex flex-col justify-end p-8 md:p-10"
              style={{
                opacity:    cardsVisible ? 1 : 0,
                transform:  cardsVisible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${idx * 0.12}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${idx * 0.12}s`,
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-100 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="relative z-10 flex flex-col gap-3">
                <span className="text-xs font-bold tracking-widest text-accent uppercase">
                  {item.category}
                </span>
                <h3 className="font-condensed text-3xl md:text-4xl font-bold text-white leading-tight max-w-xs">
                  {item.title}
                </h3>
              </div>

              <div className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent transition-colors">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
