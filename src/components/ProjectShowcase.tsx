"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn, StaggerContainer } from "@/components/ui/motion"
import {
  MapPin,
  Maximize2,
  Calendar,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Phone,
  Layers,
  Building,
} from "lucide-react"

export interface ShowcaseProject {
  id: string
  name: string
  gujaratiTag: string
  subtitle: string
  projectType: string
  location: string
  subLocation: string
  carpetArea: string
  plotDimensions: string
  startingPrice: string
  statusBadge: string
  image: string
  features: string[]
  whatsappText: string
}

const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "spring-hill",
    name: "Spring Hill",
    gujaratiTag: "120ft & 60ft રોડ જંક્શન • સંપૂર્ણ તૈયાર અને લાઈવ કેમ્પસ",
    subtitle: "3 & 4 BHK Ready-to-Live Residences",
    projectType: "Luxury Row Houses & Plots",
    location: "New Pal Gauravpath Corridor, Surat",
    subLocation: "1 KM from Pal Gauravpath • 300m to 2nd Ring Road",
    carpetArea: "1,850 - 3,450 sq.ft.",
    plotDimensions: "84 & 124 Sq.Yd (21ft Wide Front)",
    startingPrice: "₹47 Lakhs*",
    statusBadge: "Ready Possession",
    image: "/images/springhill-campus.jpeg",
    features: [
      "Fully operational landscaped clubhouse & central gardens",
      "Prime 120ft & 60ft 4-road junction commercial frontage",
      "3-Side Open Anchor Plot (124 Sq.Yd) for maximum privacy",
      "Uniform architectural elevation with maintenance program",
    ],
    whatsappText:
      "Hello Silverstone Developers, please share the brochure and floor plans for Spring Hill.",
  },
  {
    id: "raj-mahel",
    name: "Raj Mahel",
    gujaratiTag: "ધ રિયલ મહેલ • માત્ર 52 એક્સક્લુઝિવ પરિવારો માટે",
    subtitle: "All Mahel Type Royal Bungalows",
    projectType: "Palatial Bungalows & Plots",
    location: "SMC TP Area, Pal Extension, Surat",
    subLocation: "120ft & 60ft Corner Landmark • 2-Side Road Touch",
    carpetArea: "2,400 - 4,800 sq.ft.",
    plotDimensions: "125 to 200 Sq.Yd (28 to 35ft Fronts)",
    startingPrice: "₹72.80 Lakhs*",
    statusBadge: "Ready Possession",
    image: "/images/rajmahel/entrance-gate.jpg",
    features: [
      "Royal entrance gate with grand central water fountain",
      "100% East-West Vastu Shastra compliant plot layouts",
      "Private gated sanctuary reserved for only 52 families",
      "1 Main Security Checkpoint + 6 Manageable Entry/Exit Gates",
    ],
    whatsappText:
      "Hello Silverstone Developers, please share the brochure and pricing for Raj Mahel Bungalows.",
  },
  {
    id: "applewood-homes",
    name: "Applewood Homes",
    gujaratiTag: "20 ફૂટ પહોળો લિવિંગ હોલ • સિંગલ સિક્યુરિટી ગેટ",
    subtitle: "Ready Row House Campus",
    projectType: "Premium Row House Plots & Homes",
    location: "New Pal Extension TP Zone, Surat",
    subLocation: "Both Sides Road Corner Touch • Direct SMC Road",
    carpetArea: "1,650 - 2,900 sq.ft.",
    plotDimensions: "89 & 137 Sq.Yd Plots",
    startingPrice: "₹42.27 Lakhs*",
    statusBadge: "Ready Possession",
    image: "/images/applewood/applewood-1.jpg",
    features: [
      "Expansive 20-foot wide signature living halls for grand hosting",
      "137 Sq.Yd SMC road anchor plot with commercial potential",
      "Single secure checkpoint with wide internal cross-roads",
      "Immediate BU-certified ready possession with zero waiting",
    ],
    whatsappText:
      "Hello Silverstone Developers, I want the brochure and pricing for Applewood Homes.",
  },
  {
    id: "mahel-bungalows",
    name: "Mahel",
    gujaratiTag: "રોયલ થીમ • માત્ર 31 પરિવારો માટે • 3-Side Open",
    subtitle: "Exclusive Bungalow Plot Project",
    projectType: "Bespoke Bungalow Plots",
    location: "120ft Main Road & 60ft Junction, Surat",
    subLocation: "Surat 2nd Ring Road 300m • SMC New TP Area",
    carpetArea: "2,600 - 5,200 sq.ft.",
    plotDimensions: "Starting from 28ft Wide Front Opening",
    startingPrice: "₹72.80 Lakhs*",
    statusBadge: "Ready Possession",
    image: "/images/mahel/entrance-gate.jpg",
    features: [
      "3-Side Open at 120ft main road & 60ft 4-road junction",
      "Ultra-exclusive community strictly limited to 31 families",
      "Dedicated architect & interior support for custom villas",
      "Royal architectural theme with uniform front perimeter",
    ],
    whatsappText:
      "Hello Silverstone Developers, I want to inquire about Mahel Bungalow Plots in Surat.",
  },
]

