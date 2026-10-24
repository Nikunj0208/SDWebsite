"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"
import { Autoplay, EffectFade } from "swiper/modules"
import {
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  Sparkles,
} from "lucide-react"
import { ARCHITECTURAL_EASE } from "@/components/ui/architectural-reveal"
import { EditorialHeading } from "@/components/ui/editorial-heading"
import Magnet from "@/components/Magnet"

interface HeroSliderProps {
  onOpenVisitModal: (project?: string) => void
  onFilterChange?: (filters: { locality: string; configuration: string; status: string }) => void
}

const SLIDES = [
  {
    projectId: "spring-hill",
    projectName: "Spring Hill",
    tag: "SPRING HILL • READY TO LIVE",
    headline: "Walk Into Your Actual Apartment Today. Zero Waiting. Zero Construction Risk.",
    subhead: "Zero Waiting • 100% BU/OC Clear Handover • Pal Gauravpath, Surat",
    startingPrice: "From ₹47 Lakhs*",
    image: "/images/springhill-campus.jpeg",
    alt: "Spring Hill Homes Luxury Ready to Live Campus Surat",
  },
  {
    projectId: "raj-mahel",
    projectName: "Raj Mahel",
    tag: "RAJ MAHEL • 52 EXCLUSIVE FAMILIES",
    headline: "The Real Mahel in Surat.",
    subhead: "120ft & 60ft Corner Project • 100% East-West Vastu • Palatial Bungalows",
    startingPrice: "From ₹72.80 Lakhs*",
    image: "/images/rajmahel/entrance-gate.jpg",
    alt: "Raj Mahel Luxury Bungalows Surat",
  },
  {
    projectId: "applewood-homes",
    projectName: "Applewood Homes",
    tag: "APPLEWOOD HOMES • LIMITED 53 PLOTS",
    headline: "Move In This Month.",
    subhead: "20-Foot Wide Living Halls • Corner Road Touch • Immediate Possession",
    startingPrice: "From ₹42.27 Lakhs*",
    image: "/images/applewood/applewood-1.jpg",
    alt: "Applewood Homes Ready Row Houses Surat",
  },
  {
    projectId: "mahel-bungalows",
    projectName: "Mahel",
    tag: "MAHEL • 31 ELITE FAMILIES",
    headline: "Royal 3-Side Open Enclave.",
    subhead: "120ft Main Road Junction • Royal Theme Architecture • Prime TP Area",
    startingPrice: "From ₹72.80 Lakhs*",
    image: "/images/mahel/entrance-gate.jpg",
    alt: "Mahel Exclusive Bungalow Plot Project Surat",
  },
]

