import React from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Carousel from "./Carousel/Carousel";
import ProductsLayout from "./ProductsLayout/ProductsLayout";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Carousel />
      <ProductsLayout />
      <Footer />
    </div>
  );
};

export default Home;