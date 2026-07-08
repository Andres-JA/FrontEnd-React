import React, { useContext } from "react";
import styled from "styled-components";
import ReceiptCard from "./ReceiptCard";
import NoPastOrder from "./NoPastOrder";
import { Receipt } from "../../types/Receipt";
import { Context as UserContext } from "../../context/UserContext";

const Container = styled.div`
  max-width: 600px;
  margin: 30px auto;
`;

const PastOrders = () => {
  const { currentUser } = useContext(UserContext);
  const receipts: Receipt[] = JSON.parse(
    localStorage.getItem("receipts") || "[]"
  ).filter((r: Receipt) => r.userId === currentUser?.id);

  if (receipts.length === 0) return <NoPastOrder />;

  return (
    <Container>
      {receipts.map((receipt) => (
        <ReceiptCard key={receipt.id} receipt={receipt} />
      ))}
    </Container>
  );
};

export default PastOrders;