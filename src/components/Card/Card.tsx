import React, { useContext } from "react";
import styled from "styled-components";
import { Product } from "../../types/Product";
import { Context as ProductContext } from "../../context/ProductContext";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #eee;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 15px;
`;

const Info = styled.div``;

const Name = styled.h4`
  margin: 0 0 5px;
`;

const Price = styled.span`
  color: #2b5dff;
  font-weight: bold;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AmountButton = styled.button`
  width: 28px;
  height: 28px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
`;

const Amount = styled.span`
  margin: 0 10px;
`;

const RemoveButton = styled.button`
  border: none;
  background: transparent;
  color: red;
  cursor: pointer;
  margin-left: 15px;
`;

interface Props {
  product: Product;
}

const Card = ({ product }: Props) => {
  const { updateProductAmount, removeProductFromCart } =
    useContext(ProductContext);

  return (
    <Container>
      <Left>
        <Image src={product.image} alt={product.name} />
        <Info>
          <Name>{product.name}</Name>
          <Price>${product.price.toFixed(2)}</Price>
        </Info>
      </Left>
      <AmountContainer>
        <AmountButton
          onClick={() => updateProductAmount(product.id, product.amount - 1)}
        >
          -
        </AmountButton>
        <Amount>{product.amount}</Amount>
        <AmountButton
          onClick={() => updateProductAmount(product.id, product.amount + 1)}
        >
          +
        </AmountButton>
      </AmountContainer>
      <RemoveButton onClick={() => removeProductFromCart(product.id)}>
        Eliminar
      </RemoveButton>
    </Container>
  );
};

export default Card;