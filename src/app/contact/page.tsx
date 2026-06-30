"use client";

import React, { useState } from "react";
import { Phone, Mail, Clock, ArrowRight, Plus } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const testimonials = [
    { client: "ANISH MEHTA", role: "Local Guide", quote: "What a gem of a guy! Rebuilt my pc within 2 hours free of cost. Extremely helpful and great to talk to! Highly recommend. Love the name 'Tech In A Tux'!" },
    { client: "DJ HARSHID", role: "Seattle, WA", quote: "This guy's a lifesaver! Helped me fix probs in my old PC, gave solid tech advice & even built my whole CPU, all for free! (yeh, tips/donations are cool but never pushed it). Super chill, professional & always gives honest, no-bs opinions. Def my go-to tech guy now. So glad I found him!" },
    { client: "YADWINDER SINGH", role: "San Diego, CA", quote: "Alejandro went above and beyond in helping me build my dream PC. He handled everything, from collecting all the parts to assembling it flawlessly within a day. Not only did he put everything together with precision, but he also tuned it up for the best performance. His expertise and efficiency made the entire process seamless. If you need someone reliable and skilled for a PC build, Alejandro is the guy to go to. Highly recommend!" },
  ];

  return (
    <>
      <div className="w-full border-b border-white/10 min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-6 bg-[#121212]">
        <h1 className="font-condensed text-[24vw] md:text-[28vw] font-medium tracking-[-0.03em] text-white leading-none select-none scale-y-[1.15] scale-x-[1.08]">
          CONTACT US
        </h1>
      </div>

      {/* Get in Touch */}
      <section className="bg-[#121212] text-white border-b border-white/10 py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <span className="text-xs font-bold tracking-widest text-accent uppercase mb-4 block">Contact Us</span>
          <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] mb-6">
            Get in Touch with Tech in a Tux
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mb-8">
            We&apos;re thrilled to help bring your dream PC to life or craft a legendary, SEO-optimized website. We&apos;re here to solve your tech challenges with expertise and passion.
          </p>
          <a href="#contact-form" className="inline-flex items-center gap-2 bg-accent text-white font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-accent transition-all duration-300">
            Contact Us Today
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* How to Reach Us */}
      <section className="bg-[#121212] text-white border-b border-white/10 py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <span className="text-xs font-bold tracking-widest text-accent uppercase mb-4 block">Contact Us</span>
          <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] mb-6">
            How to Reach Us
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl mb-12">
            Choose the most convenient way to connect with us. Whether you need assistance with IT support, have questions about our donation-based model, or want to learn more about our services, we&apos;re here to help.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-3">
              <Phone className="w-6 h-6 text-accent" />
              <h3 className="font-condensed text-xl md:text-2xl font-bold tracking-wide text-white">Phone</h3>
              <a href="tel:+16045054487" className="text-base text-white/70 hover:text-accent transition-colors">Call Us Directly: +1 604-505-4487</a>
              <span className="text-sm text-white/40">Available Monday to Friday, 9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex flex-col gap-3">
              <Mail className="w-6 h-6 text-accent" />
              <h3 className="font-condensed text-xl md:text-2xl font-bold tracking-wide text-white">Email</h3>
              <a href="mailto:alex@techinatux.com" className="text-base text-white/70 hover:text-accent transition-colors">Email Us: alex@TechInATux.com</a>
              <span className="text-sm text-white/40">We aim to respond within one business day</span>
            </div>
            <div className="flex flex-col gap-3">
              <Clock className="w-6 h-6 text-accent" />
              <h3 className="font-condensed text-xl md:text-2xl font-bold tracking-wide text-white">Meet with us</h3>
              <span className="text-base text-white/70">By appointment only. Please call or email to schedule a visit.</span>
            </div>
          </div>

          <div className="border-l-2 border-accent pl-4 mt-12">
            <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-3xl">
              We operate as a home-based business. To respect our privacy, please do not visit without an appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="bg-[#121212] text-white border-b border-white/10 py-20">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <span className="text-xs font-bold tracking-widest text-accent uppercase mb-4 block">Contact Us</span>
          <h2 className="font-condensed text-3xl md:text-5xl font-bold tracking-tight mb-2">Send Us a Message</h2>
          <p className="text-base text-white/50 mb-10">Have a question or need support? Fill out the form below, and we&apos;ll get back to you as soon as possible.</p>

          {submitted ? (
            <div className="border border-accent/40 bg-accent/5 p-8 text-center">
              <p className="text-accent font-bold text-lg">Thank you! Your message has been sent.</p>
              <p className="text-white/50 mt-2">We&apos;ll get back to you within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest text-white/40 uppercase">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent/60 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest text-white/40 uppercase">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent/60 transition-colors"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest text-white/40 uppercase">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent/60 transition-colors"
                    placeholder="Your Phone"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest text-white/40 uppercase">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent/60 transition-colors"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest text-white/40 uppercase">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-accent/60 transition-colors resize-none"
                  placeholder="How can we help you? Feel free to get in touch!"
                />
              </div>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" className="mt-0.5 w-4 h-4 border border-white/20 bg-transparent accent-accent" />
                <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors">I agree that my data is collected and stored.</span>
              </label>
              <button
                type="submit"
                className="self-start inline-flex items-center gap-2 bg-accent text-white font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-accent transition-all duration-300"
              >
                Send Message
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#121212] text-white border-b border-white/10 py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
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
                      <p className="text-base md:text-lg text-white/70 max-w-3xl leading-relaxed italic">
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
    </>
  );
}
