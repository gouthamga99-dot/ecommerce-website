'use client';

import { useState, useEffect } from 'react';
import { showToast } from './Toast';

export default function FestivalOffer() {
  const [timeLeft, setTimeLeft] = useState({ h: '09', m: '42', s: '18' });
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem('nexora_fest_pass') === '1') setClaimed(true);
    } catch (e) { /* storage unavailable */ }
  }, []);

  const handleClaim = () => {
    setClaimed(true);
    try { localStorage.setItem('nexora_fest_pass', '1'); } catch (e) { /* storage unavailable */ }
    showToast('VIP Launch Pass Claimed', '\u20b910,000 discount auto-applied at checkout');
  };

  useEffect(() => {
    let total = 9 * 3600 + 42 * 60 + 18;
    const interval = setInterval(() => {
      if (total > 0) {
        total--;
        const h = Math.floor(total / 3600);
        const m = Math.floor((total % 3600) / 60);
        const s = total % 60;
        setTimeLeft({
          h: String(h).padStart(2, '0'),
          m: String(m).padStart(2, '0'),
          s: String(s).padStart(2, '0')
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="festival-offer">
          <div className="offer-glow"></div>
          <div className="offer-content">
            <div className="offer-badge">
              <span className="material-symbols-outlined">local_fire_department</span>
              <span>Republic Tech Fest Exclusive</span>
            </div>
            <h2>Instant ₹10,000 Bank Cashback + Free Buds Pro</h2>
            <p className="offer-desc">
              Valid on all purchases above ₹1,00,000 with HDFC Bank and ICICI Bank Credit Cards.
              Orders placed before midnight receive complimentary Nexora Sonic Buds Pro (valued at ₹14,990)
              automatically added to your cart.
            </p>
            <div className="countdown">
              <div className="countdown-box">
                <span className="countdown-value" id="ticker-hours">{timeLeft.h}</span>
                <span className="countdown-label">Hours</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-box">
                <span className="countdown-value" id="ticker-mins">{timeLeft.m}</span>
                <span className="countdown-label">Mins</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-box">
                <span className="countdown-value" id="ticker-secs">{timeLeft.s}</span>
                <span className="countdown-label">Secs</span>
              </div>
              <div className="countdown-info">
                <span className="claimed">Limited to 500 units</span>
                <span className="total">384 Claimed across India</span>
              </div>
            </div>
            <div className="offer-actions">
              <button
                className={`claim-btn ${claimed ? 'claimed' : ''}`}
                onClick={handleClaim}
              >
                <span className="material-symbols-outlined">{claimed ? 'verified' : 'confirmation_number'}</span>
                <span>{claimed ? 'Pass Applied (₹10,000 Off)' : 'Claim VIP Launch Pass'}</span>
              </button>
              <span className="auto-apply">Auto-applied at checkout</span>
            </div>
          </div>
          <div className="bundle-widget">
            <div className="bundle-header">
              <span className="bundle-label">Complimentary Bundle</span>
              <span className="free-badge">FREE (₹14,990)</span>
            </div>
            <div className="bundle-image">
              <img src="/assets/images/img_20.jpg" alt="Sonic Buds Pro" onError={e => { (e.target as HTMLImageElement).src = '/assets/images/img_0.jpg'; }} />
              <span className="bundle-tag">Sonic Buds Pro</span>
            </div>
            <div className="bundle-details">
              <div className="detail-row">
                <span>Festive Coupon</span>
                <span className="value">REPUBLIC10K</span>
              </div>
              <div className="detail-row">
                <span>Free Express Air Delivery</span>
                <span className="included">Included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
