# NEXORA — Layout & Structure Documentation

## Project Overview

NEXORA is a premium consumer electronics e-commerce storefront built as a static website using HTML5, CSS3, and Vanilla JavaScript. The design faithfully reproduces the Google Stitch-generated screens with a "Modern White & Precision Royal Blue" theme.

**Brand:** NEXORA  
**Tagline:** *"Technology, Simplified."*  
**Currency:** Indian Rupee (INR ₹)

---

## Project Structure

```
Nexora/
├── index.html              # Storefront Homepage (Light Theme)
├── products.html           # Product Listing Page (Smartphones)
├── product.html            # Product Detail Page (StealthBook Pro 16")
├── cart.html               # Full Cart Page
├── css/
│   └── style.css           # Complete Design System & Components
├── js/
│   └── script.js           # All Interactivity & Cart Logic
└── assets/
    ├── images/             # 54 Product Images (from Stitch CDN)
    │   ├── img_0.jpg       # NEXORA Logo
    │   ├── img_9.jpg       # Leather Sleeve (Bundle)
    │   ├── img_10.jpg      # MagDock 12-in-1 (Bundle)
    │   ├── img_13.jpg      # Xiaomi 15 Ultra
    │   ├── img_18.jpg      # OLED Screen (Gallery)
    │   ├── img_21.jpg      # Galaxy S25 Ultra
    │   ├── img_22.jpg      # StealthBook Pro 16 (Main)
    │   ├── img_24.jpg      # Right Ports (Gallery)
    │   ├── img_28.jpg      # Pixel 9 Pro XL
    │   ├── img_30.jpg      # Lid View (Gallery)
    │   ├── img_31.jpg      # Titan Ultra 16 Pro Max
    │   ├── img_33.jpg      # ROG Phone 9 Pro
    │   ├── img_37.jpg      # OnePlus 13
    │   ├── img_41.jpg      # Left Ports (Gallery)
    │   ├── img_42.jpg      # Keyboard Deck (Gallery)
    │   └── ...             # Hero, Testimonials, Keynote images
    └── image_urls.txt      # Source URL mapping
```

---

## Page Layouts

### 1. Homepage (`index.html`)

