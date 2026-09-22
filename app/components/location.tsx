"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  MapPin, 
  Plane, 
  Car, 
  Train, 
  Building, 
  ShieldCheck, 
  ArrowRight, 
  X, 
  Loader2, 
  CheckCircle2,
  Navigation
} from "lucide-react";

interface ProximityPoint {
  title: string;
  time: string;
  distance: string;
  icon: React.ElementType;
}

const keyProximities: ProximityPoint[] = [
  {
    title: "Noida International Airport (Jewar)",
    time: "20 Mins",
    distance: "Direct Expressway Arterial",
    icon: Plane,
  },
  {
    title: "Yamuna & Eastern Peripheral Expressway",
    time: "05 Mins",
    distance: "Seamless Intercity Corridor",
    icon: Car,
  },
  {
    title: "Upcoming Metro & Transit Hub",
    time: "08 Mins",
    distance: "Connecting Delhi & Noida Core",
    icon: Train,
  },
  {
    title: "Pari Chowk & Commercial Hubs",
    time: "15 Mins",
    distance: "Schools, Hospitals & Retail",
    icon: Building,
  },
];

export default function Location() {
  const router = useRouter();

  // Modal form states
  const [isFormOpen, setIsFormOpen] = useState(false);
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
          source: "Location Section - Site Visit & Directions Request",
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
      id="location" 
      className="relative w-full bg-[#FDFBF7] text-[#121214] py-24 lg:py-32 overflow-hidden border-b border-[#E8DEC8]/80"
    >
      {/* Ambient background glows */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-[#C5A059]/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-[#E31826]/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* 1. SECTION EDITORIAL HEADER                               */}
        {/* ========================================================= */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7F2E7] border border-[#E8DEC8] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.26em] text-[#C5A059]">
              Strategic Location Advantage
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#121214] font-normal tracking-tight max-w-3xl leading-[1.12]">
            Connected to the Capital, <br className="hidden sm:inline" />
            <span className="italic font-serif text-[#C5A059]">Gateway to the World</span>
          </h2>

          <p className="text-xs sm:text-sm font-sans text-[#5A5D64] font-light max-w-xl mt-3 leading-relaxed">
            Positioned in the growth corridor of Greater Noida, UP — just minutes away from the upcoming 
            Noida International Airport, with fully furnished luxury residences ready for discerning homeowners.
          </p>

          <div className="w-12 h-[1.5px] bg-[#C5A059] mx-auto mt-4 rounded-full" />
        </div>

        {/* ========================================================= */}
        {/* 2. MAIN GRID: PROXIMITY CARDS (LEFT) + MAP (RIGHT)        */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14">
          
          {/* Left Column: Proximity Metrics & Features */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Value Proposition Strip */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F2E7] border border-[#E8DEC8] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#C5A059] shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-serif font-bold text-[#121214] block">
                    100% Fully Furnished Homes
                  </span>
                  <span className="text-[11px] font-sans text-[#5A5D64]">
                    Designer modular fittings, woodwork & imported marble
                  </span>
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white text-[10px] font-sans font-bold text-[#C5A059] uppercase tracking-wider border border-[#E8DEC8]">
                Ready Design
              </span>
            </div>

            {/* Proximity Points List */}
            <div className="space-y-3.5">
              {keyProximities.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="p-4 sm:p-4.5 rounded-2xl bg-white border border-[#E8DEC8] shadow-sm hover:border-[#C5A059] hover:shadow-md transition-all flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#F7F2E7] flex items-center justify-center text-[#121214] shrink-0">
                        <IconComponent className="w-4 h-4 text-[#C5A059]" />
                      </div>
                      <div>
                        <h4 className="font-serif text-sm sm:text-base font-semibold text-[#121214] leading-tight">
                          {item.title}
                        </h4>
                        <span className="text-[11px] font-sans text-[#5A5D64] mt-0.5 block">
                          {item.distance}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-serif text-base sm:text-lg font-bold text-[#C5A059] block">
                        {item.time}
                      </span>
                      <span className="text-[9px] font-sans uppercase tracking-wider text-[#5A5D64]">
                        Drive Time
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Location CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => setIsFormOpen(true)}
                className="w-full sm:w-auto flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7B35] hover:brightness-105 text-[#121214] font-sans font-bold text-xs tracking-[0.16em] uppercase shadow-[0_6px_20px_rgba(197,160,89,0.3)] transition-all flex items-center justify-center gap-2 border border-[#F3E2B8]/40 cursor-pointer active:scale-95"
              >
                <span>Book Guided Site Visit</span>
                <ArrowRight className="w-4 h-4 text-[#121214]" />
              </button>

              <a
                href="https://maps.google.com/?q=Greater+Noida,+Uttar+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#F7F2E7] hover:bg-white text-[#121214] border border-[#E8DEC8] font-sans font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Open in Maps</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed with Luxury Gold Frame */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#E8DEC8] bg-[#121214] shadow-xl aspect-[4/3] sm:aspect-[16/11]">
              
              {/* Google Maps iFrame for Greater Noida, UP */}
              <iframe
                title="Hero Properties Location - Greater Noida, UP"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112328.72990666065!2d77.42084534720963!3d28.474387864003254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea64b8f89aef%3A0x678b16f6b057b71!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Location Overlay Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E8DEC8] shadow-md">
                <MapPin className="w-3.5 h-3.5 text-[#E31826]" />
                <span className="text-[11px] font-sans font-bold text-[#121214] tracking-wide">
                  Greater Noida, Uttar Pradesh
                </span>
              </div>

              {/* Floating Proximity Anchor */}
              <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#121214]/90 backdrop-blur-md border border-[#C5A059]/40 text-white shadow-lg">
                <Plane className="w-4 h-4 text-[#C5A059]" />
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-[#F3E2B8]">
                    Airport Corridor
                  </span>
                  <span className="text-[11px] font-sans text-white/90">
                    Noida Int'l Airport (Jewar) • 20 Mins
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* 3. SITE VISIT & LOCATION DOSSIER MODAL                     */}
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
                  Private Site Inspection
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#121214]">
                  Schedule Site Tour
                </h3>
                <p className="text-xs text-[#5A5D64] mt-1">
                  Greater Noida, UP • Near Noida International Airport
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
                    placeholder="e.g. Vikram Singhania"
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
                    placeholder="vikram@domain.com"
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
                        <span>Confirming Visit...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Coordinated Site Visit</span>
                        <ArrowRight className="w-4 h-4 text-[#121214]" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 pt-1 text-[10.5px] text-[#5A5D64]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Complimentary Private Chauffeur Assistance Available</span>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}