import Header from "../components/header/Header";
import styled from "styled-components";
import Clip from "../assets/images/clip.png";
import ProjectComponent from "../components/homepage/ProjectComponent";

export default function ProjectPage() {
  return (
    <>
      <Header />
      <MainContainer>
        <ClipText><ClipImg src={Clip} alt="clip" />Project</ClipText>
        <Description>
          2025 서경대학교 아이디어톤의 프로젝트 파일입니다. 클릭하여 상세한 정보를 확인하세요!<br /> 모아 놓으니 더 예쁘네요. 다들 너무 수고하셨습니다!
        </Description>
        <ProjectComponent />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  padding: 80px 100px;
  background: #fff;
`;

const ClipText = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #222;
`;

const ClipImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 12px;
`;

const Description = styled.p`
  color: #7C7C7C;
  font-size: 22px;
  font-style: normal;
  line-height: 25px;
  letter-spacing: 1px;
`