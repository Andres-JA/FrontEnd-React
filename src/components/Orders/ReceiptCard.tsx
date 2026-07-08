import React from "react";
import styled from "styled-components";
import { Receipt } from "../../types/Receipt";

const Container = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  color: #555;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eee;
  margin-top: 10px;
  padding-top: 10px;
  font-weight: bold;
`;

interface Props {
  receipt: Receipt;
}

const ReceiptCard = ({ receipt }: Props) => {
  return (
    <Container>
      <Header>
        <span>Pedido #{receipt.id}</span>
        <span>{new Date(receipt.date).toLocaleDateString()}</span>
      </Header>
      {receipt.products.map((p) => (
        <Item key={p.id}>
          <span>
            {p.name} x{p.amount}
          </span>
          <span>${(p.price * p.amount).toFixed(2)}</span>
        </Item>
      ))}
      <Total>
        <span>Total</span>
        <span>${receipt.total.toFixed(2)}</span>
      </Total>
    </Container>
  );
};

export default ReceiptCard;