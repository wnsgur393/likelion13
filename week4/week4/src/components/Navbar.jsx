import { Link } from "react-router";
import styled from "styled-components";

function Navbar() {
  return (
    <Container>
      <Page to="/">홈</Page>
      <Page to="/account">내 계정</Page>
    </Container>
  );
}

const Container = styled.nav`
  height: 60px;
  padding: 16px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
`;

const Page = styled(Link)`
  font-size: 1rem;
  font-weight: 600;
  color: white;
`;

export default Navbar;
