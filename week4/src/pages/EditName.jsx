import styled from "styled-components";
import { useNavigate } from "react-router";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function EditName() {
  const [newName, setNewName] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    if (newName.trim()) {
      localStorage.setItem("name", newName.trim());
      navigate("/account");
    }
  };

  return (
    <Layout>
      <Navbar />
      <Content>
        <h1>이름 수정</h1>
        <input
          type="text"
          value={newName}
          placeholder="새 이름 입력"
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={handleSave}>저장</button>
      </Content>
      <Footer />
    </Layout>
  );
}

export default EditName;

const Layout = styled.div`
  min-height: 100vh;
  background: #f4f4f4;
`;

const Content = styled.main`
  min-height: calc(100vh - 60px - 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 40px;

  input {
    padding: 8px;
    font-size: 1rem;
  }

  button {
    padding: 8px 16px;
    font-size: 1rem;
    cursor: pointer;
  }
`;