```
┌─────────────────────────────────────────────────────────┐
│ ANNOUNCEMENT BAR                                        │
│ ⚡ Republic Tech Fest Live | Track Order | Mumbai 400001│
├─────────────────────────────────────────────────────────┤
│ HEADER (sticky)                                         │
│ [LOGO]  Home | Smartphones | Laptops                  │
│         [Search Bar]  [👤] [♡] [🛒 2] [☰]            │
├─────────────────────────────────────────────────────────┤
│ HERO SECTION                                            │
│  ● Republic Tech Drop 2025 Live • Tier-1 Silicon       │
│                                                         │
│     Engineered for the                                 │
│     Extraordinary.                                      │
│                                                         │
│  [Explore the Ecosystem →]  [▶ Watch Keynote 18:24]   │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │         HERO DEVICE VISUAL (21:9)                │  │
│  │  ┌─────────────────────────────────────────────┐  │  │
│  │  │ Hardware Benchmark: M4-MAX • 4.5GHz        │  │  │
│  │  │ Thermal: 0dB Silent | Display: 2400 Nits  │  │  │
│  │  │                              [Live Specs →]│  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │ ₹0 Down  │ │ 15-Min   │ │ 2-Year   │ │ 100%     │  │
│  │ No-Cost  │ │ Hyper    │ │ Official │ │ Genuine  │  │
│  │ EMI      │ │ Dispatch │ │ Warranty │ │ Serial   │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
├─────────────────────────────────────────────────────────┤
│ CATEGORY GRID — "Explore the Ecosystem"                 │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐   │
│  │ 📱 Smartphones│ │ 💻 Laptops   │ │ 📷 Cameras   │   │
│  │ FROM ₹19,999 │ │ FROM ₹...    │ │ FROM ₹...    │   │
│  │ Explore →    │ │ Explore →    │ │ Explore →    │   │
│  └──────────────┘ └──────────────┘ └──────────────┘   │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐   │
│  │ 🔌 Docks     │ │ 🎧 Audio     │ │ ⌚ Smartwatch │   │
│  │ FROM ₹...    │ │ FROM ₹...    │ │ FROM ₹...    │   │
│  └──────────────┘ └──────────────┘ └──────────────┘   │
├─────────────────────────────────────────────────────────┤
│ PRODUCT SHOWCASE — "Four Milestones. Zero Compromise."  │
│  ┌─────────────────────┐ ┌─────────────────────┐      │
│  │ M4 Pro / Max        │ │ 3nm Bionic Ultra     │      │
│  │ StealthBook Pro 16" │ │ Phantom 16 Pro       │      │
│  │ [specs chips]       │ │ [specs chips]       │      │
│  │ ┌─────────────────┐ │ │ ┌─────────────────┐ │      │
│  │ │   [IMAGE 16:10] │ │ │ │   [IMAGE 16:10] │ │      │
│  │ └─────────────────┘ │ │ └─────────────────┘ │      │
│  │ ₹2,49,900 ₹2,69,900│ │ ₹1,34,900 ₹1,49,900│      │
│  │ [Pre-Order Now]    │ │ [Pre-Order Now]    │      │
│  └─────────────────────┘ └─────────────────────┘      │
│  ┌─────────────────────┐ ┌─────────────────────┐      │
│  │ Lossless 24-bit     │ │ 100M Dive Certified │      │
│  │ AcousticElite Pro   │ │ Apex Titan Chrono   │      │
│  │ ₹34,990 ₹39,990    │ │ ₹79,900 ₹89,900    │      │
│  └─────────────────────┘ └─────────────────────┘      │
├─────────────────────────────────────────────────────────┤
│ FESTIVAL OFFER SPOTLIGHT                                │
│  ┌───────────────────────────────────────────────────┐  │
│  │ 🔥 Republic Tech Fest Exclusive                  │  │
│  │ Instant ₹10,000 Bank Cashback + Free Buds Pro    │  │
│  │                                                   │  │
│  │ [09]:[42]:[18]  Limited to 500 units             │  │
│  │  384 Claimed across India                        │  │
│  │                                                   │  │
│  │ [🎫 Claim VIP Launch Pass]  Auto-applied at ...  │  │
│  │                                                   │  │
│  │  ┌─────────────────────────────────────────────┐  │  │
│  │  │ FREE (₹14,990)                              │  │  │
│  │  │ [Sonic Buds Pro Image]                      │  │  │
│  │  │ Festive Coupon: REPUBLIC10K                 │  │  │
│  │  │ Free Express Air Delivery: Included         │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────┤
│ VALUE PROPS — "The Nexora Standard"                     │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐    │
│  │ ✓ Direct OEM │ │ ✈ White-Glove│ │ ↻ Trade-In   │    │
│  │   Silicon    │ │   Concierge  │ │   Credit     │    │
│  │ Apple Auth.  │ │ Zero-Downtime│ │ [Calculator] │    │
│  │ Sony Alpha   │ │ Guarantee    │ │ ₹42,000      │    │
│  └──────────────┘ └──────────────┘ └──────────────┘    │
│  ┌───────────────────────────────────────────────────┐  │
│  │ 🎧 24x7 Priority Concierge & Enterprise Procure  │  │
│  │ [Enterprise Sales]  [💬 Live Chat (90s reply)]   │  │
│  └───────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────┤
│ TESTIMONIALS — "Built for India's Leading Creators"     │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐    │
│  │ ★★★★★        │ │ ★★★★★        │ │ ★★★★★        │    │
│  │ "We ordered  │ │ "The trade-in│ │ "The Acoustic │    │
│  │  three M4..."│ │  program is  │ │  Elite Pro..."│    │
│  │  [📷] Kabir  │ │  [📷] Ananya │ │  [📷] Vikram │    │
│  │  Mehta, DoP  │ │  Sen, BLR    │ │  Rao, Cyber │    │
│  └──────────────┘ └──────────────┘ └──────────────┘    │
├─────────────────────────────────────────────────────────┤
│ VIP MEMBERSHIP — "Nexora VIP Priority Access"           │
│  ┌───────────────────────────────────────────────────┐  │
│  │ 💳 Receive ₹1,500 Instant Welcome Credit          │  │
│  │ [email input]              [Claim ₹1,500 Voucher]│  │
│  │ ✓ Welcome! Voucher code NEXORAVIP1500 sent...    │  │
│  │                                                   │  │
│  │  ┌─────────────────────────────────────────────┐  │  │
│  │  │ ⚡ NEXORA BLACK          PRIORITY PASS     │  │  │
│  │  │ Tier-1 Member Privileges                    │  │  │
│  │  │ Instant Credit: ₹1,500.00  Metro: Ultra 15m│  │  │
│  │  │ •••• 8829              EXP 12/28           │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────┤
│ FOOTER                                                  │
│  [NEXORA Logo]                                           │
│  Premium consumer electronics...                         │
│  Shop: Smartphones|Laptops|Cameras|Docks                │
│  Support: Track|Store|Support|Warranty|Returns           │
│  Company: About|Careers|Press|Blog|Contact               │
│  © 2025 NEXORA | UPI Visa Mastercard RuPay HDFC ICICI   │
└─────────────────────────────────────────────────────────┘
```

