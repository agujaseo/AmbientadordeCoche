import React, { useState } from 'react';

interface HeaderProps {
  onCartClick: () => void;
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, cartItemCount }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#aromas', label: 'Aromas' },
        { href: '#packs', label: 'Packs' },
        { href: '#personalizacion', label: 'Personalización' },
        { href: '#about', label: 'Nosotros' },
        { href: '#contact', label: 'Contacto' },
    ];

    return (
        <header className="bg-black/80 backdrop-blur-md sticky top-0 z-40 transition-all duration-300">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-white tracking-wider">
                    Black<span className="text-amber-500">Label</span> Scents
                </a>
                
                <nav className="hidden md:flex space-x-6">
                    {navLinks.map(link => (
                         <a key={link.href} href={link.href} className="text-gray-300 hover:text-amber-400 transition-colors font-medium">
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center space-x-4">
                    <button onClick={onCartClick} className="relative text-gray-300 hover:text-amber-400 transition-colors" aria-label="Abrir carrito">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {cartItemCount > 0 && (
                             <span className="absolute -top-2 -right-2 bg-amber-500 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                {cartItemCount}
                            </span>
                        )}
                    </button>
                    
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300 hover:text-amber-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black`}>
                <nav className="flex flex-col items-center space-y-4 py-4">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-amber-400 transition-colors font-medium">
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
