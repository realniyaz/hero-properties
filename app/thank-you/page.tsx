"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  CheckCircle2, 
  Phone, 
  Mail, 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  FileText, 
  CalendarCheck,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { heroPropertiesData } from "@/app/data/data";

export default function ThankYouPage() {
  const phoneNumber = heroPropertiesData?.contactInfo?.phone || "+91 99103 74156";
  const salesEmail = heroPropertiesData?.contactInfo?.salesDeskEmail || "concierge@heroproperties.in";
  const whatsappNumber = heroPropertiesData?.contactInfo?.whatsappNumber || "919910374156";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi! 👋 I just registered on the Hero Properties portal. Please share the floor plans, payment plan options, and confirm my priority visit."
  )}`;

  return (
    <main className="min-h-[100svh] bg-[#FDFBF7] text-[#121214] flex flex-col items-center justify-center px-4 sm:px-6 py-12 relative overflow-hidden">
      
      {/* Subtle Luxury Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#E31826]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Main Luxury Modal Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl w-full bg-[#FFFFFF] border border-[#E8DEC8] rounded-[28px] sm:rounded-[36px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-6 sm:p-10 md:p-12 text-center relative z-10"
      >
        {/* Top Gold Hairline Highlight Ribbon */}
        <div className="absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

        {/* Animated Check Emblem */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 20 }}
          className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-[#F7F2E7] border border-[#C5A059]/50 rounded-full flex items-center justify-center mb-5 shadow-sm"
        >
          <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#C5A059]" />
        </motion.div>

        {/* Pre-title Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7F2E7] border border-[#E8DEC8] mb-3">
          <Sparkles className="w-3 h-3 text-[#C5A059]" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#C5A059] font-bold">
            Priority Access Confirmed
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#121214] font-normal tracking-tight mb-3">
          Thank You For Registering
        </h1>

        <p className="text-[#5A5D64] text-xs sm:text-sm font-sans leading-relaxed max-w-lg mx-auto mb-8 font-light">
          Your expression of interest has been registered with the developer concierge desk. A senior residential advisor has been assigned to provide you with confidential pricing, floor plans, and priority viewing allotments.
        </p>

        {/* Next Steps Concierge Progress Tracker */}
        <div className="bg-[#FDFBF7] border border-[#E8DEC8] rounded-2xl p-4 sm:p-5 mb-8 text-left">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#C5A059] block mb-3">
            What Happens Next
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white border border-[#E8DEC8] flex items-center justify-center text-[#C5A059] shrink-0 shadow-sm mt-0.5">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#121214] block">1. Confirmation</span>
                <span className="text-[11px] text-[#5A5D64] leading-tight block">Instant details dispatched via SMS & WhatsApp</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white border border-[#E8DEC8] flex items-center justify-center text-[#C5A059] shrink-0 shadow-sm mt-0.5">
                <FileText className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#121214] block">2. Dossier Delivery</span>
                <span className="text-[11px] text-[#5A5D64] leading-tight block">Comprehensive pricing & floor plan catalog</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white border border-[#E8DEC8] flex items-center justify-center text-[#C5A059] shrink-0 shadow-sm mt-0.5">
                <CalendarCheck className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#121214] block">3. VIP Site Tour</span>
                <span className="text-[11px] text-[#5A5D64] leading-tight block">Coordinated private visit with senior manager</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Info Desk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
          <a
            href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
            className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-[#E8DEC8] hover:border-[#C5A059] transition-all group shadow-sm"
          >
            <div className="w-9 h-9 rounded-lg bg-[#F7F2E7] flex items-center justify-center text-[#E31826] group-hover:scale-105 transition-transform shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[9.5px] text-[#5A5D64] block font-semibold uppercase tracking-wider">
                Direct Priority Desk
              </span>
              <span className="text-xs font-bold text-[#121214] group-hover:text-[#E31826] transition-colors truncate block">
                {phoneNumber}
              </span>
            </div>
          </a>

          <a
            href={`mailto:${salesEmail}`}
            className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-[#E8DEC8] hover:border-[#C5A059] transition-all group shadow-sm"
          >
            <div className="w-9 h-9 rounded-lg bg-[#F7F2E7] flex items-center justify-center text-[#C5A059] group-hover:scale-105 transition-transform shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[9.5px] text-[#5A5D64] block font-semibold uppercase tracking-wider">
                Concierge Desk
              </span>
              <span className="text-xs font-bold text-[#121214] truncate block">
                {salesEmail}
              </span>
            </div>
          </a>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <div className="relative w-4 h-4 shrink-0">
              <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
            </div>
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7B35] hover:brightness-105 text-[#121214] font-sans font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 border border-[#F3E2B8]/40"
          >
            <Phone className="w-4 h-4 text-[#121214]" />
            <span>Speak With Advisor</span>
          </a>
        </div>

        {/* Return Link */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#5A5D64] hover:text-[#121214] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#C5A059]" />
            <span>Return to Project Presentation</span>
          </Link>
        </div>

        {/* RERA Assurance */}
        <div className="mt-8 pt-4 border-t border-[#E8DEC8] flex items-center justify-center gap-2 text-[10px] text-[#5A5D64]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
          <span>Official Authorized Representative Desk • UP RERA Compliant</span>
        </div>
      </motion.div>
    </main>
  );
}