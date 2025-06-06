import styled from "styled-components";
import CustomDropdown from "../dropdown/CustomDropdown";

export default function CategoryNav({ onSortChange, onCategoryChange, activeCategory }) {
  const categories = [
    { label: "All", value: "all" },
    { label: "JH", value: "mydata" },
    { label: "Clothes", value: "clothes" },
    { label: "Shoes", value: "shoes" },
    { label: "ETC", value: "etc" },
  ];

  return (
    <Wrapper>
      <ItemWrapper>
        {categories.map((cat) => (
          <Item
            key={cat.value}
            $active={activeCategory === cat.value}
            onClick={() => onCategoryChange(cat.value)}
          >
            {cat.label}
          </Item>
        ))}
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
