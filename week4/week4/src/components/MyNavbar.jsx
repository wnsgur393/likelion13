import { Link } from "react-router";
import styled from "styled-components";

function MyNavbar() {
    return (
        <Container>
            <Page to="/"><Logo src="home.png"></Logo></Page>
            <Page to="/account">My Account</Page>
        </Container>
    );
}

const Container = styled.nav`
  height: 60px;
  padding: 16px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: lightblue;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
`;

const Page = styled(Link)`
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    color: black;
`;

export default MyNavbar;