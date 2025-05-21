import styled from "styled-components";
import Card from "./components/Card";

function App() {
  return (
    <Container>
      <Info>오늘의 소식</Info>
      <Cards>
        <Card imageUrl="https://www.skuniv.ac.kr/files/attach/images/81/882/270/b1334a71965f56b643ad277cd8b0cf5f.png">
          <span style={{ color: "white", fontSize: "1.25rem", fontWeight: 500 }}>
            ‘2025 서경대학교 대동제 ’Blooming!' 개최
          </span>
        </Card>
        <Card imageUrl="https://www.skuniv.ac.kr/files/attach/images/81/882/254/45749ac971d4822c8b726b22832af2ef.jpg">
          <span style={{ color: "white", fontSize: "1.25rem", fontWeight: 500 }}>
            멋쟁이사자처럼, ‘건강관리 서비스 개발’ 해커톤 성료
          </span>
        </Card>
      </Cards>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`;

const Cards = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default App;
