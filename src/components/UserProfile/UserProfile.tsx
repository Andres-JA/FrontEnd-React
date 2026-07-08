import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ProfileNav from "./ProfileNav";
import Modal from "./Modal";
import AccountDetails from "../AccountDetails/AccountDetails";
import PastOrders from "../Orders/PastOrders";
import { Context as UserContext } from "../../context/UserContext";

const Container = styled.div`
  display: flex;
  padding: 30px;
  min-height: 60vh;
`;

const LogoutButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: transparent;
  border: 1px solid #d32f2f;
  color: #d32f2f;
  border-radius: 5px;
  cursor: pointer;
`;

const UserProfile = () => {
  const [active, setActive] = useState("account");
  const [showModal, setShowModal] = useState(false);
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Container>
      <div>
        <ProfileNav active={active} setActive={setActive} />
        <LogoutButton onClick={() => setShowModal(true)}>
          Cerrar sesión
        </LogoutButton>
      </div>
      {active === "account" ? <AccountDetails /> : <PastOrders />}
      {showModal && (
        <Modal
          message="¿Seguro que deseas cerrar sesión?"
          onConfirm={handleLogout}
          onCancel={() => setShowModal(false)}
        />
      )}
    </Container>
  );
};

export default UserProfile;