---

### 2. Product Listing Page (`products.html`)

```
┌─────────────────────────────────────────────────────────┐
│ ANNOUNCEMENT BAR + HEADER (same as homepage)            │
├─────────────────────────────────────────────────────────┤
│ BREADCRUMB: Home / Electronics / Smartphones           │
│                                          [48 Available] │
├─────────────────────────────────────────────────────────┤
│ CATEGORY HEADER                                         │
│  ● NEXT-GEN SILICON & PERISCOPE OPTICS                  │
│  Flagship Smartphones & Foldables                       │
│  Experience blistering 3nm architectures...              │
│                                    [✓ 1 Year Assured]   │
├─────────────────────────────────────────────────────────┤
│ FILTER PILLS: [All] [Flagships] [Foldables] [Under...] │
├──────────────────────┬──────────────────────────────────┤
│ FILTER SIDEBAR       │ TOOLBAR                          │
│ ┌──────────────────┐ │ Active: [Brand:Apple ×]          │
│ │ Filters  Clear   │ │         [Storage:256GB+ ×]       │
│ │ Price: ₹15k-1.8L │ │         [₹50k-₹1.5L ×]          │
│ │ [====slider====] │ │ Sort: [Featured ▼] [▦] [☰]     │
│ │ MIN: 15,000      │ ├──────────────────────────────────┤
│ │ MAX: 1,80,000    │ │ PRODUCT GRID (3 columns)         │
│ │                  │ │ ┌────────┐ ┌────────┐ ┌────────┐ │
│ │ Manufacturer     │ │ │[BEST-  │ │[AI     │ │[PURE   │ │
│ │ ☑ Apple    14   │ │ │SELLER] │ │POWERED]│ │GEMINI] │ │
│ │ ☑ Samsung  18   │ │ │  [img] │ │  [img] │ │  [img] │ │
│ │ ☐ Pixel     8   │ │ │Free 1D │ │S-Pen   │ │Titan M2│ │
│ │ ☐ OnePlus  12   │ │ │★4.9    │ │★4.8    │ │★4.7    │ │
│ │ ☐ Xiaomi    9   │ │ │Titan...│ │Galaxy..│ │Pixel...│ │
│ │ ☐ Asus ROG  5   │ │ │●●●●○   │ │●●●○    │ │●●●○    │ │
│ │                  │ │ │₹1,34,..│ │₹1,29,..│ │₹1,09,..│ │
│ │ Memory (RAM)     │ │ │EMI ₹6k │ │EMI ₹6k │ │EMI ₹5k │ │
│ │ [8GB][12GB]      │ │ │[Add to │ │[Add to │ │[Add to │ │
│ │ [16GB✓][24GB]    │ │ │ Cart]  │ │ Cart]  │ │ Cart]  │ │
│ │                  │ │ └────────┘ └────────┘ └────────┘ │
│ │ Storage          │ │ ┌────────┐ ┌────────┐ ┌────────┐ │
│ │ [128GB][256GB✓]  │ │ │[SNAP-  │ │[185Hz  │ │[LEICA  │ │
│ │ [512GB][1TB]     │ │ │DRAGON] │ │MATRIX] │ │OPTICS] │ │
│ │                  │ │ │  [img] │ │  [img] │ │  [img] │ │
│ │ Purchase Benefits│ │ │100W    │ │AirTrig │ │Leica   │ │
│ │ ☑ No-Cost EMI    │ │ │★4.8    │ │★4.6    │ │★4.7    │ │
│ │ ☐ Exchange Bonus │ │ │OnePlus │ │ROG     │ │Xiaomi  │ │
│ │ ☑ Express 24H    │ │ │₹69,999 │ │₹84,999 │ │₹79,999 │ │
│ │                  │ │ │[Add to │ │[Add to │ │[Add to │ │
│ │ Customer Ratings │ │ │ Cart]  │ │ Cart]  │ │ Cart]  │ │
│ │ ○ 4.5★ & above   │ │ └────────┘ └────────┘ └────────┘ │
│ │ ○ 4.0★ & above   │ │                                  │
│ └──────────────────┘ └──────────────────────────────────┘
├─────────────────────────────────────────────────────────┤
│ FOOTER (same as homepage)                               │
└─────────────────────────────────────────────────────────┘
```

