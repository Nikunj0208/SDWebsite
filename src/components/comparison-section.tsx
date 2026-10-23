"use client"

import { BlurFade } from "@/components/magicui/blur-fade"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { COMPARISON_POINTS } from "@/data/site-data"
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CalendarCheck
} from "lucide-react"

interface ComparisonSectionProps {
  onOpenVisitModal: () => void
}

export function ComparisonSection({ onOpenVisitModal }: ComparisonSectionProps) {
  return (
    <section id="why-ready-to-live" className="py-20 md:py-28 bg-[#F3EFEA] border-y border-[#E6E0D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <BlurFade delay={0.05} yOffset={10}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E6E0D6] shadow-sm mb-3">
              <Sparkles className="size-3.5 text-[#B4833E]" />
              <span className="text-xs font-semibold text-[#18181B] uppercase tracking-wider">
                Buyer Psychology & Protection
              </span>
            </div>
          </BlurFade>

          <BlurFade delay={0.1} yOffset={12}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#18181B] tracking-tight">
              Why Risk Years on Empty Promises? <br />
              <span className="text-[#B4833E] italic">Choose Silverstone Ready Certainty.</span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.15} yOffset={12}>
            <p className="mt-3 text-sm sm:text-base text-[#57534E] leading-relaxed">
              When purchasing a home for your family in Surat, don’t gamble on 3D promises, contractor inflation, and years of endless rent. Compare the truth:
            </p>
          </BlurFade>
        </div>

        {/* Comparison Matrix Table / Cards */}
        <BlurFade delay={0.2} yOffset={16}>
          <div className="bg-white rounded-3xl border border-[#E6E0D6] shadow-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#E6E0D6] bg-[#FAF8F5]">
              <div className="md:col-span-4 p-5 sm:p-6 font-serif font-bold text-lg text-[#18181B] flex items-center">
                Critical Evaluation Parameter
              </div>
              <div className="md:col-span-4 p-5 sm:p-6 bg-red-50/40 border-t md:border-t-0 md:border-l border-[#E6E0D6] flex items-center gap-2">
                <AlertTriangle className="size-5 text-red-600 shrink-0" />
                <div>
                  <span className="text-sm font-bold text-red-900 block">
                    Under-Construction Risk
                  </span>
                  <span className="text-[11px] text-red-700">
                    Typical builder promises in Surat
                  </span>
                </div>
              </div>
              <div className="md:col-span-4 p-5 sm:p-6 bg-[#DCFCE7]/60 border-t md:border-t-0 md:border-l border-[#86EFAC] flex items-center gap-2">
                <ShieldCheck className="size-5 text-[#15803D] shrink-0" />
                <div>
                  <span className="text-sm font-bold text-[#15803D] block">
                    Silverstone "Ready to Live"
                  </span>
                  <span className="text-[11px] text-[#166534] font-medium">
                    100% physically delivered reality
                  </span>
                </div>
              </div>
            </div>

            {/* Matrix Rows */}
            <div className="divide-y divide-[#E6E0D6]">
              {COMPARISON_POINTS.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 transition-colors hover:bg-[#FAF8F5]/50"
                >
                  {/* Parameter Column */}
                  <div className="md:col-span-4 p-5 sm:p-6 flex flex-col justify-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#B4833E] mb-1">
                      Check #{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#18181B]">
                      {item.criteria}
                    </h3>
                  </div>

                  {/* Under Construction Column */}
                  <div className="md:col-span-4 p-5 sm:p-6 bg-red-50/20 md:border-l border-[#E6E0D6] flex items-start gap-3">
                    <XCircle className="size-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      {item.underConstruction}
                    </p>
                  </div>

                  {/* Silverstone Certainty Column */}
                  <div className="md:col-span-4 p-5 sm:p-6 bg-[#DCFCE7]/20 md:border-l border-[#86EFAC] flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-[#15803D] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#18181B] font-medium leading-relaxed">
                      {item.silverstone}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Matrix Bottom Banner */}
            <div className="p-6 bg-gradient-to-r from-[#18181B] to-[#27272A] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="size-10 rounded-full bg-[#B4833E] text-white flex items-center justify-center shrink-0">
                  <CalendarCheck className="size-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-white">
                    Experience It With Your Own Family Before You Pay a Single Rupee
                  </h4>
                  <p className="text-xs text-zinc-300">
                    Book a free, guided walk-through of the actual finished flat and campus today.
                  </p>
                </div>
              </div>

              <Button
                onClick={onOpenVisitModal}
                className="bg-[#B4833E] hover:bg-[#8F642B] text-white font-medium px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-md shrink-0 cursor-pointer min-h-12"
              >
                <span>Book Actual Flat Visit</span>
                <ArrowRight className="size-3.5 ml-1.5" />
              </Button>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
