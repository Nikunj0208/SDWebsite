"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  Compass,
  Sparkles,
  Maximize2,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Building,
} from "lucide-react"
import { FLAGSHIP_PROJECTS, FlagshipProjectData } from "@/constants/silverstoneData"
import { useLanguage } from "@/context/LanguageContext"
import Magnet from "@/components/Magnet"

interface PlotLayoutModalProps {
  isOpen: boolean
  onClose: () => void
  defaultProject?: string
}

export function PlotLayoutModal({
  isOpen,
  onClose,
  defaultProject = "applewood",
}: PlotLayoutModalProps) {
  const { lang, t } = useLanguage()
  const [selectedProjectId, setSelectedProjectId] = useState<string>(defaultProject)

  const activeProject =
    FLAGSHIP_PROJECTS.find(
      (p) =>
        p.id === selectedProjectId ||
        p.name.toLowerCase() === selectedProjectId.toLowerCase()
    ) || FLAGSHIP_PROJECTS[0]

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      `Hello Silverstone Developers,\n\nI am reviewing the official plot layouts & dimensions for *${activeProject.name}* (${activeProject.keyDimensions}).\n\nPlease share the latest master layout blueprint, available plot numbers, and current payment schedule on WhatsApp.`
    )
    window.open(`https://wa.me/919904222000?text=${message}`, "_blank")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-5">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-stone-950/80 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl border border-[#DFC8A7] shadow-2xl z-10 flex flex-col justify-between"
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#E6E0D6] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="size-9 rounded-xl bg-[#FAF4EA] border border-[#DFC8A7] flex items-center justify-center text-[#B4833E]">
              <Compass className="size-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900 leading-tight">
                {t("Official Plot Layouts & Dimensions", "અધિકૃત પ્લોટ લેઆઉટ અને માપ")}
              </h3>
              <p className="text-[11px] text-stone-500">
                {t("Verified RERA & SMC TP Scheme Architectural Blueprint", "રેરા અને SMC ટીપી સ્કીમ મંજૂર આર્કિટેક્ચરલ બ્લૂપ્રિન્ટ")}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="size-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Project Selector Pills */}
        <div className="px-6 pt-4 pb-2 border-b border-[#E6E0D6] bg-[#FAF8F5]">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {FLAGSHIP_PROJECTS.map((proj) => {
              const isActive = activeProject.id === proj.id
              return (
                <button
                  key={proj.id}
                  onClick={() => setSelectedProjectId(proj.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-[#18181B] text-white shadow-md"
                      : "bg-white text-stone-600 hover:bg-stone-100 border border-[#E6E0D6]"
                  }`}
                >
                  <Building className={`size-3.5 ${isActive ? "text-[#B4833E]" : "text-stone-400"}`} />
                  <span>{proj.name}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded font-semibold ${
                      isActive ? "bg-white/20 text-[#DFC8A7]" : "bg-stone-100 text-stone-600"
                    }`}
                  >
                    {proj.startingPrice}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left: Image / Layout Preview */}
            <div className="md:col-span-7 space-y-3">
              <div className="relative h-[280px] sm:h-[340px] w-full rounded-2xl overflow-hidden border border-[#E6E0D6] bg-stone-100">
                <Image
                  src={activeProject.image}
                  alt={activeProject.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 z-10 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-bold shadow-md">
                    {lang === "GU" ? activeProject.statusGu : activeProject.status}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/90 text-stone-900 text-[10px] font-bold shadow-md">
                    {activeProject.startingPrice}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white z-10">
                  <h4 className="font-serif text-2xl font-bold tracking-tight">
                    {activeProject.name}
                  </h4>
                  <p className="text-xs text-[#DFC8A7]">
                    {lang === "GU" ? activeProject.tagGu : activeProject.tag}
                  </p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2">
                <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">
                  {t(
                    "100% Title Clear & RERA Certified Ready Possession",
                    "100% ટાઇટલ ક્લિયર અને રેરા પ્રમાણિત કબજો"
                  )}
                </span>
              </div>
            </div>

            {/* Right: Technical Dimensions & Specs */}
            <div className="md:col-span-5 space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6E0D6] space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B4833E] block">
                  {t("KEY DIMENSIONS & FRONTAGE", "મુખ્ય માપ અને ફ્રન્ટ પહોળાઈ")}
                </span>
                <div className="font-serif text-base font-bold text-stone-900 leading-snug">
                  {lang === "GU" ? activeProject.keyDimensionsGu : activeProject.keyDimensions}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E6E0D6]">
                  <span className="text-[10px] uppercase font-bold text-stone-500 block">
                    {t("Plot Range", "પ્લોટ સાઇઝ")}
                  </span>
                  <span className="font-bold text-stone-900 mt-0.5 block">
                    {activeProject.plotRange}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E6E0D6]">
                  <span className="text-[10px] uppercase font-bold text-stone-500 block">
                    {t("Front Opening", "ફ્રન્ટ ઓપનિંગ")}
                  </span>
                  <span className="font-bold text-[#B4833E] mt-0.5 block">
                    {activeProject.frontage}
                  </span>
                </div>
              </div>

              {/* Anchor Highlight */}
              <div className="p-3.5 rounded-2xl bg-[#FAF4EA] border border-[#DFC8A7] text-stone-900 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#B4833E]">
                  <Sparkles className="size-3" />
                  <span>{t("Anchor Plot Highlight", "એન્કર પ્લોટ હાઇલાઇટ")}</span>
                </div>
                <p className="font-semibold text-stone-800 text-[11px] leading-relaxed">
                  {lang === "GU" ? activeProject.anchorHighlightGu : activeProject.anchorHighlight}
                </p>
              </div>

              {/* 4 Technical Pills */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                  {t("Specifications", "વિશિષ્ટતાઓ")}
                </span>
                <div className="space-y-1 text-stone-700">
                  {(lang === "GU" ? activeProject.specPillsGu : activeProject.specPills).map((pill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-[#15803D] shrink-0" />
                      <span className="font-medium text-[11px]">{pill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer with Direct WhatsApp Action */}
        <div className="p-5 sm:p-6 bg-[#FAF8F5] border-t border-[#E6E0D6] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-600 text-center sm:text-left">
            <span className="font-bold text-stone-900 block">
              {t("Physical Site Visit & Document Verification", "રૂબરૂ સાઇટ વિઝિટ અને દસ્તાવેજ ચકાસણી")}
            </span>
            <span>
              {t("Instant loan disbursement available from SBI, HDFC & ICICI", "SBI, HDFC અને ICICI માંથી તાત્કાલિક લોન મંજૂરી ઉપલબ્ધ")}
            </span>
          </div>

          <div className="w-full sm:w-auto flex items-center gap-2">
            <Magnet padding={20} magnetStrength={0.2} disabled={false} className="w-full sm:w-auto">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full sm:w-auto bg-[#15803D] hover:bg-[#166534] text-white font-bold py-3 px-6 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all active:scale-95"
              >
                <MessageSquare className="size-4 shrink-0" />
                <span>{t("Get Exact Plot Availability on WhatsApp", "WhatsApp પર ઉપલબ્ધ પ્લોટ્સની વિગત મેળવો")}</span>
                <ArrowRight className="size-4 shrink-0" />
              </button>
            </Magnet>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
export default PlotLayoutModal
