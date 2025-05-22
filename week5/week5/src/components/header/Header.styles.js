// Header.styles.jsx
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  padding: 20px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 115px;
  height: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const NavItem = styled(Link)`
  color: #a7a7a7;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;

  &.active.home {
    color: black;
    border-bottom: 4px solid #1C1C1C;
  }

  &.active.project {
    color: #FF6D79;
    border-bottom: 4px solid #FF6D79;
  }

  &.active.diary {
    color: #38d9a9;
    border-bottom: 4px solid #01D354;
  }

  &.active.qna {
    color: #f59f00;
    border-bottom: 4px solid #f59f00;
  }
`;

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #1c1c1c;
  border-radius: 40px;
  padding: 6px 12px;
  gap: 8px;
  height: 40px;
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: white;
  font-size: 0.9rem;
  outline: none;
  width: 250px;
  height: 45px;

  &::placeholder {
    color: #ccc;
  }
`;

export const SearchButton = styled.button`
  background: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 1rem;
  font-family: "bold";
`;
