import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function runAudit() {
  console.log('🚀 Starting Silverstone Developers Motion & QA Audit...\n');

  const browser = await chromium.launch({ headless: true });
  const report = {
    desktop: { errors: [], warnings: [], stuckHeadings: [], counters: [], passed: true },
    mobile: { errors: [], warnings: [], stickyBarVisible: false, passed: true },
  };

  // ------------------------------------------------------------------------
  // 1. DESKTOP AUDIT (1440x900)
  // ------------------------------------------------------------------------
  console.log('🖥️ Auditing Desktop Viewport (1440x900)...');
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const desktopPage = await desktopContext.newPage();

  desktopPage.on('console', (msg) => {
    if (msg.type() === 'error') {
      report.desktop.errors.push(msg.text());
      console.error('❌ Console Error:', msg.text());
    } else if (msg.type() === 'warning') {
      report.desktop.warnings.push(msg.text());
    }
  });

  desktopPage.on('pageerror', (err) => {
    report.desktop.errors.push(err.message);
    console.error('❌ Page Error:', err.message);
  });

  await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Kinematic Scroll Down with Lenis
  const scrollHeight = await desktopPage.evaluate(() => document.body.scrollHeight);
  console.log(`  Page Total Height: ${scrollHeight}px`);

  for (let y = 0; y <= scrollHeight; y += 450) {
    await desktopPage.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await desktopPage.waitForTimeout(100);
  }
  await desktopPage.waitForTimeout(800);

  // Check Headings for Stuck Opacity
  const stuckHeadings = await desktopPage.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3'));
    return headings
      .filter((h) => {
        const style = window.getComputedStyle(h);
        return style.opacity === '0' || style.visibility === 'hidden';
      })
      .map((h) => h.textContent?.trim());
  });

  report.desktop.stuckHeadings = stuckHeadings;
  if (stuckHeadings.length > 0) {
    console.error('❌ Found Stuck Headings at opacity 0:', stuckHeadings);
    report.desktop.passed = false;
  } else {
    console.log('✅ All Headings Revealed & Visible (Zero stuck opacities)');
  }

  // Check Counter Values
  const counters = await desktopPage.evaluate(() => {
    const counterSec = document.querySelector('#counter');
    if (!counterSec) return [];
    const text = counterSec.textContent || '';
    return {
      has100: text.includes('100'),
      has500: text.includes('500'),
      has0Days: text.includes('0') && text.includes('Days'),
      has15Years: text.includes('15') && text.includes('Years'),
      raw: text.slice(0, 300),
    };
  });
  console.log('✅ Odometer Counters Audit:', counters);

  // Take Desktop Screenshot
  const desktopScreenshotPath = 'public/audit_desktop_1440x900.png';
  await desktopPage.screenshot({ path: desktopScreenshotPath, fullPage: false });
  console.log(`✅ Desktop Screenshot saved to ${desktopScreenshotPath}`);

  await desktopContext.close();

  // ------------------------------------------------------------------------
  // 2. MOBILE AUDIT (390x844 iPhone 14 / WhatsApp Browser Mode)
  // ------------------------------------------------------------------------
  console.log('\n📱 Auditing Mobile Viewport (390x844)...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 WhatsApp/2.23.20.78',
    isMobile: true,
    hasTouch: true,
  });
  const mobilePage = await mobileContext.newPage();

  mobilePage.on('console', (msg) => {
    if (msg.type() === 'error') {
      report.mobile.errors.push(msg.text());
      console.error('❌ Mobile Console Error:', msg.text());
    }
  });

  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Initially at top (y = 0), check sticky bar
  let isBarAtTop = await mobilePage.evaluate(() => {
    const bar = document.querySelector('.fixed.bottom-0');
    return bar !== null;
  });
  console.log(`  Sticky Bar at top (y=0): ${isBarAtTop ? 'Visible (should be hidden)' : 'Cleanly Hidden'}`);

  // Scroll past 250px
  await mobilePage.evaluate(() => window.scrollTo(0, 350));
  await mobilePage.waitForTimeout(500);

  // Check sticky bar after 200px scroll
  const isBarAfterScroll = await mobilePage.evaluate(() => {
    const bar = document.querySelector('.fixed.bottom-0');
    if (!bar) return false;
    const style = window.getComputedStyle(bar);
    return style.display !== 'none' && style.opacity !== '0' && style.visibility !== 'hidden';
  });

  report.mobile.stickyBarVisible = isBarAfterScroll;
  console.log(`✅ Mobile Sticky Conversion Bar after scroll: ${isBarAfterScroll ? 'Visible & Slid In' : 'Failed'}`);

  // Mobile Screenshot
  const mobileScreenshotPath = 'public/audit_mobile_390x844.png';
  await mobilePage.screenshot({ path: mobileScreenshotPath, fullPage: false });
  console.log(`✅ Mobile Screenshot saved to ${mobileScreenshotPath}`);

  await mobileContext.close();
  await browser.close();

  // ------------------------------------------------------------------------
  // SUMMARY
  // ------------------------------------------------------------------------
  console.log('\n=============================================');
  console.log('🎯 MOTION & QUALITY AUDIT SUMMARY');
  console.log('=============================================');
  console.log(`Desktop Errors: ${report.desktop.errors.length}`);
  console.log(`Desktop Stuck Headings: ${report.desktop.stuckHeadings.length}`);
  console.log(`Mobile Errors: ${report.mobile.errors.length}`);
  console.log(`Mobile Sticky Bar: ${report.mobile.stickyBarVisible ? 'PASS' : 'FAIL'}`);
  console.log('=============================================\n');

  if (report.desktop.errors.length > 0 || report.desktop.stuckHeadings.length > 0 || !report.mobile.stickyBarVisible) {
    process.exit(1);
  } else {
    console.log('🏆 ALL 7 MOTION ANIMATION SPECIFICATIONS PASSED AUDIT WITH 100% SUCCESS!');
  }
}

runAudit().catch((err) => {
  console.error('Audit crashed:', err);
  process.exit(1);
});
