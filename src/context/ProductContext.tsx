import React, { createContext, useState, ReactNode } from "react";
import { Product } from "../types/Product";

export interface ProductContextState {
  allProducts: Product[];
  products: Product[]; // productos en el carrito
  cartNumber: number;
  search: string;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (id: number) => void;
  updateProductAmount: (id: number, amount: number) => void;
  itemSearch: (term: string) => void;
  cartTotal: () => number;
  clearCart: () => void;
}

export const Context = createContext<ProductContextState>(
  {} as ProductContextState
);

interface Props {
  children: ReactNode;
}

const initialCatalog: Product[] = [
  {
    id: 1,
    name: "Camiseta Oversize",
    description: "Camiseta de algodón 100%, corte oversize.",
    category: "Ropa",
    image: "https://via.placeholder.com/300",
    price: 25,
    amount: 1,
  },
  {
    id: 2,
    name: "Gorra Classic",
    description: "Gorra ajustable unitalla.",
    category: "Accesorios",
    image: "https://via.placeholder.com/300",
    price: 15,
    amount: 1,
  },
  {
    id: 3,
    name: "Zapatillas Urban",
    description: "Zapatillas urbanas cómodas y resistentes.",
    category: "Calzado",
    image: "https://via.placeholder.com/300",
    price: 60,
    amount: 1,
  },
];

const ProductProvider = ({ children }: Props) => {
  const [allProducts] = useState<Product[]>(initialCatalog);
  const [products, setProducts] = useState<Product[]>([]);
  const [cartNumber, setCartNumber] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  const addProductToCart = (product: Product) => {
    setProducts((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      let updated: Product[];
      if (exists) {
        updated = prev.map((p) =>
          p.id === product.id ? { ...p, amount: p.amount + product.amount } : p
        );
      } else {
        updated = [...prev, product];
      }
      setCartNumber(updated.reduce((acc, p) => acc + p.amount, 0));
      return updated;
    });
  };

  const removeProductFromCart = (id: number) => {
    setProducts((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      setCartNumber(updated.reduce((acc, p) => acc + p.amount, 0));
      return updated;
    });
  };

  const updateProductAmount = (id: number, amount: number) => {
    setProducts((prev) => {
      const updated = prev.map((p) =>
        p.id === id ? { ...p, amount: Math.max(1, amount) } : p
      );
      setCartNumber(updated.reduce((acc, p) => acc + p.amount, 0));
      return updated;
    });
  };

  const itemSearch = (term: string) => {
    setSearch(term);
  };

  const cartTotal = () =>
    products.reduce((acc, p) => acc + p.price * p.amount, 0);

  const clearCart = () => {
    setProducts([]);
    setCartNumber(0);
  };

  return (
    <Context.Provider
      value={{
        allProducts,
        products,
        cartNumber,
        search,
        addProductToCart,
        removeProductFromCart,
        updateProductAmount,
        itemSearch,
        cartTotal,
        clearCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ProductProvider;