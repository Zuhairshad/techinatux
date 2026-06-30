"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, Monitor, Cpu, Gamepad2, Zap, Wifi, Trash2, Radio, Settings, Shield, HardDrive, Laptop, Headphones, Command, Image, Recycle, Plus } from "lucide-react";

interface Service {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}

const services: Service[] = [
  { icon: Monitor, title: "PC Advice & Assistance (Hardware & Software)", description: "Hardware and software guidance to help you make informed decisions about your tech setup." },
  { icon: Zap, title: "BIOS Tuning, Updating & Cooling Boost", description: "Optimize your system's BIOS settings, apply firmware updates, and enhance cooling for peak performance." },
  { icon: Gamepad2, title: "Game Optimization (Boost FPS+)", description: "Boost FPS and reduce latency for a smoother, more responsive gaming experience." },
  { icon: Cpu, title: "Overclocking (Graphics Card, CPU & RAM)", description: "Unlock extra performance from your graphics card, CPU, and RAM with expert overclocking." },
  { icon: Wifi, title: "Network Optimization (Fast & Stable Connections)", description: "Achieve fast and stable connections for seamless browsing, streaming, and gaming." },
  { icon: Monitor, title: "Dominate Gaming with Advanced Computing", description: "High-performance computing solutions tailored for competitive gaming environments." },
  { icon: Trash2, title: "Bloatware Removal (Third-Party Apps)", description: "Remove unwanted third-party apps that slow down your system and reclaim valuable resources." },
  { icon: Radio, title: "Streamline Your Streams with OBS Streamlabs Setup", description: "Streamline your streams with professional OBS and Streamlabs configuration for high-quality broadcasts." },
  { icon: Settings, title: "In-game Settings Tweaking (Optimal Performance)", description: "Fine-tune graphical and performance settings for optimal gameplay in any title." },
  { icon: Shield, title: "Virus, Spyware, Trojan & Malware Removal", description: "Detect and eliminate malicious software to restore your system's security and performance." },
  { icon: HardDrive, title: "Driver Backup, Update & Installation", description: "Keep your drivers current for maximum hardware compatibility and system stability." },
  { icon: Laptop, title: "MacBook Pro Upgrades (2009-2015)", description: "Expert upgrades for MacBook Pro models from 2009 to 2015 to extend their lifespan." },
  { icon: Headphones, title: "Remote Technical Support and Troubleshooting", description: "Professional troubleshooting and support from anywhere, solving your tech issues remotely." },
  { icon: Command, title: "Windows 10 & 11 Activation & Configuration", description: "Clean installation, activation, and configuration of Windows operating systems." },
  { icon: Image, title: "Modifying Gaming Textures/Mods/Cheats", description: "Custom modifications, texture packs, and mods to personalize your gaming experience." },
  { icon: Recycle, title: "Responsible Recycling for Non-Profits/Trade", description: "Environmentally responsible recycling solutions for non-profits and trade-in programs." },
];

const portfolioItems = [
  "Network Solutions\nOptimization",
  "Security\nEnhancements",
  "PC Performance\nBoost",
  "Apple\nHardware",
  "Backup\nSolutions",
];

