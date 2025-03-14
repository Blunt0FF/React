import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import styles from './TodoList.module.css'

export default function TodoList() {
    const todos = useSelector((state) => state.todos)
    if (!todos.length) {
        return <h2 className={styles.empty}>No todos</h2>}
  return (

        <ul className={styles.list}>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>

  )
}
