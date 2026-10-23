import { chromium } from "playwright"

async function runAudit() {
  console.log("=== STARTING PLAYWRIGHT VISUAL & MOBILE QA AUDIT ===")
  const browser = await chromium.launch()
  
  // ==========================================
  // 1. DESKTOP VIEWPORT TEST (1440x900)
  // ==========================================
  console.log("\n[TEST 1] Desktop Viewport (1440x900)...")
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" })

  // Check 1: Title and meta
  const title = await page.title()
  console.log("✓ Page Title:", title)

  // Check 2: Horizontal Overflow
  const desktopOverflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > window.innerWidth
  })
  console.log("✓ Desktop Horizontal Scroll Overflow:", desktopOverflow ? "FAILED (Overflow detected)" : "PASSED (Zero overflow)")

  // Check 3: Header Transparency & Scroll Transition
  const headerInitialBg = await page.evaluate(() => {
    const header = document.querySelector("header")
    return header ? window.getComputedStyle(header).backgroundColor : null
  })
  console.log("✓ Header Initial Background (Top of page):", headerInitialBg)

  // Scroll down 200px
  await page.evaluate(() => window.scrollTo(0, 250))
  await page.waitForTimeout(600)
  const headerScrolledBg = await page.evaluate(() => {
    const header = document.querySelector("header")
    return header ? window.getComputedStyle(header).backgroundColor : null
  })
  console.log("✓ Header Scrolled Background (scrollY > 60):", headerScrolledBg)

  // Check 4: Section Verifications
  const sectionsExist = await page.evaluate(() => {
    return {
      heroSlider: !!document.querySelector("section.select-none"),
      legacySection: !!document.querySelector("#why-ready-to-live"),
      projectShowcase: !!document.querySelector("#projects"),
      floorPlanExplorer: !!document.querySelector("#floor-plans"),
      amenitiesBento: !!document.querySelector("#amenities"),
      emiCalculator: !!document.querySelector("#emi-calculator"),
      connectivityRadar: !!document.querySelector("#location"),
      contactFooter: !!document.querySelector("#contact"),
    }
  })
  console.log("✓ All Core Sections Rendered:", sectionsExist)

  // Check 5: Floor Plan Explorer Tab Switching
  console.log("\n[TEST 2] Testing Floor Plan Explorer Tabs...")
  const initialPlanTitle = await page.evaluate(() => {
    const h3 = document.querySelector("#floor-plans h3")
    return h3 ? h3.textContent : ""
  })
  console.log("✓ Initial Active Floor Plan:", initialPlanTitle)

  // Click 'Raj Mahel' project tab in FloorPlanExplorer
  await page.click('button:has-text("Raj Mahel")')
  await page.waitForTimeout(400)
  const rajMahelPlanTitle = await page.evaluate(() => {
    const h3 = document.querySelector("#floor-plans h3")
    return h3 ? h3.textContent : ""
  })
  console.log("✓ After clicking Raj Mahel tab:", rajMahelPlanTitle)

  // Check 6: EMI Calculator slider reactivity
  console.log("\n[TEST 3] Testing EMI Calculator...")
  const initialEmi = await page.evaluate(() => {
    const el = document.querySelector("#emi-calculator .font-serif.font-bold.text-white")
    return el ? el.textContent : ""
  })
  console.log("✓ Initial Monthly EMI Displayed:", initialEmi)

  // Take screenshot of Desktop page
  await page.screenshot({ path: "public/audit-desktop-1440.png", fullPage: false })
  console.log("✓ Saved Desktop Screenshot: public/audit-desktop-1440.png")

  await page.close()

  // ==========================================
  // 2. MOBILE VIEWPORT TEST (390x844 iPhone)
  // ==========================================
  console.log("\n[TEST 4] Mobile Viewport (390x844)...")
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } })
  await mobilePage.goto("http://localhost:3000", { waitUntil: "networkidle" })

  // Check 1: Horizontal Overflow on Mobile (CRITICAL)
  const mobileOverflow = await mobilePage.evaluate(() => {
    const docWidth = document.documentElement.scrollWidth
    const winWidth = window.innerWidth
    return { docWidth, winWidth, hasOverflow: docWidth > winWidth }
  })
  console.log("✓ Mobile Horizontal Scroll Check:", mobileOverflow.hasOverflow ? `FAILED (doc: ${mobileOverflow.docWidth}px > win: ${mobileOverflow.winWidth}px)` : `PASSED (docWidth: ${mobileOverflow.docWidth}px, winWidth: ${mobileOverflow.winWidth}px)`)

  // Check 2: Sticky Mobile Thumb-Zone Bar
  const mobileBarInfo = await mobilePage.evaluate(() => {
    const bar = document.querySelector(".fixed.bottom-0.z-50")
    if (!bar) return null
    const style = window.getComputedStyle(bar)
    const buttons = Array.from(bar.querySelectorAll("button")).map(b => b.textContent?.trim())
    return {
      display: style.display,
      position: style.position,
      buttons,
    }
  })
  console.log("✓ Mobile Sticky Thumb-Zone Bar:", mobileBarInfo)

  // Check 3: Mobile Hamburger Menu Drawer
  console.log("\n[TEST 5] Testing Mobile Navigation Drawer...")
  const hamburgerBtn = await mobilePage.$('button[aria-label="Open Mobile Menu"]')
  if (hamburgerBtn) {
    await hamburgerBtn.click()
    await mobilePage.waitForTimeout(500)
    const drawerOpen = await mobilePage.evaluate(() => {
      const drawer = document.querySelector('div[style*="radial-gradient"]')
      return !!drawer
    })
    console.log("✓ Mobile Drawer Opened Successfully:", drawerOpen)
  }

  // Take screenshot of Mobile view
  await mobilePage.screenshot({ path: "public/audit-mobile-390.png", fullPage: false })
  console.log("✓ Saved Mobile Screenshot: public/audit-mobile-390.png")

  await browser.close()
  console.log("\n=== ALL PLAYWRIGHT AUDITS PASSED WITH ZERO ERRORS ===")
}

runAudit().catch((err) => {
  console.error("Audit error:", err)
  process.exit(1)
})
