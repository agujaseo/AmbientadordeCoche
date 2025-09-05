import React, { useState } from 'react';
import type { Product, Pack, CartItem } from './types';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Packs from './components/Packs';
import Customization from './components/Customization';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import CheckoutModal from './components/CheckoutModal';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const handleToggleCart = () => {
    setIsCartOpen(prev => !prev);
  };
  
  const handleOpenCheckoutModal = () => {
    setIsCheckoutModalOpen(true);
  };
  
  const handleCloseCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
  };
  
  const handleConfirmPurchase = () => {
    alert('¡Gracias por tu compra! En un sitio real, serías redirigido a la pasarela de pago.');
    setCartItems([]);
    setIsCheckoutModalOpen(false);
    setIsCartOpen(false);
  };

  const handleAddToCart = (item: Product | Pack, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.product.id === item.id);
      if (existingItem) {
        if (typeof item.id === 'string' && item.id.startsWith('pack-')) {
           return prevItems.map(i =>
            i.product.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        }
        return prevItems.map(i =>
          i.product.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prevItems, { product: item, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: number | string, newQuantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      ).filter(item => item.quantity > 0)
    );
  };
  
  const handleRemoveItem = (productId: number | string) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };
  
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shippingCost = subtotal >= 40 || subtotal === 0 ? 0 : 4.99;
  const total = subtotal + shippingCost;


  return (
    <div className="bg-black text-white font-sans">
      <AnnouncementBar />
      <Header onCartClick={handleToggleCart} cartItemCount={totalQuantity} />
      <main>
        <Hero />
        <Products onAddToCart={handleAddToCart} />
        <Packs onAddToCart={handleAddToCart} />
        <WhyChooseUs />
        <Customization />
        <About />
        <Contact />
      </main>
      <Footer />
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={handleToggleCart}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleOpenCheckoutModal}
      />
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={handleCloseCheckoutModal}
        onConfirmPurchase={handleConfirmPurchase}
        totalAmount={total}
      />
    </div>
  );
};

export default App;