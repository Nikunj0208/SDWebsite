"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Slider } from "@/components/ui/slider"
import {
  Calculator,
  Building,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Percent,
  Calendar,
  IndianRupee,
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  Navigation,
  ExternalLink,
  Car,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Award,
} from "lucide-react"

export const BANK_PARTNERS = [
  { name: "State Bank of India", approval: "Instant Pre-Approved" },
  { name: "HDFC Bank", approval: "Digital Sanction in 48 Hrs" },
  { name: "ICICI Bank", approval: "Preferred Builder Rate" },
  { name: "Bank of Baroda", approval: "Lowest Processing Fee" },
  { name: "Kotak Mahindra Bank", approval: "Fast-Track Approval" },
]

export const CONNECTIVITY_DESTINATIONS = [
  {
    category: "Highways & Expressways",
    icon: Car,
    places: [
      { name: "Surat 2nd Ring Road (300 ft Wide)", distance: "300 Meters", time: "1 min" },
      { name: "New Pal Gauravpath Main Corridor", distance: "1.0 KM", time: "3 mins" },
      { name: "New Dandi 300ft Express Road", distance: "400 Meters", time: "2 mins" },
      { name: "Surat International Airport", distance: "14 KM", time: "18 mins" },
    ],
  },
  {
    category: "Top Schools & Academies",
    icon: GraduationCap,
    places: [
      { name: "Delhi Public School (DPS) Tapi", distance: "3.2 KM", time: "6 mins" },
      { name: "G.D. Goenka International School", distance: "4.5 KM", time: "8 mins" },
      { name: "LP Savani Academy & Vidhyalaya", distance: "2.8 KM", time: "5 mins" },
    ],
  },
  {
    category: "Hospitals & Healthcare",
    icon: HeartPulse,
    places: [
      { name: "Apple Super Speciality Hospital", distance: "2.5 KM", time: "5 mins" },
      { name: "Shalby Multispeciality Hospital", distance: "4.8 KM", time: "9 mins" },
      { name: "Sunshine Global Hospital", distance: "5.2 KM", time: "10 mins" },
    ],
  },
  {
    category: "Shopping & Retail Malls",
    icon: ShoppingBag,
    places: [
      { name: "DMart Pal & Supermarkets", distance: "1.8 KM", time: "4 mins" },
      { name: "VR Surat Shopping Mall & Inox", distance: "6.5 KM", time: "12 mins" },
      { name: "Rahul Raj Mall & Multiplex", distance: "6.8 KM", time: "12 mins" },
    ],
  },
]

