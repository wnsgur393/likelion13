import { 
  HeaderWrapper, 
  Category, 
  CategoryItem, 
  Nav, 
  NavItem,
  Logo
 } from "./header.styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <Category>
        <Logo>MUSINSA</Logo>
        <div style={{ fontSize: "20px", 
          fontWeight: "bold", 
          color: "rgba(255, 255, 255, 0.8)" }}>|</div>
        <CategoryItem>Shorts</CategoryItem>
        <CategoryItem>Pants</CategoryItem>
        <CategoryItem>Shoes</CategoryItem>
      </Category>
      <Nav>
        <NavItem>검색</NavItem>
        <NavItem>좋아요</NavItem>
        <NavItem>마이</NavItem>
        <NavItem>장바구니</NavItem>
      </Nav>
    </HeaderWrapper>
  );
}
