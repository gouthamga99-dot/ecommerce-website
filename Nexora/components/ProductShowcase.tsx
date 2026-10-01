import Link from 'next/link';

const showcaseProducts = [
  {
    badge: 'M4 Pro / Max',
    name: 'Nexora StealthBook Pro 16"',
    desc: 'Tandem 120Hz Liquid OLED, 128GB Unified Memory, aerospace CNC magnesium chassis.',
    image: '/assets/images/img_22.jpg',
    price: '₹2,49,900',
    oldPrice: '₹2,69,900',
    link: '/product/1'
  },
  {
    badge: '3nm Bionic Ultra',
    name: 'Nexora Phantom 16 Pro',
    desc: 'Triple 50MP Periscope Sensor with Leica Optic Calibration, Grade-5 Brushed Titanium Band.',
    image: '/assets/images/img_31.jpg',
    price: '₹1,34,900',
    oldPrice: '₹1,49,900',
    link: '/product/1'
  },
  {
    badge: 'Lossless 24-bit/192kHz',
    name: 'AcousticElite Pro ANC',
    desc: '45mm Custom Titanium-Dome transducers, 48dB Active Hybrid Noise Cancellation, Memory Gel Cushions.',
    image: '/assets/images/img_45.jpg',
    price: '₹34,990',
    oldPrice: '₹39,990',
    link: '#'
  },
  {
    badge: '100M Dive Certified',
    name: 'Apex Titan Chrono 49mm',
    desc: 'Dual-Frequency L1/L5 GPS, ECG & Body Impedance Sensor, Sapphire Crystal with 3,000 Nits AMOLED.',
    image: '/assets/images/img_11.jpg',
    price: '₹79,900',
    oldPrice: '₹89,900',
    link: '#'
  }
];

export default function ProductShowcase() {
  return (
    <section className="section" id="flagship-catalog">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-tag">
              <span className="material-symbols-outlined">apps</span>
              <span>Flagship Silicon Tier</span>
            </div>
            <h2>Four Milestones. Zero Compromise.</h2>
          </div>
          <p className="section-desc">
            Custom calibrated thermal architecture, surgical-grade alloys, and industry-leading visual clarity built for creators and engineers.
          </p>
        </div>
        <div className="product-showcase-grid">
          {showcaseProducts.map((p, i) => (
            <div key={i} className="product-showcase-card">
              <div className="card-content">
                <div className="card-badge">{p.badge}</div>
                <h3>{p.name}</h3>
                <p className="card-desc">{p.desc}</p>
                <div className="spec-chips">
                  <span>3.8 lbs Ultra-thin</span>
                  <span>22hr Battery</span>
                  <span>Thunderbolt 5</span>
                </div>
              </div>
              <div className="card-image">
                <img src={p.image} alt={p.name} onError={e => { (e.target as HTMLImageElement).src = '/assets/images/img_0.jpg'; }} />
                <div className="image-overlay"></div>
              </div>
              <div className="card-footer">
                <div>
                  <span className="price-label">Starting From</span>
                  <div className="price-row">
                    <span className="price">{p.price}</span>
                    <span className="old-price">{p.oldPrice}</span>
                  </div>
                </div>
                <Link href={p.link} className="preorder-btn">Pre-Order Now</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
