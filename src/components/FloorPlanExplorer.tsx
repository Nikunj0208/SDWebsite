"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ARCHITECTURAL_EASE } from "@/components/ui/architectural-reveal"
import { BlurFade } from "@/components/magicui/blur-fade"
import Magnet from "@/components/Magnet"
import {
  Compass,
  Maximize2,
  CheckCircle2,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ZoomIn,
  Layers,
  Building,
  Check,
  X,
} from "lucide-react"

export interface PlanUnit {
  id: string
  projectKey: "spring-hill" | "raj-mahel" | "applewood-homes"
  projectName: string
  unitType: "3 BHK Royal" | "4 BHK Grand" | "Master Layout"
  title: string
  plotArea: string
  superBuiltUp: string
  carpetArea: string
  facing: string
  image: string
  dimensions: {
    room: string
    size: string
    note: string
  }[]
  vastuNotes: string
  startingPrice: string
}

export const EXPLORER_PLANS: PlanUnit[] = [
  // SPRING HILL
  {
    id: "springhill-3bhk",
    projectKey: "spring-hill",
    projectName: "Spring Hill",
    unitType: "3 BHK Royal",
    title: "3 BHK Royal Row House (84 Sq.Yd)",
    plotArea: "84 Sq. Yards (21'0\" Front Width)",
    superBuiltUp: "1,980 sq.ft.",
    carpetArea: "1,420 sq.ft.",
    facing: "East / North Facing (Vastu Compliant)",
    image: "/images/plans/3bhk-84sqyd-Spring Hills.jpg",
    startingPrice: "₹47 Lakhs*",
    dimensions: [
      { room: "Living & Dining Hall", size: "20'0\" x 13'6\"", note: "Natural cross-ventilation with balcony access" },
      { room: "Master Bedroom Suite", size: "14'0\" x 12'0\"", note: "Attached luxury bathroom & private dressing" },
      { room: "Modular Kitchen + Store", size: "11'0\" x 9'0\"", note: "Granite platform & dedicated utility yard" },
      { room: "Private Sit-Out Balcony", size: "15'0\" x 6'6\"", note: "Open-to-sky podium green view" },
    ],
    vastuNotes: "Main door facing East/North ensures continuous positive cosmic energy. Kitchen situated in Agni (South-East) zone.",
  },
  {
    id: "springhill-4bhk",
    projectKey: "spring-hill",
    projectName: "Spring Hill",
    unitType: "4 BHK Grand",
    title: "4 BHK Grand Residence (84 Sq.Yd)",
    plotArea: "84 Sq. Yards (21'0\" Front Width)",
    superBuiltUp: "2,450 sq.ft.",
    carpetArea: "1,820 sq.ft.",
    facing: "East-Facing Royal Entrance",
    image: "/images/plans/4bhk-84sqyd-Spring Hills.jpg",
    startingPrice: "₹56 Lakhs*",
    dimensions: [
      { room: "Double Height Living / Dining", size: "21'0\" x 14'0\"", note: "Grand architectural ceiling height" },
      { room: "Presidential Master Suite", size: "16'0\" x 13'0\"", note: "Walk-in wardrobe & master bathroom" },
      { room: "Kitchen + Dedicated Store", size: "12'0\" x 10'0\"", note: "Full modular layout with service balcony" },
      { room: "Panoramic Balcony & Terrace", size: "16'0\" x 7'0\"", note: "Scenic sunrise vantage" },
    ],
    vastuNotes: "Master Bedroom situated in South-West (Nairutya) for peace and prosperity. Open East balcony invites morning sunlight.",
  },
  {
    id: "springhill-master",
    projectKey: "spring-hill",
    projectName: "Spring Hill",
    unitType: "Master Layout",
    title: "Master Anchor Layout (124 Sq.Yd)",
    plotArea: "124 Sq. Yards (3-Side Open Anchor)",
    superBuiltUp: "3,100 sq.ft.",
    carpetArea: "2,350 sq.ft.",
    facing: "North-East Corner (Ishan Corner)",
    image: "/images/plans/124sqyd-Spring Hills.jpg",
    startingPrice: "₹68 Lakhs*",
    dimensions: [
      { room: "Wrap-Around Living & Dining", size: "24'0\" x 15'0\"", note: "Triple side open natural light exposure" },
      { room: "Royal Penthouse Suite", size: "18'0\" x 14'0\"", note: "Attached luxury bath with glass railing" },
      { room: "Chef's Kitchen + Store", size: "13'6\" x 10'0\"", note: "Breakfast island & dry pantry" },
      { room: "Covered Garden Balcony / Porch", size: "20'0\" x 8'0\"", note: "Dedicated car parking with EV point" },
    ],
    vastuNotes: "Rare 3-Side Open Ishan corner plot offering maximum positive prana flow and unhindered natural wind velocity.",
  },

  // RAJ MAHEL
  {
    id: "rajmahel-3bhk",
    projectKey: "raj-mahel",
    projectName: "Raj Mahel",
    unitType: "3 BHK Royal",
    title: "3 BHK Palace Villa (125 Sq.Yd)",
    plotArea: "125 Sq. Yards (28ft Wide Opening)",
    superBuiltUp: "2,250 sq.ft.",
    carpetArea: "1,680 sq.ft.",
    facing: "100% East-West Vastu Entrance",
    image: "/images/plans/3bhk-84sqyd-Spring Hills.jpg",
    startingPrice: "₹72.80 Lakhs*",
    dimensions: [
      { room: "Grand Reception Living Hall", size: "22'0\" x 14'0\"", note: "28-foot wide frontage with cross ventilation" },
      { room: "Royal Master Suite", size: "15'6\" x 13'0\"", note: "Attached luxury dressing and bath" },
      { room: "Modular Kitchen + Store Room", size: "12'6\" x 9'6\"", note: "Dedicated utility and storage alcove" },
      { room: "Palace Sit-Out Balcony", size: "16'0\" x 6'6\"", note: "Overlooking central water fountain" },
    ],
    vastuNotes: "East-West facing plot aligned to authentic Vastu Shastra principles for harmony and family wellbeing.",
  },
  {
    id: "rajmahel-4bhk",
    projectKey: "raj-mahel",
    projectName: "Raj Mahel",
    unitType: "4 BHK Grand",
    title: "4 BHK Royal Bungalow (180 Sq.Yd)",
    plotArea: "180 Sq. Yards (2-Side Open Corner)",
    superBuiltUp: "3,400 sq.ft.",
    carpetArea: "2,600 sq.ft.",
    facing: "East-Facing Double Height Entrance",
    image: "/images/plans/4bhk-84sqyd-Spring Hills.jpg",
    startingPrice: "₹95 Lakhs*",
    dimensions: [
      { room: "Double Height Palace Living", size: "24'0\" x 16'0\"", note: "Chandelier provision & Italian marble flooring" },
      { room: "Presidential Master Suite", size: "18'0\" x 14'6\"", note: "Walk-in closet and master jacuzzi bath" },
      { room: "Modular Kitchen + Dry Pantry", size: "14'0\" x 11'0\"", note: "Direct service entry from garden" },
      { room: "Private Terrace & Balcony Deck", size: "22'0\" x 8'0\"", note: "Private open-air celebration deck" },
    ],
    vastuNotes: "100% Vastu Shastra compliant with Nairutya master suite and Ishanya prayer meditation nook.",
  },
  {
    id: "rajmahel-master",
    projectKey: "raj-mahel",
    projectName: "Raj Mahel",
    unitType: "Master Layout",
    title: "Master Anchor Villa (200 Sq.Yd)",
    plotArea: "200 Sq. Yards (3-Side Open 2-Road Corner)",
    superBuiltUp: "4,200 sq.ft.",
    carpetArea: "3,250 sq.ft.",
    facing: "100% East/North Vastu Entrance",
    image: "/images/plans/124sqyd-Spring Hills.jpg",
    startingPrice: "₹1.15 Cr*",
    dimensions: [
      { room: "Grand Banquet Living / Dining", size: "26'0\" x 17'0\"", note: "3-side open garden exposure" },
      { room: "Maharaja Master Suite", size: "20'0\" x 15'0\"", note: "Private terrace lounge" },
      { room: "Designer Kitchen + Large Store", size: "15'0\" x 12'0\"", note: "Full island modular setup" },
      { room: "Wrap-Around Garden Porch & Balcony", size: "28'0\" x 10'0\"", note: "Covered two-car parking with EV plug" },
    ],
    vastuNotes: "Premier 3-side open 2-road corner touch anchor plot offering unmatched status and continuous cosmic light.",
  },

  // APPLEWOOD HOMES
  {
    id: "applewood-3bhk",
    projectKey: "applewood-homes",
    projectName: "Applewood Homes",
    unitType: "3 BHK Royal",
    title: "3 BHK Royal (89 Sq.Yd - 20ft Wide Hall)",
    plotArea: "89 Sq. Yards (21'0\" Front Width)",
    superBuiltUp: "2,150 sq.ft.",
    carpetArea: "1,580 sq.ft.",
    facing: "100% East/North Vastu Entrance",
    image: "/images/plans/3bhk-89sqyd-AppleWood.jpg",
    startingPrice: "₹42.27 Lakhs*",
    dimensions: [
      { room: "Signature 20ft Wide Living Hall", size: "20'0\" x 14'6\"", note: "Extra wide layout for joint family seating" },
      { room: "Master Bedroom Suite", size: "15'0\" x 12'0\"", note: "Private bathroom & wardrobe" },
      { room: "Kitchen + Puja Space", size: "12'0\" x 8'6\"", note: "Dedicated sacred Ishanya puja alcove" },
      { room: "Private Sit-Out Balcony", size: "18'0\" x 6'6\"", note: "Open to landscaped internal avenue" },
    ],
    vastuNotes: "Massive 20-foot wide living space designed for expansive light, cross-breeze, and pure Vastu geometry.",
  },
  {
    id: "applewood-4bhk",
    projectKey: "applewood-homes",
    projectName: "Applewood Homes",
    unitType: "4 BHK Grand",
    title: "4 BHK Grand Row House (89 Sq.Yd)",
    plotArea: "89 Sq. Yards (21'0\" Front Width)",
    superBuiltUp: "2,550 sq.ft.",
    carpetArea: "1,920 sq.ft.",
    facing: "East-Facing Entrance",
    image: "/images/plans/4bhk-89sqyd-AppleWood.jpg",
    startingPrice: "₹52 Lakhs*",
    dimensions: [
      { room: "Double Living & Dining Area", size: "20'0\" x 15'0\"", note: "Direct sunlight through wide glass facade" },
      { room: "Parents Bedroom (Ground Floor)", size: "13'0\" x 11'6\"", note: "Zero-stair access for senior elders" },
      { room: "Kitchen + Utility Yard", size: "12'6\" x 9'0\"", note: "Granite platform and washing area" },
      { room: "Upper Balcony & Terrace", size: "17'0\" x 8'0\"", note: "Private family evening lounge" },
    ],
    vastuNotes: "Special ground-floor elders suite positioned in North-West (Vayavya) for gentle peaceful living.",
  },
  {
    id: "applewood-master",
    projectKey: "applewood-homes",
    projectName: "Applewood Homes",
    unitType: "Master Layout",
    title: "Master Anchor Row House (137 Sq.Yd)",
    plotArea: "137 Sq. Yards (SMC Road Facing Anchor)",
    superBuiltUp: "3,200 sq.ft.",
    carpetArea: "2,400 sq.ft.",
    facing: "100% East/North Vastu Entrance",
    image: "/images/plans/5bhk-89sqyd-AppleWood.jpg",
    startingPrice: "₹65 Lakhs*",
    dimensions: [
      { room: "Palatial Living Hall + Foyer", size: "22'0\" x 16'0\"", note: "Corner road touch with natural breeze" },
      { room: "Master Bedroom 1 & 2", size: "16'0\" x 13'0\"", note: "Ensuite designer baths" },
      { room: "Kitchen + Pantry + Store", size: "13'0\" x 10'0\"", note: "Full modular storage configuration" },
      { room: "SMC Road Facing Balcony & Deck", size: "21'0\" x 9'0\"", note: "Commercial/shop planning potential" },
    ],
    vastuNotes: "Prime SMC road facing anchor plot offering unmatched accessibility, appreciation potential, and Vastu alignment.",
  },
]

