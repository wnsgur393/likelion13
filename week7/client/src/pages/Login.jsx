import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const [loginUser, setLoginUser] = useState(""); // 닉네임
  const [loginPass, setLoginPass] = useState(""); // 비밀번호
  const [sessionId, setSessionId] = useState(""); // 세션 정보 보여줄 용도
  const navigate = useNavigate();

  useEffect(() => {
    setSessionId(localStorage.getItem("sessionId")); // 컴포넌트라 로딩되자마자 로컬 스토리지에서 세션 정보가 있을 경우 받아와서 저장
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", {
        username: loginUser,
        password: loginPass,
      })
      .then((res) => {
        const sessionId = res.data.sessionId;
        localStorage.setItem("sessionId", sessionId); // 로컬스토리지에 세션 정보 저장
        setSessionId(sessionId);

        alert("로그인 성공!");
        navigate("/mypage"); // 메인 페이지로 이동
      })
      .catch((err) => {
        alert("로그인 실패");
      })
      .finally(() => {
        console.log("Login request finished");
      });
  };

  return (
    <Bg>
      <Container>
        <Title>로그인/회원가입</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="아이디"
            value={loginUser}
            onChange={e => setLoginUser(e.target.value)}
            autoComplete="username"
            required
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={loginPass}
            onChange={e => setLoginPass(e.target.value)}
            autoComplete="current-password"
            required
          />
          <LoginButton type="submit">로그인</LoginButton>
          <OptionRow>
            <label>
              <Checkbox type="checkbox" /> 자동 로그인
            </label>
            <FindLinks>
              <JoinLink type="button" onClick={() => navigate("/register")}>회원가입</JoinLink>
              <FindLink href="#">아이디 찾기</FindLink>
              <Divider>|</Divider>
              <FindLink href="#">비밀번호 찾기</FindLink>
            </FindLinks>
          </OptionRow>
        </Form>
        {/* 세션 정보 확인용 */}
        {/* <p>현재 세션: {sessionId || "없음"}</p> */}
      </Container>
    </Bg>
  );
}

export default Login;

const Bg = styled.div`
  min-height: 100vh;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 420px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 32px 32px 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
  width: 100%;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  max-width: 100%;
  height: 44px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 0 12px;
  font-size: 15px;
  background: #fff;
  box-sizing: border-box;
  margin: 0 auto;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 44px;
  background: #111;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  margin-top: 8px;
  cursor: pointer;
`;

const OptionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 13px;
  color: #888;
  margin-bottom: 4px;
  width: 100%;
`;

const Checkbox = styled.input`
  margin-right: 4px;
`;

const FindLinks = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const FindLink = styled.a`
  color: #888;
  text-decoration: none;
  font-size: 13px;
  margin: 0 2px;
  &:hover { text-decoration: underline; }
`;

const Divider = styled.span`
  margin: 0 4px;
  color: #ccc;
`;

const JoinLink = styled.button`
  color: #111;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  padding: 4px 12px;
  margin-right: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #f5f5f5;
  }
`;
