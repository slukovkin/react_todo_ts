import { ITodo } from "../types/data"
import { TodoItem } from "./TodoItem"

interface TodoListProps {
  tasks: ITodo[]
}

export const TodoList: React.FC<TodoListProps> = ({tasks}) => {
  
  return (
    <div>
      {
        tasks.map((task, idx) => <TodoItem task={task} key={task.id} />)
      }
    </div>
  )
}
