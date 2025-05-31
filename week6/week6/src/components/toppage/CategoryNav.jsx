import styled from "styled-components";
import CustomDropdown from "../dropdown/CustomDropdown";

export default function CategoryNav({ onSortChange }) {
  return (
    <Wrapper>
      <ItemWrapper>
        <Item>전체</Item>
        <Item $active={true}>반팔티</Item>
        <Item>셔츠</Item>
        <Item>후드</Item>
        <Item>니트</Item>
        <Item>기타</Item>
      </ItemWrapper>
      <CustomDropdown onSortChange={onSortChange}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #ddd;
  background-color: #f9f9f9;
  font-size: 14px;
  margin-bottom: 40px;
`;

const ItemWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const Item = styled.div`
  cursor: pointer;
  color: ${(props) => (props.$active ? "black" : "#666")};
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
`;
