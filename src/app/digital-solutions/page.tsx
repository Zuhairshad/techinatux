import React from "react";
import { ArrowUpRight } from "lucide-react";

interface Service {
  number: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "WEBSITE DEVELOPMENT",
    description: "Create a stunning, user-friendly website that reflects your brand. Our designers and developers work closely with you to create a website that not only looks amazing but converts visitors into customers.",
  },
  {
    number: "02",
    title: "MOBILE APP DEVELOPMENT",
    description: "Transform your ideas into powerful mobile experiences. Our team designs and develops custom iOS and Android apps that are user-friendly, scalable, and built to help your business thrive in a mobile-first world.",
  },
  {
    number: "03",
    title: "SOFTWARE DEVELOPMENT",
    description: "We build tailored software solutions that streamline processes, boost efficiency, and drive growth. Our team delivers scalable and reliable software designed to meet your business needs.",
  },
  {
    number: "04",
    title: "UI/UX DESIGN",
    description: "Craft intuitive and engaging designs that put users first. We combine creativity and strategy to deliver seamless digital experiences that captivate and convert.",
  },
  {
    number: "05",
    title: "CLOUD SERVICES",
    description: "Leverage the power of the cloud to scale and secure your business. We provide tailored cloud solutions that enhance flexibility, optimize performance, and support long-term growth.",
  },
  {
    number: "06",
    title: "AI/ML",
    description: "Unlock the potential of artificial intelligence to drive smarter decisions. We build AI and machine learning solutions that automate processes, analyze data, and create innovative business opportunities.",
  },
  {
    number: "07",
    title: "BLOCKCHAIN DEVELOPMENT",
    description: "Empower your business with secure and transparent blockchain solutions. We develop decentralized applications and smart contracts that enhance trust, efficiency, and innovation.",
  },
  {
    number: "08",
    title: "SOCIAL MEDIA MANAGEMENT",
    description: "Cultivate brand loyalty and drive traffic through strategic social media management Vancouver campaigns. We help you reach the right audience, grow your following, and boost engagement.",
  },
  {
    number: "09",
    title: "SEO",
    description: "Increase website visibility and attract qualified leads with data-driven SEO services in Vancouver and digital marketing solutions. We'll help you climb search engine rankings and engage your target audience effectively.",
  },
];

export default function DigitalSolutionsPage() {
  return (
    <>
      <div className="w-full border-b border-white/10 min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-6 bg-[#121212]">
        <h1 className="font-condensed text-[15vw] md:text-[18vw] font-medium tracking-[-0.03em] text-white leading-none select-none scale-y-[1.15] scale-x-[1.08] flex flex-col items-center">
          <span className="text-[9vw] md:text-[11vw] tracking-[0.04em]">DIGITAL</span>
          <span className="-mt-8 md:-mt-12 text-[18vw] md:text-[22vw]">SOLUTIONS</span>
        </h1>
      </div>

      {/* Intro */}
      <section className="bg-[#121212] text-white border-b border-white/10 py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-4">Web Services & Digital Solutions</span>
            <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] mb-6">
              Professional Digital Solutions at 50% Less
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
              At Tech In A Tux, we believe great websites, apps, and SEO shouldn&apos;t cost a fortune. That&apos;s why we offer professional solutions up to 50% more affordable than the competition, making it easier for you to grow online with something that&apos;s both beautiful and accessible.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-accent transition-all duration-300"
            >
              Get a Free Quote
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-[#121212] text-white border-b border-white/10 py-20">
        <div className="max-w-[1600px] mx-auto">
          <div className="divide-y divide-white/10">
            {services.map((service) => (
              <div
                key={service.number}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 px-6 md:px-12 py-8 md:py-10 hover:bg-white/[0.01] transition-all duration-500"
              >
                <div className="md:col-span-1 flex items-start">
                  <span className="font-condensed text-5xl md:text-7xl font-bold text-white/15 group-hover:text-accent transition-all duration-500 leading-none">
                    {service.number}
                  </span>
                </div>
                <div className="md:col-span-10 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-condensed text-2xl md:text-4xl font-bold tracking-wide text-white group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 shrink-0 ml-4" />
                  </div>
                  <p className="text-sm md:text-base text-white/40 group-hover:text-white/60 leading-relaxed max-w-3xl transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                <div className="hidden md:block md:col-span-1" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
