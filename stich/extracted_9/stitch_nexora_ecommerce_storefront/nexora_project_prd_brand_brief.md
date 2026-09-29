# NEXORA — Product Requirements Document (PRD) & Project Brief

**Brand:** NEXORA  
**Tagline:** *"Technology, Simplified."*  
**Document Version:** 1.0 (Post-Design Baseline)  
**Status:** Approved / In Development  
**Target Market:** India (Tier 1 & Tier 2 Metros — Mumbai, Delhi NCR, Bengaluru, Hyderabad, etc.)  
**Currency:** Indian Rupee (INR ₹)  
**Theme & Design Language:** Modern White & Precision Royal Blue (Clean, High-Fidelity Consumer Hardware Storefront)

---

## 1. Executive Summary & Brand Vision

NEXORA is a direct-to-consumer, premium consumer electronics and computing hardware storefront engineered to solve the fragmented, noisy, and high-friction buying journey of flagship tech in India. 

Positioned between raw marketplaces (Amazon/Flipkart) and single-OEM direct stores (Apple, Samsung), NEXORA curates exclusively verified tier-1 flagship hardware—from custom silicon workstations and flagship smartphones to audiophile acoustics and smart wearables—backed by guaranteed genuine serial numbers, same-day white-glove metro dispatch, instant trade-in valuations, and transparent pricing inclusive of GST credits.

---

## 2. Target Audience & Personas

1. **The Creative Professional & Engineer (e.g., Rohan Verma, 29, Bandra)**
   - *Needs:* High-spec custom configurations (unified RAM, NVMe capacity, color-accurate displays), verified thermals, instant 18% GST invoice credit for business expense write-off.
   - *Pain Points:* Slow BTO (Built-to-Order) import lead times, fear of tampered gray-market hardware.

2. **The Tech Enthusiast & Early Adopter**
   - *Needs:* Launch-day flagship availability, transparent comparative benchmarks (SoC, NPU, Geekbench, Antutu), 360° product studio inspection.
   - *Pain Points:* Misleading seller listings, confusing bank offer fine print, tedious trade-in evaluation processes.

3. **The Discerning Consumer**
   - *Needs:* Seamless 1-click checkout via UPI/Cards, zero-cost EMI options across leading Indian banks, doorstep unboxing & data migration assistance.
   - *Pain Points:* High returns friction, lack of transparent local warranty coverage.

---

## 3. Visual Identity & Design System Standards

The project utilizes the **Nexora Pure Precision** light-mode design system:

- **Color Palette:**
  - **Surface Canvas:** `#FFFFFF` (Pristine White) and `#F8FAFC` / `#EFF6FF` (Ice Blue tint).
  - **Primary Brand Accent:** `#2563EB` (Royal Blue) & `#1D4ED8` (Deep Cobalt).
  - **Secondary Accents:** `#0284C7` (Sky Cyan) and `#10B981` (Emerald Green for stock/trust indicators).
  - **Typography & Neutrals:** `#0F172A` (Obsidian Charcoal for headings), `#334155` (Slate for body text), `#64748B` (Muted Slate for secondary specs).
- **Typography:**
  - **Headings & Badges:** `Outfit` / `Plus Jakarta Sans` (Geometric, bold, modern).
  - **Body & Specs:** `Hanken Grotesk` / `Inter` (Legible at high data density).
- **Component Geometry & Depth:**
  - Rounded corners (`8px` to `16px` border radii).
  - Subtle borders (`1px solid #E2E8F0`) with layered ambient drop shadows (`0 4px 20px -2px rgba(15, 23, 42, 0.05)`).

---

## 4. Information Architecture & Core Surfaces

NEXORA spans both **Desktop (Web Standard)** and **Mobile App (Mobile Tab/Stack)** layouts across four core functional tiers:

### 4.1. Flagship Brand Landing Page
- **Hero Statement:** *"Engineered for the Extraordinary."*
- **Key Features:**
  - Keynote video preview (4K stream modal trigger) and live hardware benchmark telemetries.
  - Ecosystem Pillars (₹0 Down No-Cost EMI, 15-Minute Dispatch, 2-Year Official Warranty, 100% Genuine).
  - "Four Milestones. Zero Compromise" showcase matrix featuring flagship hero releases:
    1. *StealthBook Pro 16"* Workstation
    2. *Phantom 16 Pro* Flagship Smartphone
    3. *AcousticElite Pro* ANC Headphones
    4. *Apex Titan Chrono 49mm* Grade 5 Titanium Watch
  - Live festival bank cashback spotlight card with dynamic countdown timer and instant claim trigger.
  - The NEXORA Standard (Direct OEM silicon, white-glove setup, instant trade-in credit calculator).
  - Indian Creator social proof and NEXORA Black VIP Priority Pass invitation pass.

### 4.2. Storefront Homepage
- **Navigation Chrome:**
  - Pincode delivery selector with automatic geo-detection (e.g., `Deliver to Mumbai 400001`).
  - Omnibar search with `⌘K` keyboard shortcut and instant category filtering.
  - User account quick menu, wishlist counter, and active cart badge with live quantity and price preview.