interface FloorPlanExplorerProps {
  onOpenPriceSheetModal?: (projectName: string) => void
}

export function FloorPlanExplorer({ onOpenPriceSheetModal }: FloorPlanExplorerProps) {
  const [selectedProject, setSelectedProject] = useState<"spring-hill" | "raj-mahel" | "applewood-homes">("spring-hill")
  const [selectedUnitType, setSelectedUnitType] = useState<"3 BHK Royal" | "4 BHK Grand" | "Master Layout">("3 BHK Royal")
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // Find active plan based on project and unit type
  const activePlan =
    EXPLORER_PLANS.find(
      (p) => p.projectKey === selectedProject && p.unitType === selectedUnitType
    ) || EXPLORER_PLANS[0]

  const PROJECT_TABS = [
    { key: "spring-hill", label: "Spring Hill", badge: "From ₹47 L" },
    { key: "raj-mahel", label: "Raj Mahel", badge: "From ₹72.8 L" },
    { key: "applewood-homes", label: "Applewood Homes", badge: "From ₹42.27 L" },
  ] as const

  const UNIT_TABS = ["3 BHK Royal", "4 BHK Grand", "Master Layout"] as const

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Silverstone Developers,\n\nI am inspecting the floor plan for *${activePlan.projectName} - ${activePlan.unitType}* (${activePlan.plotArea}).\n\nPlease share the exact unit pricing, available plot numbers, and payment schedule on WhatsApp.`
    )
    window.open(`https://wa.me/919904222000?text=${text}`, "_blank")
  }

  return (
    <section id="floor-plans" className="scroll-mt-24 py-20 lg:py-28 bg-[#F3EFEA] border-b border-[#E6E0D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E0D6] text-xs font-bold tracking-[0.2em] uppercase text-stone-800 shadow-xs">
            <Compass className="size-3.5 text-[#B4833E]" />
            <span>AUTHENTIC ARCHITECTURAL CAD BLUEPRINTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#18181B] tracking-tight leading-[1.14]">
            Interactive Unit & Floor Plan Explorer
          </h2>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Every Silverstone residence is precision-engineered for zero space wastage, maximum daylight cross-ventilation, and authentic East/North Vastu orientation. Select a project and configuration below:
          </p>
        </div>

        {/* PRIMARY PROJECT TABS */}
        <div className="flex justify-center">
          <div className="bg-white p-1.5 rounded-2xl border border-[#E6E0D6] shadow-sm inline-flex flex-wrap justify-center gap-1.5 max-w-full">
            {PROJECT_TABS.map((tab) => {
              const isActive = selectedProject === tab.key
              return (
                <button
                  key={tab.key}
                  onClick={() => setSelectedProject(tab.key)}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer min-h-11 flex items-center gap-2 ${
                    isActive
                      ? "bg-[#18181B] text-white shadow-md"
                      : "text-stone-600 hover:text-stone-900 hover:bg-[#FAF8F5]"
                  }`}
                >
                  <Building className={`size-3.5 ${isActive ? "text-[#B4833E]" : "text-stone-400"}`} />
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-md font-semibold ${
                      isActive ? "bg-white/20 text-[#DFC8A7]" : "bg-stone-100 text-stone-500"
                    }`}
                  >
                    {tab.badge}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* SECONDARY CONFIGURATION TABS (3 BHK Royal, 4 BHK Grand, Master Layout) */}
        <div className="flex justify-center">
          <div className="bg-[#FAF8F5] p-1 rounded-xl border border-[#E6E0D6] inline-flex gap-1">
            {UNIT_TABS.map((unit) => {
              const isActive = selectedUnitType === unit
              return (
                <button
                  key={unit}
                  onClick={() => setSelectedUnitType(unit)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer min-h-10 ${
                    isActive
                      ? "bg-[#B4833E] text-white shadow-xs"
                      : "text-stone-600 hover:text-stone-900 hover:bg-white"
                  }`}
                >
                  {unit}
                </button>
              )
            })}
          </div>
        </div>

        {/* MAIN BLUEPRINT EXPLORER CARD WITH ANIMATEPRESENCE CROSS-FADE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedProject}-${selectedUnitType}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: ARCHITECTURAL_EASE }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E6E0D6] shadow-xl"
          >
            {/* Blueprint Image Preview Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden border border-[#E6E0D6] bg-[#FAF8F5] group">
                <Image
                  src={activePlan.image}
                  alt={`${activePlan.title} Architectural Blueprint`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-102"
                  priority
                />

                {/* Top Vastu Pill */}
                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md text-emerald-300 border border-emerald-400/40 text-[11px] font-bold shadow-sm">
                    <Sparkles className="size-3 text-emerald-400" />
                    <span>100% East/North Vastu Entrance</span>
                  </div>
                </div>

                {/* Bottom Right Zoom Lightbox Trigger */}
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute bottom-4 right-4 z-10 px-3.5 py-2 rounded-xl bg-stone-950/85 hover:bg-stone-950 text-white text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 shadow-lg transition-all cursor-pointer border border-white/15"
                >
                  <ZoomIn className="size-3.5 text-[#DFC8A7]" />
                  <span>Zoom Lightbox</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-stone-500 px-1">
                <span>*Physical room measurements verified on-site in Surat</span>
                <span className="font-semibold text-[#B4833E]">Architectural CAD Blueprint</span>
              </div>
            </div>

            {/* Room Dimensions & Specs Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B4833E]">
                    {activePlan.projectName}
                  </span>
                  <span className="size-1 rounded-full bg-[#E6E0D6]" />
                  <span className="text-xs text-stone-500 font-medium">
                    {activePlan.plotArea}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                  {activePlan.title}
                </h3>
              </div>

              {/* Quick Dimension Pill Strip */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#FAF8F5] border border-[#E6E0D6]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                    Super Built-Up Area
                  </span>
                  <span className="text-base font-bold text-stone-900">
                    {activePlan.superBuiltUp}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                    RERA Carpet Area
                  </span>
                  <span className="text-base font-bold text-[#15803D]">
                    {activePlan.carpetArea}
                  </span>
                </div>
              </div>

              {/* Room Dimensions in Feet wrapped in BlurFade */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Exact Room Dimensions (In Feet):
                </h4>
                <div className="divide-y divide-[#E6E0D6] border border-[#E6E0D6] rounded-xl overflow-hidden bg-white text-xs">
                  {activePlan.dimensions.map((dim, idx) => (
                    <BlurFade key={idx} delay={idx * 0.05} duration={0.3}>
                      <div className="p-3 flex items-center justify-between hover:bg-[#FAF8F5]">
                        <div>
                          <span className="font-semibold text-stone-900 block">
                            {dim.room}
                          </span>
                          <span className="text-[11px] text-stone-500">
                            {dim.note}
                          </span>
                        </div>
                        <span className="font-mono font-bold text-[#B4833E] text-xs bg-[#FAF8F5] px-2.5 py-1 rounded-lg border border-[#E6E0D6]">
                          {dim.size}
                        </span>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>

              {/* Vastu Note Pill */}
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2.5">
                <Sparkles className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5 text-emerald-800">
                    Vastu Compliance Guarantee:
                  </span>
                  <p className="text-[11px] leading-relaxed text-emerald-700">
                    {activePlan.vastuNotes}
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA Action with Desktop Magnet */}
              <div className="pt-2">
                <Magnet padding={25} magnetStrength={0.15} disabled={false} className="w-full">
                  <button
                    onClick={handleWhatsAppInquiry}
                    className="w-full bg-[#15803D] hover:bg-[#166534] text-white font-bold py-3.5 px-4 rounded-xl min-h-12 text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all active:scale-98"
                  >
                    <MessageSquare className="size-4 shrink-0" />
                    <span>Get Exact Unit Pricing & Availability on WhatsApp</span>
                    <ArrowRight className="size-4 shrink-0" />
                  </button>
                </Magnet>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FULLSCREEN BLUEPRINT LIGHTBOX */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[130] bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] bg-white rounded-3xl overflow-hidden p-5 shadow-2xl border border-stone-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E6E0D6]">
              <div>
                <h4 className="font-serif font-bold text-lg sm:text-xl text-stone-900">
                  {activePlan.title}
                </h4>
                <p className="text-xs text-stone-500">
                  {activePlan.projectName} • {activePlan.plotArea} • Verified Carpet: {activePlan.carpetArea}
                </p>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="relative h-[65vh] w-full mt-4 bg-[#FAF8F5] rounded-2xl overflow-hidden">
              <Image
                src={activePlan.image}
                alt={activePlan.title}
                fill
                className="object-contain p-2"
              />
            </div>

            <div className="mt-4 pt-3 border-t border-[#E6E0D6] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-emerald-800 font-semibold">
                <Check className="size-4 text-emerald-600" />
                <span>100% East/North Vastu Entrance Certified</span>
              </div>

              <button
                onClick={() => {
                  setIsLightboxOpen(false)
                  handleWhatsAppInquiry()
                }}
                className="bg-[#15803D] hover:bg-[#166534] text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageSquare className="size-4" />
                <span>Inquire on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
export default FloorPlanExplorer
