import styled from "styled-components";

export default function CategoryNav({ onSortChange, sortOption }) {
  return (
    <Wrapper>
      <Left>
        <Item>전체</Item>
        <Item active>반팔티</Item>
        <Item>셔츠</Item>
        <Item>후드</Item>
        <Item>니트</Item>
        <Item>기타</Item>
      </Left>
      <Right>
        <label htmlFor="sort">정렬:&nbsp;</label>
        <select id="sort" value={sortOption} onChange={onSortChange}>
          <option value="high">높은 가격순</option>
          <option value="low">낮은 가격순</option>
          <option value="name">이름순</option>
          <option value="date">입고일순</option>
        </select>
      </Right>
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

const Left = styled.div`
  display: flex;
  gap: 16px;
`;

const Right = styled.div`
  select {
    padding: 4px 8px;
    font-size: 14px;
  }
`;

const Item = styled.div`
  cursor: pointer;
  color: ${(props) => (props.active ? "black" : "#666")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;
