"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  Phone,
  ShieldCheck,
  Calendar,
  Sparkles,
  ChevronDown,
  ArrowRight,
  MapPin,
  Clock,
  ExternalLink,
  Building,
  CheckCircle2,
  MessageSquare,
} from "lucide-react"

interface NavbarProps {
  onOpenVisitModal?: (project?: string) => void
}

const RUNNING_PROJECTS = [
  {
    name: "Spring Hill",
    type: "3 & 4 BHK Luxury Row Houses & Plots",
    price: "From ₹47 Lakhs*",
    location: "120ft & 60ft Road Junction, Surat",
    status: "Ready Possession",
    href: "#projects",
  },
  {
    name: "Raj Mahel",
    type: "All Mahel Type Palatial Bungalows",
    price: "From ₹72.80 Lakhs*",
    location: "Exclusive 52 Families • East-West Vastu",
    status: "Ready Possession",
    href: "#projects",
  },
  {
    name: "Applewood Homes",
    type: "20ft Wide Living Halls • Gated Campus",
    price: "From ₹42.27 Lakhs*",
    location: "89 & 137 Sq.Yd • Corner Road Touch",
    status: "Ready Possession",
    href: "#projects",
  },
  {
    name: "Mahel",
    type: "Royal 3-Side Open Bungalow Enclave",
    price: "From ₹72.80 Lakhs*",
    location: "31 Families • Landmark 4-Road Junction",
    status: "Ready Possession",
    href: "#projects",
  },
]

