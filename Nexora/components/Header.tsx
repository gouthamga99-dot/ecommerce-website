'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const pathname = usePathname();
  const { cartCount, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="announcement-bar">
        <div className="container">
          <div className="promo-text">
            <span className="material-symbols-outlined bolt-icon">bolt</span>
            <strong>Republic Tech Fest Live:</strong>
            <span>Flat ₹5,000 Instant Discount on HDFC &amp; ICICI Cards | Free Express Delivery across India | No Cost EMI available</span>
          </div>
          <div className="quick-links">
            <a href="#">Track Order</a>
            <a href="#">Find a Store</a>
            <a href="#">24x7 Support</a>
            <span className="divider">|</span>
            <div className="location-selector">
              <span className="material-symbols-outlined">pin_drop</span>
              <span>Mumbai 400001</span>
            </div>
            <span className="currency-badge">INR (₹)</span>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container">
          <Link href="/" className="logo">
            <img src="/assets/images/img_0.jpg" alt="NEXORA Brand Logo" />
          </Link>
          <nav className="nav">
            <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
            <Link href="/products" className={pathname === '/products' ? 'active' : ''}>Smartphones</Link>
            <Link href="/product/1" className={pathname.startsWith('/product') ? 'active' : ''}>Laptops</Link>
          </nav>
          <div className="search-bar">
            <span className="material-symbols-outlined search-icon">search</span>
            <input type="text" placeholder="Search for phones, laptops..." />
          </div>
          <div className="header-actions">
            <button className="action-btn" aria-label="Account">
              <span className="material-symbols-outlined">person</span>
            </button>
            <button className="action-btn" aria-label="Wishlist">
              <span className="material-symbols-outlined">favorite</span>
            </button>
            <button className="action-btn cart-btn" aria-label="Cart" onClick={openCart}>
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="badge">{cartCount}</span>
            </button>
            <button className="hamburger" aria-label="Menu" onClick={() => setMobileOpen(!mobileOpen)}>
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)}></div>
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <img src="/assets/images/img_0.jpg" alt="NEXORA" style={{ height: 28 }} />
          <button className="close-btn" onClick={() => setMobileOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="menu-items">
          <Link href="/" className={pathname === '/' ? 'active' : ''} onClick={() => setMobileOpen(false)}>
            <span className="menu-icon material-symbols-outlined">home</span>Home
          </Link>
          <Link href="/products" className={pathname === '/products' ? 'active' : ''} onClick={() => setMobileOpen(false)}>
            <span className="menu-icon material-symbols-outlined">smartphone</span>Smartphones
          </Link>
          <Link href="/product/1" className={pathname.startsWith('/product') ? 'active' : ''} onClick={() => setMobileOpen(false)}>
            <span className="menu-icon material-symbols-outlined">laptop_mac</span>Laptops
          </Link>
        </div>
        <div className="menu-footer">
          <p>Deliver to: Mumbai 400001</p>
          <p>INR (₹)</p>
        </div>
      </div>
    </>
  );
}
