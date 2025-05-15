import { Outlet } from "react-router";
import styled from "styled-components";
import Input from "../components/Input";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <Layout>
      <Navbar />
      <Content>
        <Input />
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
}

const Layout = styled.div`
  min-height: 100vh;
  background: #f4f4f4;
`;

const Content = styled.main`
  min-height: calc(100vh - 60px - 2rem); // 최소 높이: 전체 높이 - 네비바 높이 - 푸터 높이
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default RootLayout;
