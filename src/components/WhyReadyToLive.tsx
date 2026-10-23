"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer } from "@/components/ui/motion"
import {
  Check,
  X,
  ShieldCheck,
  Sparkles,
  Calendar,
  Building,
  HeartHandshake,
  Car,
  Shield,
  Activity,
  Smile,
  Trees,
  Sun,
  Award,
  ArrowRight,
  BadgePercent,
  CheckCircle2,
} from "lucide-react"

interface WhyReadyToLiveProps {
  onOpenVisitModal?: (project?: string) => void
}

export function WhyReadyToLive({ onOpenVisitModal }: WhyReadyToLiveProps) {
  // Shreepad-Style Value Proposition Cards with Giant Watermark Numbers (01, 02, 03)
  const VALUE_PILLARS = [
    {
      num: "01",
      title: "Zero Construction Risk",
      description:
        "Every Silverstone residence is 100% complete with ready BU Permission and Occupancy Certificate. Zero project delays, zero contractor speculation, and zero layout surprises.",
      icon: ShieldCheck,
      badge: "BU & OC Certified",
    },
    {
      num: "02",
      title: "Zero Rent & EMI Overlap",
      description:
        "Eliminate the painful financial double-drain of paying heavy monthly house rent and home loan interest simultaneously. Move in immediately on day one.",
      icon: BadgePercent,
      badge: "0% GST on Ready BU",
    },
    {
      num: "03",
      title: "Physical Reality Verification",
      description:
        "Step inside your actual home. Touch the imported tiles, verify verified carpet dimensions, test cross-breeze, and inspect East-West Vastu alignment with your consultant.",
      icon: Sparkles,
      badge: "100% Vastu Compliant",
    },
  ]

  const COMPARISON_ITEMS = [
    {
      feature: "What You Actually Inspect",
      underConstruction: "Paper 3D renders and empty construction pits. Actual sunlight, ceiling height, and tiling finish remain a gamble.",
      silverstone: "Walk through the exact finished residence. Physically verify natural ventilation, room acoustics, and verified carpet area.",
    },
    {
      feature: "Possession & Move-In Timeline",
      underConstruction: "3 to 5 years of unpredictable delays, contractor supply-chain excuses, and recurring project deadline extensions.",
      silverstone: "Immediate possession today. Complete BU Permission, Occupancy Certificate, and Title Clear registry available.",
    },
    {
      feature: "Double Financial Burden (Rent + EMI)",
      underConstruction: "Heavy dual expense: Paying monthly house rent and bank loan EMIs simultaneously for 48+ months.",
      silverstone: "Zero rent overlap. Move in on day one; your monthly payment directly builds equity in your family's real home.",
    },
    {
      feature: "GST Tax Burden",
      underConstruction: "Extra 5% to 12% GST levied on under-construction bookings, adding ₹3 Lakh to ₹10 Lakh in non-refundable taxes.",
      silverstone: "0% GST on 100% completed BU/OC ready inventory. Save hundreds of thousands of rupees immediately.",
    },
    {
      feature: "Campus Life & Operational Amenities",
      underConstruction: "Clubhouse and parks promised in 'Phase 3' or 'Phase 4', often compromised or delayed indefinitely.",
      silverstone: "Active, operational clubhouse, landscaped senior deck, kids play turf, and security gates running daily.",
    },
    {
      feature: "Carpet Area & Vastu Verification",
      underConstruction: "Theoretical blueprint dimensions. True corner layouts and Vastu energy cannot be tested before purchase.",
      silverstone: "100% verified physical carpet area. Walk through with your own Vastu consultant before committing.",
    },
  ]

  const BENTO_AMENITIES = [
    {
      id: "mandir",
      title: "Jain & Hindu Mandir Complex",
      tagline: "Spiritual Sanctuary & Daily Meditation Lawns",
      category: "Spiritual Calm",
      description:
        "Dedicated serene worship complex surrounded by peaceful reflection gardens, ensuring a tranquil start to every morning.",
      image: "/images/rajmahel/fountain.jpg",
      className: "md:col-span-2 md:row-span-1",
      icon: Sun,
    },
    {
      id: "senior-deck",
      title: "Senior Citizen Sit-Out & Reflexology Track",
      tagline: "Safe, Peaceful Evening Socialization",
      category: "Elders First",
      description:
        "Shaded gazebos and anti-skid walking circuits designed for parents and grandparents to relax in comfort.",
      image: "/images/rajmahel/03 Garden.jpg",
      className: "md:col-span-1 md:row-span-1",
      icon: Trees,
    },
    {
      id: "gym-clubhouse",
      title: "Equipped Clubhouse & Indoor Games",
      tagline: "Modern Health Club & Community Hall",
      category: "Fitness & Leisure",
      description:
        "Air-conditioned fitness center, table tennis, carrom lounge, and multipurpose private celebration banquet hall.",
      image: "/images/mahel/banquet.jpg",
      className: "md:col-span-1 md:row-span-1",
      icon: Activity,
    },
    {
      id: "kids-play",
      title: "Children's Safe Play Zone (Vehicle-Free)",
      tagline: "100% Safe Rubberized Podium Play Park",
      category: "Kids Priority",
      description:
        "Dedicated vehicle-free podium with safety swings, climbing fixtures, and open turf for unrestricted childhood joy.",
      image: "/images/mahel/play-area.jpg",
      className: "md:col-span-2 md:row-span-1",
      icon: Smile,
    },
    {
      id: "cctv-security",
      title: "3-Tier 24/7 CCTV & RFID Boom Barrier",
      tagline: "Comprehensive Round-the-Clock Protection",
      category: "100% Secure",
      description:
        "Main security checkpoint with automated boom barriers, smart visitor intercom, and perimeter infrared surveillance.",
      image: "/images/rajmahel/entrance-gate.jpg",
      className: "md:col-span-1 md:row-span-1",
      icon: Shield,
    },
    {
      id: "ev-parking",
      title: "Allotted Covered EV-Ready Parking",
      tagline: "Future-Ready Electric Mobility Bays",
      category: "Future Mobility",
      description:
        "Wide allotted paved parking slots equipped with dedicated electric vehicle charging points and easy vehicular turning radii.",
      image: "/images/mahel/terrace.jpg",
      className: "md:col-span-2 md:row-span-1",
      icon: Car,
    },
  ]

  const handleBookVisit = () => {
    if (onOpenVisitModal) {
      onOpenVisitModal("Ready to Live Inspection")
    } else {
      const el = document.querySelector("#contact")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="why-ready-to-live" className="py-20 lg:py-28 bg-[#FAF8F5] relative border-b border-[#E6E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* ========================================================= */}
        {/* 1. SHREEPAD-STYLE 3-COLUMN VALUE PILLARS (01, 02, 03)     */}
        {/* ========================================================= */}
        <div className="space-y-10">
          <FadeIn direction="up">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B4833E]">
                WHY CHOOSE SILVERSTONE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#18181B] tracking-tight">
                The Proven Advantage of Ready to Live
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUE_PILLARS.map((pillar, idx) => {
              const IconComponent = pillar.icon
              return (
                <FadeIn key={pillar.num} delay={0.1 * idx} duration={0.6}>
                  <div className="relative p-7 rounded-3xl bg-white border border-[#E6E0D6] shadow-xs hover:shadow-xl hover:border-[#B4833E]/60 transition-all duration-300 group overflow-hidden flex flex-col justify-between h-full">
                    {/* Watermark Number in Outline (Shreepad Style) */}
                    <span className="absolute top-2 right-4 text-6xl sm:text-7xl font-serif font-black text-stone-100 select-none pointer-events-none group-hover:text-[#B4833E]/10 transition-colors">
                      {pillar.num}
                    </span>

                    <div className="relative z-10 space-y-4">
                      <div className="size-12 rounded-2xl bg-[#FAF4EA] border border-[#DFC8A7] flex items-center justify-center text-[#B4833E] shadow-xs">
                        <IconComponent className="size-6" />
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                        {pillar.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="relative z-10 pt-4 mt-4 border-t border-stone-100">
                      <span className="text-[11px] font-bold uppercase text-[#B4833E]">
                        {pillar.badge}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. THE SIDE-BY-SIDE COMPARISON TABLE                      */}
        {/* ========================================================= */}
        <div className="space-y-10">
          <FadeIn direction="up">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B4833E]">
                DECISION MATRIX
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#18181B] tracking-tight">
                Ready to Live vs. 4-Year Construction Wait
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-3xl bg-white border border-[#E6E0D6] shadow-md overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#E6E0D6] bg-stone-100 text-xs font-bold uppercase tracking-wider">
                <div className="p-4 md:col-span-4 text-stone-700">
                  Parameter
                </div>
                <div className="p-4 md:col-span-4 text-rose-800 bg-rose-50/60 md:border-l border-[#E6E0D6] flex items-center gap-2">
                  <X className="size-4 text-rose-600 shrink-0" />
                  <span>Typical Under-Construction Booking</span>
                </div>
                <div className="p-4 md:col-span-4 text-emerald-900 bg-emerald-50/70 md:border-l border-[#E6E0D6] flex items-center gap-2">
                  <Check className="size-4 text-emerald-600 shrink-0 font-bold" />
                  <span>Silverstone Ready to Live</span>
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-[#E6E0D6]">
                {COMPARISON_ITEMS.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 md:grid-cols-12 text-xs sm:text-sm hover:bg-[#FAF8F5]/80 transition-colors"
                  >
                    <div className="p-4 sm:p-5 md:col-span-4 font-serif font-bold text-stone-900 text-sm sm:text-base flex items-center">
                      {item.feature}
                    </div>

                    <div className="p-4 sm:p-5 md:col-span-4 bg-rose-50/20 md:border-l border-[#E6E0D6] text-stone-600 flex items-start gap-2.5">
                      <span className="p-1 rounded-md bg-rose-100 text-rose-700 shrink-0 mt-0.5">
                        <X className="size-3.5" />
                      </span>
                      <span className="leading-relaxed">{item.underConstruction}</span>
                    </div>

                    <div className="p-4 sm:p-5 md:col-span-4 bg-emerald-50/30 md:border-l border-[#E6E0D6] text-stone-800 font-medium flex items-start gap-2.5">
                      <span className="p-1 rounded-md bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                        <Check className="size-3.5 font-bold" />
                      </span>
                      <span className="leading-relaxed">{item.silverstone}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Strip */}
              <div className="p-5 sm:p-6 bg-[#FAF4EA] border-t border-[#DFC8A7] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-white border border-[#DFC8A7] flex items-center justify-center text-[#B4833E] shrink-0">
                    <BadgePercent className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base leading-tight">
                      Zero GST on Ready Inventory
                    </h4>
                    <p className="text-xs text-stone-600">
                      Under-construction attracts 5% to 12% extra GST. Ready homes with BU/OC attract 0% GST.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleBookVisit}
                  className="shrink-0 bg-[#B4833E] hover:bg-[#8F642B] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-3 rounded-full shadow-sm transition-transform active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="size-4" />
                  <span>Verify at Actual Site</span>
                </button>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ========================================================= */}
        {/* 3. DELIVERED LIFESTYLE AMENITIES BENTO GRID               */}
        {/* ========================================================= */}
        <div id="amenities" className="space-y-10">
          <FadeIn direction="up">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B4833E]">
                DELIVERED LIFESTYLE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#18181B] tracking-tight">
                Operational Amenities for Daily Joy
              </h2>
              <p className="text-sm text-stone-600">
                Lush senior decks, vehicle-free play podiums, and grand temple complexes already in active use by 500+ settled families.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENTO_AMENITIES.map((amenity, idx) => {
              const IconComp = amenity.icon
              return (
                <FadeIn key={amenity.id} delay={0.08 * idx} duration={0.6} className={amenity.className}>
                  <div className="group rounded-3xl bg-white border border-[#E6E0D6] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#B4833E]/50 transition-all duration-500 flex flex-col justify-between h-full">
                    {/* Amenity Image Strip */}
                    <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-stone-100">
                      <Image
                        src={amenity.image}
                        alt={amenity.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold tracking-wider uppercase text-stone-900 border border-stone-200 shadow-xs">
                          {amenity.category}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/70 backdrop-blur-md text-emerald-300 border border-emerald-400/40 text-[10px] font-bold">
                        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live & Active</span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="size-6 rounded-lg bg-[#B4833E] text-white flex items-center justify-center">
                            <IconComp className="size-3.5" />
                          </div>
                          <span className="text-[11px] font-semibold text-[#DFC8A7]">
                            {amenity.tagline}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                          {amenity.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-2">
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {amenity.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
export default WhyReadyToLive
