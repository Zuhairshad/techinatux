"use client";

import React, { useEffect, useRef, useState, CSSProperties } from "react";
import { ArrowRight, Star } from "lucide-react";
import dynamic from "next/dynamic";

const Hero3DModel = dynamic(() => import("@/components/Hero3DModel"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[300px] md:min-h-[500px] flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border-2 border-white/10 border-t-accent animate-spin" />
    </div>
  ),
});

function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.unobserve(entry.target); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const t0 = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return { ref, count };
}

const reveal = (delay: number): CSSProperties => ({
  animation: `revealUp 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s both`,
});

const fadeUp = (delay: number): CSSProperties => ({
  animation: `fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s both`,
});

export default function HeroSection() {
  const lowerRef = useRef<HTMLDivElement>(null);
  const [lowerVisible, setLowerVisible] = useState(false);

  const stat50  = useCounter(50,  1600);
  const stat200 = useCounter(200, 1800);
  const stat5   = useCounter(5,   1200);

  useEffect(() => {
    const el = lowerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setLowerVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollFade = (delay = 0): CSSProperties => ({
    opacity:    lowerVisible ? 1 : 0,
    transform:  lowerVisible ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  return (
    <section className="bg-[#121212] text-white pt-24 pb-16 border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-24">

        {/* Hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">

          {/* Left */}
          <div>
            <div className="mb-6">
              <h1 className="font-condensed text-4xl sm:text-5xl md:text-[72px] lg:text-[88px] xl:text-[105px] 2xl:text-[120px] font-bold leading-none tracking-[-0.03em] scale-y-[1.15] scale-x-[1.08] origin-left">
                <span className="overflow-hidden block">
                  <span className="block" style={reveal(0.05)}>AFFORDABLE</span>
                </span>
                <span className="overflow-hidden block">
                  <span className="block" style={reveal(0.18)}>WEB DESIGN</span>
                </span>
              </h1>
              <div className="overflow-hidden mt-2 md:mt-4">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1" style={reveal(0.3)}>
                  <span className="font-condensed text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-accent tracking-wide">
                    TECH SUPPORT
                  </span>
                  <span className="font-condensed text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white/50">&amp;</span>
                  <span className="font-condensed text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-accent tracking-wide">
                    PAY WHAT YOU CAN
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 mb-6" style={fadeUp(0.45)}>
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span className="text-xs font-bold tracking-widest text-accent uppercase">
                  Don&apos;t Just Take Our Word for It
                </span>
              </div>
              <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-xl">
                200+ Tech In A Tux Happy Clients Can&apos;t Be Wrong: Experience the Tech in a Tux Difference. Our clients value our commitment to providing affordable IT support, reliable web development in Vancouver, and bespoke website design services.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3" style={fadeUp(0.58)}>
              <a
                href="/it-services"
                className="group inline-flex items-center gap-2 bg-accent text-white font-bold text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-white hover:text-accent transition-all duration-300"
              >
                Discover More
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.google.com/search?q=Tech+In+A+Tux+Vancouver+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 text-white/80 font-semibold text-xs tracking-wider uppercase px-5 py-2.5 hover:border-accent hover:text-accent transition-all duration-300"
              >
                <Star className="w-3.5 h-3.5" />
                Read Google Reviews
              </a>
            </div>
          </div>

          {/* Right: 3D Model */}
          <div className="hidden lg:block h-full min-h-[600px] lg:min-h-[700px]" style={fadeUp(0.3)}>
            <Hero3DModel />
          </div>
        </div>

        {/* Mobile 3D Model */}
        <div className="lg:hidden mb-12 h-[300px]">
          <Hero3DModel />
        </div>

        {/* Scroll-triggered lower content */}
        <div ref={lowerRef}>

          <div className="mb-10 border-t border-white/10 pt-10" style={scrollFade(0)}>
            <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em]">
              TECH IN A TUX
            </h2>
            <p className="font-condensed text-xl md:text-3xl lg:text-4xl font-bold leading-tight text-white/70 mt-2">
              Community-Focused IT &amp; Web Solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 border-t border-white/10 pt-12">

            <div className="flex flex-col gap-6" style={scrollFade(0.1)}>
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                We believe in accessible technology for all. Our donation-based IT support is designed to make reliable tech help available to home users and small businesses alike, without the stress of high costs. Our services include low-cost IT support and affordable tech services in Vancouver to ensure everyone has access to the technology they need.
              </p>
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                We&apos;re beyond excited to have you with us. At Tech in a Tux IT Services Vancouver, we&apos;re more than just an IT company — we&apos;re your trusted tech partner. Our services range from donation-based IT support and PC optimization to custom computer builds and beautifully designed, functional websites. Need intuitive UI/UX or secure e-commerce solutions? We&apos;ve got you covered.
              </p>
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                We are community-focused, offering affordable IT support in Vancouver and community-focused IT services to make technology accessible to everyone — from gamers and business owners to anyone needing tech support.
              </p>
            </div>

            <div className="flex flex-col gap-6" style={scrollFade(0.2)}>
              <div className="border-l-2 border-accent pl-4">
                <span ref={stat50.ref} className="font-condensed text-5xl md:text-7xl font-bold text-accent leading-none">
                  {stat50.count}%
                </span>
                <span className="block text-base md:text-lg text-white/70 mt-2 leading-relaxed">
                  More affordable than the competition. At Tech In A Tux, we believe great websites, apps, and SEO shouldn&apos;t cost a fortune. That&apos;s why we offer professional solutions up to 50% more affordable, making it easier for you to grow online.
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <span ref={stat200.ref} className="font-condensed text-4xl md:text-5xl font-bold text-white/90">
                    {stat200.count}+
                  </span>
                  <span className="block text-xs font-bold text-white/40 tracking-widest uppercase mt-1">Happy Clients</span>
                </div>
                <div>
                  <span ref={stat5.ref} className="font-condensed text-4xl md:text-5xl font-bold text-white/90">
                    {stat5.count}+
                  </span>
                  <span className="block text-xs font-bold text-white/40 tracking-widest uppercase mt-1">Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border border-white/10 bg-white/[0.03] p-8 md:p-12" style={scrollFade(0.3)}>
            <h3 className="font-condensed text-3xl md:text-5xl font-bold mb-4">
              Pay What You Can For Tech Services
            </h3>
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-4xl mb-4">
              We rely on your generous contributions to support our services. Donations of any size are welcome, helping us keep our IT support accessible to the entire community. This approach ensures that expert tech help is available to everyone in Vancouver and Gibsons, reinforcing our mission to provide affordable IT services.
            </p>
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-4xl">
              By choosing Tech in a Tux, you&apos;re not just getting your tech troubles resolved — you&apos;re also contributing to bridging the digital divide in our local area.
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-white/20">
              3D model: &ldquo;Gaming PC&rdquo; by AbhinavRaj50 (CC-BY-4.0)
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
