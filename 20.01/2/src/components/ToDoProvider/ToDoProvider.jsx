import { useEffect, useState } from 'react'
import TodosContext from '../../context/ToDoContext.js'
import axios from 'axios'

export default function TodosProvider({ children }) {
    const [todos, setTodos] = useState([])

    async function fetchTodos() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setTodos(res.data)
    }

    useEffect(() => {
        fetchTodos()
    }, []);

    function handleDelete(id) {
        setTodos(prevTodos => prevTodos.filter(task => task.id !== id))   
    }

    function handleAddTodo(newTitle) {
        // setTodos(prevTodos => [...prevTodos, newTodo])
        const newTodo = {
            id: Date.now(),
            title: newTitle,
            completed: false
        }
        setTodos(prevTodos => {
            return [newTodo, ...prevTodos]
        })
    }

    function handleChange(id) {
        //1. найти нашу туду по айди в тудус
        //2. поменять статус комплитед на противолопожный
        setTodos(prevTodos => prevTodos.map(todo => 
            (todo.id === id) 
            ? {...todo, completed: !todo.completed}
            : todo
        ))
        console.log('CLICKED');
        
    }

    
    return <TodosContext.Provider value={{todos, handleDelete, handleAddTodo, handleChange}}>{children}</TodosContext.Provider>
}
// todo example
/* const obj = {
    id: 1,
    title: 'title',
    completed: true
} */