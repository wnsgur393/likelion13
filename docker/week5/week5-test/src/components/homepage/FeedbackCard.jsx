import {
  FeedbackCardWrapper,
  LabelImage,
  Title,
  Subtitle,
  CardContainer,
  Card,
  EmojiImage,
  Label,
  Description,
} from './FeedbackCard.styles';

import labelimg from '../../assets/label.svg';
import emoji1 from '../../assets/emoji1.png';
import emoji2 from '../../assets/emoji2.png';
import emoji3 from '../../assets/emoji3.png';


export default function FeedbackCards() {
  return (
    <FeedbackCardWrapper>
      <LabelImage src={labelimg} alt="label" />
      <Title>성실히 후기를 작성해주신 분들에게는!</Title>
      <Subtitle>딱히 보상 없지만 미래의 해커톤 발전에 큰 도움이 되는데 많은 후기 작성 부탁합니다.</Subtitle>
      <CardContainer>
        <Card>
          <EmojiImage src={emoji1} alt="emoji1" />
          <Label className="red">정말 최고의 경험!</Label>
          <Description>진짜 완전 백퍼 진심<br />힘들긴 해도, 고생의 보람이 있었어요.<br />여러분들도 그렇나요?</Description>
        </Card>
        <Card>
          <EmojiImage src={emoji2} alt="emoji2" />
          <Label className="blue">저 진짜 한 번 더하고 싶어요</Label>
          <Description>이건 백퍼 진심은 아님<br />한 번 더하면 후회 버럭 못할 것 같아요.<br />중요한 일정을 제끼지 마세요.</Description>
        </Card>
        <Card>
          <EmojiImage src={emoji3} alt="emoji3" />
          <Label className="yellow">밤샘의 가치가 있다</Label>
          <Description>요건 80퍼센트 진심<br />밤샘은 건강에 좋지 않기 때문에<br />밤새하지 않도록 미리미리 작업합시다.</Description>
        </Card>
      </CardContainer>
    </FeedbackCardWrapper>
  );
}
