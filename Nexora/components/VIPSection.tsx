'use client';

import { useState } from 'react';

export default function VIPSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="vip-section">
          <div className="vip-content">
            <div className="vip-tag">
              <span className="material-symbols-outlined">card_membership</span>
              <span>Nexora VIP Priority Access</span>
            </div>
            <h2>Receive ₹1,500 Instant Welcome Credit</h2>
            <p className="vip-desc">
              Join 85,000+ engineers, creative directors, and hardware enthusiasts.
              Get private invite links for unreleased drops, zero-cost loan approvals, and member discounts.
            </p>
            <form className="vip-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your work or personal email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="vip-submit">Claim ₹1,500 Voucher</button>
            </form>
            {submitted && (
              <div className="vip-feedback show">
                <span className="material-symbols-outlined">check_circle</span>
                <span>Welcome! Voucher code <strong>NEXORAVIP1500</strong> sent to your inbox.</span>
              </div>
            )}
          </div>

          <div className="vip-card">
            <div className="card-header">
              <div className="card-brand">
                <span className="material-symbols-outlined">bolt</span>
                <span>NEXORA BLACK</span>
              </div>
              <span className="card-badge">PRIORITY PASS</span>
            </div>
            <div className="card-body">
              <div className="card-label">Cardholder</div>
              <div className="card-value">Tier-1 Member Privileges</div>
              <div className="card-row">
                <div>
                  <div className="card-label">Instant Credit</div>
                  <div className="card-value mono">₹1,500.00</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="card-label">Metro Dispatch</div>
                  <div className="card-value mono">Ultra 15-Min</div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <span>•••• 8829</span>
              <span>EXP 12/28</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
