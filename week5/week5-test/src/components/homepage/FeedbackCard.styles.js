// FeedbackSection.styles.js
import styled from 'styled-components';

export const FeedbackCardWrapper = styled.section`
  width: 100%;
  max-width: 720px;
  background: #1C1C1C;
  padding: 40px 32px;
  border-radius: 40px;
  color: white;
  text-align: center;
  margin: 0 auto;
`;

export const LabelImage = styled.img`
    width: 32px;
    height: 32px;
    margin-bottom: 12px;
`;
export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 32px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  flex: 1;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmojiImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 12px;
`;

export const Label = styled.div`
  font-weight: bold;
  font-size: 0.95rem;
  margin-bottom: 8px;

  &.red {
    color: #FF6370;
  }

  &.blue {
    color: #59B5F2;
  }

  &.yellow {
    background: #FFE500;
    color: black;
    padding: 2px 6px;
    border-radius: 8px;
  }
`;

export const Description = styled.div`
  font-size: 0.85rem;
  color: #ddd;
  background: #2c2c2c;
  padding: 12px;
  border-radius: 12px;
  margin-top: 8px;
`;
