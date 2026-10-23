"use client"

import { MessageSquare, Calendar, Phone } from "lucide-react"

interface MobileThumbBarProps {
  onOpenVisitModal: () => void
  onOpenBrochureModal: () => void
}

export function MobileThumbBar({
  onOpenVisitModal,
  onOpenBrochureModal,
}: MobileThumbBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-xl border-t border-[#E6E0D6] p-3 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Left Action: WhatsApp Brochure */}
        <button
          type="button"
          onClick={onOpenBrochureModal}
          className="flex items-center justify-center gap-2 bg-[#15803D] hover:bg-[#166534] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-3 rounded-xl shadow-md min-h-12 transition-all active:scale-95 cursor-pointer border border-[#86EFAC]/40"
        >
          <MessageSquare className="size-4 shrink-0" />
          <span>WhatsApp Brochure</span>
        </button>

        {/* Right Action: Book Site Visit */}
        <button
          type="button"
          onClick={onOpenVisitModal}
          className="flex items-center justify-center gap-2 bg-[#B4833E] hover:bg-[#8F642B] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-3 rounded-xl shadow-md min-h-12 transition-all active:scale-95 cursor-pointer border border-amber-300/30"
        >
          <Calendar className="size-4 shrink-0" />
          <span>Book Site Visit</span>
        </button>
      </div>
    </div>
  )
}
