
import React from 'react'
import TodoItem from './TodoItem'

export const TodoList = ({todos}) => {
  console.log('todos', todos);
  
  return (
    <ul>
      {todos.map(item => <TodoItem key={item.id} {...item} />)}
    </ul>
)};

export default TodoList;