import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProductsLayout from "./components/ProductsLayout/ProductsLayout";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import UserProfile from "./components/UserProfile/UserProfile";
import PastOrders from "./components/Orders/PastOrders";
import UserProvider from "./context/UserContext";
import ProductProvider from "./context/ProductContext";

const ShopPage = () => (
  <div>
    <Navbar />
    <ProductsLayout />
    <Footer />
  </div>
);

const CartPage = () => (
  <div>
    <Navbar />
    <Cart />
    <Footer />
  </div>
);

const CheckoutPage = () => (
  <div>
    <Navbar />
    <Checkout />
    <Footer />
  </div>
);

const LoginPage = () => (
  <div>
    <Navbar />
    <LoginRegister />
    <Footer />
  </div>
);

const ProfilePage = () => (
  <div>
    <Navbar />
    <UserProfile />
    <Footer />
  </div>
);

const OrdersPage = () => (
  <div>
    <Navbar />
    <PastOrders />
    <Footer />
  </div>
);

function App() {
  return (
    <UserProvider>
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;