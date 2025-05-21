import Header from "../components/header/Header";
import FeedbackButtons from "../components/homepage/FeedbackButton";
import FeedbackCards from "../components/homepage/FeedbackCard";
import styled from "styled-components";
import ideathonImg from "../assets/images/ideathon.png";
import bgImg from "../assets/images/Union.svg";

export default function HomePage() {
  return (
    <>
      <Header />
      <MainContainer>
        <Section>
          <TopText>작년부터 진행됐던 아이디어톤, 모두 어땠나요?</TopText>
          <StrongText>여러분들의 생생한 후기가 궁금합니다!</StrongText>
          <FeedbackButtons /> 
        </Section>
        <ImageSection>
          <TextBlock>
            <BackgroundImage src={bgImg} alt="배경" />
            <HighlightTextBlock>
              <HighlightText>How was your Ideathon?</HighlightText>
              <HighlightText>Please share your opinion !</HighlightText>
            </HighlightTextBlock>
            <p>
              진짜 언젠가 이런 후기 올릴 수 있는 사이트를 디자인 해보면 좋겠다는
              생각을 했었는데. 프론트엔드 모두 화이팅!
            </p>
          </TextBlock>
          <Image src={ideathonImg} alt="Ideathon" />
        </ImageSection>
        <FeedbackCards />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  padding: 80px 100px;
  background: #fff;
`;

const Section = styled.div`
  text-align: center;
`;

const TopText = styled.p`
  color: #1c1c1c;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
`;

const StrongText = styled.p`
  color: #1c1c1c;
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  margin: 10px 0 36px;
`;

const ImageSection = styled.div`
  margin: 80px -100px 80px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
`;

const TextBlock = styled.div`
  max-width: 500px;
  height: 500px;
  display: flex;
  z-index: 0;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  border-radius: 20px;
  pointer-events: none; /* 이미지 클릭 안 되게 */
`;

const HighlightTextBlock = styled.div`
  margin-bottom: 27px;
`;

const HighlightText = styled.p`
  border-radius: 10px;
  color: #1c1c1c;
  font-family: Pretendard;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
`;

const Image = styled.img`
  width: 800px;
  height: 400px;
  max-width: 100%;
  border-radius: 70px 0px 0px 70px;
`;