export function ConversionFooter() {
  // EMI Calculator State
  const [propertyPriceLakhs, setPropertyPriceLakhs] = useState(65)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  const [interestRate, setInterestRate] = useState(8.5)
  const [tenureYears, setTenureYears] = useState(20)

  // Visit Scheduler Form State
  const [userName, setUserName] = useState("")
  const [userPhone, setUserPhone] = useState("")
  const [selectedProject, setSelectedProject] = useState("Spring Hill")
  const [selectedDate, setSelectedDate] = useState("This Weekend")

  // Connectivity Category Tab
  const [activeConnIndex, setActiveConnIndex] = useState(0)

  // Math Calculations for EMI
  const {
    loanAmount,
    downPaymentAmount,
    monthlyEmi,
    totalPayment,
    totalInterest,
    principalPercent,
    interestPercent,
  } = useMemo(() => {
    const totalPropVal = propertyPriceLakhs * 100000
    const downPayment = (totalPropVal * downPaymentPercent) / 100
    const loan = totalPropVal - downPayment

    const monthlyRate = interestRate / 12 / 100
    const totalMonths = tenureYears * 12

    let emi = 0
    if (loan > 0 && monthlyRate > 0) {
      emi =
        (loan * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
    }

    const totalPaid = emi * totalMonths
    const interest = totalPaid - loan

    const pPercent = totalPaid > 0 ? (loan / totalPaid) * 100 : 50
    const iPercent = totalPaid > 0 ? (interest / totalPaid) * 100 : 50

    return {
      loanAmount: loan,
      downPaymentAmount: downPayment,
      monthlyEmi: Math.round(emi),
      totalPayment: Math.round(totalPaid),
      totalInterest: Math.round(interest),
      principalPercent: Math.round(pPercent),
      interestPercent: Math.round(iPercent),
    }
  }, [propertyPriceLakhs, downPaymentPercent, interestRate, tenureYears])

  const formatINR = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(val)
  }

  const getSliderVal = (v: number | readonly number[]): number => {
    return Array.isArray(v) ? (v[0] as number) : (v as number)
  }

  // Handle WhatsApp Scheduler submission
  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!userPhone || userPhone.length < 10) return

    const message = encodeURIComponent(
      `Hello Silverstone Developers,\n\nI want to schedule an actual on-site visit for *${selectedProject}*.\n\n*Name:* ${
        userName || "Prospective Buyer"
      }\n*Phone:* +91 ${userPhone}\n*Preferred Date / Slot:* ${selectedDate}\n*Source:* Silverstone Official Website`
    )

    window.open(`https://wa.me/919904222000?text=${message}`, "_blank")
  }

  return (
    <div className="relative">
      {/* ========================================================= */}
      {/* 1. SURAT CONNECTIVITY & LANDMARK RADAR SECTION            */}
      {/* ========================================================= */}
      <section id="location" className="py-20 lg:py-24 bg-[#FAF8F5] border-b border-[#E6E0D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E0D6] text-xs font-bold tracking-[0.2em] uppercase text-stone-800 shadow-xs">
              <MapPin className="size-3.5 text-[#B4833E]" />
              <span>SURAT 300FT RING ROAD & PAL GAURAVPATH TP CORRIDOR</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#18181B] tracking-tight leading-[1.14]">
              Surat Connectivity & Landmark Radar
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Situated in the rapidly developing SMC New TP Area, just 1 KM from New Pal Gauravpath and 300 meters from Surat's 300ft 2nd Ring Road for rapid citywide connectivity.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {CONNECTIVITY_DESTINATIONS.map((cat, idx) => {
              const IconComp = cat.icon
              const isActive = activeConnIndex === idx
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveConnIndex(idx)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer min-h-11 flex items-center gap-2 ${
                    isActive
                      ? "bg-[#18181B] text-white shadow-md"
                      : "bg-white text-stone-600 border border-[#E6E0D6] hover:bg-[#F3EFEA] hover:text-stone-900"
                  }`}
                >
                  <IconComp className={`size-4 ${isActive ? "text-[#DFC8A7]" : "text-stone-400"}`} />
                  <span>{cat.category}</span>
                </button>
              )
            })}
          </div>

          {/* Radar Grid: Left Distance Cards / Right Official Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Destinations List */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-[#E6E0D6] shadow-md space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#E6E0D6]">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                  {CONNECTIVITY_DESTINATIONS[activeConnIndex].category}
                </h3>
                <span className="text-xs text-stone-500 font-medium">
                  Travel times from Silverstone Campus Gate
                </span>
              </div>

              <div className="divide-y divide-[#E6E0D6]">
                {CONNECTIVITY_DESTINATIONS[activeConnIndex].places.map((place, i) => (
                  <div
                    key={i}
                    className="py-3.5 flex items-center justify-between gap-3 hover:bg-[#FAF8F5] transition-colors rounded-xl px-2"
                  >
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-[#FAF8F5] border border-[#E6E0D6] flex items-center justify-center text-[#B4833E] shrink-0">
                        <MapPin className="size-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-xs sm:text-sm text-stone-900">
                          {place.name}
                        </h4>
                        <span className="text-[11px] text-stone-500">
                          Exact Distance: {place.distance}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs border border-emerald-200 shrink-0">
                      <Clock className="size-3.5 text-emerald-600" />
                      <span>{place.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#E6E0D6] text-xs text-stone-500 leading-relaxed">
                <strong className="text-stone-900 font-semibold">SMC Master Plan: </strong>
                300ft, 120ft, and 60ft arterial TP roads provide effortless access to Adajan, Pal, Surat Railway Station, and Surat Airport.
              </div>
            </div>

            {/* Right Column: Road Map Graphic */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-3 border border-[#E6E0D6] shadow-md group">
              <div className="relative h-[340px] sm:h-[380px] rounded-2xl overflow-hidden bg-[#FAF8F5]">
                <Image
                  src="/images/surat-connectivity-map.jpg"
                  alt="Surat Pal Gauravpath & Ring Road Connectivity Map"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-[#18181B] text-white text-xs font-semibold shadow-xs">
                    Official Surat TP Road Map
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-100 mt-2">
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">
                    Silverstone Developers Site Office
                  </h4>
                  <p className="text-xs text-stone-500">
                    Near New Pal Gauravpath & 2nd Ring Road Junction, Surat
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?ftid=0x3be04b007d49da49:0x9a524da3a7c1613a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#B4833E] hover:bg-[#8F642B] text-white text-xs font-bold shadow-xs transition-colors"
                >
                  <Navigation className="size-3.5" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. INTERACTIVE EMI CALCULATOR & BANK TIE-UPS               */}
      {/* ========================================================= */}
      <section id="emi-calculator" className="py-20 lg:py-24 bg-[#F3EFEA] border-b border-[#E6E0D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E0D6] text-xs font-bold tracking-[0.2em] uppercase text-stone-800 shadow-xs">
              <Calculator className="size-3.5 text-[#B4833E]" />
              <span>INSTANT FINANCIAL TRANSPARENCY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#18181B] tracking-tight leading-[1.14]">
              Home Loan & EMI Calculator
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Plan your ready-to-move home purchase with zero hidden surprises. With 100% BU/OC certification, Silverstone residences qualify for immediate disbursement and lowest home loan interest rates.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E6E0D6] shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Sliders Column */}
              <div className="lg:col-span-7 space-y-7">
                {/* 1. Property Price Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-900">
                      Property Price:
                    </label>
                    <span className="font-mono font-bold text-base sm:text-lg text-[#B4833E] bg-[#FAF8F5] px-3 py-1 rounded-xl border border-[#E6E0D6]">
                      ₹{propertyPriceLakhs} Lakhs
                    </span>
                  </div>
                  <Slider
                    value={[propertyPriceLakhs]}
                    min={42}
                    max={250}
                    step={1}
                    onValueChange={(val) => setPropertyPriceLakhs(getSliderVal(val))}
                    className="py-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-stone-500">
                    <span>Min: ₹42 Lakhs (Applewood)</span>
                    <span>Max: ₹2.5 Crore (Bungalow Estate)</span>
                  </div>
                </div>

                {/* 2. Down Payment Slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-900">
                      Down Payment ({downPaymentPercent}%):
                    </label>
                    <span className="font-mono font-bold text-sm sm:text-base text-stone-900 bg-[#FAF8F5] px-3 py-1 rounded-xl border border-[#E6E0D6]">
                      ₹{formatINR(downPaymentAmount)}
                    </span>
                  </div>
                  <Slider
                    value={[downPaymentPercent]}
                    min={10}
                    max={50}
                    step={5}
                    onValueChange={(val) => setDownPaymentPercent(getSliderVal(val))}
                    className="py-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-stone-500">
                    <span>10% Upfront</span>
                    <span>Required Loan: ₹{formatINR(loanAmount)}</span>
                    <span>50%</span>
                  </div>
                </div>

                {/* 3. Interest Rate & Tenure */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-stone-900">
                        Interest Rate:
                      </label>
                      <span className="font-mono font-bold text-sm text-stone-900 bg-[#FAF8F5] px-2.5 py-1 rounded-xl border border-[#E6E0D6]">
                        {interestRate}%
                      </span>
                    </div>
                    <Slider
                      value={[interestRate]}
                      min={7.5}
                      max={11.5}
                      step={0.1}
                      onValueChange={(val) => setInterestRate(Number(getSliderVal(val).toFixed(1)))}
                      className="py-2 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-stone-500">
                      <span>7.5%</span>
                      <span>Default: 8.5%</span>
                      <span>11.5%</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-stone-900">
                        Tenure (Years):
                      </label>
                      <span className="font-mono font-bold text-sm text-stone-900 bg-[#FAF8F5] px-2.5 py-1 rounded-xl border border-[#E6E0D6]">
                        {tenureYears} Years
                      </span>
                    </div>
                    <Slider
                      value={[tenureYears]}
                      min={5}
                      max={30}
                      step={1}
                      onValueChange={(val) => setTenureYears(getSliderVal(val))}
                      className="py-2 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-stone-500">
                      <span>5 Yrs</span>
                      <span>Standard: 20 Yrs</span>
                      <span>30 Yrs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Output Display Card */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#18181B] to-[#27272A] text-white shadow-xl space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#DCFCE7] text-[#15803D] text-xs font-bold mb-3">
                    <span className="size-1.5 rounded-full bg-[#15803D] animate-ping" />
                    <span>Instant Pre-Approval Tie-Up</span>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 block">
                    Estimated Monthly EMI
                  </span>
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1 flex items-baseline gap-1">
                    <span>₹{formatINR(monthlyEmi)}</span>
                    <span className="text-xs font-normal text-zinc-400 font-sans">
                      / month*
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-zinc-300">
                    <span className="flex items-center gap-1.5">
                      <span className="size-2.5 rounded-full bg-[#B4833E]" />
                      Principal: {principalPercent}%
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="size-2.5 rounded-full bg-zinc-500" />
                      Interest: {interestPercent}%
                    </span>
                  </div>
                  <div className="h-3 w-full rounded-full overflow-hidden bg-zinc-700 flex">
                    <div
                      className="h-full bg-[#B4833E] transition-all duration-300"
                      style={{ width: `${principalPercent}%` }}
                    />
                    <div
                      className="h-full bg-zinc-500 transition-all duration-300"
                      style={{ width: `${interestPercent}%` }}
                    />
                  </div>
                </div>

                {/* Breakdown Summary */}
                <div className="divide-y divide-zinc-700/60 text-xs text-zinc-300">
                  <div className="py-2 flex justify-between">
                    <span>Loan Principal:</span>
                    <span className="font-semibold text-white">₹{formatINR(loanAmount)}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span>Total Interest Payable:</span>
                    <span className="font-semibold text-white">₹{formatINR(totalInterest)}</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span>Total Amount (P + I):</span>
                    <span className="font-semibold text-[#B4833E]">₹{formatINR(totalPayment)}</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/919904222000?text=${encodeURIComponent(
                    `Hello Silverstone Developers, I want home loan assistance for a property of ₹${propertyPriceLakhs} Lakhs (Estimated EMI ₹${formatINR(
                      monthlyEmi
                    )}/mo). Please connect me with your banking specialist.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#B4833E] hover:bg-[#8F642B] text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-98"
                >
                  <span>Apply For Bank Loan Sanction</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Approved Banks Strip */}
            <div className="mt-10 pt-8 border-t border-[#E6E0D6]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                  <ShieldCheck className="size-4 text-[#15803D]" />
                  <span>Approved Banking Partners:</span>
                </span>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                  Immediate Loan Disbursement Available for Ready-Possession Units
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {BANK_PARTNERS.map((bank, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E6E0D6] flex flex-col justify-between"
                  >
                    <span className="text-xs font-bold text-stone-900">
                      {bank.name}
                    </span>
                    <span className="text-[10px] text-[#15803D] font-semibold mt-1">
                      {bank.approval}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. HIGH-CONVERTING WHATSAPP SITE VISIT SCHEDULER & FOOTER */}
      {/* ========================================================= */}
      <footer id="contact" className="bg-[#18181B] text-white pt-20 pb-28 md:pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Schedule an Actual Flat Walk-Through Card */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#27272A] to-[#18181B] border border-zinc-700/80 p-8 sm:p-12 shadow-2xl -mt-32 mb-16">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#B4833E]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Info */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-400/40 text-xs font-bold">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>VIP On-Site Experience Pass</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  Schedule an Actual Flat <br />
                  <span className="text-[#B4833E] italic">Walk-Through in Surat</span>
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed max-w-xl">
                  Step inside the completed residence with your family. Check real room cross-ventilation, admire verified ceiling heights, test water pressure, and inspect finish quality in person.
                </p>

                <div className="space-y-2 pt-2 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#15803D]" />
                    <span>Complimentary golf-cart campus tour with Senior Project Architect</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-[#15803D]" />
                    <span>Printed RERA approval dossier & transparent unit price sheet handover</span>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="lg:col-span-6 bg-white text-stone-900 rounded-2xl p-6 sm:p-8 shadow-xl border border-[#E6E0D6]">
                <form onSubmit={handleScheduleSubmit} className="space-y-4">
                  <div>
                    <h4 className="font-serif font-bold text-lg text-stone-900">
                      Book Direct Site Inspection
                    </h4>
                    <p className="text-xs text-stone-500">
                      Submitting opens your pre-formatted WhatsApp VIP pass
                    </p>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold text-stone-600 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bhaveshbhai Patel"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#E6E0D6] focus:border-[#B4833E] rounded-xl h-11 px-3 text-xs text-stone-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold text-stone-600 mb-1">
                      WhatsApp Contact Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-500">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="98765 43210"
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                        className="w-full pl-12 bg-[#FAF8F5] border border-[#E6E0D6] focus:border-[#B4833E] rounded-xl h-11 pr-3 text-xs text-stone-900 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-bold text-stone-600 mb-1">
                        Select Project
                      </label>
                      <select
                        value={selectedProject}
                        onChange={(e) => setSelectedProject(e.target.value)}
                        className="w-full bg-[#FAF8F5] border border-[#E6E0D6] focus:border-[#B4833E] rounded-xl h-11 px-3 text-xs text-stone-900 font-medium outline-none cursor-pointer"
                      >
                        <option value="Spring Hill">Spring Hill (From ₹47 L)</option>
                        <option value="Raj Mahel">Raj Mahel (From ₹72.8 L)</option>
                        <option value="Applewood Homes">Applewood Homes (From ₹42.27 L)</option>
                        <option value="Mahel">Mahel Bungalows (From ₹72.8 L)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-bold text-stone-600 mb-1">
                        Preferred Date / Slot
                      </label>
                      <select
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full bg-[#FAF8F5] border border-[#E6E0D6] focus:border-[#B4833E] rounded-xl h-11 px-3 text-xs text-stone-900 font-medium outline-none cursor-pointer"
                      >
                        <option value="Today Evening (4 PM - 7 PM)">Today Evening (4 PM - 7 PM)</option>
                        <option value="Tomorrow Morning (10 AM - 1 PM)">Tomorrow Morning (10 AM - 1 PM)</option>
                        <option value="This Weekend (Saturday / Sunday)">This Weekend</option>
                        <option value="Request Video Walk-Through">Request Video Walk-Through</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#15803D] hover:bg-[#166534] text-white font-bold py-3.5 rounded-xl min-h-12 text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
                  >
                    <MessageSquare className="size-4 shrink-0" />
                    <span>Confirm & Dispatch WhatsApp VIP Pass</span>
                    <ArrowRight className="size-3.5 shrink-0" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Luxury Multi-Column Architectural Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
            {/* Column 1: Brand Info */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-white text-stone-900 flex items-center justify-center font-serif font-black text-xl shadow-md border border-[#B4833E]">
                  S
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-bold tracking-tight text-white leading-none">
                    SILVERSTONE
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#B4833E] mt-0.5">
                    DEVELOPERS • SURAT
                  </span>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                Surat's leading developer specializing exclusively in 100% completed, ready-to-live luxury row houses, royal bungalows, and resort campuses with zero construction waiting risk.
              </p>

              <div className="flex items-center gap-2 text-xs text-[#DFC8A7] font-semibold">
                <Sparkles className="size-3.5 text-[#B4833E]" />
                <span>Brand Tagline: "Ready to Live"</span>
              </div>
            </div>

            {/* Column 2: Ready Projects */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Running Projects
              </h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li>
                  <a href="#projects" className="hover:text-white transition-colors">
                    Spring Hill Homes
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition-colors">
                    Raj Mahel Bungalows
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition-colors">
                    Applewood Homes
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition-colors">
                    Mahel Bungalows
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Buyer Tools & Legal */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Buyer Tools
              </h4>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li>
                  <a href="#why-ready-to-live" className="hover:text-white transition-colors">
                    Why Ready to Live
                  </a>
                </li>
                <li>
                  <a href="#floor-plans" className="hover:text-white transition-colors">
                    Floor Plan Blueprints
                  </a>
                </li>
                <li>
                  <a href="#location" className="hover:text-white transition-colors">
                    Surat Connectivity
                  </a>
                </li>
                <li>
                  <a href="#emi-calculator" className="hover:text-white transition-colors">
                    EMI Calculator
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Surat Office Details */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Surat Corporate Office
              </h4>
              <div className="space-y-2 text-xs text-zinc-400">
                <div className="flex items-start gap-2">
                  <MapPin className="size-4 text-[#B4833E] shrink-0 mt-0.5" />
                  <span>
                    Silverstone Developers, Near New Pal Gauravpath & 2nd Ring Road Junction, Surat, Gujarat - 395009
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="size-4 text-[#B4833E] shrink-0" />
                  <a href="tel:+919904222000" className="hover:text-white font-semibold">
                    +91 99042 22000
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-[#B4833E] shrink-0" />
                  <span>Daily: 9:30 AM to 7:30 PM (Mon - Sun)</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://maps.google.com/?ftid=0x3be04b007d49da49:0x9a524da3a7c1613a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-white transition-colors"
                >
                  <MapPin className="size-3 text-[#B4833E]" />
                  <span>Google Maps</span>
                  <ExternalLink className="size-2.5" />
                </a>

                <a
                  href="https://wa.me/919904222000?text=Hello%20Silverstone%20Developers,%20I%20want%20to%20connect%20with%20your%20Surat%20sales%20office."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#DCFCE7]/20 hover:bg-[#DCFCE7]/30 text-emerald-300 text-xs transition-colors border border-emerald-400/30"
                >
                  <MessageSquare className="size-3 text-emerald-400" />
                  <span>WhatsApp Office</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Legal & RERA Note */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>© 2026 Silverstone Developers. All Rights Reserved. Surat, Gujarat.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
              <span>GujRERA Approved</span>
              <span>•</span>
              <span>100% BU & OC Clear Inventory</span>
              <span>•</span>
              <span className="text-zinc-400">Architectural Light Theme</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent Floating WhatsApp Widget (Shreepad Standard #49C658) */}
      <div className="fixed bottom-20 md:bottom-8 right-5 sm:right-7 z-40 flex items-center gap-2">
        <a
          href="https://wa.me/919904222000?text=Hello%20Silverstone%20Developers,%20I%20am%20interested%20in%20your%20Ready%20to%20Live%20residences%20in%20Surat.%20Please%20share%20current%20availability%20and%20pricing."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Inquiry"
          className="group relative flex items-center justify-center size-14 sm:size-15 rounded-full bg-[#49C658] hover:bg-[#3db04b] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
          {/* Subtle green pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#49C658] opacity-35 animate-ping pointer-events-none" />

          {/* WhatsApp icon */}
          <MessageSquare className="size-7 relative z-10 fill-white/20" />

          {/* Hover Tooltip */}
          <span className="absolute right-full mr-3.5 px-3 py-1.5 rounded-xl bg-stone-900/90 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl border border-stone-700">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </div>
  )
}
export default ConversionFooter
