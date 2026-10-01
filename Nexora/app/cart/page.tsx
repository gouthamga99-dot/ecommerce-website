'use client';

import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Toast from '@/components/Toast';

export default function CartPage() {
  const { cart, removeFromCart, updateQty, subtotal, gst, total, clearCart } = useCart();

  return (
    <>
      <Header />
      <main className="section" style={{ paddingTop: '32px', minHeight: '60vh' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 700, marginBottom: '32px' }}>
            Your Shopping Cart
          </h1>

          {cart.length === 0 ? (
            <div className="empty-cart" style={{ textAlign: 'center', padding: '80px 20px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '80px', color: 'var(--outline-variant)' }}>
                shopping_cart
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 600, margin: '24px 0 8px' }}>
                Your cart is empty
              </h3>
              <p style={{ color: 'var(--on-surface-variant)', marginBottom: '32px' }}>
                Looks like you haven't added anything to your cart yet.
              </p>
              <a
                href="/products"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--primary)',
                  color: 'var(--on-primary)',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                }}
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Continue Shopping
              </a>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '32px', alignItems: 'start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {cart.map(item => (
                  <div
                    key={item.id}
                    className="cart-item"
                    style={{ border: '1px solid var(--outline-variant)' }}
                  >
                    <div className="item-image">
                      <img
                        src={item.image}
                        alt={item.name}
                        onError={e => { (e.target as HTMLImageElement).src = '/assets/images/img_0.jpg'; }}
                      />
                    </div>
                    <div className="item-details">
                      <div className="item-name">{item.name}</div>
                      <div className="item-variant">{item.specs || ''}</div>
                      <div className="item-price-row">
                        <span className="item-price">₹{(item.price * item.qty).toLocaleString('en-IN')}</span>
                        <div className="item-actions">
                          <button className="qty-btn" onClick={() => updateQty(item.id, -1)} aria-label="Decrease">
                            <span className="material-symbols-outlined">remove</span>
                          </button>
                          <span className="qty-value">{item.qty}</span>
                          <button className="qty-btn" onClick={() => updateQty(item.id, 1)} aria-label="Increase">
                            <span className="material-symbols-outlined">add</span>
                          </button>
                          <button
                            className="remove-btn material-symbols-outlined"
                            onClick={() => removeFromCart(item.id)}
                          >
                            delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  padding: '24px',
                  borderRadius: 'var(--radius-2xl)',
                  background: 'var(--surface-container)',
                  border: '1px solid var(--outline-variant)',
                  position: 'sticky',
                  top: '100px',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, marginBottom: '20px' }}>
                  Order Summary
                </h3>
                <div className="footer-row">
                  <span className="label">Subtotal</span>
                  <span className="value">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="footer-row">
                  <span className="label">GST (18%)</span>
                  <span className="value">₹{gst.toLocaleString('en-IN')}</span>
                </div>
                <div className="footer-row">
                  <span className="label">Shipping</span>
                  <span className="value" style={{ color: 'var(--tertiary)', fontWeight: 600 }}>FREE</span>
                </div>
                <div className="footer-row total">
                  <span className="label">Total</span>
                  <span className="value">₹{total.toLocaleString('en-IN')}</span>
                </div>
                <button className="checkout-btn" style={{ width: '100%', marginTop: '16px' }}>
                  Proceed to Checkout
                </button>
                <a
                  href="/products"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    marginTop: '12px',
                    color: 'var(--primary)',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
                  Continue Shopping
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <CartDrawer />
      <Toast />
    </>
  );
}
