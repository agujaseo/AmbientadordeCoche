import type { Product } from './types';

export const AROMAS: Product[] = [
  {
    id: 1,
    name: 'Flor de Higo',
    description: 'Un aroma dulce y delicado que evoca la calidez del Mediterráneo. Fresco y sofisticado.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1620703759365-e3950f3b392d?q=80&w=500&h=500&auto=format&fit=crop',
    reviews: [
      { author: 'Elena V.', rating: 5, text: 'Huele de maravilla, es sutil pero se nota. Me encanta.' },
    ],
  },
  {
    id: 2,
    name: 'Aire',
    description: 'Una fragancia limpia y fresca como una brisa de montaña. Aporta una sensación de pureza y libertad.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1533130009943-5a72265d95e2?q=80&w=500&h=500&auto=format&fit=crop',
    reviews: [
        { author: 'Marcos P.', rating: 5, text: 'Es el olor a limpio por excelencia. Muy recomendable.' },
        { author: 'Laura G.', rating: 4, text: 'Me gusta mucho, es muy fresco.' },
    ],
  },
  {
    id: 3,
    name: 'Zen',
    description: 'Una mezcla relajante de notas verdes y amaderadas que invita a la calma y la meditación.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1544161515-cfd836b080e7?q=80&w=500&h=500&auto=format&fit=crop',
    reviews: [],
  },
  {
    id: 4,
    name: 'Té Verde',
    description: 'Aroma revitalizante y herbáceo con un toque cítrico. Perfecto para despejar la mente y energizar.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f2b7d813?q=80&w=500&h=500&auto=format&fit=crop',
    reviews: [
      { author: 'Carla S.', rating: 5, text: 'Increíblemente refrescante. Ideal para las mañanas.' },
    ],
  },
  {
    id: 5,
    name: 'Mango',
    description: 'Explosión tropical de dulzura y frescura. Un aroma jugoso y exótico que te transporta al Caribe.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1591073137213-46029094723a?q=80&w=500&h=500&auto=format&fit=crop',
    reviews: [],
  },
  {
    id: 6,
    name: 'Neutralizador',
    description: 'Elimina eficazmente los malos olores sin enmascararlos, dejando un ambiente neutro y limpio.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1607598041085-f55928a3f82e?q=80&w=500&h=500&auto=format&fit=crop',
    reviews: [
      { author: 'Javier F.', rating: 5, text: 'Funciona de verdad. Tenía olor a tabaco y lo ha quitado por completo.' },
    ],
  },
  {
    id: 7,
    name: 'Cereza',
    description: 'Intenso y dulce aroma a cerezas maduras. Una fragancia clásica que nunca falla.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1528820352014-b8a3e7f44a30?q=80&w=500&h=500&auto=format&fit=crop',
    reviews: [],
  },
  {
    id: 8,
    name: 'Marsella',
    description: 'El tradicional y reconfortante olor a jabón de Marsella. Limpio, puro y familiar.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1583286099388-3e4e2079f53e?q=80&w=500&h=500&auto=format&fit=crop',
    reviews: [],
  },
];