import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
import { Context as ProductContext } from "../../context/ProductContext";

const Container = styled.div`
  height: 100px;
  background: #1c1c1c;
  color: white;
  position: sticky;
  top: 0;
  width: 100vw;
  border-bottom: 2px solid #333;
  z-index: 999;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.form`
  border: 1px solid #444;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 5px;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  color: white;
  &:focus {
    outline: none;
    background: transparent;
  }
`;

const Button = styled.button`
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

const Logo = styled.p`
  align-self: space-between;
  cursor: pointer;
  letter-spacing: 6px;
  font-size: 2.2em;
  color: white;
  margin: 0;
`;

const LogoMirror = styled.p`
  position: absolute;
  cursor: pointer;
  letter-spacing: 6px;
  font-size: 2.2em;
  transform: scale(1, -1) translateY(-67%);
  background: linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 24px;
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  const { products, itemSearch } = useContext(ProductContext);
  const navigate = useNavigate();
  const [searchedProduct, setSearchedProduct] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  const goHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleLoginClick = () => {
    if (localStorage.getItem("curUserL") === "true") {
      navigate("/profile");
    } else {
      navigate("/login");
    }
    window.scrollTo(0, 0);
  };

  const handleCartClick = () => {
    navigate("/cart");
    window.scrollTo(0, 0);
  };

  const navigateToShop = () => {
    navigate("/shop");
    window.scrollTo(0, 0);
  };

  const updateCartAmount = () => {
    let itemsInCart = 0;
    products.forEach((p) => (itemsInCart += p.amount));
    return itemsInCart;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedProduct(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    itemSearch(searchedProduct);
    if (ref.current !== null) {
      ref.current.value = "";
    }
    navigateToShop();
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input ref={ref} placeholder="Buscar productos..." onChange={handleChange} />
            <Button onClick={handleSubmit}>
              <SearchIcon />
            </Button>
          </SearchContainer>
        </Left>
        <Center onClick={goHome}>
          <Logo>TIENDA</Logo>
          <LogoMirror>TIENDA</LogoMirror>
        </Center>
        <Right>
          <MenuItem onClick={navigateToShop}>
            <StorefrontIcon />
          </MenuItem>
          <MenuItem onClick={handleLoginClick}>
            <AccountCircleIcon />
          </MenuItem>
          <MenuItem onClick={handleCartClick}>
            <Badge badgeContent={updateCartAmount()} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;