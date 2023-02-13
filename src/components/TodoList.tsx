import { ITodo } from "../types/data"
import { TodoItem } from "./TodoItem"

interface TodoListProps {
  todos: ITodo[]
}

export const TodoList: React.FC<TodoListProps> = ({todos}) => {
  
  return (
    <div>
      {
        todos.map((todo, idx) => <TodoItem todo={todo} key={todo.id} />)
      }
    </div>
  )
}
