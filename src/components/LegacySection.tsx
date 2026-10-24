"use client"

import { motion } from "framer-motion"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { ArchitecturalReveal, ARCHITECTURAL_EASE } from "@/components/ui/architectural-reveal"
import { EditorialHeading } from "@/components/ui/editorial-heading"
import { ArchitecturalImage } from "@/components/ui/architectural-image"
import Magnet from "@/components/Magnet"
import { useLanguage } from "@/context/LanguageContext"
import {
  ShieldCheck,
  Calendar,
  ArrowRight,
  Percent,
  KeyRound,
  FileCheck,
  Landmark,
} from "lucide-react"

interface LegacySectionProps {
  onOpenVisitModal?: (project?: string) => void
}

export function LegacySection({ onOpenVisitModal }: LegacySectionProps) {
  const { lang, t } = useLanguage()
  const handleScheduleVisit = () => {
    if (onOpenVisitModal) {
      onOpenVisitModal("Silverstone Ready Projects")
    } else {
      const el = document.querySelector("#contact")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="why-ready-to-live" className="relative py-20 lg:py-28 bg-[#FAF8F5] overflow-hidden border-b border-[#E6E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* ========================================================= */}
        {/* SHREEPAD-STYLE "ABOUT GROUP" SPLIT EDITORIAL SECTION      */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Architectural Photo Collage with Curtain Wipe */}
          <div className="lg:col-span-6 relative">
            <ArchitecturalReveal direction="right" duration={1.0}>
              <div className="grid grid-cols-12 gap-3.5 relative">
                {/* Main Large Elevation Photo */}
                <div className="col-span-8 relative h-[380px] sm:h-[450px] rounded-3xl overflow-hidden border border-[#E6E0D6] shadow-xl group">
                  <ArchitecturalImage
                    src="/images/springhill-campus.jpeg"
                    alt="Silverstone Ready to Live Campus Surat"
                    containerClassName="w-full h-full"
                    imageClassName="group-hover:scale-105 transition-transform duration-700 ease-out"
                    delay={0.1}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent pointer-events-none z-10" />
                  <div className="absolute bottom-5 left-5 right-5 text-white z-20">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#DFC8A7] block mb-1">
                      DELIVERED ARCHITECTURE
                    </span>
                    <h4 className="font-serif font-bold text-xl leading-tight">
                      Spring Hill & Raj Mahel Enclaves
                    </h4>
                  </div>
                </div>

                {/* Secondary Offset Stacked Images */}
                <div className="col-span-4 space-y-3.5">
                  <div className="relative h-[185px] sm:h-[216px] rounded-2xl overflow-hidden border border-[#E6E0D6] shadow-md group">
                    <ArchitecturalImage
                      src="/images/rajmahel/fountain.jpg"
                      alt="Central Water Fountain Raj Mahel"
                      containerClassName="w-full h-full"
                      delay={0.25}
                    />
                  </div>

                  <div className="relative h-[185px] sm:h-[220px] rounded-2xl overflow-hidden border border-[#E6E0D6] shadow-md group">
                    <ArchitecturalImage
                      src="/images/applewood/applewood-1.jpg"
                      alt="Applewood Homes Surat"
                      containerClassName="w-full h-full"
                      delay={0.4}
                    />
                  </div>
                </div>

                {/* Floating Trust Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: ARCHITECTURAL_EASE }}
                  className="absolute -bottom-5 left-6 bg-[#18181B] text-white p-4 rounded-2xl border border-stone-700 shadow-2xl flex items-center gap-3.5 z-30 transition-transform hover:scale-105"
                >
                  <div className="size-11 rounded-xl bg-[#B4833E]/20 text-[#DFC8A7] flex items-center justify-center font-bold">
                    <ShieldCheck className="size-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      100% BU/OC Approved
                    </div>
                    <div className="text-[11px] text-stone-400">
                      Zero Possession Delay Risk
                    </div>
                  </div>
                </motion.div>
              </div>
            </ArchitecturalReveal>
          </div>

          {/* Right Column: Editorial Copy with Masked Split-Heading */}
          <div className="lg:col-span-6 space-y-6">
            <ArchitecturalReveal direction="left" duration={0.6}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4EA] border border-[#DFC8A7] text-[11px] font-bold tracking-[0.2em] uppercase text-[#B4833E]">
                <span>{t("THE SILVERSTONE STANDARD", "સિલ્વરસ્ટોન સ્ટાન્ડર્ડ")}</span>
              </div>
            </ArchitecturalReveal>

            {/* Masked Editorial Headline: Max 8 words */}
            <EditorialHeading
              text={
                lang === "GU"
                  ? "રેન્ડર માટે 4 વર્ષ રાહ કેમ જોવી?"
                  : "Why Wait 4 Years For A Render?"
              }
              tag="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#18181B] tracking-tight leading-[1.14]"
              highlightWords={["Render", "Wait", "રાહ"]}
            />

            {/* Subhead: Max 15 words */}
            <ArchitecturalReveal direction="left" delay={0.15} duration={0.8}>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl">
                {t(
                  "BU/OC certified ready inventory eliminating possession delays, GST burdens, and construction speculations completely.",
                  "100% BU/OC મંજૂર તૈયાર ઘરો; બાંધકામમાં વિલંબ, GST બોજ અને અનિશ્ચિતતામાંથી સંપૂર્ણ મુક્તિ."
                )}
              </p>
            </ArchitecturalReveal>

            {/* Numbers-First Data Badges */}
            <ArchitecturalReveal direction="left" delay={0.25} duration={0.8}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-stone-800">
                <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-[#E6E0D6] shadow-xs hover:border-[#B4833E] transition-all hover:shadow-md">
                  <Percent className="size-4 text-[#15803D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-bold">0% GST Surcharge</strong>
                    <span className="text-stone-500">{t("Save ₹3L–₹10L on ready BU", "તૈયાર BU પર 5% GST ની બચત")}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-[#E6E0D6] shadow-xs hover:border-[#B4833E] transition-all hover:shadow-md">
                  <KeyRound className="size-4 text-[#15803D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-bold">0 Days Possession Wait</strong>
                    <span className="text-stone-500">{t("Move in on day one", "પ્રથમ દિવસથી સીધો કબજો")}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-[#E6E0D6] shadow-xs hover:border-[#B4833E] transition-all hover:shadow-md">
                  <FileCheck className="size-4 text-[#15803D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-bold">100% Verified Sunlight</strong>
                    <span className="text-stone-500">{t("Test actual breeze & acoustics", "વાસ્તવિક ઓરડા અને સૂર્યપ્રકાશ જુઓ")}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-[#E6E0D6] shadow-xs hover:border-[#B4833E] transition-all hover:shadow-md">
                  <Landmark className="size-4 text-[#15803D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-bold">Pre-Approved Bank Loans</strong>
                    <span className="text-stone-500">{t("SBI, HDFC & ICICI instant sanction", "SBI, HDFC અને ICICI માંથી ત્વરિત લોન")}</span>
                  </div>
                </div>
              </div>
            </ArchitecturalReveal>

            <ArchitecturalReveal direction="left" delay={0.35} duration={0.8}>
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Magnet padding={40} magnetStrength={0.25} disabled={false}>
                  <button
                    onClick={handleScheduleVisit}
                    className="inline-flex items-center gap-2 bg-[#B4833E] hover:bg-[#8F642B] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-transform active:scale-95 cursor-pointer group"
                  >
                    <Calendar className="size-4" />
                    <span>{t("Schedule Site Inspection", "રૂબરૂ સાઇટ વિઝિટ બુક કરો")}</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Magnet>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full border border-stone-800 bg-white text-stone-900 hover:bg-stone-900 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>{t("Explore 4 Campuses →", "4 પ્રોજેક્ટ્સ જુઓ →")}</span>
                </a>
              </div>
            </ArchitecturalReveal>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SHREEPAD-STYLE LEGACY STAT COUNTERS SECTION (#counter)    */}
        {/* ========================================================= */}
        <div id="counter" className="pt-10 border-t border-[#E6E0D6]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Stat 1: 100% */}
            <ArchitecturalReveal delay={0.1} duration={0.7}>
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E0D6] shadow-xs text-center sm:text-left hover:border-[#B4833E] transition-all hover:shadow-lg group">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#15803D] block mb-2">
                  LEGAL COMPLETION
                </span>
                <div className="text-4xl sm:text-6xl font-serif font-black text-[#15803D] tracking-tight">
                  <NumberTicker value={100} suffix="%" />
                </div>
                <h4 className="text-sm font-bold text-stone-900 mt-2">
                  BU / OC Certified
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  100% Ready Possession Handover
                </p>
              </div>
            </ArchitecturalReveal>

            {/* Stat 2: 500+ */}
            <ArchitecturalReveal delay={0.2} duration={0.7}>
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E0D6] shadow-xs text-center sm:text-left hover:border-[#B4833E] transition-all hover:shadow-lg group">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B4833E] block mb-2">
                  SETTLED RESIDENTS
                </span>
                <div className="text-4xl sm:text-6xl font-serif font-black text-[#18181B] tracking-tight">
                  <NumberTicker value={500} suffix="+" />
                </div>
                <h4 className="text-sm font-bold text-stone-900 mt-2">
                  Happy Families
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  Thriving Surat Gated Communities
                </p>
              </div>
            </ArchitecturalReveal>

            {/* Stat 3: 0 Days */}
            <ArchitecturalReveal delay={0.3} duration={0.7}>
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E0D6] shadow-xs text-center sm:text-left hover:border-[#B4833E] transition-all hover:shadow-lg group">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#15803D] block mb-2">
                  CONSTRUCTION RISK
                </span>
                <div className="text-4xl sm:text-6xl font-serif font-black text-[#18181B] tracking-tight">
                  <NumberTicker value={0} suffix=" Days" />
                </div>
                <h4 className="text-sm font-bold text-stone-900 mt-2">
                  Waiting Period
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  Keys Handed Over Immediately
                </p>
              </div>
            </ArchitecturalReveal>

            {/* Stat 4: 15+ Years */}
            <ArchitecturalReveal delay={0.4} duration={0.7}>
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E0D6] shadow-xs text-center sm:text-left hover:border-[#B4833E] transition-all hover:shadow-lg group">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B4833E] block mb-2">
                  ESTABLISHED HERITAGE
                </span>
                <div className="text-4xl sm:text-6xl font-serif font-black text-[#B4833E] tracking-tight">
                  <NumberTicker value={15} suffix="+ Years" />
                </div>
                <h4 className="text-sm font-bold text-stone-900 mt-2">
                  Architectural Excellence
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">
                  Spring Hill, Raj Mahel, Applewood & Mahel
                </p>
              </div>
            </ArchitecturalReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LegacySection