---

### 3. Product Detail Page (`product.html`)

```
┌─────────────────────────────────────────────────────────┐
│ ANNOUNCEMENT BAR + HEADER (same as homepage)            │
├─────────────────────────────────────────────────────────┤
│ BREADCRUMB: Home / Laptops / Creator & Workstation /    │
│             Nexora StealthBook Pro 16"                   │
├────────────────────────────┬────────────────────────────┤
│ GALLERY (sticky)           │ PRODUCT INFO               │
│ ┌────────────────────────┐ │ [NEXORA PRO COMPUTING]     │
│ │                        │ │ SKU: NXR-SB16-M4M          │
│ │    MAIN IMAGE (4:3)    │ │                            │
│ │                        │ │ Nexora StealthBook Pro 16" │
│ │  [In Stock] [Save ₹20k]│ │ Workstation (2025 Edition) │
│ │  [♡] [🔍]  [360°]     │ │                            │
│ │                        │ │ ★4.9 | 1,428 Buyers | 412  │
│ └────────────────────────┘ │                            │
│ ┌──┐┌──┐┌──┐┌──┐┌──┐     │ ┌────────────────────────┐ │
│ │LID││OLED││P-L││P-R││DECK│ │ ₹2,19,900 ₹2,39,900    │ │
│ └──┘└──┘└──┘└──┘└──┘     │ │ Save ₹20,000 (8% OFF)   │ │
│                            │ │ Incl. all taxes & GST   │ │
│ TRUST BADGES:              │ │                        │ │
│ 🚀 Express Air             │ │ 💳 Save ₹10,000         │ │
│ 📄 GST Invoice              │ │ Net: ₹2,09,900         │ │
│ ↻ 7 Days Policy             │ │                        │ │
│                            │ │ EMI from ₹18,325/mo     │ │
│                            │ └────────────────────────┘ │
│                            │                            │
│                            │ CONFIGURATOR:              │
│                            │ 1. Color: [●Black][○Silver]│
│                            │    [○Midnight]             │
│                            │ 2. Chip: [M4 Pro][✓M4 Max] │
│                            │    [M4 Max Ultra +₹45k]    │
│                            │ 3. RAM: [18GB][✓36GB]      │
│                            │    [64GB][128GB]           │
│                            │ 4. Storage: [512GB][✓1TB]  │
│                            │    [2TB][4TB]              │
│                            │                            │
│                            │ ☐ Nexora Care+ +₹12,999    │
│                            │                            │
│                            │ 📍 Pincode: [400001] [Verify]│
│                            │ ✓ Free Express Delivery    │
│                            │                            │
│                            │ [−] 1 [+] [Add to Cart • ₹]│
│                            │ [⚡ Instant Buy with UPI]   │
├────────────────────────────┴────────────────────────────┤
│ TABS SECTION                                            │
│ [Technical Specs] [Key Features] [Reviews 1,428] [Warranty]│
│                                                         │
│ SPECS GRID (3 columns):                                │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐       │
│ │ Silicon     │ │ Display     │ │ Power       │       │
│ │ M4 Max      │ │ 16.2" XDR   │ │ 100Wh       │       │
│ │ 14-Core CPU │ │ 3456x2234   │ │ 22hr video  │       │
│ │ 32-Core GPU │ │ 1600 nits   │ │ 140W GaN    │       │
│ └─────────────┘ └─────────────┘ └─────────────┘       │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐       │
│ │ I/O Ports   │ │ Acoustics   │ │ Dimensions  │       │
│ │ 3x TB4      │ │ 6-speaker   │ │ 1.68cm thin │       │
│ │ SDXC        │ │ Dolby Atmos │ │ 2.14kg      │       │
│ │ HDMI 2.1    │ │ 3-mic array │ │ Aluminum    │       │
│ └─────────────┘ └─────────────┘ └─────────────┘       │
├─────────────────────────────────────────────────────────┤
│ BUNDLE BUILDER — "Equip Your Studio Rig"                │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────┐ │
│ │THIS ITEM │ │MagDock   │ │Leather   │ │Bundle Price│ │
│ │[img]     │ │[img]     │ │Sleeve    │ │₹2,29,380   │ │
│ │StealthBook│ │₹8,990   │ │[img]     │ │~~₹2,32,380~~│ │
│ │₹2,19,900 │ │          │ │₹3,490   │ │Save ₹3,000 │ │
│ └──────────┘ └──────────┘ └──────────┘ │[Add All 3]  │ │
│                                         └────────────┘ │
├─────────────────────────────────────────────────────────┤
│ FOOTER (same as homepage)                               │
└─────────────────────────────────────────────────────────┘
```

