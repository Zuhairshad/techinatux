import React from "react";
import AboutSection from "@/components/AboutSection";
import { ArrowRight, Play } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="w-full border-b border-white/10 min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden px-4 md:px-6 bg-[#121212] text-center">
        <h1 className="font-condensed text-[28vw] md:text-[34vw] font-medium tracking-[-0.03em] text-white leading-none select-none scale-y-[1.15] scale-x-[1.08]">
          ABOUT US
        </h1>
      </div>

      {/* Our Story section */}
      <section className="bg-[#121212] text-white border-b border-white/10 py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Story */}
            <div>
              <span className="text-xs font-bold tracking-widest text-accent uppercase mb-6 block">Our Story</span>
              <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] mb-8">
                The Friendly Neighbourhood Tech Family
              </h2>
              <div className="flex flex-col gap-5">
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  Alejandro started Tech In A Tux back in 2019 after realizing how many people felt frustrated, overcharged, or left behind when it came to tech. Instead of taking the traditional route, Alejandro decided to skip the corporate ladder and create a service that put people first. From day one, our goal has been simple: make technology accessible, affordable, and simple for everyone.
                </p>
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  Whether you&apos;re a business owner, a gamer, or someone who just needs a bit of tech support, Alejandro & his team is here to help you reach your goals with ease, confidence, and a personal touch.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-white font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-accent transition-all duration-300">
                  Get a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300 text-white/80">
                  <Play className="w-5 h-5 ml-0.5" />
                </button>
              </div>
            </div>

            {/* Right: Mission & Values */}
            <div>
              <span className="text-xs font-bold tracking-widest text-accent uppercase mb-6 block">Mission & Values</span>
              <h3 className="font-condensed text-2xl md:text-4xl font-bold mb-2">People Come First</h3>
              <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8">
                Our mission is to provide affordable IT solutions in Vancouver, making technology accessible for everyone.
              </p>

              <h3 className="font-condensed text-xl md:text-3xl font-bold mb-2">Our Values: Building Trust and Empowering Our Clients</h3>
              <p className="text-sm md:text-base text-white/50 leading-relaxed mb-8">
                At Tech in Tux, we are passionate about technology and service excellence. We combine diverse skill sets to offer a comprehensive suite of solutions for all your IT needs. Our core values shape every interaction with our clients, ensuring that we deliver high-quality results.
              </p>

              <div className="flex flex-col gap-5">
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-condensed text-xl md:text-2xl font-bold text-white">Integrity</h4>
                  <p className="text-sm md:text-base text-white/50 leading-relaxed mt-1">We believe in honest communication and ethical practices, building trust with every project.</p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-condensed text-xl md:text-2xl font-bold text-white">Passion</h4>
                  <p className="text-sm md:text-base text-white/50 leading-relaxed mt-1">Our passion for technology fuels our dedication to empowering our clients.</p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-condensed text-xl md:text-2xl font-bold text-white">Simplicity</h4>
                  <p className="text-sm md:text-base text-white/50 leading-relaxed mt-1">We simplify complex technology solutions, making them easy for you to understand and use.</p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h4 className="font-condensed text-xl md:text-2xl font-bold text-white">Fun</h4>
                  <p className="text-sm md:text-base text-white/50 leading-relaxed mt-1">Technology should be enjoyable! We bring a light-hearted approach to every project.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unmatched Dedication & Expertise banner */}
      <section className="bg-[#121212] text-white border-b border-white/10 py-16 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="text-center group">
                <span className="font-condensed text-3xl md:text-5xl font-bold text-white/10 group-hover:text-accent/30 transition-colors duration-500 leading-none block">
                  Unmatched
                </span>
                <span className="font-condensed text-3xl md:text-5xl font-bold text-white/10 group-hover:text-accent/30 transition-colors duration-500 leading-none block -mt-1">
                  Dedication
                </span>
                <span className="font-condensed text-lg md:text-xl font-bold text-white/10 group-hover:text-accent/20 transition-colors duration-500 leading-none block mt-1">
                  & Expertise
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us / Vision */}
      <section className="bg-[#121212] text-white border-b border-white/10 py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="text-xs font-bold tracking-widest text-accent uppercase mb-6 block">About Us</span>
              <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] mb-8">
                The Friendly Neighbourhood Tech Family: A Leading Web Development Agency in Vancouver
              </h2>
              <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6">
                Tech in Tux isn&apos;t just about technology, it&apos;s about family. Our team is committed to providing exceptional IT support, website design, web development, and custom PC solutions. Our diverse backgrounds and skill sets help us foster a culture of innovation and collaboration.
              </p>
              <p className="text-base md:text-lg text-white/50 leading-relaxed">
                To become the premier technology partner for businesses and individuals in Vancouver & Gibsons, delivering cutting-edge solutions that foster growth and innovation.
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <div className="border border-white/10 p-8 md:p-10">
                <h3 className="font-condensed text-2xl md:text-4xl font-bold mb-4">Our Vision</h3>
                <p className="text-base md:text-lg text-white/60 leading-relaxed">
                  To become the premier technology partner for businesses and individuals in Vancouver & Gibsons, delivering cutting-edge solutions that foster growth and innovation.
                </p>
              </div>
              <a href="/contact" className="self-start inline-flex items-center gap-2 mt-8 border border-white/20 text-white/80 font-semibold text-sm tracking-wider uppercase px-6 py-3 hover:border-accent hover:text-accent transition-all duration-300">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-[#121212] text-white border-b border-white/10 py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <span className="text-xs font-bold tracking-widest text-accent uppercase mb-6 block">Our Awards</span>
          <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] mb-6">
            Why Choose Us for Your IT & Web Needs in Vancouver & Gibsons
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-4xl mb-12">
            Over the past five years, Tech in a Tux has been recognized for its commitment to excellence and community service. We are proud to have received accolades for our Pay What You Can Tech support & Web Design initiatives and our contributions to the local community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Pay What You Can", year: "'25", category: "Community Impact Award" },
              { title: "Best Web Solutions", year: "'24", category: "Vancouver Business Awards" },
              { title: "Top IT Support", year: "'24", category: "Small Business Superstar" },
              { title: "Community Champion", year: "'23", category: "Local Business Recognition" },
            ].map((award) => (
              <div key={award.title} className="border border-white/10 p-8 flex items-center justify-between group hover:border-accent/40 transition-all duration-300">
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-condensed text-2xl md:text-4xl font-bold tracking-wide text-white group-hover:text-accent transition-colors">
                      {award.title}
                    </h3>
                    <span className="font-condensed text-sm font-bold text-accent">{award.year}</span>
                  </div>
                  <span className="text-xs font-bold text-white/40 uppercase tracking-widest">{award.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#121212] text-white border-b border-white/10 py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <span className="text-xs font-bold tracking-widest text-accent uppercase mb-6 block">Meet Our Team</span>
          <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] mb-12">
            The People Behind Tech In A Tux
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-white/10 p-8 flex flex-col items-center text-center group hover:border-accent/40 transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 mb-5 flex items-center justify-center overflow-hidden">
                <span className="font-condensed text-3xl font-bold text-accent">AC</span>
              </div>
              <h3 className="font-condensed text-2xl font-bold tracking-wide text-white group-hover:text-accent transition-colors">Alejandro Calle</h3>
              <span className="text-xs font-bold tracking-widest text-white/40 uppercase mt-1 mb-3">Founder & CEO</span>
              <p className="text-sm text-white/40 leading-relaxed">Visionary behind Tech In A Tux, committed to making technology accessible, affordable, and simple for everyone in Vancouver and beyond.</p>
            </div>
            <div className="border border-white/10 p-8 flex flex-col items-center text-center group hover:border-accent/40 transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 mb-5 flex items-center justify-center overflow-hidden">
                <span className="font-condensed text-3xl font-bold text-accent">AA</span>
              </div>
              <h3 className="font-condensed text-2xl font-bold tracking-wide text-white group-hover:text-accent transition-colors">Amazing Ali</h3>
              <span className="text-xs font-bold tracking-widest text-white/40 uppercase mt-1 mb-3">Lead Dev</span>
              <p className="text-sm text-white/40 leading-relaxed">Senior developer bringing technical expertise and creative problem-solving to every project.</p>
            </div>
            <div className="border border-white/10 p-8 flex flex-col items-center text-center group hover:border-accent/40 transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 mb-5 flex items-center justify-center overflow-hidden">
                <span className="font-condensed text-3xl font-bold text-accent">DT</span>
              </div>
              <h3 className="font-condensed text-2xl font-bold tracking-wide text-white group-hover:text-accent transition-colors">Devtrios</h3>
              <span className="text-xs font-bold tracking-widest text-white/40 uppercase mt-1 mb-3">Sr. Developers</span>
              <p className="text-sm text-white/40 leading-relaxed">Senior development team delivering scalable, reliable software and web solutions for clients worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials heading section */}
      <section className="bg-[#121212] text-white border-b border-white/10 py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <span className="text-xs font-bold tracking-widest text-accent uppercase mb-6 block">Testimonials</span>
          <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] mb-6">
            Don&apos;t Just Take Our Word for It
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-4xl mb-8">
            200+ Tech In A Tux Happy Clients Can&apos;t Be Wrong: Experience the Tech in a Tux Difference. Our clients value our commitment to providing affordable IT support, reliable web development in Vancouver, and bespoke website design services.
          </p>
          <a href="https://search.google.com/local/writereview?placeid=ChIJp2HXqF5zhlQRYEgPXYq3WcA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 text-white/80 font-semibold text-sm tracking-wider uppercase px-6 py-3 hover:border-accent hover:text-accent transition-all duration-300">
            Read Google Reviews
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <AboutSection hideHeading />

      {/* FAQs Section */}
      <section className="bg-[#121212] text-white border-b border-white/10 py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <span className="text-xs font-bold tracking-widest text-accent uppercase mb-6 block">Questions & Answers</span>
          <h2 className="font-condensed text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-[-0.02em] mb-4">
            We understand you may have questions. Here are some of the most common ones our clients ask.
          </h2>
          <div className="divide-y divide-white/10 mt-12">
            {[
              {
                q: "What makes Tech In A Tux different from other IT providers?",
                a: "We are community-focused, offering affordable IT support in Vancouver and community-focused IT services to make technology accessible to everyone.",
              },
              {
                q: "Do you offer web development services in Vancouver?",
                a: "Yes, we offer a full range of web development services in Vancouver, including custom website design, e-commerce solutions, and responsive development tailored to your business needs.",
              },
              {
                q: "How does your donation-based IT support work?",
                a: "We provide IT support services based on a donation model to ensure affordability for everyone in the community. Clients contribute what they can afford, making expert tech help accessible to all.",
              },
              {
                q: "Can I get custom-built PCs from Tech In A Tux?",
                a: "Absolutely. We build custom PCs tailored to your specific needs, whether you're a gamer, a creative professional, or a business user looking for a reliable workstation.",
              },
              {
                q: "What types of businesses do you work with for website design?",
                a: "We work with a wide range of businesses including local service providers, e-commerce stores, restaurants, healthcare professionals, and creative agencies. Every site is custom-built for your industry.",
              },
            ].map((faq, i) => (
              <div key={i} className="py-6">
                <h3 className="font-condensed text-xl md:text-2xl font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-base text-white/60 leading-relaxed max-w-3xl">{faq.a}</p>
              </div>
            ))}
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
      <section className="bg-[#121212] text-white py-24">
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