const testimonials = [
  { client: "NHAT HA MINH", role: "Vancouver, BC", quote: "Appreciate the friendly and efficient service I received. Thank Tech in a Tux for making my experience so positive! If you're thinking about fixing up your current PC or building a brand-new one, I definitely recommend giving it a try." },
  { client: "DJ HARSHID", role: "Seattle, WA", quote: "This guy's a lifesaver! Helped me fix probs in my old PC, gave solid tech advice & even built my whole CPU, all for free! (yeh, tips/donations are cool but never pushed it). Super chill, professional & always gives honest, no-bs opinions. Def my go-to tech guy now. So glad I found him!" },
  { client: "YADWINDER SINGH", role: "San Diego, CA", quote: "Alejandro went above and beyond in helping me build my dream PC. He handled everything, from collecting all the parts to assembling it flawlessly within a day. Not only did he put everything together with precision, but he also tuned it up for the best performance. His expertise and efficiency made the entire process seamless. If you need someone reliable and skilled for a PC build, Alejandro is the guy to go to. Highly recommend!" },
  { client: "ANISH MEHTA", role: "Local Guide", quote: "What a gem of a guy! Rebuilt my pc within 2 hours free of cost. Extremely helpful and great to talk to! Highly recommend. Love the name 'Tech In A Tux'!" },
  { client: "MATT BRAUN", role: "Vancouver, BC", quote: "Great service! Alejandro helped me build my computer into my pelican case. He got the job done quickly and had it back to me the next day. He also helped me reboot an old laptop that no one else could fix. I'm really impressed! I would highly recommend Alejandro 100%." },
  { client: "D.", role: "Vancouver, BC", quote: "I happen to stumble upon tech in a tux randomly. I've contacted them and talked with Alejandro. He was very accommodating with his busy schedule. He fixed my pc and tweaked it to perform better than its original state. He really have god given talent when it comes to technical support. Definitely will come back and I highly recommend Alejandro to others." },
  { client: "LIZ DIX", role: "Vancouver, BC", quote: "Alejandro was extremely helpful in replacing my Mac's battery. Along with being fast and efficient, he was very informative and walked me through all the steps required for the fix. He was extremely accommodating with pricing and I feel very grateful to have such great tech support in the area! Highly recommend to anyone needing help." },
  { client: "MR J FUTBOL", role: "Vancouver, BC", quote: "Wow. Expectations shattered! When searching for my tech solutions (web design, SEO, app development) I honestly didn't expect to find a company like Tech In A Tux. They have demonstrated top quality work, reasonable pricing, and most importantly, a genuine interest in getting to know me and help me achieve my goals. I am old enough to remember when superb customer service was a minimum expectation for any business and I'm happy to report that Tech In A Tux provides a level of service that far exceeds even old-school standards. Seriously, they're simply outstanding." },
  { client: "AP A", role: "Vancouver, BC", quote: "A Truly Exceptional Experience – Tech in a Tux Deserves More Than 5 Stars. It's rare these days to come across someone who not only excels in their craft but also leads with heart and selflessness. That's exactly what I experienced with Tech in a Tux, a small, independent computer repair and custom PC build company based in Vancouver, BC. Founded by Alejandro, this one-person operation is unlike anything I've ever encountered in the tech world — or any industry, for that matter. Thank you, Alejandro. You didn't just fix my computer — you reminded me that kindness and generosity still exist in business. I am deeply grateful." },
  { client: "RYLAND", role: "Vancouver, BC", quote: "Alejandro was amazing! I was worried about some hardware being cooked, but he was able to locate that there wasn't a problem, and offered to clean my PC and fully reset and optimize it for me. Everything works a lot faster than when I had first built and optimized it myself. All in 5 hours time not even! Super fast, super kind, and I would fully recommend his services to anyone who needs a problem sorted out! Saved me time and money if I had brought it to a regular service place. 10/10" },
  { client: "ARNEL LABARDA", role: "Vancouver, BC", quote: "Alejandro is a down to earth true professional and would recommend him to anyone in need of hardware support. He offered valuable advice and education regarding my PC issues that is helping me get through digital arts school at a very affordable pay by donation cost. I will be working with him in the future when it is time to build a new PC." },
  { client: "LITTLE DROWSY", role: "Vancouver, BC", quote: "Tech in a Tux is an absolute life saver. Not only is he a super kind and a honest guy but he will also do his best to help you with any problems you have! I had a software corruption and not only was he able to fix it but he was also able to optimize my pc to levels I didn't even know it could do!" },
  { client: "JUANITO GALLON", role: "Vancouver, BC", quote: "So pro, Alejandro really helpful with my needs. Just got my PC from him now and no issue. Runs well, now time to play good games. Thank you!!" },
  { client: "VARIAN THE ARTIST", role: "Vancouver, BC", quote: "Tech in a Tux not only saved my information from my dying laptop, he was pivotal in saving all of my information. I had important spreadsheets for my business, writings, photos, client information, and so on. I highly recommend Alejandro's services and hope to work with him in some future endeavours. Most Excellent!" },
  { client: "MORGAN MARTIN", role: "Vancouver, BC", quote: "I had a brand new alienware laptop that I bought for gaming, and wanted to make sure it was running at the top of its game. Tech In A Tux got rid of all the crap apps I'll NEVER use, partitioned my SSD for maximum gaming efficiency, and even put on a script so every startup it deletes all temporary files that would slow down my gaming experience. Efficient, Knowledgeable, Professional, and all around a great guy. I WILL be using his services again!" },
  { client: "KYLIE KIEFER", role: "Vancouver, BC", quote: "10/10 would recommend these guys to anyone! They were absolute life savers. My computer stopped working on me during business hours on a Friday, Alejandro had a new computer built and completely set up for me by Sunday! Plus their mission is awesome." },
  { client: "GABRIEL NASTARI", role: "Vancouver, BC", quote: "If you needing help with your computers notebooks, this is the place to go. Alejandro is extremely dedicated and does the job quickly and efficiently. I've been helped by him many times already." },
];

