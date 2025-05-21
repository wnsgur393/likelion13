import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 90px;
  flex-wrap: wrap;
  margin-bottom: 60px;
`;

export const Button = styled.button`
  width: 300px;
  height: 150px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #636363 0%, #1c1c1c 100%);
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: 1.3s;
  color: #fefefe;
  text-align: center;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:hover {
    background: #444;
  }
`;
