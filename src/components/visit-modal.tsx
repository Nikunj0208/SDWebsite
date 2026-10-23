"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Phone, Calendar, MapPin, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react"

interface VisitModalProps {
  isOpen: boolean
  onClose: () => void
  defaultProject?: string
  actionType?: "visit" | "brochure" | "price-sheet"
}

export function VisitModal({
  isOpen,
  onClose,
  defaultProject = "Springhill Homes",
  actionType = "visit",
}: VisitModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [project, setProject] = useState(defaultProject)
  const [slot, setSlot] = useState("This Weekend")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone || phone.length < 10) return

    const message = encodeURIComponent(
      `Hello Silverstone Developers,\n\nI want to ${
        actionType === "brochure"
          ? "download the brochure and price sheet"
          : actionType === "price-sheet"
          ? "request the exact unit price sheet"
          : "schedule an actual on-site residence visit"
      } for *${project}*.\n\n*Name:* ${name || "Interested Buyer"}\n*Phone:* ${phone}\n*Preferred Slot:* ${slot}\n*Source:* Silverstone Official Website`
    )

    // Primary business contact number for Surat office
    const whatsappUrl = `https://wa.me/919904222000?text=${message}`
    window.open(whatsappUrl, "_blank")
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setName("")
    setPhone("")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => (!open ? onClose() : null)}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden border-[#E6E0D6] bg-[#FAF8F5] text-[#18181B] rounded-2xl shadow-2xl">
        <div className="bg-gradient-to-r from-[#18181B] to-[#27272A] p-6 text-white relative">
          <Badge className="bg-[#DCFCE7] text-[#15803D] hover:bg-[#DCFCE7] border-none font-semibold text-xs px-2.5 py-0.5 mb-2 inline-flex items-center gap-1">
            <span className="size-2 rounded-full bg-[#15803D] animate-pulse" />
            100% Ready To Live Residences
          </Badge>
          <DialogTitle className="text-2xl font-serif font-bold text-white tracking-tight">
            {actionType === "brochure"
              ? "Download Official Brochure"
              : actionType === "price-sheet"
              ? "Get Exact Unit Price Sheet"
              : "Book Your Actual Residence Visit"}
          </DialogTitle>
          <DialogDescription className="text-zinc-300 text-xs mt-1 leading-relaxed">
            Walk inside the actual completed unit in Surat. Feel the natural ventilation, sunlight, and finish quality with zero construction risk.
          </DialogDescription>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="size-16 rounded-full bg-[#DCFCE7] text-[#15803D] mx-auto flex items-center justify-center">
              <CheckCircle2 className="size-8" />
            </div>
            <h4 className="text-xl font-serif font-bold text-[#18181B]">
              Inquiry Dispatched via WhatsApp!
            </h4>
            <p className="text-sm text-[#57534E] leading-relaxed">
              Our Senior Relationship Manager at Pal Gauravpath, Surat has received your request. We will also coordinate your site visit pass.
            </p>
            <Button
              onClick={handleReset}
              className="w-full bg-[#B4833E] hover:bg-[#8F642B] text-white font-medium py-3 rounded-xl min-h-12 text-sm"
            >
              Close Window
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#57534E] mb-1.5">
                Your Full Name
              </label>
              <Input
                type="text"
                required
                placeholder="e.g. Rameshchandra Patel"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white border-[#E6E0D6] focus:border-[#B4833E] focus:ring-[#B4833E] rounded-xl h-11 text-sm text-[#18181B]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#57534E] mb-1.5">
                WhatsApp Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#57534E]">
                  +91
                </span>
                <Input
                  type="tel"
                  required
                  placeholder="98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="pl-12 bg-white border-[#E6E0D6] focus:border-[#B4833E] focus:ring-[#B4833E] rounded-xl h-11 text-sm text-[#18181B]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#57534E] mb-1.5">
                  Select Project
                </label>
                <select
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  className="w-full bg-white border border-[#E6E0D6] focus:border-[#B4833E] focus:ring-1 focus:ring-[#B4833E] rounded-xl h-11 px-3 text-xs text-[#18181B] outline-none"
                >
                  <option value="Springhill Homes">Springhill Homes</option>
                  <option value="Raj Mahel">Raj Mahel</option>
                  <option value="Applewood Homes">Applewood Homes</option>
                  <option value="Silverstone Garden Villas">Silverstone Garden Villas</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#57534E] mb-1.5">
                  Preferred Slot
                </label>
                <select
                  value={slot}
                  onChange={(e) => setSlot(e.target.value)}
                  className="w-full bg-white border border-[#E6E0D6] focus:border-[#B4833E] focus:ring-1 focus:ring-[#B4833E] rounded-xl h-11 px-3 text-xs text-[#18181B] outline-none"
                >
                  <option value="Today Evening (4 PM - 7 PM)">Today Evening (4-7 PM)</option>
                  <option value="Tomorrow Morning (10 AM - 1 PM)">Tomorrow Morning (10-1 PM)</option>
                  <option value="This Weekend (Saturday / Sunday)">This Weekend</option>
                  <option value="Request Video Walk-through">Request Video Tour</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-[#15803D] hover:bg-[#166534] text-white font-medium py-3 rounded-xl min-h-12 text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-900/10 transition-all"
              >
                <MessageSquare className="size-4" />
                <span>Confirm & Connect on WhatsApp</span>
                <ArrowRight className="size-4" />
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-[#57534E]">
              <ShieldCheck className="size-3.5 text-[#15803D]" />
              <span>RERA Registered • Zero spam guarantee • Direct builder pricing</span>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
