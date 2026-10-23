"use client"

import { NumberTicker } from "@/components/magicui/number-ticker"
import { ShieldCheck, Users, Clock, Compass } from "lucide-react"

export function LegacyCounters() {
  return (
    <section id="counter" className="relative py-12 md:py-16 bg-[#F3EFEA] border-b border-[#E6E0D6] overflow-hidden">
      {/* Subtle blueprint pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#18181B 1px, transparent 1px), linear-gradient(90deg, #18181B 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Stat 1 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E6E0D6] shadow-sm flex flex-col justify-between group hover:border-[#B4833E]/50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B4833E]">
                SURAT RESIDENTS
              </span>
              <div className="size-8 rounded-lg bg-[#FAF8F5] border border-[#E6E0D6] flex items-center justify-center text-[#B4833E]">
                <Users className="size-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-5xl font-serif font-black text-[#18181B] tracking-tight flex items-baseline">
              <NumberTicker value={500} suffix="+" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-stone-700 mt-2">
              Happy Families Settled
            </p>
            <span className="text-[11px] text-stone-500 mt-0.5">
              Across 4 Live Surat Campuses
            </span>
          </div>

          {/* Stat 2 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E6E0D6] shadow-sm flex flex-col justify-between group hover:border-[#B4833E]/50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#15803D]">
                LEGAL CERTAINTY
              </span>
              <div className="size-8 rounded-lg bg-[#DCFCE7] border border-[#86EFAC] flex items-center justify-center text-[#15803D]">
                <ShieldCheck className="size-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-5xl font-serif font-black text-[#15803D] tracking-tight flex items-baseline">
              <NumberTicker value={100} suffix="%" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-stone-700 mt-2">
              On-Time BU & OC Clear
            </p>
            <span className="text-[11px] text-stone-500 mt-0.5">
              100% Title Clear & RERA Approved
            </span>
          </div>

          {/* Stat 3 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E6E0D6] shadow-sm flex flex-col justify-between group hover:border-[#B4833E]/50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B4833E]">
                READY TO LIVE
              </span>
              <div className="size-8 rounded-lg bg-[#FAF8F5] border border-[#E6E0D6] flex items-center justify-center text-[#B4833E]">
                <Clock className="size-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-5xl font-serif font-black text-[#18181B] tracking-tight flex items-baseline">
              <span>0 Days</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-stone-700 mt-2">
              Construction Waiting Risk
            </p>
            <span className="text-[11px] text-stone-500 mt-0.5">
              Inspect Finished Flat & Possess
            </span>
          </div>

          {/* Stat 4 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E6E0D6] shadow-sm flex flex-col justify-between group hover:border-[#B4833E]/50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#B4833E]">
                EAST-WEST VASTU
              </span>
              <div className="size-8 rounded-lg bg-[#FAF8F5] border border-[#E6E0D6] flex items-center justify-center text-[#B4833E]">
                <Compass className="size-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-5xl font-serif font-black text-[#18181B] tracking-tight flex items-baseline">
              <NumberTicker value={100} suffix="%" />
            </div>
            <p className="text-xs sm:text-sm font-semibold text-stone-700 mt-2">
              Vastu-Compliant Layouts
            </p>
            <span className="text-[11px] text-stone-500 mt-0.5">
              Optimal Prana, Light & Ventilation
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
