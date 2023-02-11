import cl from './TodoItem.module.css'

const TodoItem: React.FC = () => {
  return (
    <div className={cl.wrapper}>
      <input type="checkbox" className={cl.checked}/>
      <p>Новая задача</p>
      <span className={cl.remove_todo}>X</span>
    </div>
  )
}

export { TodoItem }