"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Loader2 } from "lucide-react";
import { heroPropertiesData } from "@/app/data/data";

const banners = [
  {
    src: "/banner1.png",
    subtitle: "Elevated Living Engineered by Hero Homes",
    title: "Hero Homes Residences",
  },
  {
    src: "/banner2.png",
    subtitle: "Expansive Gated Township & Green Spaces",
    title: "Natural Living & Wellness",
  },
  {
    src: "/banner3.png",
    subtitle: "Iconic High-Rise Towers",
    title: "Privacy & Elegance",
  },
];

export default function Hero() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Form states
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Cycle banners cinematically every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          unitType: "Hero Homes - 3 & 4 BHK",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry. Please try again.");
      }

      router.push("/thank-you");
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Please call us directly.");
      setLoading(false);
    }
  };

  const whatsappNumber = heroPropertiesData?.contactInfo?.whatsappNumber || "919910374156";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    heroPropertiesData?.contactInfo?.whatsappMessage || "Hi, I would like to request the e-brochure and pricing for Hero Homes."
  )}`;

  return (
    <section className="relative min-h-screen bg-[#121214] text-[#FDFBF7] flex flex-col justify-start lg:justify-between overflow-hidden">
      
      {/* ================= MOBILE VIEW: Full Banner First ================= */}
      <div className="block lg:hidden w-full h-[48vh] sm:h-[54vh] relative overflow-hidden shrink-0">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
            }`}
          >
            <Image
              src={banner.src}
              alt={banner.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            {/* Darker mobile gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-black/40 to-black/60" />
          </div>
        ))}

        {/* Slide Indicators on Mobile Banner */}
        <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-1.5">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "w-7 bg-[#C5A059]" : "w-2 bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ================= DESKTOP BACKGROUND CINEMATIC SLIDESHOW ================= */}
      <div className="hidden lg:block absolute inset-0 z-0 overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out transform transition-transform duration-[6000ms] ${
              index === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          >
            <Image
              src={banner.src}
              alt={banner.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
        {/* Darker overlays for rich contrast behind cards */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121214]/90 via-[#121214]/65 to-[#121214]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/80 via-transparent to-black/50" />
      </div>

      {/* Ambient luxury gold glow */}
      <div className="absolute top-1/4 left-8 w-[450px] h-[450px] bg-[#C5A059]/[0.08] rounded-full blur-[140px] pointer-events-none" />

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        
        {/* LEFT COLUMN: Narrative & Highlights */}
        <div className="lg:col-span-7 text-center lg:text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-[#C5A059]/60 backdrop-blur-md mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#F3E2B8] font-bold">
              Hero Homes
            </span>
          </div>

          {/* Dynamic Subtitle & Title */}
          <div className="min-h-[75px] sm:min-h-[95px] mb-3">
            <span className="text-xs sm:text-sm uppercase tracking-[0.26em] text-[#C5A059] font-semibold block mb-1">
              {banners[currentSlide].subtitle}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight drop-shadow-sm">
              {banners[currentSlide].title}
            </h1>
          </div>

          <p className="text-gray-200 text-xs sm:text-base lg:text-lg mb-6 leading-relaxed max-w-2xl font-light mx-auto lg:mx-0 drop-shadow-sm">
            Ultra-Luxury 3 BHK Smart Green Residences set within an expansive gated township. 
            Featuring Fully Furnished Homes, world-class architecture, and sustainable luxury planning. 
            Starting Price <strong className="text-[#F3E2B8] font-semibold">₹1.89 Cr* Onwards</strong>.
          </p>

          {/* 3 Key Highlights Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 mb-8">
            <div className="flex items-center justify-center sm:justify-start gap-2.5 p-3 rounded-2xl bg-white/95 border border-[#E8DEC8] hover:border-[#C5A059] shadow-md transition-all">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span className="text-xs font-semibold text-[#121214]">Fully Furnished Homes</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2.5 p-3 rounded-2xl bg-white/95 border border-[#E8DEC8] hover:border-[#C5A059] shadow-md transition-all">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span className="text-xs font-semibold text-[#121214]">Smart Green Living</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2.5 p-3 rounded-2xl bg-white/95 border border-[#E8DEC8] hover:border-[#C5A059] shadow-md transition-all">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span className="text-xs font-semibold text-[#121214]">Expansive Township</span>
            </div>
          </div>

          {/* Desktop Slide Indicators */}
          <div className="hidden lg:flex items-center gap-2.5">
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className="group py-2 focus:outline-none"
                aria-label={`Slide ${idx + 1}`}
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? "w-10 bg-[#C5A059]" : "w-3 bg-white/40 group-hover:bg-white/70"
                  }`}
                />
              </button>
            ))}
          </div>

        </div>

        {/* RIGHT COLUMN: Elevated Ivory & Gold Lead Form */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-[#FDFBF7] text-[#121214] border-2 border-[#C5A059]/40 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.45)] relative overflow-hidden">
            
            {/* Top decorative gold highlight bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

            <div className="text-center mb-5">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block mb-1">
                Exclusive Invitation
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#121214] tracking-tight">
                Request E-Brochure & Pricing
              </h3>
              <p className="text-[#5A5D64] text-xs sm:text-[13px] mt-1">
                Connect with our senior real estate advisors instantly.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-[#E31826] text-xs text-center">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-bold text-[#5A5D64] mb-1 uppercase tracking-wider text-left">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-[#E8DEC8] rounded-xl text-[#121214] placeholder-[#5A5D64]/50 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] transition-all shadow-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#5A5D64] mb-1 uppercase tracking-wider text-left">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-[#E8DEC8] rounded-xl text-[#121214] placeholder-[#5A5D64]/50 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] transition-all shadow-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#5A5D64] mb-1 uppercase tracking-wider text-left">
                  Phone Number (with Country Code)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 99103 74156"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-[#E8DEC8] rounded-xl text-[#121214] placeholder-[#5A5D64]/50 text-xs sm:text-sm focus:outline-none focus:border-[#C5A059] transition-all shadow-sm"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2.5">
                {/* Brushed Metallic Gold CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full overflow-hidden py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7B35] hover:brightness-105 text-[#121214] font-bold text-xs tracking-[0.14em] uppercase transition-all duration-300 shadow-[0_6px_20px_rgba(197,160,89,0.35)] hover:shadow-[0_8px_25px_rgba(197,160,89,0.5)] flex items-center justify-center gap-2 cursor-pointer border border-[#F3E2B8]/40 disabled:opacity-70"
                >
                  <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                  
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#121214]" />
                      <span>Processing Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Instant Master Plan</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#121214]" />
                    </>
                  )}
                </button>

                {/* Direct WhatsApp Pill */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs tracking-wide shadow-sm flex items-center justify-center gap-2 transition-all"
                >
                  <div className="relative w-4 h-4 shrink-0">
                    <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
                  </div>
                  <span>Instant Connect on WhatsApp</span>
                </a>
              </div>
            </form>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#5A5D64] text-center">
              <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>100% Privacy Guaranteed. Direct Developer Desk.</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}