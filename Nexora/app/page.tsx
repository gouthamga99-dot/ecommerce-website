'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import Toast from '@/components/Toast';
import HeroSection from '@/components/HeroSection';
import CategoryGrid from '@/components/CategoryGrid';
import ProductShowcase from '@/components/ProductShowcase';
import FestivalOffer from '@/components/FestivalOffer';
import ValueProps from '@/components/ValueProps';
import Testimonials from '@/components/Testimonials';
import VIPSection from '@/components/VIPSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategoryGrid />
        <ProductShowcase />
        <FestivalOffer />
        <ValueProps />
        <Testimonials />
        <VIPSection />
      </main>
      <Footer />
      <CartDrawer />
      <Toast />
    </>
  );
}
