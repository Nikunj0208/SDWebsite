"use client"

import Image from "next/image"
import { BlurFade } from "@/components/magicui/blur-fade"
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Dumbbell,
  Users,
  Sun,
  Flame,
  CheckCircle2,
  TreePine,
  Car
} from "lucide-react"

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20 md:py-28 bg-[#F3EFEA] border-y border-[#E6E0D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <BlurFade delay={0.05} yOffset={10}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E6E0D6] text-xs font-semibold text-[#18181B] mb-3 shadow-sm">
              <Sparkles className="size-3.5 text-[#B4833E]" />
              <span>Engineered For Surat Family Comfort</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.1} yOffset={12}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#18181B] tracking-tight">
              Lifestyle & Completed Campus Amenities
            </h2>
          </BlurFade>

          <BlurFade delay={0.15} yOffset={12}>
            <p className="mt-3 text-sm sm:text-base text-[#57534E] leading-relaxed">
              Not futuristic promises in phase 4. Every lifestyle amenity at Silverstone campuses is 100% operational, fully maintained, and active today.
            </p>
          </BlurFade>
        </div>

        {/* Bento Grid */}
        <BlurFade delay={0.2} yOffset={16}>
          <BentoGrid className="auto-rows-[20rem] md:auto-rows-[22rem]">
            {/* 1. Jain & Hindu Temple (Large Card, Col Span 2 on md) */}
            <BentoCard
              name="Jain & Hindu Mandir & Meditation Lawn"
              className="md:col-span-2 bg-[#FAF8F5]"
              badge="Spiritual Harmony"
              Icon={Flame}
              description="Dedicated sacred spiritual haven inside the campus with serene water elements, peaceful manicured lawns, and daily prayer atmosphere designed for peace of mind across all generations."
              cta="Explore Campus Sanctuary"
              background={
                <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden sm:block">
                  <Image
                    src="/images/rajmahel/03 Garden.jpg"
                    alt="Temple Garden"
                    fill
                    className="object-cover"
                  />
                </div>
              }
            />

            {/* 2. Covered EV-Ready Parking */}
            <BentoCard
              name="Allotted Covered EV Parking"
              className="bg-white"
              badge="Future Proof"
              Icon={Zap}
              description="Dedicated personal parking spaces with pre-wired electric vehicle charging conduits and wide concrete internal roads for effortless movement."
              cta="View Parking Layout"
            />

            {/* 3. Operational Clubhouse & Gym */}
            <BentoCard
              name="Clubhouse & Fitness Studio"
              className="bg-white"
              badge="Active & Operational"
              Icon={Dumbbell}
              description="Fully equipped modern cardio and strength gym, indoor games lounge (table tennis, chess), and banquet space for family celebrations."
              cta="Tour Clubhouse"
              background={
                <div className="absolute bottom-0 right-0 w-full h-1/2 opacity-15 pointer-events-none">
                  <Image
                    src="/images/rajmahel/06 Club House.jpg"
                    alt="Clubhouse"
                    fill
                    className="object-cover"
                  />
                </div>
              }
            />

            {/* 4. Senior Citizen Deck & Kids Turf */}
            <BentoCard
              name="Landscaped Senior Deck & Kids Turf"
              className="md:col-span-2 bg-[#FAF8F5]"
              badge="Multi-Generational"
              Icon={TreePine}
              description="A safe sanctuary with anti-skid reflexology walking tracks, shaded gazebos for senior evening gatherings, and soft cushioned safety play turfs for children."
              cta="View Landscape"
              background={
                <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden sm:block">
                  <Image
                    src="/images/rajmahel/04 Garden.jpg"
                    alt="Landscaped Garden"
                    fill
                    className="object-cover"
                  />
                </div>
              }
            />

            {/* 5. 3-Tier Security */}
            <BentoCard
              name="3-Tier 24/7 Monitored Security"
              className="bg-white"
              badge="100% Secure"
              Icon={ShieldCheck}
              description="Arched entrance gate with security cabins, RFID access control, and 24/7 high-definition CCTV coverage along all campus perimeters."
              cta="Security Protocols"
            />

            {/* 6. Green Solar Common Utilities */}
            <BentoCard
              name="Solar Powered Common Utilities"
              className="md:col-span-2 bg-white"
              badge="Low Society Maintenance"
              Icon={Sun}
              description="Rooftop solar power generation specifically powering campus street lighting, garden irrigation pumps, and clubhouse utilities for lifetime monthly savings."
              cta="Maintenance Savings"
            />
          </BentoGrid>
        </BlurFade>
      </div>
    </section>
  )
}
