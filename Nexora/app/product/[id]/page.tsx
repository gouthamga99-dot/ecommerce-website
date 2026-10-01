'use client';

import { useState, useMemo, use } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Toast, { showToast } from '@/components/Toast';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

const galleryImages = [
  '/assets/images/img_22.jpg',
  '/assets/images/img_30.jpg',
  '/assets/images/img_18.jpg',
  '/assets/images/img_41.jpg',
  '/assets/images/img_24.jpg',
  '/assets/images/img_42.jpg'
];

const colors = [
  { name: 'Space Black', hex: '#18191c' },
  { name: 'Natural Silver', hex: '#c9cbcf' },
  { name: 'Deep Midnight', hex: '#0d1527' }
];

const chips = [
  { name: 'M4 Pro', specs: '12-Core CPU • 18-Core GPU', price: '- ₹25,000' },
  { name: 'M4 Max', specs: '14-Core CPU • 32-Core GPU', price: 'Included' },
  { name: 'M4 Max Ultra', specs: '16-Core CPU • 40-Core GPU', price: '+ ₹45,000' }
];

const ramOptions = [
  { name: '18GB', price: '- ₹18,000' },
  { name: '36GB', price: 'Default' },
  { name: '64GB', price: '+ ₹36,000' },
  { name: '128GB', price: '+ ₹90,000' }
];

const storageOptions = [
  { name: '512GB', price: '- ₹15,000' },
  { name: '1TB SSD', price: 'Default' },
  { name: '2TB SSD', price: '+ ₹36,000' },
  { name: '4TB SSD', price: '+ ₹80,000' }
];

const specGroups = [
  {
    icon: 'memory',
    title: 'Silicon & Processing',
    items: [
      { label: 'Chipset', value: 'Nexora M4 Max' },
      { label: 'CPU Cores', value: '14 (10 Perf / 4 Efficiency)' },
      { label: 'GPU Cores', value: '32-Core with Hardware Raytracing' },
      { label: 'Neural Engine', value: '16-Core (38 TOPS)' },
      { label: 'Memory Bandwidth', value: '400 GB/s' }
    ]
  },
  {
    icon: 'tv',
    title: 'Display & Optics',
    items: [
      { label: 'Diagonal Size', value: '16.2" Liquid Retina XDR' },
      { label: 'Native Resolution', value: '3456 x 2234 (254 ppi)' },
      { label: 'Peak Brightness', value: '1,600 nits HDR (1,000 SDR)' },
      { label: 'Refresh Dynamics', value: 'ProMotion 10Hz - 120Hz' },
      { label: 'Color Gamut', value: '100% DCI-P3 • 1B Colors' }
    ]
  },
  {
    icon: 'battery_charging_full',
    title: 'Power & Energy',
    items: [
      { label: 'Cell Capacity', value: '100-Watt-Hour Li-Poly' },
      { label: 'Video Playback', value: 'Up to 22 Hours' },
      { label: 'Included Power Brick', value: '140W USB-C GaN Rapid' },
      { label: 'Fast Charge Rate', value: '50% in 30 mins' }
    ]
  },
  {
    icon: 'cable',
    title: 'I/O Ports & Expandability',
    items: [
      { label: 'Connector', value: 'Braided MagSafe 3 Included' },
      { label: 'Thunderbolt Ports', value: '3x Thunderbolt 4 (USB4)' },
      { label: 'Media Ingestion', value: 'SDXC card slot (UHS-II)' },
      { label: 'External Display', value: 'HDMI 2.1 (Up to 8K 60Hz)' }
    ]
  },
  {
    icon: 'graphic_eq',
    title: 'Acoustics & Optics',
    items: [
      { label: 'Audio Out', value: '3.5 mm High-Impedance' },
      { label: 'Speaker System', value: 'Six-speaker with force-cancelling' },
      { label: 'Spatial Audio', value: 'Dolby Atmos Certified' },
      { label: 'Microphones', value: 'Studio-grade three-mic array' },
      { label: 'Webcam', value: '1080p FaceTime HD with ISP' }
    ]
  },
  {
    icon: 'straighten',
    title: 'Dimensions & Build',
    items: [
      { label: 'Thickness', value: '1.68 cm (0.66 inch)' },
      { label: 'Weight', value: '2.14 kg (4.71 pounds)' },
      { label: 'Chassis Finish', value: '100% Recycled Aluminum' },
      { label: 'Security', value: 'Biometric Touch ID Sensor' }
    ]
  }
];