---

### 4. Cart Page (`cart.html`)

```
┌─────────────────────────────────────────────────────────┐
│ ANNOUNCEMENT BAR + HEADER (same as homepage)            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Your Shopping Cart                                     │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │  [img]  Product Name                              │  │
│  │         Variant specs                             │  │
│  │                              [−] 1 [+]  ₹Price   │  │
│  │                              [🗑️]                 │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │  [img]  Product Name                              │  │
│  │         Variant specs                             │  │
│  │                              [−] 2 [+]  ₹Price   │  │
│  │                              [🗑️]                 │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Order Summary                                    │  │
│  │  Subtotal:                            ₹XXX,XXX   │  │
│  │  GST (18%):                           ₹XX,XXX    │  │
│  │  Shipping:                             FREE       │  │
│  │  ─────────────────────────────────────────────    │  │
│  │  Total:                                ₹XXX,XXX   │  │
│  │                                                   │  │
│  │  [Proceed to Checkout]                            │  │
│  │  [← Continue Shopping]                            │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ FOOTER (same as homepage)                               │
└─────────────────────────────────────────────────────────┘
```

---

## Cart Drawer (Global — slides from right)

```
┌──────────────────────────────┐
│ 🛒 Your Cart (2 items)    [×]│
├──────────────────────────────┤
│ ✓ Free Express Shipping!     │
│ ████████████ 100% (₹1,999+) │
├──────────────────────────────┤
│ ┌────┐ Product Name          │
│ │img │ Variant specs         │
│ └────┘          [−] 1 [+] ₹ │
│                 [🗑️]        │
│ ┌────┐ Product Name          │
│ │img │ Variant specs         │
│ └────┘          [−] 1 [+] ₹ │
│                 [🗑️]        │
├──────────────────────────────┤
│ Subtotal:           ₹XXX,XXX│
│ GST (18%):          ₹XX,XXX │
│ ─────────────────────────── │
│ Total:              ₹XXX,XXX│
│                              │
│ [    Checkout Now    ]       │
│ [    View Full Cart  ]       │
└──────────────────────────────┘
```

---

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#2563EB` | CTAs, links, accents |
| `--primary-container` | `#1D4ED8` | Button hover states |
| `--secondary` | `#0284C7` | Secondary accents |
| `--tertiary` | `#10B981` | Success, stock indicators |
| `--surface` | `#FFFFFF` | Page background |
| `--surface-dim` | `#F8FAFC` | Footer, muted sections |
| `--surface-container` | `#F1F5F9` | Card backgrounds |
| `--on-surface` | `#0F172A` | Headings, primary text |
| `--on-surface-variant` | `#475569` | Body text |
| `--outline` | `#94A3B8` | Borders |
| `--outline-variant` | `#E2E8F0` | Subtle borders |
| `--error` | `#BA1A1A` | Error states, discounts |

