import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../redux/slices/todoSlice';
import styles from './TodoItem.module.css'

export default function TodoItem({ todo }) {
    const dispatch = useDispatch();
    return (
        <li className={styles.item}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
           <div className={styles.actions}>
            <button className={styles.button} onClick={() => dispatch(toggleTodo(todo.id))}>{todo.completed ? 'Undo' : 'Complete'}</button>
            <button className={styles.deletebutton}onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            </div>
        </li>
    )
}

