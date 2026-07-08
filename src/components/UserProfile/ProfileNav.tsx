import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  border-right: 1px solid #eee;
  padding-right: 15px;
`;

const NavItem = styled.div<{ active: boolean }>`
  padding: 12px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  background: ${(props) => (props.active ? "#f0f4ff" : "transparent")};
  color: ${(props) => (props.active ? "#2b5dff" : "#333")};
  margin-bottom: 5px;
`;

interface Props {
  active: string;
  setActive: (value: string) => void;
}

const ProfileNav = ({ active, setActive }: Props) => {
  const items = [
    { key: "account", label: "Mis datos" },
    { key: "orders", label: "Mis pedidos" },
  ];

  return (
    <Nav>
      {items.map((item) => (
        <NavItem
          key={item.key}
          active={active === item.key}
          onClick={() => setActive(item.key)}
        >
          {item.label}
        </NavItem>
      ))}
    </Nav>
  );
};

export default ProfileNav;