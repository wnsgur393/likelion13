import styled from "styled-components";
import GreenClip from "../assets/images/GreenClip.png";
import GroupPhoto from "../assets/images/group-photo.png";
import PresentationPhoto from "../assets/images/presentation.png";
import Score from "../assets/images/score.png";
export default function DiaryPage() {
  return (
    <>
      <MainContainer>
        <ClipText><ClipImg src={GreenClip} alt="clip" />Diary</ClipText>
        <Description>
            2025 서경대학교 아이디어톤의 소감을 적는 곳 입니다. 여러분이 느꼈던 모든 것을 적어주세요!
            <br/>이미지를 올리셔도 됩니다. 배치도 자유롭게 설정할 수 있어요! 방명록이라고 편하게 생각 부탁함~
        </Description>
        <GuestBookButton>방명록 쓰러가기</GuestBookButton>
        <MemoContiainer>
            <Memo width="782px" height="806px" fontSize="130px">다들<br/>사랑해요호<br/>!!!!!!!</Memo>
            <Memo width="884px" height="451px" fontSize="100px" bgColor="#cffd03" top="201px" left="730px">최강동아리멋사<br/>그 중 서경대가 최강</Memo>
            <Memo rotate="-6.481deg" width="561px" height="373px" fontSize="90px" bgColor="#7072f3" textColor="white" top="1400px" left="190px" style={{zIndex:"1"}}>내가더더더</Memo>
            <MemoImage width="1016px" height="575px" top="1000px" left="650px" style={{zIndex:"-1"}} src={GroupPhoto} alt="group" />
            <Memo width="522px" height="537px" fontSize="33px" top="1900px" left="500px" bgColor="#FF7984" textColor="white">
                글씨를 이렇게도 작게 쓸 수 있어요<br/>그치만 이렇게 쓰면 안보이겠죠?<br/>시원하게 씁시다<br/>
                글씨를 이렇게도 작게 쓸 수 있어요<br/>그치만 이렇게 쓰면 안보이겠죠?<br/>시원하게 씁시다<br/>
                글씨를 이렇게도 작게 쓸 수 있어요<br/>그치만 이렇게 쓰면 안보이겠죠?<br/>시원하게 씁시다
            </Memo>
            <MemoImage width="473px" height="537px" top="2280px" left="135px" src={PresentationPhoto} alt="presentation"/>
            <Memo width="665px" height="444px" fontSize="60px" top="2500px" left="1100px" bgColor="#8646b1" textColor="white">여기 후기 쓰는 곳임<br/>그래서 제 소감은요...<br/>(이하생략</Memo>
            <MemoImage width="1034px" height="1033px" top="3000px" left="380px" src={Score} alt="score" />
        </MemoContiainer>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  padding: 80px 100px;
  background: #fff;
`;

const MemoContiainer = styled.div`
    position: relative;
    margin-top: 100px;
    padding: 80px 100px;
    background: #fff;
`
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
const GuestBookButton = styled.button`
  background-color: #07df5d;
  color: white;
  border: none;
  border-radius: 15px;
  width: 300px;
  height: 90px;
  font-size: 26px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #38d9a9;;
    transition: background-color 0.3s ease-in-out;
  }
`;

const Memo = styled.div`
  background-color: ${(props) => props.bgColor || "#FFD15B"};
  color: ${(props) => props.textColor || "#000"};
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: 900;
  display: grid;
  place-items: center;
  position: absolute;
  top: ${(props) => props.top || "0px"};
  left: ${(props) => props.left || "0px"};
  text-align: left;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  transform: rotate(${(props) => props.rotate || "0deg"});
  width: ${(props) => props.width || "200px"};
  height: ${(props) => props.height || "200px"};
`;

const MemoImage = styled.img`
    display: grid;
    place-items: center;
    position: absolute;
    top: ${(props) => props.top || "0px"};
    left: ${(props) => props.left || "0px"};
    width: ${(props) => props.width || "200px"};
    height: ${(props) => props.height || "200px"};
    border-radius: 12px;
`;