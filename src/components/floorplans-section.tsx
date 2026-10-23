"use client"

import { useState } from "react"
import Image from "next/image"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FLOOR_PLANS } from "@/data/site-data"
import {
  Compass,
  Maximize2,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ZoomIn,
  Layers
} from "lucide-react"

interface FloorplansSectionProps {
  onOpenPriceSheetModal: (projectName: string) => void
  selectedPlanId?: string
}

export function FloorplansSection({
  onOpenPriceSheetModal,
  selectedPlanId,
}: FloorplansSectionProps) {
  const [activeTab, setActiveTab] = useState(selectedPlanId || "3bhk-84")
  const [isZoomOpen, setIsZoomOpen] = useState(false)

  // Sync if prop changes
  const activePlan = FLOOR_PLANS.find((p) => p.id === (selectedPlanId || activeTab)) || FLOOR_PLANS[0]

  return (
    <section id="floor-plans" className="scroll-mt-24 py-20 md:py-28 bg-[#F3EFEA] border-y border-[#E6E0D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <BlurFade delay={0.05} yOffset={10}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E6E0D6] text-xs font-semibold text-[#18181B] mb-3 shadow-sm">
              <Compass className="size-3.5 text-[#B4833E]" />
              <span>Vastu-Certified Architectural Blueprints</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.1} yOffset={12}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#18181B] tracking-tight">
              Interactive Unit & Floor Plan Explorer
            </h2>
          </BlurFade>

          <BlurFade delay={0.15} yOffset={12}>
            <p className="mt-3 text-sm sm:text-base text-[#57534E] leading-relaxed">
              Every Silverstone blueprint is engineered for zero space wastage, maximum natural daylight cross-ventilation, and authentic Vastu Shastra alignment.
            </p>
          </BlurFade>
        </div>

        {/* Tab Selection Bar */}
        <BlurFade delay={0.2} yOffset={12}>
          <div className="flex justify-center mb-8">
            <div className="bg-white/90 backdrop-blur-md border border-[#E6E0D6] p-1.5 rounded-2xl shadow-md inline-flex flex-wrap justify-center gap-1.5">
              {FLOOR_PLANS.map((plan) => {
                const isActive = activePlan.id === plan.id
                return (
                  <button
                    key={plan.id}
                    onClick={() => setActiveTab(plan.id)}
                    className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer min-h-12 flex items-center gap-2 ${
                      isActive
                        ? "bg-[#18181B] text-white shadow-lg scale-102"
                        : "bg-transparent text-[#57534E] hover:text-[#18181B] hover:bg-[#FAF8F5]"
                    }`}
                  >
                    <Layers className={`size-3.5 ${isActive ? "text-[#B4833E]" : "text-[#57534E]"}`} />
                    <span>{plan.title.split("(")[0].trim()}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </BlurFade>

        {/* Plan Content Body */}
        <BlurFade key={activePlan.id} delay={0.1} yOffset={14}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white rounded-3xl p-6 sm:p-8 border border-[#E6E0D6] shadow-xl">
            {/* Blueprint Image Preview */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative h-[360px] sm:h-[480px] w-full rounded-2xl overflow-hidden border border-[#E6E0D6] bg-[#FAF8F5] group">
                <Image
                  src={activePlan.image}
                  alt={activePlan.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  priority
                />

                {/* Zoom Indicator Trigger */}
                <button
                  type="button"
                  onClick={() => setIsZoomOpen(true)}
                  className="absolute bottom-4 right-4 z-10 px-3.5 py-2 rounded-xl bg-[#18181B]/85 hover:bg-[#18181B] text-white text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 shadow-lg transition-all cursor-pointer"
                >
                  <ZoomIn className="size-3.5 text-[#B4833E]" />
                  <span>Enlarge Blueprint</span>
                </button>

                {/* Top Vastu Direction Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-[#FAF8F5]/95 backdrop-blur-md text-[#18181B] border border-[#E6E0D6] px-3 py-1.5 text-xs font-semibold shadow-sm flex items-center gap-1.5">
                    <Compass className="size-3.5 text-[#B4833E]" />
                    <span>{activePlan.facing}</span>
                  </Badge>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[#57534E] px-1">
                <span>*Verified physical carpet area measurements shown</span>
                <span className="font-semibold text-[#B4833E]">Architectural CAD Reference</span>
              </div>
            </div>

            {/* Dimensions & Specifications Breakdown */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833E]">
                    {activePlan.project}
                  </span>
                  <span className="size-1 rounded-full bg-[#E6E0D6]" />
                  <span className="text-xs text-[#57534E]">
                    {activePlan.plotArea}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight">
                  {activePlan.title}
                </h3>
              </div>

              {/* Quick Stats Pill Strip */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-[#E6E0D6]">
                <div>
                  <span className="text-[11px] font-bold uppercase text-[#57534E] block">
                    Super Built-Up Area
                  </span>
                  <span className="text-base font-bold text-[#18181B]">
                    {activePlan.superBuiltUp}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-[#57534E] block">
                    RERA Carpet Area
                  </span>
                  <span className="text-base font-bold text-[#15803D]">
                    {activePlan.carpetArea}
                  </span>
                </div>
              </div>

              {/* Room Dimension Breakdown Table */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#18181B] mb-2.5">
                  Room Dimension Breakdown (In Feet):
                </h4>
                <div className="divide-y divide-[#E6E0D6] border border-[#E6E0D6] rounded-xl overflow-hidden bg-white text-xs">
                  {activePlan.dimensions.map((dim, i) => (
                    <div key={i} className="p-3 flex items-center justify-between hover:bg-[#FAF8F5]">
                      <div>
                        <span className="font-semibold text-[#18181B] block">
                          {dim.room}
                        </span>
                        <span className="text-[11px] text-[#57534E]">
                          {dim.note}
                        </span>
                      </div>
                      <span className="font-mono font-bold text-[#B4833E] text-xs bg-[#FAF8F5] px-2.5 py-1 rounded-lg border border-[#E6E0D6]">
                        {dim.size}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vastu Shastra Assurance */}
              <div className="p-3.5 rounded-xl bg-[#DCFCE7]/50 border border-[#86EFAC] text-xs text-[#166534] flex items-start gap-2.5">
                <Sparkles className="size-4 text-[#15803D] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5 text-[#15803D]">
                    Vastu Shastra Blueprint Note:
                  </span>
                  <p className="text-[11px] leading-relaxed">
                    {activePlan.vastuNotes}
                  </p>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-2">
                <Button
                  onClick={() => onOpenPriceSheetModal(activePlan.project)}
                  className="w-full bg-[#15803D] hover:bg-[#166534] text-white font-medium py-3 rounded-xl min-h-12 text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageSquare className="size-4" />
                  <span>Get Exact Unit Price Sheet on WhatsApp</span>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>

      {/* Blueprint Fullscreen Modal */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsZoomOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden p-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E6E0D6]">
              <h4 className="font-serif font-bold text-lg text-[#18181B]">
                {activePlan.title} — Architectural Blueprint
              </h4>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg bg-[#FAF8F5] hover:bg-[#E6E0D6] cursor-pointer"
              >
                Close (ESC)
              </button>
            </div>
            <div className="relative h-[70vh] w-full mt-3">
              <Image
                src={activePlan.image}
                alt={activePlan.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
