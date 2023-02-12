import { useEffect, useState } from "react"
import { TodoForm } from "./TodoForm"

export const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([])
  const [visible, setVisible] = useState<boolean>(false)
  const [textContent, setTextContent] = useState<string>('')

  const addNewTodo = (todo: string): void => {
    setVisible(prev => !prev)
    setTodos([todo, ...todos])
  }

  const onNewTask = () => {
    setVisible(prev => !prev)
  }

  useEffect(() => {
    !visible ? setTextContent("Добавить задачу"): setTextContent("Отменить задачу")
  },[visible])

  return (
    <div className="container">
      <h2>Список задач {todos.length}</h2>
      <button 
        onClick={onNewTask}
        className="btn_submit">{textContent}</button>
        {
          visible && <TodoForm onAdd={addNewTodo} />
        }
    </div>
  )
}
