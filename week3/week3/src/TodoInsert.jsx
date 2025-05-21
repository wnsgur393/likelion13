import { useState } from 'react';
import styled from 'styled-components';

const InsertForm = styled.form`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid black;
  border-radius: 6px;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  background: #5dd661;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== '') {
      onInsert(value);
      setValue('');
    }
  };
  

  return (
    <InsertForm onSubmit={handleSubmit}>
      <Input 
        value={value} 
        onChange={handleChange} 
        placeholder="할 일을 입력하세요"
      />
      <Button type="submit">추가</Button>
    </InsertForm>
  );
}

export default TodoInsert;