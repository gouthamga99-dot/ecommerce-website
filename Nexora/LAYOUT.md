# NEXORA - Layout & Structure Documentation

## Project Overview

NEXORA is a premium consumer electronics e-commerce storefront. The design faithfully reproduces
the Google Stitch-generated screens with a "Modern White & Precision Royal Blue" theme.

**Brand:** NEXORA
**Tagline:** *"Technology, Simplified."*
**Currency:** Indian Rupee (INR, Rs)

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16.3.7 (App Router, Turbopack) |
| UI | React 19.3.0 |
| Language | TypeScript 5.5 |
| Styling | Plain CSS 3 (global design system, no CSS framework) |
| Icons | Material Symbols Outlined (Google Fonts) |
| State | React Context + localStorage persistence |

> Note: the original brief specified HTML5 / CSS3 / Vanilla JS only. The static vanilla build is
> still preserved in this folder (`index.html`, `products.html`, `product.html`, `cart.html`,
> `css/style.css`, `js/script.js`) and the Next.js app is a faithful port of it, per the user's
> explicit request to convert to Next.js.

---

## Project Structure

```
Nexora/
|-- app/
|   |-- layout.tsx                 # Root layout: fonts, metadata, CartProvider
|   |-- globals.css                # Complete design system + all component styles
|   |-- page.tsx                   # Homepage (/)
|   |-- products/page.tsx          # Product Listing Page (/products)
|   |-- product/[id]/page.tsx      # Product Detail Page (/product/1)
|   `-- cart/page.tsx              # Full Cart Page (/cart)
|-- components/
|   |-- Header.tsx                 # Announcement bar, nav, search, cart trigger
|   |-- Footer.tsx                 # Footer grid + payment icons
|   |-- CartDrawer.tsx             # Slide-in cart (all routes)
|   |-- Toast.tsx                  # Toast host + showToast() imperative helper
|   |-- HeroSection.tsx            # Hero + spec panel + trust metrics
|   |-- CategoryGrid.tsx           # 4 category cards
|   |-- ProductShowcase.tsx        # 4 flagship showcase cards
|   |-- FestivalOffer.tsx          # Countdown + bank cashback + bundle widget
|   |-- ValueProps.tsx             # 3 value props + trade-in simulator
|   |-- Testimonials.tsx           # 3 verified reviews
|   |-- VIPSection.tsx             # Email capture + membership card
|   `-- ProductCard.tsx            # Reusable PLP product card
|-- context/
|   `-- CartContext.tsx            # Cart state, totals, drawer open/close
|-- data/
|   `-- products.ts                # 6 smartphones, categories, testimonials, trade-in
|   `-- whatsapp.ts                # WHATSAPP_NUMBER + WhatsApp order message/URL
|-- public/assets/images/          # 54 images served at /assets/images/img_N.jpg
|-- assets/images/                 # Source copy (static build)
|-- LAYOUT.md                      # This document
`-- package.json / tsconfig.json / next.config.js
```

### Route Map

| Route | Component | Rendering |
|-------|-----------|-----------|
| `/` | `app/page.tsx` | Static |
| `/products` | `app/products/page.tsx` | Static |
| `/product/[id]` | `app/product/[id]/page.tsx` | Dynamic (server) |
| `/cart` | `app/cart/page.tsx` | Static |

### Image Reference

All images are referenced as `assets/images/img_N.jpg`, which resolves both for the static build
(root-relative) and the Next app (`public/assets/images/...`).

| File | Content |
|------|---------|
| `img_0.jpg` | NEXORA logo |
| `img_9.jpg` | Artisan Leather Sleeve (bundle) |
| `img_10.jpg` | MagDock 12-in-1 (bundle) |
| `img_11.jpg` | Apex Titan Chrono watch |
| `img_13.jpg` | Xiaomi 15 Ultra |
| `img_18.jpg` | OLED screen (gallery) |
| `img_20.jpg` | Sonic Buds Pro |
| `img_21.jpg` | Galaxy S25 Ultra |
| `img_22.jpg` | StealthBook Pro 16 (main / hero) |
| `img_24.jpg` | Right ports (gallery) |
| `img_28.jpg` | Pixel 9 Pro XL |
| `img_30.jpg` | Lid view (gallery) |
| `img_31.jpg` | Titan Ultra 16 Pro Max |
| `img_33.jpg` | ROG Phone 9 Pro |
| `img_36.jpg` | Ananya Sen (testimonial) |
| `img_37.jpg` | OnePlus 13 |
| `img_41.jpg` | Left ports (gallery) |
| `img_42.jpg` | Keyboard deck (gallery) |
| `img_43.jpg` | Keynote stage |
| `img_44.jpg` | Vikramaditya Rao (testimonial) |
| `img_45.jpg` | AcousticElite Pro headphones |
| `img_47.jpg` | Kabir Mehta (testimonial) |
| `img_48.jpg` | Hero visual |

