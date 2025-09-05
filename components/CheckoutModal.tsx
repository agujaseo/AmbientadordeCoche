import React, { useState } from 'react';
import type { GuestDetails } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmPurchase: (details: GuestDetails) => void;
  totalAmount: number;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, onConfirmPurchase, totalAmount }) => {
  const [guestDetails, setGuestDetails] = useState<GuestDetails>({
    name: '',
    email: '',
    address: '',
  });
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setGuestDetails(prev => ({ ...prev, [name]: value }));
  };

  const validateAndConfirm = () => {
    if (!guestDetails.name.trim() || !guestDetails.email.trim() || !guestDetails.address.trim()) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(guestDetails.email)) {
      setError('Por favor, introduce un email válido.');
      return;
    }
    setError('');
    onConfirmPurchase(guestDetails);
  };

  const isFormIncomplete = !guestDetails.name.trim() || !guestDetails.email.trim() || !guestDetails.address.trim();

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <div className="bg-gray-900 rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale">
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 id="checkout-modal-title" className="text-xl font-bold text-white">Checkout como Invitado</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Cerrar modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <p className="text-gray-300 text-center">Total a pagar: <span className="text-2xl font-bold text-amber-400">{totalAmount.toFixed(2)}€</span></p>
          
          <form className="space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nombre completo</label>
              <input type="text" name="name" id="name" value={guestDetails.name} onChange={handleInputChange} className="w-full bg-gray-800 border-gray-700 rounded-md p-2 text-white focus:ring-amber-500 focus:border-amber-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input type="email" name="email" id="email" value={guestDetails.email} onChange={handleInputChange} className="w-full bg-gray-800 border-gray-700 rounded-md p-2 text-white focus:ring-amber-500 focus:border-amber-500" required />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">Dirección de envío</label>
              <textarea name="address" id="address" rows={3} value={guestDetails.address} onChange={handleInputChange} className="w-full bg-gray-800 border-gray-700 rounded-md p-2 text-white focus:ring-amber-500 focus:border-amber-500" required />
            </div>
          </form>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <div className="space-y-3 pt-4">
            <button
              onClick={validateAndConfirm}
              disabled={isFormIncomplete}
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-md text-lg transition-colors duration-300 flex items-center justify-center space-x-2 disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-blue-500"
            >
              <span>Pagar con Stripe</span>
            </button>
            <button
              onClick={validateAndConfirm}
              disabled={isFormIncomplete}
              className="w-full bg-cyan-500 text-white font-bold py-3 rounded-md text-lg transition-colors duration-300 flex items-center justify-center space-x-2 disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-cyan-400"
            >
              <span>Pagar con Bizum</span>
            </button>
          </div>
        </div>
        
        <div className="p-4 bg-gray-800/50 text-center text-xs text-gray-500 rounded-b-lg">
          Esto es una simulación. No se realizará ningún cargo.
        </div>
      </div>
       <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale {
          animation: fadeInScale 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CheckoutModal;