function PortfolioCard({ item, index, gridVisible }: { item: string; index: number; gridVisible: boolean }) {
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
    ? `circle(90px at ${mousePos.x}px ${mousePos.y}px)`
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
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.05}s`,
      }}
    >
      {/* Border on hover */}
      <div
        className={`absolute inset-0 transition-all duration-400 ${
          isHovered ? "border border-accent/40" : "border border-transparent"
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

      {/* Base content (muted) */}
      <div className="relative z-10 aspect-[4/3] flex items-center justify-center p-4 bg-white/[0.02]">
        <span className="font-condensed text-lg md:text-2xl font-bold text-center leading-tight text-white/20 whitespace-pre-line">
          {item}
        </span>
      </div>

      {/* Highlight content (accent) */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ clipPath, transition: "clip-path 0.15s ease" }}
      >
        <div className="aspect-[4/3] flex items-center justify-center p-4 bg-white/[0.02]">
          <span className="font-condensed text-lg md:text-2xl font-bold text-center leading-tight text-accent whitespace-pre-line">
            {item}
          </span>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service, index, gridVisible }: { service: Service; index: number; gridVisible: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const clipPath = isHovered
    ? `circle(110px at ${mousePos.x}px ${mousePos.y}px)`
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
      <div className="relative z-10 p-6 md:p-8 flex flex-col bg-white/[0.02]">
        <div className="flex items-center justify-between mb-4">
          <span className="font-condensed text-4xl md:text-5xl font-bold leading-none text-white/15">
            {(index + 1).toString().padStart(2, "0")}
          </span>
          <Icon className={`w-5 h-5 transition-all duration-300 ${
            isHovered ? "text-accent scale-110" : "text-white/20"
          }`} />
        </div>

        <h3 className="font-condensed text-lg md:text-xl font-bold tracking-wide mb-2 text-white">
          {service.title}
        </h3>

        <p className="text-sm leading-relaxed text-white/40">
          {service.description}
        </p>
      </div>

      {/* Highlight content (accent text, clipped to cursor) */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ clipPath, transition: "clip-path 0.15s ease" }}
      >
        <div className="p-6 md:p-8 flex flex-col bg-white/[0.02]">
          <div className="flex items-center justify-between mb-4">
            <span className="font-condensed text-4xl md:text-5xl font-bold leading-none text-accent">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <Icon className="w-5 h-5 text-accent" />
          </div>

          <h3 className="font-condensed text-lg md:text-xl font-bold tracking-wide mb-2 text-accent">
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

