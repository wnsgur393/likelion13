import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const sessionId = localStorage.getItem("sessionId");
    if (!sessionId) {
      navigate("/login");
      return;
    }
    axios
      .get("http://localhost:3000/check-session", {
        headers: { Authorization: sessionId },
      })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch(() => {
        navigate("/login");
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  if (loading) return <Container>로딩 중...</Container>;
  if (!user) return null;

  return (
    <Container>
      <Title>마이페이지</Title>
      <InfoRow>
        <Label>이름</Label>
        <Value>{user.name}</Value>
      </InfoRow>
      <InfoRow>
        <Label>아이디</Label>
        <Value>{user.username}</Value>
      </InfoRow>
      <InfoRow>
        <Label>이메일</Label>
        <Value>{user.email}</Value>
      </InfoRow>
    </Container>
  );
};

export default MyPage;

const Container = styled.div`
  max-width: 400px;
  margin: 40px auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 32px 32px 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const InfoRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
`;

const Label = styled.div`
  width: 80px;
  font-weight: 600;
  color: #888;
`;

const Value = styled.div`
  flex: 1;
  color: #222;
`;
