import React, { useContext } from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";
import { Context as ProductContext } from "../../context/ProductContext";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px 10px;
  min-height: 60vh;
`;

const NoResults = styled.p`
  text-align: center;
  width: 100%;
  padding: 40px 0;
  font-size: 18px;
  color: #888;
`;

const ProductsLayout = () => {
  const { allProducts, search } = useContext(ProductContext);

  const filtered = search
    ? allProducts.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    : allProducts;

  return (
    <Grid>
      {filtered.length > 0 ? (
        filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <NoResults>No se encontraron productos.</NoResults>
      )}
    </Grid>
  );
};

export default ProductsLayout;