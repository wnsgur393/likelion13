// Header.styles.js
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: white;
  padding: 16px 48px;
  border-bottom: 1px dotted lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;

export const NavItem = styled.a`
  font-size: 0.9rem;
  font-weight: 500;
  color: #444;
  text-decoration: none;

  &:hover {
    color: black;
    text-decoration: underline;
  }
`;
