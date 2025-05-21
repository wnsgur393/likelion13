import styled from "styled-components";

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 항상 2열 유지 */
  gap: 40px;
  margin-top: 40px;
  justify-items: center;
`;

export const ProjectItem = styled.img`
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;