'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { SHIPPING_COST } from '@/lib/whatsapp';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  qty: number;
  specs?: string;
  color?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, delta: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  gst: number;
  shipping: number;
  total: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('nexora_cart');
      if (saved) setCart(JSON.parse(saved));
    } catch (e) {}
  }, []);

  useEffect(() => {
    localStorage.setItem('nexora_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + item.qty } : i);
      }
      return [...prev, item];
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCart(prev => prev.filter(i => i.id !== id));
  }, []);

  const updateQty = useCallback((id: number, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = i.qty + delta;
        return newQty > 0 ? { ...i, qty: newQty } : i;
      }
      return i;
    }).filter(i => i.qty > 0));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);
  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const gst = Math.round(subtotal * 0.18);
  const shipping = SHIPPING_COST;
  const total = subtotal + gst;

  return (
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, updateQty, clearCart,
      cartCount, subtotal, gst, shipping, total,
      isCartOpen, openCart, closeCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
