"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  Building, 
  Trees, 
  ShieldCheck, 
  Waves, 
  Dumbbell, 
  Maximize, 
  HeartHandshake, 
  PlaneTakeoff 
} from "lucide-react";

// Curated title-only highlights
const highlightsData = [
  { id: "01", icon: Building, title: "Fully Furnished Homes" },
  { id: "02", icon: Trees, title: "85% Open Wellness Greenery" },
  { id: "03", icon: Maximize, title: "Ultra-Low Density (2 Units Per Core)" },
  { id: "04", icon: Waves, title: "Resort-Style Infinity Podium Pool" },
  { id: "05", icon: Dumbbell, title: "Dedicated Sports Oasis & Courts" },
  { id: "06", icon: HeartHandshake, title: "Biophilic Sheltered Stilt Lounges" },
  { id: "07", icon: PlaneTakeoff, title: "20 mints Noida International Airport (Jewar)" },
  { id: "08", icon: ShieldCheck, title: "Hero Enterprise Verified Quality" },
];

export default function Highlights() {
  const scrollToAmenities = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("amenities");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="highlights" 
      className="relative w-full py-24 lg:py-32 flex flex-col justify-center overflow-hidden bg-[#121214] text-[#FDFBF7]"
    >
      {/* ========================================================= */}
      {/* 1. LUXURY PROCEDURAL BACKGROUND (No Photos/Banners)       */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep Royal Wine / Maroon Rich Radial Gradients */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#2B080D]/80 via-[#1C060A]/50 to-transparent rounded-full blur-[140px]" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-t from-[#200407]/60 via-[#160205]/40 to-transparent rounded-full blur-[140px]" />
        
        {/* Subtle Ambient Gold Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C5A059]/[0.06] rounded-full blur-[160px]" />

        {/* Architectural Hairline Accent Lines */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E8DEC8]/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E8DEC8]/25 to-transparent" />
      </div>

      {/* ========================================================= */}
      {/* 2. FOREGROUND CONTENT & 8-HIGHLIGHT GRID                  */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-14 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F2024]/80 border border-[#C5A059]/40 shadow-sm backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.26em] text-[#F3E2B8]">
              Project Highlights
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal tracking-tight leading-[1.14]"
          >
            Engineered with Precision, <br />
            <span className="italic font-serif text-[#F3E2B8]">Curated for Distinction</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-xs sm:text-sm font-sans text-gray-300/80 font-light max-w-md mx-auto leading-relaxed"
          >
            An exclusive enclave balancing architectural stature with natural tranquility.
          </motion.p>

          <div className="w-12 h-[1.5px] bg-[#C5A059] mx-auto mt-2 rounded-full" />
        </div>

        {/* 8 Title-Only Highlights Grid (2 Columns on Desktop / 1 Column on Mobile) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3.5 lg:gap-4.5 mb-14 lg:mb-16">
          {highlightsData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ y: -2 }}
                className="group relative flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#1A1A1E]/85 hover:bg-[#232328] border border-[#E8DEC8]/15 hover:border-[#C5A059]/60 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                {/* Number & Icon Lockup */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[11px] font-sans font-bold tracking-widest text-[#C5A059] group-hover:text-[#F3E2B8] transition-colors">
                    {item.id}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#26272D] border border-white/10 group-hover:border-[#C5A059]/60 flex items-center justify-center text-[#F3E2B8] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <div className="flex-1 text-left">
                  <h3 className="font-serif text-base sm:text-lg text-white font-normal group-hover:text-[#F3E2B8] transition-colors duration-200 tracking-wide leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Subtle Hover Sheen in Top Right */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#C5A059]/15 to-transparent rounded-tr-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* 3. CTA TO AMENITIES SECTION                               */}
        {/* ========================================================= */}
        <div className="flex flex-col items-center text-center space-y-2.5">
          <a
            href="#amenities"
            onClick={scrollToAmenities}
            className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7B35] hover:brightness-105 text-[#121214] font-sans font-bold text-xs sm:text-[13px] tracking-[0.18em] uppercase transition-all duration-300 shadow-[0_8px_30px_rgba(197,160,89,0.35)] hover:shadow-[0_12px_35px_rgba(197,160,89,0.5)] hover:-translate-y-0.5 border border-[#F3E2B8]/40 cursor-pointer"
          >
            <span>Explore All 40+ Lifestyle Amenities</span>
            <ArrowRight className="w-4 h-4 text-[#121214] transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>

          <span className="text-[11px] font-sans font-normal tracking-wide text-gray-400">
            50,000 Sq.Ft. Clubhouse • Wellness Groves • Olympic-Length Waters
          </span>
        </div>

      </div>
    </section>
  );
}