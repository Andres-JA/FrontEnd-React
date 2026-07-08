import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background: linear-gradient(135deg, #1c1c1c 0%, #333 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
`;

const Content = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

const Desc = styled.p`
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: #ccc;
  line-height: 1.6;
`;

const Button = styled.button`
  padding: 12px 36px;
  background: transparent;
  border: 2px solid white;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  &:hover {
    background: white;
    color: #1c1c1c;
  }
`;

const Banner = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Title>Bienvenido a TIENDA</Title>
        <Desc>
          Descubre los mejores productos con los precios más competitivos.
          Envíos a todo el país.
        </Desc>
        <Button onClick={() => navigate("/shop")}>Comprar ahora</Button>
      </Content>
    </Container>
  );
};

export default Banner;
