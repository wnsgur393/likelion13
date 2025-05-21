import styled from "styled-components";

export const CardsWrapper = styled.div`
  background: #1e1e1e;
  color: white;
  padding: 60px 20px;
  text-align: center;
  border-radius: 50px;
`;

export const PointImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const Title = styled.h3`
  color: #fefefe;
  font-family: Pretendard;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const SubTitle = styled.p`
  color: rgba(254, 254, 254, 0.7);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 40px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  max-width: 350px;
  text-align: center;

  img {
    width: 300px;
    height: 300px;
  }
`;

export const CardTitle = styled.h4`
  color: ${({ color }) => color || "#ff6370"};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 65px;
`;

export const Strong = styled.p`
  color: #1c1c1c;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  margin-top: 8px;
  line-height: 1.4;
  border-radius: 20px;
  background: rgba(254, 254, 254, 0.7);
  padding: 30px;
  color: #1c1c1c;
  text-align: center;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
`;