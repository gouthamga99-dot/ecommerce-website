'use client';

import { useCart } from '@/context/CartContext';
import {
  buildWhatsAppOrderMessage,
  isWhatsAppConfigured,
  openWhatsApp,
} from '@/lib/whatsapp';
import { showToast } from './Toast';

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQty, subtotal, gst, shipping, total } = useCart();

  const handleCheckoutNow = () => {
    if (cart.length === 0) return;

    if (!isWhatsAppConfigured()) {
      showToast('Checkout Unavailable', 'WhatsApp number is not configured. Please contact support.');
      return;
    }

    const message = buildWhatsAppOrderMessage(
      cart.map(item => ({
        name: item.name,
        specs: item.specs,
        qty: item.qty,
        price: item.price,
      })),
      { subtotal, gst, shipping, total },
    );

    openWhatsApp(message);
    closeCart();
  };

  return (
    <>
      <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={closeCart}></div>
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <div className="cart-title">
            <span className="material-symbols-outlined">shopping_cart</span>
            <h2>Your Cart ({cart.length} items)</h2>
          </div>
          <button className="close-btn" onClick={closeCart}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="cart-shipping">
          <div className="shipping-row">
            <span className="free-shipping">
              <span className="material-symbols-outlined">verified</span> Free Express Shipping Unlocked!
            </span>
            <span className="threshold">₹1,999+</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${Math.min((subtotal / 1999) * 100, 100)}%` }}></div>
          </div>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <span className="material-symbols-outlined">shopping_cart</span>
              <h3>Your cart is empty</h3>
              <p>Add items to get started</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} onError={e => { (e.target as HTMLImageElement).src = '/assets/images/img_0.jpg'; }} />
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
                      <button className="remove-btn material-symbols-outlined" onClick={() => removeFromCart(item.id)}>delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="footer-row">
              <span className="label">Subtotal</span>
              <span className="value">₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="footer-row">
              <span className="label">GST (18%)</span>
              <span className="value">₹{gst.toLocaleString('en-IN')}</span>
            </div>
            <div className="footer-row total">
              <span className="label">Total</span>
              <span className="value">₹{total.toLocaleString('en-IN')}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckoutNow}>
              Checkout Now
            </button>
            <button className="view-cart-btn" onClick={() => { closeCart(); window.location.href = '/cart'; }}>
              View Full Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
