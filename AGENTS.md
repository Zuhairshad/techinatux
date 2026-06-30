<!-- BEGIN:nextjs-agent-rules -->
This is NOT the Next.js you know. This version has breaking changes. Read `node_modules/next/dist/docs/` before writing code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Progress Summary

### Goal
Rebuild website using KARTA design (karta.framer.website) in Next.js, replace all content with material from techinatux.com — no content left out.

### Constraints & Preferences
- Site name: "Tech In A Tux" with IT support / web solutions tagline
- Design follows KARTA: dark sections (about, contact), light sections (works), Bebas Neue / Outfit typography, accent #ff5500
- Navigation: HOME, ABOUT US, IT SERVICES, DIGITAL SOLUTIONS, FAQs, CONTACT US — separate routes, no single-page scroll
- Header: collapsed shrinks to h-16, K. logo hidden when collapsed, HOME centered when collapsed, nav text font-medium tracking-normal
- Page headings: massive centered text (dark bg), font-condensed, tracking-[-0.03em], scale transforms, sizes custom per page to avoid wrapping
- DIGITAL SOLUTIONS: stacked layout (DIGITAL above SOLUTIONS), DIGITAL 50% smaller
- All TechInATux content must be included across all pages; nothing omitted
- Card sections should have cursor spotlight effect (text turns accent under cursor), staggered entrance animations, pulsing ring on hover, borders only visible on hover
- 3D model must fit KARTA's minimal magazine aesthetic (not flashy)

### Progress
#### Done
- Multi-page routing established (/, /about, /it-services, /digital-solutions, /faqs, /contact)
- Header redesigned: nav items, K. logo hidden on scroll, HOME centered when collapsed, font-medium tracking-normal, dynamic spacer
- WorksSection populated with TechInATux portfolio: Fairagora, Triplexog, Precious Paws, Animal Acid, The Glove Pop, Atlanta Faze
- AboutSection updated: team (Alejandro Calle + 3), stats (2019, 200+, 5+, 100%), awards, 12 real testimonials with actual names/locations, full About Us paragraphs
- ContactSection updated: home-based business note, email alex@techinatux.com, phone +1 604-505-4487, Vancouver BC, Facebook/LinkedIn
- FAQs page created with 15+ detailed Q&As (services, donation model, website costs, hosting, SEO, social media, maintenance, quotes, development)
- Digital Solutions page created with stacked heading, intro section (50% less), 9 service rows (01-09) with hover effects
- Contact page created with contact methods (Phone/Email/Meet), home-based note, contact form, FAQs section (7 items)
- about page updated with story section, Mission & Values, team cards (Alejandro, Ali, Devtrios)
- IT Services page built with hero CTA, 16 service cards (numbered .01-.16), FAQ section, CTA
- Homepage: HeroSection (Affordable Web Design + taglines + buttons + value prop + donation CTA + 3D model), TechSupportSection (4 cards), DigitalSolutionsSection (9 sub-service cards), WhyChooseSection (4 items), HomeFAQSection (6 Q&As), InsightsSection (3 blog posts), AboutSection, ContactSection, WorksSection
- Hero3DModel: Three.js scene with concentric white wireframe rings + floating dots + parallax cursor tracking
- Cursor spotlight effect on cards (clip-path circle reveals accent text)
- Staggered entrance animations for card sections (IntersectionObserver + 70-120ms stagger)
- Pulsing orange ring animation on card hover
- @react-three/fiber + three.js used for 3D rendering; dynamic import with ssr:false
- All TechInATux content integrated across all pages

### Key Decisions
- InsightsSection restored to homepage after user insisted on "no content left out"
- DigitalSolutions cards: bordered boxes → KARTA numbered rows (page) → cards with spotlight (homepage)
- WhyChoose uses same spotlight/entry system as DigitalSolutions but with icon as hero
- 3D model uses minimal white wireframe aesthetic (not orange/solid) to fit KARTA
- @react-three/fiber + three.js chosen; ssr:false dynamic import
- Mouse position stored in ref (not state) for zero-render tracking via useFrame
- IT services use numbered approach (.01-.16) with icon grid
- About page: story left, Mission & Values right in 2-col grid

### Relevant Files
- src/app/page.tsx — homepage (Hero + TechSupport + DigitalSolutions + Works + WhyChoose + About + HomeFAQ + Insights + Contact)
- src/app/about/page.tsx — ABOUT US heading + Story/Mission + Team + AboutSection
- src/app/it-services/page.tsx — IT SERVICES heading + hero CTA + 16 services + FAQ + CTA
- src/app/digital-solutions/page.tsx — DIGITAL/SOLUTIONS stacked heading + 9 service rows + intro
- src/app/faqs/page.tsx — FAQ accordion with 15 Q&As + CTA
- src/app/contact/page.tsx — CONTACT US heading + contact methods + form + FAQ
- src/components/HeroSection.tsx — Affordable Web Design + taglines + buttons + value prop + donation CTA + 3D model
- src/components/Hero3DModel.tsx — Three.js scene: white wireframe rings + dots + parallax
- src/components/TechSupportSection.tsx — 4 numbered service cards with image splits
- src/components/DigitalSolutionsSection.tsx — 9 sub-services in card grid with spotlight + entrance + pulsing ring
- src/components/WhyChooseSection.tsx — 4 reasons with icon + number + spotlight + recognition
- src/components/HomeFAQSection.tsx — 6 Q&As accordion on dark bg
- src/components/InsightsSection.tsx — 3 blog posts with gradient overlays + hover zoom
- src/components/WorksSection.tsx — portfolio project grid
- src/components/AboutSection.tsx — team, stats, awards, 12 testimonials, about paragraphs
- src/components/ContactSection.tsx — contact info, home-based note, subscribe, footer
- src/components/Header.tsx — nav, scroll behavior, responsive states
- src/app/layout.tsx — metadata, global structure
- src/app/globals.css — fonts, custom properties, accent color
