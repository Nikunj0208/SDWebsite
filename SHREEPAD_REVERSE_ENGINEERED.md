# SHREEPAD GROUP (`shreepadgroup.com`) REVERSE-ENGINEERED BLUEPRINT
*Technical Architecture, UX & Design System Inspection for Silverstone Developers*

---

## 1. EXECUTIVE SUMMARY & BRAND POSITIONING
- **Brand Identity:** Shreepad Group is one of Surat's premier luxury real estate developers, heavily concentrated in the **Adajan, Pal, and Palanpore** corridors.
- **Core Tagline / Monogram:** *"सुख-शांति-समृद्धि"* (Happiness, Peace, Prosperity) with the auspicious red footprints (*Shree Pad*) icon.
- **Visual Stance:** Clean, modern architectural look combining deep charcoal obsidian backgrounds, crisp white surfaces, warm blush undertones, and an authoritative signature **Crimson Ruby Red** accent (`#AD2929`).
- **Target Audience:** Surat high-net-worth families, NRI property buyers, joint families seeking 3 BHK, 4 BHK, 5 BHK luxury apartments, penthouses, and commercial retail/office complexes.

---

## 2. EXACT COMPUTED DESIGN SYSTEM TOKENS

### A. Color Palette (`getComputedStyle` Extraction)
| Token Name | Hex Code / Value | Usage & Context |
| :--- | :--- | :--- |
| **`--primary_color`** | `#AD2929` | Signature Crimson Ruby Red. Header Contact button, active tabs, CTA buttons, icon outlines, and full-screen menu overlay background. |
| **`--primary_hover_color`** | `#6B1313` | Deep wine red hover state for primary buttons. |
| **`--primary_light_two_color`**| `#F7F1F1` | Soft blush-white background for Menu button pill (`border: 1px solid #F7F1F1`). |
| **`--primary_light_color`** | `#AD29291A` | 10% opacity red tint used for status tags, subtle pill highlights, and card accents. |
| **`--primary_subtle_color`**| `#F5ACAC` | Soft rose border/accent. |
| **`--secondary_color`** | `#DA6936` | Warm Terracotta / Amber Bronze secondary accent. |
| **`--secondary_hover_color`**| `#AB533E` | Deep terracotta hover state. |
| **`--primary_gradient_color`**| `linear-gradient(309.67deg, #AB533E 0%, #DA6936 100%)` | Subtle warm metallic gradient. |
| **`--secondary_bg_color`** | `#FAF4EA` | Warm travertine cream background for secondary content strips. |
| **`--primary_bg_color` / `--bg_light`** | `#FCF6F5` | Warm alabaster blush card background. |
| **`--text_black_color`** | `#313033` | Deep obsidian charcoal for H1, H2 headings and dark top-bar. |
| **`--text_color`** | `#4C4F58` | Warm slate gray for all body descriptions and sub-labels. |
| **`--bg_dark`** | `#181919` | Deep charcoal black for main footer and dark surfaces. |
| **`--stock_dark` / Border** | `#CBCBCB` / `#DEE2E6` | Subtle dividers and card borders. |
| **`--whatsapp_color`** | `#49C658` | WhatsApp emerald green for persistent floating inquiry widget. |

### B. Typography Hierarchy
- **Headings Font Family:** `Gilroy, sans-serif` (`--font-secondary`)
  - **H1 / H2 Size:** `43px` (`2.6875rem`)
  - **H1 / H2 Weight:** `900` (Black)
  - **Line Height:** `54.27px`
  - **Color:** `#313033`
- **Body Font Family:** `"GT Walsheim Pro", sans-serif` (`--font-primary`)
  - **Body Size:** `16px` (`1rem`)
  - **Body Weight:** `400` / `500`
  - **Line Height:** `24px` (`1.5`)
  - **Color:** `#212529` / `#4C4F58`
- **Sub-Headings / Section Badges:**
  - **Sub-Title Size:** `16px` (e.g. *"About group"*, *"Ongoing Projects"*, *"Client Testimonials"*)
  - **Sub-Title Weight:** `500` / `600`
  - **Sub-Title Color:** `#AD2929` (Primary Crimson) or `#212529`
- **Card Titles:** `Gilroy, 700 (Bold), 24px`, `#000000`
- **Stat Counter Numbers:** `Gilroy, 900, 74px`, `#313033`

### C. Layout Containers, Radii & Spacing
- **Container Max-Width:** Fluid responsive container with `paddingLeft: 100px`, `paddingRight: 100px` on desktop; `15px` on mobile.
- **Section Padding:** `100px 0px` for flagship project grid; `70px 0px` for secondary sections.
- **Button Border Radii:**
  - Pill Buttons (Menu, All Properties, View Project): `border-radius: 52px` (`--bs-border-radius-pill: 50rem`).
  - Contact Us Header Button: `border-radius: 0px` (sharp rectangular edge docked to top-right of navbar).
  - Project Cards: `border-radius: 0px` (crisp architectural rectangular cards with zero corner radius).

