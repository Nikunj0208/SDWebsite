"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { BlurFade } from "@/components/magicui/blur-fade"
import {
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Compass,
  ArrowRight,
  Search,
  Sparkles,
  Play,
  Home,
  MapPin,
  Layers
} from "lucide-react"

interface HeroSectionProps {
  onOpenVisitModal: (project?: string) => void
  onFilterChange: (filters: { locality: string; configuration: string; status: string }) => void
}

export function HeroSection({ onOpenVisitModal, onFilterChange }: HeroSectionProps) {
  const [selectedLocality, setSelectedLocality] = useState("all")
  const [selectedConfig, setSelectedConfig] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const handleSearch = () => {
    onFilterChange({
      locality: selectedLocality,
      configuration: selectedConfig,
      status: selectedStatus,
    })
    const projectsElem = document.querySelector("#projects")
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF8F5]">
      {/* Decorative ambient background accents */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#B4833E]/10 via-[#F3EFEA] to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#15803D]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <BlurFade delay={0.05} yOffset={8}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCFCE7] border border-[#86EFAC] shadow-sm">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#15803D] opacity-75" />
                  <span className="relative inline-flex rounded-full size-2 bg-[#15803D]" />
                </span>
                <span className="text-xs font-semibold text-[#15803D] tracking-wide">
                  100% Complete • Ready to Live Residences in Surat
                </span>
              </div>
            </BlurFade>

            <BlurFade delay={0.1} yOffset={14}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#18181B] tracking-tight leading-[1.12]">
                Inspect the actual home. Feel the breeze. <br className="hidden sm:inline" />
                <span className="text-[#B4833E] italic">Move in today</span> with zero waiting.
              </h1>
            </BlurFade>

            <BlurFade delay={0.15} yOffset={14}>
              <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl">
                No 3D render illusions. No contractor delay risks. Walk through your actual ready-to-possess residence in Surat’s fastest growing Pal Gauravpath & 2nd Ring Road corridor with 100% BU Permission, ready OC, and clear titles.
              </p>
            </BlurFade>

            {/* CTAs */}
            <BlurFade delay={0.2} yOffset={14}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Button
                  onClick={() => onOpenVisitModal()}
                  className="bg-[#B4833E] hover:bg-[#8F642B] text-white font-medium px-7 py-3.5 rounded-xl text-base shadow-lg shadow-[#B4833E]/20 transition-all cursor-pointer min-h-12 flex items-center justify-center gap-2"
                >
                  <Calendar className="size-4" />
                  <span>Book Actual Flat Visit</span>
                  <ArrowRight className="size-4 ml-1" />
                </Button>

                <a
                  href="#reality-showcase"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#E6E0D6] bg-white text-[#18181B] hover:bg-[#F3EFEA] hover:border-[#B4833E]/40 font-semibold text-sm transition-all min-h-12 shadow-sm"
                >
                  <Play className="size-3.5 text-[#B4833E] fill-[#B4833E]" />
                  <span>Watch Actual Campus Tour</span>
                </a>
              </div>
            </BlurFade>

            {/* Trust Highlights Checklist */}
            <BlurFade delay={0.25} yOffset={10}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#E6E0D6]/80 text-xs text-[#57534E]">
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="size-4 text-[#15803D] shrink-0" />
                  <span>Instant BU & OC Handover</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="size-4 text-[#15803D] shrink-0" />
                  <span>100% Vastu Shastra Compliant</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium col-span-2 sm:col-span-1">
                  <CheckCircle2 className="size-4 text-[#15803D] shrink-0" />
                  <span>Zero Rent & EMI Overlap</span>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right Column: Visual Luxury Preview Card */}
          <div className="lg:col-span-5 relative">
            <BlurFade delay={0.2} yOffset={18}>
              <div className="relative rounded-3xl overflow-hidden border border-[#E6E0D6] shadow-2xl bg-white p-2">
                <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/springhill-campus.jpeg"
                    alt="Springhill Homes Ready to Live Campus in Surat"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Floating Ready Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-[#15803D] text-white hover:bg-[#15803D] border border-white/20 px-3 py-1 text-xs font-semibold shadow-md flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-[#DCFCE7] animate-pulse" />
                      Live & Ready Campus
                    </Badge>
                  </div>

                  {/* Floating Price Pill */}
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E6E0D6] text-xs font-bold text-[#18181B] shadow-md">
                    Starting from <span className="text-[#B4833E]">₹42.27 L*</span>
                  </div>

                  {/* Bottom Caption Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E6E0D6] shadow-lg">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-serif font-bold text-base text-[#18181B] leading-tight">
                          Springhill & Raj Mahel Campuses
                        </h4>
                        <p className="text-xs text-[#57534E] mt-0.5 flex items-center gap-1">
                          <MapPin className="size-3 text-[#B4833E]" />
                          Pal Gauravpath & 2nd Ring Road, Surat
                        </p>
                      </div>
                      <Badge variant="outline" className="text-[11px] font-semibold border-[#B4833E] text-[#B4833E] shrink-0">
                        SMC Approved
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>

        {/* Quick Search & Filter Bar */}
        <BlurFade delay={0.3} yOffset={14}>
          <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-white border border-[#E6E0D6] shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-bold text-[#57534E] mb-1">
                  Surat Locality / Corridor
                </label>
                <div className="relative">
                  <MapPin className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#B4833E] pointer-events-none" />
                  <select
                    value={selectedLocality}
                    onChange={(e) => setSelectedLocality(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#E6E0D6] focus:border-[#B4833E] rounded-xl h-11 pl-9 pr-3 text-xs text-[#18181B] font-medium outline-none cursor-pointer"
                  >
                    <option value="all">All Surat Localities (Pal & Ring Road)</option>
                    <option value="pal">New Pal Gauravpath Corridor (1 KM)</option>
                    <option value="ring-road">Surat 2nd Ring Road (300 ft)</option>
                    <option value="dandi-road">New Dandi Road Area</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-bold text-[#57534E] mb-1">
                  Configuration
                </label>
                <div className="relative">
                  <Home className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#B4833E] pointer-events-none" />
                  <select
                    value={selectedConfig}
                    onChange={(e) => setSelectedConfig(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#E6E0D6] focus:border-[#B4833E] rounded-xl h-11 pl-9 pr-3 text-xs text-[#18181B] font-medium outline-none cursor-pointer"
                  >
                    <option value="all">All Configurations</option>
                    <option value="3bhk">3 BHK Luxury Row Houses</option>
                    <option value="4bhk">4 BHK Royal Residences</option>
                    <option value="5bhk">5 BHK Palace Villas</option>
                    <option value="plots">Bungalow & Row House Plots</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-bold text-[#57534E] mb-1">
                  Possession Status
                </label>
                <div className="relative">
                  <Layers className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#B4833E] pointer-events-none" />
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full bg-[#FAF8F5] border border-[#E6E0D6] focus:border-[#B4833E] rounded-xl h-11 pl-9 pr-3 text-xs text-[#18181B] font-medium outline-none cursor-pointer"
                  >
                    <option value="all">Ready to Live / All Units</option>
                    <option value="ready">Immediate Possession Ready</option>
                    <option value="sample">Furnished Sample House Open</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 sm:pt-0">
                <Button
                  onClick={handleSearch}
                  className="w-full bg-[#18181B] hover:bg-[#B4833E] text-white font-medium rounded-xl h-11 text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Search className="size-3.5 text-[#B4833E]" />
                  <span>Find Matching Homes</span>
                </Button>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Animated Trust Counters Strip */}
        <BlurFade delay={0.35} yOffset={14}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 rounded-2xl bg-[#F3EFEA] border border-[#E6E0D6]">
            <div className="text-center sm:text-left p-2">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#18181B] flex items-center justify-center sm:justify-start">
                <NumberTicker value={500} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#57534E] mt-1">
                Happy Families Settled in Surat
              </p>
              <span className="text-[11px] text-[#B4833E] font-medium block">
                Active Thriving Communities
              </span>
            </div>

            <div className="text-center sm:text-left p-2">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#15803D] flex items-center justify-center sm:justify-start">
                <NumberTicker value={100} suffix="%" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#57534E] mt-1">
                On-Time BU & OC Track Record
              </p>
              <span className="text-[11px] text-[#15803D] font-medium block">
                Zero Legal or Completion Delays
              </span>
            </div>

            <div className="text-center sm:text-left p-2">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#B4833E] flex items-center justify-center sm:justify-start">
                <span>0 Days</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#57534E] mt-1">
                Construction Waiting Risk
              </p>
              <span className="text-[11px] text-[#57534E] font-medium block">
                Inspect Real Flat & Possess Today
              </span>
            </div>

            <div className="text-center sm:text-left p-2">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#18181B] flex items-center justify-center sm:justify-start">
                <NumberTicker value={100} suffix="%" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#57534E] mt-1">
                Vastu-Compliant Layouts
              </p>
              <span className="text-[11px] text-[#B4833E] font-medium block">
                East & North Facing Entries
              </span>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
