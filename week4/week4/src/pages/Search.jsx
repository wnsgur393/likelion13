import { useSearchParams } from "react-router";
import styled from "styled-components";
import data from "../data";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  // 검색 결과
  const result = Object.keys(data)
    .filter((query) => query.includes(searchParams.get("query")))
    .flatMap((query) => data[query]);

  console.log(result);

  return (
    <>
      <Message>검색 결과: {result.length}건</Message>
      <Results>
        {result.map((result) => (
          <Result key={result.id}>
            <Title href={result.url} target="_blank" rel="noopener noreferrer">
              {result.title}
            </Title>
            <Content>{result.content}</Content>
          </Result>
        ))}
      </Results>
    </>
  );
}

const Message = styled.span`
  margin-top: 25px;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Results = styled.div`
  margin-top: 50px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
`;

const Result = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border: 1px solid #eee;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 30px;
  transition: transform 250ms ease-in-out;
  will-change: transform;
  &:hover {
    transform: scale(1.025);
  }
`;

const Title = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Content = styled.span`
  font-weight: 500;
`;

export default Search;
