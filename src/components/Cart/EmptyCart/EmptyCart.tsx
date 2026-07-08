import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
`;

const Message = styled.h2`
  margin-bottom: 20px;
  color: #555;
`;

const ShopButton = styled.button`
  padding: 12px 25px;
  background: #1c1c1c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #2b5dff;
  }
`;

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Message>Tu carrito está vacío</Message>
      <ShopButton onClick={() => navigate("/shop")}>
        Ir a la tienda
      </ShopButton>
    </Container>
  );
};

export default EmptyCart;