import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 0px 20px 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: black;
  font-family: Pretendard, sans-serif;
`;

export const Logo = styled.div`
  font-size: 24px;
  color: white;
  cursor: pointer;
  padding-right: 10px;
`;

export const Category = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const CategoryItem = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const NavItem = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 100;
  font-size: 16px;
  cursor: pointer;
`;