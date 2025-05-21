import {
  CardsWrapper,
  CardContainer,
  Card,
  CardTitle,
  CardDescription,
  Title,
  SubTitle,
  Strong,
  PointImg,
} from "./FeedbackCard.styles";

import point from "../../assets/images/point.svg";
import emoji1 from "../../assets/images/emoji1.png";
import emoji2 from "../../assets/images/emoji2.png";
import emoji3 from "../../assets/images/emoji3.png";

export default function FeedbackCards() {
  return (
    <CardsWrapper>
      <PointImg src={point} alt="포인트" />
      <Title>성실히 후기를 작성해주신 분들에게는!</Title>
      <SubTitle>
        딱히 별건 없지만 미래의 해커톤 발전에 큰 도움이 되는데 많은 후기 작성
        부탁합니다.
      </SubTitle>
      <CardContainer>
        <Card>
          <img src={emoji1} alt="최고의 경험" />
          <CardTitle color="#ff6370">정말 최고의 경험!</CardTitle>
          <CardDescription>
            <Strong>진짜 완전 백퍼 진심</Strong>
            <br />
            힘들긴 했지만 그만큼의 보람이 있었어요. 여러분들도 그렇나요?
          </CardDescription>
        </Card>
        <Card>
          <img src={emoji2} alt="한 번 더 하고 싶어요" />
          <CardTitle color="#01D354">저 진짜 한 번 더 하고 싶어요</CardTitle>
          <CardDescription>
            <Strong>이건 백퍼 진심은 아님</Strong>
            <br />한 번 더하면 몸이 버티질 못할 것 같아요. 중요한 건 열심히
            해야지!
          </CardDescription>
        </Card>
        <Card>
          <img src={emoji3} alt="밥샘의 가치" />
          <CardTitle color="#FFB801">밤샘의 가치가 있다</CardTitle>
          <CardDescription>
            <Strong>요건 80퍼센트 진심</Strong>
            <br />
            밤샘은 건강에 좋지 않기 때문입니다. 밤샘하지 않도록 미리미리
            작업합시다!
          </CardDescription>
        </Card>
      </CardContainer>
    </CardsWrapper>
  );
}