import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Context as UserContext } from "../../../context/UserContext";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
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

const LoginForm = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      localStorage.setItem("curUserL", "true");
      navigate("/profile");
    } else {
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <Input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <SubmitButton type="submit">Iniciar sesión</SubmitButton>
    </Form>
  );
};

export default LoginForm;