"use client";

import React, { useState } from "react";
import { Plus, ArrowRight } from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: "services",
    question: "What services does Tech In A Tux provide?",
    answer: "Tech In A Tux offers professional IT Support, Website Design, Hosting, SEO, and Digital Marketing solutions for local businesses. The company helps clients build a strong online presence through reliable tech support, fast websites, and smart digital strategies.",
  },
  {
    id: "difference",
    question: "How does Tech In A Tux differ from other IT companies?",
    answer: "Unlike most IT companies, Tech In A Tux provides both tech support and web solutions under one roof. Clients get everything from troubleshooting and maintenance to website design and SEO all handled by a single, trusted partner.",
  },
  {
    id: "local-support",
    question: "Does Tech In A Tux offer local IT support in Vancouver?",
    answer: "Yes. Tech In A Tux provides local IT support in Vancouver for businesses and individuals. Remote assistance is also available for clients worldwide, ensuring quick help for technical issues, system setup, and security support.",
  },
  {
    id: "websites",
    question: "What types of websites does Tech In A Tux build?",
    answer: "Tech In A Tux designs custom websites for small to mid-sized businesses, including e-commerce stores, service-based websites, and booking platforms. Each site is mobile-friendly, SEO-optimized, and designed to convert visitors into customers.",
  },
  {
    id: "website-cost",
    question: "How much does a website cost at Tech In A Tux?",
    answer: "Website design typically starts around CAD $1,350, depending on the project's size and complexity. This includes responsive design, key pages, and 30 days of post-launch support. SEO packages can be added starting from CAD $350.",
  },
  {
    id: "hosting",
    question: "Does Tech In A Tux handle website hosting too?",
    answer: "Yes. Tech In A Tux provides secure and fast hosting for all websites they design. Hosting includes SSL setup, daily backups, uptime monitoring, and performance optimization to ensure the site runs smoothly 24/7.",
  },
  {
    id: "seo",
    question: "Can Tech In A Tux help improve my Google rankings?",
    answer: "Absolutely. Tech In A Tux offers Local and International SEO services designed to increase visibility on Google. The team optimizes on-page elements, improves technical SEO, and enhances Google My Business performance for higher rankings.",
  },
  {
    id: "industries",
    question: "What industries does Tech In A Tux work with?",
    answer: "We work with a wide range of industries including local service providers, e-commerce stores, restaurants, healthcare professionals, creative agencies, and more. Every solution is custom-built for your specific industry needs.",
  },
  {
    id: "smm",
    question: "Does Tech In A Tux provide social media marketing?",
    answer: "Yes. Tech In A Tux offers Social Media Marketing (SMM) to help clients build brand awareness, grow engagement, and attract more leads through targeted campaigns on platforms like Instagram, Facebook, and LinkedIn.",
  },
  {
    id: "seo-included",
    question: "Is SEO included with website design at Tech In A Tux?",
    answer: "A basic level of SEO setup is included with every website design. For more comprehensive SEO strategies and ongoing optimization, dedicated SEO packages are available starting from CAD $350.",
  },
  {
    id: "timeline",
    question: "How long does it take to complete a website?",
    answer: "Most websites are completed within 4 to 8 weeks, depending on content readiness and project scope. We manage everything from wireframes to final launch to keep the process smooth and timely.",
  },
  {
    id: "post-launch",
    question: "What kind of post-launch support does Tech In A Tux offer?",
    answer: "Tech In A Tux provides 30 days of free post-launch support, which includes troubleshooting, minor adjustments, and guidance on managing your new site. Ongoing maintenance plans are also available covering updates, performance checks, security monitoring, and regular backups.",
  },
  {
    id: "gmb",
    question: "Does Tech In A Tux help with Google My Business setup?",
    answer: "Yes. We help clients set up and optimize their Google My Business profiles to improve local search visibility, manage reviews, and attract more customers from Google Search and Maps.",
  },
  {
    id: "maintenance",
    question: "Can Tech In A Tux manage my website after launch?",
    answer: "Yes. We offer ongoing Website Maintenance Plans that cover regular updates, performance optimization, security monitoring, content updates, and regular backups to keep your site running smoothly.",
  },
  {
    id: "quote",
    question: "How can I get a quote from Tech In A Tux?",
    answer: "Getting a quote is simple. You can contact Tech In A Tux through the website form, email alex@techinatux.com, or book a free consultation call to discuss your project and get a personalized quote.",
  },
];

export default function FAQsPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      <div className="w-full border-b border-white/10 min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-6 bg-[#121212]">
        <h1 className="font-condensed text-[32vw] md:text-[38vw] font-medium tracking-[-0.03em] text-white leading-none select-none scale-y-[1.15] scale-x-[1.08]">
          FAQs
        </h1>
      </div>

      <section className="bg-[#121212] text-white border-b border-white/10 py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-4">Questions & Answers</span>
          <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] mb-4">
            Have any questions? Find answers here.
          </h2>
          <p className="text-base md:text-lg text-white/50 max-w-3xl leading-relaxed mb-12">
            Find clear, detailed answers to the most common questions about our services and how we work.
          </p>
          <div className="divide-y divide-white/10">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="group py-6 cursor-pointer flex flex-col transition-colors duration-300"
                >
                  <div className="flex justify-between items-center w-full">
                    <h3 className={`font-condensed text-xl md:text-3xl font-bold tracking-wider transition-colors ${
                      isOpen ? "text-accent" : "text-white group-hover:text-accent"
                    }`}>
                      {faq.question}
                    </h3>
                    <Plus className={`w-6 h-6 text-white/40 group-hover:text-white transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? "rotate-45 text-accent!" : ""
                    }`} />
                  </div>
                  <div className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 overflow-hidden"
                  }`}>
                    <div className="overflow-hidden">
                      <p className="text-base md:text-lg text-white/70 max-w-3xl leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#121212] text-white py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 text-center">
          <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-8">
            We&apos;re here to help. Reach out to us and we&apos;ll get back to you within one business day.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-white font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-accent transition-all duration-300">
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