Source URL mapping is preserved in `assets/image_urls.txt`.

---

## Page Layouts

### 1. Homepage (`/`)

```
+----------------------------------------------------------+
| ANNOUNCEMENT BAR                                          |
|  Republic Tech Fest Live | Track Order | Mumbai 400001   |
+----------------------------------------------------------+
| HEADER (sticky)                                           |
|  [LOGO]   Home | Smartphones | Laptops                   |
|           [ Search Bar ]   [a] [heart] [cart 2] [burger]  |
+----------------------------------------------------------+
| HERO                                                      |
|   [status badge: Republic Tech Drop 2025 Live]           |
|   Engineered for the Extraordinary.                       |
|   [sub-copy]                                              |
|   [Explore the Ecosystem]                                 |
|   [hero visual + floating spec panel]                     |
|   [ 4x trust metric tiles ]                               |
+----------------------------------------------------------+
| CATEGORY GRID                                             |
|   Smartphones | Laptops | Cameras | Docks & Chargers      |
+----------------------------------------------------------+
| FLAGSHIP SHOWCASE  (4 cards)                              |
|   [badge] [title] [desc] [spec chips]                     |
|   [image]                                                 |
|   [Starting From price]      [Pre-Order Now]              |
+----------------------------------------------------------+
| FESTIVAL OFFER                                            |
|   [Countdown HH : MM : SS]  [Claim VIP Launch Pass]       |
|   [complimentary bundle widget]                           |
+----------------------------------------------------------+
| VALUE PROPS (3 cards + enterprise bar)                    |
|   Trade-in simulator select -> live credit readout        |
+----------------------------------------------------------+
| TESTIMONIALS (3 cards)                                    |
+----------------------------------------------------------+
| VIP SECTION                                               |
|   [email capture]                    [membership card]    |
+----------------------------------------------------------+
| FOOTER  (brand | Shop | Support | Company)               |
+----------------------------------------------------------+
```

Note: the "Watch Hardware Keynote (4K)" hero button was removed per requirements. Only
`Explore the Ecosystem` remains in the hero CTA group.

### 2. Product Listing Page (`/products`)

```
+----------------------------------------------------------+
| Breadcrumb: Home / Electronics / Smartphones              |
+----------------------------------------------------------+
| CATEGORY HEADER                                           |
|   [pulse tag] Flagship Smartphones & Foldables            |
|   [6 filter pills]                                        |
+----------------------------------------------------------+
| +--------------------+------------------------------------+
| | FILTER SIDEBAR     | TOOLBAR                             |
| | - Price range      |  [active filter chips]  [Sort v]    |
| | - Manufacturer     |  [grid | list toggle]                |
| | - Memory (RAM)     +------------------------------------+
| | - Storage          | PRODUCT GRID (ProductCard)          |
| | - Benefits         |  [badge] [wishlist] [image]         |
| | - Ratings          |  [delivery] [rating] [name]         |
| |                    |  [color swatches]                   |
| |                    |  [price] [old price] [save]         |
| |                    |  [EMI] [Add to Cart]                |
| +--------------------+------------------------------------+
+----------------------------------------------------------+
```

### 3. Product Detail Page (`/product/[id]`)

```
+----------------------------------------------------------+
| Breadcrumb: Home / Laptops / Creator & Workstation / ... |
+----------------------------------------------------------+
| +--------------------------+-----------------------------+
| | GALLERY                  | PRODUCT INFO                |
| |  [main image + badges]   |  [class tag] [SKU]          |
| |  [wishlist] [zoom]       |  h1 + rating row            |
| |  [360 Studio View]       |  [price / MRP / discount]   |
| |  [6 thumbnails]          |  [bank offer] [EMI]         |
| |  [3x trust badges]       |                             |
| |                          | CONFIGURATOR                |
| |                          |  1. Finish / Colorway       |
| |                          |  2. System Silicon          |
| |                          |  3. Unified Memory          |
| |                          |  4. NVMe Storage            |
| |                          |  [Care+ protection]         |
| |                          |  [pincode checker]          |
| |                          |  [qty] [Add to Cart]        |
| |                          |  [Instant Buy]              |
| +--------------------------+-----------------------------+
| TABS: Specs | Features | Reviews | Warranty               |
+----------------------------------------------------------+
| BUNDLE BUILDER (3 items + summary + Add All)             |
+----------------------------------------------------------+
```