export function HeroSlider({ onOpenVisitModal }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const swiperRef = useRef<SwiperType | null>(null)
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // 1. Subtle Scroll Parallax (Architect moves slower than foreground)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"])

  const handleScrollToProjects = () => {
    const elem = document.querySelector("#projects")
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleScrollDown = () => {
    const elem = document.querySelector("#why-ready-to-live")
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[640px] max-h-[1080px] overflow-hidden bg-stone-950 text-white select-none"
    >
      {/* 1. KINEMATIC SWIPER BACKGROUND SLIDER WITH SCROLL PARALLAX */}
      <motion.div style={{ y: parallaxY }} className="absolute inset-0 w-full h-full">
        {isMounted ? (
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1200}
            autoplay={{
              delay: 6500,
              disableOnInteraction: false,
            }}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex)
            }}
            className="w-full h-full"
          >
            {SLIDES.map((slide, idx) => (
              <SwiperSlide key={slide.projectId} className="relative w-full h-full overflow-hidden">
                {/* Ken-Burns Continuous Cinema Zoom from 1.0 to 1.10 */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <motion.div
                    key={`${slide.projectId}-${activeIndex === idx}`}
                    initial={{ scale: 1.0 }}
                    animate={{ scale: activeIndex === idx ? 1.1 : 1.0 }}
                    transition={{
                      duration: 7.0,
                      ease: "linear",
                    }}
                    className="relative w-full h-full will-change-transform"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      priority={idx === 0}
                      sizes="100vw"
                      className="object-cover object-center"
                    />
                  </motion.div>
                </div>

                {/* Shreepad Luxury Vignette Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/45 to-stone-950/40" />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={SLIDES[0].image}
              alt={SLIDES[0].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/45 to-stone-950/40" />
          </div>
        )}
      </motion.div>

      {/* 2. MINIMALIST EDITORIAL SLIDE CONTENT WITH MASKED SPLIT-HEADING */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-20 pb-24 pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: ARCHITECTURAL_EASE }}
              className="max-w-3xl space-y-5"
            >
              {/* Clean Minimal Eyebrow Tag */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-[0.2em] uppercase text-[#DFC8A7]">
                <span>{SLIDES[activeIndex].tag}</span>
                <span className="size-1 rounded-full bg-[#B4833E]" />
                <span className="text-white font-semibold">{SLIDES[activeIndex].startingPrice}</span>
              </div>

              {/* Masked Editorial Headline */}
              <EditorialHeading
                text={SLIDES[activeIndex].headline}
                tag="h1"
                className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight drop-shadow-xl"
              />

              {/* Single Crisp Subtitle Line */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: ARCHITECTURAL_EASE }}
                className="text-base sm:text-lg text-stone-200 font-medium max-w-xl leading-relaxed drop-shadow"
              >
                {SLIDES[activeIndex].subhead}
              </motion.p>

              {/* Action Buttons with Desktop Magnetic Effect */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: ARCHITECTURAL_EASE }}
                className="flex flex-wrap items-center gap-3.5 pt-3"
              >
                <Magnet padding={35} magnetStrength={0.2} disabled={false}>
                  <button
                    onClick={handleScrollToProjects}
                    className="inline-flex items-center gap-2 bg-[#B4833E] hover:bg-[#8F642B] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg transition-transform active:scale-95 cursor-pointer group"
                  >
                    <span>Explore Residences</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Magnet>

                <Magnet padding={35} magnetStrength={0.2} disabled={false}>
                  <button
                    onClick={() => onOpenVisitModal(SLIDES[activeIndex].projectName)}
                    className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/25 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors cursor-pointer"
                  >
                    <Calendar className="size-4 text-[#DFC8A7]" />
                    <span>Schedule Site Visit</span>
                  </button>
                </Magnet>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 3. SHREEPAD-STYLE SLIDE CONTROLS & TIMED CHAMPAGNE BRONZE PROGRESS BAR */}
      <div className="absolute bottom-6 left-0 right-0 z-30 px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Left: Scroll Down Indicator */}
          <button
            onClick={handleScrollDown}
            className="hidden sm:flex items-center gap-2 text-stone-300 hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer group"
          >
            <span className="size-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#B4833E] transition-colors">
              <ArrowDown className="size-3.5 text-[#DFC8A7] animate-bounce" />
            </span>
            <span>Scroll to Explore</span>
          </button>

          {/* Right: Slide Counter, Animated Progress Bar & Chevrons */}
          <div className="flex items-center gap-3.5 bg-stone-950/85 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 shadow-2xl ml-auto">
            {/* Number counter */}
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold">
              <span className="text-[#DFC8A7] text-sm">0{activeIndex + 1}</span>
              <span className="text-stone-500">/</span>
              <span className="text-stone-400">0{SLIDES.length}</span>
            </div>

            {/* Timed Progress Bar (Fills 0% to 100% over 6.5s) */}
            <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden hidden sm:block">
              <motion.div
                key={`progress-${activeIndex}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6.5, ease: "linear" }}
                className="h-full bg-[#B4833E] rounded-full will-change-transform"
              />
            </div>

            <div className="h-3.5 w-px bg-white/20" />

            {/* Active Project Title */}
            <span className="text-xs font-serif font-bold text-stone-200 hidden md:inline-block max-w-[120px] truncate">
              {SLIDES[activeIndex].projectName}
            </span>

            <div className="h-3.5 w-px bg-white/20 hidden md:block" />

            {/* Chevrons */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                aria-label="Previous Slide"
                onClick={() => swiperRef.current?.slidePrev()}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Next Slide"
                onClick={() => swiperRef.current?.slideNext()}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSlider
