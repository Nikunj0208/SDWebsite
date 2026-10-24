"use client"

import { ReactNode } from "react"
import { motion, type HTMLMotionProps } from "framer-motion"

// Custom luxury architectural easing curve (Expo Out)
export const ARCHITECTURAL_EASE = [0.16, 1, 0.3, 1] as const

interface ArchitecturalRevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  delay?: number
  duration?: number
  distance?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
  once?: boolean
}

export function ArchitecturalReveal({
  children,
  delay = 0,
  duration = 0.9,
  distance = 36,
  direction = "up",
  className = "",
  once = true,
  ...props
}: ArchitecturalRevealProps) {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }

  const offset = directions[direction]

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-10%" }}
      transition={{
        duration,
        delay,
        ease: ARCHITECTURAL_EASE,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface StaggerRevealContainerProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  staggerDelay?: number
  delayChildren?: number
  className?: string
  once?: boolean
}

export function StaggerRevealContainer({
  children,
  staggerDelay = 0.08,
  delayChildren = 0,
  className = "",
  once = true,
  ...props
}: StaggerRevealContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10%" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const staggerRevealItem = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: ARCHITECTURAL_EASE,
    },
  },
}
