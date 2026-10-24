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
  ShieldCheck,
} from "lucide-react"
import { ARCHITECTURAL_EASE } from "@/components/ui/architectural-reveal"
import { EditorialHeading } from "@/components/ui/editorial-heading"
import Magnet from "@/components/Magnet"
import { HERO_SLIDES, HERO_TRUST_PILL } from "@/constants/silverstoneData"
import { useLanguage } from "@/context/LanguageContext"

interface HeroSliderProps {
  onOpenVisitModal: (project?: string) => void
  onFilterChange?: (filters: { locality: string; configuration: string; status: string }) => void
}

export function HeroSlider({ onOpenVisitModal }: HeroSliderProps) {
  const { lang, t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const swiperRef = useRef<SwiperType | null>(null)
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // 1. Subtle Scroll Parallax (Architecture moves slower than foreground)
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
    const elem = document.querySelector("#why-invest") || document.querySelector("#projects")
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" })
    }
  }

  const currentSlide = HERO_SLIDES[activeIndex] || HERO_SLIDES[0]

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
              setActiveIndex(swiper.realIndex % HERO_SLIDES.length)
            }}
            className="w-full h-full"
          >
            {HERO_SLIDES.map((slide, idx) => (
              <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden">
                <div className="relative w-full h-full animate-kenburns">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    priority={idx === 0}
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                  {/* Cinematic Luxury Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/45 to-stone-950/40" />
                  <div className="absolute inset-0 bg-stone-950/20" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={HERO_SLIDES[0].image}
              alt={HERO_SLIDES[0].alt}
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
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-28 pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeIndex}-${lang}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: ARCHITECTURAL_EASE }}
              className="max-w-3xl space-y-4"
            >
              {/* Top Trust Pill (Max 4 words: RERA APPROVED • SMC & NEW TP AREA • LIVE & READY CAMPUSES) */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-bold tracking-[0.16em] uppercase text-[#DFC8A7]">
                <ShieldCheck className="size-3.5 text-emerald-400 shrink-0" />
                <span>{lang === "GU" ? HERO_TRUST_PILL.gu : HERO_TRUST_PILL.en}</span>
              </div>

              {/* Eyebrow Tag Pill: Max 4 words */}
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-[#B4833E]/20 border border-[#DFC8A7]/40 text-xs font-bold tracking-[0.2em] uppercase text-[#DFC8A7]">
                  {currentSlide.tag}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-white border border-white/20">
                  {currentSlide.startingPrice}
                </span>
              </div>

              {/* Masked Editorial Headline: Max 8 words */}
              <EditorialHeading
                text={lang === "GU" ? currentSlide.headlineGu : currentSlide.headline}
                tag="h1"
                className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight drop-shadow-xl leading-[1.12]"
              />

              {/* Subhead: Max 15 words */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: ARCHITECTURAL_EASE }}
                className="text-sm sm:text-base text-stone-200 font-medium max-w-xl leading-relaxed drop-shadow"
              >
                {lang === "GU" ? currentSlide.subheadGu : currentSlide.subhead}
              </motion.p>

              {/* Quick Specs Strip */}
              {currentSlide.specsStrip && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: ARCHITECTURAL_EASE }}
                  className="flex flex-wrap items-center gap-2 pt-1"
                >
                  {(lang === "GU" ? currentSlide.specsStripGu : currentSlide.specsStrip).map(
                    (spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/15 text-xs text-stone-300 font-medium"
                      >
                        <span className="size-1 rounded-full bg-[#B4833E]" />
                        <span>{spec}</span>
                      </span>
                    )
                  )}
                </motion.div>
              )}

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
                    <span>{t("Explore 4 Ready Projects", "4 રેડી પ્રોજેક્ટ્સ જુઓ")}</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Magnet>

                <Magnet padding={35} magnetStrength={0.2} disabled={false}>
                  <button
                    onClick={() => onOpenVisitModal(currentSlide.projectName)}
                    className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/25 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors cursor-pointer"
                  >
                    <Calendar className="size-4 text-[#DFC8A7]" />
                    <span>{t("Schedule Site Visit", "સાઇટ વિઝિટ બુક કરો")}</span>
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
            <span>{t("Scroll to Explore", "એક્સપ્લોર કરવા સ્ક્રોલ કરો")}</span>
          </button>

          {/* Right: Slide Counter, Animated Progress Bar & Chevrons */}
          <div className="flex items-center gap-3.5 bg-stone-950/85 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 shadow-2xl ml-auto">
            {/* Number counter */}
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold">
              <span className="text-[#DFC8A7] text-sm">0{activeIndex + 1}</span>
              <span className="text-stone-500">/</span>
              <span className="text-stone-400">0{HERO_SLIDES.length}</span>
            </div>

            {/* Timed Champagne Bronze Slide Progress Bar */}
            <div className="w-16 sm:w-24 h-1 bg-white/20 rounded-full overflow-hidden relative">
              <motion.div
                key={activeIndex}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6.5, ease: "linear" }}
                className="absolute top-0 bottom-0 left-0 bg-[#B4833E] rounded-full"
              />
            </div>

            {/* Navigation Chevrons */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                className="size-7 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                className="size-7 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="size-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSlider
