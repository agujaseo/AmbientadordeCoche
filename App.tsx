import React, { useState } from 'react';
import type { Product, Pack, CartItem, GuestDetails, LegalPage } from './types';
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

// --- LEGAL CONTENT COMPONENTS ---

const LegalNotice: React.FC = () => (
    <div className="space-y-4 text-sm text-gray-300">
        <p><strong>AVISO LEGAL Y CONDICIONES GENERALES DE USO</strong></p>
        <p><strong>I. INFORMACIÓN GENERAL</strong></p>
        <p>En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web:</p>
        <p>La titularidad de este sitio web, [www.blacklabelscents.es] (en adelante, Sitio Web) la ostenta: [Nombre de la empresa/autónomo], con NIF: [NIF/CIF], y cuyos datos de contacto son:</p>
        <p>Dirección: [Dirección completa]</p>
        <p>Teléfono de contacto: 622255862</p>
        <p>Email de contacto: info@ambientadordecoche.es</p>
        <p><strong>II. TÉRMINOS Y CONDICIONES GENERALES DE USO</strong></p>
        <p>El objeto de las condiciones: El Sitio Web</p>
        <p>El objeto de las presentes Condiciones Generales de Uso (en adelante, Condiciones) es regular el acceso y la utilización del Sitio Web. A los efectos de las presentes Condiciones se entenderá como Sitio Web: la apariencia externa de los interfaces de pantalla, tanto de forma estática como de forma dinámica, es decir, el árbol de navegación; y todos los elementos integrados tanto en los interfaces de pantalla como en el árbol de navegación (en adelante, Contenidos) y todos aquellos servicios o recursos en línea que en su caso ofrezca a los Usuarios (en adelante, Servicios).</p>
        <p>BlackLabel Scents se reserva la facultad de modificar, en cualquier momento, y sin aviso previo, la presentación y configuración del Sitio Web y de los Contenidos y Servicios que en él pudieran estar incorporados. El Usuario reconoce y acepta que en cualquier momento BlackLabel Scents pueda interrumpir, desactivar y/o cancelar cualquiera de estos elementos que se integran en el Sitio Web o el acceso a los mismos.</p>
        <p><strong>III. EL USUARIO</strong></p>
        <p>El acceso, la navegación y uso del Sitio Web, confiere la condición de Usuario, por lo que se aceptan, desde que se inicia la navegación por el Sitio Web, todas las Condiciones aquí establecidas, así como sus ulteriores modificaciones, sin perjuicio de la aplicación de la correspondiente normativa legal de obligado cumplimiento según el caso. Dada la relevancia de lo anterior, se recomienda al Usuario leerlas en cada visita al Sitio Web.</p>
        <p><strong>IV. PROPIEDAD INTELECTUAL E INDUSTRIAL</strong></p>
        <p>BlackLabel Scents por sí o como parte cesionaria, es titular de todos los derechos de propiedad intelectual e industrial del Sitio Web, así como de los elementos contenidos en el mismo (a título enunciativo y no exhaustivo, imágenes, sonido, audio, vídeo, software o textos, marcas o logotipos, etc.).</p>
        <p><strong>V. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</strong></p>
        <p>La relación entre el Usuario y BlackLabel Scents se regirá por la normativa vigente y de aplicación en el territorio español. De surgir cualquier controversia en relación con la interpretación y/o a la aplicación de estas Condiciones las partes someterán sus conflictos a la jurisdicción ordinaria sometiéndose a los jueces y tribunales que correspondan conforme a derecho.</p>
    </div>
);

