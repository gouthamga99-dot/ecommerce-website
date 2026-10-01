'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="ambient-glow"></div>
      <div className="container">
        <div className="status-badge">
          <span className="pulse-dot"></span>
          <span className="badge-text">Republic Tech Drop 2025 Live</span>
          <span className="badge-separator">•</span>
          <span className="badge-spec">Tier-1 Silicon Authorized</span>
        </div>
        <h1>Engineered for the <span className="gradient-text">Extraordinary.</span></h1>
        <p className="hero-subtitle">
          Experience next-generation silicon, unibody titanium craftsmanship, and zero-compromise
          consumer electronics delivered nationwide in hours.
        </p>
        <div className="cta-group">
          <Link href="/products" className="cta-primary">
            <span>Explore the Ecosystem</span>
            <span className="material-symbols-outlined arrow-icon">arrow_forward</span>
          </Link>
        </div>
        <div className="hero-visual">
          <img src="/assets/images/img_48.jpg" alt="Nexora flagship devices" />
          <div className="visual-overlay"></div>
          <div className="spec-panel">
            <div className="spec-left">
              <span className="spec-dot"></span>
              <div>
                <span className="spec-label">Hardware Benchmark</span>
                <p className="spec-value">M4-MAX • 4.5GHz • 16-Core Neural Engine</p>
              </div>
            </div>
            <div className="spec-right">
              <div className="spec-item">
                <span className="spec-label">Thermal Index</span>
                <p className="spec-value primary">0dB Silent Dual Vapour-Chamber</p>
              </div>
              <div className="spec-item">
                <span className="spec-label">Display Luminance</span>
                <p className="spec-value secondary">2,400 Nits Peak HDR</p>
              </div>
            </div>
            <Link href="/products" className="spec-link">
              <span>Live Specs</span>
              <span className="material-symbols-outlined">open_in_new</span>
            </Link>
          </div>
        </div>
        <div className="trust-metrics">
          <div className="metric">
            <div className="metric-header">
              <span className="material-symbols-outlined">credit_card</span>
              <span className="metric-title">₹0 Down</span>
            </div>
            <p>No-Cost EMI up to 24 Months on all leading Indian banks</p>
          </div>
          <div className="metric">
            <div className="metric-header">
              <span className="material-symbols-outlined">rocket_launch</span>
              <span className="metric-title">15-Min</span>
            </div>
            <p>Hyper-fast Metro Dispatch in Mumbai, Delhi NCR, &amp; BLR</p>
          </div>
          <div className="metric">
            <div className="metric-header">
              <span className="material-symbols-outlined">verified_user</span>
              <span className="metric-title">2-Year Official</span>
            </div>
            <p>Complete OEM Warranty + 1 Year Complimentary Accidental Protection</p>
          </div>
          <div className="metric">
            <div className="metric-header">
              <span className="material-symbols-outlined">workspace_premium</span>
              <span className="metric-title">100% Genuine</span>
            </div>
            <p>Sealed Serial Authentication backed by Brand Origin Verification</p>
          </div>
        </div>
      </div>
    </section>
  );
}
