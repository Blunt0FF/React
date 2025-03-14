import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/slices/todoSlice'
import { useState } from 'react';
import styles from './TodoForm.module.css'

export default function TodoForm() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()){
        dispatch(addTodo({
            id: Date.now(),
            text:text,
            completed:false
        }))
        setText('')
        }
    }
  return (
    <div className={styles.container}>
    <form className={styles.form} onSubmit={handleSubmit}>
        <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Enter new todo'
        className={styles.input}/>
        <button className={styles.button} type='submit'>
            Add Todo
        </button>
    </form>
    </div>
  )
}
