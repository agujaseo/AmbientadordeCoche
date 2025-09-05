export interface Review {
  author: string;
  rating: number;
  text: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  reviews: Review[];
}

export interface Pack {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  items: string[];
  image: string;
}

export interface CartItem {
  product: Product | Pack;
  quantity: number;
}