interface ProjectShowcaseProps {
  onOpenVisitModal: (project?: string) => void
  onSelectFloorPlan: (projectId: string) => void
}

export function ProjectShowcase({
  onOpenVisitModal,
  onSelectFloorPlan,
}: ProjectShowcaseProps) {
  const [activeTab, setActiveTab] = useState<string>("all")

  const TABS = [
    { id: "all", label: "All Ready Projects" },
    { id: "spring-hill", label: "Spring Hill" },
    { id: "raj-mahel", label: "Raj Mahel" },
    { id: "applewood-homes", label: "Applewood Homes" },
    { id: "mahel-bungalows", label: "Mahel" },
  ]

  const filteredProjects = SHOWCASE_PROJECTS.filter((proj) => {
    if (activeTab === "all") return true
    return proj.id === activeTab
  })

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#FAF8F5] relative border-b border-[#E6E0D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header (Shreepad Style with Subtitle + Gilroy/Cormorant Heading + All Properties Pill) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <FadeIn direction="up">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4EA] border border-[#DFC8A7] text-[11px] font-bold tracking-[0.2em] uppercase text-[#B4833E]">
                <span>FLAGSHIP READY DEVELOPMENTS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#18181B] tracking-tight leading-[1.14]">
                Completed Communities in Surat
              </h2>
              <p className="text-sm sm:text-base text-stone-600 max-w-xl">
                100% completed, BU-approved row houses, bungalows, and plots with operational clubhouses in the Pal Gauravpath & 2nd Ring Road corridor.
              </p>
            </div>
          </FadeIn>

          {/* Shreepad-Style All Properties Pill Button */}
          <FadeIn direction="up" delay={0.1}>
            <button
              onClick={() => setActiveTab("all")}
              className="inline-flex items-center gap-2 bg-[#B4833E] hover:bg-[#8F642B] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
            >
              <span>View All 4 Projects</span>
              <ArrowRight className="size-4" />
            </button>
          </FadeIn>
        </div>

        {/* Filter Tabs (Shreepad Style with Animated Pill Indicator) */}
        <FadeIn delay={0.15}>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#E6E0D6]">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer shrink-0 ${
                    isActive
                      ? "text-white"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectTab"
                      className="absolute inset-0 bg-[#18181B] rounded-full shadow-md"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </FadeIn>

        {/* Shreepad 2-Column Luxury Project Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-3xl bg-white border border-[#E6E0D6] overflow-hidden shadow-xs hover:shadow-2xl hover:border-[#B4833E]/60 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Smooth Zoom on Hover */}
                  <div className="relative h-[290px] sm:h-[350px] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 650px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent" />

                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-xs font-bold tracking-wide shadow-md">
                        <span className="size-1.5 rounded-full bg-white animate-pulse" />
                        <span>{project.statusBadge}</span>
                      </div>

                      <div className="px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-stone-900 text-xs font-bold border border-white/50 shadow-md">
                        <span>Starting {project.startingPrice}</span>
                      </div>
                    </div>

                    {/* Image Title Overlay */}
                    <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                      <div className="flex items-center gap-1.5 text-xs text-[#DFC8A7] mb-1">
                        <MapPin className="size-3.5 shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                        {project.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-200 mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Card Content & Specs */}
                  <div className="p-6 sm:p-7 space-y-5">
                    {/* Gujarati Tag from Client Docx */}
                    <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#DFC8A7]/40 text-xs font-semibold text-stone-800 flex items-center gap-2">
                      <Sparkles className="size-4 text-[#B4833E] shrink-0" />
                      <span>{project.gujaratiTag}</span>
                    </div>

                    {/* Key Technical Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E6E0D6]">
                        <span className="text-[10px] uppercase font-bold text-stone-500 block">
                          Configuration
                        </span>
                        <span className="font-bold text-stone-900 block mt-0.5">
                          {project.projectType}
                        </span>
                      </div>

                      <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E6E0D6]">
                        <span className="text-[10px] uppercase font-bold text-stone-500 block">
                          Plot & Frontage
                        </span>
                        <span className="font-bold text-stone-900 block mt-0.5">
                          {project.plotDimensions}
                        </span>
                      </div>
                    </div>

                    {/* Highlights List */}
                    <div className="space-y-2 pt-1 text-xs text-stone-700">
                      {project.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-4 text-[#15803D] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 sm:p-7 pt-0 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenVisitModal(project.name)}
                    className="flex-1 bg-[#B4833E] hover:bg-[#8F642B] text-white font-bold py-3 px-4 rounded-full text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="size-3.5" />
                    <span>Book Site Visit</span>
                  </button>

                  <a
                    href={`https://wa.me/919904222000?text=${encodeURIComponent(
                      project.whatsappText
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-full border border-emerald-600 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageSquare className="size-3.5 text-emerald-600" />
                    <span>WhatsApp Brochure</span>
                  </a>

                  <button
                    onClick={() => onSelectFloorPlan(project.id)}
                    className="w-full sm:w-auto px-4 py-3 text-xs font-bold text-stone-700 hover:text-stone-950 hover:underline flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Floor Plans</span>
                    <ArrowRight className="size-3.5 text-[#B4833E]" />
                  </button>
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
