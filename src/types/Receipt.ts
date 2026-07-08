import { Product } from "./Product";

export interface Receipt {
  id: number;
  userId: number;
  date: string;
  products: Product[];
  total: number;
}