import { Product } from './types';

export const AROMAS: Product[] = [
  { 
    id: 1, 
    name: 'Flor de Higo', 
    imageUrl: 'https://picsum.photos/seed/higo/500/500',
    reviews: [
      { author: 'Elena V.', rating: 5, text: 'Un aroma increíblemente fresco y duradero. Me encanta.' },
      { author: 'Marcos R.', rating: 4, text: 'Muy bueno, aunque un poco sutil para mi gusto.' },
    ]
  },
  { 
    id: 2, 
    name: 'Aire Fresco', 
    imageUrl: 'https://picsum.photos/seed/aire/500/500',
    reviews: [
      { author: 'Juan P.', rating: 5, text: 'Huele a limpio, perfecto para el día a día. Refrescante y nada pesado.' },
      { author: 'Carla G.', rating: 4, text: 'Un clásico que nunca falla. Buena duración.' },
    ]
  },
  { 
    id: 3, 
    name: 'Zen', 
    imageUrl: 'https://picsum.photos/seed/zen/500/500',
    reviews: [
      { author: 'Sofía L.', rating: 5, text: 'Es mi favorito. Relajante y muy agradable, ideal para después de un día de trabajo.' },
    ]
  },
  { 
    id: 4, 
    name: 'Té Verde', 
    imageUrl: 'https://picsum.photos/seed/teverde/500/500',
    reviews: [
      { author: 'David M.', rating: 5, text: 'Aroma muy natural y sofisticado. No cansa en absoluto.' },
      { author: 'Laura S.', rating: 4, text: 'Me gusta mucho, es muy fresco.' },
    ]
  },
  { 
    id: 5, 
    name: 'Mango Dulce', 
    imageUrl: 'https://picsum.photos/seed/mango/500/500',
    reviews: [
      { author: 'Andrea B.', rating: 5, text: '¡Espectacular! Huele a verano, es dulce sin ser empalagoso.' },
      { author: 'Javier F.', rating: 5, text: 'Si te gustan los olores frutales, este es el tuyo. Dura muchísimo.' },
    ]
  },
  { 
    id: 6, 
    name: 'Neutralizador', 
    imageUrl: 'https://picsum.photos/seed/neutral/500/500',
    reviews: [
      { author: 'Roberto C.', rating: 5, text: 'Cumple su función a la perfección. Elimina olores de tabaco y mascotas.' },
    ]
  },
  { 
    id: 7, 
    name: 'Cereza Intensa', 
    imageUrl: 'https://picsum.photos/seed/cereza/500/500',
    reviews: [
      { author: 'Paula N.', rating: 5, text: 'Potente y muy rico. Con un par de pulverizaciones es suficiente.' },
    ]
  },
  { 
    id: 8, 
    name: 'Jabón de Marsella', 
    imageUrl: 'https://picsum.photos/seed/marsella/500/500',
    reviews: [
        { author: 'Miguel A.', rating: 5, text: 'El olor a limpio por excelencia. Me recuerda a la ropa recién lavada.' },
        { author: 'Isabel T.', rating: 4, text: 'Un aroma muy agradable y duradero.' },
    ]
  },
];

export const BASE_PRICE = 7;
export const PAYMENT_URL = 'https://buy.stripe.com/placeholder_test';