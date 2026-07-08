export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
  amount: number; // cantidad en el carrito
}