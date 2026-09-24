"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  X, 
  Loader2, 
  ShieldCheck, 
  CheckCircle2,
  FileText,
  Maximize2
} from "lucide-react";

interface SizePlan {
  size: string;
  typology: string;
  subtitle: string;
  badge?: string;
}

const availableSizes: SizePlan[] = [
  {
    size: "1,650 Sq.Ft.",
    typology: "3 BHK + 2T",
    subtitle: "Optimal Family Layout",
  },
  {
    size: "1,850+ Sq.Ft.",
    typology: "3 BHK + 3T",
    subtitle: "Expansive Master Suites",
    badge: "Most Preferred",
  },
  {
    size: "2,250+ Sq.Ft.",
    typology: "3 BHK + Servant",
    subtitle: "Luxury Grand Residences",
    badge: "Exclusive",
  },
];

export default function Price() {
  const router = useRouter();

  // Modal form states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("All Typologies");
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleOpenModal = (planName?: string) => {
    if (planName) setSelectedPlan(planName);
    setIsFormOpen(true);
  };

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
          selectedTypology: selectedPlan,
          source: `Price Section Inquiry - ${selectedPlan} (11459 BSP / 1.89 Cr Starting)`,
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
      id="price" 
      className="relative w-full py-24 lg:py-32 flex flex-col justify-center overflow-hidden bg-[#FDFBF7] text-[#121214] border-b border-[#E8DEC8]/80"
    >
      {/* ========================================================= */}
      {/* 1. LIGHT LUXURY PROCEDURAL AMBIENT GLOWS                  */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-[#C5A059]/[0.05] rounded-full blur-[150px]" />
        <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#E31826]/[0.02] rounded-full blur-[150px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E8DEC8] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E8DEC8] to-transparent" />
      </div>

      {/* ========================================================= */}
      {/* 2. FOREGROUND CONTENT CONTAINER                           */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-3.5 mb-12 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7F2E7] border border-[#E8DEC8] shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.26em] text-[#C5A059]">
              Exclusive Investment Portfolio
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#121214] font-normal tracking-tight leading-[1.14]"
          >
            Priced for Prestige, <br />
            <span className="italic font-serif text-[#C5A059]">Crafted for Perfection</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-xs sm:text-sm font-sans text-[#5A5D64] font-light max-w-lg mx-auto leading-relaxed"
          >
            Fully furnished luxury residences equipped with expansive glass facades, 11.25-ft ceiling heights, and low-density planning.
          </motion.p>

          <div className="w-12 h-[1.5px] bg-[#C5A059] mx-auto mt-2 rounded-full" />
        </div>

        {/* 3 Metric Cards: BSP, Starting Price, Furnishing */}
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          
          {/* BSP Card */}
          <div className="flex flex-col items-center justify-center p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DEC8] shadow-[0_10px_30px_rgba(0,0,0,0.03)] text-center hover:border-[#C5A059] transition-all">
            <span className="text-[10.5px] font-sans uppercase font-bold tracking-[0.22em] text-[#C5A059] mb-1.5">
              Base Selling Price (BSP)
            </span>
            <span className="font-serif text-2xl sm:text-3xl text-[#121214] font-normal">
              ₹ 11,459 <span className="text-xs font-sans text-[#5A5D64]">/ Sq.Ft.</span>
            </span>
            <span className="text-[11px] font-sans text-[#5A5D64] mt-1">Exclusive of government taxes</span>
          </div>

          {/* Starting Price Card */}
          <div className="flex flex-col items-center justify-center p-6 sm:p-7 rounded-2xl bg-white border-2 border-[#C5A059] shadow-[0_15px_35px_rgba(197,160,89,0.12)] text-center relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
            <span className="text-[10.5px] font-sans uppercase font-bold tracking-[0.22em] text-[#C5A059] mb-1.5">
              Starting Investment
            </span>
            <span className="font-serif text-3xl sm:text-4xl text-[#121214] font-bold">
              ₹ 1.89 Cr*
            </span>
            <span className="text-[11px] font-sans text-[#5A5D64] mt-1">Limited pre-launch release</span>
          </div>

          {/* Furnishing Spec Card */}
          <div className="flex flex-col items-center justify-center p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DEC8] shadow-[0_10px_30px_rgba(0,0,0,0.03)] text-center hover:border-[#C5A059] transition-all">
            <span className="text-[10.5px] font-sans uppercase font-bold tracking-[0.22em] text-[#C5A059] mb-1.5">
              Residence Specification
            </span>
            <span className="font-serif text-xl sm:text-2xl text-[#121214] font-normal flex items-center gap-1.5">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059]" /> Fully Furnished
            </span>
            <span className="text-[11px] font-sans text-[#5A5D64] mt-1">Move-in ready designer interiors</span>
          </div>

        </div>

        {/* ========================================================= */}
        {/* RESIDENCE SIZES & TYPOLOGIES STRIP                        */}
        {/* ========================================================= */}
        <div className="w-full max-w-4xl mb-12">
          <div className="text-center mb-5">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.24em] text-[#C5A059]">
              Available Configurations
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {availableSizes.map((item) => (
              <div
                key={item.typology}
                onClick={() => handleOpenModal(`${item.size} - ${item.typology}`)}
                className="group relative p-6 rounded-2xl bg-white hover:bg-[#FAF9F5] border border-[#E8DEC8] hover:border-[#C5A059] cursor-pointer transition-all duration-300 shadow-sm hover:shadow-lg text-center flex flex-col justify-between"
              >
                {item.badge && (
                  <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full bg-[#121214] text-[#FDFBF7] font-sans font-bold text-[9px] uppercase tracking-wider shadow-sm">
                    {item.badge}
                  </span>
                )}

                <div>
                  <span className="text-xs font-sans text-[#5A5D64] uppercase tracking-widest block mb-1">
                    Super Area
                  </span>
                  <div className="font-serif text-2xl text-[#121214] font-semibold mb-1">
                    {item.size}
                  </div>
                  <h3 className="font-serif text-lg text-[#C5A059] font-medium">
                    {item.typology}
                  </h3>
                  <span className="text-[11px] font-sans text-[#5A5D64] mt-1 block">
                    {item.subtitle}
                  </span>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E8DEC8]/60 flex items-center justify-center gap-1.5 text-[10.5px] font-sans font-semibold uppercase tracking-wider text-[#121214] group-hover:text-[#C5A059] transition-colors">
                  <span>Inquire Layout</span>
                  <Maximize2 className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Central Action Console */}
        <div className="w-full max-w-xl flex flex-col items-center text-center space-y-4">
          <button
            type="button"
            onClick={() => handleOpenModal("General Cost Breakdown")}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7B35] hover:brightness-105 text-[#121214] font-sans font-bold text-xs tracking-[0.18em] uppercase transition-all duration-300 shadow-[0_8px_25px_rgba(197,160,89,0.3)] hover:shadow-[0_12px_30px_rgba(197,160,89,0.45)] hover:-translate-y-0.5 border border-[#F3E2B8]/40 cursor-pointer active:scale-95"
          >
            <FileText className="w-4 h-4 text-[#121214]" />
            <span>Request Complete Cost Breakdown Sheet</span>
            <ArrowRight className="w-4 h-4 text-[#121214] transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <span className="text-[11px] font-sans text-[#5A5D64]">
            Instant confidential delivery • Direct developer rates • Zero brokerage
          </span>
        </div>

      </div>

      {/* ========================================================= */}
      {/* 3. MODAL CONCIERGE LEAD FORM (Connected to /api/contact)   */}
      {/* ========================================================= */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm">
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
                  Request Cost Sheet & Payment Plan
                </h3>
                <p className="text-xs text-[#5A5D64] mt-1">
                  Typology: <span className="font-semibold text-[#121214]">{selectedPlan}</span> • Starting at ₹ 1.89 Cr* (₹ 11,459 BSP)
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
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Get Instant Cost Breakdown</span>
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

    </section>
  );
}