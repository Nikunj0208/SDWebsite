"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import { motion } from "framer-motion"
import { ARCHITECTURAL_EASE } from "./architectural-reveal"

interface ArchitecturalImageProps extends Omit<ImageProps, "className"> {
  containerClassName?: string
  imageClassName?: string
  curtainColor?: string
  delay?: number
}

export function ArchitecturalImage({
  src,
  alt,
  containerClassName = "",
  imageClassName = "",
  curtainColor = "bg-[#F3EFEA]",
  delay = 0,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 650px",
  ...rest
}: ArchitecturalImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* 1. Monumental Image Scaling Down from 1.16 to 1.0 */}
      <motion.div
        initial={{ scale: 1.16, opacity: 0.8 }}
        whileInView={{ scale: 1.0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration: 1.4,
          delay: delay + 0.1,
          ease: ARCHITECTURAL_EASE,
        }}
        className="relative w-full h-full will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          onLoad={() => setIsLoaded(true)}
          className={`object-cover ${imageClassName}`}
          {...rest}
        />
      </motion.div>

      {/* 2. Warm Travertine Stone Curtain Wipe Overlay */}
      <motion.div
        initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 0% 100% 0%)" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration: 1.1,
          delay,
          ease: ARCHITECTURAL_EASE,
        }}
        className={`absolute inset-0 z-20 pointer-events-none ${curtainColor}`}
      />
    </div>
  )
}
export default ArchitecturalImage
