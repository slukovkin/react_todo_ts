import React, { useEffect } from 'react';
import cl from '../assets/style/TodoItem.module.css'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { ITodo } from '../types/data';


interface TodoItemProps {
  todo: ITodo
}

export const TodoItem: React.FC<TodoItemProps> = ({todo}) => {

  return (
    <div className={cl.container}>
      <input type="checkbox" />
      <span>{todo.title}</span>
      <p><HighlightOffOutlinedIcon /></p>
    </div>
  )
}