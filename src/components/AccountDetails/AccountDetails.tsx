import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Context as UserContext } from "../../context/UserContext";

const Container = styled.div`
  flex: 1;
  padding-left: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const SaveButton = styled.button`
  padding: 10px 25px;
  background: #1c1c1c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const AccountDetails = () => {
  const { currentUser, updateUser } = useContext(UserContext);
  const [form, setForm] = useState({
    name: currentUser?.name || "",
    lastName: currentUser?.lastName || "",
    email: currentUser?.email || "",
    address: currentUser?.address || "",
    phone: currentUser?.phone || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentUser) {
      updateUser({ ...currentUser, ...form });
    }
  };

  return (
    <Container>
      <h3>Mis datos</h3>
      <form onSubmit={handleSave}>
        <Input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" />
        <Input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Apellido" />
        <Input name="email" value={form.email} onChange={handleChange} placeholder="Correo" />
        <Input name="address" value={form.address} onChange={handleChange} placeholder="Dirección" />
        <Input name="phone" value={form.phone} onChange={handleChange} placeholder="Teléfono" />
        <SaveButton type="submit">Guardar cambios</SaveButton>
      </form>
    </Container>
  );
};

export default AccountDetails;