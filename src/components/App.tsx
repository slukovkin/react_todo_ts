import { useState } from "react"
import { TodoForm } from "./TodoForm"

export const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([])
  const [visible, setVisible] = useState<boolean>(false)

  const addNewTodo = (todo: string): void => {
    setTodos([todo, ...todos])
  }

  const onNewTask = () => {
    setVisible(prev => !prev)
  }

  return (
    <div className="container">
      <h2>Список задач {todos.length}</h2>
      <button 
        onClick={onNewTask}
        style={{margin: 10, padding: "10px 20px", background: "darkgreen", color: "wheat", borderRadius: 10}}>Добавить задачу</button>
        {
          visible && <TodoForm onAdd={addNewTodo} />
        }
    </div>
  )
}
