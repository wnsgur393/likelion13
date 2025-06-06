import { 
  HeaderWrapper, 
  Category, 
  CategoryItem, 
  Nav, 
  NavItem,
  Logo
 } from "./header.styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Header() {
  const navigate = useNavigate();

  const handleMyClick = async () => {
    const sessionId = localStorage.getItem("sessionId");
    if (!sessionId) {
      navigate("/login");
      return;
    }
    try {
      const res = await axios.get("http://localhost:3000/check-session", {
        headers: { Authorization: sessionId }
      });
      if (res.data.valid) {
        navigate("/mypage");
      } else {
        navigate("/login");
      }
    } catch {
      navigate("/login");
    }
  };

  return (
    <HeaderWrapper>
      <Category>
        <Logo onClick={() => navigate("/")}>MUSINSA</Logo>
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
        <NavItem onClick={handleMyClick}>마이</NavItem>
        <NavItem>장바구니</NavItem>
      </Nav>
    </HeaderWrapper>
  );
}
