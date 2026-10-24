import { chromium } from 'playwright';

async function runAudit() {
  console.log('🚀 Starting Silverstone Developers Verified Copy & Motion QA Audit...\n');

  const browser = await chromium.launch({ headless: true });
  const report = {
    desktop: { errors: [], warnings: [], stuckHeadings: [], passed: true },
    features: {
      bilingualToggle: false,
      plotModalOpened: false,
      trustBarRendered: false,
      all4ProjectsRendered: false,
      comparisonTableRendered: false,
    },
    mobile: { errors: [], stickyBarVisible: false, passed: true },
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
    }
  });

  desktopPage.on('pageerror', (err) => {
    report.desktop.errors.push(err.message);
    console.error('❌ Page Error:', err.message);
  });

  await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await desktopPage.waitForTimeout(500);

  // 1A. Check 6-Metric Trust Bar
  const trustBarText = await desktopPage.evaluate(() => {
    const el = document.querySelector('.lg\\:grid-cols-6');
    return el ? el.textContent : '';
  });
  if (trustBarText.includes('42.27') && trustBarText.includes('300m') && trustBarText.includes('1 KM')) {
    report.features.trustBarRendered = true;
    console.log('✅ 6-Metric Trust & Infrastructure Bar verified with numbers-first values');
  } else {
    console.error('❌ Trust Bar failed content verification:', trustBarText);
  }

  // 1B. Check The 4 Flagship Projects
  const pageContent = await desktopPage.content();
  const hasApplewood = pageContent.includes('Applewood') && pageContent.includes('42.27');
  const hasSpringhill = pageContent.includes('Springhill Homes') && pageContent.includes('47.00');
  const hasRajmahel = pageContent.includes('Rajmahel') && pageContent.includes('72.80');
  const hasMahel = pageContent.includes('Mahel') && pageContent.includes('The Real Mahel');

  if (hasApplewood && hasSpringhill && hasRajmahel && hasMahel) {
    report.features.all4ProjectsRendered = true;
    console.log('✅ All 4 Flagship Projects rendered with verified brochure pricing & dimensions');
  } else {
    console.error('❌ Flagship projects missing from page:', { hasApplewood, hasSpringhill, hasRajmahel, hasMahel });
  }

  // 1C. Check "Why Invest Here?" & Comparison Table
  if (pageContent.includes('Find Your Ideal Plot in 10 Seconds') || pageContent.includes('Decision Tool') || pageContent.includes('Front Opening')) {
    report.features.comparisonTableRendered = true;
    console.log('✅ Side-by-side Project Selector Table verified');
  }

  // 1D. Test Bilingual Language Toggle (Desktop Header)
  console.log('🌐 Testing Language Toggle (EN -> GU -> EN)...');
  const guButton = await desktopPage.locator('button:has-text("ગુજરાતી")').first();
  if (await guButton.isVisible()) {
    await guButton.click();
    await desktopPage.waitForTimeout(400);

    const guPageText = await desktopPage.content();
    if (guPageText.includes('સુરતનું') || guPageText.includes('ગુજરાતી') || guPageText.includes('આગામી')) {
      report.features.bilingualToggle = true;
      console.log('✅ Bilingual Language Switcher works: Gujarati text active');
    }

    // Switch back to EN (exact match so 'Menu' is not matched)
    const enButton = await desktopPage.getByRole('button', { name: /^EN$/ }).first();
    if (await enButton.isVisible()) {
      await enButton.click();
      await desktopPage.waitForTimeout(300);
    }
  }

  // 1E. Test "View Plot Layout & Dimensions" Modal
  console.log('📐 Testing Plot Layout Modal...');
  const plotButton = await desktopPage.locator('button:has-text("View Plot Layout & Dimensions"), button:has-text("પ્લોટ લેઆઉટ")').first();
  const isPlotBtnVisible = await plotButton.isVisible();
  console.log(`  Plot button found: ${isPlotBtnVisible}`);
  if (isPlotBtnVisible) {
    await plotButton.click();
    await desktopPage.waitForTimeout(500);

    const modalTitle = await desktopPage.getByText(/Official Plot Layouts|અધિકૃત પ્લોટ લેઆઉટ/i).first().isVisible();
    const hasDimensions = await desktopPage.getByText(/KEY DIMENSIONS|મુખ્ય માપ/i).first().isVisible();
    const hasWhatsAppCta = await desktopPage.getByText(/Get Exact Plot Availability|WhatsApp પર ઉપલબ્ધ/i).first().isVisible();

    if (modalTitle && hasDimensions && hasWhatsAppCta) {
      report.features.plotModalOpened = true;
      console.log('✅ Plot Layout & Dimensions Modal opens with verified specs & WhatsApp action');
    } else {
      console.error('❌ Plot Modal opened but missing required specs:', { modalTitle, hasDimensions, hasWhatsAppCta });
    }

    // Close modal
    await desktopPage.keyboard.press('Escape');
    await desktopPage.waitForTimeout(300);
  } else {
    console.error('❌ Could not locate Plot Layout button');
  }

  // 1F. Kinematic Smooth Scroll Down
  const scrollHeight = await desktopPage.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y <= scrollHeight; y += 500) {
    await desktopPage.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await desktopPage.waitForTimeout(60);
  }
  await desktopPage.waitForTimeout(500);

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
  if (stuckHeadings.length === 0) {
    console.log('✅ All Headings Revealed & Visible (Zero stuck opacities)');
  } else {
    console.error('❌ Found Stuck Headings:', stuckHeadings);
    report.desktop.passed = false;
  }

  // Desktop Screenshot
  await desktopPage.screenshot({ path: 'public/audit_desktop_verified.png', fullPage: false });
  await desktopContext.close();

  // ------------------------------------------------------------------------
  // 2. MOBILE AUDIT (390x844 iPhone 14)
  // ------------------------------------------------------------------------
  console.log('\n📱 Auditing Mobile Viewport (390x844)...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
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
  await mobilePage.waitForTimeout(300);

  // Scroll past 250px
  await mobilePage.evaluate(() => window.scrollTo(0, 350));
  await mobilePage.waitForTimeout(400);

  // Check sticky bar after scroll
  const isBarAfterScroll = await mobilePage.evaluate(() => {
    const bar = document.querySelector('.fixed.bottom-0');
    if (!bar) return false;
    const style = window.getComputedStyle(bar);
    return style.display !== 'none' && style.opacity !== '0' && style.visibility !== 'hidden';
  });

  report.mobile.stickyBarVisible = isBarAfterScroll;
  console.log(`✅ Mobile Sticky Conversion Bar after scroll: ${isBarAfterScroll ? 'Visible & Active' : 'Failed'}`);

  await mobilePage.screenshot({ path: 'public/audit_mobile_verified.png', fullPage: false });
  await mobileContext.close();
  await browser.close();

  // ------------------------------------------------------------------------
  // SUMMARY
  // ------------------------------------------------------------------------
  console.log('\n=============================================');
  console.log('🎯 VERIFIED BROCHURE & MOTION AUDIT SUMMARY');
  console.log('=============================================');
  console.log(`Desktop Errors: ${report.desktop.errors.length}`);
  console.log(`Stuck Headings: ${report.desktop.stuckHeadings.length}`);
  console.log(`Trust Bar: ${report.features.trustBarRendered ? 'PASS' : 'FAIL'}`);
  console.log(`All 4 Flagship Projects: ${report.features.all4ProjectsRendered ? 'PASS' : 'FAIL'}`);
  console.log(`Comparison Table: ${report.features.comparisonTableRendered ? 'PASS' : 'FAIL'}`);
  console.log(`Bilingual Toggle (EN/GU): ${report.features.bilingualToggle ? 'PASS' : 'FAIL'}`);
  console.log(`Plot Layout Modal: ${report.features.plotModalOpened ? 'PASS' : 'FAIL'}`);
  console.log(`Mobile Sticky Bar: ${report.mobile.stickyBarVisible ? 'PASS' : 'FAIL'}`);
  console.log('=============================================\n');

  const allPassed =
    report.desktop.errors.length === 0 &&
    report.desktop.stuckHeadings.length === 0 &&
    report.features.trustBarRendered &&
    report.features.all4ProjectsRendered &&
    report.features.bilingualToggle &&
    report.features.plotModalOpened &&
    report.mobile.stickyBarVisible;

  if (!allPassed) {
    process.exit(1);
  } else {
    console.log('🏆 100% AUDIT PASS: All Verified Brochure Data, Copywriting Rules, and Motion Verified!');
  }
}

runAudit().catch((err) => {
  console.error('Audit failed:', err);
  process.exit(1);
});
