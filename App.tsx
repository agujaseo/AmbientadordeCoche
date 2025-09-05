
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Packs from './components/Packs';
import Customization from './components/Customization';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import CartSidebar from './components/CartSidebar';
import type { CartItem, Product } from './types';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (productToAdd: Product, quantity: number) => {
    setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.product.id === productToAdd.id);
        if (existingItem) {
            return prevItems.map(item =>
                item.product.id === productToAdd.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            );
        } else {
            return [...prevItems, { product: productToAdd, quantity }];
        }
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  const handleUpdateCartQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-black font-sans leading-normal tracking-normal">
      <AnnouncementBar />
      <Header onCartClick={() => setIsCartOpen(true)} cartCount={cartCount} />
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemove={handleRemoveFromCart}
      />
      <main>
        <Hero />
        <Products onAddToCart={handleAddToCart} />
        <Packs />
        <Customization />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;