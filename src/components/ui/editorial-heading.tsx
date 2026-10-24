"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { ARCHITECTURAL_EASE } from "./architectural-reveal"

interface EditorialHeadingProps {
  text: string
  tag?: "h1" | "h2" | "h3" | "h4" | "p"
  className?: string
  delay?: number
  staggerDuration?: number
  highlightWords?: string[]
  highlightClassName?: string
}

export function EditorialHeading({
  text,
  tag = "h2",
  className = "",
  delay = 0,
  staggerDuration = 0.04,
  highlightWords = [],
  highlightClassName = "text-[#B4833E] italic",
}: EditorialHeadingProps) {
  const words = useMemo(() => text.split(" "), [text])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDuration,
        delayChildren: delay,
      },
    },
  }

  const wordVariants = {
    hidden: {
      y: "115%",
      opacity: 0,
      rotateX: 18,
    },
    visible: {
      y: "0%",
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.85,
        ease: ARCHITECTURAL_EASE,
      },
    },
  }

  const Tag = motion[tag] as typeof motion.h2

  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={containerVariants}
      className={`font-serif tracking-tight leading-[1.12] ${className}`}
    >
      {words.map((word, idx) => {
        const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
        const isHighlight = highlightWords.includes(cleanWord)

        return (
          <span
            key={`${word}-${idx}`}
            className="inline-block overflow-hidden pb-1 -mb-1 mr-[0.26em] last:mr-0 align-top"
          >
            <motion.span
              variants={wordVariants}
              className={`inline-block origin-bottom will-change-transform ${
                isHighlight ? highlightClassName : ""
              }`}
            >
              {word}
            </motion.span>
          </span>
        )
      })}
    </Tag>
  )
}
export default EditorialHeading
