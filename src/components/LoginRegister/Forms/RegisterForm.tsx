import React, { useState, useContext } from "react";
import styled from "styled-components";
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

const SuccessMsg = styled.p`
  color: green;
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

interface Props {
  onSuccess: () => void;
}

const RegisterForm = ({ onSuccess }: Props) => {
  const { addUser } = useContext(UserContext);
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [done, setDone] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser({ ...form, id: 0 });
    setDone(true);
    setTimeout(() => {
      onSuccess();
    }, 1200);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {done && <SuccessMsg>¡Cuenta creada! Ya puedes iniciar sesión.</SuccessMsg>}
      <Input
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        required
      />
      <Input
        name="lastName"
        placeholder="Apellido"
        value={form.lastName}
        onChange={handleChange}
        required
      />
      <Input
        name="email"
        type="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        required
      />
      <Input
        name="password"
        type="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={handleChange}
        required
      />
      <SubmitButton type="submit">Registrarse</SubmitButton>
    </Form>
  );
};

export default RegisterForm;