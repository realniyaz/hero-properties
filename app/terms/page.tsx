"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  ShieldCheck, 
  FileCheck2, 
  Scale, 
  Lock, 
  Building, 
  AlertCircle,
  Phone,
  Sparkles
} from "lucide-react";
import { heroPropertiesData } from "@/app/data/data";

export default function TermsPage() {
  const phoneNumber = heroPropertiesData?.contactInfo?.phone || "+91 99103 74156";
  const whatsappNumber = heroPropertiesData?.contactInfo?.whatsappNumber || "919910374156";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi, I have a question regarding the terms of use and booking policies for Hero Properties Greater Noida."
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
              Legal Governance & Compliance
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#121214] font-normal tracking-tight">
            Terms & Conditions of Service
          </h1>

          <p className="text-xs sm:text-sm font-sans text-[#5A5D64] mt-2 font-light max-w-2xl leading-relaxed">
            These terms govern your access, submission of inquiries, and interactions with the authorized representative portal for Hero Properties residences in Greater Noida, UP.
          </p>
        </div>

        {/* Terms Articles Stack */}
        <div className="py-10 space-y-10 text-xs sm:text-sm font-sans text-[#5A5D64] leading-relaxed">
          
          {/* Article 1: Acceptance & Portal Scope */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#121214]">
              <div className="w-8 h-8 rounded-lg bg-[#F7F2E7] border border-[#E8DEC8] flex items-center justify-center text-[#C5A059]">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold">
                1. Acceptance of Terms & Marketing Platform Scope
              </h2>
            </div>
            <p>
              By accessing, browsing, or providing details on this platform, you acknowledge and agree to comply with and be bound by these Terms and Conditions. This portal is maintained solely for the dissemination of marketing collaterals, preliminary project awareness, and coordination of customer site inspections on behalf of Hero Properties in Greater Noida, Uttar Pradesh.
            </p>
            <p>
              Nothing contained within this website constitutes an offer of sale, financial advice, or a legally enforceable allotment agreement.
            </p>
          </div>

          {/* Article 2: Non-Binding Collateral & Indicative Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#121214]">
              <div className="w-8 h-8 rounded-lg bg-[#F7F2E7] border border-[#E8DEC8] flex items-center justify-center text-[#C5A059]">
                <Building className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold">
                2. Indicative Specifications & Price Indicators
              </h2>
            </div>
            <p>
              All listed base selling prices (BSP), starting figures (e.g. ₹ 1.89 Cr*), unit dimensions, carpet areas, and furniture inclusions represent estimates subject to change without prior notice based on developer phase releases, floor rises, preferential location charges (PLC), and statutory taxes.
            </p>
            <p>
              Photographs, walkthrough animations, landscape diagrams, and floor plan layouts are artistic impressions meant solely to convey the design philosophy and do not represent guaranteed structural commitments.
            </p>
          </div>

          {/* Article 3: Communication Consent & TRAI Overrides */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#121214]">
              <div className="w-8 h-8 rounded-lg bg-[#F7F2E7] border border-[#E8DEC8] flex items-center justify-center text-[#C5A059]">
                <Lock className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold">
                3. Lead Submission, Communication Consent & DND Regulations
              </h2>
            </div>
            <p>
              Whenever you furnish your contact information (name, mobile phone number, email address) across any form on this site, you explicitly grant consent to our sales coordinators and verified channel partners to contact you via telephone call, SMS, WhatsApp, and electronic mail to provide project dossiers, pricing breakdowns, and site tour logistics.
            </p>
            <p>
              You expressly confirm that this consent supersedes any active registration with the National Customer Preference Register (NCPR) or National Do Not Call (NDNC) registry under the Telecom Regulatory Authority of India (TRAI) guidelines.
            </p>
          </div>

          {/* Article 4: Precedence of Developer Agreements */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#121214]">
              <div className="w-8 h-8 rounded-lg bg-[#F7F2E7] border border-[#E8DEC8] flex items-center justify-center text-[#C5A059]">
                <Scale className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold">
                4. Precedence of the Formal Builder-Buyer Agreement
              </h2>
            </div>
            <p>
              Any formal purchase, booking allotment, payment plan milestones, or cancellation terms are governed solely and exclusively by the formal Builder-Buyer Agreement, Allotment Letter, and Sanctioned Layout contracts executed directly between the purchaser and the developer entity.
            </p>
            <p>
              No marketing executive, channel partner, or online content administrator holds the authority to modify, grant waivers, or make representations contradictory to the terms set forth in the executed statutory agreement.
            </p>
          </div>

          {/* Article 5: Intellectual Property & Restrictions */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#121214]">
              <div className="w-8 h-8 rounded-lg bg-[#F7F2E7] border border-[#E8DEC8] flex items-center justify-center text-[#C5A059]">
                <AlertCircle className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold">
                5. Intellectual Property Rights & Jurisdiction
              </h2>
            </div>
            <p>
              All trade marks, branding graphics, logos, architectural renderings, copy texts, and page layouts featured on this portal are the intellectual property of their respective trademark holders and the developer. Unauthorized reproduction, web-scraping, framing, or commercial redistribution of this material is strictly prohibited.
            </p>
            <p>
              Any dispute, legal claim, or proceedings arising out of the use of this marketing portal shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Gautam Buddha Nagar (Greater Noida), Uttar Pradesh.
            </p>
          </div>

        </div>

        {/* Verification Assistance Card */}
        <div className="rounded-3xl bg-white border border-[#E8DEC8] p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                RERA Compliance Verification
              </span>
            </div>
            <h3 className="text-lg font-serif font-bold text-[#121214]">
              Require clarification regarding project terms or allotments?
            </h3>
            <p className="text-xs text-[#5A5D64]">
              Our authorized desk will connect you with an authorized representative to address regulatory queries.
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