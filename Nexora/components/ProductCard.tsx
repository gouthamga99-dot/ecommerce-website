'use client';

import { useCart } from '@/context/CartContext';
import { showToast } from './Toast';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  badge: string;
  badgeType: string;
  delivery: string;
  deliveryType: string;
  colors: string[];
  specs: string;
  ram: string;
  storage: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, openCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      oldPrice: product.oldPrice,
      image: product.image,
      category: product.category,
      brand: product.brand,
      rating: product.rating,
      reviews: product.reviews,
      qty: 1,
      specs: product.specs
    });
    showToast('Added to Cart', product.name);
    openCart();
  };

  return (
    <div className="product-card">
      <div className="card-image-wrapper">
        <span className={`card-badge ${product.badgeType}`}>{product.badge}</span>
        <button className="wishlist-btn" aria-label="Add to Wishlist">
          <span className="material-symbols-outlined">favorite</span>
        </button>
        <img src={product.image} alt={product.name} onError={e => { (e.target as HTMLImageElement).src = '/assets/images/img_0.jpg'; }} />
        <div className="hover-specs">
          <p>{product.specs}</p>
        </div>
      </div>
      <div className="card-info">
        <div className="card-meta">
          <span className={`delivery-tag ${product.deliveryType}`}>
            {product.deliveryType === 'green' && <span className="live-dot" aria-hidden="true"></span>}
            {product.delivery}
          </span>
          <div className="rating">
            <span className="material-symbols-outlined fill">star</span>
            <span className="rating-value">{product.rating}</span>
            <span className="rating-count">({product.reviews})</span>
          </div>
        </div>
        <h3>{product.name}</h3>
        <div className="color-swatches">
          {product.colors.map((color, i) => (
            <span key={i} className={`swatch ${i === 0 ? 'active' : ''}`} style={{ background: color }}></span>
          ))}
        </div>
      </div>
      <div className="card-price">
        <div className="price-row">
          <span className="price">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="old-price">₹{product.oldPrice.toLocaleString('en-IN')}</span>
          <span className="save-tag">Save ₹{(product.oldPrice - product.price).toLocaleString('en-IN')}</span>
        </div>
        <p className="emi-text">No-Cost EMI from <strong>₹{Math.round(product.price / 12).toLocaleString('en-IN')}/mo</strong></p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          <span className="material-symbols-outlined">add_shopping_cart</span>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
