"use client"

import { useState, useMemo } from "react"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Marquee } from "@/components/magicui/marquee"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BANK_PARTNERS } from "@/data/site-data"
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
  IndianRupee
} from "lucide-react"

interface EmiCalculatorProps {
  onOpenLoanModal: () => void
}

export function EmiCalculator({ onOpenLoanModal }: EmiCalculatorProps) {
  // Property value in Lakhs (default: ₹65 Lakhs)
  const [propertyValueLakhs, setPropertyValueLakhs] = useState(65)
  // Down payment percentage (default: 20%)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)
  // Annual interest rate (default: 8.5%)
  const [interestRate, setInterestRate] = useState(8.5)
  // Loan tenure in years (default: 20 years)
  const [tenureYears, setTenureYears] = useState(20)

  // Calculations
  const {
    loanAmount,
    downPaymentAmount,
    monthlyEmi,
    totalPayment,
    totalInterest,
    principalPercent,
    interestPercent,
  } = useMemo(() => {
    const totalPropVal = propertyValueLakhs * 100000
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
  }, [propertyValueLakhs, downPaymentPercent, interestRate, tenureYears])

  const formatINR = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(val)
  }

  const getVal = (v: number | readonly number[]): number => {
    return Array.isArray(v) ? (v[0] as number) : (v as number)
  }

  return (
    <section id="emi-calculator" className="py-20 md:py-28 bg-[#F3EFEA] border-y border-[#E6E0D6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <BlurFade delay={0.05} yOffset={10}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E6E0D6] text-xs font-semibold text-[#18181B] mb-3 shadow-sm">
              <Calculator className="size-3.5 text-[#B4833E]" />
              <span>Instant Financial Transparency</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.1} yOffset={12}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#18181B] tracking-tight">
              Interactive Home Loan & EMI Calculator
            </h2>
          </BlurFade>

          <BlurFade delay={0.15} yOffset={12}>
            <p className="mt-3 text-sm sm:text-base text-[#57534E] leading-relaxed">
              Plan your investment with zero hidden surprises. Because all Silverstone projects are 100% BU complete and RERA registered, enjoy instant loan sanctions and special bank interest rates.
            </p>
          </BlurFade>
        </div>

        {/* Calculator Main Box */}
        <BlurFade delay={0.2} yOffset={16}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E6E0D6] shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Sliders Column */}
              <div className="lg:col-span-7 space-y-7">
                {/* 1. Property Value */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#18181B]">
                      Property Value:
                    </label>
                    <span className="font-mono font-bold text-base sm:text-lg text-[#B4833E] bg-[#FAF8F5] px-3 py-1 rounded-xl border border-[#E6E0D6]">
                      ₹{propertyValueLakhs} Lakhs
                    </span>
                  </div>
                  <Slider
                    value={[propertyValueLakhs]}
                    min={42}
                    max={250}
                    step={1}
                    onValueChange={(val) => setPropertyValueLakhs(getVal(val))}
                    className="py-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#57534E]">
                    <span>Min: ₹42 Lakhs (Applewood)</span>
                    <span>Max: ₹2.5 Crore (Garden Villa)</span>
                  </div>
                </div>

                {/* 2. Down Payment % */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#18181B]">
                      Down Payment ({downPaymentPercent}%):
                    </label>
                    <span className="font-mono font-bold text-sm sm:text-base text-[#18181B] bg-[#FAF8F5] px-3 py-1 rounded-xl border border-[#E6E0D6]">
                      ₹{formatINR(downPaymentAmount)}
                    </span>
                  </div>
                  <Slider
                    value={[downPaymentPercent]}
                    min={10}
                    max={50}
                    step={5}
                    onValueChange={(val) => setDownPaymentPercent(getVal(val))}
                    className="py-2 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#57534E]">
                    <span>10% (Lowest upfront)</span>
                    <span>Loan Required: ₹{formatINR(loanAmount)}</span>
                    <span>50%</span>
                  </div>
                </div>

                {/* 3. Interest Rate & Tenure Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#18181B]">
                        Interest Rate:
                      </label>
                      <span className="font-mono font-bold text-sm text-[#18181B] bg-[#FAF8F5] px-2.5 py-1 rounded-xl border border-[#E6E0D6]">
                        {interestRate}%
                      </span>
                    </div>
                    <Slider
                      value={[interestRate]}
                      min={7.5}
                      max={11.5}
                      step={0.1}
                      onValueChange={(val) => setInterestRate(Number(getVal(val).toFixed(1)))}
                      className="py-2 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-[#57534E]">
                      <span>7.5%</span>
                      <span>Avg: 8.5%</span>
                      <span>11.5%</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#18181B]">
                        Tenure (Years):
                      </label>
                      <span className="font-mono font-bold text-sm text-[#18181B] bg-[#FAF8F5] px-2.5 py-1 rounded-xl border border-[#E6E0D6]">
                        {tenureYears} Yrs
                      </span>
                    </div>
                    <Slider
                      value={[tenureYears]}
                      min={5}
                      max={30}
                      step={1}
                      onValueChange={(val) => setTenureYears(getVal(val))}
                      className="py-2 cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-[#57534E]">
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
                  <Badge className="bg-[#DCFCE7] text-[#15803D] hover:bg-[#DCFCE7] border-none text-xs font-semibold px-2.5 py-0.5 mb-3 inline-flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-[#15803D] animate-ping" />
                    Instant Loan Eligibility Ready
                  </Badge>
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

                {/* Principal vs Interest Breakdown Bar */}
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

                  {/* Multi-segment progress bar */}
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

                {/* Financial Summary Breakdown */}
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

                {/* Pre-Approval Assistance CTA */}
                <Button
                  onClick={onOpenLoanModal}
                  className="w-full bg-[#B4833E] hover:bg-[#8F642B] text-white font-medium py-3 rounded-xl min-h-12 text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <span>Apply For Bank Loan Sanction</span>
                  <ArrowRight className="size-3.5" />
                </Button>
              </div>
            </div>

            {/* Approved Banks Strip */}
            <div className="mt-10 pt-8 border-t border-[#E6E0D6]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#18181B] flex items-center gap-1.5">
                  <ShieldCheck className="size-4 text-[#15803D]" />
                  <span>Pre-Approved for Immediate Disbursement By Leading Banks:</span>
                </span>
                <span className="text-[11px] text-[#57534E]">
                  Special ROI Tie-Up for Silverstone Buyers
                </span>
              </div>

              {/* Marquee for bank partners */}
              <div className="rounded-2xl bg-[#FAF8F5] border border-[#E6E0D6] p-2 overflow-hidden">
                <Marquee pauseOnHover className="[--duration:25s]">
                  {BANK_PARTNERS.map((bank, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white border border-[#E6E0D6] shadow-sm shrink-0"
                    >
                      <Building className="size-4 text-[#B4833E]" />
                      <div>
                        <span className="text-xs font-bold text-[#18181B] block">
                          {bank.name}
                        </span>
                        <span className="text-[10px] text-[#15803D] font-semibold">
                          {bank.approval}
                        </span>
                      </div>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