export function Navbar({ onOpenVisitModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileOpen])

  const handleLinkClick = (href: string) => {
    setIsMobileOpen(false)
    setIsProjectsDropdownOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleOpenModal = (project?: string) => {
    setIsMobileOpen(false)
    setIsProjectsDropdownOpen(false)
    if (onOpenVisitModal) {
      onOpenVisitModal(project)
    } else {
      const visitSection = document.querySelector("#contact")
      if (visitSection) {
        visitSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const handleMouseEnterProjects = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setIsProjectsDropdownOpen(true)
  }

  const handleMouseLeaveProjects = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsProjectsDropdownOpen(false)
    }, 150)
  }

  return (
    <>
      {/* 1. TOP UTILITY STRIP (Shreepad #181919 Dark Ribbon) */}
      <div className="hidden lg:block bg-[#181919] text-stone-300 text-[11px] font-medium py-2 px-6 border-b border-white/10 z-50 relative transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="size-3 text-[#B4833E]" />
              <span>New Pal Gauravpath & 2nd Ring Road Corridor, Surat</span>
            </span>
            <span className="text-stone-600">•</span>
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <ShieldCheck className="size-3.5" />
              <span>GujRERA Approved • 100% BU/OC Clear Possession</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-[#DFC8A7] font-semibold tracking-wide">
              Brand Tagline: <strong className="text-white">"Ready to Live"</strong>
            </span>
            <span className="text-stone-600">•</span>
            <a
              href="tel:+919904222000"
              className="flex items-center gap-1.5 text-white hover:text-[#B4833E] transition-colors font-semibold"
            >
              <Phone className="size-3 text-[#B4833E]" />
              <span>+91 99042 22000</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION HEADER */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "top-0 bg-[#FAF8F5]/95 backdrop-blur-xl text-stone-900 shadow-md border-b border-[#E6E0D6] py-3.5"
            : "top-0 lg:top-[37px] bg-stone-950/60 backdrop-blur-md text-white border-b border-white/15 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Brand Identity + Shreepad-Style Pill Menu Trigger */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link href="/" className="flex items-center gap-3 group">
                {/* Architectural Monogram Emblem */}
                <div
                  className={`size-10 sm:size-11 rounded-xl flex items-center justify-center font-serif font-black text-xl shadow-md transition-all duration-300 group-hover:scale-105 ${
                    isScrolled
                      ? "bg-[#18181B] text-[#B4833E] border border-[#B4833E]/40"
                      : "bg-white/10 text-[#DFC8A7] border border-white/25 backdrop-blur-md"
                  }`}
                >
                  <span className="font-editorial italic">S</span>
                </div>

                {/* Brand Text */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`font-serif text-lg sm:text-xl font-bold tracking-tight transition-colors leading-none ${
                        isScrolled ? "text-stone-900" : "text-white"
                      }`}
                    >
                      SILVERSTONE
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[10px] tracking-[0.22em] uppercase font-bold text-[#B4833E]">
                      DEVELOPERS
                    </span>
                    <span
                      className={`size-1 rounded-full ${
                        isScrolled ? "bg-stone-300" : "bg-white/40"
                      }`}
                    />
                    <span
                      className={`text-[9px] font-semibold tracking-wider uppercase ${
                        isScrolled ? "text-stone-500" : "text-stone-300"
                      }`}
                    >
                      Surat
                    </span>
                  </div>
                </div>
              </Link>

              {/* Shreepad-Style Pill Menu Trigger Button */}
              <button
                type="button"
                onClick={() => setIsMobileOpen(true)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isScrolled
                    ? "bg-[#F3EFEA] hover:bg-stone-200 text-stone-900 border border-stone-300 shadow-xs"
                    : "bg-white/15 hover:bg-white/25 text-white border border-white/20 backdrop-blur-md"
                }`}
                aria-label="Open Navigation Menu"
              >
                <Menu className="size-3.5 text-[#B4833E]" />
                <span className="uppercase tracking-wider text-[11px]">Menu</span>
              </button>
            </div>

            {/* Center Desktop Navigation with Mega Dropdown */}
            <nav className="hidden xl:flex items-center gap-6">
              {/* Projects Mega Dropdown (Shreepad Style) */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnterProjects}
                onMouseLeave={handleMouseLeaveProjects}
              >
                <button
                  type="button"
                  onClick={() => handleLinkClick("#projects")}
                  className={`flex items-center gap-1 text-[13px] font-semibold tracking-wide py-1 transition-colors cursor-pointer ${
                    isScrolled
                      ? "text-stone-800 hover:text-stone-950"
                      : "text-stone-100 hover:text-white"
                  }`}
                >
                  <span>Ready Projects</span>
                  <ChevronDown
                    className={`size-3.5 transition-transform duration-200 text-[#B4833E] ${
                      isProjectsDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isProjectsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-[#E6E0D6] p-3 z-50 text-stone-900"
                    >
                      <div className="px-3 py-2 border-b border-stone-100 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#B4833E] block">
                          100% Ready To Live
                        </span>
                        <span className="text-xs font-semibold text-stone-700">
                          Surat Western Corridors
                        </span>
                      </div>

                      <div className="space-y-1">
                        {RUNNING_PROJECTS.map((project) => (
                          <button
                            key={project.name}
                            onClick={() => handleLinkClick(project.href)}
                            className="w-full text-left p-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors group flex items-start justify-between cursor-pointer"
                          >
                            <div>
                              <div className="text-xs font-bold text-stone-900 group-hover:text-[#B4833E] transition-colors flex items-center gap-1.5">
                                <span>{project.name}</span>
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold">
                                  BU Clear
                                </span>
                              </div>
                              <div className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">
                                {project.type}
                              </div>
                            </div>
                            <span className="text-[11px] font-bold text-[#B4833E] shrink-0 ml-2">
                              {project.price}
                            </span>
                          </button>
                        ))}
                      </div>

                      <div className="mt-2 pt-2 border-t border-stone-100 px-3 py-1 flex items-center justify-between text-[11px]">
                        <span className="text-stone-500 font-medium">
                          All 4 Campuses Completed
                        </span>
                        <button
                          onClick={() => handleLinkClick("#projects")}
                          className="font-bold text-[#B4833E] hover:underline"
                        >
                          View All →
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Standard Nav Links */}
              <button
                onClick={() => handleLinkClick("#why-ready-to-live")}
                className={`relative text-[13px] font-semibold tracking-wide py-1 cursor-pointer transition-colors group ${
                  isScrolled
                    ? "text-stone-700 hover:text-stone-950"
                    : "text-stone-200 hover:text-white"
                }`}
              >
                <span>Why Ready to Live</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B4833E] rounded-full transition-all duration-300 group-hover:w-full" />
              </button>

              <button
                onClick={() => handleLinkClick("#floor-plans")}
                className={`relative text-[13px] font-semibold tracking-wide py-1 cursor-pointer transition-colors group ${
                  isScrolled
                    ? "text-stone-700 hover:text-stone-950"
                    : "text-stone-200 hover:text-white"
                }`}
              >
                <span>Floor Plans</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B4833E] rounded-full transition-all duration-300 group-hover:w-full" />
              </button>

              <button
                onClick={() => handleLinkClick("#amenities")}
                className={`relative text-[13px] font-semibold tracking-wide py-1 cursor-pointer transition-colors group ${
                  isScrolled
                    ? "text-stone-700 hover:text-stone-950"
                    : "text-stone-200 hover:text-white"
                }`}
              >
                <span>Amenities</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B4833E] rounded-full transition-all duration-300 group-hover:w-full" />
              </button>

              <button
                onClick={() => handleLinkClick("#location")}
                className={`relative text-[13px] font-semibold tracking-wide py-1 cursor-pointer transition-colors group ${
                  isScrolled
                    ? "text-stone-700 hover:text-stone-950"
                    : "text-stone-200 hover:text-white"
                }`}
              >
                <span>Location</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B4833E] rounded-full transition-all duration-300 group-hover:w-full" />
              </button>

              <button
                onClick={() => handleLinkClick("#emi-calculator")}
                className={`relative text-[13px] font-semibold tracking-wide py-1 cursor-pointer transition-colors group ${
                  isScrolled
                    ? "text-stone-700 hover:text-stone-950"
                    : "text-stone-200 hover:text-white"
                }`}
              >
                <span>EMI Calculator</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B4833E] rounded-full transition-all duration-300 group-hover:w-full" />
              </button>
            </nav>

            {/* Right: Phone Hotline + Status + Single-Line Shreepad CTA Button */}
            <div className="flex items-center gap-3">
              {/* Phone quick call (Desktop) */}
              <a
                href="tel:+919904222000"
                className={`hidden md:flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full transition-colors ${
                  isScrolled
                    ? "text-stone-700 hover:text-[#B4833E] hover:bg-stone-100"
                    : "text-stone-200 hover:text-white hover:bg-white/10"
                }`}
              >
                <Phone className="size-3 text-[#B4833E]" />
                <span>+91 99042 22000</span>
              </a>

              {/* Ready Status Live Badge (Desktop) */}
              <div
                className={`hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide ${
                  isScrolled
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 backdrop-blur-md"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Ready to Live</span>
              </div>

              {/* Shreepad-Style Crisp Single-Line CTA Button */}
              <button
                onClick={() => handleOpenModal()}
                className="bg-[#B4833E] hover:bg-[#8F642B] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-2 whitespace-nowrap"
              >
                <Calendar className="size-3.5 shrink-0" />
                <span>Book Site Visit</span>
                <ArrowRight className="size-3.5 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. FULL-SCREEN ARCHITECTURAL MOBILE DRAWER */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-stone-950/80 backdrop-blur-xl flex flex-col justify-between"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-white text-stone-900 flex items-center justify-center font-serif font-black text-xl shadow-md border border-[#B4833E]">
                  S
                </div>
                <div>
                  <span className="font-serif text-lg font-bold text-white block leading-none">
                    SILVERSTONE
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#DFC8A7] font-bold">
                    Ready to Live • Surat
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close Navigation Menu"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Drawer Body: Navigation & Running Projects */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
              {/* Running Projects Strip */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B4833E] block mb-3">
                  COMPLETED READY DEVELOPMENTS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {RUNNING_PROJECTS.map((proj) => (
                    <button
                      key={proj.name}
                      onClick={() => handleLinkClick(proj.href)}
                      className="text-left p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[#B4833E]/50 transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white group-hover:text-[#DFC8A7]">
                          {proj.name}
                        </span>
                        <span className="text-[11px] font-bold text-[#DFC8A7]">
                          {proj.price}
                        </span>
                      </div>
                      <p className="text-xs text-stone-400 mt-1 line-clamp-1">
                        {proj.type}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Core Links */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B4833E] block mb-3">
                  EXPLORE THE COMMUNITY
                </span>
                <div className="divide-y divide-white/10 text-stone-200">
                  <button
                    onClick={() => handleLinkClick("#why-ready-to-live")}
                    className="w-full py-3 text-left font-serif text-lg font-bold hover:text-white flex items-center justify-between"
                  >
                    <span>Why Ready to Live</span>
                    <ArrowRight className="size-4 text-[#B4833E]" />
                  </button>
                  <button
                    onClick={() => handleLinkClick("#floor-plans")}
                    className="w-full py-3 text-left font-serif text-lg font-bold hover:text-white flex items-center justify-between"
                  >
                    <span>Floor Plan Blueprints</span>
                    <ArrowRight className="size-4 text-[#B4833E]" />
                  </button>
                  <button
                    onClick={() => handleLinkClick("#amenities")}
                    className="w-full py-3 text-left font-serif text-lg font-bold hover:text-white flex items-center justify-between"
                  >
                    <span>Delivered Amenities</span>
                    <ArrowRight className="size-4 text-[#B4833E]" />
                  </button>
                  <button
                    onClick={() => handleLinkClick("#location")}
                    className="w-full py-3 text-left font-serif text-lg font-bold hover:text-white flex items-center justify-between"
                  >
                    <span>Surat Connectivity</span>
                    <ArrowRight className="size-4 text-[#B4833E]" />
                  </button>
                  <button
                    onClick={() => handleLinkClick("#emi-calculator")}
                    className="w-full py-3 text-left font-serif text-lg font-bold hover:text-white flex items-center justify-between"
                  >
                    <span>Home Loan & EMI Calculator</span>
                    <ArrowRight className="size-4 text-[#B4833E]" />
                  </button>
                </div>
              </div>

              {/* RERA Trust Seal */}
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-3">
                <ShieldCheck className="size-6 text-emerald-400 shrink-0" />
                <div className="text-xs text-stone-300">
                  <strong className="text-white block">100% Legal Transparency</strong>
                  All Silverstone campuses are BU/OC approved with zero possession waiting risk.
                </div>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-5 border-t border-white/10 bg-stone-900/60 space-y-3">
              <button
                onClick={() => handleOpenModal()}
                className="w-full bg-[#B4833E] hover:bg-[#8F642B] text-white font-bold py-3.5 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="size-4" />
                <span>Book Actual Flat Walk-Through</span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+919904222000"
                  className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/10"
                >
                  <Phone className="size-3.5 text-[#DFC8A7]" />
                  <span>Call Hotline</span>
                </a>
                <a
                  href="https://wa.me/919904222000?text=Hello%20Silverstone%20Developers,%20I%20want%20to%20inquire%20about%20your%20ready%20to%20live%20residences."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#49C658] hover:bg-[#3db04b] text-white font-bold text-xs flex items-center justify-center gap-2"
                >
                  <MessageSquare className="size-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
export default Navbar