const reviews = [
  {
    name: 'Vikramaditya Kulkarni',
    location: 'Bengaluru',
    date: '3 days ago',
    rating: 5,
    text: 'Absolute beast of a workstation. I compile heavy Kubernetes codebases while simultaneously grading 4K 10-bit raw footage in DaVinci Resolve. The 36GB unified memory keeps zero memory pressure. Battery easily handles 16 hours of untethered coding.',
    tags: ['M4 Max / 36GB / 1TB', 'Space Black']
  },
  {
    name: 'Pooja Sengupta',
    location: 'Mumbai',
    date: '1 week ago',
    rating: 5,
    text: 'The Liquid Retina XDR screen is mind-blowing. Color grading in DCI-P3 is pixel-perfect without an external reference monitor. Nexora delivered to Bandra West in under 20 hours with proper GST billing for my studio!',
    tags: ['M4 Max / 36GB / 1TB', 'Space Black']
  }
];

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { addToCart, openCart } = useCart();
  const product = products.find(p => p.id === parseInt(id, 10)) || products[0];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedChip, setSelectedChip] = useState(1);
  const [selectedRam, setSelectedRam] = useState(1);
  const [selectedStorage, setSelectedStorage] = useState(1);
  const [carePlus, setCarePlus] = useState(false);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('specs');
  const [pincode, setPincode] = useState('400001');
  const [pincodeStatus, setPincodeStatus] = useState('');

  const unitPrice = useMemo(() => {
    let price = product.price;
    if (selectedChip === 0) price -= 25000;
    if (selectedChip === 2) price += 45000;
    if (selectedRam === 0) price -= 18000;
    if (selectedRam === 2) price += 36000;
    if (selectedRam === 3) price += 90000;
    if (selectedStorage === 0) price -= 15000;
    if (selectedStorage === 2) price += 36000;
    if (selectedStorage === 3) price += 80000;
    if (carePlus) price += 12999;
    return price;
  }, [product, selectedChip, selectedRam, selectedStorage, carePlus]);

  const total = unitPrice * qty;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: unitPrice,
      oldPrice: product.oldPrice,
      image: product.image,
      category: product.category,
      brand: product.brand,
      rating: product.rating,
      reviews: product.reviews,
      qty,
      specs: `${chips[selectedChip].name} • ${ramOptions[selectedRam].name} • ${storageOptions[selectedStorage].name} • ${colors[selectedColor].name}`
    });
    openCart();
  };

  const handleBuyNow = () => {
    handleAddToCart();
  };

  const handleAddBundle = () => {
    const add = (id: number, name: string, price: number, oldPrice: number, image: string, specs: string) =>
      addToCart({
        id, name, price, oldPrice, image,
        category: 'laptops',
        brand: 'Nexora',
        rating: 4.8,
        reviews: 940,
        qty: 1,
        specs
      });

    add(901, 'Nexora StealthBook Pro 16"', 219900, 239900, '/assets/images/img_22.jpg', 'M4 Max • 36GB • 1TB');
    add(902, 'Nexora MagDock 12-in-1', 8990, 9990, '/assets/images/img_10.jpg', 'Thunderbolt 4 • 140W PD');
    add(903, 'Nexora Artisan Leather Sleeve', 3490, 3990, '/assets/images/img_9.jpg', 'Full-Grain • Magnetic Latch');

    showToast('Bundle Added', '3 items added to cart with ₹3,000 bundle discount');
    openCart();
  };

  const handleCheckPincode = () => {
    if (pincode.length === 6 && !isNaN(Number(pincode))) {
      setPincodeStatus('success');
    } else {
      setPincodeStatus('error');
    }
  };

  return (
    <>
      <Header />
      <main className="section" style={{ paddingTop: '16px' }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="separator">/</span>
            <a href="/products">Laptops</a>
            <span className="separator">/</span>
            <a href="#">Creator &amp; Workstation</a>
            <span className="separator">/</span>
            <span className="current">Nexora StealthBook Pro 16"</span>
          </nav>

          <div className="pdp-layout">
            {/* Gallery */}
            <div className="pdp-gallery">
              <div className="pdp-main-image">
                <img src={galleryImages[selectedImage]} alt="Nexora StealthBook Pro 16" />
                <div className="badges-overlay">
                  <span className="badge stock"><span className="pulse-dot"></span> In Stock • Ships Tomorrow</span>
                  <span className="badge discount">Save ₹20,000 Today</span>
                  <span className="badge warranty"><span className="material-symbols-outlined" style={{fontSize:'12px'}}>verified_user</span> Official 2-Year Warranty</span>
                </div>
                <div className="action-overlay">
                  <button className="action-btn" aria-label="Add to Wishlist"><span className="material-symbols-outlined">favorite</span></button>
                  <button className="action-btn" aria-label="Zoom Image"><span className="material-symbols-outlined">zoom_in</span></button>
                </div>
                <button className="view-360-btn">
                  <span className="material-symbols-outlined">360</span>
                  360° Studio View
                </button>
              </div>
              <div className="pdp-thumbnails">
                {galleryImages.map((img, i) => (
                  <button key={i} className={`thumb-btn ${i === selectedImage ? 'active' : ''}`} onClick={() => setSelectedImage(i)}>
                    <img src={img} alt={`View ${i + 1}`} />
                    <span className="thumb-label">{['LID', 'OLED', 'PORTS-L', 'PORTS-R', 'DECK'][i]}</span>
                  </button>
                ))}
              </div>
              <div className="pdp-trust-badges">
                <div className="trust-item">
                  <span className="material-symbols-outlined" style={{color:'var(--primary)'}}>rocket_launch</span>
                  <div><span className="trust-label">Express Air</span><span className="trust-sub">Free 24hr Dispatch</span></div>
                </div>
                <div className="trust-item">
                  <span className="material-symbols-outlined" style={{color:'var(--tertiary)'}}>format_image_left</span>
                  <div><span className="trust-label">GST Invoice</span><span className="trust-sub">Save 18% Input Tax</span></div>
                </div>
                <div className="trust-item">
                  <span className="material-symbols-outlined" style={{color:'var(--secondary)'}}>swap_horiz</span>
                  <div><span className="trust-label">7 Days Policy</span><span className="trust-sub">Hassle-free Swap</span></div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="pdp-info">
              <div className="product-classification">
                <span className="class-tag">NEXORA PRO COMPUTING</span>
                <span className="sku">SKU: NXR-SB16-M4M</span>
              </div>
              <h1>Nexora StealthBook Pro 16" Workstation <span className="subtitle">(2025 Edition)</span></h1>
              <div className="rating-row">
                <div className="rating-box">
                  <span className="rating-value">4.9</span>
                  <div className="stars">
                    <span className="material-symbols-outlined fill">star</span><span className="material-symbols-outlined fill">star</span><span className="material-symbols-outlined fill">star</span><span className="material-symbols-outlined fill">star</span><span className="material-symbols-outlined fill">star_half</span>
                  </div>
                </div>
                <a href="#reviews">1,428 Verified Indian Buyers</a>
                <span className="separator">•</span>
                <a href="#">412 Answered Tech Questions</a>
              </div>

              <div className="pdp-price-box">
                <div className="price-row">
                  <span className="current-price">₹{unitPrice.toLocaleString('en-IN')}</span>
                  <span className="original-price">₹2,39,900</span>
                  <span className="discount-badge">Save ₹20,000 (8% OFF)</span>
                </div>
                <p className="tax-note">Inclusive of all applicable Indian taxes, customs, &amp; 18% GST input credit eligible.</p>
                <div className="bank-offer">
                  <span className="material-symbols-outlined">credit_card</span>
                  <div className="offer-content">
                    <div className="offer-title-row">
                      <span className="offer-title">Card Member Instant Privilege</span>
                      <span className="save-amount">SAVE ₹10,000</span>
                    </div>
                    <p className="offer-desc">Flat ₹10,000 Instant Discount on HDFC &amp; ICICI Bank Credit Cards. <span className="net-price">Net Effective: ₹{(unitPrice - 10000).toLocaleString('en-IN')}</span></p>
                  </div>
                </div>
                <div className="emi-row">
                  <div className="emi-info">
                    <span className="material-symbols-outlined" style={{color:'var(--secondary)',fontSize:'16px'}}>calendar_month</span>
                    <span>No Cost EMI available from <strong>₹18,325/mo</strong> (12 mos)</span>
                  </div>
                  <button className="view-plans">View Plans</button>
                </div>
              </div>

              <div className="configurator">
                <div className="config-section">
                  <div className="config-header">
                    <span className="config-label">1. Finish / Colorway</span>
                    <span className="config-value">{colors[selectedColor].name}{selectedColor === 0 ? ' (Anodized Anti-Fingerprint)' : ''}</span>
                  </div>
                  <div className="color-options">
                    {colors.map((c, i) => (
                      <button key={i} className={`color-option ${i === selectedColor ? 'active' : ''}`} onClick={() => setSelectedColor(i)}>
                        <span className="color-dot" style={{background:c.hex}}></span>
                        <span className="color-name">{c.name}</span>
                        {i === selectedColor && <span className="material-symbols-outlined check-icon">check</span>}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="config-section">
                  <div className="config-header">
                    <span className="config-label">2. System Silicon</span>
                    <span className="config-value">3nm 2nd Gen Architecture</span>
                  </div>
                  <div className="chip-options">
                    {chips.map((c, i) => (
                      <button key={i} className={`chip-option ${i === selectedChip ? 'active' : ''}`} onClick={() => setSelectedChip(i)}>
                        {i === selectedChip && <span className="material-symbols-outlined chip-check">check_circle</span>}
                        <div className="chip-name">{c.name}</div>
                        <div className="chip-specs">{c.specs}</div>
                        <div className={`chip-price ${i === selectedChip ? 'primary' : ''}`}>{c.price}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="config-section">
                  <div className="config-header">
                    <span className="config-label">3. Unified Memory (RAM)</span>
                    <span className="config-value">400 GB/s bandwidth</span>
                  </div>
                  <div className="storage-options">
                    {ramOptions.map((r, i) => (
                      <button key={i} className={`storage-option ${i === selectedRam ? 'active' : ''}`} onClick={() => setSelectedRam(i)}>
                        <div className={`storage-name ${i === selectedRam ? 'primary' : ''}`}>{r.name}</div>
                        <div className={`storage-price ${i === selectedRam ? 'primary' : ''}`}>{r.price}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="config-section">
                  <div className="config-header">
                    <span className="config-label">4. High-Throughput NVMe Storage</span>
                    <span className="config-value">Up to 7.4 GB/s read</span>
                  </div>
                  <div className="storage-options">
                    {storageOptions.map((s, i) => (
                      <button key={i} className={`storage-option ${i === selectedStorage ? 'active' : ''}`} onClick={() => setSelectedStorage(i)}>
                        <div className={`storage-name ${i === selectedStorage ? 'primary' : ''}`}>{s.name}</div>
                        <div className={`storage-price ${i === selectedStorage ? 'primary' : ''}`}>{s.price}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="careplus-box">
                <label className="careplus-label">
                  <input type="checkbox" checked={carePlus} onChange={e => setCarePlus(e.target.checked)} />
                  <div className="careplus-content">
                    <div className="careplus-title-row">
                      <span className="careplus-title"><span className="material-symbols-outlined" style={{fontSize:'16px',color:'var(--primary)'}}>verified</span> Nexora Care+ 2-Year Extended Protection</span>
                      <span className="careplus-price">+ ₹12,999</span>
                    </div>
                    <p className="careplus-desc">Unlimited accidental damage repair, liquid spill coverage, certified battery replacements, and VIP express doorstep pickup across all Tier-1/2 Indian cities.</p>
                  </div>
                </label>
              </div>

              <div className="pincode-box">
                <div className="pincode-header">
                  <span className="pincode-label">Estimated Delivery to</span>
                  <span className="pincode-service">Servicing 19,000+ Indian Pincodes</span>
                </div>
                <div className="pincode-input-row">
                  <div className="pincode-input-wrapper">
                    <span className="material-symbols-outlined">pin_drop</span>
                    <input type="text" placeholder="Enter 6-digit Pincode" maxLength={6} value={pincode} onChange={e => setPincode(e.target.value)} />
                  </div>
                  <button className="verify-btn" onClick={handleCheckPincode}>Verify</button>
                </div>
                {pincodeStatus === 'success' && (
                  <div className="pincode-status">
                    <span className="material-symbols-outlined" style={{fontSize:'16px'}}>check_circle</span>
                    <span>Express Delivery Available! Arrives <strong>Tomorrow by 2:00 PM</strong> to <strong>{pincode}</strong></span>
                  </div>
                )}
                {pincodeStatus === 'error' && (
                  <div className="pincode-status error">
                    <span className="material-symbols-outlined" style={{fontSize:'16px'}}>error</span>
                    <span>Please enter a valid 6-digit Indian Postal Pincode</span>
                  </div>
                )}
              </div>

              <div className="pdp-actions">
                <div className="qty-cart-row">
                  <div className="qty-stepper">
                    <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}><span className="material-symbols-outlined">remove</span></button>
                    <span className="qty-value">{qty}</span>
                    <button className="qty-btn" onClick={() => setQty(Math.min(10, qty + 1))}><span className="material-symbols-outlined">add</span></button>
                  </div>
                  <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    <span className="material-symbols-outlined">shopping_bag</span>
                    <span>Add to Cart • ₹{total.toLocaleString('en-IN')}</span>
                  </button>
                </div>
                <button className="buy-now-btn" onClick={handleBuyNow}>
                  <span className="material-symbols-outlined">bolt</span>
                  <span>Instant Buy with 1-Click UPI &amp; Cards</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="tabs-section">
            <div className="tabs-nav">
              <button className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`} onClick={() => setActiveTab('specs')}>Technical Specifications</button>
              <button className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`} onClick={() => setActiveTab('features')}>Key Features &amp; Engineering</button>
              <button className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>Customer Reviews &amp; Ratings <span className="tab-count">1,428</span></button>
              <button className={`tab-btn ${activeTab === 'warranty' ? 'active' : ''}`} onClick={() => setActiveTab('warranty')}>Warranty &amp; Nexora Care+</button>
            </div>

            {activeTab === 'specs' && (
              <div className="tab-content active">
                <div className="specs-grid">
                  {specGroups.map((spec, i) => (
                    <div key={i} className="spec-card">
                      <div className="spec-header"><span className="material-symbols-outlined">{spec.icon}</span><h4>{spec.title}</h4></div>
                      <ul className="spec-list">
                        {spec.items.map((item, j) => (
                          <li key={j} className="spec-item"><span className="spec-label">{item.label}</span><span className="spec-value">{item.value}</span></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="tab-content active">
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon blue"><span className="material-symbols-outlined">developer_board</span></div>
                    <h3>Second-Generation 3nm Architecture</h3>
                    <p>Featuring billions of microscopic transistors packed onto ultra-dense silicon, the Nexora M4 Max handles heavy 8K ProRes render pipelines and local LLM parameter inferences without thermal throttling.</p>
                    <div className="feature-metric">
                      <div className="metric-header"><span>Transistor Density Gain</span><span className="metric-value blue">+28%</span></div>
                      <div className="metric-bar"><div className="metric-fill blue" style={{width:'82%'}}></div></div>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon green"><span className="material-symbols-outlined">mode_fan</span></div>
                    <h3>Vapor Chamber Active Flow</h3>
                    <p>Dual contra-rotating fans spin over a copper-alloy vapor substrate, moving 50% more air at quieter acoustic signatures beneath 24dB—even under continuous sustained creative workloads.</p>
                    <div className="feature-metric">
                      <div className="metric-header"><span>Acoustic Damping</span><span className="metric-value green">21 dB Silent</span></div>
                      <div className="metric-bar"><div className="metric-fill green" style={{width:'94%'}}></div></div>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon sky"><span className="material-symbols-outlined">music_note</span></div>
                    <h3>Spatial Audio Matrix</h3>
                    <p>Two high-frequency tweeters and four dual-opposing force-cancelling woofers generate half an octave deeper sub-bass with zero chassis vibration for cinematic studio mastering.</p>
                    <div className="feature-metric">
                      <div className="metric-header"><span>Sub-Bass Range</span><span className="metric-value sky">48 Hz Floor</span></div>
                      <div className="metric-bar"><div className="metric-fill sky" style={{width:'88%'}}></div></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="tab-content active">
                <div className="reviews-overview">
                  <div className="rating-summary">
                    <span className="big-rating">4.9</span>
                    <div className="stars">
                      <span className="material-symbols-outlined fill">star</span><span className="material-symbols-outlined fill">star</span><span className="material-symbols-outlined fill">star</span><span className="material-symbols-outlined fill">star</span><span className="material-symbols-outlined fill">star_half</span>
                    </div>
                    <p className="recommendation">98% Recommendation Rate</p>
                    <p className="total-reviews">Based on 1,428 verified buyers</p>
                  </div>
                  <div className="rating-bars">
                    <div className="rating-bar-row"><span className="bar-label">5 Star</span><div className="bar-track"><div className="bar-fill green" style={{width:'91%'}}></div></div><span className="bar-percent">91%</span></div>
                    <div className="rating-bar-row"><span className="bar-label">4 Star</span><div className="bar-track"><div className="bar-fill green" style={{width:'7%'}}></div></div><span className="bar-percent">7%</span></div>
                    <div className="rating-bar-row"><span className="bar-label">3 Star</span><div className="bar-track"><div className="bar-fill gray" style={{width:'1.5%'}}></div></div><span className="bar-percent">1.5%</span></div>
                    <div className="rating-bar-row"><span className="bar-label">2 Star</span><div className="bar-track"><div className="bar-fill gray" style={{width:'0.3%'}}></div></div><span className="bar-percent">&lt;1%</span></div>
                    <div className="rating-bar-row"><span className="bar-label">1 Star</span><div className="bar-track"><div className="bar-fill gray" style={{width:'0.2%'}}></div></div><span className="bar-percent">&lt;1%</span></div>
                  </div>
                </div>
                <div className="review-filters">
                  <span className="filter-label">Filter By:</span>
                  <button className="filter-chip active">All (1,428)</button>
                  <button className="filter-chip">Battery life (641)</button>
                  <button className="filter-chip">Display quality (512)</button>
                  <button className="filter-chip">Video Editing &amp; M4 (384)</button>
                  <button className="filter-chip">With Customer Images (129)</button>
                </div>
                <div className="reviews-grid">
                  {reviews.map((review, i) => (
                    <div key={i} className="review-card">
                      <div className="review-header">
                        <div className="reviewer">
                          <div className="reviewer-avatar blue">{review.name.split(' ').map(n => n[0]).join('')}</div>
                          <div><h5>{review.name}</h5><p className="reviewer-meta"><span className="material-symbols-outlined" style={{fontSize:'12px'}}>verified</span> Verified Buyer • {review.location}</p></div>
                        </div>
                        <span className="review-date">{review.date}</span>
                      </div>
                      <div className="review-stars"><span className="material-symbols-outlined fill">star</span><span className="material-symbols-outlined fill">star</span><span className="material-symbols-outlined fill">star</span><span className="material-symbols-outlined fill">star</span><span className="material-symbols-outlined fill">star</span></div>
                      <p className="review-text">"{review.text}"</p>
                      <div className="review-tags">{review.tags.map((tag, j) => <span key={j} className="tag">{tag}</span>)}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'warranty' && (
              <div className="tab-content active">
                <div className="warranty-grid">
                  <div className="warranty-card">
                    <h4><span className="material-symbols-outlined blue">verified_user</span> Standard 2-Year Limited Manufacturer Warranty</h4>
                    <p className="warranty-desc">Every Nexora StealthBook Pro comes packaged with an unconditional 24-month hardware warranty covering manufacturing defects, motherboard components, display panel anomalies, and mechanical failures.</p>
                    <ul className="warranty-list">
                      <li><span className="material-symbols-outlined">check</span> Free genuine part replacements</li>
                      <li><span className="material-symbols-outlined">check</span> Pan-India authorized service centers</li>
                      <li><span className="material-symbols-outlined">check</span> Dedicated priority online diagnostics</li>
                    </ul>
                  </div>
                  <div className="warranty-card">
                    <h4><span className="material-symbols-outlined green">shield</span> Nexora Care+ Extended Accidental Shield</h4>
                    <p className="warranty-desc">Elevate your investment to enterprise-grade serenity. Covers liquid spills, drop damage, transit impact, and battery retention guarantee above 80% for up to 36 months.</p>
                    <ul className="warranty-list">
                      <li><span className="material-symbols-outlined">check</span> Zero deductible on accidental drops</li>
                      <li><span className="material-symbols-outlined">check</span> Free loaner device during workshop repairs</li>
                      <li><span className="material-symbols-outlined">check</span> Rapid doorstep repair concierge across 30+ hubs</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bundle Builder */}
          <div className="bundle-section">
            <div className="bundle-header">
              <div>
                <span className="bundle-tag">Frequently Paired Workstation Bundle</span>
                <h3>Equip Your Studio Rig</h3>
              </div>
              <div className="bundle-save">
                <span className="material-symbols-outlined">savings</span>
                <span>Save ₹3,000 when purchased as a bundle</span>
              </div>
            </div>
            <div className="bundle-items">
              <div className="bundle-item">
                <span className="this-item-tag">THIS ITEM</span>
                <div className="bundle-item-image"><img src="/assets/images/img_22.jpg" alt="StealthBook Pro 16" onError={e => { (e.target as HTMLImageElement).src = '/assets/images/img_0.jpg'; }} /></div>
                <h5>StealthBook Pro 16&quot;</h5>
                <p className="bundle-item-specs">M4 Max • 36GB • 1TB</p>
                <div className="bundle-item-price">₹2,19,900</div>
              </div>
              <div className="bundle-item">
                <div className="bundle-item-image"><img src="/assets/images/img_10.jpg" alt="Nexora MagDock 12-in-1" onError={e => { (e.target as HTMLImageElement).src = '/assets/images/img_0.jpg'; }} /></div>
                <h5>Nexora MagDock 12-in-1</h5>
                <p className="bundle-item-specs">Thunderbolt 4 • 140W PD</p>
                <div className="bundle-item-price">₹8,990</div>
              </div>
              <div className="bundle-item">
                <div className="bundle-item-image"><img src="/assets/images/img_9.jpg" alt="Nexora Artisan Leather Sleeve" onError={e => { (e.target as HTMLImageElement).src = '/assets/images/img_0.jpg'; }} /></div>
                <h5>Nexora Artisan Leather Sleeve</h5>
                <p className="bundle-item-specs">Full-Grain • Magnetic Latch</p>
                <div className="bundle-item-price">₹3,490</div>
              </div>
            </div>
            <div className="bundle-summary">
              <span className="summary-label">Bundle Price Summary</span>
              <div className="summary-price-row"><span className="summary-price">₹2,29,380</span><span className="summary-old-price">₹2,32,380</span></div>
              <p className="summary-note">Includes instant ₹3,000 trio discount + Free insured courier shipment.</p>
              <button className="add-bundle-btn" onClick={handleAddBundle}><span className="material-symbols-outlined">library_add</span> Add All 3 Items to Cart</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
      <Toast />
    </>
  );
}
