---
name: Nexora
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363940'
  surface-container-lowest: '#0b0e14'
  surface-container-low: '#191c22'
  surface-container: '#1d2026'
  surface-container-high: '#272a31'
  surface-container-highest: '#32353c'
  on-surface: '#e1e2eb'
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#e1e2eb'
  inverse-on-surface: '#2e3037'
  outline: '#869397'
  outline-variant: '#3d494c'
  surface-tint: '#4cd7f6'
  primary: '#4cd7f6'
  on-primary: '#003640'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#00687a'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#1bbd85'
  on-tertiary-container: '#00452e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#10131a'
  on-background: '#e1e2eb'
  surface-variant: '#32353c'
typography:
  display-xl:
    fontFamily: Outfit
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  price-xl:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  price-sm:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  spec-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system embodies the tension between industrial precision and tactile luxury. Drawing aesthetic cues from high-end Scandinavian audio design and experimental translucent personal computing, the interface conveys absolute authority, hyper-clean craftsmanship, and effortless technological interaction. The tone is restrained yet electric—avoiding chaotic visual noise to prioritize product hero assets, tactile physical properties, and technical specifications.

The visual style blends **Modern Minimalism** with **Precision Glassmorphism**:
- Ultra-deep obsidian environments overlaid with multi-stop radial glows.
- Micro-surfaces engineered with translucent frosted backdrops, hair-thin internal specular highlights (0.5px to 1px ghost borders), and razor-sharp typographic scale.
- Interaction feedback communicates immediate physical responsiveness: delicate hover elevations, ambient luminescent halos, and restrained transition curves mimicking custom electronic damping.

## Colors

The palette revolves around deep optical voids accented by coherent photonic spectrums. The dark canvas prevents eye fatigue, elevates edge definition, and lets industrial product rendering dominate the viewport.

- **Primary Core (`#06B6D4` / Electric Cyan)**: Serves as the primary luminescent guide. Used strictly for focus states, high-priority interactions, interactive toggle highlights, and glowing badges.
- **Secondary Energy (`#3B82F6` / Hyper Blue)**: Pairs with the electric cyan to form technical gradients, active navigational pills, cart triggers, and core transactional purchase anchors.
- **Tertiary Utility**:
  - **Emerald Green (`#10B981`)**: Signals supply status, guaranteed delivery indicators, and authentic stock confirmations.
  - **Hyper Coral (`#F43F5E`)**: Reserved exclusively for finite inventory flashes, promotional discount callouts, and destructive cart operations.
- **Neutral Environment**:
  - `Base`: `#0B0E14` (Void slate)
  - `Surface 1`: `#131823` (Substrate layer)
  - `Surface 2`: `#1E2638` (Active elevated component layer)
  - `Border / Hairlines`: `rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.14)`
  - `Light Mode Overrides`: Pure white (`#FFFFFF`) to cool slate (`#F8FAFC`) with obsidian text accents (`#0B0E14`) when rendered in inverted viewports.

## Typography

Typography acts as an engineered blueprint:
- **Headlines (`Outfit`)**: Pure geometric balance with tight tracking creates a commanding luxury stance across promotional hero banners and product names.
- **Body (`Plus Jakarta Sans`)**: Provides supreme legibility, soft terminals, and effortless readability across technical feature descriptions and checkout steps.
- **Labels & Specs (`JetBrains Mono`)**: Strict, tabular, monospaced alignment for hardware dimensions, audio frequency curves, and latency metrics.
- **Pricing Notation**: The Indian Rupee symbol (`₹`) is rendered in matched optical weight alongside numerical integers, maintaining baseline parity and zero vertical shift.

## Layout & Spacing

The foundation utilizes a dynamic 12-column grid anchored at a max width of `1440px`.

- **Desktop (1024px+)**: 12 columns with 24px gutters and 48px boundary margins. Product comparison tables utilize dual or quad symmetrical column distribution.
- **Tablet (768px - 1023px)**: 8 columns with 20px gutters and 32px boundary margins. Sticky navigation elements collapse into bottom glass toolbars.
- **Mobile (< 768px)**: 4 columns with 16px gutters and 20px boundary margins. Product cards switch from strict grid cards into horizontally scrollable peek-rail streams with 80vw viewport snapping.

Vertical layout rhythm runs strictly on an 8pt baseline (`space-xs` = 4px, `space-sm` = 8px, `space-md` = 16px, `space-lg` = 24px, `space-xl` = 40px). Section blocks maintain large negative space buffers (80px to 120px) to simulate upscale boutique floor spacing.

