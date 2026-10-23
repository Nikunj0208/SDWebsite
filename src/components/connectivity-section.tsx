"use client"

import { useState } from "react"
import Image from "next/image"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CONNECTIVITY_RADAR } from "@/data/site-data"
import {
  MapPin,
  Navigation,
  Clock,
  Car,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  ExternalLink,
  Sparkles,
  Compass
} from "lucide-react"

export function ConnectivitySection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)
  const currentCategory = CONNECTIVITY_RADAR[activeCategoryIndex]

  const categoryIcons = [Car, GraduationCap, HeartPulse, ShoppingBag]

  return (
    <section id="location" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <BlurFade delay={0.05} yOffset={10}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E6E0D6] text-xs font-semibold text-[#18181B] mb-3 shadow-sm">
              <Compass className="size-3.5 text-[#B4833E]" />
              <span>Surat High-Growth TP Corridor</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.1} yOffset={12}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#18181B] tracking-tight">
              Surat Connectivity & Landmark Radar
            </h2>
          </BlurFade>

          <BlurFade delay={0.15} yOffset={12}>
            <p className="mt-3 text-sm sm:text-base text-[#57534E] leading-relaxed">
              Strategically placed in the SMC New TP zone, just 1 KM from New Pal Gauravpath and 300 meters from Surat's 300ft 2nd Ring Road for effortless city-wide transit.
            </p>
          </BlurFade>
        </div>

        {/* Tabbed Category Switcher */}
        <BlurFade delay={0.2} yOffset={12}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {CONNECTIVITY_RADAR.map((cat, idx) => {
              const Icon = categoryIcons[idx]
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer min-h-12 flex items-center gap-2 ${
                    activeCategoryIndex === idx
                      ? "bg-[#18181B] text-white shadow-md scale-102"
                      : "bg-white text-[#57534E] border border-[#E6E0D6] hover:bg-[#F3EFEA] hover:text-[#18181B]"
                  }`}
                >
                  <Icon className={`size-4 ${activeCategoryIndex === idx ? "text-[#B4833E]" : "text-[#57534E]"}`} />
                  <span>{cat.category}</span>
                </button>
              )
            })}
          </div>
        </BlurFade>

        {/* Interactive Layout: Left Radar Places List / Right Road Map Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Distance & Drive-Time Radar Cards */}
          <div className="lg:col-span-6 space-y-3">
            <BlurFade delay={0.25} yOffset={14}>
              <div className="bg-white rounded-3xl p-6 border border-[#E6E0D6] shadow-xl space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#E6E0D6]">
                  <h3 className="font-serif text-xl font-bold text-[#18181B]">
                    {currentCategory.category} Destinations
                  </h3>
                  <span className="text-xs text-[#57534E]">
                    Drive-times from campus gate
                  </span>
                </div>

                <div className="divide-y divide-[#E6E0D6]">
                  {currentCategory.places.map((place, i) => (
                    <div
                      key={i}
                      className="py-3.5 flex items-center justify-between gap-3 hover:bg-[#FAF8F5] transition-colors rounded-xl px-2"
                    >
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-[#FAF8F5] border border-[#E6E0D6] flex items-center justify-center text-[#B4833E] shrink-0">
                          <MapPin className="size-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-xs sm:text-sm text-[#18181B]">
                            {place.name}
                          </h4>
                          <span className="text-[11px] text-[#57534E]">
                            Distance: {place.distance}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#DCFCE7] text-[#15803D] font-bold text-xs border border-[#86EFAC] shrink-0">
                        <Clock className="size-3.5" />
                        <span>{place.time}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Surat SMC TP Infrastructure Note */}
                <div className="pt-3 border-t border-[#E6E0D6] text-xs text-[#57534E] leading-relaxed">
                  <span className="font-bold text-[#18181B]">Future Growth Advantage: </span>
                  Surat Municipal Corporation (SMC) TP Master Plan provides wide 300ft, 120ft, and 60ft arterial roads directly framing Silverstone projects.
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right: Road Map & Live Location Card */}
          <div className="lg:col-span-6 space-y-4">
            <BlurFade delay={0.3} yOffset={14}>
              <div className="relative rounded-3xl overflow-hidden border border-[#E6E0D6] shadow-xl bg-white p-3 group">
                <div className="relative h-[340px] sm:h-[400px] rounded-2xl overflow-hidden bg-[#FAF8F5]">
                  <Image
                    src="/images/surat-connectivity-map.jpg"
                    alt="Surat Pal Gauravpath & Ring Road Connectivity Map"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-[#18181B] text-white hover:bg-[#18181B] border-none px-3 py-1 text-xs font-semibold">
                      Official TP Road Master Plan
                    </Badge>
                  </div>
                </div>

                {/* Map Bottom Action Bar */}
                <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-center sm:text-left">
                    <h4 className="font-serif font-bold text-base text-[#18181B]">
                      Silverstone Developers Site Office
                    </h4>
                    <p className="text-xs text-[#57534E]">
                      New Pal Gauravpath, Surat, Gujarat
                    </p>
                  </div>

                  <a
                    href="https://maps.google.com/?ftid=0x3be04b007d49da49:0x9a524da3a7c1613a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#B4833E] hover:bg-[#8F642B] text-white text-xs font-semibold shadow-md min-h-11 transition-all cursor-pointer"
                  >
                    <Navigation className="size-3.5" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
