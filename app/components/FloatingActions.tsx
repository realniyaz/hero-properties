"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, X, Loader2, ShieldCheck, ArrowRight } from "lucide-react";
import { heroPropertiesData } from "@/app/data/data";

export default function FloatingActions() {
  const router = useRouter();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const phoneNumber = heroPropertiesData?.contactInfo?.phone || "+91 99103 74156";
  const whatsappNumber = heroPropertiesData?.contactInfo?.whatsappNumber || "919910374156";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    heroPropertiesData?.contactInfo?.whatsappMessage || "Hi, I would like to inquire about Hero Properties Greater Noida."
  )}`;

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
          source: "Floating Action Enquire Form",
        }),
      });

      if (res.ok) {
        setIsFormOpen(false);
        router.push("/thank-you");
      } else {
        throw new Error("Submission failed. Please try again.");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Network error. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ========================================================= */}
      {/* 1. DESKTOP: VERTICAL ALIGNED BOTTOM RIGHT CORNER          */}
      {/* ========================================================= */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-40 flex-col items-end gap-3 pointer-events-auto">
        
        {/* Call Button */}
        <motion.a
          whileHover={{ scale: 1.05, x: -4 }}
          whileTap={{ scale: 0.95 }}
          href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
          className="group relative flex items-center justify-end p-3 rounded-full bg-[#FDFBF7] border border-[#C5A059]/60 shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:border-[#C5A059] transition-all duration-300"
          title="Direct Phone Call"
        >
          <div className="absolute right-14 pr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
            <span className="px-3 py-1.5 rounded-full bg-[#121214] text-white text-[11px] font-sans font-semibold tracking-wider uppercase whitespace-nowrap shadow-md border border-[#E8DEC8]/20">
              Call {phoneNumber}
            </span>
          </div>
          <div className="w-9 h-9 rounded-full bg-[#F7F2E7] flex items-center justify-center text-[#E31826] group-hover:bg-[#E31826] group-hover:text-white transition-colors duration-300">
            <Phone className="w-4 h-4" />
          </div>
        </motion.a>

        {/* Enquire Form Button */}
        <motion.button
          whileHover={{ scale: 1.05, x: -4 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={() => setIsFormOpen(true)}
          className="group relative flex items-center justify-end p-3 rounded-full bg-[#FDFBF7] border border-[#C5A059]/60 shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:border-[#C5A059] transition-all duration-300 cursor-pointer"
          title="Enquire with Concierge"
        >
          <div className="absolute right-14 pr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
            <span className="px-3 py-1.5 rounded-full bg-[#121214] text-white text-[11px] font-sans font-semibold tracking-wider uppercase whitespace-nowrap shadow-md border border-[#E8DEC8]/20">
              Enquire Now
            </span>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7B35] flex items-center justify-center text-[#121214] shadow-sm">
            <Mail className="w-4 h-4 text-[#121214]" />
          </div>
        </motion.button>

        {/* WhatsApp Button */}
        <motion.a
          whileHover={{ scale: 1.05, x: -4 }}
          whileTap={{ scale: 0.95 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-end p-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[0_8px_25px_rgba(37,211,102,0.35)] transition-all duration-300"
          title="Chat on WhatsApp"
        >
          <div className="absolute right-14 pr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
            <span className="px-3 py-1.5 rounded-full bg-[#121214] text-white text-[11px] font-sans font-semibold tracking-wider uppercase whitespace-nowrap shadow-md border border-[#E8DEC8]/20">
              Instant WhatsApp
            </span>
          </div>
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="relative w-5 h-5">
              <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
            </div>
          </div>
        </motion.a>

      </div>

      {/* ========================================================= */}
      {/* 2. MOBILE: STICKY AT BOTTOM BAR                           */}
      {/* ========================================================= */}
      <div className="block lg:hidden fixed inset-x-0 bottom-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-xl border-t border-[#E8DEC8] px-3 py-2.5 shadow-[0_-6px_25px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          
          {/* Call CTA */}
          <a
            href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
            className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white border border-[#E8DEC8] text-[#121214] font-semibold text-xs active:scale-95 transition-transform shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-[#E31826]" />
            <span>Call</span>
          </a>

          {/* Enquire Form CTA */}
          <button
            type="button"
            onClick={() => setIsFormOpen(true)}
            className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7B35] text-[#121214] font-bold text-xs uppercase tracking-wider active:scale-95 transition-transform shadow-sm border border-[#F3E2B8]/40"
          >
            <Mail className="w-3.5 h-3.5 text-[#121214]" />
            <span>Enquire</span>
          </button>

          {/* WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs active:scale-95 transition-transform shadow-sm"
          >
            <div className="relative w-3.5 h-3.5 shrink-0">
              <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
            </div>
            <span>WhatsApp</span>
          </a>

        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. ENQUIRE CONCIERGE MODAL POPUP                          */}
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
                  Official Developer Desk
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#121214]">
                  Private Inquiry Form
                </h3>
                <p className="text-xs text-[#5A5D64] mt-1 font-sans">
                  Get instant pricing details, floor plans, and priority callback.
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
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Instant Callback</span>
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
    </>
  );
}