const PrivacyPolicy: React.FC = () => (
    <div className="space-y-4 text-sm text-gray-300">
        <p><strong>POLÍTICA DE PRIVACIDAD</strong></p>
        <p><strong>1. ¿Quién es el responsable del tratamiento de sus datos?</strong></p>
        <p>El responsable del tratamiento de los datos personales recogidos en [www.blacklabelscents.es] es: [Nombre de la empresa/autónomo], con NIF: [NIF/CIF], y domicilio en [Dirección completa]. Email: info@ambientadordecoche.es.</p>
        <p><strong>2. ¿Con qué finalidad trataremos sus datos personales?</strong></p>
        <p>En BlackLabel Scents trataremos la información que nos facilita con el fin de gestionar la relación contractual que nos une, gestionar el envío de la información que nos solicita, facilitar a los interesados ofertas de nuestros servicios y/o productos de su interés y/o gestionar su candidatura.</p>
        <p>Concretamente, para la compra como invitado, sus datos (nombre, email, dirección) se utilizarán exclusivamente para procesar y enviar su pedido, así como para la facturación del mismo.</p>
        <p><strong>3. ¿Por cuánto tiempo conservaremos sus datos?</strong></p>
        <p>Sus datos se conservarán mientras se mantenga la relación comercial o durante el tiempo necesario para cumplir con las obligaciones legales.</p>
        <p><strong>4. ¿Cuál es la legitimación para el tratamiento de sus datos?</strong></p>
        <p>La base legal para el tratamiento de sus datos es la ejecución de un contrato (la compraventa de productos) y el consentimiento del interesado.</p>
        <p><strong>5. ¿A qué destinatarios se comunicarán sus datos?</strong></p>
        <p>Sus datos personales podrán ser cedidos a empresas de transporte para la entrega de los pedidos y a la administración pública con competencia en la materia, únicamente cuando así lo establezca la legislación vigente.</p>
        <p><strong>6. ¿Cuáles son sus derechos cuando nos facilita sus datos?</strong></p>
        <p>Cualquier persona tiene derecho a obtener confirmación sobre si en BlackLabel Scents estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos. Puede ejercer sus derechos contactando a través del email: info@ambientadordecoche.es.</p>
    </div>
);

const CookiesPolicy: React.FC = () => (
    <div className="space-y-4 text-sm text-gray-300">
        <p><strong>POLÍTICA DE COOKIES</strong></p>
        <p><strong>¿Qué son las cookies?</strong></p>
        <p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.</p>
        <p><strong>¿Qué tipos de cookies utiliza esta página web?</strong></p>
        <p>Este sitio web utiliza los siguientes tipos de cookies:</p>
        <ul>
            <li><strong>Cookies técnicas:</strong> Son aquéllas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de videos o sonido o compartir contenidos a través de redes sociales.</li>
            <li><strong>Cookies de análisis:</strong> Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos.</li>
        </ul>
        <p>Actualmente, nuestro sitio web utiliza principalmente cookies técnicas esenciales para su funcionamiento. No utilizamos cookies de marketing o seguimiento invasivas.</p>
        <p><strong>¿Cómo puedo desactivar o eliminar las cookies?</strong></p>
        <p>Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.</p>
    </div>
);

