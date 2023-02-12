import { TodoItem } from "./TodoItem"

interface TodoListProps {
  tasks: string[]
}

export const TodoList: React.FC<TodoListProps> = ({tasks}) => {
  return (
    <div>
      {
        tasks.map((task, idx) => <TodoItem task={task} key={idx} />)
      }
    </div>
  )
}