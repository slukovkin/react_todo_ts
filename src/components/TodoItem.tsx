import React, { useEffect } from 'react';
import cl from '../assets/style/TodoItem.module.css'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { ITodo } from '../types/data';


interface TodoItemProps {
  task: ITodo
}

export const TodoItem: React.FC<TodoItemProps> = ({task}) => {

  return (
    <div className={cl.container}>
      <input type="checkbox" />
      <span>{task.title}</span>
      <p><HighlightOffOutlinedIcon /></p>
    </div>
  )
}