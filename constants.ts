import type { Product } from './types';

export const AROMAS: Product[] = [
  {
    id: 1,
    name: 'Flor de Higo',
    description: 'Un aroma dulce y delicado que evoca la calidez del Mediterráneo. Fresco y sofisticado.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1627905646269-7f034d27132a?q=80&w=600&h=600&fm=webp&fit=crop',
    reviews: [
      { author: 'Elena V.', rating: 5, text: 'Huele de maravilla, es sutil pero se nota. Me encanta.' },
    ],
  },
  {
    id: 2,
    name: 'Aire',
    description: 'Una fragancia limpia y fresca como una brisa de montaña. Aporta una sensación de pureza y libertad.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1627905646013-1216515485f7?q=80&w=600&h=600&fm=webp&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1622649835339-53b018501096?q=80&w=600&h=600&fm=webp&fit=crop',
    reviews: [],
  },
  {
    id: 4,
    name: 'Té Verde',
    description: 'Aroma revitalizante y herbáceo con un toque cítrico. Perfecto para despejar la mente y energizar.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1626951235222-79313203f550?q=80&w=600&h=600&fm=webp&fit=crop',
    reviews: [
      { author: 'Carla S.', rating: 5, text: 'Increíblemente refrescante. Ideal para las mañanas.' },
    ],
  },
  {
    id: 5,
    name: 'Mango',
    description: 'Explosión tropical de dulzura y frescura. Un aroma jugoso y exótico que te transporta al Caribe.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1591035897819-275d4a4d6515?q=80&w=600&h=600&fm=webp&fit=crop',
    reviews: [],
  },
  {
    id: 6,
    name: 'Neutralizador',
    description: 'Elimina eficazmente los malos olores sin enmascararlos, dejando un ambiente neutro y limpio.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1588382322339-05b766a59b7b?q=80&w=600&h=600&fm=webp&fit=crop',
    reviews: [
      { author: 'Javier F.', rating: 5, text: 'Funciona de verdad. Tenía olor a tabaco y lo ha quitado por completo.' },
    ],
  },
  {
    id: 7,
    name: 'Cereza',
    description: 'Intenso y dulce aroma a cerezas maduras. Una fragancia clásica que nunca falla.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1528820357774-78156b62768a?q=80&w=600&h=600&fm=webp&fit=crop',
    reviews: [],
  },
  {
    id: 8,
    name: 'Marsella',
    description: 'El tradicional y reconfortante olor a jabón de Marsella. Limpio, puro y familiar.',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1607006475091-23612267b258?q=80&w=600&h=600&fm=webp&fit=crop',
    reviews: [],
  },
];