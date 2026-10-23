"use client"

import { useState } from "react"
import Image from "next/image"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PROJECTS, Project } from "@/data/site-data"
import {
  MapPin,
  Maximize2,
  Download,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Video
} from "lucide-react"

interface ProjectsSectionProps {
  onOpenVisitModal: (project?: string) => void
  onSelectFloorPlan: (projectId: string) => void
  activeCategoryFilter?: string
}

export function ProjectsSection({
  onOpenVisitModal,
  onSelectFloorPlan,
  activeCategoryFilter = "all",
}: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState(activeCategoryFilter)

  const categories = [
    { id: "all", label: "All Ready Projects" },
    { id: "luxury-residences", label: "Luxury Residences & Row Houses" },
    { id: "bungalows", label: "Exclusive Bungalows" },
    { id: "villas", label: "Garden Villas" },
  ]

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === "all") return true
    return p.category === activeCategory
  })

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <BlurFade delay={0.05} yOffset={10}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCFCE7] border border-[#86EFAC] text-xs font-semibold text-[#15803D] mb-3">
                <span className="size-2 rounded-full bg-[#15803D] animate-pulse" />
                Completed & Ready for Immediate Handover
              </div>
            </BlurFade>

            <BlurFade delay={0.1} yOffset={12}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#18181B] tracking-tight">
                Flagship Silverstone Developments in Surat
              </h2>
            </BlurFade>

            <BlurFade delay={0.15} yOffset={12}>
              <p className="mt-3 text-sm sm:text-base text-[#57534E] leading-relaxed">
                Explore our premier completed communities located in Surat's high-appreciation New Pal Gauravpath and 300ft Ring Road TP zones.
              </p>
            </BlurFade>
          </div>

          {/* Category Filter Pills */}
          <BlurFade delay={0.2} yOffset={12}>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer min-h-11 ${
                    activeCategory === cat.id
                      ? "bg-[#18181B] text-white shadow-md"
                      : "bg-white text-[#57534E] border border-[#E6E0D6] hover:bg-[#F3EFEA] hover:text-[#18181B]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </BlurFade>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <BlurFade key={project.id} delay={0.1 * (idx + 1)} yOffset={16}>
              <div className="group rounded-3xl bg-white border border-[#E6E0D6] overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#B4833E]/50 flex flex-col justify-between">
                <div>
                  {/* Project Image Container */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#F3EFEA]">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                    {/* Top Status & Price Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                      <Badge className="bg-[#15803D] text-white hover:bg-[#15803D] border border-white/20 px-3 py-1 text-xs font-semibold shadow-md flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-[#DCFCE7] animate-pulse" />
                        {project.status}
                      </Badge>

                      <div className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#18181B] font-bold text-xs shadow-md border border-[#E6E0D6]">
                        Starting from <span className="text-[#B4833E]">{project.startingPrice}</span>
                      </div>
                    </div>

                    {/* Bottom Image Overlay Info */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                      <div className="flex items-center gap-1.5 text-xs text-zinc-200 mb-1">
                        <MapPin className="size-3.5 text-[#B4833E]" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-sm">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  {/* Project Card Body */}
                  <div className="p-6 space-y-5">
                    <p className="text-xs sm:text-sm text-[#57534E] font-medium leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Quick Specs Strip */}
                    <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E6E0D6] text-xs">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#57534E] block">
                          Configurations
                        </span>
                        <span className="font-semibold text-[#18181B]">
                          {project.configurations.join(" • ")}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#57534E] block">
                          Carpet Area / Plots
                        </span>
                        <span className="font-semibold text-[#18181B]">
                          {project.plotSizes || project.carpetArea}
                        </span>
                      </div>
                    </div>

                    {/* Highlights Bullet List */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#18181B] block">
                        Signature Highlights:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#57534E]">
                        {project.highlights.slice(0, 3).map((hl, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="size-3.5 text-[#15803D] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* RERA and Video Link */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#E6E0D6] text-[11px] text-[#57534E]">
                      <div className="flex items-center gap-1 font-medium">
                        <ShieldCheck className="size-3.5 text-[#15803D]" />
                        <span>RERA Approved</span>
                      </div>
                      {project.videoUrl && (
                        <a
                          href={project.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[#B4833E] hover:underline font-semibold"
                        >
                          <Video className="size-3.5" />
                          <span>Watch Campus Video</span>
                          <ExternalLink className="size-2.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <Button
                    onClick={() => onSelectFloorPlan(project.id)}
                    variant="outline"
                    className="border-[#E6E0D6] hover:bg-[#FAF8F5] hover:text-[#B4833E] text-xs font-semibold py-2.5 rounded-xl min-h-12 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Maximize2 className="size-3.5" />
                    <span>View Blueprint</span>
                  </Button>

                  <a
                    href={project.brochureUrl}
                    download
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-[#E6E0D6] bg-white hover:bg-[#FAF8F5] text-xs font-semibold text-[#18181B] hover:text-[#B4833E] min-h-12 transition-colors text-center"
                  >
                    <Download className="size-3.5 text-[#B4833E]" />
                    <span>PDF Brochure</span>
                  </a>

                  <Button
                    onClick={() => onOpenVisitModal(project.name)}
                    className="bg-[#B4833E] hover:bg-[#8F642B] text-white text-xs font-semibold py-2.5 rounded-xl min-h-12 shadow-sm flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Calendar className="size-3.5" />
                    <span>Book Visit</span>
                  </Button>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
