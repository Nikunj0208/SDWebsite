"use client"

import { useState } from "react"
import Image from "next/image"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ImageComparison } from "@/components/aceternity/image-comparison"
import { REALITY_COMPARISONS } from "@/data/site-data"
import {
  CheckCircle2,
  Eye,
  Camera,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight
} from "lucide-react"

interface RealityShowcaseProps {
  onOpenVisitModal: () => void
}

export function RealityShowcase({ onOpenVisitModal }: RealityShowcaseProps) {
  const [selectedProofIndex, setSelectedProofIndex] = useState(0)
  const currentProof = REALITY_COMPARISONS[selectedProofIndex]

  return (
    <section id="reality-showcase" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <BlurFade delay={0.05} yOffset={10}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#DCFCE7] border border-[#86EFAC] text-xs font-semibold text-[#15803D] mb-3 shadow-sm">
              <Camera className="size-3.5 text-[#15803D]" />
              <span>100% Unfiltered On-Site Photography</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.1} yOffset={12}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#18181B] tracking-tight">
              Actual Site vs. 3D Render Reality Showcase
            </h2>
          </BlurFade>

          <BlurFade delay={0.15} yOffset={12}>
            <p className="mt-3 text-sm sm:text-base text-[#57534E] leading-relaxed">
              Our core brand tagline is <strong>"Ready to Live"</strong> for a reason. Compare what we envisioned in our architectural 3D models against what stands physically built and delivered on the ground in Surat.
            </p>
          </BlurFade>
        </div>

        {/* Filter Pills */}
        <BlurFade delay={0.2} yOffset={12}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {REALITY_COMPARISONS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedProofIndex(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer min-h-11 flex items-center gap-2 ${
                  selectedProofIndex === idx
                    ? "bg-[#18181B] text-white shadow-md scale-102"
                    : "bg-white text-[#57534E] border border-[#E6E0D6] hover:bg-[#F3EFEA] hover:text-[#18181B]"
                }`}
              >
                <CheckCircle2
                  className={`size-3.5 ${
                    selectedProofIndex === idx ? "text-[#DCFCE7]" : "text-[#15803D]"
                  }`}
                />
                <span>{item.category}</span>
              </button>
            ))}
          </div>
        </BlurFade>

        {/* Interactive Comparison Component */}
        <BlurFade delay={0.25} yOffset={16}>
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E6E0D6] shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E6E0D6] pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B4833E]">
                  {currentProof.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#18181B]">
                  {currentProof.title}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#57534E] bg-[#FAF8F5] px-3.5 py-1.5 rounded-xl border border-[#E6E0D6]">
                <MapPin className="size-3.5 text-[#B4833E]" />
                <span>{currentProof.location}</span>
              </div>
            </div>

            {/* The interactive split slider */}
            <ImageComparison
              key={currentProof.id}
              firstImage={currentProof.deliveredImage}
              secondImage={currentProof.renderImage}
              firstLabel="Delivered Actual Reality"
              secondLabel="Original 3D Design Concept"
              className="h-[360px] sm:h-[500px]"
            />

            {/* Description & Action */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed max-w-3xl">
                {currentProof.description}
              </p>

              <Button
                onClick={onOpenVisitModal}
                className="bg-[#B4833E] hover:bg-[#8F642B] text-white font-medium px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-md shrink-0 cursor-pointer min-h-12 flex items-center justify-center gap-2"
              >
                <Calendar className="size-4" />
                <span>Verify In Person</span>
                <ArrowRight className="size-3.5" />
              </Button>
            </div>
          </div>
        </BlurFade>

        {/* Proof Gallery Thumbnails */}
        <BlurFade delay={0.3} yOffset={14}>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {REALITY_COMPARISONS.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedProofIndex(idx)}
                className={`relative rounded-2xl overflow-hidden border p-1 cursor-pointer transition-all duration-300 ${
                  selectedProofIndex === idx
                    ? "border-[#B4833E] ring-2 ring-[#B4833E]/30 bg-white"
                    : "border-[#E6E0D6] bg-white hover:border-[#B4833E]/50"
                }`}
              >
                <div className="relative h-28 w-full rounded-xl overflow-hidden">
                  <Image
                    src={item.deliveredImage}
                    alt={item.title}
                    fill
                    sizes="250px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <span className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-white leading-tight">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
