'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Toast from '@/components/Toast';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const brands = ['Apple', 'Samsung', 'Google Pixel', 'OnePlus', 'Xiaomi', 'Asus ROG'];
const ramOptions = ['8GB', '12GB', '16GB', '24GB'];
const storageOptions = ['128GB', '256GB', '512GB', '1TB'];

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [priceMax, setPriceMax] = useState(180000);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRAM, setSelectedRAM] = useState<string[]>([]);
  const [selectedStorage, setSelectedStorage] = useState<string[]>([]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedBrands.length > 0) {
      list = list.filter(p => selectedBrands.includes(p.brand));
    }
    list = list.filter(p => p.price <= priceMax);
    switch (sortBy) {
      case 'price-asc': list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'rating': list.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }
    return list;
  }, [sortBy, priceMax, selectedBrands, selectedRAM, selectedStorage]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
  };

  return (
    <>
      <Header />
      <main className="section" style={{ paddingTop: '24px' }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="separator">/</span>
            <a href="#">Electronics</a>
            <span className="separator">/</span>
            <span className="current">Smartphones</span>
            <span className="count-badge">{filtered.length} Flagships Available</span>
          </nav>

          <div className="category-header">
            <div>
              <div className="category-tag">
                <span className="pulse-dot"></span>
                NEXT-GEN SILICON &amp; PERISCOPE OPTICS
              </div>
              <h1>Flagship Smartphones &amp; Foldables</h1>
              <p className="category-desc">
                Experience blistering 3nm architectures, advanced periscope telephoto sensors,
                and all-day aerospace titanium endurance calibrated for perfectionists.
              </p>
            </div>
            <div className="assurance-badge">
              <span className="material-symbols-outlined">verified_user</span>
              <div>
                <p className="badge-title">1 Year Nexora Assured</p>
                <p className="badge-sub">Brand Warranty &amp; Zero-Fee EMI</p>
              </div>
            </div>
          </div>

          <div className="filter-pills">
            <button className="pill active">All Smartphones</button>
            <button className="pill">Flagships</button>
            <button className="pill">Foldables &amp; Flips</button>
            <button className="pill">Gaming Phones (165Hz+)</button>
            <button className="pill">Under ₹30,000</button>
            <button className="pill">5G Satellite Ready</button>
          </div>

          <div className="plp-layout">
            <aside className="filter-sidebar">
              <div className="filter-header">
                <div className="filter-title">
                  <span className="material-symbols-outlined">tune</span>
                  <h2>Filters</h2>
                </div>
                <button className="clear-btn" onClick={() => { setSelectedBrands([]); setPriceMax(180000); }}>
                  Clear All
                </button>
              </div>

              <div className="filter-group">
                <div className="filter-label">
                  <span>Price Budget (₹)</span>
                  <span className="range-readout">₹15k – ₹{(priceMax / 1000)}k</span>
                </div>
                <input
                  type="range"
                  min="15000"
                  max="180000"
                  step="5000"
                  value={priceMax}
                  onChange={e => setPriceMax(Number(e.target.value))}
                  className="range-slider"
                />
                <div className="range-values">
                  <div className="range-box">
                    <span className="range-label">MIN (₹)</span>
                    <span className="range-value">15,000</span>
                  </div>
                  <div className="range-box">
                    <span className="range-label">MAX (₹)</span>
                    <span className="range-value primary">{priceMax.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              <div className="filter-group">
                <div className="filter-label">
                  <span>Manufacturer</span>
                  <span className="filter-count">6 Brands</span>
                </div>
                <div className="checkbox-list">
                  {brands.map(brand => (
                    <label key={brand} className="checkbox-item">
                      <div className="checkbox-left">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                        />
                        <span className="checkbox-label">{brand}</span>
                      </div>
                      <span className="checkbox-count">
                        {products.filter(p => p.brand === brand).length}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <span className="filter-label">Memory (RAM)</span>
                <div className="chip-grid">
                  {ramOptions.map(ram => (
                    <button key={ram} className="chip">{ram}</button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <span className="filter-label">Storage Capacity</span>
                <div className="chip-grid">
                  {storageOptions.map(st => (
                    <button key={st} className="chip">{st}</button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <span className="filter-label">Purchase Benefits</span>
                <div className="checkbox-list">
                  <label className="checkbox-item">
                    <input type="checkbox" defaultChecked />
                    <span className="checkbox-label">
                      <span className="material-symbols-outlined" style={{fontSize:'14px',color:'var(--tertiary)'}}>payments</span>
                      No-Cost EMI Available
                    </span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" />
                    <span className="checkbox-label">
                      <span className="material-symbols-outlined" style={{fontSize:'14px',color:'var(--primary)'}}>swap_horiz</span>
                      Exchange Bonus (Up to ₹12k)
                    </span>
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" defaultChecked />
                    <span className="checkbox-label">
                      <span className="material-symbols-outlined" style={{fontSize:'14px',color:'var(--secondary)'}}>electric_bolt</span>
                      Express 24H Delivery
                    </span>
                  </label>
                </div>
              </div>

              <div className="filter-group">
                <span className="filter-label">Customer Ratings</span>
                <div className="checkbox-list">
                  <label className="checkbox-item">
                    <div className="checkbox-left">
                      <input type="radio" name="rating-filter" />
                      <span className="checkbox-label"><span style={{color:'var(--primary)'}}>★</span> 4.5 &amp; above</span>
                    </div>
                    <span className="checkbox-count">32</span>
                  </label>
                  <label className="checkbox-item">
                    <div className="checkbox-left">
                      <input type="radio" name="rating-filter" />
                      <span className="checkbox-label"><span style={{color:'var(--on-surface-variant)'}}>★</span> 4.0 &amp; above</span>
                    </div>
                    <span className="checkbox-count">45</span>
                  </label>
                </div>
              </div>
            </aside>

            <div className="plp-content">
              <div className="plp-toolbar">
                <div className="active-filters">
                  <span className="filter-label">Active:</span>
                  <span className="filter-chip">Brand: Apple <button className="remove-btn material-symbols-outlined">close</button></span>
                  <span className="filter-chip">Storage: 256GB+ <button className="remove-btn material-symbols-outlined">close</button></span>
                  <span className="filter-chip">₹50k - ₹1.5L <button className="remove-btn material-symbols-outlined">close</button></span>
                </div>
                <div className="toolbar-right">
                  <div className="sort-select">
                    <label>Sort:</label>
                    <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                      <option value="featured">Featured First</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="rating">Customer Rating</option>
                      <option value="newest">Newest Arrivals</option>
                    </select>
                  </div>
                  <div className="view-toggle">
                    <button className={`view-btn ${view === 'grid' ? 'active' : ''}`} title="Grid View" aria-label="Grid View" aria-pressed={view === 'grid'} onClick={() => setView('grid')}>
                      <span className="material-symbols-outlined">grid_view</span>
                    </button>
                    <button className={`view-btn ${view === 'list' ? 'active' : ''}`} title="List View" aria-label="List View" aria-pressed={view === 'list'} onClick={() => setView('list')}>
                      <span className="material-symbols-outlined">view_list</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className={`product-grid ${view === 'list' ? 'list-view' : ''}`}>
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
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
