import cl from '../assets/style/TodoItem.module.css'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';


interface TodoItemProps {
  task: string
}

export const TodoItem: React.FC<TodoItemProps> = ({task}) => {

  const removeTask = () => {
    console.log("OK");
    
  }

  const todo = JSON.parse(task)
  return (
    <div className={cl.container}>
      <input type="checkbox" />
      <h2>{todo.title}</h2>
      <p onClick={removeTask}><HighlightOffOutlinedIcon /></p>
    </div>
  )
}