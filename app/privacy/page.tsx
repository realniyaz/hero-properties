"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Lock, 
  Database, 
  EyeOff, 
  BellRing, 
  FileText, 
  Phone,
  Sparkles
} from "lucide-react";
import { heroPropertiesData } from "@/app/data/data";

export default function PrivacyPage() {
  const phoneNumber = heroPropertiesData?.contactInfo?.phone || "+91 99103 74156";
  const salesEmail = heroPropertiesData?.contactInfo?.salesDeskEmail || "concierge@heroproperties.in";
  const whatsappNumber = heroPropertiesData?.contactInfo?.whatsappNumber || "919910374156";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi, I have a privacy and data handling query regarding Hero Properties Greater Noida."
  )}`;

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#121214] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#C5A059]/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#E31826]/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Navigation Return Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5A5D64] hover:text-[#121214] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#C5A059]" />
            <span>Return to Project Presentation</span>
          </Link>
        </div>

        {/* Header Block */}
        <div className="text-center sm:text-left pb-8 border-b border-[#E8DEC8]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7F2E7] border border-[#E8DEC8] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.24em] text-[#C5A059]">
              Data Protection & Privacy
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#121214] font-normal tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-xs sm:text-sm font-sans text-[#5A5D64] mt-2 font-light max-w-2xl leading-relaxed">
            We are dedicated to safeguarding your personal privacy. This statement explains how your information is gathered, managed, and protected across this portal.
          </p>
        </div>

        {/* Policy Articles Stack */}
        <div className="py-10 space-y-10 text-xs sm:text-sm font-sans text-[#5A5D64] leading-relaxed">
          
          {/* Article 1: Information Collected */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#121214]">
              <div className="w-8 h-8 rounded-lg bg-[#F7F2E7] border border-[#E8DEC8] flex items-center justify-center text-[#C5A059]">
                <Database className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold">
                1. Information We Collect
              </h2>
            </div>
            <p>
              When you browse or interact with this platform, we may collect information directly provided by you, as well as technical device data:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#5A5D64]">
              <li><strong>Contact Information:</strong> Full name, telephone/mobile number, and email address submitted via registration forms or brochure downloads.</li>
              <li><strong>Inquiry Parameters:</strong> Preferred unit configuration (e.g. 3 or 4 BHK), budget range, and timeline preferences.</li>
              <li><strong>Automated Device Data:</strong> IP address, browser type, referring URLs, operating system, and on-site interaction patterns collected through analytics scripts.</li>
            </ul>
          </div>

          {/* Article 2: Use of Personal Data */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#121214]">
              <div className="w-8 h-8 rounded-lg bg-[#F7F2E7] border border-[#E8DEC8] flex items-center justify-center text-[#C5A059]">
                <FileText className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold">
                2. Purpose & Use of Collected Data
              </h2>
            </div>
            <p>
              Your contact details are collected strictly to fulfill real estate inquiry requests and manage customer engagement for Hero Properties in Greater Noida:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#5A5D64]">
              <li>Transmitting requested project e-brochures, master plans, cost sheets, and construction updates.</li>
              <li>Coordinating accompanied VIP site visits and developer sales lounge appointments.</li>
              <li>Answering bespoke pricing, bank loan eligibility, and payment plan queries.</li>
              <li>Optimizing our web layout performance and marketing efficiency.</li>
            </ul>
          </div>

          {/* Article 3: Zero-Spam & Non-Disclosure Commitment */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#121214]">
              <div className="w-8 h-8 rounded-lg bg-[#F7F2E7] border border-[#E8DEC8] flex items-center justify-center text-[#C5A059]">
                <EyeOff className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold">
                3. Non-Disclosure & Information Sharing
              </h2>
            </div>
            <p>
              We maintain a strict zero-spam protocol. Under no circumstances is your personal identity or contact number sold, leased, or rented to third-party telemarketing bureaus or data aggregators.
            </p>
            <p>
              Information is only shared internally with authorized sales coordinators, verified channel partners, and customer relationship executives who need access to process your visit and allotment inquiries.
            </p>
          </div>

          {/* Article 4: Communications & Consent Management */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#121214]">
              <div className="w-8 h-8 rounded-lg bg-[#F7F2E7] border border-[#E8DEC8] flex items-center justify-center text-[#C5A059]">
                <BellRing className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold">
                4. Communication Preferences & Opt-Out Rights
              </h2>
            </div>
            <p>
              By registering on this portal, you consent to receive periodic communications regarding inventory status, cost sheets, and site visit confirmations via telephone, SMS, WhatsApp, and email.
            </p>
            <p>
              You have the right to revoke this consent at any point. Should you wish to cease receiving updates, simply notify our concierge representative via WhatsApp or write to <strong>{salesEmail}</strong> with the subject line <em>"Unsubscribe"</em>, and your records will be flagged immediately.
            </p>
          </div>

          {/* Article 5: Data Security & Storage */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#121214]">
              <div className="w-8 h-8 rounded-lg bg-[#F7F2E7] border border-[#E8DEC8] flex items-center justify-center text-[#C5A059]">
                <Lock className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold">
                5. Data Security Standards
              </h2>
            </div>
            <p>
              We implement industry-standard administrative, technical, and physical safeguards to prevent unauthorized access, accidental alteration, or disclosure of your personal data. All form transmissions over this website are protected using Transport Layer Security (HTTPS / SSL encryption).
            </p>
          </div>

        </div>

        {/* Assistance Card */}
        <div className="rounded-3xl bg-white border border-[#E8DEC8] p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                Privacy & Data Desk
              </span>
            </div>
            <h3 className="text-lg font-serif font-bold text-[#121214]">
              Have inquiries regarding your personal information?
            </h3>
            <p className="text-xs text-[#5A5D64]">
              Our privacy desk can assist you with data modification or deletion requests.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#F7F2E7] hover:bg-white text-[#121214] border border-[#E8DEC8] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#E31826]" />
              <span>Call Desk</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <div className="relative w-4 h-4">
                <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
              </div>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Timestamp & Accreditation */}
        <div className="mt-10 pt-6 border-t border-[#E8DEC8] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-sans text-[#5A5D64]">
          <p>© {new Date().getFullYear()} Hero Properties. All rights reserved.</p>
          <p>Greater Noida, Uttar Pradesh • Authorized Representative Portal</p>
        </div>

      </div>
    </main>
  );
}