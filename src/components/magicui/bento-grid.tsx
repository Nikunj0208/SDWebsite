"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function BentoGrid({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-5",
        className
      )}
    >
      {children}
    </div>
  )
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  badge,
}: {
  name: string
  className?: string
  background?: ReactNode
  Icon?: any
  description: string
  href?: string
  cta?: string
  badge?: string
}) {
  return (
    <div
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl",
        "bg-white border border-[#E6E0D6] shadow-[0_4px_20px_-4px_rgba(24,24,27,0.05)]",
        "transition-all duration-300 hover:shadow-[0_12px_32px_-4px_rgba(180,131,62,0.12)] hover:border-[#B4833E]/50",
        className
      )}
    >
      <div className="absolute inset-0 z-0 h-full w-full">{background}</div>

      <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300">
        {badge && (
          <span className="inline-flex self-start items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#DCFCE7] text-[#15803D] border border-[#86EFAC] mb-2">
            {badge}
          </span>
        )}
        {Icon && (
          <div className="size-11 rounded-xl bg-[#FAF8F5] border border-[#E6E0D6] flex items-center justify-center text-[#B4833E] shadow-sm mb-3 group-hover:scale-105 group-hover:bg-[#B4833E] group-hover:text-white transition-all duration-300">
            <Icon className="size-5" />
          </div>
        )}
        <h3 className="text-xl font-serif font-bold text-[#18181B] tracking-tight">
          {name}
        </h3>
        <p className="max-w-lg text-sm text-[#57534E] leading-relaxed">
          {description}
        </p>
      </div>

      {cta && (
        <div className="pointer-events-none z-10 flex w-full translate-y-2 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-xs font-semibold text-[#B4833E] uppercase tracking-wider flex items-center gap-1">
            {cta} →
          </span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-[#B4833E]/[0.02]" />
    </div>
  )
}
