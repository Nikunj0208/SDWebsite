import { chromium } from "playwright"

async function capture() {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await page.goto("http://localhost:3000", { waitUntil: "networkidle" })
  await page.waitForTimeout(1000)

  // 1. Initial Hero + Header
  await page.screenshot({ path: "public/fresh-hero.png" })
  console.log("Captured fresh-hero.png")

  // 2. Scrolled Header + Legacy Section
  await page.evaluate(() => window.scrollTo(0, 700))
  await page.waitForTimeout(600)
  await page.screenshot({ path: "public/fresh-legacy.png" })
  console.log("Captured fresh-legacy.png")

  // 3. Projects Section
  await page.evaluate(() => {
    const el = document.querySelector("#projects")
    if (el) el.scrollIntoView()
  })
  await page.waitForTimeout(600)
  await page.screenshot({ path: "public/fresh-projects.png" })
  console.log("Captured fresh-projects.png")

  await browser.close()
}

capture().catch(console.error)
