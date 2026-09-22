"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  ShieldCheck, 
  AlertCircle, 
  Building2, 
  Phone, 
  Mail, 
  FileText, 
  Scale, 
  Lock,
  Sparkles
} from "lucide-react";
import { heroPropertiesData } from "@/app/data/data";

export default function DisclaimerPage() {
  const phoneNumber = heroPropertiesData?.contactInfo?.phone || "+91 99103 74156";
  const salesEmail = heroPropertiesData?.contactInfo?.salesDeskEmail || "concierge@heroproperties.in";
  const whatsappNumber = heroPropertiesData?.contactInfo?.whatsappNumber || "919910374156";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi, I have a compliance and project query regarding Hero Properties Greater Noida."
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
              Legal & Statutory Notice
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#121214] font-normal tracking-tight">
            Terms of Use & Disclaimer
          </h1>

          <p className="text-xs sm:text-sm font-sans text-[#5A5D64] mt-2 font-light max-w-2xl leading-relaxed">
            Please read this statutory notice carefully prior to accessing, submitting information, or making property decisions on this platform.
          </p>
        </div>

        {/* Content Sections Stack */}
        <div className="py-10 space-y-10 text-xs sm:text-sm font-sans text-[#5A5D64] leading-relaxed">
          
          {/* Section 1: Authorized Marketing Representative */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#121214]">
              <div className="w-8 h-8 rounded-lg bg-[#F7F2E7] border border-[#E8DEC8] flex items-center justify-center text-[#C5A059]">
                <Building2 className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold">
                1. Informational & Marketing Portal Notice
              </h2>
            </div>
            <p>
              This website is an authorized channel partner platform operated solely for project information dissemination, marketing coordination, and preliminary customer inquiry handling for Hero Properties residences situated in Greater Noida, Uttar Pradesh. This website does not constitute an offer, invitation, or legal contract between the developer and prospective purchasers.
            </p>
          </div>

          {/* Section 2: Conceptual Visualizations & Dimensions */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#121214]">
              <div className="w-8 h-8 rounded-lg bg-[#F7F2E7] border border-[#E8DEC8] flex items-center justify-center text-[#C5A059]">
                <FileText className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold">
                2. Visualizations, Floor Plans & Specifications
              </h2>
            </div>
            <p>
              All architectural renderings, 3D illustrations, walkthrough graphics, elevation textures, landscape layouts, amenity features, and sample interior imagery displayed on this portal are artistic impressions intended solely for conceptual guidance.
            </p>
            <p>
              Room dimensions, super areas, carpet areas, and layout configurations are indicative and subject to variations within statutory tolerance limits as permitted under the final sanctioned building plans. Actual structural columns, wall thicknesses, and window positions may vary slightly in the constructed units.
            </p>
          </div>

          {/* Section 3: Statutory RERA Compliance */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#121214]">
              <div className="w-8 h-8 rounded-lg bg-[#F7F2E7] border border-[#E8DEC8] flex items-center justify-center text-[#C5A059]">
                <Scale className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold">
                3. Real Estate (Regulation and Development) Act (RERA) Compliance
              </h2>
            </div>
            <p>
              The project is undertaken in strict adherence to the provisions of the Real Estate (Regulation and Development) Act (RERA) and rules framed thereunder by UP RERA. Prospective purchasers are strongly advised to independently inspect, verify, and satisfy themselves regarding all sanctioned building approvals, phase registrations, title clearances, and delivery milestones on the official UP RERA portal or by scheduling an in-person appointment at the developer's registered experience center.
            </p>
          </div>

          {/* Section 4: Lead Submission & Communication Consent */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#121214]">
              <div className="w-8 h-8 rounded-lg bg-[#F7F2E7] border border-[#E8DEC8] flex items-center justify-center text-[#C5A059]">
                <Lock className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold">
                4. User Inquiry, Communication Consent & Privacy
              </h2>
            </div>
            <p>
              By submitting your name, contact telephone number, and email address through any contact form, callback request, or brochure download module on this portal, you explicitly authorize our sales coordinators and verified channel representatives to contact you via telephone call, SMS, WhatsApp, and email regarding pricing updates, floor plans, and site inspections.
            </p>
            <p>
              This consent overrides any registration under the National Do Not Call (NDNC) or Telecom Commercial Communications Customer Preference Regulations (TRAI). Your personal contact records are kept confidential and are not rented or sold to unrelated commercial third parties.
            </p>
          </div>

          {/* Section 5: Governing Agreement */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#121214]">
              <div className="w-8 h-8 rounded-lg bg-[#F7F2E7] border border-[#E8DEC8] flex items-center justify-center text-[#C5A059]">
                <AlertCircle className="w-4 h-4" />
              </div>
              <h2 className="font-serif text-lg sm:text-xl font-bold">
                5. Precedence of Builder-Buyer Agreement
              </h2>
            </div>
            <p>
              No statement, data point, or timeline presented on this portal shall be construed as a warranty or guarantee by the marketing team. All official covenants, consideration schedules, construction milestones, and allotment parameters shall be governed solely by the formal Builder-Buyer Agreement executed between the purchaser and the developer.
            </p>
          </div>

        </div>

        {/* Verification Assistance Card */}
        <div className="rounded-3xl bg-white border border-[#E8DEC8] p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                Direct Developer Coordination
              </span>
            </div>
            <h3 className="text-lg font-serif font-bold text-[#121214]">
              Have questions regarding official RERA documentation?
            </h3>
            <p className="text-xs text-[#5A5D64]">
              Our authorized desk can share sanctioned layout plans and registry certificates upon request.
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
          <p>Greater Noida, Uttar Pradesh • Authorized Marketing Representative</p>
        </div>

      </div>
    </main>
  );
}