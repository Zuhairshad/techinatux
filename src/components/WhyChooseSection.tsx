"use client";

import React, { useRef, useState, useEffect } from "react";
import { Shield, MessageCircle, Settings, Users } from "lucide-react";

interface Reason {
  number: string;
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    number: ".01",
    icon: Shield,
    title: "Community-Focused Approach",
    description:
      "We provide IT support and are also a trusted web design agency in Vancouver and Gibsons. Our goal is to make technology accessible, whether you need website design services for your company or web development in Vancouver.",
  },
  {
    number: ".02",
    icon: MessageCircle,
    title: "No Jargon, Just Clear Communication",
    description:
      "We believe in clear, straightforward communication. We make sure you understand every solution we provide without any unnecessary tech jargon.",
  },
  {
    number: ".03",
    icon: Settings,
    title: "Flexible Solutions to Fit Your Needs",
    description:
      "From donation-based IT support to tailored web solutions, we offer flexible services designed to fit your needs and budget.",
  },
  {
    number: ".04",
    icon: Users,
    title: "Experienced Team",
    description:
      "Our team brings years of experience across IT support, web design, and digital solutions, ensuring you receive reliable, expert assistance every step of the way.",
  },
];

function ReasonCard({ reason, index, gridVisible }: { reason: Reason; index: number; gridVisible: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = reason.icon;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const clipPath = isHovered
    ? `circle(120px at ${mousePos.x}px ${mousePos.y}px)`
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
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 + index * 0.12}s`,
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
          <div className="absolute inset-0 rounded-full border-2 border-accent/40 animate-ping" />
          <div className="absolute inset-2 rounded-full border border-accent/20 animate-ping" style={{ animationDelay: "0.3s" }} />
        </div>
      )}

      {/* Base content (black text) */}
      <div className="relative z-10 p-8 md:p-10 flex flex-col gap-4 border border-black/5 bg-white">
        {/* Top row: number + icon */}
        <div className="flex items-start justify-between">
          <span className="text-xs font-bold tracking-widest text-black/30">
            {reason.number}
          </span>
          <Icon className="w-7 h-7 text-black/20 transition-all duration-300" />
        </div>

        {/* Title */}
        <h3 className="font-condensed text-2xl md:text-3xl font-bold tracking-wide text-black">
          {reason.title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-black/50 leading-relaxed">
          {reason.description}
        </p>
      </div>

      {/* Highlight content (accent-colored, clipped to cursor) */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ clipPath, transition: "clip-path 0.15s ease" }}
      >
        <div className="p-8 md:p-10 flex flex-col gap-4 border border-accent/40 bg-white">
          <div className="flex items-start justify-between">
            <span className="text-xs font-bold tracking-widest text-accent">
              {reason.number}
            </span>
            <Icon className="w-7 h-7 text-accent" />
          </div>

          <h3 className="font-condensed text-2xl md:text-3xl font-bold tracking-wide text-accent">
            {reason.title}
          </h3>

          <p className="text-sm md:text-base text-accent/70 leading-relaxed">
            {reason.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [gridVisible, setGridVisible] = useState(false);

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

  return (
    <section className="bg-white text-black pt-24 pb-16 border-b border-black/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-bold tracking-widest text-accent uppercase">
            Why Us
          </span>
        </div>
        <h2 className="font-condensed text-4xl md:text-6xl lg:text-[80px] font-bold leading-none tracking-[-0.02em] max-w-5xl mb-6">
          Why Choose Us for Your IT & Web Needs in Vancouver & Worldwide
        </h2>

        <p className="text-base md:text-lg text-black/60 max-w-4xl leading-relaxed mb-12">
          Finding reliable IT support and web solutions can be challenging, especially when faced with confusing jargon and one-size-fits-all approaches that don&apos;t cater to your specific needs. At Tech In A Tux, we offer a different experience:
        </p>

        {/* Cards Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {reasons.map((reason, index) => (
            <ReasonCard
              key={reason.number}
              reason={reason}
              index={index}
              gridVisible={gridVisible}
            />
          ))}
        </div>

        {/* Recognition paragraph */}
        <div className="mt-12 border-t border-black/10 pt-10">
          <p className="text-base md:text-lg text-black/60 leading-relaxed max-w-4xl">
            Over the past five years, Tech in a Tux has been recognized for its commitment to excellence and community service. We are proud to have received accolades for our Pay What You Can Tech support & Web Design initiatives and our contributions to the local community.
          </p>
        </div>
      </div>
    </section>
  );
}
