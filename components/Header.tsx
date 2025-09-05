import React from 'react';

const ShoppingCartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);


interface HeaderProps {
    onCartClick: () => void;
    cartCount: number;
}


const Header: React.FC<HeaderProps> = ({ onCartClick, cartCount }) => {
  const navItems = [
    { name: 'Aromas', href: '#aromas' },
    { name: 'Packs', href: '#packs' },
    { name: 'Personalización', href: '#personalizacion' },
    { name: 'Nosotros', href: '#nosotros' },
  ];

  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-wider">
          BLACK LABEL <span className="text-amber-400">SCENTS</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
            <a href="#packs" className="hidden lg:inline-block bg-amber-500 text-black font-bold py-2 px-4 rounded-md hover:bg-amber-400 transition-colors duration-300">
                Comprar Ahora
            </a>
             <button onClick={onCartClick} className="relative text-gray-300 hover:text-amber-400 transition-colors duration-300" aria-label="Abrir carrito">
                <ShoppingCartIcon />
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-black">
                        {cartCount}
                    </span>
                )}
            </button>
        </nav>
        <button onClick={onCartClick} className="md:hidden relative text-gray-300 hover:text-amber-400 transition-colors duration-300" aria-label="Abrir carrito">
            <ShoppingCartIcon />
            {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-black">
                    {cartCount}
                </span>
            )}
        </button>
      </div>
    </header>
  );
};

export default Header;