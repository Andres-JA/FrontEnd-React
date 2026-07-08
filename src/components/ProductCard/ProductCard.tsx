import React, { useContext } from "react";
import styled from "styled-components";
import { Product } from "../../types/Product";
import { Context as ProductContext } from "../../context/ProductContext";

const CardContainer = styled.div`
  width: 260px;
  margin: 15px;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transform: translateY(-3px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
`;

const Name = styled.h3`
  font-size: 16px;
  margin: 10px 0 5px;
`;

const Price = styled.span`
  font-weight: bold;
  color: #2b5dff;
  margin-bottom: 10px;
`;

const AddButton = styled.button`
  width: 100%;
  padding: 8px;
  background: #1c1c1c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #2b5dff;
  }
`;

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addProductToCart } = useContext(ProductContext);

  const handleAdd = () => {
    addProductToCart({ ...product, amount: 1 });
  };

  return (
    <CardContainer>
      <Image src={product.image} alt={product.name} />
      <Name>{product.name}</Name>
      <Price>${product.price.toFixed(2)}</Price>
      <AddButton onClick={handleAdd}>Agregar al carrito</AddButton>
    </CardContainer>
  );
};

export default ProductCard;