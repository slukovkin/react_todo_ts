import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import cl from '../assets/style/TodoForm.module.css'

interface NewTodoProps {
  onAdd(todo: string): void
}

export const TodoForm: React.FC<NewTodoProps> = ({ onAdd }) => {
  const [ title, setTitle ] = useState<string>('')
  const [ content, setContent ] = useState<string>('')

  const getTitleHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.target.value)
  }

  const getContentHandler = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(evt.target.value)
  }

  const submitNewTodo = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    if(title === '' || content === '') return
    const newTodo = {
      id: Date.now(),
      title,
      content,
      completed: false
    }
    onAdd(JSON.stringify(newTodo))
    setTitle('')
    setContent('')
  }

  return (
      <form className={cl.form}>
        <label htmlFor="title" className={cl.label_title} >Заголовок задачи</label>
        <input type="text" id="title" className={cl.title}
          value={title}
          onChange={getTitleHandler} />
        <textarea cols={30} rows={10}
          className={cl.content}
          value={content}
          onChange={getContentHandler} />
        <button className={cl.btn_submit}
          onClick={submitNewTodo}>Создать</button>
      </form>
  )
}