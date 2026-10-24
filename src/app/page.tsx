"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/HeroSlider"
import { LegacySection } from "@/components/LegacySection"
import { ProjectShowcase } from "@/components/ProjectShowcase"
import { WhyReadyToLive } from "@/components/WhyReadyToLive"
import { FloorPlanExplorer } from "@/components/FloorPlanExplorer"
import { ConversionFooter } from "@/components/ConversionFooter"
import { MobileActionBar } from "@/components/MobileActionBar"
import { VisitModal } from "@/components/visit-modal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalProject, setModalProject] = useState("Springhill Homes")
  const [modalActionType, setModalActionType] = useState<"visit" | "brochure" | "price-sheet">("visit")

  const handleOpenVisitModal = (project: string = "Springhill Homes") => {
    setModalProject(project)
    setModalActionType("visit")
    setIsModalOpen(true)
  }

  const handleSelectFloorPlan = (projectId: string) => {
    const elem = document.querySelector("#floor-plans")
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" })
    }
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
            "description": "Ready to Live luxury row houses, bungalows, and plots in Surat, Gujarat. Completed BU/OC approved campuses with zero waiting period. Spring Hill, Raj Mahel, Mahel, Applewood Homes.",
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

      {/* 1. Dynamic Header (DO NOT TOUCH OR BREAK: starts transparent, turns light glass on scroll) */}
      <Navbar onOpenVisitModal={handleOpenVisitModal} />

      {/* Main Conversion Flow */}
      <main>
        {/* 2. 100vh Kinematic Hero Slider (DO NOT TOUCH OR BREAK: Swiper Ken-Burns, 4 Running Projects, Floating Bar) */}
        <HeroSlider
          onOpenVisitModal={handleOpenVisitModal}
          onFilterChange={handleFilterChange}
        />

        {/* 3. Section 1: The Architectural Legacy & 4 Oversized Counters (shreepadgroup.com blueprint) */}
        <LegacySection onOpenVisitModal={handleOpenVisitModal} />

        {/* 4. Section 2: Interactive Project Showcase with aspect-[4/5] Tall Cards & Filter Pills */}
        <ProjectShowcase
          onOpenVisitModal={handleOpenVisitModal}
          onSelectFloorPlan={handleSelectFloorPlan}
        />

        {/* 5. Section 3: "Ready to Live vs. Under-Construction" Comparison & Amenities Bento Grid */}
        <WhyReadyToLive onOpenVisitModal={handleOpenVisitModal} />

        {/* 6. Section 4: Interactive Floor Plan & Unit Explorer with Zoom Lightbox & Room Specs */}
        <FloorPlanExplorer />

        {/* 7. Section 5: Surat Connectivity, EMI Calculator, WhatsApp Walk-Through Scheduler & Luxury Footer */}
        <ConversionFooter />
      </main>

      {/* Persistent Sticky Mobile Thumb-Zone Bar (<768px) */}
      <MobileActionBar onOpenVisitModal={handleOpenVisitModal} />

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
