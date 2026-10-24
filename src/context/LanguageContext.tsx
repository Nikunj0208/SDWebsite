"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type Language = "EN" | "GU"

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  toggleLang: () => void
  t: (en: string, gu: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "EN",
  setLang: () => {},
  toggleLang: () => {},
  t: (en) => en,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("EN")

  useEffect(() => {
    try {
      const saved = localStorage.getItem("silverstone_lang") as Language
      if (saved === "EN" || saved === "GU") {
        setLangState(saved)
      }
    } catch {}
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    try {
      localStorage.setItem("silverstone_lang", newLang)
    } catch {}
  }

  const toggleLang = () => {
    setLang(lang === "EN" ? "GU" : "EN")
  }

  const t = (en: string, gu: string) => {
    return lang === "GU" ? gu || en : en
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
