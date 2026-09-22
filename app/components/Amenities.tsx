"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Eye, 
  X, 
  ArrowRight, 
  Loader2, 
  ShieldCheck, 
  ChevronRight
} from "lucide-react";

interface AmenityItem {
  id: number;
  src: string;
  title: string;
  tag: string;
  description: string;
}

const amenitiesData: AmenityItem[] = [
  {
    id: 1,
    src: "/g1.png",
    title: "Cascade Water Plunge",
    tag: "Hydrotherapy",
    description: "Natural stone plunge pools with tranquil step-down seating designed to soothe the senses and encourage slow, restorative living.",
  },
  {
    id: 2,
    src: "/g2.png",
    title: "Sunken Poolside Lounges",
    tag: "Refined Leisure",
    description: "Deep outdoor daybeds integrated alongside the poolside, offering private, transportive moments under natural sunlight.",
  },
  {
    id: 3,
    src: "/g3.png",
    title: "Biophilic Timber Pavilion",
    tag: "Gathering Grove",
    description: "Sheltered hardwood stilt lounge draped in vertical greenery, curated for intimate evening conversations and reading.",
  },
  {
    id: 4,
    src: "/g4.png",
    title: "Canopy Woodland Boardwalk",
    tag: "Sensory Trails",
    description: "Elevated timber deck pathways meandering through preserved tree clusters, soft bollard lighting, and native flora.",
  },
  {
    id: 5,
    src: "/g5.png",
    title: "Meditation Tepee Pods",
    tag: "Mindfulness Retreat",
    description: "Private slatted timber alcoves with sheer linen drapes nestled into open lawn glades for undisturbed solitude.",
  },
  {
    id: 6,
    src: "/g6.png",
    title: "Atrium Living Garden Court",
    tag: "Architectural Greenery",
    description: "Double-height interior courtyards bringing natural sunlight, lush palm landscaping, and clean air into the communal core.",
  },
  {
    id: 7,
    src: "/g7.png",
    title: "Artisanal Kids' Play Grove",
    tag: "Family Harmony",
    description: "Custom timber treehouses, suspended swing cradles, and sand pits crafted from organic elements for childhood exploration.",
  },
  {
    id: 8,
    src: "/g8.png",
    title: "Cantilever Waterfall Pool",
    tag: "Signature Feature",
    description: "Dramatic overhanging concrete pool structure with cascading curtain waterfalls, underwater jets, and sunken cabana seats.",
  },
];

export default function Amenities() {
  const router = useRouter();

  // Modal & Lightbox states
  const [activeImage, setActiveImage] = useState<AmenityItem | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Form submission state
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phone}`,
          source: "Amenities Section Inquiry",
        }),
      });

      if (res.ok) {
        setIsFormOpen(false);
        router.push("/thank-you");
      } else {
        throw new Error("Failed to submit. Please try again.");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Network error. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="amenities" 
      className="relative w-full bg-[#FDFBF7] text-[#121214] py-24 lg:py-32 overflow-hidden border-b border-[#E8DEC8]/80"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C5A059]/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#E31826]/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* 1. SECTION EDITORIAL HEADER                               */}
        {/* ========================================================= */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7F2E7] border border-[#E8DEC8] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.26em] text-[#C5A059]">
              Curated Master Plan
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#121214] font-normal tracking-tight max-w-3xl leading-[1.12]">
            Amenities Sculpted for <br className="hidden sm:inline" />
            <span className="italic font-serif text-[#C5A059]">Refined Wellbeing</span>
          </h2>

          <p className="text-xs sm:text-sm font-sans text-[#5A5D64] font-light max-w-lg mt-3 leading-relaxed">
            Every lifestyle amenity is thoughtfully zoned into active, natural, and quiet spacesEnquire Now — 
            providing a complete sanctuary of leisure right outside your door.
          </p>

          <div className="w-12 h-[1.5px] bg-[#C5A059] mx-auto mt-4 rounded-full" />
        </div>

        {/* ========================================================= */}
        {/* 2. DESKTOP VIEW: 2 ROWS OF 4 CARDS                        */}
        {/* ========================================================= */}
        <div className="hidden lg:grid grid-cols-4 gap-6 mb-16">
          {amenitiesData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative rounded-2xl overflow-hidden bg-[#121214] border border-[#E8DEC8] shadow-md hover:shadow-xl hover:border-[#C5A059] transition-all duration-300 aspect-[3/4] flex flex-col justify-end"
            >
              {/* Image Canvas */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Permanent Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

              {/* Floating Eye Button Trigger (Top Right on Hover) */}
              <button
                type="button"
                onClick={() => setActiveImage(item)}
                aria-label={`View full details for ${item.title}`}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-[#C5A059] text-white hover:text-[#121214] border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90 cursor-pointer shadow-lg"
              >
                <Eye className="w-4 h-4" />
              </button>

              {/* Card Label Information */}
              <div className="relative z-10 p-5 text-white space-y-1">
                <span className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-[#F3E2B8] block">
                  {item.tag}
                </span>
                <h3 className="font-serif text-lg font-medium text-white group-hover:text-[#F3E2B8] transition-colors leading-snug">
                  {item.title}
                </h3>
                
                <button
                  type="button"
                  onClick={() => setActiveImage(item)}
                  className="pt-2 inline-flex items-center gap-1.5 text-[10px] font-sans font-semibold uppercase tracking-wider text-[#C5A059] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Explore detail</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* 3. MOBILE VIEW: SNAP-SCROLL GALLERY                       */}
        {/* ========================================================= */}
        <div className="block lg:hidden mb-12">
          <div className="relative w-full -mx-4 px-4 flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-4">
            {amenitiesData.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                className="relative flex-none w-[78vw] max-w-[300px] aspect-[3/4] rounded-[22px] overflow-hidden snap-center shadow-lg border border-[#E8DEC8] bg-[#121214] cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Eye Icon Badge */}
                <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/40 border border-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#F3E2B8] block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-lg font-medium leading-snug">
                    {item.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[10px] text-[#C5A059] font-bold uppercase tracking-wider mt-2">
                    <span>Tap to view space</span>
                    <Eye className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <span className="text-[11px] font-sans text-[#5A5D64] italic">
              ← Swipe horizontally to preview all 8 lifestyle zones →Enquire Now
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. EDITORIAL CTA STRIP: ENQUIRE NOW MODAL TRIGGER         */}
        {/* ========================================================= */}
        <div className="w-full max-w-4xl mx-auto rounded-2xl bg-[#F7F2E7] border border-[#E8DEC8] p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#C5A059] block">
              Bespoke Portfolio
            </span>
            <p className="text-sm font-serif text-[#121214] font-medium">
              Looking for tailored clubhouse privileges or private cabana availability?
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsFormOpen(true)}
            className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7B35] hover:brightness-105 text-[#121214] font-sans font-bold text-xs tracking-[0.16em] uppercase transition-all duration-300 shadow-[0_4px_18px_rgba(197,160,89,0.3)] shrink-0 border border-[#F3E2B8]/40 cursor-pointer active:scale-95"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#121214] transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>

      {/* ========================================================= */}
      {/* 5. IMAGE LIGHTBOX MODAL (On Eye Click)                    */}
      {/* ========================================================= */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-3xl bg-[#FDFBF7] rounded-[24px] overflow-hidden shadow-2xl border border-[#E8DEC8]"
            >
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative w-full h-[45vh] sm:h-[55vh] bg-[#121214]">
                <Image
                  src={activeImage.src}
                  alt={activeImage.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 bg-[#FDFBF7] border-t border-[#E8DEC8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.24em] text-[#C5A059]">
                    {activeImage.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#121214] font-bold mt-0.5">
                    {activeImage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A5D64] font-sans mt-1.5 max-w-xl leading-relaxed">
                    {activeImage.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setActiveImage(null);
                    setTimeout(() => setIsFormOpen(true), 250);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#121214] hover:bg-[#1F2024] text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-colors cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* 6. CONCIERGE ENQUIRE MODAL (Connected to /api/contact)    */}
      {/* ========================================================= */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-[#FDFBF7] text-[#121214] rounded-[28px] p-6 sm:p-8 border border-[#E8DEC8] shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#F7F2E7] border border-[#E8DEC8] text-[#121214] hover:bg-[#E8DEC8] transition-colors"
                aria-label="Close Form"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center pb-5 border-b border-[#E8DEC8]">
                <span className="text-[10px] uppercase font-bold tracking-[0.24em] text-[#C5A059] block mb-1">
                  Amenities & Privileges
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#121214]">
                  Enquire with Concierge
                </h3>
                <p className="text-xs text-[#5A5D64] mt-1">
                  Receive detailed zoning layouts and access schedules.Enquire Now
                </p>
              </div>

              {errorMsg && (
                <div className="mt-4 p-3 rounded-xl bg-red-50 text-red-600 text-xs text-center border border-red-200">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 pt-5">
                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-wider text-[#5A5D64] mb-1">
                    Your Full Name <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Singhal"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-[#E8DEC8] rounded-xl text-xs text-[#121214] focus:outline-none focus:border-[#C5A059] shadow-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-wider text-[#5A5D64] mb-1">
                    Phone Number <span className="text-[#C5A059]">*</span>
                  </label>
                  <div className="flex">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-[#E8DEC8] bg-[#F7F2E7] text-xs font-semibold text-[#121214] focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="+91">+91 (IN)</option>
                      <option value="+971">+971 (UAE)</option>
                      <option value="+1">+1 (US)</option>
                      <option value="+44">+44 (UK)</option>
                    </select>
                    <input
                      type="tel"
                      required
                      placeholder="99103 74156"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-[#E8DEC8] rounded-r-xl text-xs text-[#121214] focus:outline-none focus:border-[#C5A059] shadow-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10.5px] font-bold uppercase tracking-wider text-[#5A5D64] mb-1">
                    Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-[#E8DEC8] rounded-xl text-xs text-[#121214] focus:outline-none focus:border-[#C5A059] shadow-sm transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7B35] hover:brightness-105 text-[#121214] font-bold text-xs uppercase tracking-[0.14em] shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer border border-[#F3E2B8]/40"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#121214]" />
                        <span>Submitting Details...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Private Inquiry</span>
                        <ArrowRight className="w-4 h-4 text-[#121214]" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 pt-1 text-[10.5px] text-[#5A5D64]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Direct Developer Desk • 100% Privacy Guaranteed</span>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </section>
  );
}