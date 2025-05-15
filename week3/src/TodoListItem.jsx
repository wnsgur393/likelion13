import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: white;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  width: 18px;
  height: 18px;
`;

const Text = styled.span`
  flex: 1;
  font-size: 16px;
  color: #000;
`;

const DeleteButton = styled.button`
  margin-left: 10px;
  background: red;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
`;

function TodoListItem({ todo, onToggle, onRemove }) {
  const { id, text, checked } = todo;

  return (
    <Item>
      <Checkbox 
        type="checkbox" 
        checked={checked} 
        onChange={() => onToggle(id)} 
      />
      <Text checked={checked}>{text}</Text>
      <DeleteButton onClick={() => onRemove(id)}>삭제</DeleteButton>
    </Item>
  );
}

export default TodoListItem;
