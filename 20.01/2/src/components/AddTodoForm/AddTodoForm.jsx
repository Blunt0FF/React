import { useContext, useState } from "react"
import TodosContext from "../../context/ToDoContext"
import styles from './AddTodoForm.module.css'

export default function AddTodoForm() {
    const {handleAddTodo} = useContext(TodosContext)
    const [ newTask, setNewTask ] = useState('')

    function handleTaskModify(e) {
        setNewTask(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        handleAddTodo(newTask)
        setNewTask('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className={styles.input} type="text" value={newTask} onChange={handleTaskModify}/>
            <button className={styles.button}>Add</button>
        </form>
    )
}