"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    id: "different",
    question: "What makes Tech In A Tux different from other IT providers?",
    answer:
      "We are community-focused, offering affordable IT support in Vancouver and community-focused IT services to make technology accessible to everyone.",
  },
  {
    id: "donation-meaning",
    question: "What does donation-based mean?",
    answer:
      "We rely on your generous contributions to support our services. Donations of any size are welcome, helping us keep our IT support accessible to the entire community. This approach ensures that expert tech help is available to everyone in Vancouver and Gibsons, reinforcing our mission to provide affordable IT services. By choosing Tech in a Tux, you're not just getting your tech troubles resolved, you're also contributing to bridging the digital divide in our local area.",
  },
  {
    id: "how-donation-works",
    question: "How does your donation-based IT support work?",
    answer:
      "We provide IT support services based on a donation model to ensure affordability for everyone in the community. Learn how donation-based IT support works to make technology accessible for all.",
  },
  {
    id: "web-dev-vancouver",
    question: "Do you offer web development services in Vancouver?",
    answer:
      "Yes, we offer a full range of web development services in Vancouver, including custom website design, e-commerce solutions, and responsive development tailored to your business needs.",
  },
  {
    id: "custom-pcs",
    question: "Can I get custom-built PCs from Tech In A Tux?",
    answer:
      "Absolutely. We build custom PCs tailored to your specific needs, whether you're a gamer, a creative professional, or a business user looking for a reliable workstation.",
  },
  {
    id: "business-types",
    question: "What types of businesses do you work with for website design?",
    answer:
      "We work with a wide range of businesses including local service providers, e-commerce stores, restaurants, healthcare professionals, and creative agencies. Every site is custom-built for your industry.",
  },
  {
    id: "location",
    question: "Do I need to be in Vancouver or Gibsons to use your services?",
    answer:
      "No, we provide remote IT support in Vancouver as well, making our services accessible to anyone, anywhere.",
  },
  {
    id: "web-solutions",
    question: "What kind of web solutions do you offer?",
    answer:
      "We offer custom web solutions in Vancouver, including custom web design, website development services for small businesses, and website design services Vancouver to help your business succeed online.",
  },
  {
    id: "speed",
    question: "How quickly can I get IT support?",
    answer:
      "We offer quick IT support in Vancouver, including remote assistance, to address your IT issues as quickly as possible.",
  },
];

export default function HomeFAQSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="bg-[#121212] text-white pt-24 pb-16 border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-bold tracking-widest text-accent uppercase">
            Questions & Answers
          </span>
        </div>
        <h2 className="font-condensed text-4xl md:text-6xl lg:text-[80px] font-bold leading-none tracking-[-0.02em] max-w-4xl mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-base md:text-lg text-white/50 max-w-3xl leading-relaxed mb-12">
          We understand you may have questions. Here are some of the most common ones our clients ask.
        </p>

        {/* Accordion */}
        <div className="divide-y divide-white/10 border-t border-white/10">
          {faqs.map((faq) => {
            const isOpen = active === faq.id;
            return (
              <div key={faq.id}>
                <button
                  onClick={() => setActive(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <h3
                    className={`font-condensed text-xl md:text-3xl font-bold tracking-wide pr-4 transition-colors ${
                      isOpen ? "text-accent" : "text-white group-hover:text-accent"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <Plus
                    className={`w-6 h-6 shrink-0 text-white/40 transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-accent!" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <a
            href="/faqs"
            className="inline-flex items-center gap-2 border border-white/20 text-white/80 font-semibold text-sm tracking-wider uppercase px-6 py-3 hover:border-accent hover:text-accent transition-all duration-300"
          >
            View All FAQs
          </a>
        </div>
      </div>
    </section>
  );
}
