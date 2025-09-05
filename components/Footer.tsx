import React from 'react';

const Footer: React.FC = () => {
    const aromas = [
        { name: 'Flor de Higo' }, { name: 'Aire' }, { name: 'Zen' }, { name: 'Té Verde' },
        { name: 'Mango' }, { name: 'Neutralizador' }, { name: 'Cereza' }, { name: 'Marsella' }
    ];
    
    const socialLinks = [
        { name: 'Instagram', href: '#', icon: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg> },
        { name: 'Facebook', href: '#', icon: <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg> },
    ];

    return (
        <footer className="bg-gray-950 border-t border-gray-800">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center sm:text-left">
                    {/* Column 1: Brand */}
                    <div className="lg:col-span-1 sm:col-span-2 md:col-span-3 lg:col-auto space-y-4">
                        <h3 className="text-2xl font-bold text-white tracking-wider">
                            Black<span className="text-amber-500">Label</span> Scents
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Ofrecemos ambientadores premium para vehículos que transforman cada trayecto en una experiencia sensorial inolvidable.
                        </p>
                    </div>

                    {/* Column 2: Aromas */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Aromas</h4>
                        <ul className="space-y-2">
                            {aromas.map(aroma => (
                                <li key={aroma.name}><a href="#aromas" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">{aroma.name}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Navegación */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Navegación</h4>
                        <ul className="space-y-2">
                            <li><a href="#packs" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Packs Ahorro</a></li>
                            <li><a href="#personalizacion" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Personalización</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Sobre Nosotros</a></li>
                        </ul>
                    </div>
                    
                    {/* Column 4: Soporte */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Soporte</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Política de Envíos</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Política de Devoluciones</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Formulario de Contacto</a></li>
                        </ul>
                    </div>

                    {/* Column 5: Contacto & Pago */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contacto y Pago</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center justify-center sm:justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-amber-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                                <a href="mailto:info@blacklabel.com" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">info@blacklabel.com</a>
                            </li>
                            <li className="flex items-center justify-center sm:justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-amber-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                                <a href="tel:+34600000000" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">+34 600 000 000</a>
                            </li>
                        </ul>
                         <div className="pt-2 space-y-2">
                             <a href="#" className="text-amber-500 hover:text-amber-400 font-semibold transition-colors block text-sm">Pagar con Bizum</a>
                             <a href="#" className="text-amber-500 hover:text-amber-400 font-semibold transition-colors block text-sm">Comprar con Stripe</a>
                         </div>
                         <div className="flex justify-center sm:justify-start space-x-4 pt-4">
                            {socialLinks.map(link => (
                                <a key={link.name} href={link.href} className="text-gray-500 hover:text-amber-400 transition-colors" aria-label={link.name}>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} BlackLabel Scents. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;