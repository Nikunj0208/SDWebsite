"use client"

import { TRUST_METRICS } from "@/constants/silverstoneData"
import { useLanguage } from "@/context/LanguageContext"
import { ArchitecturalReveal } from "@/components/ui/architectural-reveal"
import { BlurFade } from "@/components/magicui/blur-fade"

export function TrustMetricsBar() {
  const { lang } = useLanguage()

  return (
    <div className="relative z-30 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-white border border-[#DFC8A7] shadow-2xl p-4 sm:p-6 lg:p-7 backdrop-blur-xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#E6E0D6]">
          {TRUST_METRICS.map((metric, idx) => (
            <BlurFade key={idx} delay={idx * 0.05} duration={0.35}>
              <div
                className={`flex flex-col justify-center text-center px-2 py-2 sm:py-0 ${
                  idx > 0 && idx % 2 === 0 ? "pt-3 sm:pt-0" : ""
                }`}
              >
                <div
                  className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none ${
                    metric.highlight ? "text-[#B4833E]" : "text-stone-900"
                  }`}
                >
                  {metric.value}
                </div>
                <div className="text-xs font-bold text-stone-900 mt-1.5 leading-tight">
                  {lang === "GU" ? metric.titleGu : metric.title}
                </div>
                <div className="text-[10px] text-stone-500 font-medium mt-0.5 leading-tight">
                  {lang === "GU" ? metric.subtitleGu : metric.subtitle}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  )
}
export default TrustMetricsBar
