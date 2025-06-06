import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [usernameAvailable, setUsernameAvailable] = useState(null);
  const navigate = useNavigate();

    const checkUsername = () => {
        if (username.trim().length === 0) return alert("닉네임을 입력해주세요.");

    // GET 요청 = 닉네임 중복 확인
        axios
        .get("http://localhost:3000/check-username", { params: { username } })
        .then((res) => {
            setUsernameAvailable(!res.data.exists);
        })
        .catch((err) => {
            setUsernameAvailable(false);
        })
        .finally(() => {
            console.log("Username check finished");
        });
    };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !password || !password2 || !name || !email) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    if (password !== password2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (usernameAvailable === false) {
      alert("이미 사용 중인 아이디입니다.");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3000/register", {
        username,
        password,
        name,
        email,
      });
      if (res.data.success) {
        alert("회원가입 성공!");
        navigate("/login");
      } else {
        alert(res.data.error || "회원가입 실패");
      }
    } catch (e) {
      alert(e.response?.data?.error || "회원가입 실패");
    }
  };

  return (
    <Bg>
      <Container>
        <Title>회원가입</Title>
        <Form onSubmit={handleRegister}>
          <Input type="text" placeholder="아이디" value={username} onChange={e => setUsername(e.target.value)} autoComplete="username" />
          <Button type="button" onClick={checkUsername} style={{marginBottom:8}}>아이디 중복 확인</Button>
          {usernameAvailable !== null && (
            <Message $available={usernameAvailable}>
              {usernameAvailable ? "사용 가능한 아이디입니다" : "이미 사용 중인 아이디입니다"}
            </Message>
          )}
          <Input type="password" placeholder="비밀번호" value={password} onChange={e => setPassword(e.target.value)} autoComplete="new-password" />
          <Input type="password" placeholder="비밀번호 확인" value={password2} onChange={e => setPassword2(e.target.value)} autoComplete="new-password" />
          <Input type="text" placeholder="이름" value={name} onChange={e => setName(e.target.value)} autoComplete="name" />
          <Input type="email" placeholder="이메일" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
          <RegisterButton type="submit">회원가입</RegisterButton>
        </Form>
      </Container>
    </Bg>
  );
}

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

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 0.5rem;
  font-size: 14px;
  &:hover {
    background-color: #218838;
  }
`;

const RegisterButton = styled.button`
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

const Message = styled.p`
  color: ${(props) => (props.$available ? "green" : "red")};
  font-size: 13px;
  margin-bottom: 8px;
`;
