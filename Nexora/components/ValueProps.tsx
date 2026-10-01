'use client';

import { useState } from 'react';
import { tradeInDevices } from '@/data/products';

export default function ValueProps() {
  const [selectedDevice, setSelectedDevice] = useState(tradeInDevices[0].value);

  return (
    <section className="section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
          <span className="section-tag" style={{ justifyContent: 'center' }}>
            <span className="material-symbols-outlined">verified</span>
            <span>The Nexora Standard</span>
          </span>
          <h2>Direct Origin. Flawless Migration.</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            We eliminated gray-market uncertainties, extended shipment delays, and painful device switches. Nexora is the gold standard for high-performance consumer technology.
          </p>
        </div>

        <div className="value-props-grid">
          <div className="value-prop-card">
            <div className="value-icon blue"><span className="material-symbols-outlined">verified</span></div>
            <h3>Direct-from-OEM Silicon</h3>
            <p className="value-desc">
              Official Tier-1 partner channels with Apple, Sony, Leica, NVIDIA, and Qualcomm.
              Every device is backed by untouched factory serials and genuine warranties.
            </p>
            <div className="value-footer">
              <div className="spec-chips">
                <span>Apple Authorised</span>
                <span>Sony Alpha Tech</span>
              </div>
            </div>
          </div>

          <div className="value-prop-card">
            <div className="value-icon sky"><span className="material-symbols-outlined">flight_takeoff</span></div>
            <h3>White-Glove Concierge</h3>
            <p className="value-desc">
              Trained field specialists personally deliver, unpack, and securely transfer your
              cryptographic keys, work profiles, and cloud data at your residence or studio.
            </p>
            <div className="value-footer">
              <span className="check-icon material-symbols-outlined">check_circle</span>
              <span>Zero-Downtime Guarantee</span>
            </div>
          </div>

          <div className="value-prop-card">
            <div className="value-icon emerald"><span className="material-symbols-outlined">sync_alt</span></div>
            <h3>Instant Trade-In Credit</h3>
            <p className="value-desc">
              Get an instant doorstep valuation for your older MacBook or smartphone with direct
              deductions applied before you pay.
            </p>
            <div className="trade-in-widget">
              <label>Simulate Trade-In Value</label>
              <select value={selectedDevice} onChange={e => setSelectedDevice(Number(e.target.value))}>
                {tradeInDevices.map(d => (
                  <option key={d.value} value={d.value}>{d.label}</option>
                ))}
              </select>
              <div className="trade-result">
                <span>Estimated Credit:</span>
                <span className="trade-value">₹{selectedDevice.toLocaleString('en-IN')}</span>
              </div>
            </div>
            <button className="btn-secondary" style={{ width: '100%' }}>
              <span>Calculate Full Estimate</span>
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="enterprise-bar">
          <div className="enterprise-left">
            <div className="enterprise-icon"><span className="material-symbols-outlined">headset_mic</span></div>
            <div>
              <h4>24x7 Priority Concierge &amp; Enterprise Procurement</h4>
              <p>Instant GST invoicing, volume device provisioning for studios, and rapid replacement turnaround.</p>
            </div>
          </div>
          <div className="enterprise-actions">
            <button className="btn-secondary">Enterprise Sales</button>
            <button className="btn-primary-small">
              <span className="material-symbols-outlined">chat</span> Live Chat (90s reply)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
