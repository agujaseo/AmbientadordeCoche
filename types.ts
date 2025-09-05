export interface Review {
  author: string;
  rating: number; // 1-5
  text: string;
}

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  reviews: Review[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}
