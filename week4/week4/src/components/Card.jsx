import styled from "styled-components";

function Card({ imageUrl, children }) {
  return <CardComponent $imageUrl={imageUrl}>{children}</CardComponent>;
}

const CardComponent = styled.div`
  width: 500px;
  height: 250px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 4px;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%),
    url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
`;

export default Card;