---

## 3. SECTION-BY-SECTION ARCHITECTURE (DESKTOP 1440x900)

### 1. Sticky Glassmorphic Header & Top Info Bar
- **Top Utility Bar (`#313033`, height `41px`):**
  - Left: `SHREEPAD GROUP | +91 83476 68000` (phone link with instant dial).
  - Right: Social media icons (Facebook, Instagram, YouTube) in subtle circular ghost buttons (`rgba(255, 255, 255, 0.07)`).
- **Main Navigation Bar (`height: 76px`, `z-index: 1030`):**
  - Left: Brand logo with red footprint monogram + Devanagari text.
  - Next to Logo: Pill-shaped `Menu` trigger button (`#F7F1F1`, border-radius `52px`, `padding: 6px 12px`, hamburger icon).
  - Center Navigation: Mega-dropdown links for `Residential Property ▾` and `Commerical Property ▾` organized by status (`On Going`, `Ready Possession`, `Completed`).
  - Rightmost Block: High-contrast rectangular Crimson Red button `Contact Us` (`#AD2929`, `min-height: 75px`, `min-width: 160px`, text-transform title, white text).

### 2. Full-Width Hero Project Slider
- High-impact architectural 3D rendering carousel.
- Overlaid Project Spec Card:
  - Big Project Title (e.g. *Shreepad Sunshine 4 BHK Apartments*).
  - Visual Feature Checklist: *100% Vastu Home*, *Panoramic View*, *Deck Balcony*.
  - Surat Locality: *LP SAVANI MAIN ROAD, ADAJAN* + phone hotline (`75728 28000`).
  - Action CTA: Centered floating white pill button `View Project` (`border-radius: 52px`).
  - Navigation: Minimalist circular previous/next chevron arrows (`width: 48px`, `height: 48px`).

### 3. "About Group" Split Editorial Section
- **Left:** Asymmetric 3-image architectural collage with clean white gutters.
- **Right:**
  - Sub-tag: `About group`
  - H2: `Your Real Estate Property Specialists in Surat` (`Gilroy 900, 43px`)
  - Narrative paragraph emphasizing years of experience, sustainability, and trust.
  - CTA Button: Outlined black pill `More About Group →` (`border-radius: 52px`).

### 4. Legacy Stat Counters Section (`#counter`)
- 4-column scannable stat strip on light background with subtle architectural blueprint sketch on the right:
  - `1+` Upcoming Projects
  - `3+` On Going Projects
  - `5+` Ready-Possession Projects
  - `8+` Completed Projects
- Numbers render at giant `74px` in `Gilroy 900`.

### 5. Ongoing Projects Showcase Grid with Filter Tabs
- Header Row:
  - Subtitle: `Ongoing Projects`
  - H2: `Unlock Your Way To Dreams More`
  - Right CTA: Crimson pill button `All Properties →` (`#AD2929`, white text).
- Category Filter Tabs:
  - `On Going` (Active: black text with black underline indicator)
  - `Ready Possession`
  - `Completed`
- 3-Column Responsive Grid (`col-md-4`):
  - Rectangular project render (`height: 264px`, `overflow: hidden`).
  - Title: `Gilroy 700, 24px`, `#000000`.
  - Type: `Retails | Offices` / `4 BHK Exclusive Luxurious` (`#4C4F58`).
  - Location: Map pin icon + `TP-32, Adajan, Surat`.
  - Phone Hotline: Rounded pill badge (`#FAF8F5`, `#AD2929` text with phone icon, e.g. `+91 75728 28000`).

### 6. "Why Choose Shreepad Group?" (Value Proposition Matrix)
- 3-Column Feature Cards:
  - Top-Left: Red outlined vector icons (Buildings, Shield Badge, Handshake).
  - Top-Right: Giant watermark outlined numbers (`01`, `02`, `03`) in crimson outline.
  - Card Titles: `Proven Expertise`, `Superior Quality`, `Transparency and Trust` (`#AD2929`).
  - White card container with subtle 1px border.

### 7. Client Testimonials Section
- Left: Overlapping 3-photo client portrait carousel with center active client enlarged with white border.
- Right:
  - Sub-tag: `Client Testimonials` (`#AD2929`)
  - Prominent quote: *"The brand value of Shreepad Group is very high..."* (`Gilroy 700, 24px`).
  - Author: `Naimesh Vashi` + Project Name `Shreepad Ethics`.
  - CTA Button: Red pill `See More Testimonials` (`#AD2929`).
  - Navigation: Circular previous/next outlined arrow buttons.

