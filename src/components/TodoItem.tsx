import React, { useEffect } from 'react';
import cl from '../assets/style/TodoItem.module.css'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';


interface TodoItemProps {
  task: string
}

export const TodoItem: React.FC<TodoItemProps> = ({task}) => {

    const todo = JSON.parse(task) 

  return (
    <div className={cl.container}>
      <input type="checkbox" />
      <span>{todo.title}</span>
      <p><HighlightOffOutlinedIcon /></p>
    </div>
  )
}