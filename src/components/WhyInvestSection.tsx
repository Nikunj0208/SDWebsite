"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Building2,
  Milestone,
  Navigation,
  Compass,
  ShoppingBag,
  TrendingUp,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  Globe,
  Layers,
} from "lucide-react"
import {
  WHY_INVEST_SECTION,
  PROJECT_COMPARISON_TABLE,
  FLAGSHIP_PROJECTS,
} from "@/constants/silverstoneData"
import { useLanguage } from "@/context/LanguageContext"
import { EditorialHeading } from "@/components/ui/editorial-heading"
import { ArchitecturalReveal } from "@/components/ui/architectural-reveal"
import { BlurFade } from "@/components/magicui/blur-fade"
import Magnet from "@/components/Magnet"

interface WhyInvestSectionProps {
  onOpenPlotModal: (projectId: string) => void
  onOpenVisitModal: (project?: string) => void
}

export function WhyInvestSection({
  onOpenPlotModal,
  onOpenVisitModal,
}: WhyInvestSectionProps) {
  const { lang, setLang, t } = useLanguage()

  const ICON_MAP = {
    Building: Building2,
    Road: Milestone,
    Navigation: Navigation,
    Compass: Compass,
    ShoppingBag: ShoppingBag,
    TrendingUp: TrendingUp,
  }

  return (
    <section id="why-invest" className="py-20 lg:py-28 bg-[#FAF8F5] relative border-b border-[#E6E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* ========================================================= */}
        {/* 1. SECTION HEADER WITH BILINGUAL QUESTION HOOK            */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <ArchitecturalReveal direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4EA] border border-[#DFC8A7] text-[11px] font-bold tracking-[0.2em] uppercase text-[#B4833E]">
                <span>{lang === "GU" ? WHY_INVEST_SECTION.eyebrowGu : WHY_INVEST_SECTION.eyebrowEn}</span>
              </div>
            </ArchitecturalReveal>

            {/* Headline: Max 8 words */}
            <EditorialHeading
              text={
                lang === "GU"
                  ? "સુરતનું આગામી પોશ રેસિડેન્શિયલ ડેસ્ટિનેશન"
                  : "Surat's Next Posh Residential Destination"
              }
              tag="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#18181B] tracking-tight leading-[1.14]"
              highlightWords={["Posh", "Destination", "પોશ"]}
            />

            {/* Subhead: Max 15 words */}
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
              {lang === "GU" ? WHY_INVEST_SECTION.subheadGu : WHY_INVEST_SECTION.subheadEn}
            </p>
          </div>

          {/* Sleek Language Switcher Button */}
          <ArchitecturalReveal direction="up" delay={0.1}>
            <div className="inline-flex items-center p-1 rounded-full bg-white border border-[#DFC8A7] shadow-sm">
              <button
                type="button"
                onClick={() => setLang("EN")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  lang === "EN"
                    ? "bg-[#18181B] text-white shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                EN (English)
              </button>
              <button
                type="button"
                onClick={() => setLang("GU")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  lang === "GU"
                    ? "bg-[#B4833E] text-white shadow-xs"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                ગુજરાતી
              </button>
            </div>
          </ArchitecturalReveal>
        </div>

        {/* ========================================================= */}
        {/* 2. THE #1 BUYER QUESTION CALLOUT CARD                     */}
        {/* ========================================================= */}
        <ArchitecturalReveal delay={0.15}>
          <div className="relative p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#18181B] via-[#27272A] to-[#18181B] text-white border border-stone-700 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#B4833E]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#DFC8A7] flex items-center gap-1.5">
                  <Sparkles className="size-3 text-[#B4833E]" />
                  <span>{t("THE #1 SURAT BUYER QUESTION ANSWERED", "સુરતના ઘર ખરીદનારનો મુખ્ય સવાલ")}</span>
                </span>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-snug">
                  {lang === "GU" ? WHY_INVEST_SECTION.questionGu : WHY_INVEST_SECTION.questionEn}
                </h3>
                <p className="text-xs text-stone-300">
                  {t(
                    "Here is why the 300' 2nd Ring Road & New Pal Gauravpath corridor is Surat's highest growth belt:",
                    "આ રહ્યા 6 નક્કર કારણો કે શા માટે આ એરિયામાં અત્યારે રોકાણ કરવું શ્રેષ્ઠ નિર્ણય છે:"
                  )}
                </p>
              </div>

              <div className="shrink-0">
                <Magnet padding={20} magnetStrength={0.2} disabled={false}>
                  <button
                    onClick={() => onOpenVisitModal("New TP Area Inspection")}
                    className="bg-[#B4833E] hover:bg-[#8F642B] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg transition-transform active:scale-95 cursor-pointer flex items-center gap-2 whitespace-nowrap"
                  >
                    <span>{t("Schedule Site Inspection", "રૂબરૂ સાઇટ વિઝિટ બુક કરો")}</span>
                    <ArrowRight className="size-4" />
                  </button>
                </Magnet>
              </div>
            </div>
          </div>
        </ArchitecturalReveal>

        {/* ========================================================= */}
        {/* 3. THE 6 VISUAL PROOF CARDS (Bento Style)                 */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_INVEST_SECTION.proofCards.map((card, idx) => {
            const IconComponent = ICON_MAP[card.iconName] || Building2
            return (
              <BlurFade key={card.id} delay={idx * 0.06} duration={0.4}>
                <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E6E0D6] shadow-xs hover:shadow-xl hover:border-[#B4833E]/60 transition-all duration-300 group flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="size-11 rounded-2xl bg-[#FAF4EA] border border-[#DFC8A7] flex items-center justify-center text-[#B4833E] shadow-xs group-hover:scale-105 transition-transform">
                        <IconComponent className="size-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#B4833E] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#E6E0D6]">
                        {lang === "GU" ? card.badgeGu : card.badge}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl font-bold text-stone-900 tracking-tight group-hover:text-[#B4833E] transition-colors">
                      {lang === "GU" ? card.titleGu : card.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {lang === "GU" ? card.descGu : card.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-stone-500">
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle2 className="size-3.5 text-emerald-600" />
                      {t("Live On Ground", "ગ્રાઉન્ડ પર કાર્યરત")}
                    </span>
                    <span className="text-[#B4833E] font-bold">01 - 06</span>
                  </div>
                </div>
              </BlurFade>
            )
          })}
        </div>

        {/* ========================================================= */}
        {/* 4. SIDE-BY-SIDE PROJECT SELECTOR TABLE                    */}
        {/* ========================================================= */}
        <div className="space-y-8 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B4833E]">
              {t("QUICK DECISION TOOL", "ઝડપી નિર્ણય ટૂલ")}
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">
              {t("Find Your Ideal Plot in 10 Seconds", "૧૦ સેકન્ડમાં તમારો આદર્શ પ્લોટ પસંદ કરો")}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              {t(
                "Compare plot sizes, frontages, and starting prices across our 4 ready developments in Surat:",
                "સુરતમાં અમારા 4 પ્રોજેક્ટ્સ વચ્ચે પ્લોટ સાઇઝ, ફ્રન્ટ અને કિંમતની સીધી સરખામણી:"
              )}
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-[#E6E0D6] shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-stone-100 border-b border-[#E6E0D6]">
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-stone-600 text-[11px] min-w-[160px]">
                      {t("Specification", "વિગત")}
                    </th>
                    <th className="p-4 sm:p-5 font-serif font-bold text-stone-900 text-sm sm:text-base border-l border-[#E6E0D6] min-w-[150px]">
                      Applewood
                      <span className="block text-[10px] font-sans font-bold text-[#B4833E]">₹42.27 Lakh*</span>
                    </th>
                    <th className="p-4 sm:p-5 font-serif font-bold text-stone-900 text-sm sm:text-base border-l border-[#E6E0D6] min-w-[150px]">
                      Springhill Homes
                      <span className="block text-[10px] font-sans font-bold text-[#B4833E]">₹47.00 Lakh*</span>
                    </th>
                    <th className="p-4 sm:p-5 font-serif font-bold text-stone-900 text-sm sm:text-base border-l border-[#E6E0D6] min-w-[150px]">
                      Rajmahel
                      <span className="block text-[10px] font-sans font-bold text-[#B4833E]">₹72.80 Lakh*</span>
                    </th>
                    <th className="p-4 sm:p-5 font-serif font-bold text-stone-900 text-sm sm:text-base border-l border-[#E6E0D6] min-w-[150px]">
                      Mahel
                      <span className="block text-[10px] font-sans font-bold text-[#B4833E]">₹72.80 Lakh*</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6E0D6]">
                  {PROJECT_COMPARISON_TABLE.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className="hover:bg-[#FAF8F5]/80 transition-colors"
                    >
                      <td className="p-4 sm:p-5 font-bold text-stone-800 bg-stone-50/50">
                        {lang === "GU" ? row.parameterGu : row.parameter}
                      </td>
                      <td className="p-4 sm:p-5 border-l border-[#E6E0D6] text-stone-700 font-medium">
                        {row.applewood}
                      </td>
                      <td className="p-4 sm:p-5 border-l border-[#E6E0D6] text-stone-700 font-medium">
                        {row.springhill}
                      </td>
                      <td className="p-4 sm:p-5 border-l border-[#E6E0D6] text-stone-700 font-medium">
                        {row.rajmahel}
                      </td>
                      <td className="p-4 sm:p-5 border-l border-[#E6E0D6] text-stone-700 font-medium">
                        {row.mahel}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-[#FAF4EA] border-t border-[#DFC8A7]">
                    <td className="p-4 sm:p-5 font-bold text-stone-900 text-xs uppercase tracking-wider">
                      {t("Direct Actions", "તાત્કાલિક એક્શન")}
                    </td>
                    <td className="p-4 sm:p-5 border-l border-[#DFC8A7]">
                      <button
                        onClick={() => onOpenPlotModal("applewood")}
                        className="w-full bg-[#B4833E] hover:bg-[#8F642B] text-white text-[11px] font-bold py-2 px-3 rounded-lg uppercase tracking-wider shadow-xs transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1"
                      >
                        <span>{t("Plot Layout", "પ્લોટ લેઆઉટ")}</span>
                        <ArrowRight className="size-3" />
                      </button>
                    </td>
                    <td className="p-4 sm:p-5 border-l border-[#DFC8A7]">
                      <button
                        onClick={() => onOpenPlotModal("spring-hill")}
                        className="w-full bg-[#B4833E] hover:bg-[#8F642B] text-white text-[11px] font-bold py-2 px-3 rounded-lg uppercase tracking-wider shadow-xs transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1"
                      >
                        <span>{t("Plot Layout", "પ્લોટ લેઆઉટ")}</span>
                        <ArrowRight className="size-3" />
                      </button>
                    </td>
                    <td className="p-4 sm:p-5 border-l border-[#DFC8A7]">
                      <button
                        onClick={() => onOpenPlotModal("raj-mahel")}
                        className="w-full bg-[#B4833E] hover:bg-[#8F642B] text-white text-[11px] font-bold py-2 px-3 rounded-lg uppercase tracking-wider shadow-xs transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1"
                      >
                        <span>{t("Plot Layout", "પ્લોટ લેઆઉટ")}</span>
                        <ArrowRight className="size-3" />
                      </button>
                    </td>
                    <td className="p-4 sm:p-5 border-l border-[#DFC8A7]">
                      <button
                        onClick={() => onOpenPlotModal("mahel-bungalows")}
                        className="w-full bg-[#B4833E] hover:bg-[#8F642B] text-white text-[11px] font-bold py-2 px-3 rounded-lg uppercase tracking-wider shadow-xs transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1"
                      >
                        <span>{t("Plot Layout", "પ્લોટ લેઆઉટ")}</span>
                        <ArrowRight className="size-3" />
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default WhyInvestSection
