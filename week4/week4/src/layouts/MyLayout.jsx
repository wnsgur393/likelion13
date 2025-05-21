import { Outlet, useLocation } from "react-router";
import styled from "styled-components";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

function MyLayout() {
  const location = useLocation();
  const name = localStorage.getItem("name") || "김준혁";

  // '/account/edit-name'일 때는 Profile을 안 보여줌
  const hideProfile = location.pathname === "/account/edit-name";

  return (
    <Layout>
      <MyNavbar />
      <Content>
        {!hideProfile && <Profile name={name} />}
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
}

export default MyLayout;

const Layout = styled.div`
  min-height: 100vh;
  background: #f4f4f4;
`;

const Content = styled.div`
  min-height: calc(100vh - 60px - 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
