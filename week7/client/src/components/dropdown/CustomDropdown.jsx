// ✅ CustomDropdown.jsx
import styled from "styled-components";
import { useState } from "react";

export default function CustomDropdown({ onSortChange }) {
  const [open, setOpen] = useState(false);
  const [sortLabel, setSortLabel] = useState("정렬");

  const handleSort = (option, label) => {
    onSortChange(option);
    setSortLabel(label);
    setOpen(false);
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={() => setOpen(!open)}>
        {sortLabel} ▼
      </DropdownButton>
      {open && (
        <DropdownMenu>
          <MenuItem onClick={() => handleSort("low", "낮은 가격순")}>낮은 가격순</MenuItem>
          <MenuItem onClick={() => handleSort("high", "높은 가격순")}>높은 가격순</MenuItem>
          <MenuItem onClick={() => handleSort("name", "이름순")}>이름순</MenuItem>
          <MenuItem onClick={() => handleSort("date", "입고일순")}>입고일순</MenuItem>
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
}

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  width: 120px;
  text-align: left;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  width: 118px;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const MenuItem = styled.div`
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;
