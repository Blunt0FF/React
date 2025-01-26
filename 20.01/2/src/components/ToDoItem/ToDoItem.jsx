import { useContext } from "react";
import TodosContext from "../../context/ToDoContext";
import styles from './ToDoItem.module.css'

export default function ToDoItem({todo}) {
    const {handleDelete, handleChange} = useContext(TodosContext)
    return <li className={styles.li} onClick={() => handleChange(todo.id)}>
        <h4 style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.title}</h4>
        <button className={styles.button} onClick={() => handleDelete(todo.id)}>Delete</button>
    </li>
}