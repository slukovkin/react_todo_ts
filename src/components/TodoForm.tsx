import React, { useState } from 'react'
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
        <label htmlFor="title"
          style={{margin: 10, color: 'wheat'}}  
        >Заголовок задачи</label>
        <input type="text" id="title"
          style={{margin: "10px 0px", padding: "10px 0px", border: "none"}}
          value={title}
          onChange={getTitleHandler} />
        <textarea cols={30} rows={10}
          style={{margin: "10px 0px", padding: "10px 0px", border: "none"}}
          value={content}
          onChange={getContentHandler} />
        <button 
          style={{margin: "10 0", border: "none", padding: 10, borderRadius: "0 0px 10px 10px",
          backgroundColor: 'darkgreen', color: 'wheat'
        }}
        onClick={submitNewTodo}>Создать</button>
      </form>
  )
}