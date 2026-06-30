"use client";

import React from "react";

interface ServiceCard {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const services: ServiceCard[] = [
  {
    number: "01",
    title: "Donation-Based\nIT Support",
    subtitle: "Affordable IT Services for Everyone",
    description:
      "We believe in accessible technology for all. Our donation-based IT support is designed to make reliable tech help available to home users and small businesses alike, without the stress of high costs. Our services include low-cost IT support and affordable tech services in Vancouver to ensure everyone has access to the technology they need.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=80",
  },
  {
    number: "02",
    title: "Up To 25% Boost\nTune Up",
    subtitle: "Say Goodbye to Slowdowns",
    description:
      "Experience lightning-fast performance with our expert PC optimization services available remotely, anywhere in the world. We'll remove unwanted programs, fine-tune system settings, and ensure your computer runs smoothly, so you can enjoy peak performance without ever leaving your home or office.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80",
  },
  {
    number: "03",
    title: "Virus Removal &\nCyberSecurity Basics",
    subtitle: "Stay Safe, Stay Secure",
    description:
      "Protect your devices from online threats with our trusted virus and malware removal services available remotely or on-site. We'll quickly detect and eliminate harmful software, restore your system's security, and provide easy-to-follow cybersecurity tips to help keep you safe in the future. Whether you're a home user or a small business, we make digital safety simple and affordable.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop&q=80",
  },
  {
    number: "04",
    title: "Custom PC\nBuilding &\nRefurbishment",
    subtitle: "Don't Toss It, Transform It!",
    description:
      "Have old tech gathering dust? We believe that one person's 'trash' is another's treasure. Bring us your used computers and components, and we'll handle the rest. We responsibly refurbish and resell your old tech, giving it a new life and a new home. You'll receive a portion of the sale, and you get to decide what you pay us for our services. It's a win-win for your wallet and the planet.",
    image:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&auto=format&fit=crop&q=80",
  },
];

export default function TechSupportSection() {
  return (
    <section className="bg-white text-black pt-24 pb-16 border-b border-black/10">
      {/* Section Header */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-12">
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xs font-bold tracking-widest text-accent uppercase">
            Tech Support Services
          </span>
          <span className="font-condensed text-xl md:text-3xl text-accent font-bold">.01</span>
        </div>
        <h2 className="font-condensed text-5xl md:text-7xl lg:text-[100px] font-bold leading-none tracking-[-0.02em] max-w-4xl">
          Your Friendly Neighbourhood Tech Provider in Vancouver & Worldwide
        </h2>
      </div>

      {/* Service Cards Grid */}
      <div className="max-w-[1600px] mx-auto divide-y divide-black/10">
        {services.map((service) => (
          <div
            key={service.number}
            className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-black/10"
          >
            {/* Left: Image */}
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 z-10">
                <span className="font-condensed text-7xl md:text-9xl font-bold text-white/30 leading-none">
                  {service.number}
                </span>
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-center p-8 md:p-12 gap-4">
              <span className="text-xs font-bold tracking-widest text-black/40 uppercase">
                {service.number}
              </span>
              <h3 className="font-condensed text-3xl md:text-5xl font-bold leading-tight whitespace-pre-line">
                {service.title}
              </h3>
              <span className="text-sm font-bold tracking-wider text-accent uppercase">
                {service.subtitle}
              </span>
              <p className="text-base text-black/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
