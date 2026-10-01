import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/assets/images/img_0.jpg" alt="NEXORA" style={{ height: 32, marginBottom: 16 }} />
            <p>Premium consumer electronics and computing hardware storefront. Engineered for the extraordinary.</p>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <Link href="/products">Smartphones</Link>
            <Link href="/product/1">Laptops</Link>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">Track Order</a>
            <a href="#">Find a Store</a>
            <a href="#">24x7 Support</a>
            <a href="#">Warranty</a>
            <a href="#">Returns</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About NEXORA</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 NEXORA. All rights reserved. | Privacy Policy | Terms of Service</p>
          <div className="payment-icons">
            <span>UPI</span><span>Visa</span><span>Mastercard</span><span>RuPay</span><span>HDFC</span><span>ICICI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
