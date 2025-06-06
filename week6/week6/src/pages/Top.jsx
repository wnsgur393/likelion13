import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import CategoryNav from "../components/toppage/CategoryNav";

export default function Top() {
  const [sortOption, onSortChange] = useState("date");

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case "high":
        return b.price - a.price;
      case "low":
        return a.price - b.price;
      case "name":
        return a.name.localeCompare(b.name);
      case "date":
      default:
        return new Date(b.arrived) - new Date(a.arrived);
    }
  });

  return (
    <Wrapper>
      <CategoryNav
        sortOption={sortOption}
        onSortChange={onSortChange}
      />
      <ProductList>
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            brand={product.brand}
            arrived={product.arrived}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </ProductList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 10px 10px 10px;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;  
`;
