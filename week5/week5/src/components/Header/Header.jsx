import { useLocation } from "react-router-dom";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchBarWrapper,
  SearchInput,
  SearchButton,
  LeftGroup
} from "./Header.styles";

import logo from "../../assets/images/IDT.png"; // 로고 이미지 경로를 수정하세요
export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <HeaderWrapper>
      <LeftGroup>
        <Logo src={logo} alt="Logo" />
        {(path === "/project" || path === "/diary") && (
          <SearchBarWrapper>
            <SearchInput placeholder="키워드를 입력하세요..." />
            <SearchButton>→</SearchButton>
          </SearchBarWrapper>
        )}
      </LeftGroup>
      <Nav>
        <NavItem to="/" className={`home ${path === "/" ? "active" : ""}`}>
          About
        </NavItem>
        <NavItem to="/project" className={`project ${path === "/project" ? "active" : ""}`}>
          Project
        </NavItem>
        <NavItem to="/diary" className={`diary ${path === "/diary" ? "active" : ""}`}>
          Diary
        </NavItem>
        <NavItem to="/qna" className={`QnA ${path === "/qna" ? "active" : ""}`}>
          QnA
        </NavItem>
      </Nav>
    </HeaderWrapper>
  );
}