## Elevation & Depth

Depth is established via optical luminance layers and physical glass properties rather than muddy drop shadows.

1. **Layer 0 (Canvas Base)**: Deep Slate `#0B0E14` with subtle localized radial lighting behind hero assets: `radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.08) 0%, transparent 70%)`.
2. **Layer 1 (Card/Container Surfaces)**: Semi-translucent `#131823` at 70% opacity, paired with `backdrop-filter: blur(16px)` and an interior 1px outline of `rgba(255, 255, 255, 0.07)`.
3. **Layer 2 (Floating Trays & Drawers)**: `#1E2638` at 85% opacity, `backdrop-filter: blur(24px)`, bounded by `1px solid rgba(255, 255, 255, 0.12)` with ambient colored bounce: `0 20px 40px -15px rgba(0, 0, 0, 0.6)`.
4. **Layer 3 (Modals & Overlays)**: Pitch black overlay at 80% opacity, `backdrop-filter: blur(32px)`. Modal windows cast an active cyan photon ring: `box-shadow: 0 0 0 1px rgba(6, 182, 212, 0.3), 0 25px 60px -12px rgba(6, 182, 212, 0.15)`.

## Shapes

The design system enforces balanced geometric continuity:
- **Base Rounding (0.5rem / 8px)**: Segmented controls, input fields, and hardware spec data chips.
- **Large Rounding (`rounded-lg`, 1rem / 16px)**: Product display cards, bottom-sheet trays, and comparison metric modules.
- **Extra Large Rounding (`rounded-xl`, 1.5rem / 24px)**: Primary purchase dialogue surfaces, cart flyout containers, and sticky floating island navbars.
- **Full Pill (`9999px`)**: Interactive CTA buttons, status indicator badges, tag filters, and floating cart badge counters.

## Components

### Buttons & Interactive CTAs
- **Primary Action (Buy / Pre-Order)**: Pill silhouette (`rounded-full`), linear background `linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)`, text white `#FFFFFF` font weight 600. On hover: scale(1.02), outer glow `0 0 24px rgba(6, 182, 212, 0.45)`. On active tap: scale(0.98).
- **Secondary (Add to Cart / Spec Sheet)**: Deep glass surface (`#1E2638`), subtle border `1px solid rgba(255, 255, 255, 0.12)`, text `#F8FAFC`. On hover: border-color `#06B6D4`, text `#06B6D4`.

### Glass Product Cards
- Contained within `rounded-lg` surfaces with an aspect-ratio-locked visual canvas for device renders.
- Upper right corner hosts an absolute-positioned floating wishlist icon button (frosted circle, 36px, toggles between translucent white stroke and glowing `#F43F5E` fill).
- Card base features inline pricing with the strike-through original MRP, real-time discount percentage tag, and quick-add slide-up trigger.

### Badges & Status Chips
- Height 24px, uppercase `label-caps` typography, internal padding `0 10px`, pill shape.
- **HOT DEAL**: Background `rgba(244, 63, 94, 0.12)`, text `#F43F5E`, border `1px solid rgba(244, 63, 94, 0.3)`.
- **IN STOCK / DISPATCH**: Background `rgba(16, 185, 129, 0.12)`, text `#10B981`, border `1px solid rgba(16, 185, 129, 0.3)`. Includes a 6px live pulsing green indicator dot.

### Sticky Island Header & Cart Flyout
- **Header**: Floating island suspended 16px below top margin, width calc(100% - 3rem), max-width 1200px. Frosted obsidian glass (`rgba(11, 14, 20, 0.75)`, blur 20px). Features brand monogram, quick category links, instant search input modal trigger, and interactive cart count pill badge.
- **Cart Drawer**: Slides from right edge (`420px` width on desktop, `100vw` on mobile), high-blur substrate (`#0B0E14` at 92%), listing product thumbnail, quantity micro-stepper (`- 1 +`), dynamic delivery countdown bar, and sticky checkout block with Indian Rupee breakdown.

### Form Inputs & Search Fields
- Minimalist inset boxes (`#131823`), height 48px, `rounded-md`, border `1px solid rgba(255, 255, 255, 0.08)`.
- Placeholder text in muted slate (`#64748B`). Active focus transition shifts border to `#06B6D4` with `0 0 0 3px rgba(6, 182, 212, 0.15)`. Monospace characters for discount code entries.