### Typography

| Style | Font | Size | Weight | Line Height |
|-------|------|------|--------|-------------|
| Display Hero | Outfit | 64px | 700 | 72px |
| Headline LG | Outfit | 40px | 600 | 48px |
| Headline MD | Outfit | 24px | 600 | 32px |
| Body LG | Plus Jakarta Sans | 16px | 400 | 26px |
| Body MD | Plus Jakarta Sans | 14px | 400 | 22px |
| Body SM | Plus Jakarta Sans | 12px | 400 | 18px |
| Price XL | Outfit | 32px | 700 | 38px |
| Price SM | Outfit | 18px | 600 | 24px |
| Label Caps | Plus Jakarta Sans | 11px | 700 | 14px |
| Spec Code | JetBrains Mono | 12px | 500 | 16px |

### Spacing Scale

| Token | Value |
|-------|-------|
| `--space-xs` | 4px |
| `--space-sm` | 8px |
| `--space-md` | 16px |
| `--space-lg` | 24px |
| `--space-xl` | 40px |
| `--margin` | 32px (desktop) / 20px (mobile) |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Inputs, small elements |
| `--radius-md` | 8px | Buttons, cards |
| `--radius-lg` | 12px | Large cards |
| `--radius-xl` | 16px | Containers |
| `--radius-2xl` | 24px | Hero sections |
| `--radius-full` | 9999px | Pills, badges |

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle elevation |
| `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.07)` | Cards |
| `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.08)` | Elevated cards |
| `--shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.1)` | Modals, drawers |
| `--shadow-primary` | `0 8px 20px rgba(37,99,235,0.25)` | Primary buttons |
| `--shadow-glow` | `0 0 24px rgba(6,182,212,0.45)` | Glow effects |

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|-----------------|
| Desktop | ≥1024px | Full nav, 4-col category grid, 3-col product grid, 2-col PDP |
| Tablet | 768–1023px | Hamburger menu, 2-col grids, stacked PDP |
| Mobile | <768px | Hamburger menu, 1-col category, 2-col product, stacked PDP |
| Small Mobile | <480px | 1-col product grid |

---

## JavaScript Modules

### Cart System
- `loadCart()` — Load from localStorage
- `saveCart()` — Persist to localStorage
- `addToCart(productId, qty)` — Add item
- `removeFromCart(productId)` — Remove item
- `updateQty(productId, delta)` — Change quantity
- `getCartCount()` — Total items
- `getCartSubtotal()` — Pre-tax total
- `getCartGST()` — 18% tax
- `getCartTotal()` — Final total

### UI System
- `openCart()` / `closeCart()` — Cart drawer
- `toggleMobileMenu()` — Mobile navigation
- `showToast(label, message)` — Toast notifications
- `switchTab(tabId, btn)` — PDP tabs
- `switchImage(index, btn)` — Gallery thumbnails

### Product Configurator
- `selectColor(name, btn)` — Color selection
- `selectChip(type, delta, btn)` — Processor selection
- `selectRam(amount, delta, btn)` — Memory selection
- `selectStorage(cap, delta, btn)` — Storage selection
- `toggleCarePlus(input)` — Protection plan
- `calculateTotal()` — Live price update
- `updateQty(delta)` — Quantity stepper

### Filters & Sorting
- `sortProducts(sortBy)` — Sort dropdown
- `updatePriceReadout(value)` — Price slider
- `resetFilters()` — Clear all filters

### Calculators
- `calculateTradeValue()` — Trade-in estimator
- `updateModalValuation()` — Modal trade-in
- `checkPincode()` — Delivery checker
- `startCountdown()` — Festival timer

---

## Accessibility

- Semantic HTML5 elements (`header`, `nav`, `main`, `section`, `footer`)
- ARIA labels on icon buttons
- Keyboard-accessible controls (Tab, Enter, Escape)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- Focus states on interactive elements
- Color contrast meets WCAG AA standards
