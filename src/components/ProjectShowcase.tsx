"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  MapPin,
  Calendar,
  MessageSquare,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Compass,
  Building,
} from "lucide-react"
import { ARCHITECTURAL_EASE, ArchitecturalReveal } from "@/components/ui/architectural-reveal"
import { EditorialHeading } from "@/components/ui/editorial-heading"
import { ArchitecturalImage } from "@/components/ui/architectural-image"
import Magnet from "@/components/Magnet"
import { FLAGSHIP_PROJECTS, FlagshipProjectData } from "@/constants/silverstoneData"
import { useLanguage } from "@/context/LanguageContext"

interface ProjectShowcaseProps {
  onOpenVisitModal: (project?: string) => void
  onOpenPlotModal: (projectId: string) => void
}

export function ProjectShowcase({
  onOpenVisitModal,
  onOpenPlotModal,
}: ProjectShowcaseProps) {
  const { lang, t } = useLanguage()
  const [activeTab, setActiveTab] = useState<"all" | "row-house-plots" | "royal-bungalows">("all")

  const TABS = [
    { id: "all" as const, label: t("All 4 Projects", "બધા 4 પ્રોજેક્ટ્સ"), badge: "₹42.27L - ₹72.8L" },
    {
      id: "row-house-plots" as const,
      label: t("Row House & Plots", "રો-હાઉસ અને પ્લોટ્સ"),
      badge: "₹42L – ₹47L",
    },
    {
      id: "royal-bungalows" as const,
      label: t("Royal Bungalows", "રોયલ બંગલો"),
      badge: "₹72.80L",
    },
  ]

  const filteredProjects = FLAGSHIP_PROJECTS.filter((proj) => {
    if (activeTab === "all") return true
    return proj.category === activeTab
  })

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#FAF8F5] relative border-b border-[#E6E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header with Masked Editorial Heading (Copywriting rules: Eyebrow max 4 words, headline max 8 words, subhead max 15 words) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <ArchitecturalReveal direction="up" duration={0.6}>
              {/* Eyebrow Pill: Max 4 words */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4EA] border border-[#DFC8A7] text-[11px] font-bold tracking-[0.2em] uppercase text-[#B4833E]">
                <span>{t("READY RESIDENTIAL CAMPUSES", "તૈયાર રેસિડેન્શિયલ કેમ્પસ")}</span>
              </div>
            </ArchitecturalReveal>

            {/* Headline: Max 8 words */}
            <EditorialHeading
              text={
                lang === "GU"
                  ? "સુરતમાં તૈયાર અને લાઈવ 4 લેન્ડમાર્ક કેમ્પસ"
                  : "Completed Landmark Residences Across Surat"
              }
              tag="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#18181B] tracking-tight leading-[1.14]"
              highlightWords={["Landmark", "Residences", "લેન્ડમાર્ક"]}
            />

            {/* Subhead: Max 15 words */}
            <p className="text-sm sm:text-base text-stone-600 max-w-xl">
              {t(
                "100% completed, BU-approved row house and bungalow plots in Surat's prime 300' Ring Road corridor.",
                "સુરતના પ્રાઇમ 300 ફૂટ રિંગ રોડ કોરિડોરમાં 100% તૈયાર, BU મંજૂર રો-હાઉસ અને બંગલો પ્લોટ્સ."
              )}
            </p>
          </div>

          {/* Quick Filter Pill Action */}
          <ArchitecturalReveal direction="up" delay={0.15}>
            <Magnet padding={25} magnetStrength={0.2} disabled={false}>
              <button
                onClick={() => setActiveTab("all")}
                className="inline-flex items-center gap-2 bg-[#B4833E] hover:bg-[#8F642B] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
              >
                <span>{t("View All 4 Projects", "બધા 4 પ્રોજેક્ટ્સ જુઓ")}</span>
                <ArrowRight className="size-4" />
              </button>
            </Magnet>
          </ArchitecturalReveal>
        </div>

        {/* 3 Categories Filter Tabs (All Projects | Row House & Plots ₹42L–₹47L | Royal Bungalows ₹72.80L) */}
        <ArchitecturalReveal delay={0.2}>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#E6E0D6]">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer shrink-0 flex items-center gap-2 ${
                    isActive
                      ? "text-white"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectCategoryTab"
                      className="absolute inset-0 bg-[#18181B] rounded-full shadow-md"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                  <span
                    className={`relative z-10 text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      isActive ? "bg-white/20 text-[#DFC8A7]" : "bg-[#FAF4EA] text-[#B4833E]"
                    }`}
                  >
                    {tab.badge}
                  </span>
                </button>
              )
            })}
          </div>
        </ArchitecturalReveal>

        {/* 2-Column Luxury Project Cards Grid with Aceternity Hover Physics */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: ARCHITECTURAL_EASE }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="group rounded-3xl bg-white border border-[#E6E0D6] hover:border-[#B4833E] transition-all duration-500 overflow-hidden shadow-xs hover:shadow-2xl flex flex-col justify-between will-change-transform"
              >
                <div>
                  {/* Image Container with Architectural Curtain Reveal & Aceternity Zoom */}
                  <div className="relative h-[300px] sm:h-[370px] w-full overflow-hidden bg-stone-100">
                    <ArchitecturalImage
                      src={project.image}
                      alt={project.name}
                      containerClassName="w-full h-full"
                      imageClassName="group-hover:scale-108 transition-transform duration-700 ease-out"
                      delay={idx * 0.1}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent z-10 pointer-events-none" />

                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-xs font-bold tracking-wide shadow-md">
                        <span className="size-1.5 rounded-full bg-white animate-pulse" />
                        <span>{lang === "GU" ? project.statusGu : project.status}</span>
                      </div>

                      <div className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-stone-900 text-xs font-bold border border-white/50 shadow-md">
                        <span>Starting {project.startingPrice}</span>
                      </div>
                    </div>

                    {/* Image Title Overlay */}
                    <div className="absolute bottom-5 left-5 right-5 text-white z-20 transition-transform duration-500 group-hover:-translate-y-2">
                      <div className="flex items-center gap-1.5 text-xs text-[#DFC8A7] mb-1">
                        <MapPin className="size-3.5 shrink-0" />
                        <span>{t("New Pal TP Corridor, Surat", "ન્યૂ પાલ ટીપી કોરિડોર, સુરત")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                          {project.name}
                        </h3>
                        {project.titleSuffix && (
                          <span className="text-xs px-2 py-0.5 rounded-md bg-[#B4833E]/90 text-white font-sans font-semibold">
                            {project.titleSuffix}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-stone-200 mt-0.5">
                        {lang === "GU" ? project.tagGu : project.tag}
                      </p>
                    </div>

                    {/* Aceternity Frosted Warm-Alabaster Glass Tray (Slides up on Hover) */}
                    <div className="absolute inset-x-3 bottom-3 z-30 translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none p-3.5 rounded-2xl bg-[#FAF8F5]/95 backdrop-blur-md border border-[#DFC8A7] shadow-xl text-stone-900">
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-stone-500 block">
                            {t("Plot Sizes", "પ્લોટ સાઇઝ")}
                          </span>
                          <span className="font-bold text-stone-900">{project.plotRange}</span>
                        </div>
                        <div className="h-6 w-px bg-[#E6E0D6]" />
                        <div>
                          <span className="text-[10px] uppercase font-bold text-stone-500 block">
                            {t("Frontage", "ફ્રન્ટ પહોળાઈ")}
                          </span>
                          <span className="font-bold text-[#B4833E]">{project.frontage}</span>
                        </div>
                        <div className="h-6 w-px bg-[#E6E0D6]" />
                        <div>
                          <span className="text-[10px] uppercase font-bold text-stone-500 block">
                            {t("Road Network", "રોડ પ્રકાર")}
                          </span>
                          <span className="font-bold text-emerald-800">{project.roadType}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Content & Specs */}
                  <div className="p-6 sm:p-7 space-y-4">
                    {/* Gujarati Tag from Client Docx */}
                    <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#DFC8A7]/40 text-xs font-semibold text-stone-800 flex items-center gap-2">
                      <Sparkles className="size-4 text-[#B4833E] shrink-0" />
                      <span>{project.gujaratiTag}</span>
                    </div>

                    {/* Key Technical Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E6E0D6]">
                        <span className="text-[10px] uppercase font-bold text-stone-500 block">
                          {t("Key Dimensions", "મુખ્ય માપ")}
                        </span>
                        <span className="font-bold text-stone-900 block mt-0.5 leading-snug">
                          {lang === "GU" ? project.keyDimensionsGu : project.keyDimensions}
                        </span>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E6E0D6]">
                        <span className="text-[10px] uppercase font-bold text-stone-500 block">
                          {t("Anchor Plot", "એન્કર પ્લોટ")}
                        </span>
                        <span className="font-bold text-stone-900 block mt-0.5 leading-snug">
                          {lang === "GU" ? project.anchorHighlightGu : project.anchorHighlight}
                        </span>
                      </div>
                    </div>

                    {/* 4 Spec Pills Grid */}
                    <div className="grid grid-cols-2 gap-2 pt-1 text-xs text-stone-700">
                      {(lang === "GU" ? project.specPillsGu : project.specPills).map((pill, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="size-3.5 text-[#15803D] shrink-0" />
                          <span className="leading-snug font-medium text-[11px]">{pill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons (2 Direct Actions Required: View Plot Layout & Dimensions | WhatsApp Plot Availability) */}
                <div className="p-6 sm:p-7 pt-0 space-y-2.5">
                  <div className="flex flex-col sm:flex-row items-center gap-2.5">
                    {/* Action 1: View Plot Layout & Dimensions (Opens Interactive Modal) */}
                    <button
                      type="button"
                      onClick={() => onOpenPlotModal(project.id)}
                      className="w-full sm:flex-1 bg-[#18181B] hover:bg-stone-800 text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Compass className="size-4 text-[#DFC8A7] shrink-0" />
                      <span>{t("View Plot Layout & Dimensions", "પ્લોટ લેઆઉટ અને માપ જુઓ")}</span>
                    </button>

                    {/* Action 2: Get Exact Plot Availability on WhatsApp (Pre-fills project name) */}
                    <a
                      href={`https://wa.me/919904222000?text=${encodeURIComponent(
                        project.whatsappText
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl border border-emerald-600 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <MessageSquare className="size-4 text-emerald-600 shrink-0" />
                      <span>{t("WhatsApp Availability", "WhatsApp ઉપલબ્ધતા")}</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
                    <span>{t("Immediate Bank Loan Facility Available", "તાત્કાલિક બેંક લોન સુવિધા ઉપલબ્ધ")}</span>
                    <button
                      onClick={() => onOpenVisitModal(project.name)}
                      className="font-bold text-[#B4833E] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>{t("Book Visit", "વિઝિટ બુક કરો")}</span>
                      <ArrowRight className="size-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
export default ProjectShowcase
