"use client"

import { useState } from "react"
import Link from "next/link"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MessageSquare,
  Phone,
  MapPin,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Mail,
  Video,
  Clock
} from "lucide-react"

export function VisitSchedulerAndFooter() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [project, setProject] = useState("Springhill Homes")
  const [slot, setSlot] = useState("This Weekend")
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone || phone.length < 10) return

    const message = encodeURIComponent(
      `Hello Silverstone Developers,\n\nI want to schedule an actual on-site visit for *${project}*.\n\n*Name:* ${name || "Prospective Buyer"}\n*Phone:* +91 ${phone}\n*Preferred Visit Time:* ${slot}\n*Source:* Silverstone Official Website`
    )

    const waUrl = `https://wa.me/919904222000?text=${message}`
    window.open(waUrl, "_blank")
    setIsSuccess(true)
  }

  return (
    <footer id="contact" className="bg-[#18181B] text-white pt-20 pb-28 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Conversion Scheduler Card */}
        <BlurFade delay={0.1} yOffset={16}>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#27272A] to-[#18181B] border border-zinc-700/80 p-8 sm:p-12 shadow-2xl -mt-32 mb-16">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B4833E]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Info */}
              <div className="lg:col-span-6 space-y-4">
                <Badge className="bg-[#DCFCE7] text-[#15803D] hover:bg-[#DCFCE7] border-none text-xs font-semibold px-3 py-1 flex items-center gap-1.5 w-fit">
                  <span className="size-2 rounded-full bg-[#15803D] animate-pulse" />
                  VIP On-Site Experience Pass
                </Badge>

                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  Schedule Your Guided <br />
                  <span className="text-[#B4833E] italic">Actual Flat Walk-Through</span>
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed max-w-xl">
                  Step inside the completed residence with your family. Check room cross-ventilation, admire the ceiling height, test tap pressure, and inspect finish quality in real time.
                </p>

                <div className="space-y-2 pt-2 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#15803D]" />
                    <span>Complimentary golf-cart campus tour with Senior Project Architect</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#15803D]" />
                    <span>Printed RERA approval dossier & transparent unit price sheet handover</span>
                  </div>
                </div>
              </div>

              {/* Right Form Card */}
              <div className="lg:col-span-6 bg-white text-[#18181B] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E6E0D6]">
                {isSuccess ? (
                  <div className="text-center py-6 space-y-3">
                    <div className="size-14 rounded-full bg-[#DCFCE7] text-[#15803D] mx-auto flex items-center justify-center">
                      <CheckCircle2 className="size-7" />
                    </div>
                    <h4 className="font-serif font-bold text-xl text-[#18181B]">
                      Visit Pass Dispatched on WhatsApp!
                    </h4>
                    <p className="text-xs text-[#57534E]">
                      Thank you, {name || "Sir/Madam"}. Our Pal Gauravpath office team is ready to welcome your family.
                    </p>
                    <Button
                      onClick={() => setIsSuccess(false)}
                      variant="outline"
                      className="border-[#E6E0D6] text-xs font-semibold rounded-xl min-h-11"
                    >
                      Book Another Slot
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h4 className="font-serif font-bold text-lg text-[#18181B]">
                      Direct WhatsApp Visit Scheduler
                    </h4>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-bold text-[#57534E] mb-1">
                        Your Full Name
                      </label>
                      <Input
                        type="text"
                        required
                        placeholder="e.g. Mukeshbhai Patel"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-[#FAF8F5] border-[#E6E0D6] focus:border-[#B4833E] rounded-xl h-11 text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-bold text-[#57534E] mb-1">
                        WhatsApp Contact Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#57534E]">
                          +91
                        </span>
                        <Input
                          type="tel"
                          required
                          placeholder="98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                          className="pl-12 bg-[#FAF8F5] border-[#E6E0D6] focus:border-[#B4833E] rounded-xl h-11 text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-bold text-[#57534E] mb-1">
                          Preferred Project
                        </label>
                        <select
                          value={project}
                          onChange={(e) => setProject(e.target.value)}
                          className="w-full bg-[#FAF8F5] border border-[#E6E0D6] focus:border-[#B4833E] rounded-xl h-11 px-3 text-xs text-[#18181B] font-medium outline-none cursor-pointer"
                        >
                          <option value="Springhill Homes">Springhill Homes (Ready)</option>
                          <option value="Raj Mahel">Raj Mahel (Bungalows)</option>
                          <option value="Applewood Homes">Applewood Homes (Row House)</option>
                          <option value="Silverstone Garden Villas">Silverstone Garden Villas</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-bold text-[#57534E] mb-1">
                          Preferred Visit Slot
                        </label>
                        <select
                          value={slot}
                          onChange={(e) => setSlot(e.target.value)}
                          className="w-full bg-[#FAF8F5] border border-[#E6E0D6] focus:border-[#B4833E] rounded-xl h-11 px-3 text-xs text-[#18181B] font-medium outline-none cursor-pointer"
                        >
                          <option value="Today Evening (4 PM - 7 PM)">Today Evening (4 PM - 7 PM)</option>
                          <option value="Tomorrow Morning (10 AM - 1 PM)">Tomorrow Morning (10 AM - 1 PM)</option>
                          <option value="This Weekend (Saturday / Sunday)">This Weekend</option>
                          <option value="Request Video Walk-through">Request Video Walk-through</option>
                        </select>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#15803D] hover:bg-[#166534] text-white font-medium py-3 rounded-xl min-h-12 text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
                    >
                      <MessageSquare className="size-4" />
                      <span>Confirm & Open WhatsApp Visit Request</span>
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Footer Main Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-white text-[#18181B] flex items-center justify-center font-serif font-black text-xl shadow-md border border-[#B4833E]">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-white leading-none">
                  SILVERSTONE
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#B4833E] mt-0.5">
                  Developers • Surat
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Surat's leading developer specializing in 100% completed, ready-to-live luxury row houses, royal bungalows, and resort campuses with zero construction risk.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#B4833E] font-medium">
              <Sparkles className="size-3.5" />
              <span>Tagline: "Ready to Live"</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Ready Projects
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Springhill Homes
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Raj Mahel Bungalows
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Applewood Homes
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Silverstone Garden Villas
                </a>
              </li>
            </ul>
          </div>

          {/* Key Explorers */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Buyer Tools
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#why-ready-to-live" className="hover:text-white transition-colors">
                  Why Ready-to-Live
                </a>
              </li>
              <li>
                <a href="#floor-plans" className="hover:text-white transition-colors">
                  Floor Plan Blueprints
                </a>
              </li>
              <li>
                <a href="#reality-showcase" className="hover:text-white transition-colors">
                  Actual Site vs Render
                </a>
              </li>
              <li>
                <a href="#emi-calculator" className="hover:text-white transition-colors">
                  Home Loan Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Surat Site Office Address */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Surat Site Office & Contact
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="size-4 text-[#B4833E] shrink-0 mt-0.5" />
                <span>
                  Silverstone Developers Head Office, Near New Pal Gauravpath & 2nd Ring Road Junction, Surat, Gujarat - 395009
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-[#B4833E] shrink-0" />
                <a href="tel:+919904222000" className="hover:text-white">
                  +91 99042 22000 / +91 98251 00000
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-[#B4833E] shrink-0" />
                <span>Office Open Daily: 9:30 AM to 7:30 PM (Mon-Sun)</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://maps.google.com/?ftid=0x3be04b007d49da49:0x9a524da3a7c1613a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-white transition-colors"
              >
                <MapPin className="size-3 text-[#B4833E]" />
                <span>Google Maps</span>
                <ExternalLink className="size-2.5" />
              </a>

              <a
                href="https://youtu.be/K_j_2J0510A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-white transition-colors"
              >
                <Video className="size-3 text-[#B4833E]" />
                <span>Welcome Video</span>
                <ExternalLink className="size-2.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & RERA Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © 2026 Silverstone Developers. All Rights Reserved. Surat, Gujarat.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
            <span>GujRERA Registered</span>
            <span>•</span>
            <span>100% Title Clear & BU Permission Ready</span>
            <span>•</span>
            <span className="text-zinc-400">Architectural Warm Theme</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
