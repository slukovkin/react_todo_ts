import { useEffect, useState } from 'react'
import { TodoNew } from './TodoNew/TodoNew'
import { ITodo } from '../types/data'
import cl from './App.module.css'

const App: React.FC = () => {
  const [ visible, setVisible ] = useState(false)
  const [ todos, setTodos ] = useState<ITodo[]>([])
  const [ message, setMessage ] = useState('')

  const addTask = () => {
    setVisible(!visible)  
  }

  // const addNewTask = (data): void => {   
  //   setTodos([...todos, data])
  // }

  useEffect(() => {
    todos.length == 0 ? setMessage("В списке нет созданных задач"): null
  }, [todos])

  return (
    <div className={cl.wrapper}>
      <h2>Список задач содердит { todos.length } задачи</h2>
      <button onClick={addTask} className={cl.btn}>Добывить новую задачу</button>
      {visible ? <TodoNew />: <h5>{message}</h5> }  
    </div>
  )
}

export {App}