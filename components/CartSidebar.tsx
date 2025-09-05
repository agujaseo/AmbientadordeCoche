
import React from 'react';
import type { CartItem } from '../types';
import { BASE_PRICE, PAYMENT_URL } from '../constants';

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);


interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemove: (productId: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const subtotal = items.reduce((total, item) => total + item.quantity * BASE_PRICE, 0);
  const shippingCost = subtotal >= 40 || subtotal === 0 ? 0 : 5; // Ejemplo de coste de envío
  const total = subtotal + shippingCost;
  
  const handleBuyClick = () => {
    window.open(PAYMENT_URL, '_blank');
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-60 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-gray-900 text-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-heading"
      >
        <div className="flex flex-col h-full">
          <header className="flex items-center justify-between p-6 border-b border-gray-700">
            <h2 id="cart-heading" className="text-xl font-bold">Tu Carrito</h2>
            <button onClick={onClose} className="hover:text-amber-400" aria-label="Cerrar carrito">
              &times;
            </button>
          </header>

          {items.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                <p className="text-gray-400">Tu carrito está vacío.</p>
                <button onClick={onClose} className="mt-4 bg-amber-500 text-black font-bold py-2 px-6 rounded-md hover:bg-amber-400 transition-colors">
                    Seguir comprando
                </button>
            </div>
          ) : (
            <>
              <div className="flex-grow overflow-y-auto p-6 space-y-4">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex items-start gap-4">
                    <img src={product.imageUrl} alt={product.name} className="w-20 h-20 object-cover rounded-md" />
                    <div className="flex-grow">
                      <p className="font-semibold">{product.name}</p>
                      <p className="text-sm text-gray-400">{BASE_PRICE}€</p>
                      <div className="flex items-center mt-2 border border-gray-700 rounded-md w-fit">
                        <button onClick={() => onUpdateQuantity(product.id, quantity - 1)} className="px-2 py-1 hover:bg-gray-700 rounded-l-md">-</button>
                        <span className="px-3 text-sm">{quantity}</span>
                        <button onClick={() => onUpdateQuantity(product.id, quantity + 1)} className="px-2 py-1 hover:bg-gray-700 rounded-r-md">+</button>
                      </div>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-amber-400">{quantity * BASE_PRICE}€</p>
                        <button onClick={() => onRemove(product.id)} className="text-gray-500 hover:text-red-400 mt-2" aria-label={`Eliminar ${product.name}`}>
                           <TrashIcon />
                        </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <footer className="p-6 border-t border-gray-700 space-y-3">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>{subtotal.toFixed(2)}€</span>
                </div>
                 <div className="flex justify-between text-gray-300">
                  <span>Envío</span>
                  <span>{shippingCost > 0 ? `${shippingCost.toFixed(2)}€` : 'Gratis'}</span>
                </div>
                <div className="flex justify-between text-white font-bold text-lg">
                  <span>Total</span>
                  <span>{total.toFixed(2)}€</span>
                </div>
                {subtotal > 0 && subtotal < 40 && (
                    <p className="text-xs text-center text-amber-400 bg-amber-900/50 p-2 rounded-md">
                        Añade {(40 - subtotal).toFixed(2)}€ más para envío GRATIS.
                    </p>
                )}
                <button onClick={handleBuyClick} className="w-full bg-amber-500 text-black font-bold py-3 rounded-md hover:bg-amber-400 transition-colors duration-300">
                  Proceder al Pago
                </button>
              </footer>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