### 8. Full-Width Dark Footer (`#181919`)
- 4 Main Columns:
  1. Logo + *"सुખ-शांति-समृद्धि"* tagline + description + circular social icons.
  2. Useful Links: Home, About Us, Awards, Testimonials, Blog & News, Contact Us, Vendor Registration.
  3. Projects: Residential, Commercial.
  4. Get In Touch: Opp. JK Motors, Near Pal-Umra Bridge, Pal, Surat - 395009 + `info@shreepadgroup.com` + View on Map.
- "Call Us At" Multi-Line Strip:
  - 5 dedicated call boxes for Surat hotlines (`+91 83476 68000`, `+91 70460 14000`, `+91 70968 69000`, etc.).
- Copyright Bar: `Copyright © 2025 Shreepad Group Surat. All Rights Reserved` + `Privacy Policy`.

### 9. Persistent Floating Widgets
- **Bottom-Right:** Floating WhatsApp button (`#49C658`, `37px x 37px`, `bottom: 50px, right: 30px`, direct message link).
- **Bottom-Left:** Circular `Back to Top` button (`45px x 45px`) with dynamic SVG progress circle tracking page scroll percentage.

---

## 4. MOBILE UX REVERSE ENGINEERING (`390x844` iPhone 14 Pro)

### A. Mobile Navigation Drawer (`#mysidenav.sidenav.more-menu`)
- **Trigger:** Dark pill button `Menu` with hamburger icon in header.
- **Drawer Opening Animation:** Fullscreen slide-down / fade transition (`0.5s ease-in-out`).
- **Surface:** 100% full-screen coverage in solid Crimson Red (`#AD2929`) with an architectural blueprint line illustration watermark.
- **Typography:** Giant white links (`Gilroy 700, 26px`, `line-height: 1.5`):
  - *Home, About Us, Awards, Testimonials, Blog & News, Contact Us, Vendor Registration*.
- **Close Button:** Floating circular white button with `X` icon at top-right.
- **Mobile Drawer Footer:**
  - Circular white phone badge + `Call Us At: +91 83476 68000`.
  - Circular white email badge + `Mail Us At: info@shreepadgroup.com`.
  - `Follow Us At` + circular outlined Facebook, Instagram, YouTube icons.

### B. Mobile Project Cards Stacking
- **All Properties Button:** Automatically wraps and stacks directly above the filter tabs on mobile.
- **Tabs:** Horizontal scrollable strip (`On Going`, `Ready Possession`, `Completed`).
- **Cards:** Seamless 1-column vertical stack (`width: 100%`):
  - Large edge-to-edge project render.
  - Project Title in bold Gilroy (`20px - 22px`).
  - Locality with map pin icon.
  - 1-tap phone dialer pill (`min-height: 44px`).
  - Ample `32px` vertical margin between cards.

---

## 5. TRANSLATION & BLUEPRINT FOR SILVERSTONE DEVELOPERS

| Shreepad Group Pattern | Silverstone Developers "Ready to Live" Adaptation |
| :--- | :--- |
| **Crimson Red (`#AD2929`)** | **Champagne Bronze (`#B4833E`) + Emerald Possession (`#15803D`)** — Gives Silverstone a more warm, architectural luxury estate feel while preserving the high-contrast conversion power. |
| **"सुખ-શાંતિ-સમૃદ્ધિ" Tagline** | **"Ready to Live"** — Emphasize 100% completed BU/OC residences, zero waiting period, and zero rent overlap. |
| **Top Info Bar (`#313033`)** | Top trust strip: Surat Office, RERA Clearances, Phone Hotline, and Google Maps direct link. |
| **Menu Button Pill (`#F7F1F1`)** | Frosted glass pill button opening our luxury architectural Sheet drawer. |
| **Legacy Stat Counters (`74px`)** | `500+ Happy Families`, `100% BU/OC Record`, `0 Days Waiting Risk`, `100% Vastu Shastra`. |
| **Project Showcase Tabs** | `All Ready Projects`, `Luxury Residences (Springhill)`, `Royal Bungalows (Raj Mahel)`, `Row Houses (Applewood)`, `Garden Villas`. |
| **Project Card Call Pill** | Dual-Action Pill: `Download Brochure (PDF)` + `Book Actual Flat Visit` (instant WhatsApp deep link). |
| **Fullscreen Red Menu Drawer** | Architectural Warm Alabaster & Deep Obsidian Drawer with real Surat CAD blueprints watermark and direct WhatsApp/Phone buttons. |
| **Floating WhatsApp & Back to Top** | Persistent WhatsApp inquiry + Mobile Thumb-Zone Bar (`min-h-12`) optimized for Surat Instagram and WhatsApp referral traffic. |

---
*Generated via automated Playwright headless browser inspection at `1440x900` and `390x844` on 2026-10-23.*
