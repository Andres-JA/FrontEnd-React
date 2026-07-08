import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px 20px;
  background: #1c1c1c;
  color: white;
  flex-wrap: wrap;
`;

const Column = styled.div`
  margin: 10px;
`;

const Title = styled.h4`
  margin-bottom: 10px;
`;

const Item = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #ccc;
`;

const Footer = () => {
  return (
    <Container>
      <Column>
        <Title>TIENDA</Title>
        <Item>Tu tienda online de confianza.</Item>
      </Column>
      <Column>
        <Title>Enlaces</Title>
        <Item>Inicio</Item>
        <Item>Tienda</Item>
        <Item>Contacto</Item>
      </Column>
      <Column>
        <Title>Contacto</Title>
        <Item>correo@tienda.com</Item>
        <Item>+593 999 999 999</Item>
      </Column>
      <Column>
        <Title>© {new Date().getFullYear()} TIENDA</Title>
      </Column>
    </Container>
  );
};

export default Footer;