const TermsAndConditions: React.FC = () => (
    <div className="space-y-4 text-sm text-gray-300">
        <p><strong>TÉRMINOS Y CONDICIONES DE VENTA</strong></p>
        <p><strong>1. Objeto</strong></p>
        <p>Las presentes condiciones generales de contratación tienen por objeto regular la relación comercial que surja entre [Nombre de la empresa/autónomo] (en adelante, BlackLabel Scents) y el cliente (en adelante, el Usuario) por las compras realizadas a través del sitio web [www.blacklabelscents.es].</p>
        <p><strong>2. Productos y Precios</strong></p>
        <p>Los productos ofertados son los que se detallan en el sitio web. Los precios de los productos se muestran en EUROS (€) e incluyen el Impuesto sobre el Valor Añadido (IVA) del 21% vigente en España.</p>
        <p><strong>3. Proceso de Compra</strong></p>
        <p>El Usuario podrá realizar la compra como invitado, sin necesidad de crear una cuenta. Deberá añadir los productos deseados al carrito de la compra, y posteriormente rellenar un formulario con sus datos de contacto y dirección de envío para finalizar el pedido.</p>
        <p><strong>4. Métodos de Pago</strong></p>
        <p>Los métodos de pago aceptados se mostrarán en el proceso de checkout. Actualmente, el proceso es una simulación y no se realizarán cargos reales.</p>
        <p><strong>5. Envíos</strong></p>
        <p>Realizamos envíos a España Peninsular.</p>
        <p>El coste del envío es de <strong>5,99€ (IVA incluido)</strong>, correspondiente a 4,95€ + 21% de IVA.</p>
        <p>Los gastos de envío serán <strong>gratuitos para pedidos cuyo importe total sea igual o superior a 40,00€</strong>.</p>
        <p>Para envíos a Islas Baleares, Islas Canarias, Ceuta, Melilla o cualquier otro destino internacional, el Usuario deberá contactar previamente a través del email info@ambientadordecoche.es para solicitar un presupuesto personalizado de los gastos de envío.</p>
        <p><strong>6. Política de Devoluciones y Derecho de Desistimiento</strong></p>
        <p>El Usuario dispone de un plazo de 14 días naturales desde la recepción del producto para ejercer su derecho de desistimiento, sin necesidad de justificación. Para ello, deberá comunicárnoslo a través de nuestro email de contacto. Los costes de devolución correrán a cargo del Usuario. El producto deberá ser devuelto en perfectas condiciones y en su embalaje original.</p>
        <p><strong>7. Atención al Cliente</strong></p>
        <p>Para cualquier duda, sugerencia, reclamación o consulta sobre la tienda online, puede dirigirse al Servicio de Atención al Cliente, por cualquiera de los siguientes medios: Email: info@ambientadordecoche.es o Teléfono: 622255862.</p>
        <p><strong>8. Legislación Aplicable</strong></p>
        <p>Las presentes condiciones se regirán por la legislación española.</p>
    </div>
);


// --- LEGAL MODAL COMPONENT ---

interface LegalModalProps {
  page: LegalPage | null;
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ page, onClose }) => {
  if (!page) return null;

  const pages: Record<LegalPage, { title: string; content: React.ReactNode }> = {
    notice: { title: 'Aviso Legal', content: <LegalNotice /> },
    privacy: { title: 'Política de Privacidad', content: <PrivacyPolicy /> },
    cookies: { title: 'Política de Cookies', content: <CookiesPolicy /> },
    terms: { title: 'Términos y Condiciones', content: <TermsAndConditions /> },
  };

  const { title, content } = pages[page];

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-gray-900 rounded-lg shadow-xl w-full max-w-3xl transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Cerrar modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
            {content}
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


const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [activeLegalPage, setActiveLegalPage] = useState<LegalPage | null>(null);

  const handleToggleCart = () => {
    setIsCartOpen(prev => !prev);
  };
  
  const handleOpenCheckoutModal = () => {
    setIsCheckoutModalOpen(true);
  };
  
  const handleCloseCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
  };

  const handleOpenLegalModal = (page: LegalPage) => {
    setActiveLegalPage(page);
  };

  const handleCloseLegalModal = () => {
    setActiveLegalPage(null);
  };
  
  const handleConfirmPurchase = (details: GuestDetails) => {
    alert(`¡Gracias por tu compra, ${details.name}!\n\nTu pedido será enviado a: ${details.address}.\n\nSe ha enviado una confirmación a ${details.email}.\n\n(En un sitio real, serías redirigido a la pasarela de pago.)`);
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
  const shippingCost = subtotal >= 40 || subtotal === 0 ? 0 : 5.99;
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
      <Footer onLegalLinkClick={handleOpenLegalModal} />
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
      <LegalModal page={activeLegalPage} onClose={handleCloseLegalModal} />
    </div>
  );
};

export default App;
