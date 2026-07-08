import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Context as UserContext } from "../../../context/UserContext";
import { Context as ProductContext } from "../../../context/ProductContext";

const Container = styled.div`
  max-width: 500px;
  margin: 30px auto;
  padding: 30px;
  border: 1px solid #eee;
  border-radius: 8px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  gap: 15px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #1c1c1c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #2b5dff;
  }
`;

const CheckoutForm = () => {
  const { currentUser } = useContext(UserContext);
  const { products, cartTotal, clearCart } = useContext(ProductContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    address: currentUser?.address || "",
    city: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const receipts = JSON.parse(localStorage.getItem("receipts") || "[]");
    const newReceipt = {
      id: Date.now(),
      userId: currentUser?.id,
      date: new Date().toISOString(),
      products,
      total: cartTotal(),
    };
    localStorage.setItem(
      "receipts",
      JSON.stringify([...receipts, newReceipt])
    );
    clearCart();
    navigate("/orders");
  };

  return (
    <Container>
      <Title>Finalizar compra</Title>
      <form onSubmit={handleSubmit}>
        <Input
          name="address"
          placeholder="Dirección"
          value={form.address}
          onChange={handleChange}
          required
        />
        <Input
          name="city"
          placeholder="Ciudad"
          value={form.city}
          onChange={handleChange}
          required
        />
        <Input
          name="cardNumber"
          placeholder="Número de tarjeta"
          value={form.cardNumber}
          onChange={handleChange}
          required
        />
        <Row>
          <Input
            name="expiry"
            placeholder="MM/AA"
            value={form.expiry}
            onChange={handleChange}
            required
          />
          <Input
            name="cvv"
            placeholder="CVV"
            value={form.cvv}
            onChange={handleChange}
            required
          />
        </Row>
        <SubmitButton type="submit">
          Pagar ${cartTotal().toFixed(2)}
        </SubmitButton>
      </form>
    </Container>
  );
};

export default CheckoutForm;