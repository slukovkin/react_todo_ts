import React, { useState } from 'react'
import cl from './TodoNew.module.css'

const TodoNew: React.FC = () => {  
  const [ title, setTitle ] = useState<string>('')
  const [ content, setContent ] = useState<string>('')

  const submitTask = () => {
    const data = ({
      id: Date.now(),
      title: title, 
      constent: content,
      completed: false
    })
    // addNewTask(data)
  }
 
  const getTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)    
  }

  const getContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }
  
  return (
    <div className={cl.wrapper}>
      <input type="text" 
        value={title} 
        onChange={getTitle} 
        className={cl.title}
        />
      <textarea cols={30} rows={10} 
        value={content} 
        onChange={getContent} 
        className={cl.content}></textarea>
      <button 
        onClick={submitTask} 
        className={cl.submit}>Add</button>
    </div>
  )
}

export { TodoNew }