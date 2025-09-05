import React from 'react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmPurchase: () => void;
  totalAmount: number;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, onConfirmPurchase, totalAmount }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      <div className="bg-gray-900 rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale">
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 id="checkout-modal-title" className="text-xl font-bold text-white">Finalizar Compra</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Cerrar modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-8 text-center">
          <p className="text-gray-300 mb-2">Total a pagar:</p>
          <p className="text-5xl font-extrabold text-amber-400 mb-8">{totalAmount.toFixed(2)}€</p>

          <p className="text-gray-400 text-sm mb-6">Selecciona tu método de pago preferido. Serás redirigido a una plataforma segura para completar la transacción.</p>

          <div className="space-y-4">
            <button
              onClick={onConfirmPurchase}
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-md text-lg hover:bg-blue-500 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <span>Pagar con Stripe</span>
            </button>
            <button
              onClick={onConfirmPurchase}
              className="w-full bg-cyan-500 text-white font-bold py-3 rounded-md text-lg hover:bg-cyan-400 transition-colors duration-300 flex items-center justify-center space-x-2"
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