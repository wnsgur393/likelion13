import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import CategoryNav from "../components/toppage/CategoryNav";
import axios from "axios";

export default function Top() {
  const [sortOption, onSortChange] = useState("date");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    setLoading(true);
    let url = "http://localhost:3000/products";
    if (category === "mydata") url = "http://localhost:3000/mydata";
    else if (category === "clothes") url = "http://localhost:3000/clothes";
    else if (category === "shoes") url = "http://localhost:3000/shoes";
    // etc는 별도 처리 필요시 추가
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
        setError(null);
      })
      .catch((err) => {
        setError("상품 목록을 불러오는 데 실패했습니다.");
        setProducts([]);
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [category]);

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
        onCategoryChange={setCategory}
        activeCategory={category}
      />
      {error && <div>{error}</div>}
      {loading && <div>로딩 중...</div>}
      <ProductList>
        {sortedProducts.map((product, idx) => (
          <ProductCard
            key={product.id + '-' + idx}
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
