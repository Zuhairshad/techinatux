"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: "website-dev",
    number: "01",
    title: "WEBSITE DEVELOPMENT",
    description:
      "Create a stunning, user-friendly website that reflects your brand. Our designers and developers work closely with you to create a website that not only looks amazing but converts visitors into customers.",
  },
  {
    id: "mobile-app",
    number: "02",
    title: "MOBILE APP DEVELOPMENT",
    description:
      "Transform your ideas into powerful mobile experiences. Our team designs and develops custom iOS and Android apps that are user-friendly, scalable, and built to help your business thrive in a mobile-first world.",
  },
  {
    id: "software-dev",
    number: "03",
    title: "SOFTWARE DEVELOPMENT",
    description:
      "We build tailored software solutions that streamline processes, boost efficiency, and drive growth. Our team delivers scalable and reliable software designed to meet your business needs.",
  },
  {
    id: "ui-ux",
    number: "04",
    title: "UI/UX DESIGN",
    description:
      "Craft intuitive and engaging designs that put users first. We combine creativity and strategy to deliver seamless digital experiences that captivate and convert.",
  },
  {
    id: "cloud",
    number: "05",
    title: "CLOUD SERVICES",
    description:
      "Leverage the power of the cloud to scale and secure your business. We provide tailored cloud solutions that enhance flexibility, optimize performance, and support long-term growth.",
  },
  {
    id: "ai-ml",
    number: "06",
    title: "AI/ML",
    description:
      "Unlock the potential of artificial intelligence to drive smarter decisions. We build AI and machine learning solutions that automate processes, analyze data, and create innovative business opportunities.",
  },
  {
    id: "blockchain",
    number: "07",
    title: "BLOCKCHAIN DEVELOPMENT",
    description:
      "Empower your business with secure and transparent blockchain solutions. We develop decentralized applications and smart contracts that enhance trust, efficiency, and innovation.",
  },
  {
    id: "social-media",
    number: "08",
    title: "SOCIAL MEDIA MANAGEMENT",
    description:
      "Cultivate brand loyalty and drive traffic through strategic social media management Vancouver campaigns. We help you reach the right audience, grow your following, and boost engagement.",
  },
  {
    id: "seo",
    number: "09",
    title: "SEO",
    description:
      "Increase website visibility and attract qualified leads with data-driven SEO services in Vancouver and digital marketing solutions. We'll help you climb search engine rankings and engage your target audience effectively.",
  },
];

function ServiceCard({ service, index, gridVisible }: { service: Service; index: number; gridVisible: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const clipPath = isHovered
    ? `circle(100px at ${mousePos.x}px ${mousePos.y}px)`
    : "circle(0px at 50% 50%)";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden"
      style={{
        opacity: gridVisible ? 1 : 0,
        transform: gridVisible ? "translateY(0)" : "translateY(2rem)",
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.07}s`,
      }}
    >
      {/* Border on hover */}
      <div
        className={`absolute inset-0 transition-all duration-400 ${
          isHovered ? "border border-accent/40" : "border border-transparent"
        }`}
      />

      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-0.5 bg-accent transition-transform duration-500 origin-left ${
          isHovered ? "scale-x-100" : "scale-x-0"
        }`}
      />

      {/* Pulsing ring */}
      {isHovered && (
        <div
          className="absolute pointer-events-none z-30"
          style={{
            left: mousePos.x - 24,
            top: mousePos.y - 24,
            width: 48,
            height: 48,
          }}
        >
          <div className="absolute inset-0 rounded-full border-2 border-accent/50 animate-ping" />
          <div className="absolute inset-2 rounded-full border border-accent/30 animate-ping" style={{ animationDelay: "0.3s" }} />
        </div>
      )}

      {/* Base content (white text) */}
      <div className="relative z-10 p-8 flex flex-col bg-white/[0.02]">
        {/* Number + Arrow */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-condensed text-5xl md:text-6xl font-bold leading-none text-white/15">
            {service.number}
          </span>
          <ArrowUpRight
            className={`w-5 h-5 transition-all duration-300 ${
              isHovered
                ? "text-accent -translate-y-1 translate-x-1"
                : "text-white/20"
            }`}
          />
        </div>

        {/* Title */}
        <h3 className="font-condensed text-xl md:text-2xl font-bold tracking-wide mb-3 text-white">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-white/40">
          {service.description}
        </p>
      </div>

      {/* Highlight content (orange text, clipped to cursor) */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ clipPath, transition: "clip-path 0.15s ease" }}
      >
        <div className="p-8 flex flex-col bg-white/[0.02]">
          <div className="flex items-center justify-between mb-6">
            <span className="font-condensed text-5xl md:text-6xl font-bold leading-none text-accent">
              {service.number}
            </span>
            <ArrowUpRight className="w-5 h-5 text-accent" />
          </div>

          <h3 className="font-condensed text-xl md:text-2xl font-bold tracking-wide mb-3 text-accent">
            {service.title}
          </h3>

          <p className="text-sm leading-relaxed text-accent/80">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DigitalSolutionsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [gridVisible, setGridVisible] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringGrid, setIsHoveringGrid] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGridVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="bg-[#121212] text-white pt-24 pb-16 border-b border-white/10">
      {/* Cursor follower */}
      <div
        className="fixed pointer-events-none z-50 transition-[transform,opacity] duration-[400ms] ease-out will-change-transform"
        style={{
          transform: `translate(${cursorPos.x - 16}px, ${cursorPos.y - 16}px)`,
          opacity: isHoveringGrid ? 1 : 0,
        }}
      >
        <div className="w-8 h-8 rounded-full bg-accent/30" />
      </div>

      {/* Header */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 py-12 md:py-16 items-end gap-x-6 gap-y-4">
        <div className="md:col-span-4 flex flex-col gap-0">
          <div className="flex items-baseline gap-2">
            <h2 className="font-condensed text-5xl md:text-[80px] lg:text-[100px] xl:text-[120px] font-bold leading-none tracking-tight">
              DIGITAL
            </h2>
            <span className="font-condensed text-xl md:text-3xl text-accent font-bold">.02</span>
          </div>
          <h2 className="font-condensed text-5xl md:text-[80px] lg:text-[100px] xl:text-[120px] font-bold leading-none tracking-tight">
            SOLUTIONS
          </h2>
        </div>

        <div className="md:col-span-1 text-sm font-medium text-white/50 md:pb-4 leading-relaxed">
          Web Services &<br />
          Digital Solutions
        </div>
      </div>

      {/* Hero description + CTA */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pb-12 border-b border-white/10">
        <div className="max-w-4xl">
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6">
            At Tech In A Tux, we believe great websites, apps, and SEO shouldn&apos;t cost a fortune. That&apos;s why we offer professional solutions up to 50% more affordable than the competition, making it easier for you to grow online with something that&apos;s both beautiful and accessible.
          </p>
          <a
            href="/digital-solutions"
            className="inline-flex items-center gap-2 bg-accent text-white font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-accent transition-all duration-300"
          >
            Get a Free Quote
          </a>
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-12">
        <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase mb-8">
          What We Offer
        </h3>
        <div
          ref={gridRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHoveringGrid(true)}
          onMouseLeave={() => setIsHoveringGrid(false)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              gridVisible={gridVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
