import { Outlet } from "react-router";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Profile from "../components/Profile";

function MyLayout() {
  const name = localStorage.getItem("name") || "김준혁";
  return (
    <Layout>
      <Navbar />
      <Content>
        <Profile name={name} />
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

const Content = styled.main`
  min-height: calc(100vh - 60px - 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