- **Content Blocks:**
  - Curated category navigation: *Smartphones, Laptops, Gaming, Audio, Cameras, Smartwatches, Docks & GaN Chargers*.
  - Deals of the Day flash sale card with live countdown timer and remaining unit telemetry.
  - Curated "Trending Flagships" with 1-tap "Add to Bag" triggers.
  - Interactive Trade-In Calculator with real-time exchange estimates.

### 4.3. Product Listing & Filtering Experience (PLP)
- **Categorization:** Deep subcategory navigation (*Flagships, Foldables & Flips, Gaming Phones*).
- **Faceted Search & Filter Engine:**
  - Price budget dual-range slider (₹15,000 – ₹1,80,000).
  - Brand checkboxes (Apple, Samsung, Google Pixel, OnePlus, Xiaomi, Asus ROG).
  - Hardware specifications (RAM: 8GB–24GB, Storage: 128GB–1TB).
  - Purchase benefit filters (No-Cost EMI, Exchange Bonus, Express 24H Delivery).
- **Hardware Comparison Matrix:**
  - Cross-device hardware benchmark comparing SoC Lithography, Antutu v10 scores, Camera sensors, and charging wattages.

### 4.4. Product Detail Page (PDP) — Custom Rig Configurator
- **Media Experience:** Multi-angle image thumbnails with 360° studio viewer toggle.
- **Commercial Perks:**
  - Pincode delivery lookup with guaranteed courier delivery timeline.
  - Bank Instant Privilege (₹10,000 instant discount on HDFC/ICICI credit cards).
  - No-Cost EMI calculator (starting from ₹18,325/mo).
- **Configurator Matrix:**
  - Colorway swatches (*Space Black, Natural Silver, Deep Midnight*).
  - Silicon Architecture selector (*M4 Pro, M4 Max, M4 Max Ultra*).
  - Unified Memory chips (*18GB, 36GB, 64GB, 128GB*).
  - High-throughput NVMe storage (*512GB, 1TB, 2TB, 4TB*).
  - Optional Nexora Care+ 2-year accidental damage protection add-on.
- **Bundle Builder:** "Equip Your Studio Rig" 1-click bundle purchase with instant accessory discounts.

---

## 5. Shopping Cart & Checkout Specification

### 5.1. Cart Drawer (Persistent Sidebar)
- **Trigger:** Accessible anywhere via header cart icon; automatically opens upon clicking "Add to Bag" or "Add to Cart".
- **Drawer Components:**
  - Free Express Delivery progress meter (unlocked at ₹1,999+).
  - Itemized product card list with thumbnail, variant attributes, price, and `[− 1 +]` stepper controls.
  - Direct item removal with immediate subtotal recalculation.
  - Subtotal, GST (18% inclusive) breakdown, and zero-fee express courier tag.
  - Dual CTAs: Secondary "View Full Cart" and prominent primary "Checkout Now" button.

### 5.2. Checkout & Payment Integrations (India-Specific)
- **Instant 1-Click Buy:** Native support for UPI (Google Pay, PhonePe, Paytm, BHIM) and RuPay.
- **Card Rails:** Visa, Mastercard, and major Indian credit card No-Cost EMI provisioning (HDFC, ICICI, Axis, SBI).
- **Invoicing:** Instant GSTIN input field with downloadable B2B tax invoice generation for corporate input tax credit.

---

## 6. Technical & Non-Functional Requirements

| Category | Requirement | Target Metric |
| :--- | :--- | :--- |
| **Performance** | Core Web Vitals (LCP, FID, CLS) | LCP < 1.8s, CLS < 0.05 on 4G mobile connections |
| **Responsiveness** | Responsive break points | Desktop (1440px / 1280px), Mobile (390px portrait) |
| **Accessibility** | WCAG 2.1 Compliance | AA compliant color contrast on all text/buttons |
| **State Sync** | Client-side cart sync | LocalStorage / SessionStore persistence for guest carts |
| **Security** | Payment & Checkout | PCI-DSS compliant checkout iframe / Razorpay gateway |

---

## 7. Deliverables & Current Design Asset Inventory

| Asset Name | Asset Type | Description |
| :--- | :--- | :--- |
| **Nexora Pure Precision** | `DESIGN_SYSTEM` | Active White & Blue theme tokens, typography, and component styling. |
| **NEXORA Light Logo** | `IMAGE (SVG)` | Royal blue monogram badge with dark slate wordmark. |
| **Flagship Landing Page** | `SCREEN (Desktop & Mobile)` | Marketing launch hero, flagship devices showcase, and brand trust pillars. |
| **Tech Store Homepage** | `SCREEN (Desktop & Mobile)` | E-commerce storefront with deals, categories, and trade-in estimator. |
| **Smartphone Category Page** | `SCREEN (Desktop & Mobile)` | Filterable catalog with benchmark comparison matrix. |
| **StealthBook Pro 16" PDP** | `SCREEN (Desktop & Mobile)` | Interactive hardware configurator, studio gallery, and checkout bar. |

---

## 8. Next Phase Roadmap

1. **User Account & Order History Portal:** Dedicated order tracking with timeline stepper, return/exchange request flow, and digital warranty card downloads.
2. **Dedicated Full Cart & Multi-Step Checkout Screen:** Comprehensive cart review page and dedicated address/payment step flow.
3. **Wishlist & Compare Screen:** Dedicated multi-device side-by-side spec comparison table.