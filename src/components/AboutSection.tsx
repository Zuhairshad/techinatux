"use client";

import React, { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";

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

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Award {
  title: string;
  year: string;
  category: string;
}

interface Testimonial {
  id: string;
  client: string;
  role: string;
  quote: string;
  image: string;
  isNew?: boolean;
}

const team: TeamMember[] = [
  {
    name: "ALEJANDRO CALLE",
    role: "FOUNDER & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&fit=crop",
  },
  {
    name: "SARAH CHEN",
    role: "HEAD OF DESIGN",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&fit=crop",
  },
  {
    name: "MARCUS TANAKA",
    role: "LEAD DEVELOPER",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&fit=crop",
  },
  {
    name: "EMMA RODRIGUEZ",
    role: "HEAD OF MARKETING",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&fit=crop",
  },
];

const awards: Award[] = [
  {
    title: "PAY WHAT YOU CAN",
    year: "'25",
    category: "Community Impact Award",
  },
  {
    title: "BEST WEB SOLUTIONS",
    year: "'24",
    category: "Vancouver Business Awards",
  },
  {
    title: "TOP IT SUPPORT",
    year: "'24",
    category: "Small Business Superstar",
  },
  {
    title: "COMMUNITY CHAMPION",
    year: "'23",
    category: "Local Business Recognition",
  },
];

const aboutUsParagraphs = [
  "We're beyond excited to have you with us. At Tech in a Tux IT Services Vancouver, we're more than just an IT company, we're your trusted tech partner. Our services range from donation-based IT support and PC optimization to custom computer builds and beautifully designed, functional websites. Need intuitive UI/UX or secure e-commerce solutions? We've got you covered.",
  "From virus removal to IT consulting and web design, we handle it all with a blend of professionalism and a personal touch. To us, you're more than a client, you're part of the family.",
  "Whether you're a passionate gamer, a business owner, or simply need dependable tech support, Tech in a Tux is here for you. Our mission is simple: deliver reliable, accessible IT solutions for businesses and individuals across Vancouver.",
];

const testimonials: Testimonial[] = [
  {
    id: "nhat-ha-minh",
    client: "NHAT HA MINH",
    role: "Vancouver, BC",
    quote: "Appreciate the friendly and efficient service I received. Thank Tech in a Tux for making my experience so positive! If you're thinking about fixing up your current PC or building a brand-new one, I definitely recommend giving it a try.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&fit=crop",
  },
  {
    id: "dj-harshid",
    client: "DJ HARSHID",
    role: "Seattle, WA",
    quote: "This guy's a lifesaver! Helped me fix probs in my old PC, gave solid tech advice & even built my whole CPU, all for free! (yeh, tips/donations are cool but never pushed it). Super chill, professional & always gives honest, no-bs opinions. Def my go-to tech guy now. So glad I found him!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&fit=crop",
    isNew: true,
  },
  {
    id: "yadwinder-singh",
    client: "YADWINDER SINGH",
    role: "San Diego, CA",
    quote: "Alejandro went above and beyond in helping me build my dream PC. He handled everything, from collecting all the parts to assembling it flawlessly within a day. Not only did he put everything together with precision, but he also tuned it up for the best performance. His expertise and efficiency made the entire process seamless. If you need someone reliable and skilled for a PC build, Alejandro is the guy to go to. Highly recommend!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&fit=crop",
    isNew: true,
  },
  {
    id: "anish-mehta",
    client: "ANISH MEHTA",
    role: "Local Guide",
    quote: "What a gem of a guy! Rebuilt my pc within 2 hours free of cost. Extremely helpful and great to talk to! Highly recommend. Love the name 'Tech In A Tux'!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&fit=crop",
  },
  {
    id: "matt-braun",
    client: "MATT BRAUN",
    role: "Vancouver, BC",
    quote: "Great service! Alejandro helped me build my computer into my pelican case. He got the job done quickly and had it back to me the next day. He also helped me reboot an old laptop that no one else could fix. I'm really impressed! I would highly recommend Alejandro 100%.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&fit=crop",
  },
  {
    id: "d-vancouver",
    client: "D.",
    role: "Vancouver, BC",
    quote: "I happen to stumble upon tech in a tux randomly. I've contacted them and talked with Alejandro. He was very accommodating with his busy schedule. He fixed my pc and tweaked it to perform better than its original state. He really has god given talent when it comes to technical support. Definitely will come back and I highly recommend Alejandro to others.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&fit=crop",
  },
  {
    id: "liz-dix",
    client: "LIZ DIX",
    role: "Vancouver, BC",
    quote: "Alejandro was extremely helpful in replacing my Mac's battery. Along with being fast and efficient, he was very informative and walked me through all the steps required for the fix. He was extremely accommodating with pricing and I feel very grateful to have such great tech support in the area! Highly recommend to anyone needing help.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&fit=crop",
  },
  {
    id: "mr-j-futbol",
    client: "MR J FUTBOL",
    role: "Vancouver, BC",
    quote: "Wow. Expectations shattered! When searching for my tech solutions (web design, SEO, app development) I honestly didn't expect to find a company like Tech In A Tux. They have demonstrated top quality work, reasonable pricing, and most importantly, a genuine interest in getting to know me and help me achieve my goals. I am old enough to remember when superb customer service was a minimum expectation for any business and I'm happy to report that Tech In A Tux provides a level of service that far exceeds even old-school standards. Seriously, they're simply outstanding.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&fit=crop",
  },
  {
    id: "ap-a",
    client: "AP A",
    role: "Vancouver, BC",
    quote: "A Truly Exceptional Experience – Tech in a Tux Deserves More Than 5 Stars. It's rare these days to come across someone who not only excels in their craft but also leads with heart and selflessness. That's exactly what I experienced with Tech in a Tux, a small, independent computer repair and custom PC build company based in Vancouver, BC. Founded by Alejandro, this one-person operation is unlike anything I've ever encountered in the tech world — or any industry, for that matter. Thank you, Alejandro. You didn't just fix my computer — you reminded me that kindness and generosity still exist in business. I am deeply grateful.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&fit=crop",
  },
  {
    id: "ryland",
    client: "RYLAND",
    role: "Vancouver, BC",
    quote: "Alejandro was amazing! I was worried about some hardware being cooked, but he was able to locate that there wasn't a problem, and offered to clean my PC and fully reset and optimize it for me. Everything works a lot faster than when I had first built and optimized it myself. All in 5 hours time not even! Super fast, super kind, and I would fully recommend his services to anyone who needs a problem sorted out! Saved me time and money if I had brought it to a regular service place. 10/10",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&fit=crop",
  },
  {
    id: "arnel-labarda",
    client: "ARNEL LABARDA",
    role: "Vancouver, BC",
    quote: "Alejandro is a down to earth true professional and would recommend him to anyone in need of hardware support. He offered valuable advice and education regarding my PC issues that is helping me get through digital arts school at a very affordable pay by donation cost. I will be working with him in the future when it is time to build a new PC.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&fit=crop",
  },
  {
    id: "little-drowsy",
    client: "LITTLE DROWSY",
    role: "Vancouver, BC",
    quote: "Tech in a Tux is an absolute life saver. Not only is he a super kind and a honest guy but he will also do his best to help you with any problems you have! I had a software corruption and not only was he able to fix it but he was also able to optimize my pc to levels I didn't even know it could do!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&fit=crop",
  },
  {
    id: "juanito-gallon",
    client: "JUANITO GALLON",
    role: "Vancouver, BC",
    quote: "So pro, Alejandro really helpful with my needs. Just got my PC from him now and no issue. Runs well, now time to play good games. Thank you!!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&fit=crop",
  },
  {
    id: "varian-the-artist",
    client: "VARIAN THE ARTIST",
    role: "Vancouver, BC",
    quote: "Tech in a Tux not only saved my information from my dying laptop, he was pivotal in saving all of my information. I had important spreadsheets for my business, writings, photos, client information, and so on. I highly recommend Alejandro's services and hope to work with him in some future endeavours. Most Excellent!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&fit=crop",
  },
  {
    id: "morgan-martin",
    client: "MORGAN MARTIN",
    role: "Vancouver, BC",
    quote: "I had a brand new alienware laptop that I bought for gaming, and wanted to make sure it was running at the top of its game. Tech In A Tux got rid of all the crap apps I'll NEVER use, partitioned my SSD for maximum gaming efficiency, and even put on a script so every startup it deletes all temporary files that would slow down my gaming experience. Efficient, Knowledgeable, Professional, and all around a great guy. I WILL be using his services again!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&fit=crop",
  },
  {
    id: "kylie-kiefer",
    client: "KYLIE KIEFER",
    role: "Vancouver, BC",
    quote: "10/10 would recommend these guys to anyone! They were absolute life savers. My computer stopped working on me during business hours on a Friday, Alejandro had a new computer built and completely set up for me by Sunday! Plus their mission is awesome.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&fit=crop",
  },
  {
    id: "gabriel-nastari",
    client: "GABRIEL NASTARI",
    role: "Vancouver, BC",
    quote: "If you needing help with your computers notebooks, this is the place to go. Alejandro is extremely dedicated and does the job quickly and efficiently. I've been helped by him many times already.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&fit=crop",
  },
];

export default function AboutSection({ hideHeading }: { hideHeading?: boolean }) {
  const [activeTestimonial, setActiveTestimonial] = useState<string | null>(null);

  const stat2019 = useCounter(2019, 1400);
  const stat200  = useCounter(200,  1800);
  const stat5    = useCounter(5,    1200);
  const stat100  = useCounter(100,  1600);

  const teamRef = useRef<HTMLDivElement>(null);
  const [teamVisible, setTeamVisible] = useState(false);
  useEffect(() => {
    const el = teamRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTeamVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="agency" className="bg-[#121212] text-white border-b border-white/10 pt-24 pb-16">

      {!hideHeading && (
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 py-12 md:py-16 items-end gap-6">
        <div className="md:col-span-3 flex items-baseline gap-2">
          <h2 className="font-condensed text-5xl md:text-[100px] font-bold leading-none tracking-tight">
            ABOUT
          </h2>
          <span className="font-condensed text-xl md:text-3xl text-accent font-bold">.02</span>
        </div>
        
        <div className="md:col-span-1 text-sm font-medium text-white/50 md:pb-4 leading-relaxed">
          Team members:
        </div>

        <div className="md:col-span-1 text-right hidden md:block">
          <span className="font-condensed text-5xl md:text-[100px] font-bold leading-none text-white/90">
            4
          </span>
        </div>
      </div>
      )}


      {/* KPI Stats Grid */}
      <div className="border-y border-white/10 bg-[#121212]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
          <div className="p-6 md:p-8 flex flex-col justify-between h-[160px] md:h-[200px]">
            <span className="text-xs font-bold text-white/40 tracking-wider">YEAR OF ESTABLISHMENT</span>
            <span ref={stat2019.ref} className="font-condensed text-4xl md:text-5xl font-bold tracking-wide">{stat2019.count || 2019}</span>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-between h-[160px] md:h-[200px]">
            <span className="text-xs font-bold text-white/40 tracking-wider">HAPPY CLIENTS</span>
            <span ref={stat200.ref} className="font-condensed text-4xl md:text-5xl font-bold tracking-wide">{stat200.count}+</span>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-between h-[160px] md:h-[200px]">
            <span className="text-xs font-bold text-white/40 tracking-wider">YEARS OF EXPERIENCE</span>
            <span ref={stat5.ref} className="font-condensed text-4xl md:text-5xl font-bold tracking-wide">{stat5.count}+</span>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-between h-[160px] md:h-[200px]">
            <span className="text-xs font-bold text-white/40 tracking-wider">DONATION-BASED</span>
            <span ref={stat100.ref} className="font-condensed text-4xl md:text-5xl font-bold tracking-wide">{stat100.count}%</span>
          </div>
        </div>
      </div>

      {/* Team & Awards Split */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10 border-b border-white/10">
        
        {/* Team Grid */}
        <div className="p-6 md:p-12">
          <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase mb-8">TEAM</h3>
          <div ref={teamRef} className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="group flex flex-col gap-3"
                style={{
                  opacity:    teamVisible ? 1 : 0,
                  transform:  teamVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
                }}
              >
                <div className="relative aspect-square overflow-hidden rounded-full border border-white/10 bg-white/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold tracking-wide text-white group-hover:text-accent transition-colors">
                    {member.name}
                  </span>
                  <span className="text-[11px] font-bold text-white/40 tracking-widest uppercase">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards List */}
        <div className="p-6 md:p-12 flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase mb-8">AWARDS</h3>
            <div className="divide-y divide-white/10">
              {awards.map((award) => (
                <div key={award.title} className="py-5 flex justify-between items-center group">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-2">
                      <h4 className="font-condensed text-2xl md:text-3xl font-bold tracking-wider text-white group-hover:text-accent transition-colors">
                        {award.title}
                      </h4>
                      <span className="font-condensed text-sm font-bold text-accent">{award.year}</span>
                    </div>
                    <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">
                      {award.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* About Us Text */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-8 md:py-12 border-b border-white/10">
        <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase mb-8">
          Tech In A Tux: Community-Focused IT & Web Solutions
        </h3>
        <div className="max-w-4xl flex flex-col gap-6">
          {aboutUsParagraphs.map((p, i) => (
            <p key={i} className="text-base md:text-lg text-white/70 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        <a
          href="/about"
          className="inline-flex items-center gap-2 mt-8 border border-white/20 text-white/80 font-semibold text-sm tracking-wider uppercase px-6 py-3 hover:border-accent hover:text-accent transition-all duration-300"
        >
          Learn More About Us
        </a>
      </div>

      {/* Testimonials Interactive Section */}
      <div className="max-w-[1600px] mx-auto p-6 md:p-12">
        <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase mb-8">TESTIMONIALS</h3>
        <div className="divide-y divide-white/10">
          {testimonials.map((t) => {
            const isOpen = activeTestimonial === t.id;
            return (
              <div 
                key={t.id}
                onClick={() => setActiveTestimonial(isOpen ? null : t.id)}
                className="group py-6 cursor-pointer flex flex-col transition-colors duration-300"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-3">
                    <h4 className={`font-condensed text-2xl md:text-4xl font-bold tracking-wider transition-colors ${
                      isOpen ? "text-accent" : "text-white group-hover:text-accent"
                    }`}>
                      {t.client}
                    </h4>
                    {t.isNew && (
                      <span className="bg-accent text-white text-[9px] tracking-widest font-bold px-1.5 py-0.5 rounded-sm">
                        NEW
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.client}
                      loading="lazy" className="w-10 h-10 object-cover rounded-full border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <Plus className={`w-5 h-5 text-white/40 group-hover:text-white transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-accent!" : ""
                    }`} />
                  </div>
                </div>

                {/* Collapsible Quote Block */}
                <div className={`grid transition-all duration-500 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 overflow-hidden"
                }`}>
                  <div className="overflow-hidden">
                    <p className="text-base md:text-lg text-white/70 max-w-3xl leading-relaxed italic pr-8">
                      "{t.quote}"
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
  );
}
