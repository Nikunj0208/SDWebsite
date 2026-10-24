"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/HeroSlider"
import { TrustMetricsBar } from "@/components/TrustMetricsBar"
import { LegacySection } from "@/components/LegacySection"
import { ProjectShowcase } from "@/components/ProjectShowcase"
import { WhyInvestSection } from "@/components/WhyInvestSection"
import { WhyReadyToLive } from "@/components/WhyReadyToLive"
import { FloorPlanExplorer } from "@/components/FloorPlanExplorer"
import { ConversionFooter } from "@/components/ConversionFooter"
import { MobileActionBar } from "@/components/MobileActionBar"
import { VisitModal } from "@/components/visit-modal"
import { PlotLayoutModal } from "@/components/PlotLayoutModal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalProject, setModalProject] = useState("Applewood")
  const [modalActionType, setModalActionType] = useState<"visit" | "brochure" | "price-sheet">("visit")

  // Plot Layout & Dimensions Modal State
  const [isPlotModalOpen, setIsPlotModalOpen] = useState(false)
  const [plotModalProject, setPlotModalProject] = useState("applewood")

  const handleOpenVisitModal = (project: string = "Applewood") => {
    setModalProject(project)
    setModalActionType("visit")
    setIsModalOpen(true)
  }

  const handleOpenPlotModal = (projectId: string = "applewood") => {
    setPlotModalProject(projectId)
    setIsPlotModalOpen(true)
  }

  const handleFilterChange = (filters: { locality: string; configuration: string; status: string }) => {
    const elem = document.querySelector("#projects")
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#18181B] selection:bg-[#B4833E]/20 selection:text-[#B4833E] overflow-x-hidden">
      {/* Schema.org Structured Data for Local Real Estate SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Silverstone Developers",
            "image": "https://silverstonedevelopers.com/images/springhill-campus.jpeg",
            "description": "Ready to Live luxury row house and bungalow plots in Surat, Gujarat. RERA approved SMC TP schemes with zero waiting period. Applewood, Springhill Homes, Rajmahel, and Mahel.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Near New Pal Gauravpath & 2nd Ring Road Junction",
              "addressLocality": "Surat",
              "addressRegion": "Gujarat",
              "postalCode": "395009",
              "addressCountry": "IN",
            },
            "telephone": "+919904222000",
            "openingHours": "Mo-Su 09:30-19:30",
            "priceRange": "₹42.27 Lakhs - ₹1.5 Crore",
          }),
        }}
      />

      {/* 1. Dynamic Header with Sleek Language Toggle (EN | ગુજરાતી) */}
      <Navbar onOpenVisitModal={handleOpenVisitModal} />

      {/* Main Conversion Flow */}
      <main>
        {/* 2. 100vh Kinematic Hero Slider (3 Slides with Verified Brochure Copy) */}
        <HeroSlider
          onOpenVisitModal={handleOpenVisitModal}
          onFilterChange={handleFilterChange}
        />

        {/* 3. The 6-Metric Trust & Infrastructure Bar (Numbers First) */}
        <TrustMetricsBar />

        {/* 4. Section 1: The Architectural Legacy & 4 Oversized Counters */}
        <LegacySection onOpenVisitModal={handleOpenVisitModal} />

        {/* 5. Section 2: The 4 Flagship Projects with Direct Layout & WhatsApp Actions */}
        <ProjectShowcase
          onOpenVisitModal={handleOpenVisitModal}
          onOpenPlotModal={handleOpenPlotModal}
        />

        {/* 6. Section 3: "Why Invest Here?" — Surat's Next Posh Destination & Side-by-Side Table */}
        <WhyInvestSection
          onOpenPlotModal={handleOpenPlotModal}
          onOpenVisitModal={handleOpenVisitModal}
        />

        {/* 7. Section 4: "Ready to Live vs. Under-Construction" Comparison & Amenities Bento Grid */}
        <WhyReadyToLive onOpenVisitModal={handleOpenVisitModal} />

        {/* 8. Section 5: Interactive Floor Plan & Unit Explorer with Room Specs */}
        <FloorPlanExplorer />

        {/* 9. Section 6: Surat Connectivity, EMI Calculator, WhatsApp Walk-Through Scheduler & Luxury Footer */}
        <ConversionFooter />
      </main>

      {/* Persistent Sticky Mobile Thumb-Zone Bar (<768px) */}
      <MobileActionBar onOpenVisitModal={handleOpenVisitModal} />

      {/* Interactive Plot Layout & Dimensions Modal */}
      <PlotLayoutModal
        isOpen={isPlotModalOpen}
        onClose={() => setIsPlotModalOpen(false)}
        defaultProject={plotModalProject}
      />

      {/* Interactive Booking / Brochure / Price Sheet Modal */}
      <VisitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultProject={modalProject}
        actionType={modalActionType}
      />
    </div>
  )
}
