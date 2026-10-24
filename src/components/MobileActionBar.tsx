"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, Calendar } from "lucide-react"
import { ARCHITECTURAL_EASE } from "@/components/ui/architectural-reveal"

interface MobileActionBarProps {
  onOpenVisitModal?: (project?: string) => void
}

export function MobileActionBar({ onOpenVisitModal }: MobileActionBarProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleOpenBrochure = () => {
    const text = encodeURIComponent(
      "Hello Silverstone Developers, please send the complete brochure dossier (Spring Hill, Raj Mahel, Applewood Homes) to my WhatsApp."
    )
    window.open(`https://wa.me/919904222000?text=${text}`, "_blank")
  }

  const handleBookVisit = () => {
    if (onOpenVisitModal) {
      onOpenVisitModal("Silverstone Ready Projects")
    } else {
      const el = document.querySelector("#contact")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: ARCHITECTURAL_EASE }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-stone-950/95 backdrop-blur-md p-3 border-t border-stone-800 flex gap-3 shadow-2xl will-change-transform"
        >
          {/* Button 1 (Emerald): WhatsApp Brochure */}
          <button
            type="button"
            onClick={handleOpenBrochure}
            className="flex-1 flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#166534] text-white font-bold text-xs uppercase tracking-wider py-3 px-3 rounded-xl shadow-md min-h-12 transition-all active:scale-95 cursor-pointer border border-[#86EFAC]/40"
          >
            <MessageSquare className="size-4 shrink-0" />
            <span>WhatsApp Brochure</span>
          </button>

          {/* Button 2 (Champagne Bronze): Book Flat Visit */}
          <button
            type="button"
            onClick={handleBookVisit}
            className="flex-1 flex items-center justify-center gap-2 bg-[#B4833E] hover:bg-[#8F642B] text-white font-bold text-xs uppercase tracking-wider py-3 px-3 rounded-xl shadow-md min-h-12 transition-all active:scale-95 cursor-pointer border border-[#DFC8A7]/30"
          >
            <Calendar className="size-4 shrink-0" />
            <span>Book Flat Visit</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default MobileActionBar
