import React from 'react';
import type { CartItem, Pack } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number | string, newQuantity: number) => void;
  onRemoveItem: (productId: number | string) => void;
  onCheckout: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  
  const shippingCost = subtotal >= 40 || subtotal === 0 ? 0 : 4.99;
  const total = subtotal + shippingCost;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-gray-900 text-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-heading"
      >
        <div className="flex flex-col h-full">
          <header className="flex justify-between items-center p-6 border-b border-gray-700">
            <h2 id="cart-heading" className="text-xl font-bold">Tu Carrito</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Cerrar carrito"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>
          
          <div className="flex-grow p-6 overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-gray-400">Tu carrito está vacío.</p>
                <button
                    onClick={onClose}
                    className="mt-4 bg-amber-500 text-black font-bold py-2 px-4 rounded-md hover:bg-amber-400 transition-colors"
                >
                    Seguir comprando
                </button>
              </div>
            ) : (
              <ul className="space-y-4">
                {cartItems.map(item => {
                  const isPack = typeof item.product.id === 'string' && item.product.id.startsWith('pack-');
                  return (
                    <li key={item.product.id} className="flex items-start space-x-4 p-4 bg-gray-800 rounded-md">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="flex-grow">
                        <h3 className="font-semibold">{item.product.name}</h3>
                        {isPack && <p className="text-xs text-gray-400 mt-1">{(item.product as Pack).description}</p>}
                        <p className="text-amber-400 font-bold mt-1">{(item.product.price * item.quantity).toFixed(2)}€</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <button onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))} className="bg-gray-700 h-6 w-6 rounded-md text-white hover:bg-gray-600 transition-colors" disabled={isPack}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)} className="bg-gray-700 h-6 w-6 rounded-md text-white hover:bg-gray-600 transition-colors" disabled={isPack}>+</button>
                        </div>
                      </div>
                      <button onClick={() => onRemoveItem(item.product.id)} className="text-gray-500 hover:text-red-400 transition-colors" aria-label={`Eliminar ${item.product.name}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
          
          {cartItems.length > 0 && (
            <footer className="p-6 border-t border-gray-700 space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{subtotal.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between">
                <span>Envío</span>
                <span>{shippingCost === 0 ? 'GRATIS' : `${shippingCost.toFixed(2)}€`}</span>
              </div>
               {subtotal > 0 && subtotal < 40 && (
                <p className="text-xs text-amber-500 text-center">
                    Añade {(40 - subtotal).toFixed(2)}€ más para envío GRATIS.
                </p>
              )}
              <div className="flex justify-between font-bold text-lg border-t border-gray-700 pt-4">
                <span>Total</span>
                <span>{total.toFixed(2)}€</span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full bg-amber-500 text-black font-bold py-3 rounded-md text-lg hover:bg-amber-400 transition-colors duration-300"
              >
                Finalizar Compra
              </button>
            </footer>
          )}
        </div>
      </aside>
    </>
  );
};

export default CartSidebar;