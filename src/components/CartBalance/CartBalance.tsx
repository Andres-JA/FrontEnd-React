import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Context as ProductContext } from "../../context/ProductContext";

const Container = styled.div`
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  width: 300px;
  align-self: flex-start;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Total = styled(Row)`
  font-weight: bold;
  font-size: 18px;
  border-top: 1px solid #eee;
  padding-top: 10px;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #1c1c1c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    background: #2b5dff;
  }
`;

const CartBalance = () => {
  const { cartTotal, products } = useContext(ProductContext);
  const navigate = useNavigate();
  const total = cartTotal();
  const shipping = total > 50 || total === 0 ? 0 : 5;

  const handleCheckout = () => {
    if (localStorage.getItem("curUserL") === "true") {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  return (
    <Container>
      <Row>
        <span>Subtotal</span>
        <span>${total.toFixed(2)}</span>
      </Row>
      <Row>
        <span>Envío</span>
        <span>${shipping.toFixed(2)}</span>
      </Row>
      <Total>
        <span>Total</span>
        <span>${(total + shipping).toFixed(2)}</span>
      </Total>
      <CheckoutButton onClick={handleCheckout} disabled={products.length === 0}>
        Proceder al pago
      </CheckoutButton>
    </Container>
  );
};

export default CartBalance;