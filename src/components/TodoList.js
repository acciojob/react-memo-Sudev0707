import React from 'react';

const TodoList = React.memo(({ todos }) => {
  console.log('TodoList rendered - todos length:', todos.length);
  
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
});

export default TodoList;