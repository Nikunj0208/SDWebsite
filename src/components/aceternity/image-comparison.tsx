"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { Sparkles, CheckCircle2, Eye } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageComparisonProps {
  firstImage: string
  secondImage: string
  firstImageAlt?: string
  secondImageAlt?: string
  firstImageClass?: string
  secondImageClass?: string
  className?: string
  initialSliderPercentage?: number
  slideMode?: "hover" | "drag"
  firstLabel?: string
  secondLabel?: string
}

export function ImageComparison({
  firstImage,
  secondImage,
  firstImageAlt = "Actual Delivered Reality",
  secondImageAlt = "3D Architectural Render",
  className,
  initialSliderPercentage = 50,
  firstLabel = "100% Completed Reality",
  secondLabel = "Original 3D Render",
}: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(initialSliderPercentage)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    let percentage = (x / rect.width) * 100
    if (percentage < 0) percentage = 0
    if (percentage > 100) percentage = 100
    setSliderPosition(percentage)
  }, [])

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return
      handleMove(e.touches[0].clientX)
    },
    [isDragging, handleMove]
  )

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return
      handleMove(e.clientX)
    },
    [isDragging, handleMove]
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
      window.addEventListener("touchmove", handleTouchMove)
      window.addEventListener("touchend", handleMouseUp)
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-[400px] md:h-[540px] overflow-hidden rounded-2xl select-none cursor-ew-resize border border-[#E6E0D6] shadow-xl bg-[#FAF8F5]",
        className
      )}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* Background (Second Image - e.g. 3D Render) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={secondImage}
          alt={secondImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
          priority
        />
        <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-xs font-medium flex items-center gap-1.5 shadow-md">
          <Eye className="w-3.5 h-3.5 text-[#B4833E]" />
          <span>{secondLabel}</span>
        </div>
      </div>

      {/* Foreground (First Image - Actual Delivered Reality) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={firstImage}
          alt={firstImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
          priority
        />
        <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-[#15803D]/90 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 shadow-md border border-white/20">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#DCFCE7]" />
          <span>{firstLabel}</span>
        </div>
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#B4833E] border-2 border-white shadow-xl flex items-center justify-center text-white text-xs font-bold">
          <span className="flex items-center gap-0.5 tracking-tighter">
            ◀▶
          </span>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white/90 text-xs font-medium pointer-events-none flex items-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#B4833E]" />
        <span>Drag slider to compare Actual Site vs Render</span>
      </div>
    </div>
  )
}
