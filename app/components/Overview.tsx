"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  X, 
  Loader2, 
  ShieldCheck, 
  Maximize2, 
  Compass,
  Leaf,
  Heart,
  Users
} from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  tag: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/overview1.png",
    title: "Curated Natural Experiences",
    tag: "Riparian Landscapes",
    description: "Choreographed walkways, layered indigenous planting, and organic water features designed as an antidote to urban fatigue.",
  },
  {
    id: 2,
    src: "/overview2.png",
    title: "Wellness & Wellbeing",
    tag: "Mindful Sanctuaries",
    description: "Outdoor yoga lawns, meditation groves, and restorative open-air spaces supporting physical and mental rejuvenation.",
  },
  {
    id: 3,
    src: "/overview3.png",
    title: "Privacy & Exclusivity",
    tag: "Refined Leisure",
    description: "Deep deck verandas with poolside alcoves offering private, transportive moments away from fast city life.",
  },
  {
    id: 4,
    src: "/overview4.png",
    title: "Community Harmony",
    tag: "Social Groves",
    description: "Dedicated organic gardens and amphitheaters fostering shared leisure and meaningful connection across generations.",
  },
];

export default function Overview() {
  const router = useRouter();

  // Desktop Gallery State
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Modal states
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
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
          source: "Global Project Dossier Form",
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
    <section id="overview" className="relative w-full bg-[#FDFBF7] text-[#121214] py-24 lg:py-32 overflow-hidden border-b border-[#E8DEC8]/80">
      
      {/* Subtle Luxury Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C5A059]/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#E31826]/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="flex flex-col items-center text-center mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7F2E7] border border-[#E8DEC8] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.24em] text-[#C5A059]">
              The Architectural Vision
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#121214] font-normal tracking-tight max-w-3xl leading-[1.1]">
            A Global Standard in <br className="hidden sm:block" />
            <span className="italic font-serif text-[#C5A059]">Refined Living</span>
          </h2>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP LAYOUT: MASTER + TRACK GALLERY & NARRATIVE        */}
        {/* ========================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Interactive Master Gallery */}
          <div className="col-span-7 h-[650px] flex gap-4">
            
            {/* Main Focal Image */}
            <div 
              className="relative w-3/4 h-full rounded-[24px] overflow-hidden group cursor-pointer shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-[#E8DEC8]"
              onClick={() => setActiveImage(galleryItems[activeIndex])}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={galleryItems[activeIndex].src}
                    alt={galleryItems[activeIndex].title}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Rich Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/90 via-[#121214]/20 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Master Image Overlay Content */}
              <div className="absolute bottom-0 inset-x-0 p-8 text-white z-10">
                <motion.div
                  key={`text-${activeIndex}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-2 block">
                    {galleryItems[activeIndex].tag}
                  </span>
                  <h4 className="font-serif text-3xl font-normal text-[#FDFBF7] leading-snug mb-3">
                    {galleryItems[activeIndex].title}
                  </h4>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-all duration-300">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-white">Expand View</span>
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Vertical Filmstrip Track */}
            <div className="w-1/4 flex flex-col gap-4 h-full">
              {galleryItems.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative flex-1 rounded-[16px] overflow-hidden cursor-pointer transition-all duration-500 border-2 ${
                    activeIndex === idx ? "border-[#C5A059] opacity-100 shadow-md" : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.tag}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 transition-colors duration-500 ${activeIndex === idx ? "bg-black/0" : "bg-black/20"}`} />
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Narrative & Form Trigger */}
          <div className="col-span-5 space-y-9 pl-4">
            
            <div className="space-y-4">
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.24em] text-[#5A5D64]">
                The Design Philosophy
              </span>
              <h3 className="text-3xl font-serif text-[#121214] leading-[1.2]">
                Conceived as a destination retreat, functioning as a modern community.
              </h3>
              <p className="text-sm font-sans text-[#5A5D64] leading-relaxed font-normal">
                "Live Slow" is an architectural antidote to fast, high-pressure urban life. 
                We have curated open spaces that gently encourage residents to breathe, linger, 
                walk, and authentically connect with surrounding nature.
              </p>
            </div>

            {/* 4 Feature Pillars */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-[#E8DEC8] shadow-sm hover:shadow-md transition-shadow">
                <Compass className="w-5 h-5 text-[#C5A059] mb-2.5" />
                <span className="block text-xs font-bold text-[#121214] uppercase tracking-wide">Curated Nature</span>
                <span className="text-[11px] text-[#5A5D64] leading-tight block mt-1">Flowing water features & indigenous green buffers.</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8DEC8] shadow-sm hover:shadow-md transition-shadow">
                <Leaf className="w-5 h-5 text-[#C5A059] mb-2.5" />
                <span className="block text-xs font-bold text-[#121214] uppercase tracking-wide">Wellness Zones</span>
                <span className="text-[11px] text-[#5A5D64] leading-tight block mt-1">Spa-inspired arrival courts & private yoga decks.</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8DEC8] shadow-sm hover:shadow-md transition-shadow">
                <Heart className="w-5 h-5 text-[#C5A059] mb-2.5" />
                <span className="block text-xs font-bold text-[#121214] uppercase tracking-wide">True Privacy</span>
                <span className="text-[11px] text-[#5A5D64] leading-tight block mt-1">Exclusive planning with only 2 apartments per core.</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8DEC8] shadow-sm hover:shadow-md transition-shadow">
                <Users className="w-5 h-5 text-[#C5A059] mb-2.5" />
                <span className="block text-xs font-bold text-[#121214] uppercase tracking-wide">Shared Leisure</span>
                <span className="text-[11px] text-[#5A5D64] leading-tight block mt-1">Botanical amphitheaters & multi-gen play zones.</span>
              </div>
            </div>

            {/* Desktop CTA Trigger Button (Brushed Gold) */}
            <div className="pt-2">
              <button
                onClick={() => setIsFormOpen(true)}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7B35] hover:brightness-105 text-[#121214] font-sans font-bold text-[11px] tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_6px_20px_rgba(197,160,89,0.3)] hover:shadow-[0_8px_25px_rgba(197,160,89,0.45)] hover:-translate-y-0.5 border border-[#F3E2B8]/40"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 text-[#121214] transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE CONFIG: PREMIUM SNAP SCROLL & ALIGNMENT            */}
        {/* ========================================================= */}
        <div className="block lg:hidden space-y-12">
          
          {/* Centered Mobile Narrative Block */}
          <div className="text-center space-y-4 px-2 max-w-sm mx-auto">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.24em] text-[#C5A059]">
              The Design Philosophy
            </span>
            <h3 className="text-[28px] leading-[1.2] font-serif text-[#121214]">
              Designed like a retreat, functioning for everyday ease.
            </h3>
            <p className="text-[13px] text-[#5A5D64] font-sans leading-relaxed">
              "Live Slow" dissolves the boundary between built form and nature. 
              Featuring spa-like arrival zones, private balconies, and landscaped water walks.
            </p>
          </div>

          {/* Native Horizontal Snap Scroll Gallery (Peek-a-boo UX) */}
          <div className="relative w-full -mx-4 px-4 sm:-mx-6 sm:px-6 flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-6 pt-2">
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className="relative flex-none w-[82vw] max-w-[340px] aspect-[4/5] rounded-[24px] overflow-hidden snap-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[#E8DEC8] cursor-pointer"
                onClick={() => setActiveImage(item)}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* Mobile Card Overlay Content */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white flex flex-col items-start">
                  <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#F3E2B8] block mb-1.5">
                    {item.tag}
                  </span>
                  <h4 className="font-serif text-[22px] font-normal leading-tight mb-4">
                    {item.title}
                  </h4>
                  <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-white">Tap to explore</span>
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Request Dossier CTA (Brushed Gold) */}
          <div className="flex justify-center px-4">
            <button
              onClick={() => setIsFormOpen(true)}
              className="w-full max-w-[340px] py-4 px-6 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7B35] hover:brightness-105 text-[#121214] font-bold text-[11px] tracking-[0.18em] uppercase shadow-[0_6px_20px_rgba(197,160,89,0.3)] flex items-center justify-center gap-2 active:scale-95 transition-all border border-[#F3E2B8]/40"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 text-[#121214]" />
            </button>
          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* 1. IMAGE LIGHTBOX MODAL (Interactive Detail View)        */}
      {/* ========================================================= */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl bg-[#FDFBF7] rounded-[24px] overflow-hidden shadow-2xl border border-[#E8DEC8]"
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#121214]/80 backdrop-blur-md text-white hover:bg-[#121214] transition-colors shadow-lg border border-white/10"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row h-full max-h-[85vh]">
                {/* Image Section */}
                <div className="relative w-full md:w-3/5 h-[40vh] md:h-[65vh] bg-[#121214]">
                  <Image
                    src={activeImage.src}
                    alt={activeImage.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info Section */}
                <div className="w-full md:w-2/5 p-6 md:p-8 lg:p-10 bg-[#FDFBF7] flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#E8DEC8] overflow-y-auto">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.24em] text-[#C5A059] mb-2">
                    {activeImage.tag}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-serif text-[#121214] font-normal leading-tight">
                    {activeImage.title}
                  </h3>
                  <div className="w-10 h-px bg-[#C5A059] my-5" />
                  <p className="text-sm text-[#5A5D64] font-sans leading-relaxed">
                    {activeImage.description}
                  </p>
                  
                  <button
                    onClick={() => {
                      setActiveImage(null);
                      setTimeout(() => setIsFormOpen(true), 300);
                    }}
                    className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#121214] hover:text-[#C5A059] transition-colors"
                  >
                    <span>Inquire About This Space</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* 2. LEAD CONCIERGE FORM MODAL (Global Standard Form)       */}
      {/* ========================================================= */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-[#FDFBF7] text-[#121214] rounded-[28px] p-6 sm:p-8 border border-[#E8DEC8] shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#F7F2E7] border border-[#E8DEC8] text-[#121214] hover:bg-[#E8DEC8] transition-colors"
                aria-label="Close Form"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center pb-5 border-b border-[#E8DEC8]">
                <span className="text-[10px] uppercase font-bold tracking-[0.24em] text-[#C5A059] block mb-1">
                  Confidential Portfolio
                </span>
                <h3 className="text-2xl font-serif font-normal text-[#121214]">
                  Download Full Dossier
                </h3>
                <p className="text-xs text-[#5A5D64] mt-1.5">
                  Receive site plans, amenity zone maps, and layout details directly.
                </p>
              </div>

              {errorMsg && (
                <div className="mt-4 p-3 rounded-xl bg-red-50 text-red-600 text-xs text-center border border-red-200">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 pt-5">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#5A5D64] mb-1">
                    Your Full Name <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Singhania"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E8DEC8] rounded-xl text-xs text-[#121214] focus:outline-none focus:border-[#C5A059] shadow-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#5A5D64] mb-1">
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
                      className="w-full px-4 py-3 bg-white border border-[#E8DEC8] rounded-r-xl text-xs text-[#121214] focus:outline-none focus:border-[#C5A059] shadow-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#5A5D64] mb-1">
                    Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="vikram@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#E8DEC8] rounded-xl text-xs text-[#121214] focus:outline-none focus:border-[#C5A059] shadow-sm transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7B35] hover:brightness-105 text-[#121214] font-bold text-[11px] uppercase tracking-[0.16em] shadow-[0_6px_20px_rgba(197,160,89,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer border border-[#F3E2B8]/40"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#121214]" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Download Instant Dossier</span>
                        <ArrowRight className="w-4 h-4 text-[#121214]" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 pt-2 text-[10px] text-[#5A5D64]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Direct Developer Desk • 100% Privacy Assured</span>
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