export default function ITServicesPage() {
  const [activeTestimonial, setActiveTestimonial] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [gridVisible, setGridVisible] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringGrid, setIsHoveringGrid] = useState(false);

  const portfolioGridRef = useRef<HTMLDivElement>(null);
  const [portfolioGridVisible, setPortfolioGridVisible] = useState(false);
  const [portfolioCursorPos, setPortfolioCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringPortfolio, setIsHoveringPortfolio] = useState(false);

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

  useEffect(() => {
    const el = portfolioGridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPortfolioGridVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleGridMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handlePortfolioMouseMove = (e: React.MouseEvent) => {
    setPortfolioCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      {/* Hero */}
      <div className="w-full border-b border-white/10 min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-6 bg-[#121212]">
        <h1 className="font-condensed text-[22vw] md:text-[26vw] font-medium tracking-[-0.03em] text-white leading-none select-none scale-y-[1.15] scale-x-[1.08]">
          IT SERVICES
        </h1>
      </div>

      {/* Testimonials Banner */}
      <section className="bg-[#121212] text-white border-b border-white/10 py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <span className="text-xs font-bold tracking-widest text-accent uppercase mb-6 block">Testimonials</span>
          <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] mb-6">
            Don&apos;t Just Take Our Word for It
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-4xl mb-8">
            200+ Happy Clients Can&apos;t Be Wrong: Experience the Tech in a Tux Difference. Our clients value our commitment to providing affordable IT support, reliable web development in Vancouver, and bespoke website design services.
          </p>
          <a href="https://search.google.com/local/writereview?placeid=ChIJp2HXqF5zhlQRYEgPXYq3WcA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 text-white/80 font-semibold text-sm tracking-wider uppercase px-6 py-3 hover:border-accent hover:text-accent transition-all duration-300">
            Read Google Reviews
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Services Grid with spotlight */}
      <section className="bg-[#121212] text-white border-b border-white/10 py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-4">Why Us</span>
          <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] mb-4">
            Our IT Support Services
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8 max-w-3xl">
            Get Affordable IT Support in Vancouver. 200+ Happy Clients Can&apos;t Be Wrong: Experience the Tech in a Tux Difference. Our clients value our commitment to providing affordable IT support, reliable web development in Vancouver, and bespoke website design services.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-white font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-accent transition-all duration-300 mb-12">
            Book a Session
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Grid cursor follower */}
          <div
            className="fixed pointer-events-none z-50 transition-[transform,opacity] duration-[400ms] ease-out will-change-transform"
            style={{
              transform: `translate(${cursorPos.x - 16}px, ${cursorPos.y - 16}px)`,
              opacity: isHoveringGrid ? 1 : 0,
            }}
          >
            <div className="w-8 h-8 rounded-full bg-accent/30" />
          </div>

          <div
            ref={gridRef}
            onMouseMove={handleGridMouseMove}
            onMouseEnter={() => setIsHoveringGrid(true)}
            onMouseLeave={() => setIsHoveringGrid(false)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                gridVisible={gridVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-[#121212] text-white border-b border-white/10 py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <span className="text-xs font-bold tracking-widest text-accent uppercase mb-6 block">Case Study</span>
          <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] mb-6">
            Exciting Collaborations Helped in the Tech Industry
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-4xl mb-6">
            Alejandro, co-founder of Tech In A Tux, volunteered at the LTX Exposition in 2023, where he became a friend of Linus Tech Tips.
          </p>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-4xl mb-8">
            He&apos;s also had the pleasure of helping out some big names in the industry, including Narcoleptic Nugget, as well as FaZe Blaze, FaZe Replays, FaZe Santana, Dreads, MurdaBeatz, Tommyunold & Dawid Does Tech Stuff! Totalling over 30 Million Followers Worldwide!
          </p>
          <a href="/works" className="inline-flex items-center gap-2 border border-white/20 text-white/80 font-semibold text-sm tracking-wider uppercase px-6 py-3 hover:border-accent hover:text-accent transition-all duration-300">
            View Our Tech Portfolio
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="bg-[#121212] text-white border-b border-white/10 py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <span className="text-xs font-bold tracking-widest text-accent uppercase mb-6 block">Portfolio</span>
          <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] mb-4">
            Introducing Our Tech Portfolio Preview
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-4xl mb-10">
            See real examples of how Tech in a Tux has helped clients with their IT support needs. Get a sneak peek into our success stories and solutions tailored to the Vancouver community.
          </p>
          {/* Portfolio cursor follower */}
          <div
            className="fixed pointer-events-none z-50 transition-[transform,opacity] duration-[400ms] ease-out will-change-transform"
            style={{
              transform: `translate(${portfolioCursorPos.x - 16}px, ${portfolioCursorPos.y - 16}px)`,
              opacity: isHoveringPortfolio ? 1 : 0,
            }}
          >
            <div className="w-8 h-8 rounded-full bg-accent/30" />
          </div>

          <div
            ref={portfolioGridRef}
            onMouseMove={handlePortfolioMouseMove}
            onMouseEnter={() => setIsHoveringPortfolio(true)}
            onMouseLeave={() => setIsHoveringPortfolio(false)}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          >
            {[...Array(4)].map((_, row) =>
              portfolioItems.map((item, idx) => (
                <PortfolioCard
                  key={item + row}
                  item={item}
                  index={row * portfolioItems.length + idx}
                  gridVisible={portfolioGridVisible}
                />
              ))
            )}
          </div>
          <a href="/works" className="inline-flex items-center gap-2 border border-white/20 text-white/80 font-semibold text-sm tracking-wider uppercase px-6 py-3 hover:border-accent hover:text-accent transition-all duration-300">
            View Tech Portfolio
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#121212] text-white border-b border-white/10 py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <span className="text-xs font-bold tracking-widest text-accent uppercase mb-6 block">Testimonials</span>
          <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] mb-12">
            Our clients say
          </h2>
          <div className="divide-y divide-white/10">
            {testimonials.map((t) => {
              const isOpen = activeTestimonial === t.client;
              return (
                <div
                  key={t.client}
                  onClick={() => setActiveTestimonial(isOpen ? null : t.client)}
                  className="group py-6 cursor-pointer flex flex-col transition-colors duration-300"
                >
                  <div className="flex justify-between items-center w-full">
                    <h4 className={`font-condensed text-xl md:text-3xl font-bold tracking-wider transition-colors ${
                      isOpen ? "text-accent" : "text-white group-hover:text-accent"
                    }`}>
                      {t.client}
                    </h4>
                    <Plus className={`w-5 h-5 text-white/40 group-hover:text-white transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? "rotate-45 text-accent!" : ""
                    }`} />
                  </div>
                  <div className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 overflow-hidden"
                  }`}>
                    <div className="overflow-hidden">
                      <p className="text-base md:text-lg text-white/70 max-w-4xl leading-relaxed italic">
                        &ldquo;{t.quote}&rdquo;
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

      {/* FAQ Section */}
      <section className="bg-[#121212] text-white border-b border-white/10 py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-6">Questions & Answers</span>
          <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] mb-4">
            We understand you may have questions. Here are some of the most common ones our clients ask.
          </h2>
          <div className="divide-y divide-white/10 mt-12">
            <div className="py-6">
              <h3 className="font-condensed text-xl md:text-2xl font-bold text-white mb-3">What is Donation-Based IT Support?</h3>
              <p className="text-base text-white/60 leading-relaxed max-w-3xl">Donation-based IT support means that clients contribute what they can afford. This ensures everyone has access to expert IT help, regardless of their financial situation.</p>
            </div>
            <div className="py-6">
              <h3 className="font-condensed text-xl md:text-2xl font-bold text-white mb-3">Who can use your IT services?</h3>
              <p className="text-base text-white/60 leading-relaxed max-w-3xl">Our services are available to both home users and small businesses in Vancouver and Gibsons.</p>
            </div>
            <div className="py-6">
              <h3 className="font-condensed text-xl md:text-2xl font-bold text-white mb-3">Do you offer remote IT support?</h3>
              <p className="text-base text-white/60 leading-relaxed max-w-3xl">Yes, we provide remote IT support for clients in Vancouver, allowing us to assist you without an on-site visit.</p>
            </div>
            <div className="py-6">
              <h3 className="font-condensed text-xl md:text-2xl font-bold text-white mb-3">How quickly can I get IT support?</h3>
              <p className="text-base text-white/60 leading-relaxed max-w-3xl">We strive to provide same-day support whenever possible. Contact us to schedule your session.</p>
            </div>
            <div className="py-6">
              <h3 className="font-condensed text-xl md:text-2xl font-bold text-white mb-3">What types of tech issues do you handle?</h3>
              <p className="text-base text-white/60 leading-relaxed max-w-3xl">We handle a variety of tech issues, from virus removal and software troubleshooting to network setup and general tech advice.</p>
            </div>
          </div>
          <div className="mt-8">
            <a href="/faqs" className="inline-flex items-center gap-2 border border-white/20 text-white/80 font-semibold text-sm tracking-wider uppercase px-6 py-3 hover:border-accent hover:text-accent transition-all duration-300">
              View All FAQs
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#121212] text-white py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="text-xs font-bold tracking-widest text-accent uppercase mb-6 block">Contact Us</span>
              <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8">
                Whether you&apos;re looking for affordable IT support in Vancouver or custom web solutions in Vancouver, Tech In A Tux is here to help you succeed. Get in touch today to learn how we can make technology work for you.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                <span className="text-sm text-white/50">2876 East 5th Ave, Vancouver, BC</span>
                <a href="tel:+16045054487" className="text-lg text-white/80 hover:text-accent transition-colors font-semibold">+1 604-505-4487</a>
                <a href="mailto:alex@techinatux.com" className="text-lg text-white/80 hover:text-accent transition-colors font-semibold">alex@TechInATux.com</a>
              </div>
            </div>
            <div>
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
        </div>
      </section>
    </>
  );
}