### 4. Cart Page (`/cart`)

```
+----------------------------------------------------------+
| Your Shopping Cart                                        |
| +-------------------------------------+------------------+
| | CART ITEM                           | ORDER SUMMARY   |
| |  [image] name                       |  Subtotal       |
| |         variant                    |  GST (18%)      |
| |  [- n +] price         [delete]     |  Shipping FREE  |
| +-------------------------------------+  Total          |
| | (repeated per item)                 |  [Checkout]     |
| |                                     |  [Continue]     |
| +-------------------------------------+------------------+
| EMPTY STATE: icon + "Your cart is empty" + Continue CTA  |
+----------------------------------------------------------+
```

---

## Cart Drawer (Global - slides from right)

```
+--------------------------------+
| [cart] Your Cart (2 items)  [x]|
+--------------------------------+
| Free Express Shipping Unlocked  |
| [====progress bar====]          |
+--------------------------------+
| [img] name                     |
|       variant                  |
|       Rs.1,34,900  [- 1 +] [d]|
| [img] name                     |
|       variant                  |
|       Rs.1,29,999  [- 2 +] [d]|
+--------------------------------+
| Subtotal            Rs.2,64,899|
| GST (18%)           Rs.47,681 |
| Total               Rs.3,12,580|
| [ Checkout Now ]               |
| [ View Full Cart ]             |
+--------------------------------+
```

### Checkout Now -> WhatsApp

There is **no checkout page and no payment gateway**. The drawer's
"Checkout Now" button hands the whole order to WhatsApp as a pre-filled message.

| File | Responsibility |
|------|----------------|
| `lib/whatsapp.ts` | `WHATSAPP_NUMBER` constant, message builder, URL builder, deep-link opener |
| `components/CartDrawer.tsx` | `handleCheckoutNow()` reads live cart state and calls `openWhatsApp()` |
| `context/CartContext.tsx` | Supplies `cart`, `subtotal`, `gst`, `shipping`, `total` (read-only) |

Flow:

```
click "Checkout Now"
  -> cart items + subtotal/gst/shipping/total from CartContext
  -> buildWhatsAppOrderMessage()   plain text, every line item
  -> encodeURIComponent()
  -> desktop: window.open('https://wa.me/<number>?text=...', '_blank')
     mobile: location = 'whatsapp://send?phone=<number>&text=...'
             (falls back to the wa.me link after 1.5s if the app is absent)
  -> closeCart()
```

Generated message:

```
Hello, I want to place an order.

Order Details:

1. Product: <name>
Configuration: <specs / variants>
Quantity: <qty>
Line Total: Rs <price x qty>

...

Total Items: <n> (<units> units)

Subtotal: Rs <subtotal>
GST (18%): Rs <gst>
Shipping: Rs <shipping>
Total: Rs <total>

Please confirm availability and delivery details.
```

**Changing the business number:** edit `WHATSAPP_NUMBER` in `lib/whatsapp.ts`.
It must be digits only, full international format, country code first, with no
`+`, spaces or dashes -- e.g. India +91 62823 28496 is `"916282328496"`.
`isWhatsAppConfigured()` validates the format and the drawer shows a toast
instead of opening a broken link if it is ever left empty or malformed.

The cart is **not** cleared on checkout, so `nexora_cart` in localStorage is
untouched and the customer keeps their cart while confirming on WhatsApp.

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

Font families map to CSS custom properties:

```
--font-display: 'Outfit', sans-serif
--font-body:    'Plus Jakarta Sans', sans-serif
--font-mono:    'JetBrains Mono', monospace
```

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

### Stylesheet Structure (`app/globals.css`)

The design system is one flat global stylesheet with no CSS framework. Sections
appear in cascade order:

| Section | Covers |
|---------|--------|
| Design tokens (`:root`) | Colors, fonts, spacing, radius, shadow tokens |
| Reset | `box-sizing`, margin/purge, `body` font stack |
| ANNOUNCEMENT BAR | Top promo strip |
| HEADER / NAV | Logo, search, nav links, cart button, hamburger |
| MOBILE MENU | Slide-in drawer + overlay |
| HERO SECTION | Home hero, CTAs, trust metrics |
| CATEGORY GRID | Home category tiles |
| PRODUCT SHOWCASE | Home featured row |
| FESTIVAL OFFER | Claimable offer widget |
| VALUE PROPS / TESTIMONIALS / VIP SECTION | Home lower sections |
| PRODUCT CARD | Reusable card used by PLP + showcase |
| PRODUCT LISTING PAGE | Breadcrumb, category header, filter pills, PLP grid, filter sidebar, toolbar, sort, view toggle |
| PRODUCT DETAIL PAGE | Gallery, configurator, specs, reviews |
| TABS SECTION | PDP tabbed panels |
| BUNDLE BUILDER | PDP bundle widget |
| CART DRAWER | Slide-over cart |
| TOAST NOTIFICATIONS | Toast stack |
| RESPONSIVE BREAKPOINTS | Tablet / mobile / small-mobile overrides |

Every class emitted by a React component must have a matching rule in this file.
When adding a component, add its styles to the matching section above rather than
introducing an inline `style` object, so the cascade stays predictable.

### Image Path Convention

Two builds live side by side and resolve images differently:

| Build | Path used | Resolves to |
|-------|-----------|-------------|
| Static vanilla (`index.html`, `products.html`, ...) | `assets/images/img_N.jpg` | `/assets/images/img_N.jpg` |
| Next.js app (all `.tsx` / `.ts`) | `/assets/images/img_N.jpg` | `/assets/images/img_N.jpg` |

Next.js routes are nested (`/product/1`), so **React image paths must be
root-absolute**. A relative `assets/images/...` on `/product/1` resolves to
`/product/assets/images/...` and 404s. Files live in `public/assets/images/`.

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|-----------------|
| Desktop | >=1024px | Full nav, 4-col category grid, 3-col product grid, 2-col PDP |
| Tablet | 768-1023px | Hamburger menu, 2-col grids, stacked PDP |
| Mobile | <768px | Hamburger menu, 1-col category, 2-col product, stacked PDP |
| Small Mobile | <480px | 1-col product grid |

---

## Application Logic

### Cart Context (`context/CartContext.tsx`)

| Member | Description |
|--------|-------------|
| `cart` | Array of cart items |
| `addToCart(item)` | Adds item, or increments qty if already present |
| `removeFromCart(id)` | Removes a line item |
| `updateQty(id, delta)` | Adjusts qty; drops item at 0 |
| `clearCart()` | Empties the cart |
| `cartCount` | Sum of all quantities |
| `subtotal` | Sum of price x qty |
| `gst` | `round(subtotal * 0.18)` |
| `total` | `subtotal + gst` |
| `isCartOpen` / `openCart()` / `closeCart()` | Drawer visibility |

Persistence: localStorage key `nexora_cart`. Free shipping threshold is Rs. 1,999.

### Toast (`components/Toast.tsx`)

`showToast(label, message)` pushes a toast that auto-dismisses after 3s. Exported as a plain
function so non-React modules can trigger it; the `<Toast />` host registers the callback on mount.

### Product Configurator (`app/product/[id]/page.tsx`)

Base price and deltas, quantity clamped to 1-10:

| Option | Delta |
|--------|-------|
| M4 Pro | -25,000 |
| M4 Max | 0 (default) |
| M4 Max Ultra | +45,000 |
| RAM 18GB / 36GB / 64GB / 128GB | -18,000 / 0 / +36,000 / +90,000 |
| Storage 512GB / 1TB / 2TB / 4TB | -15,000 / 0 / +36,000 / +80,000 |
| Nexora Care+ | +12,999 |

State: `selectedColor`, `selectedChip`, `selectedRam`, `selectedStorage`, `carePlus`, `qty`,
`activeTab`, `selectedImage`, `pincode`.

### Filters, Sorting & Calculators (`app/products/page.tsx`)

- Price range slider, manufacturer checkboxes, RAM / storage chips, benefit checkboxes, rating filter
- Sort: featured, price asc/desc, rating, newest
- Grid / list view toggle
- Trade-in estimator (home), festival countdown, pincode validation, VIP email capture

---

## Accessibility

- Semantic HTML5 elements (`header`, `nav`, `main`, `section`, `footer`)
- ARIA labels on icon buttons
- Keyboard-accessible controls (Tab, Enter, Escape)
- Proper heading hierarchy (h1 -> h2 -> h3)
- Alt text on all images, with an `onError` fallback to the logo
- Focus states on interactive elements
- Color contrast meets WCAG AA standards
