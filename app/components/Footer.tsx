"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";
import { heroPropertiesData } from "@/app/data/data";

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
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

  const phoneNumber = heroPropertiesData?.contactInfo?.phone || "+91 99103 74156";
  const whatsappNumber = heroPropertiesData?.contactInfo?.whatsappNumber || "919910374156";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    heroPropertiesData?.contactInfo?.whatsappMessage || "Hi, I would like to inquire about Hero Homes Greater Noida."
  )}`;

  const menuLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Highlights", href: "#highlights" },
    { label: "Amenities", href: "#amenities" },
    { label: "Price & Plans", href: "#price" },
    { label: "Location Map", href: "#location" },
  ];

  const legalLinks = [
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <footer className="relative bg-[#121214] text-[#FDFBF7] pt-20 pb-10 border-t border-[#E8DEC8]/15 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#C5A059]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* TOP GRID: BRAND, NAVIGATION, COMPLIANCE & CONTACT         */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-14 border-b border-white/10">
          
          {/* Brand Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 select-none"
              aria-label="Hero Homes Home"
            >
              <div className="relative h-11 w-11 rounded-xl bg-white p-1 border border-[#E8DEC8] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[#C5A059]">
                <Image
                  src="/logo.png"
                  alt="Hero Homes Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-[#E31826] transition-colors duration-300">
                    Hero
                  </span>
                  <span className="font-serif text-xl font-medium tracking-tight text-[#C5A059]">
                    Homes
                  </span>
                </div>
                <span className="text-[9px] font-sans font-semibold tracking-[0.24em] text-gray-400 uppercase mt-1">
                  A Hero Enterprise
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-[13px] font-sans text-gray-300/80 font-light leading-relaxed max-w-sm">
              Curated fully furnished luxury residences set within Greater Noida, UP. Engineered with 11.25-ft ceiling heights, expansive wraparound balconies, and 85% open botanical landscapes moments from Noida International Airport.
            </p>

            <div className="flex items-center gap-2 pt-1 text-[11px] font-sans text-[#F3E2B8]/90">
              <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>Verified Direct Developer Desk • Zero Brokerage</span>
            </div>
          </div>

          {/* Navigation Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.22em] text-[#C5A059] block">
              Navigation
            </span>
            <ul className="space-y-2.5">
              {menuLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="group inline-flex items-center gap-1.5 text-xs font-sans text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.22em] text-[#C5A059] block">
              Compliance
            </span>
            <ul className="space-y-2.5">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-xs font-sans text-gray-300 hover:text-[#C5A059] transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Concierge Contact Column (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.22em] text-[#C5A059] block">
              Concierge Contact
            </span>
            
            <div className="space-y-3">
              {/* Direct Dial Call Pill */}
              <a
                href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                className="group flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A059] transition-all duration-300"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#1A1A1E] flex items-center justify-center text-[#E31826]">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-sans uppercase tracking-wider text-gray-400">
                      Direct Desk
                    </span>
                    <span className="text-xs font-semibold text-white group-hover:text-[#F3E2B8] transition-colors">
                      {phoneNumber}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Instant WhatsApp Pill */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] transition-all duration-300"
              >
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 shrink-0">
                    <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-sans uppercase tracking-wider text-emerald-400">
                      Instant Messaging
                    </span>
                    <span className="text-xs font-semibold text-white">
                      Chat on WhatsApp
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <span className="text-[11px] font-sans text-gray-400 block pt-1">
              Site Location: Greater Noida, Uttar Pradesh (Near Jewar Airport Corridor)
            </span>
          </div>

        </div>

        {/* ========================================================= */}
        {/* STATUTORY REAL ESTATE DISCLAIMER                         */}
        {/* ========================================================= */}
        <div className="py-6 border-b border-white/10 space-y-2 text-center sm:text-left">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#C5A059] block">
            Official Real Estate Disclaimer
          </span>
          <p className="text-[11px] font-sans text-gray-400 leading-relaxed font-light">
            Disclaimer: This website is an authorized channel partner portal operated for project showcasing and sales coordination of Hero Homes residences in Greater Noida, UP. All architectural visualizations, elevations, landscape plans, and unit configurations are artistic representations. Registered under UP RERA guidelines. All transactions are governed strictly by the formal Builder-Buyer Agreement.
          </p>
        </div>

        {/* ========================================================= */}
        {/* COPYRIGHT & MARGAUX TECH ATTRIBUTION BAR                  */}
        {/* ========================================================= */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-gray-400">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Hero Homes. All rights reserved.</p>
            <span className="hidden sm:inline text-gray-600">•</span>
            <p className="text-[11px] text-[#C5A059] font-medium tracking-wide">
              Designed & Managed by Margaux Tech
            </p>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}