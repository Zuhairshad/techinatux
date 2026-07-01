import React from "react";

const brands = [
  { name: "Atlanta FaZe", src: "/brands/atlanta-faze.svg" },
  { name: "Fairagora Asia", src: "/brands/image-7.png" },
  { name: "Sony", src: "/brands/sony.svg" },
  { name: "Nickelodeon", src: "/brands/nickelodeon.svg" },
  { name: "EA Sports", src: "/brands/ea-sports-white.svg" },
  { name: "Nintendo", src: "/brands/nintendo.svg" },
  { name: "PANAGO", src: "/brands/panago.png" },
  { name: "Murda Beatz", src: "/brands/Mask-group-1.png" },
  { name: "Twitch", src: "/brands/twitch.svg" },
  { name: "YouTube", src: "/brands/youtube.svg" },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#121212] text-white border-b border-white/10 py-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-6">
        <span className="text-xs font-bold tracking-widest text-white/40 uppercase">
          Trusted By Brands &amp; Creators Worldwide
        </span>
      </div>
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
            {brands.map((brand) => (
              <div
                key={brand.name}
                title={brand.name}
                className="flex items-center justify-center h-16 md:h-20 w-36 md:w-44 shrink-0 mx-6 md:mx-8"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
