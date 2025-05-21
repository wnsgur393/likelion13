import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const List = styled.div`
  width: 100%;
`;

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <List>
      {todos.map(todo => (
        <TodoListItem 
          key={todo.id} 
          todo={todo} 
          onToggle={onToggle} 
          onRemove={onRemove} 
        />
      ))}
    </List>
  );
}

export default TodoList;