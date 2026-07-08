import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const Message = styled.h3`
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
`;

const NoPastOrder = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Message>Aún no tienes pedidos anteriores</Message>
      <ShopButton onClick={() => navigate("/shop")}>Ir a comprar</ShopButton>
    </Container>
  );
};

export default NoPastOrder;