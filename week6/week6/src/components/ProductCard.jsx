import styled from "styled-components";

export default function ProductCard({ name, price, image, brand }) {
  return (
    <Card>
      <ProductImage src={image} alt={name} />
      <ProductDescription>
        <ProductBrand>{brand}</ProductBrand>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price.toLocaleString()}원</ProductPrice>
      </ProductDescription>
    </Card>
  );
}

const Card = styled.div`
  width: 200px;
  height: 320px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;          // 비율 유지하며 잘라서 채우기
`;

const ProductDescription = styled.div`
  padding: 12px 8px 24px 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;
`;


const ProductBrand = styled.p`
  font-size: 11px;
  letter-spacing: 0;
  line-height: 14px;
  color: black;
   margin: 0;
  font-weight: bold;
`;

const ProductName = styled.p`
  font-size: 13px;
  margin: 2px 0 0 0;
  letter-spacing: 0;
  line-height: 18px;
  font-weight: 500;

  display: -webkit-box;
  -webkit-line-clamp: 2;             // 최대 2줄만
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;

  height: 36px;                      // line-height * 2
`;

const ProductPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin: 5px 0 0 0;
`;