"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { heroPropertiesData } from "@/app/data/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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

  const whatsappNumber = heroPropertiesData?.contactInfo?.whatsappNumber || "919910374156";
  const whatsappMessage =
    heroPropertiesData?.contactInfo?.whatsappMessage ||
    "Hello, I would like more information on Hero Properties.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const phoneNumber = heroPropertiesData?.contactInfo?.phone || "+91 99103 74156";

  // Reference-styled navigation items (clean uppercase)
  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "OVERVIEW", href: "#overview" },
    { label: "HIGHLIGHTS", href: "#highlights" },
    { label: "AMENITIES", href: "#amenities" },
    { label: "PRICE", href: "#price" },
    { label: "LOCATION", href: "#location" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7] transition-all duration-300 ${
          isScrolled
            ? "py-2.5 border-b border-[#E8DEC8] shadow-[0_6px_25px_-8px_rgba(197,160,89,0.12)]"
            : "py-3.5 sm:py-4 border-b border-[#E8DEC8]/80"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between gap-4">
            
            {/* ========================================================= */}
            {/* 1. LEFT: LOGO WITH HERO PROPERTIES TEXT LOCKUP            */}
            {/* ========================================================= */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="group flex items-center gap-3 select-none"
                aria-label="Hero Properties Home"
              >
                <div className="relative h-10 w-10 sm:h-11 sm:w-11 rounded-lg bg-[#F7F2E7] p-1 border border-[#E8DEC8] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[#C5A059]">
                  <Image
                    src="/logo.png"
                    alt="Hero Homes"
                    fill
                    priority
                    className="object-contain p-0.5 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 leading-none">
                    <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#121214] group-hover:text-[#E31826] transition-colors duration-300">
                      Hero
                    </span>
                    <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#C5A059]">
                      Properties
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* ========================================================= */}
            {/* 2. CENTER: EDITORIAL SANS-SERIF CAPS NAVIGATION (Desktop) */}
            {/* ========================================================= */}
            <nav className="hidden xl:flex items-center justify-center gap-7 2xl:gap-9">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="group relative py-1 text-[11.5px] font-sans font-semibold tracking-[0.14em] text-[#121214]/80 hover:text-[#E31826] transition-colors duration-200"
                >
                  <span>{item.label}</span>
                  {/* Subtle luxury underline accent */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#C5A059] rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* ========================================================= */}
            {/* 3. RIGHT: PILL CALL & WHATSAPP BUTTONS (Exact Reference)  */}
            {/* ========================================================= */}
            <div className="hidden lg:flex items-center justify-end gap-3 flex-shrink-0">
              
              {/* Reference Style Call Pill */}
              <motion.a
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/70 hover:bg-white border border-[#C5A059]/70 hover:border-[#C5A059] transition-all duration-200 shadow-sm"
              >
                <div className="w-5 h-5 rounded-full bg-[#F7F2E7] flex items-center justify-center text-[#121214] group-hover:text-[#E31826] transition-colors">
                  <Phone className="w-2.5 h-2.5" />
                </div>
                <span className="text-xs font-semibold tracking-wide text-[#121214] group-hover:text-[#E31826] transition-colors">
                  {phoneNumber}
                </span>
              </motion.a>

              {/* Reference Style WhatsApp Pill */}
              <motion.a
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium text-xs tracking-wide shadow-sm hover:shadow-[0_4px_14px_rgba(37,211,102,0.35)] transition-all duration-200"
              >
                <div className="relative w-4 h-4 shrink-0">
                  <Image
                    src="/wh.png"
                    alt="WhatsApp"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-semibold">WhatsApp Now</span>
              </motion.a>
            </div>

            {/* ========================================================= */}
            {/* 4. MOBILE / TABLET VIEW ACTIONS                           */}
            {/* ========================================================= */}
            <div className="flex xl:hidden items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Now"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] text-white font-semibold text-xs active:scale-95 transition-transform shadow-sm"
              >
                <div className="relative w-3.5 h-3.5 shrink-0">
                  <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
                </div>
                <span className="text-[11px]">WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-[#F7F2E7] border border-[#E8DEC8] text-[#121214] active:scale-95 transition-transform focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#E31826]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#121214]" />
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 5. MOBILE OVERLAY DRAWER                                   */}
      {/* ========================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dimmed backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm xl:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-[64px] inset-x-3 sm:inset-x-6 z-50 bg-[#FDFBF7] border border-[#E8DEC8] rounded-2xl p-5 shadow-2xl xl:hidden overflow-hidden"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E8DEC8]">
                <span className="text-[11px] font-sans font-bold tracking-[0.16em] text-[#C5A059] uppercase">
                  Menu
                </span>
                <span className="text-[11px] text-[#5A5D64] font-medium">
                  Hero Properties
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col py-2 divide-y divide-[#E8DEC8]/50">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="flex items-center justify-between py-3 text-xs font-semibold tracking-[0.1em] text-[#121214] hover:text-[#E31826] transition-colors uppercase"
                  >
                    <span>{item.label}</span>
                    <span className="text-[#C5A059] text-sm">→</span>
                  </a>
                ))}
              </nav>

              {/* Bottom Quick Call & WhatsApp CTAs */}
              <div className="pt-3 border-t border-[#E8DEC8] flex flex-col gap-2.5">
                <a
                  href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                  className="w-full py-2.5 rounded-full bg-white border border-[#C5A059] text-[#121214] font-semibold text-xs flex items-center justify-center gap-2 active:scale-[0.99] transition-transform shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E31826]" />
                  <span>Call {phoneNumber}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] transition-transform"
                >
                  <div className="relative w-4 h-4">
                    <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
                  </div>
                  <span>WhatsApp Now</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}