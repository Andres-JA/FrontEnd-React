import React, { useContext } from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import CartBalance from "../CartBalance/CartBalance";
import EmptyCart from "./EmptyCart/EmptyCart";
import { Context as ProductContext } from "../../context/ProductContext";

const Container = styled.div`
  display: flex;
  padding: 30px;
  gap: 30px;
  min-height: 60vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductsList = styled.div`
  flex: 3;
`;

const Cart = () => {
  const { products } = useContext(ProductContext);

  if (products.length === 0) return <EmptyCart />;

  return (
    <Container>
      <ProductsList>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ProductsList>
      <CartBalance />
    </Container>
  );
};

export default Cart;